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
      calculatedX = floor( width / c);
      calculatedY = floor( height / c );
      calculatedElements = calculatedX * calculatedY;
      c = c + 1;
   }
   var xscale = width / calculatedX;
   var yscale = height / calculatedY;

   // render grid
   for(var col = 0; col < calculatedY; col++) {
      for(var row = 0; row < calculatedX; row++) {
         var x = row * xscale;
         var y = col * yscale;

         rect( x, y, xscale, yscale);

         if(t < inputString.length) {
            var letter = inputString.charAt(t);
            var isLetter = letter.match(/\w/g);
            if(isLetter) {
               glyphs.push( new Glyph(letter, xscale, yscale, x, y) );
            }
            t++;
         }
      }
   }
}

// _______________________________________________________________________________________ //
