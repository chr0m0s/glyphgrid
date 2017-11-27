// @title glyphGrid
// @description creates a poetic, type based animation on html5 canvas
// @author Matthias Jäger

// @libraries
// http://p5js.org/

// @fontface Cousine Regular by Steve Matteson
// https://fonts.google.com/specimen/Cousine


// Main Application
// _______________________________________________________________________________________ //

// Game control
let startGame = false;
let gameTime = 0;

// UI DOM Elements
let stat, modal, input, button, message, canvas;

// Design Assets
let font;

// Game Objects
let glyphs = [];

// P5 preload
function preload() {
  font = loadFont('fonts/Cousine-Regular.ttf');
}

// P5 setup
function setup() {
   // interface.js
   createInterface();
   // store canvas
   canvas = createCanvas(windowWidth, windowHeight);
   // clear background
   background(200);
   // set global stroke style
   stroke(0,0,0,20);
   noFill();
}

// P5 draw
// continous animation loop
function draw() {
   // wait for input
   if(startGame) {
      // everything is moving
      //translate(0, gameTime * 0.1);
      // animate glyphs
      // glyph.js
      for(let i = 0; i < glyphs.length; i++) {
         glyphs[i].animate();
      }
   // move forward in time
   gameTime++;
  }
}

// _______________________________________________________________________________________ //
