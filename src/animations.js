export const initializeAnimations = (game) => {
  game.anims.create({
      key: 'dog-idle',
      frames: game.anims.generateFrameNumbers('dog', { start: 0, end: 3 }),
      frameRate: 6,
      repeat: -1,
  });

  game.anims.create({
      key: 'player-walk',
      frames: game.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
      frameRate: 12,
      repeat: -1,
  });

  game.anims.create({
      key: 'player-stand',
      frames: [{ key: 'player', frame: 0 }],
      frameRate: 6,
      repeat: -1,
  });

  game.anims.create({
    key: 'bird-fly',
    frames: game.anims.generateFrameNumbers('bird-1', { start: 0, end: 5 }),
    frameRate: 12,
    repeat: -1,
  })
}