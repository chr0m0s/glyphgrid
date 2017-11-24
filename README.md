# glyphgrid 

![glyphgrid](img/342_glyphs_matthias_jaeger.jpg)

## A javascript program for fun
This webapp was built built for you, dear reader. I'm using the [p5.js](https://p5js.org/) javascript library to create an animation in the webbrowser. My program renders "glyph objects" in a responsive grid, based on your input and screen. For this design I used [Cousine](https://fonts.google.com/specimen/Cousine?selection.family=Cousine) a beautiful sans serif by Steve Matteson. Font size and grid depend on the number of letters entered. Each single letter is resolved into an object with a variety of moving points. These individual dots are animated in each frame of the animation and draw delicate patterns on the canvas, that can be saved and shared.

![glyphgrid](img/889_glyphs_matthias_jaeger.jpg)
#### A longer random walk

## File structure 

- root
  - index.html
  - app.js  
  - / libraries
    - p5.js
    - p5.dom.js
    - p5.sound.js
  - / scripts
    - glyph.js
    - grid.js
    - interface.js
    - / css
      - style.css

## The currend Grid
```
// Called afer user input
function createGrid() {
 
 // get the string stored in the input
 var inputString = input.value();

  // very lame way of thinking
  if(inputString.length < 10) {
    var scl = width/inputString.length; 
  } else {
    var scl = width/10; 
  }

  var counter = 0;

  for (var y = 0; y < height-scl; y+=scl) {
    for (var x = 0; x < width-scl; x+=scl) {
      // remove special characters
      var letter = inputString.charAt(counter);
      var isLetter = letter.match(/\w/g);
      rect(x,y,scl,scl);
      if(isLetter) {
        glyphs.push( new Glyph(letter, scl, x, y) ); 
      } 
      counter++;
    }
  } 
}
```


# To do now
- [x] Create running example page
- [ ] Better math for grid.js
- [ ] Style modal screen
- [ ] Add "save image" button

# To do later
- [ ] Add speech recognition functions to input
- [ ] Pass all the different google fonts as a pulldown



# View a running example here
Coming soon
