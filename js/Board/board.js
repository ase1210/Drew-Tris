class Board {
  constructor(height = 21, width = 10) {
    this.height = height;
    this.width = width;
    this.grid = new Array(this.height)
      .fill()
      .map(r => new Array(this.width).fill(0));
    this.currentPiece = undefined;
    this.currentPos = [];
  }

  setCurrentPiece(piece) {
    this.currentPiece = piece;
  }

  placeCurrentPiece() {
    this.currentPiece.orientations[0].forEach((block, idx) => {
      let row = 0 + block[0];
      let col = 5 + block[1];
      this.grid[row][col] = this.currentPiece.color;
      this.currentPos.push([row, col]);
    });
  }

  isValidMove(currPos, newPos) {}

  updateGrid(currPos, newPos) {}

  moveLeft() {
    console.log("left");
    let oldPos = this.currentPos;
    let newPos = oldPos.map(block => {
      let newBlock = block.slice();
      newBlock[1] -= 1;
      return newBlock;
    });
    console.log(oldPos, newPos);
  }

  moveRight() {
    console.log("right");
  }

  moveDown() {
    console.log("down");
  }

  rotateClockwise() {
    console.log("clockwise");
  }

  rotateCounterClockwise() {
    console.log("counter-clockwise");
  }
}

export default Board;
