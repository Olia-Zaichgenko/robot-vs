import { PremiumRobotScene } from './PremiumRobotScene';

export class Game_Level5 extends PremiumRobotScene {
  constructor() {
    super(
        {
            key: 'Game_Level5',
            number: 5,
            reward: 'finish_img5',
            start: [302, 522],
            finish: [574, 246],
            direction: 'down',
            robotScale: 1.0,
            tolerance: 28,
            rotate: true,
            maxCommands: 13,
            finalEvent: true
        });
  }
}
