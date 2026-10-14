import { PremiumRobotScene } from './PremiumRobotScene';

export class Game_Level1 extends PremiumRobotScene {
    constructor() {
        super({
            key: 'Game_Level1',
            number: 1,
            next: 'Game_Level2',
            reward: 'finish_img1',
            start: [287, 367],
            finish: [507, 387],
            direction: 'right',
            robotScale: 1.6,
            tolerance: 35,
            rotate: false,
        });
    }
}
