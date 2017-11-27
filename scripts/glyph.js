/*
*  This class creates and animates a set of P5.Vector objects
*  sampled from the points of a given glyph.
*
*  @title         glph.js
*  @author        Matthias Jäger
*  @dependencies  app.js, scripts/grid.js
*  @parameters    _glyph, _xscale, _yscale, _xpos, _ypos
*/

class Glyph {
   constructor(_glyph, _xscale, _yscale, _xpos, _ypos) {
      // empty list to store particles
      this.particles = [];

      // analyze letter with P5 font
      this.points = font.textToPoints( _glyph, _xpos, _ypos, _yscale, { sampleFactor: 0.25 });

      // add particles for each point
      for (let i = 0; i < this.points.length; i++) {
         // baseline offset
         let px = this.points[i].x  + _xscale * 0.1;
         let py = this.points[i].y + _yscale * 0.8;
         this.particles[i] = createVector(px, py);
      }
   }
   animate() {
      // for each of the particles
      for (let i = 0; i < this.particles.length; i++) {

         // create a random velocity
         this.vel = p5.Vector.random2D();

         // add it to the position
         this.particles[i].add(this.vel);

         // and draw a single point
         point(this.particles[i].x,this.particles[i].y);
      }
   }
}
