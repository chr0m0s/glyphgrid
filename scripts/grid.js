// Grid
//

// Custom function to create a grid of glyphs
// Thanks: Tobias Kestel
// _______________________________________________________________________________________ //

function createGrid() {

   // check user input
   var data = input.value();
   var elements = data.length;
   console.log(" elements: " + elements );

   // odd elements get even
   function testNumber(number) {
      return number % 2 == 0;
   }
   if (testNumber(elements)) {
      console.log(" elements is even ");
      //elements = elements;
   } else {
      console.log(" elements is odd ");
   }

   // kestels calculations
   var rows = width;
   var cols = height;
   var area = rows * cols;
   var count = 1;
   while ( area > elements ) {
      rows = floor( width / count );
      cols = floor( height / count );
      area = floor(rows * cols);
      count = count + 1;
   }

   // finished calculations
   var cellx = width / rows;
   var celly = height / cols;

   // render grid
   var cellcount = 0;
   for(var col = 0; col < cols; col++) {
      for(var row = 0; row < rows; row++) {
         var x = row * cellx;
         var y = col * celly;
         rect( x, y, cellx, celly);
         if(cellcount < data.length) {
            var letter = data.charAt(cellcount);
            var isLetter = letter.match(/\w/g);
            if(isLetter) {
               glyphs.push( new Glyph(letter, cellx, celly, x, y) );
            }
            cellcount++;
         }
      }
   }
   console.log(" data: " + data );
   console.log(" elements: " + elements );
   console.log(" area: " + area );
   console.log(" cellcount: " + cellcount );
   console.log(" rows: " + rows );
   console.log(" cols: " + cols );
   console.log(" cellx: " +  cellx );
   console.log(" celly: " + celly );
}

// _______________________________________________________________________________________ //

/*
console.log(" data: " + data );
console.log(" elements: " + elements );
console.log(" even number: " + elements % 2 );
console.log(" area: " + area );
console.log(" cellcount: " + cellcount );
console.log(" rows: " + rows );
console.log(" cols: " + cols );
console.log(" row: " + row );
console.log(" col: " + col );
*/
