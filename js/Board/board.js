import { drawGrid } from "../View/canvas-templates";

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
    this.placeCurrentPiece();
  }

  placeCurrentPiece() {
    let pos = [];
    this.currentPiece.orientations[0].forEach((block, idx) => {
      let row = 0 + block[0];
      let col = 5 + block[1];
      this.grid[row][col] = this.currentPiece.color;
      pos.push([row, col]);
    });
    this.currentPos = pos;
  }

  isValidMove(currPos, newPos) {
    for (let i = 0; i < newPos.length; i++) {
      let row = newPos[i][0];
      let col = newPos[i][1];

      if (col < 0) return false;
      if (col > 9) return false;
      if (row > 20) return false;
      if (this.grid[row][col] && !this.includesTwople(currPos, [row, col]))
        return false;
    }

    return true;
  }

  includesTwople(arr, twople) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === twople[0] && arr[i][1] === twople[1]) return true;
    }
    return false;
  }

  updateGrid(currPos, newPos) {
    newPos.forEach(block => {
      this.grid[block[0]][block[1]] = this.currentPiece.color;
    });
    currPos.forEach(block => {
      if (!this.includesTwople(newPos, block)) {
        this.grid[block[0]][block[1]] = 0;
      }
    });
    drawGrid(this.grid);
  }

  moveLeft() {
    let currPos = this.currentPos;
    let newPos = currPos.map(block => {
      let newBlock = block.slice();
      newBlock[1] -= 1;
      return newBlock;
    });
    if (this.isValidMove(currPos, newPos)) {
      this.updateGrid(currPos, newPos);
      this.currentPos = newPos;
    }
  }

  moveRight() {
    let currPos = this.currentPos;
    let newPos = currPos.map(block => {
      let newBlock = block.slice();
      newBlock[1] += 1;
      return newBlock;
    });
    if (this.isValidMove(currPos, newPos)) {
      this.updateGrid(currPos, newPos);
      this.currentPos = newPos;
    }
  }

  moveDown() {
    let currPos = this.currentPos;
    let newPos = currPos.map(block => {
      let newBlock = block.slice();
      newBlock[0] += 1;
      return newBlock;
    });
    if (this.isValidMove(currPos, newPos)) {
      this.updateGrid(currPos, newPos);
      this.currentPos = newPos;
    } else return false;
  }

  rotateClockwise() {
    console.log("clockwise");
  }

  rotateCounterClockwise() {
    console.log("counter-clockwise");
  }
}

export default Board;
