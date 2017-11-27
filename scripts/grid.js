// Grid
//

// Custom function to create a grid of glyphs
// Thanks Tobias Kestel
// _______________________________________________________________________________________ //

function createGrid() {

   // check user input
   let data = input.value();
   let elements = data.length;

   // Kestels calculations
   let factor = 1;
   let rows = width / factor;
   let cols = height / factor;
   let total = rows * cols;
   let cellx = width / rows;
   let celly = height / cols;

   while ( total > elements ) {
      rows = width / factor;
      cols = height / factor;
      total = rows * cols;
      cellx = width / rows;
      celly = height / cols;
      factor = factor + 1;
   }

   // render grid
   let cellcount = 0;
   for(let col = 0; col < cols; col++) {
      for(let row = 0; row < rows; row++) {
         let x = row * cellx;
         let y = col * celly;
         rect( x, y, cellx, celly);
         if(cellcount < data.length) {
            let letter = data.charAt(cellcount);
            let isLetter = letter.match(/\w/g);
            if(isLetter) {
               glyphs.push( new Glyph(letter, cellx, celly, x, y) );
            }
            cellcount++;
         }
      }
   }

   console.log("elements: " + elements );
   console.log("total: " + total );
   console.log("cellcount: " + cellcount );
   console.log("rows: " + width /rows );
   console.log("cols: " + cols );
   console.log("cellx: " +  cellx );
   console.log("celly: " + celly );
}

// _______________________________________________________________________________________ //
