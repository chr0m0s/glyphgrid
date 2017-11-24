# glyphgrid 

Watch my algorithm create a set of "glyphs" related to your input.  

![glyphgrid](img/342_glyphs_matthias_jaeger.jpg)
#### Rendered image: Trying to get the grid right

## A javascript program for fun
This webapp was built built for you using the [p5.js](https://p5js.org/) javascript library. 


## 1. User input
Give the program a word or a sentence and submit your text. After your input a responsive grid is created. that  For this design I used [Cousine](https://fonts.google.com/specimen/Cousine?selection.family=Cousine) a beautiful sans serif by Steve Matteson. Font size and grid depend on the number of letters entered. Each single letter is resolved into an object with a variety of moving points. These individual dots are moved in each frame of the animation and draw delicate patterns on the canvas.

```
function test() {
  console.log("notice the blank line before this function?");
}
```


# Dependencies

# File structure
A basic index.html  

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
#### A longer random walk

# To do now
- [x] Better math for grid.js
- [ ] Style modal screen
- [ ] Add "save image" button

# To do later
- [ ] Add speech recognition functions to input
- [ ] Pass all the different google fonts as a pulldown
