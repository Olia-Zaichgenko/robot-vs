import {GameObjects, Scene} from 'phaser';

import {EventBus} from '../EventBus';

export class ModalScene extends Scene
{
    title: GameObjects.Text;
    modalBackground: GameObjects.Graphics;
    description: GameObjects.Text;
    backgroundMainMenu: GameObjects.Graphics;
    finishImg: GameObjects.Image;
    private message: string;
    private check: boolean;
    private thisScene: string;
    private sceneNext: string;

    constructor ()
    {
        super('ModalScene');
    }

    init(data: any) {
        this.message = data.message;
        this.check = data.check;
        this.thisScene = data.thisScene;
        this.sceneNext = data.sceneNext;
    }

    create() {
        this.backgroundMainMenu = this.add.graphics();
        this.backgroundMainMenu.fillStyle(0x000000, 0.8);
        this.backgroundMainMenu.fillRect(0, 0 , this.sys.game.config.width as number, this.sys.game.config.height as number)
        // Create the backgroundModal for the modal window
        this.modalBackground = this.add.graphics();
        this.modalBackground.fillStyle(0xFFFFFF);
        this.modalBackground.fillRoundedRect(this.sys.game.config.width as number / 2 - 435, 200, 870, 440, 100);

        if (this.check){
            // Create the title text
            this.title = this.add.text(this.sys.game.config.width as number / 2, 50, 'Уровень пройден!', {
                fontFamily: 'Montserrat',
                fontSize: 36,
                color: '#000000',
                align: 'center',
            }).setOrigin(0.5, 0.5);

            // Create the description text
            this.finishImg = this.add.image(this.sys.game.config.width as number / 2, this.sys.game.config.height as number / 2 - 50, this.message)
                .setOrigin(0.5, 0.5);

            var radiusModal = 10; // Радиус закругления углов
            var widthModal = 350; // Ширина прямоугольника
            var heightModal = 66; // Высота прямоугольника
            var borderWidth = 2; // Ширина границы
            var borderColor = 0x00efa6; // Цвет границы
            var fillColor = 0x00efa6; // Цвет заливки по умолчанию
            var textColor = '#ffffff'; // Цвет текста по умолчанию

            // Создаем текстовый объект
            var text = this.add.text(0, 0, 'Следующий уровень', {
                fontSize: '28px',
                color: textColor,
                fontFamily: 'Montserrat',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            // Создаем контейнер для текста и фона
            var button = this.add.container(this.sys.game.config.width as number / 2, 830, [text]);

            // Создаем графический объект для фона кнопки
            var backgroundModal = this.add.graphics();
            backgroundModal.lineStyle(borderWidth, borderColor, 1);
            backgroundModal.fillStyle(fillColor, 1); // Устанавливаем цвет фона
            backgroundModal.fillRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal); // Рисуем закругленный прямоугольник
            backgroundModal.strokeRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal); // Рисуем границу
            button.addAt(backgroundModal, 0); // Добавляем фон в контейнер

            // Добавляем интерактивность к контейнеру
            button.setSize(widthModal, heightModal);
            button.setInteractive({ useHandCursor: true });

            // Функция обновления фона и текста
            const updateButtonStyle = (bgColor: number, txtColor: string) => {
                backgroundModal.clear();
                backgroundModal.lineStyle(borderWidth, borderColor, 1);
                backgroundModal.fillStyle(bgColor, 1);
                backgroundModal.fillRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal);
                backgroundModal.strokeRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal);
                text.setColor(txtColor);
            };

            // Добавляем обработчики событий для взаимодействия с кнопкой
            button.on('pointerover', () => {
                updateButtonStyle(0xffffff, '#00ff99'); // Белый фон и красный текст при наведении
            });

            button.on('pointerout', () => {
                updateButtonStyle(0x00ff99, '#ffffff'); // Возвращаем оригинальные цвета
            });

            button.on('pointerdown', () => {
                updateButtonStyle(0xffffff, '#00efa6'); // Белый фон и красный текст при нажатии
                // Действие при нажатии на кнопку
                this.changeScene(this.sceneNext, this.sceneNext);
            });

            button.on('pointerup', () => {
                updateButtonStyle(0xffffff, '#00ff99'); // Белый фон и красный текст при отпускании
            });

        }else {

            // Create the title text
            this.title = this.add.text(this.sys.game.config.width as number / 2 - 85, 250, 'Ошибка', {
                fontFamily: 'Montserrat',
                fontStyle: 'bold',
                fontSize: 36,
                color: '#000000',
                align: 'center',
            });

            // Create the description text
            this.description = this.add.text(this.sys.game.config.width as number / 2 - 310, 400, 'В коде допущена ошибка. Попробуйте еще раз.', {
                fontFamily: 'Montserrat',
                fontSize: 26,
                color: '#000000',
                align: 'center',
            });

            var radiusModal = 10; // Радиус закругления углов
            var widthModal = 320; // Ширина прямоугольника
            var heightModal = 66; // Высота прямоугольника
            var borderWidth = 2; // Ширина границы
            var borderColor = 0xf7005b; // Цвет границы
            var fillColor = 0xf7005b; // Цвет заливки по умолчанию
            var textColor = '#ffffff'; // Цвет текста по умолчанию

            // Создаем текстовый объект
            var text = this.add.text(0, 0, 'Начать сначала', {
                fontSize: '28px',
                color: textColor,
                fontFamily: 'Montserrat',
                fontStyle: 'bold'
            }).setOrigin(0.5);

            // Создаем контейнер для текста и фона
            var button = this.add.container(this.sys.game.config.width as number / 2, 560, [text]);

            // Создаем графический объект для фона кнопки
            var backgroundModal = this.add.graphics();
            backgroundModal.lineStyle(borderWidth, borderColor, 1);
            backgroundModal.fillStyle(fillColor, 1); // Устанавливаем цвет фона
            backgroundModal.fillRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal); // Рисуем закругленный прямоугольник
            backgroundModal.strokeRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal); // Рисуем границу
            button.addAt(backgroundModal, 0); // Добавляем фон в контейнер

            // Добавляем интерактивность к контейнеру
            button.setSize(widthModal, heightModal);
            button.setInteractive({ useHandCursor: true });

            // Функция обновления фона и текста
            const updateButtonStyle = (bgColor: number, txtColor: string) => {
                backgroundModal.clear();
                backgroundModal.lineStyle(borderWidth, borderColor, 1);
                backgroundModal.fillStyle(bgColor, 1);
                backgroundModal.fillRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal);
                backgroundModal.strokeRoundedRect(-widthModal / 2, -heightModal / 2, widthModal, heightModal, radiusModal);
                text.setColor(txtColor);
            };

            // Добавляем обработчики событий для взаимодействия с кнопкой
            button.on('pointerover', () => {
                updateButtonStyle(0xffffff, '#f7005b'); // Белый фон и красный текст при наведении
            });

            button.on('pointerout', () => {
                updateButtonStyle(0xf7005b, '#ffffff'); // Возвращаем оригинальные цвета
            });

            button.on('pointerdown', () => {
                updateButtonStyle(0xffffff, '#f7005b'); // Белый фон и красный текст при нажатии
                // Действие при нажатии на кнопку
                this.scene.start(this.thisScene)
            });

            button.on('pointerup', () => {
                updateButtonStyle(0xffffff, '#f7005b'); // Белый фон и красный текст при отпускании
            });


        }
        EventBus.emit('current-scene-ready', this);
    }
    changeScene(nextScene: string, thisScene: string) {
        const sceneToRemove = this.scene.get(thisScene);

        if (sceneToRemove) {
            this.scene.remove(thisScene);
        }

        this.scene.start(nextScene);
    }
}
