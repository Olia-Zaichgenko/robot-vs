import { Scene } from 'phaser';
import f1 from '../../assets/img/finish/1.jpg';
import f2 from '../../assets/img/finish/2.jpg';
import f3 from '../../assets/img/finish/3.jpg';
import f4 from '../../assets/img/finish/4.jpg';
import f5 from '../../assets/img/finish/5.jpg';

const images = import.meta.glob('../../assets/img/*.png', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

const path = '../../assets/img/';
const img = (name: string) => images[`${path}${name}`];

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {

    }

    preload ()
    {
        this.load.image('background', img('bg.png'));
        this.load.image('finish', img('finish.png'));
        this.load.image('delete', img('delete.png'));

        this.load.image('robot', img('robot-up.png'));
        this.load.image('robot_left', img('robot-left.png'));
        this.load.image('robot_right', img('robot-right.png'));
        this.load.image('robot_down', img('robot-down.png'));
        this.load.image('robot_stay_left', img('robot_stay_left.png'));
        this.load.image('robot_stay_right', img('robot_stay_right.png'));

        this.load.image('finish_img1', f1);
        this.load.image('finish_img2', f2);
        this.load.image('finish_img3', f3);
        this.load.image('finish_img4', f4);
        this.load.image('finish_img5', f5);
    }

    create ()
    {
        let startGame =  true;
        this.scene.start('Game_Level1', {startGame});
    }
}
