import { PremiumRobotScene } from './PremiumRobotScene';

export class Game_Level3 extends PremiumRobotScene {
  constructor() {
    super({ key: 'Game_Level3', number: 3, next: 'Game_Level4', reward: 'finish_img3', start: [312, 522], finish: [309, 459], direction: 'right', robotScale: 1.3, tolerance: 28, rotate: true });
  }
}
