/*
*  glyphGrid
*
*  This program creates a poetic type animation.
*  It arranges user input in an abstract grid on the scren.
*  Each letter is transformed into a set of moving points,
*  tracing images on the canvas, that can also be saved.
*
*  @title         glyphGrid
*  @author        Matthias Jäger
*  @dependencies  scripts/grid.s, scripts/interface.js, scripts/glyph.js
*  @libraries     http://p5js.org/
*  @fontface      https://fonts.google.com/specimen/Cousine
*  @github        https://github.com/matthias-jaeger-net/glyphgrid
*/

// Game control
let startGame = false;
let gameTime = 0;

// UI elements
let stat, modal, input, button, message, canvas, font;

// Game objects
let glyphs = [];

// runs first
function preload() {
  font = loadFont('fonts/Cousine-Regular.ttf');
}

// runs once after preload
function setup() {
   // scripts/interface.js
   createInterface();
   // store canvas
   canvas = createCanvas(windowWidth, windowHeight);
   // clear background
   background(255);
   // set global stroke style
   stroke(0,0,0,20);
   noFill();
}

// runs continously after setup
function draw() {
   if(startGame) {
      // glyph.js
      for(let i = 0; i < glyphs.length; i++) {
         glyphs[i].animate();
      }
   // move forward in time
   gameTime++;
  }
}

// p5 keyPressed event
function keyPressed() {
   if(startGame &&  key == ' ') {
      saveCanvas(canvas, gameTime + "_glyphs_matthias_jaeger", "jpg");
   }
}
