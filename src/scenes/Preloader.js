import { Scene } from 'phaser';

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
        this.load.image('logo', 'assets/logo.png');

        this.load.spritesheet('dog', 'assets/game/animals/dog-1/Idle.png', {
            frameWidth: 48, frameHeight: 48
        });

        this.load.image('layer-1', 'assets/game/bg/Day/PixelTown_Day_layer01.png');
        this.load.image('layer-2', 'assets/game/bg/Day/PixelTown_Day_layer02.png');
        this.load.image('layer-3', 'assets/game/bg/Day/PixelTown_Day_layer03.png');
        this.load.image('layer-4', 'assets/game/bg/Day/PixelTown_Day_layer04.png');
        this.load.image('layer-5', 'assets/game/bg/Day/PixelTown_Day_layer05.png');
        this.load.image('layer-7', 'assets/game/bg/Day/PixelTown_Day_layer07.png');
        this.load.image('layer-9', 'assets/game/bg/Day/PixelTown_Day_layer09.png');

        this.load.spritesheet('player', 'assets/game/employee.png', {
            frameWidth: 50, frameHeight: 50
        });

        this.load.audio('mainTheme', 'assets/music/game.mp3');
        this.load.audio('jumpFx', 'assets/music/jump.mp3');
        this.load.audio('deadFx', 'assets/music/dead.mp3');
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
