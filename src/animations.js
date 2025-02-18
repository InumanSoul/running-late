export const createAnimations = (game) => {
  game.anims.create({
    key: 'character-walk',
    frames: game.anims.generateFrameNumbers(
      'character',
      { start: 1, end: 3 }
    ),
    frameRate: 12,
    repeat: -1
  })
}