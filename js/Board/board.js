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
    this.currentPos = piece.initialState;
    this.currentPosState = 0;
    this.move("startingPos");
  }

  _isValidMove(currPos, newPos) {
    for (let i = 0; i < newPos.length; i++) {
      let newBlock = newPos[i];

      if (newBlock[1] < 0) return false;
      if (newBlock[1] > 9) return false;
      // if (newBlock[0] < 0) return false;
      if (newBlock[0] > 20) return false;

      // REFACTOR THIS BELOW IF STATEMENT to use isOnGrid and isOccupied..maybe refactor above if statements as well?

      if (
        this._isOnGrid(newBlock) &&
        this.grid[newBlock[0]][newBlock[1]] && // location on grid is occupied
        !this._isBlockInPos(currPos, newBlock)
      )
        return false;
    }

    return true;
  }

  _isOccupied(posArr, block) {}

  _isBlockInPos(posArr, block) {
    for (let i = 0; i < posArr.length; i++) {
      if (posArr[i][0] === block[0] && posArr[i][1] === block[1]) return true;
    }
    return false;
  }

  _isOnGrid(block) {
    return !!this.grid[block[0]];
  }

  _drawGrid() {
    drawGrid(this.grid);
  }

  _updateGrid(currPos, newPos) {
    newPos.forEach(block => {
      if (this._isOnGrid(block)) {
        this.grid[block[0]][block[1]] = this.currentPiece.color;
      }
    });
    currPos.forEach(block => {
      if (this._isOnGrid(block) && !this._isBlockInPos(newPos, block)) {
        this.grid[block[0]][block[1]] = 0;
      }
    });
    this._drawGrid();
    this.currentPos = newPos;
  }

  move(direction) {
    const currPos = this.currentPos;
    const newPos = this.currentPiece.move(direction, currPos);
    if (this._isValidMove(currPos, newPos)) {
      this._updateGrid(currPos, newPos);
    } else if (direction === "down") return false;
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
    if (this._isValidMove(currPos, newPos)) {
      this._updateGrid(currPos, newPos);
      this.currentPosState =
        (this.currentPosState + 1) % this.currentPiece.numStates;
    }
  }

  rotateCounterClockwise() {
    console.log("counter-clockwise");
    let currPos = this.currentPos;
    let pieceState = this.currentPosState;
    let rotationMap = this.currentPiece.rotationMap[pieceState];
    let newPos = currPos.map((block, idx) => {
      let newBlock = block.slice();
      newBlock[0] -= rotationMap[idx][0];
      newBlock[1] -= rotationMap[idx][1];
      return newBlock;
    });
    if (this._isValidMove(currPos, newPos)) {
      this._updateGrid(currPos, newPos);
      this.currentPosState =
        (this.currentPosState - 1 + this.currentPiece.numStates) %
        this.currentPiece.numStates;
    }
  }
}

export default Board;
