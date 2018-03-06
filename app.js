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
let gameTime = 0;

// UI elements
let stat, modal, input, button, message, canvas, font;

// Game objects
let glyphs = [];

function preload() {
  font = loadFont('fonts/Cousine-Regular.ttf');
}

// runs once after preload
function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   background(255);
   stroke(0,0,0,10);
   let userInput = checkUrl(window.location.href);
   createGrid(userInput);
}

function checkUrl(string) {
   let input = '';
   let search = string.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, b, c) {
      input = c;
   });
   return input;
}

function draw() {
   for(let glph of glyphs) {
      glph.animate();
   }
}

function keyPressed() {
   if(key == ' ') {
      saveCanvas(canvas, frameCount + "_glyphs_matthias_jaeger", "jpg");
   }
}
