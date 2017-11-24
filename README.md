# glyphgrid

Watch my algorithm as he arranges letters on a canvas. Based on your input, a responsive grid is created. Your words are set in the font Cousine-Regular by Steve Matteson. Font size and grid depend on the number of letters entered. Each single letter is resolved into an object with a variety of moving points. These individual dots are moved in each frame of the animation and draw delicate patterns on the canvas.

![glyphgrid](img/342_glyphs_matthias_jaeger.jpg)

# Dependencies
This app was built using the [p5.js](https://p5js.org/) javascript library.

# File structure

## - root
- index.html
- app.js

## / libraries
- p5.js
- p5.dom.js
- p5.sound.js

## / scripts
- glyph.js
- grid.js
- interface.js

## / css
- style.css

![glyphgrid](img/889_glyphs_matthias_jaeger.jpg)

# To do now
- [x] Better math for grid.js
- [ ] Style modal screen
- [ ] Add "save image" button

# To do later
- [ ] Add speech recognition functions to input
- [ ] Pass all the different google fonts as a pulldown
