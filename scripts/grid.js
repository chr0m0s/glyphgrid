// Grid
//

// Custom function to create a grid of glyphs
// Thanks: Tobias Kestel
// _______________________________________________________________________________________ //

function createGrid() {

   glyphs = [];

   // handle user input
   var inputString = input.value();
   var elements = inputString.length;

   // kestels calculations
   var calculatedX = width;
   var calculatedY = height;
   var calculatedElements = calculatedX * calculatedY;

   // counters
   var t = 0;
   var c = 1;

   while ( calculatedElements > elements ) {
      calculatedX = floor( width / c + (width/height));
      calculatedY = floor( height / c );
      calculatedElements = calculatedX * calculatedY;
      c = c + 1;
   }
   var xscale = width / calculatedX;
   var yscale = height / calculatedY;

   // render grid
   for(var row = 0; row < calculatedY; row++) {
      for(var col = 0; col < calculatedX; col++) {
         var x = col * xscale;
         var y = row * yscale;

         rect( x, y, xscale, yscale );

         if(t < inputString.length) {
            var letter = inputString.charAt(t);
            var isLetter = letter.match(/\w/g);
            if(isLetter) {
               glyphs.push( new Glyph(letter, xscale, kx + (xscale*0.2), ky) );
            }
            t++;
         }
      }
   }
}







// _______________________________________________________________________________________ //
/*
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
