/*
*  @function squarePack
*
*  Packs a specified number of squares
*  in any given browser window
*
*  @param (n) number of squares to fit
*  @param (w) width of the available space in pixels
*  @param (h) height of the available space in pixels
*
*  @return (len) square length (height) in pixels
*  @return (col) number of columns
*  @return (row) number of rows
*
*  Example:
*  >>> calc(6, 640 ,480)
*  {
*     len: 213,
*     col: 3,
*     row: 2
*   }
*
*  @author Matthias Jäger, Markus Murschitz
*/

function squarePack(n, w, h) {

   if(n != 0) {
      // returned variables
      let len, col, row;

      // calculate biggest possible length
      const optimum = floor(sqrt(w * h / n));

      // starts with optimum
      len = optimum;

      // len is reduced until
      while (len > 0) {
         // try how many times fit in the sceen
         col = floor(w / len);
         row = floor(h / len);
         len = len - 1;
         if(col > 0 && row > 0 && row * col >= n) {
            // the given squares with current length fit on the area because
            // they divide into a grid with at least N spots then ..
            break;
         }
      }

      // and return the final solution as an object
      return {
         len: len,
         col: col,
         row: row
      }
   }
}
