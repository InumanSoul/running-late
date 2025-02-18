export const createBackgroundLayers = (game) => {
  game.bgLayer1 = game.add.tileSprite(0, 0, 2000, 256, 'layer-1')
      .setOrigin(0, 0)
      .setScale(2)
      .setTileScale(2);

  game.bgLayer2 = game.add.tileSprite(0, 20, 2000, 256, 'layer-2')
      .setOrigin(0, 0)
      .setScale(1)
      .setTileScale(1.5);

  game.bgLayer3 = game.add.tileSprite(0, 70, 2000, 256, 'layer-3')
      .setOrigin(0, 0)
      .setScale(1.8)
      .setTileScale(1.8);

  game.bgLayer4 = game.add.tileSprite(0, 150, 2000, 256, 'layer-4')
      .setOrigin(0, 0)
      .setScale(2);

  game.bgLayer5 = game.add.tileSprite(0, 190, 2000, 256, 'layer-5')
      .setOrigin(0, 0)
      .setScale(2);
  
  game.bgLayer7 = game.add.tileSprite(0, 240, 2000, 256, 'layer-7')
      .setOrigin(0, 0)
      .setScale(1.25)
      .setTileScale(1.25);

  game.bgLayer9 = game.add.tileSprite(0, 292, 2000, 256, 'layer-9')
      .setOrigin(0, 0)
      .setScale(1)
      .setTileScale(1);
}