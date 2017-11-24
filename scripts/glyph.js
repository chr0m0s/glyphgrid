function Glyph(_glyph, _scale, _xpos, _ypos) {
  this.letter = _glyph;
  this.scale = _scale;

  this.particles = [];
  this.points = font.textToPoints(_glyph, _xpos, _ypos, this.scale, { sampleFactor: 0.25 });
  
  for (var i = 0; i < this.points.length; i++) {
    var px = this.points[i].x;
    var py = this.points[i].y+this.scale;
    this.particles[i] = createVector(px, py);
  }

  this.animate = function() {
    for (var i = 0; i < this.particles.length; i++) {
      this.vel = p5.Vector.random2D();
      this.particles[i].add(this.vel);
      noFill();
      stroke(0,0,0,30);
      point(this.particles[i].x,this.particles[i].y);
    } 
  }
}