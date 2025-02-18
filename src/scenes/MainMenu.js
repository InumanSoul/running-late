import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(0, 0, 'menuBg')
            .setScale(1)
            .setOrigin(0, 0);

        let sfx = this.sound.add('menuTheme', { loop: true });
        sfx.play();
        
        this.add.tileSprite(0, 435, 1024, 60, 'floor')
            .setOrigin(0, 0)
            .setScale(0.7);

        this.add.image(256, 150, 'logo')
            .setOrigin(0.5, 0.5)

        this.add.text(256, 400, 'Developed by Anderson Fariña', {
            fontFamily: 'PixeloidMono',
            fontSize: '10px',
            color: '#fff'
        })
            .setOrigin(0.5, 0.5);

        const clickToPlay = document.createElement('div');

        clickToPlay.className = 'px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white cursor-pointer transition-all duration-50 uppercase border-2 border-red-700';
        clickToPlay.innerHTML = `Click or press 'Enter' to play`;

        this.add.dom(120, 250, clickToPlay)
            .setOrigin(0, 0);

        clickToPlay.addEventListener('click', () => {
            sfx.stop();
            this.scene.start('Game');
        });

        this.input.keyboard.on('keydown', (event) => {
            if (event.key === 'Enter') {
                sfx.stop();
                this.scene.start('Game');
            }
        });
    }
}
