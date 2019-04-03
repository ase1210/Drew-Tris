# Drew-Tris [<img src="https://github.com/ase1210/Drew-Tris/blob/master/src/images/drew-tris-favicon.ico" width='40' alt='Drew-Tris' align='right'/>](https://ase1210.github.io/Drew-Tris/)

[Drew-Tris live](https://ase1210.github.io/Drew-Tris/)

<img src="https://github.com/ase1210/Drew-Tris/blob/master/src/images/Drew-Tris.png" width='50%' alt='Drew-Tris' align='right' padding-bottom='10'/> 
<img src="https://github.com/ase1210/Drew-Tris/blob/master/src/images/whitespace.png" width='50%' height='10' alt='Whitespace' align='right' padding-bottom='10'/> 
<img src="https://github.com/ase1210/Drew-Tris/blob/master/src/images/drew-tris.gif" width='50%' alt='Drew-Tris-Gif' align='right'/>   


## Background and Overview

Drew-Tris is a simple JavaScript game application that is modeled after the classic game Tetris. I wanted to see if I could re-create this classic game as well as my own Drew-Tris version in under 4 days. 

#### Motivation for project
  * Tetris is one of my mom's favorite games and a classic from my childhood.  
  * The reason I chose this project was to be able to share a coding creation with my mom.

## Technologies
  * Vanilla JavaScript with a focus on Object Oriented Programming  
  * HTML5 Canvas
  * DOM Manipulation  
  * Webpack  


### Snippets

Example Piece - S Piece
```JavaScript
export default class SPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 2;
    this.width = 3;
    this.x = -1;
    this.y = -1;
    this.initialState = [[0, -1], [0, 0], [-1, 0], [-1, 1]];
    this.numStates = 2;
    this.rotationMap = {
      0: [[0, -2], [1, -1], [0, 0], [1, 1]],
      1: [[0, 2], [-1, 1], [0, 0], [-1, -1]]
    };
  }
}

```
KeyMap function to set & remove event handlers.
```JavaScript
export default class KeyMap {
  constructor(actions) {
    this.actions = actions;
    this.eventHandler = this.eventHandler.bind(this);
    document.addEventListener("keydown", this.eventHandler);
  }
  eventHandler(e) {
    if (this.actions[e.code]) {
      this.actions[e.code]();
    }
  }
  removeEventListener() {
    document.removeEventListener("keydown", this.eventHandler);
  }
}

```

Canvas drawGrid function
```JavaScript
export const drawGrid = grid => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  c.clearRect(0, 0, sq * 10, sq * 20);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect(j * sq, (i - 1) * sq, sq, sq);
      c.strokeStyle = "black";
      c.strokeRect(j * sq, (i - 1) * sq, sq, sq);
    }
  }
};
```
