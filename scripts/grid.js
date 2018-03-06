/*
*  Creates a grid based on the user input,
*  and the proportions of the screen.
*
*  @title         grid.js
*  @author        Matthias Jäger
*  @thanks        Tobias Kestel, Maximilian Novak, Christian Pirchheim, Markus Murschitz
*  @dependencies  app.js, scripts/glyph.js, libraries/mamut.square_pack.js
*/

function createGrid(userInput) {
   let res = calc(userInput.length, width, height);
   console.log(res);
   let side = res.side;
   let cols = res.col;
   let rows = res.row;
   let index = 0;
   for(let row = 0; row < rows; row++) {
      for(let col = 0; col < cols; col++) {
         let x = col * side;
         let y = row * side;
         rect(x, y, side, side);
         let letter = userInput.charAt(index);
         let isLetter = letter.match(/\w/g);
         if(isLetter) {
            glyphs.push( new Glyph(letter, res.side, res.side, x, y) );
         }
         index++;
      }
   }
}
