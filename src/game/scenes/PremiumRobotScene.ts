import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

type Direction = 'up' | 'right' | 'down' | 'left';
type TurnDirection = 'right' | 'left';

interface ButtonOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
    fill: number;
    textColor: string;
    hoverFill: number;
    hoverText: string;
    border?: number;
    fontSize?: string;
    radius?: number;
    onClick: () => void;
}

export interface PremiumRobotSceneConfig {
    key: string;
    number: number;
    next?: string;
    reward: string;
    start: [number, number];
    finish: [number, number];
    direction: Direction;
    robotScale?: number;
    tolerance?: number;
    maxCommands?: number;
    rotate?: boolean;
    backgroundKey?: string;
    finishKey?: string;
    field?: { x: number; y: number; width: number; height: number; cellSize: number };
    finalEvent?: boolean,
}

const PALETTE = {
    ink: '#30291d',
    gold: 0xb98732,
    goldLight: 0xe6bd62,
    goldLine: 0xd6a84f,
    cream: 0xfff8e9,
    white: 0xffffff,
    red: 0xc94c4c,
    redLight: 0xffeeee,
};

export class PremiumRobotScene extends Scene {
    private cellSize = 70;
    private fieldX = 97;
    private fieldY = 137;
    private fieldWidth = 560;
    private fieldHeight = 560;

    private readonly robotFitFactor: number;
    private readonly maxCommands: number;
    private readonly config: PremiumRobotSceneConfig;

    private robot!: Phaser.Physics.Arcade.Sprite;
    private commandTextContainer!: Phaser.GameObjects.Container;
    private finishX = 0;
    private finishY = 0;

    private moveQueue: string[] = [];
    private currentDirection: Direction = 'down';
    private isExecuting = false;

    private robotButton!: Phaser.GameObjects.Container;
    private startButton!: Phaser.GameObjects.Container;
    private moveButton?: Phaser.GameObjects.Container;
    private rotateButton?: Phaser.GameObjects.Container;
    private turnRightButton?: Phaser.GameObjects.Container;
    private turnLeftButton?: Phaser.GameObjects.Container;
    private stepButtons: Phaser.GameObjects.Container[] = [];

    private currentX = 0;
    private currentY = 0;
    private commandTextMatrix: Phaser.GameObjects.Container[] = [];
    private limitTaskText?: Phaser.GameObjects.Text;
    private modalObjects: Phaser.GameObjects.GameObject[] = [];
    private resultShown = false;

    startGame = false;

    constructor(config: PremiumRobotSceneConfig) {
        super({ key: config.key });
        this.config = config;
        this.robotFitFactor = config.robotScale ?? 1;
        this.maxCommands = config.maxCommands ?? 13;

        this.cellSize = config.field?.cellSize ?? 70;
        this.fieldX = config.field?.x ?? 97;
        this.fieldY = config.field?.y ?? 137;
        this.fieldWidth = config.field?.width ?? 560;
        this.fieldHeight = config.field?.height ?? 560;
    }

    init(data: { startGame?: boolean }) {
        this.startGame = Boolean(data?.startGame);
    }

    create() {
        this.resetState();

        this.add.image(0, 0, this.config.backgroundKey ?? 'background')
            .setOrigin(0, 0)
            .setDisplaySize(950, this.scale.height);

        [this.finishX, this.finishY] = this.config.finish;
        this.add.image(this.finishX, this.finishY, this.config.finishKey ?? 'finish')
            .setOrigin(0.5)
            .setDisplaySize(this.cellSize, this.cellSize)
            .setDepth(2);

        const [startX, startY] = this.config.start;
        this.robot = this.physics.add.sprite(
            startX,
            startY,
            this.getStayTexture(this.config.direction),
        );
        this.robot.setOrigin(0.5, 0.7);
        this.setRobotTexture(this.getStayTexture(this.config.direction));
        this.robot.setDepth(3);

        this.physics.world.setBounds(
            this.fieldX,
            this.fieldY,
            this.fieldWidth,
            this.fieldHeight,
        );
        this.robot.setCollideWorldBounds(true);

        this.createAnimations();
        this.createHeader();
        this.createCommandPanel();
        this.createMainButtons();

        EventBus.emit('current-scene-ready', this);
    }

    private resetState() {
        this.moveQueue = [];
        this.commandTextMatrix = [];
        this.stepButtons = [];
        this.modalObjects = [];
        this.currentDirection = this.config.direction;
        this.currentX = 0;
        this.currentY = 0;
        this.isExecuting = false;
        this.resultShown = false;
        this.limitTaskText = undefined;
        this.moveButton = undefined;
        this.rotateButton = undefined;
        this.turnRightButton = undefined;
        this.turnLeftButton = undefined;
    }

    private createAnimations() {
        const animations: Array<{ key: Direction; texture: string }> = [
            { key: 'up', texture: 'robot' },
            { key: 'right', texture: 'robot_right' },
            { key: 'down', texture: 'robot_down' },
            { key: 'left', texture: 'robot_left' },
        ];

        for (const { key, texture } of animations) {
            if (!this.anims.exists(key) && this.textures.exists(texture)) {
                this.anims.create({
                    key,
                    frames: [{ key: texture, frame: 0 }],
                    frameRate: 10,
                    repeat: 0,
                });
            }
        }
    }

    private setRobotTexture(key: string) {
        if (!this.textures.exists(key)) return;
        this.robot.setTexture(key);
        const frame = this.robot.frame;
        const longestSide = Math.max(frame.width, frame.height);
        if (longestSide > 0) {
            this.robot.setScale((this.cellSize * this.robotFitFactor) / longestSide);
        }
        this.robot.setOrigin(0.5, 0.7);
    }

    private getMoveTexture(direction: Direction): string {
        const textures: Record<Direction, string> = {
            up: 'robot',
            right: 'robot_right',
            down: 'robot_down',
            left: 'robot_left',
        };
        return textures[direction];
    }

    private getStayTexture(direction: Direction): string {
        const textures: Record<Direction, string> = {
            up: 'robot',
            right: 'robot_stay_right',
            down: 'robot_down',
            left: 'robot_stay_left',
        };
        const texture = textures[direction];
        return this.textures.exists(texture) ? texture : this.getMoveTexture(direction);
    }

    private createHeader() {
        const gameWidth = this.scale.width;
        const x = gameWidth / 2 + 50;
        const panel = this.add.graphics().setDepth(5);
        panel.fillStyle(PALETTE.cream, 0.98);
        panel.fillRoundedRect(x, 20, 850, 100, 15);
        panel.lineStyle(2, PALETTE.goldLine, 1);
        panel.strokeRoundedRect(x, 20, 850, 100, 15);

        this.add.text(
            x + 425,
            43,
            'Проложите маршрут к финишу.\nИспользуйте команды движения и поворота.',
            {
                fontFamily: 'Montserrat',
                fontSize: '24px',
                color: PALETTE.ink,
                align: 'center',
                lineSpacing: 7,
                wordWrap: { width: 790 },
            },
        ).setOrigin(0.5, 0).setDepth(6);
    }

    private createCommandPanel() {
        this.commandTextContainer = this.add.container(1000, 150);
    }

    private createMainButtons() {
        const gameWidth = this.scale.width;

        this.robotButton = this.createButton({
            x: gameWidth / 2 + 120,
            y: 870,
            width: 140,
            height: 45,
            label: 'Robot',
            fill: PALETTE.gold,
            textColor: '#ffffff',
            hoverFill: PALETTE.white,
            hoverText: '#8b641f',
            border: PALETTE.gold,
            onClick: () => this.showMoveButtons(),
        });

        this.startButton = this.createButton({
            x: gameWidth - 130,
            y: 870,
            width: 200,
            height: 45,
            label: 'Запустить',
            fill: PALETTE.goldLight,
            textColor: '#3b3428',
            hoverFill: 0x3b3428,
            hoverText: '#ffffff',
            onClick: () => this.startMoveTasks(),
        });
    }

    private createButton(options: ButtonOptions): Phaser.GameObjects.Container {
        const radius = options.radius ?? 10;
        const border = options.border ?? PALETTE.goldLine;
        const label = this.add.text(0, 0, options.label, {
            fontSize: options.fontSize ?? '24px',
            color: options.textColor,
            fontFamily: 'Montserrat',
            fontStyle: 'bold',
        }).setOrigin(0.5);

        const container = this.add.container(options.x, options.y, [label]);
        const background = this.add.graphics();

        const draw = (fill: number, textColor: string) => {
            background.clear();
            background.lineStyle(2, border, 1);
            background.fillStyle(fill, 1);
            background.fillRoundedRect(
                -options.width / 2,
                -options.height / 2,
                options.width,
                options.height,
                radius,
            );
            background.strokeRoundedRect(
                -options.width / 2,
                -options.height / 2,
                options.width,
                options.height,
                radius,
            );
            label.setColor(textColor);
        };

        draw(options.fill, options.textColor);
        container.addAt(background, 0);
        container.setSize(options.width, options.height);
        container.setInteractive({ useHandCursor: true });

        container.on('pointerover', () => draw(options.hoverFill, options.hoverText));
        container.on('pointerout', () => draw(options.fill, options.textColor));
        container.on('pointerdown', () => {
            draw(options.hoverFill, options.hoverText);
            options.onClick();
        });
        container.on('pointerup', () => draw(options.hoverFill, options.hoverText));
        return container;
    }

    private showMoveButtons() {
        if (!this.robotButton?.active || this.moveButton?.active || this.isExecuting) return;
        this.robotButton.disableInteractive();

        const centerX = this.scale.width / 2;
        this.moveButton = this.createButton({
            x: centerX + 114,
            y: 790,
            width: 130,
            height: 45,
            label: 'Move',
            fill: PALETTE.gold,
            textColor: '#ffffff',
            hoverFill: PALETTE.white,
            hoverText: '#8b641f',
            onClick: () => {
                this.showStepButtons();
                this.disableCommandButtons();
            },
        });

        if (this.config.rotate !== false) {
            this.rotateButton = this.createButton({
                x: centerX + 270,
                y: 790,
                width: 130,
                height: 45,
                label: 'Rotate',
                fill: PALETTE.gold,
                textColor: '#ffffff',
                hoverFill: PALETTE.white,
                hoverText: '#8b641f',
                onClick: () => {
                    this.showRotateButtons();
                    this.disableCommandButtons();
                },
            });
        }

        this.tweens.add({
            targets: [this.moveButton, this.rotateButton].filter(Boolean),
            alpha: { from: 0, to: 1 },
            duration: 250,
        });
        this.addCommandText('Robot.', '#b98732', true);
    }

    private showStepButtons() {
        this.addCommandText('move ', '#8b641f');
        const buttonWidth = 40;
        const spacing = 10;
        const startX = this.scale.width / 2 + 74;

        for (let steps = 1; steps <= 6; steps++) {
            const button = this.createButton({
                x: startX + (steps - 1) * (buttonWidth + spacing),
                y: 710,
                width: buttonWidth,
                height: 45,
                label: String(steps),
                fill: PALETTE.goldLine,
                textColor: '#ffffff',
                hoverFill: PALETTE.white,
                hoverText: '#8b641f',
                onClick: () => {
                    this.addMoveTask(`forward ${steps}`);
                    this.addCommandText(String(steps), '#8b641f');
                    this.hideStepButtons();
                    this.hideMoveButtons();
                    this.resetRobotButton();
                },
            });
            this.stepButtons.push(button);
            this.tweens.add({
                targets: button,
                alpha: { from: 0, to: 1 },
                duration: 250,
                delay: steps * 50,
            });
        }
    }

    private showRotateButtons() {
        this.addCommandText('rotate ', '#8b641f');

        const finishRotate = (direction: TurnDirection) => {
            this.addMoveTask(direction);
            this.addCommandText(`${direction} `, '#8b641f');
            this.hideRotateButtons();
            this.hideMoveButtons();
            this.hideStepButtons();
            this.resetRobotButton();
        };

        this.turnRightButton = this.createButton({
            x: this.scale.width / 2 + 426,
            y: 710,
            width: 130,
            height: 45,
            label: 'Right',
            fill: PALETTE.goldLine,
            textColor: '#ffffff',
            hoverFill: PALETTE.white,
            hoverText: '#8b641f',
            onClick: () => finishRotate('right'),
        });

        this.turnLeftButton = this.createButton({
            x: this.scale.width / 2 + 270,
            y: 710,
            width: 130,
            height: 45,
            label: 'Left',
            fill: PALETTE.goldLine,
            textColor: '#ffffff',
            hoverFill: PALETTE.white,
            hoverText: '#8b641f',
            onClick: () => finishRotate('left'),
        });
    }

    private disableCommandButtons() {
        this.moveButton?.disableInteractive();
        this.rotateButton?.disableInteractive();
    }

    private resetRobotButton() {
        if (this.robotButton?.active) this.robotButton.setInteractive({ useHandCursor: true });
    }

    private hideMoveButtons() {
        this.moveButton?.destroy();
        this.rotateButton?.destroy();
        this.moveButton = undefined;
        this.rotateButton = undefined;
    }

    private hideRotateButtons() {
        this.turnRightButton?.destroy();
        this.turnLeftButton?.destroy();
        this.turnRightButton = undefined;
        this.turnLeftButton = undefined;
    }

    private hideStepButtons() {
        this.stepButtons.forEach(button => button.destroy());
        this.stepButtons = [];
    }

    private addMoveTask(action: string) {
        if (this.moveQueue.length >= this.maxCommands) return;
        this.moveQueue.push(action);
    }

    private startMoveTasks() {
        if (this.isExecuting || this.resultShown) return;
        if (this.moveQueue.length === 0) {
            this.showNotice('Сначала добавьте команды для робота.');
            return;
        }

        this.isExecuting = true;
        this.startButton.disableInteractive();
        this.robotButton.disableInteractive();
        this.hideMoveButtons();
        this.hideRotateButtons();
        this.hideStepButtons();
        this.executeMoveTask();
    }

    private executeMoveTask() {
        if (this.resultShown) return;

        if (this.moveQueue.length === 0) {
            this.isExecuting = false;
            this.checkFinish();
            return;
        }

        const action = this.moveQueue.shift()!;
        const [command, value] = action.split(' ');

        switch (command) {
            case 'forward':
                this.time.delayedCall(150, () => this.moveForward(Number(value)));
                break;
            case 'right':
                this.turnRobot('right');
                break;
            case 'left':
                this.turnRobot('left');
                break;
            default:
                console.warn(`Неизвестная команда: ${action}`);
                this.executeMoveTask();
        }
    }

    private moveForward(steps: number) {
        const deltaByDirection: Record<Direction, { x: number; y: number }> = {
            up: { x: 0, y: -1 },
            right: { x: 1, y: 0 },
            down: { x: 0, y: 1 },
            left: { x: -1, y: 0 },
        };

        const delta = deltaByDirection[this.currentDirection];
        const newX = this.robot.x + delta.x * this.cellSize * steps;
        const newY = this.robot.y + delta.y * this.cellSize * steps;
        this.setRobotTexture(this.getMoveTexture(this.currentDirection));

        const minX = this.fieldX + this.cellSize / 2;
        const maxX = this.fieldX + this.fieldWidth - this.cellSize / 2;
        const minY = this.fieldY + this.cellSize / 2;
        const maxY = this.fieldY + this.fieldHeight - this.cellSize / 2;
        const insideField = newX >= minX && newX <= maxX && newY >= minY && newY <= maxY;

        if (!insideField) {
            this.setRobotTexture(this.getStayTexture(this.currentDirection));
            // Выход за границы считается ошибочным ходом: завершаем программу и показываем результат.
            this.moveQueue = [];
            this.isExecuting = false;
            this.checkFinish();
            return;
        }

        this.tweens.add({
            targets: this.robot,
            x: newX,
            y: newY,
            duration: 450 * steps,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                this.setRobotTexture(this.getStayTexture(this.currentDirection));
                this.executeMoveTask();
            },
        });
    }

    private turnRobot(turn: TurnDirection) {
        const directions: Direction[] = ['up', 'right', 'down', 'left'];
        const currentIndex = directions.indexOf(this.currentDirection);
        const offset = turn === 'right' ? 1 : 3;
        this.currentDirection = directions[(currentIndex + offset) % directions.length];
        this.setRobotTexture(this.getStayTexture(this.currentDirection));
        this.executeMoveTask();
    }

    private addCommandText(text: string, color: string, newLine = false) {
        if (newLine && this.commandTextMatrix.length >= this.maxCommands) {
            if (!this.limitTaskText) {
                this.limitTaskText = this.add.text(
                    this.scale.width - 300,
                    720,
                    'Достигнут лимит команд!',
                    {
                        fontSize: '22px',
                        color: '#d18b00',
                        fontFamily: 'Montserrat',
                        fontStyle: 'bold',
                    },
                ).setOrigin(0.5);
            }
            this.robotButton.disableInteractive();
            this.hideMoveButtons();
            this.hideRotateButtons();
            this.hideStepButtons();
            return;
        }

        if (newLine) {
            const line = this.add.container(0, this.commandTextMatrix.length * 40);
            const command = this.add.text(0, 0, text, {
                fontFamily: 'Montserrat',
                fontSize: '24px',
                color: '#fff',
                align: 'left',
            });

            const deleteButton = this.add.image(800, 12, 'delete')
                .setScale(0.07)
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true });

            deleteButton.on('pointerdown', () => this.deleteTask(line));
            line.add([command, deleteButton]);
            this.commandTextContainer.add(line);
            this.commandTextMatrix.push(line);
            this.currentY = line.y;
            this.currentX = command.width + 10;
            return;
        }

        const command = this.add.text(this.currentX + 80, 0, text, {
            fontFamily: 'Montserrat',
            fontSize: '24px',
            color: '#fff',
            align: 'left',
        });
        this.currentX += command.width + 10;

        const lastLine = this.commandTextMatrix[this.commandTextMatrix.length - 1];
        if (lastLine) lastLine.add(command);
        else this.commandTextContainer.add(command);
    }

    private deleteTask(line: Phaser.GameObjects.Container) {
        if (this.isExecuting || this.resultShown) return;
        const index = this.commandTextMatrix.indexOf(line);
        if (index < 0) return;

        this.commandTextMatrix.splice(index, 1);
        this.moveQueue.splice(index, 1);
        line.destroy();
        this.hideMoveButtons();
        this.hideRotateButtons();
        this.hideStepButtons();
        this.updateCommandPositions();
    }

    private updateCommandPositions() {
        this.commandTextMatrix.forEach((line, index) => {
            line.y = index * 40;
        });
        this.currentY = this.commandTextMatrix.length
            ? this.commandTextMatrix[this.commandTextMatrix.length - 1].y
            : 0;
        this.currentX = 0;
        this.limitTaskText?.destroy();
        this.limitTaskText = undefined;
        this.resetRobotButton();
    }

    private checkFinish() {
        if (this.resultShown) return;
        this.resultShown = true;

        const tolerance = this.config.tolerance ?? this.cellSize / 3;
        const distance = Phaser.Math.Distance.Between(
            this.robot.x,
            this.robot.y,
            this.finishX,
            this.finishY,
        );
        const success = distance < tolerance;

        this.time.delayedCall(500, () => {
        if (this.config.number === 5) {
            EventBus.emit('show-result-card', {
                error: !success,
                title: success ? 'Игра пройдена!' : 'Ошибка',
                text: success
                    ? 'Отличная работа! Вы прошли все уровни.'
                    : 'В коде допущена ошибка. Попробуйте ещё раз.',
                reward: this.config.reward,
                level: this.config.number,
                distance,
                tolerance,
            });
            return;
        }
            this.showModal(tolerance, distance);
        });
    }
    private showModal(tolerance: number, distance: number) {
        const success = distance < tolerance;

        this.time.delayedCall(1000, () => {
            if (!this.scene.isActive()) return;
            this.clearModal();

            const width = this.scale.width;
            const height = this.scale.height;
            const centerX = width / 2;
            const centerY = height / 2;

            const overlay = this.add.rectangle(
                centerX,
                centerY,
                width,
                height,
                0x17130d,
                0.72,
            ).setDepth(100).setInteractive();

            const panel = this.add.graphics().setDepth(101);
            panel.fillStyle(PALETTE.cream, 1);
            panel.fillRoundedRect(centerX - 435, centerY - 220, 870, 440, 28);
            panel.lineStyle(3, PALETTE.goldLine, 1);
            panel.strokeRoundedRect(centerX - 435, centerY - 220, 870, 440, 28);

            this.modalObjects.push(overlay, panel);

            const title = this.add.text(
                centerX,
                centerY - 178,
                success ? 'Уровень пройден!' : 'Ошибка',
                {
                    fontFamily: 'Montserrat',
                    fontSize: '36px',
                    fontStyle: 'bold',
                    color: success ? PALETTE.ink : '#9f3030',
                    align: 'center',
                },
            ).setOrigin(0.5).setDepth(102);
            this.modalObjects.push(title);

            if (success) {
                if (this.textures.exists(this.config.reward)) {
                    const rewardImage = this.add.image(centerX, centerY - 18, this.config.reward)
                        .setOrigin(0.5)
                        .setDepth(102);
                    const maxImageWidth = 900;
                    const maxImageHeight = 600;
                    const scale = Math.min(
                        maxImageWidth / Math.max(1, rewardImage.width),
                        maxImageHeight / Math.max(1, rewardImage.height),
                        1,
                    );
                    rewardImage.setScale(scale);
                    this.modalObjects.push(rewardImage);
                } else {
                    const missingImage = this.add.text(
                        centerX,
                        centerY - 10,
                        `Не найдено изображение: ${this.config.reward}`,
                        {
                            fontFamily: 'Montserrat',
                            fontSize: '18px',
                            color: PALETTE.ink,
                            align: 'center',
                        },
                    ).setOrigin(0.5).setDepth(102);
                    this.modalObjects.push(missingImage);
                }

                const nextButton = this.createModalButton({
                    x: centerX,
                    y: centerY + 300,
                    width: 350,
                    height: 58,
                    label: 'Следующий уровень',
                    fill: PALETTE.gold,
                    hoverFill: PALETTE.white,
                    textColor: '#ffffff',
                    hoverText: '#8b641f',
                    onClick: () => {
                        this.clearModal();
                        this.scene.start(this.config.next);
                    },
                });
                this.modalObjects.push(nextButton);
            } else {
                const description = this.add.text(
                    centerX,
                    centerY - 20,
                    'В коде допущена ошибка.\nПопробуйте ещё раз.',
                    {
                        fontFamily: 'Montserrat',
                        fontSize: '25px',
                        color: PALETTE.ink,
                        align: 'center',
                        lineSpacing: 10,
                    },
                ).setOrigin(0.5).setDepth(102);
                this.modalObjects.push(description);

                const retryButton = this.createModalButton({
                    x: centerX,
                    y: centerY + 115,
                    width: 320,
                    height: 58,
                    label: 'Начать сначала',
                    fill: PALETTE.red,
                    hoverFill: PALETTE.redLight,
                    textColor: '#ffffff',
                    hoverText: '#9f3030',
                    onClick: () => {
                        this.clearModal();
                        this.scene.restart();
                    },
                });
                this.modalObjects.push(retryButton);
            }

            this.children.bringToTop(overlay);
            this.modalObjects.slice(1).forEach(object => this.children.bringToTop(object));
        });
    }

    private createModalButton(options: {
        x: number;
        y: number;
        width: number;
        height: number;
        label: string;
        fill: number;
        hoverFill: number;
        textColor: string;
        hoverText: string;
        onClick: () => void;
    }): Phaser.GameObjects.Container {
        const radius = 12;
        const label = this.add.text(0, 0, options.label, {
            fontFamily: 'Montserrat',
            fontSize: '25px',
            fontStyle: 'bold',
            color: options.textColor,
        }).setOrigin(0.5);

        const button = this.add.container(options.x, options.y, [label]).setDepth(103);
        const graphics = this.add.graphics();

        const draw = (fill: number, textColor: string) => {
            graphics.clear();
            graphics.lineStyle(2, PALETTE.goldLine, 1);
            graphics.fillStyle(fill, 1);
            graphics.fillRoundedRect(
                -options.width / 2,
                -options.height / 2,
                options.width,
                options.height,
                radius,
            );
            graphics.strokeRoundedRect(
                -options.width / 2,
                -options.height / 2,
                options.width,
                options.height,
                radius,
            );
            label.setColor(textColor);
        };

        draw(options.fill, options.textColor);
        button.addAt(graphics, 0);
        button.setSize(options.width, options.height);
        button.setInteractive({ useHandCursor: true });
        button.on('pointerover', () => draw(options.hoverFill, options.hoverText));
        button.on('pointerout', () => draw(options.fill, options.textColor));
        button.on('pointerdown', options.onClick);
        return button;
    }

    private clearModal() {
        this.modalObjects.forEach(object => {
            if (object.active) object.destroy();
        });
        this.modalObjects = [];
    }

    private showNotice(message: string) {
        const notice = this.add.text(this.scale.width - 300, 720, message, {
            fontFamily: 'Montserrat',
            fontSize: '20px',
            color: '#8b641f',
            backgroundColor: '#fff8e9',
            padding: { x: 12, y: 8 },
        }).setOrigin(0.5);

        this.time.delayedCall(2200, () => notice.destroy());
    }
}
