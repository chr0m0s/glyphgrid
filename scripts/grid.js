/*
*  Creates a grid based on the user input,
*  and the proportions of the screen.
*
*  @title         grid.js
*  @author        Matthias Jäger
*  @thanks        Tobias Kestel, Maximilian Novak
*  @dependencies  app.js, scripts/glyph.js
*  @parameters    _glyph, _xscale, _yscale, _xpos, _ypos
*/

function createGrid() {
   // check user input first
   let letters = input.value();
   let rows = cols = ceil(sqrt(letters.length));
   let scl = height / rows;
   let cellcount  = 0;

   // create grid
   for(let col = 0; col < cols; col++) {
      for(let row = 0; row < rows; row++) {
         // calculate x and y
         let x = row * scl;
         let y = col * scl;

         // check letter
         let letter = letters.charAt(cellcount);

         // prevent error
         let isLetter = letter.match(/\w/g);

         // add glyphs
         if(isLetter) {
            glyphs.push( new Glyph(letter, scl, scl, x, y) );
         }
         cellcount++;
      }
   }
}
