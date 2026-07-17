import GameScene from './scenes/GameScene.js';

const width = 960;
const height = 640;

const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width,
  height,
  backgroundColor: '#102020',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [ GameScene ]
};

window.game = new Phaser.Game(config);
