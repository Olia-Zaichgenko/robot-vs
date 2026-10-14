import { PremiumRobotScene } from './PremiumRobotScene';

export class Game_Level4 extends PremiumRobotScene {
  constructor() {
    super({ key: 'Game_Level4', number: 4, next: 'Game_Level5', reward: 'finish_img4', start: [587, 522], finish: [237, 247], direction: 'left', robotScale: 1.3, tolerance: 28, rotate: true });
  }
}
