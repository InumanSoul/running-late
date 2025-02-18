import { Scene } from 'phaser';
import { createBackgroundLayers } from '../background';
import { initializeAnimations } from '../animations';

export class Game extends Scene {
	constructor() {
		super('Game');
	}

	create() {
		createBackgroundLayers(this);

		this.deadFx = this.sound.add('deadFx');
		this.jumpFx = this.sound.add('jumpFx');
		this.mainTheme = this.sound.add('mainTheme', {
			loop: true,
			volume: 0.5,
		});

		this.mainTheme.play();

        this.dog = this.physics.add
        .sprite(300, 350, 'dog')
        .setOrigin(0, 0)
        .setCollideWorldBounds(true)
        .setGravityY(500)
        .refreshBody();

		this.floor = this.add
			.tileSprite(0, 430, 4000, 60, 'floor')
			.setOrigin(0, 0)
			.setScale(0.7);

		this.physics.add.staticGroup(this.floor);

        this.bird1 = this.physics.add
            .sprite(600, 265, 'bird-1')
            .setOrigin(0, 0);

		this.player = this.physics.add
			.sprite(30, 270, 'player')
			.setOrigin(0, 0)
			.setScale(1.2)
			.setCollideWorldBounds(true)
			.setGravityY(500);

		this.physics.world.setBounds(0, 0, 2000, 448);
        this.physics.add.collider(this.player, this.bird1, () => this.handlePlayerDeath());
		this.physics.add.collider(this.player, this.floor);
		this.physics.add.collider(this.dog, this.floor);
		this.physics.add.collider(this.player, this.dog, () => this.handlePlayerDeath());

		this.cameras.main.setBounds(0, 0, 2000, 448);
		this.cameras.main.startFollow(this.player);

		initializeAnimations(this);

		this.keys = this.input.keyboard.createCursorKeys();
	}

	update() {
		if (this.player.isDead) return;

		if (this.keys.left.isDown) {
			this.player.anims.play('player-walk', true);
			this.player.x -= 2;
			this.player.flipX = true;

			this.updateBackgroundPosition('left');
		} else if (this.keys.right.isDown) {
			this.player.anims.play('player-walk', true);
			this.player.x += 2;
			this.player.flipX = false;

			this.updateBackgroundPosition('right');
		} else {
			this.player.anims.play('player-stand', true);
		}

		if (this.keys.up.isDown && this.player.body.touching.down) {
			this.jumpFx.play();
			this.player.setVelocityY(-300);
		}

		if (this.keys.space.isDown) {
			if (this.keys.right.isDown) {
				this.player.x += 4;
			} else if (this.keys.left.isDown) {
				this.player.x -= 4;
			}
		}

		if (this.player.y >= 440) {
			this.handlePlayerDeath();
		}

		this.dog.anims.play('dog-idle', true);
		this.dog.flipX = true;

        this.bird1.anims.play('bird-fly', true);
        this.bird1.flipX = true;

        this.bird1.x -= 1.5;
	}

    handlePlayerDeath() {
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

	updateBackgroundPosition(direction) {
		if (direction !== 'left' && direction !== 'right') {
			return;
		}

		const speed = direction === 'left' ? -1 : 1;
		this.bgLayer1.tilePositionX += 0.6 * speed;
		this.bgLayer2.tilePositionX += 0.5 * speed;
		this.bgLayer3.tilePositionX += 0.4 * speed;
		this.bgLayer4.tilePositionX += 0.3 * speed;
		this.bgLayer5.tilePositionX += 0.2 * speed;
		this.bgLayer7.tilePositionX += 0.1 * speed;
		this.bgLayer9.tilePositionX += 0;
	}
}
