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
   // letter, cellx, celly, x, y
   constructor(letter, cellx, celly, x, y) {
      // empty list to store particles
      this.particles = [];

      // analyze letter with P5 font
      this.points = font.textToPoints( letter, 0, 0, celly, { sampleFactor: 0.25 });

      // add particles for each point
      for (let i = 0; i < this.points.length; i++) {
         // baseline offset
         let px = this.points[i].x  + x + cellx * 0.2; //+ _xscale * 0.3;
         let py = this.points[i].y + y + celly / 1.2; // + _yscale * 0.8;
         this.particles[i] = createVector(px, py);
      }
   }
   animate() {
      // for each of the particles
      for (let i = 0; i < this.particles.length; i++) {

         // create a random velocity
         this.vel = p5.Vector.random2D();
         this.vel.mult(0.3);

         // add it to the position
         this.particles[i].add(this.vel);

         // and draw a single point
         point(this.particles[i].x,this.particles[i].y);
      }
   }
}
