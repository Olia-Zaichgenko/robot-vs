import {Boot} from './scenes/Boot';
import {Game_Level1} from './scenes/Game_Level1.tsx';
import {Game_Level2} from "./scenes/Game_Level2.ts";
import {Game_Level3} from "./scenes/Game_Level3.ts";
import {Game} from 'phaser';
import {Preloader} from './scenes/Preloader';
import {ModalScene} from "./scenes/ModalScene.ts";
import {Game_Level4} from "./scenes/Game_Level4.ts";
import {Game_Level5} from "./scenes/Game_Level5.ts";


const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1880,
    height: 920,
    backgroundColor: 0x3e3e40,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        Boot,
        Preloader,
        Game_Level1,
        Game_Level2,
        Game_Level3,
        Game_Level4,
        Game_Level5,
        ModalScene,
    ]
};

const StartGame = (parent: string) => {

    return new Game({ ...config, parent });

}

export default StartGame;
