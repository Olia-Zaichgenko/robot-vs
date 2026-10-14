import { PremiumRobotScene } from './PremiumRobotScene';

export class Game_Level2 extends PremiumRobotScene {
    constructor() {
        super({
            key: 'Game_Level2',
            number: 2,
            next: 'Game_Level3',
            reward: 'finish_img2',
            start: [442, 242],
            finish: [442, 527],
            direction: 'down',
            robotScale: 1.0,
            tolerance: 35,
            rotate: true,
            backgroundKey: 'background',
            finishKey: 'finish',
        });
    }
}
