// @title glyphGrid
// @description creates a poetic, type based animation on html5 canvas
// @author Matthias Jäger
// @version 0.1

// @libraries
// p5.js
// p5.dom.js
// http://p5js.org/

// @fontface
// Cousine Regular by Steve Matteson
// https://fonts.google.com/specimen/Cousine


// Game Control
// _______________________________________________________________________________________ //

var startGame = false;
var gameTime = 0;

// UI DOM Elements
var stat, modal, input, button, message, canvas;

// Design Assets
var font;

// Game Objects
var glyphs = [];

// _______________________________________________________________________________________ //

// P5 preload
function preload() {
  font = loadFont('fonts/Cousine-Regular.ttf');
}

// P5 setup
function setup() {
  createInterface();
  canvas = createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0,0,0,20);
}

// P5 draw
// continous animation loop
function draw() {
  if(startGame) {
    translate(0, gameTime * 0.1);
    for(var i = 0; i < glyphs.length; i++) {
      glyphs[i].animate();
    }
    gameTime++;
  }
}

// _______________________________________________________________________________________ //
