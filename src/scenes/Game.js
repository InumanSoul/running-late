import { Scene } from 'phaser';
import { createBackgroundLayers } from '../background';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {   
        createBackgroundLayers(this);
        
        this.dog = this.physics.add.sprite(180, 100, 'dog')
            .setOrigin(0, 0)
            .setCollideWorldBounds(true)
            .setGravityY(500);

        this.mainTheme = this.sound.add('mainTheme', {
            loop: true,
            volume: 0.5
        });

        this.mainTheme.play();

        this.deadFx = this.sound.add('deadFx');
        this.jumpFx = this.sound.add('jumpFx');

        this.floor = this.add.tileSprite(0, 430, 4000, 60, 'floor')
            .setOrigin(0, 0)
            .setScale(0.7);

        this.physics.add.staticGroup(this.floor);

        this.player = this.physics.add.sprite(30, 250, 'player')
            .setOrigin(0, 0)
            .setCollideWorldBounds(true)
            .setGravityY(500);

        this.physics.world.setBounds(0, 0, 2000, 448);
        this.physics.add.collider(this.player, this.floor);
        this.physics.add.collider(this.dog, this.floor);
        this.physics.add.collider(
            this.player,
            this.dog,
            () => {
                this.player.isDead = true;
                this.mainTheme.stop();
                
                setTimeout(() => {
                    this.player.setVelocityY(-200);
                    this.deadFx.play();
                }, 100);

                setTimeout(() => {
                    this.scene.start('GameOver');
                }, 1000);
            }
        );

        this.cameras.main.setBounds(0, 0, 2000, 448);
        this.cameras.main.startFollow(this.player);

        this.anims.create({
            key: 'dog-idle',
            frames: this.anims.generateFrameNumbers(
                'dog',
                { start: 0, end: 3 }
            ),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'player-walk',
            frames: this.anims.generateFrameNumbers(
                'player',
                { start: 4, end: 7 }
            ),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'player-stand',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 6,
            repeat: -1
        });

        this.keys = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        if (this.player.isDead) return;

        if (this.keys.left.isDown)
        {
            this.player.anims.play('player-walk', true);
            this.player.x -= 2;
            this.player.flipX = true;

            this.bgLayer1.tilePositionX -= 0.15;
            this.bgLayer2.tilePositionX -= 0.25;
            this.bgLayer3.tilePositionX -= 0.5;
            this.bgLayer4.tilePositionX -= 0.75;
            this.bgLayer5.tilePositionX -= 1;
            this.bgLayer7.tilePositionX -= 0.5;
            this.bgLayer9.tilePositionX -= 0;
        }
        else if (this.keys.right.isDown)
        {
            this.player.anims.play('player-walk', true);
            this.player.x += 2;
            this.player.flipX = false;

            this.bgLayer1.tilePositionX += 0.15;
            this.bgLayer2.tilePositionX += 0.25;
            this.bgLayer3.tilePositionX += 0.5;
            this.bgLayer4.tilePositionX += 0.75;
            this.bgLayer5.tilePositionX += 1;
            this.bgLayer7.tilePositionX += 0.5;
            this.bgLayer9.tilePositionX += 0;
        }
        else
        {
            this.player.anims.play('player-stand', true);
        }

        if (this.keys.up.isDown && this.player.body.touching.down)
        {
            this.jumpFx.play();
            this.player.setVelocityY(-300);
        }

        if (this.keys.space.isDown)
        {
            if (this.keys.right.isDown)
            {
                this.player.x += 4;
            }
            else if (this.keys.left.isDown)
            {
                this.player.x -= 4;
            }
        }

        if(this.player.y >= 440)
        {   
            this.player.isDead = true;
            this.player.setCollideWorldBounds(false);
            this.mainTheme.stop();
            
            setTimeout(() => {
                this.player.setVelocityY(-200);
                this.deadFx.play();
            }, 100);

            setTimeout(() => {
                this.scene.start('GameOver');
            }, 1000);
        }

        this.dog.anims.play('dog-idle', true);
        this.dog.flipX = true;
    }
}
