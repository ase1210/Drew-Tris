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
    this.currentPosState = undefined;
  }

  setCurrentPiece(piece) {
    this.currentPiece = piece;
    this.placeCurrentPiece();
    this.currentPosState = 0;
  }

  placeCurrentPiece() {
    let pos = [];
    this.currentPiece.initialState.forEach((block, idx) => {
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
      if (row < 0) return false;
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
    this.currentPos = newPos;
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
    } else return false;
  }

  rotateClockwise() {
    let currPos = this.currentPos;
    let pieceState = (this.currentPosState + 1) % this.currentPiece.numStates;
    let rotationMap = this.currentPiece.rotationMap[pieceState];
    let newPos = currPos.map((block, idx) => {
      let newBlock = block.slice();
      newBlock[0] += rotationMap[idx][0];
      newBlock[1] += rotationMap[idx][1];
      return newBlock;
    });
    if (this.isValidMove(currPos, newPos)) {
      this.updateGrid(currPos, newPos);
      this.currentPosState += 1;
    }
  }

  rotateCounterClockwise() {
    console.log("counter-clockwise");
    let currPos = this.currentPos;
    let pieceState =
      (this.currentPosState - 1 + this.currentPiece.numStates) %
      this.currentPiece.numStates;
    let rotationMap = this.currentPiece.rotationMap[pieceState];
    let newPos = currPos.map((block, idx) => {
      let newBlock = block.slice();
      newBlock[0] += rotationMap[idx][0];
      newBlock[1] += rotationMap[idx][1];
      return newBlock;
    });
    if (this.isValidMove(currPos, newPos)) {
      this.updateGrid(currPos, newPos);
      this.currentPosState =
        (this.currentPosState - 1 + this.currentPiece.numStates) %
        this.currentPiece.numStates;
    }
  }
}

export default Board;
