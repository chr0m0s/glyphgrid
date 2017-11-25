// Glyph
//

// Constructor Class to create a particle system along the path of a single letter.
// @params glyph (string), scale (number), xpos (number), ypos(number)
// _______________________________________________________________________________________ //

function Glyph(_glyph, _xscale, _yscale, _xpos, _ypos) {

   // recive a letter
   this.letter = _glyph;

   // get points for the letter
   this.points = font.textToPoints( _glyph, _xpos, _ypos, _yscale, { sampleFactor: 0.25 });

   // setup praticels
   this.particles = [];

   // loop all points
   for (var i = 0; i < this.points.length; i++) {
      var px = this.points[i].x  + _xscale * 0.2;
      var py = this.points[i].y + _yscale * 0.8;
      this.particles[i] = createVector(px, py);
   }

   // loop particles and animate
   this.animate = function () {
      for (var i = 0; i < this.particles.length; i++) {
         this.vel = p5.Vector.random2D();
         this.particles[i].add(this.vel);
         noFill();
         stroke(0,0,0,30);
         point(this.particles[i].x,this.particles[i].y);
      }
   }
}


// _______________________________________________________________________________________ //
