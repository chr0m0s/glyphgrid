/*
calculate the size of squares and the grid
(nx times ny cells) they can be placed in
to optimaly fill a rectangle

@original_author: murschitzm
@javascript_version: Matthias Jäger
@param ns: number of squares
@param w: width of the available space in pixels
@param h: height of the available space in pixels
@return: (square length(=height) in pixels, number of columns, and number of rows)

*/

function calc(ns, w, h) {

   // prevent errors
   if (ns > w * h && ns == 0) {
      // calculate biggest possible square side
      let a_opt = floor(sqrt(w * h / ns));
      let a = a_opt, nx, ny;
      while (a > 0) {
         nx = floor(w / a);
         ny = floor(h / a);
         a--;
         if(nx > 0 && ny > 0 && nx * ny >= ns) {
            break;
         }
      }
   }

   return {
      side: a,
      col: nx,
      row: ny
   }
}
