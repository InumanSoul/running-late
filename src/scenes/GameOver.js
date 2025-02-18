import { Scene } from 'phaser';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x000000);

        this.add.text(512/2, 200, 'Game Over', {
            fontFamily: 'PixeloidMono', fontSize: 32, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(512/2, 240, `You're fired!`, {
            fontFamily: 'PixeloidMono', fontSize: 18, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        this.restartText = this.add.text(512/2, 290, 'Click to restart', {
            fontFamily: 'PixeloidMono', fontSize: 10, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.start('MainMenu');
        });

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}
