// Grid
//

// Select html dom elements 
// _______________________________________________________________________________________ //

function createGrid() {

  // empty the array first
  glyphs = [];

  
  // handle user input
  var inputString = input.value();

  if(inputString.length < 10) {
    var scl = width/inputString.length; 
  } else {
    var scl = width/10; 
  }
  

  var counter = 0;
  for (var y = 0; y < height-scl; y+=scl) {
    for (var x = 0; x < width-scl; x+=scl) {
      // remove special characters
      var letter = inputString.charAt(counter);
      var isLetter = letter.match(/\w/g);
      rect(x,y,scl,scl);
      if(isLetter) {
        glyphs.push( new Glyph(letter, scl, x, y) ); 
      } 
      counter++;
    }
  } 
}



/*
   var rows = floor( width / scale );
  var cols = floor( height / scale );

    
    
    if(counter < elements) {
      
      counter++;
      */



//floor( sqrt( gridarea / elements ) );

/*
  // create grid 
  var counter = 0;
  for (var y = 0; y < height-scale; y += scale) {
    for (var x = 0; x < width-scale; x += scale) {
      var letter = inputString.charAt(counter);
      // remove special characters
      var isLetter = letter.match(/\w/g);

      if (isLetter) {
        glyphs.push( new Glyph(letter, scale, x, y ) ); 
      }

      // do anyways
      counter++;       
    }
  }
*/



//(y + floor(fontSize * 0.8)))
//(x + floor(fontSize * 0.2))
/*

  if(inputString.length < 12) {
    fontSize = floor(width/inputString.length);
  } else {
    fontSize = floor(width/9);
  }
    for (var y = 0; y < height-scale; y += scale) {
    for (var x = 0; x < width-scale; x += scale) {
      var letter = inputString.charAt(counter);
      // remove special characters
      var isLetter = letter.match(/\w/g);

      if (isLetter) {
        glyphs.push( new Glyph(letter, scale, x, y ) ); 
        glyphs.push( new Glyph(letter, scale, (x + floor(scale * 0.2)), (y + floor(scale * 0.8)) ) ); 
      }
      // do anyways
      counter++;       
    }
  }
*/