# glyphgrid 

![glyphgrid](img/342_glyphs_matthias_jaeger.jpg)

## A javascript program for fun
I'm using the [p5.js](https://p5js.org/) javascript library to create an animation in the webbrowser. My program renders "glyph objects" in a responsive grid, based on your input and screen. For this design I used [Cousine](https://fonts.google.com/specimen/Cousine?selection.family=Cousine) a beautiful sans serif by Steve Matteson. Font size and grid depend on the number of letters entered. Each single letter is resolved into an object with a variety of moving points. These individual dots are animated in each frame of the animation and draw delicate patterns on the canvas, that can be saved and shared.

![glyphgrid](img/889_glyphs_matthias_jaeger.jpg)

# Nice, but where can I try it myself?
View a running example here, currently in development
https://matthias-jaeger-net.github.io/glyphgrid/

## File structure 
  - index.html
  - app.js / Setup and draw loop 
  - / scripts       
    - glyph.js / Constructor function "glyph object"
    - grid.js / Creating a responsive grid based on user input
    - interface.js / User Event listeners and actions
  - / libraries
    - p5.js
    - p5.dom.js
    - p5.sound.js       Not needed yet
  - / css              
    - style.css

## Where I need input from you
What I would want for this program is that it can calculate an optimized layout related to the available space (width * height) and the given text (input), wich can be any kind of string the user has typed. I would like to calculate a cellsize that best fits these informations. 

```javascript
// Not implemented yet
// executes after user confirmed imput
// calculate an optimized layout 
// based on the known information
    
function makeGrid() {
   // known data
   var area = width * height;
   var elements = input.length();

   // imagine it was a square screen
   // and a square grid
   // it would work perfectly 
   // wouldn't it?
   if (width == height) {
      // the square root of the area
      // proportional to the elements 
      // should be the length of a side ???
      var cellsize = sqrt( gridarea / elements );

      // could be used to set up the grid
      var rows = floor(width / cellsize);		
      var cols = floor(height / cellsize);

      for (var row = 0; row < rows; row++) {
         for (var col = 0; col < cols; col++) {
            var x = row * cellsize;
            var y = col * cellsize;
            // whatever
            rect(x,y,cellsize,cellsize);
         } 
      }
   } else {
    
      // your code?
    
   }
}
```


## Developed a new way of thinking about the grid
What I would want for this program is that it can calculate an optimized layout related to the available space (width * height) and the given text (input), wich can be any kind of string the user has typed. I would like to calculate a cellsize that best fits these informations. 

```javascript

function createGrid() {
  glyphs = [];
  // handle user input
  var inputString = input.value();
  var elements = inputString.length;

  // Tobias Kestels calculations
  var calculatedX = width;
  var calculatedY = height;
  var calculatedElements = calculatedX * calculatedY;

  // counters
  var t = 0;
  var c = 1;

  while ( calculatedElements > elements ) {
    calculatedX = floor( width / c + (width/height));
    calculatedY = floor( height / c );
    calculatedElements = calculatedX * calculatedY;
    c = c + 1;
  }
  var xscale = width / calculatedX;
  var yscale = height / calculatedY;

  // render grid
  for(var row = 0; row < calculatedY; row++) {
    for(var col = 0; col < calculatedX; col++) {
      var ky = row * yscale;
      var kx = col * xscale;
      rect( kx, ky, xscale, yscale );
      text("row: " + row + " col: " + col, col*xscale+ 10, row*yscale + 20 );
      if(t < inputString.length) {
        var letter = inputString.charAt(t);
        var isLetter = letter.match(/\w/g);
        if(isLetter) {
          glyphs.push( new Glyph(letter, xscale, kx + (xscale*0.2), ky) );
        }
        t++;
      }
    }
  }
}
```

# To do
- [x] Create running example page
- [ ] Better math for grid.js
- [ ] Style modal screen
- [ ] Add "save image" button
- [ ] Add speech recognition functions to input
- [ ] Pass all the different google fonts as a pulldown
