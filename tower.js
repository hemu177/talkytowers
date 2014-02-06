var assets = require('./assets');
var crel = require('crel');
var qsa = require('fdom/qsa');
var tower = module.exports = qsa('.tower')[0];
var levels = tower.levels = [];
var levelHeight = tower.levelHeight = 80;

// calculate the tower bounds
var bounds = tower.getBoundingClientRect();

var background = crel('canvas', {
  width: bounds.width|0,
  height: bounds.height|0
});

// create the canvas
var canvas = tower.canvas = crel('canvas', {
  width: bounds.width | 0,
  height: bounds.height | 0
});

// get the canvas context
var context = tower.context = canvas.getContext('2d');

function drawLevel(ctx, y) {
  var doors = [
    assets.door6,
    assets.door5,
    assets.door3,
    assets.door4
  ];
  var doorHeight = doors[0].height * 2;
  var doorWidth = doors[0].width * 2;

  y -= 0.5;

  ctx.moveTo(0, y);
  ctx.lineTo(background.width, y);
  ctx.stroke();

  doors.forEach(function(door, index) {
    ctx.drawImage(
      door,
      50 + (index * 100),
      y - doorHeight,
      doorWidth,
      doorHeight
    );
  });
}

// context.fillStyle = 'red';
// context.fillRect(0, 0, canvas.width, canvas.height);

// initialise the tower name
tower.id = 'test';

tower.appendChild(background);
tower.appendChild(canvas);

tower.drawBackground = function() {
  var ctx = background.getContext('2d');
  var y = background.height;

  // clear the background
  ctx.clearRect(0, 0, background.width, background.height);

  // draw the levels
  while (y - levelHeight > 0) {
    // draw the level
    drawLevel(ctx, y);

    y -= levelHeight;
  }
};