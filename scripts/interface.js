// Interface
//

//  Custom functions to set up the user interaction
// _______________________________________________________________________________________ //

function createInterface() {

   // Select html dom elements
   modal = select('.modal');
   input = select('.input');
   button = select('.button');

   // store original message
   message = input.value();

   // bind events
   input.mousePressed(userHasClickedInput);
   button.mousePressed(userHasConfirmedInput);
   button.hide();
}

// Handle the user interface events
// _______________________________________________________________________________________ //

function userHasClickedInput(){
   // empty input
   //input.value('');
   button.show();
}

function userHasConfirmedInput(){
   // test input
   if(input.value() != '') {
      modal.hide();
      startGame = true;
      createGrid();
   } else {
      // error user has clicked button but not given input
      modal.show();
      input.value('Try: ' + message);
   }
}


// P5 key press event
// _______________________________________________________________________________________ //

function keyPressed() {
   if(startGame &&  key == ' ') {
      saveCanvas(canvas, gameTime + "_glyphs_matthias_jaeger", "jpg");
   }
}
