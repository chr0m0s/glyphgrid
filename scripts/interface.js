/*
*  Create user interface and bind input events
*
*  @title         interface.js
*  @author        Matthias Jäger
*  @dependencies  app.js
*/

function createInterface() {

   // Select html dom elements
   modal = select('.modal');
   input = select('.input');
   button = select('.button');

   // store original message
   message = input.value();

   // bind event listeners
   input.mousePressed(function(){
      // empty input
      input.value('');
      button.show();
   });
   button.mousePressed(function(){
      // test the input
      if(input.value() != '') {
         modal.hide();
         startGame = true;
         createGrid();
      } else {
         // error user has clicked button but not given input
         modal.show();
         input.value('Try: ' + message);
      }
   });

   // show on input focus
   button.hide();
}
