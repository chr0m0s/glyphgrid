/*
*  @function renderGrid
*
*  Adds Square() instances to the global squares list,
*  according to given results from squarePack()
*
*  @return (grid.len) square length (height) in pixels
*  @return (grid.col) number of columns
*  @return (grid.row) number of rows
*
*  @author   Matthias Jäger
*/

function renderGrid(grid) {
   // draw the calculate grid
   let c = 0;
   for (let row = 0; row < grid.row; row++) {
      for (let col = 0; col < grid.col; col++) {
         if (c < number) {
            let x = col * grid.len;
            let y = row * grid.len;
            let square = new Square(x, y, grid.len, c+1);
            squares.push(square);
            c++;
         } else {
            // No more elements to add
            break;
         }
      }
   }
}
