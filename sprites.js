var Sprite = require('spritey/sprite');
var SPRITE_SCALE = 2;
var spriteLoader = require('spritey/loader')('node_modules/spritey/sprite/' + SPRITE_SCALE, {
  scale: SPRITE_SCALE,
  stance: 'walk_right'
});

exports.stances = [
  'idle_left',
  'idle_right'
];

exports.avatars = [
  require('spritey/sprite/clotharmor.json'),
  require('spritey/sprite/firefox.json')
].map(spriteLoader);

exports.weapons = [
  require('spritey/sprite/sword1.json'),
  require('spritey/sprite/sword2.json')
].map(spriteLoader);