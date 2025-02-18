import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.font('PixeloidMono', 'assets/fonts/PixeloidMono-d94EV.ttf', 'truetype');
        this.load.image('menuBg', 'assets/mainbg.png');
        this.load.image('floor', 'assets/game/floor.png');
        this.load.audio('menuTheme', 'assets/music/menu.mp3');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
