import { drawGrid, clearRowAnimation } from "../View/canvas-templates";

export default class Board {
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

  move(direction) {
    const currPos = this.currentPos;
    const newPos = this.currentPiece.move(direction, currPos);
    if (this._isValidMove(currPos, newPos)) {
      this._updateGrid(currPos, newPos);
    } else if (direction === "down") return true;
  }

  clearRows() {
    let fullRows = [];
    this.currentPos.forEach(block => {
      if (
        this._isOnGrid(block) &&
        this.grid[block[0]].every(pos => pos) &&
        !fullRows.includes(block[0])
      ) {
        fullRows.push(block[0]);
      }
    });
    fullRows.sort((a, b) => a - b);
    // clearRowAnimation(fullRows);
    fullRows.forEach(rowNum => {
      this.grid.splice(rowNum, 1);
      this.grid.unshift(new Array(10).fill(0));
    });
    return fullRows.length;
  }

  _isValidMove(currPos, newPos) {
    for (let i = 0; i < newPos.length; i++) {
      let newBlock = newPos[i];

      if (newBlock[1] < 0) return false;
      if (newBlock[1] > 9) return false;
      if (newBlock[0] > 20) return false;

      // REFACTOR THIS BELOW IF STATEMENT to use isOnGrid and isOccupied..maybe refactor above if statements as well?

      if (
        this._isOnGrid(newBlock) &&
        this.grid[newBlock[0]][newBlock[1]] && // location on grid is occupied
        !this._includesBlock(currPos, newBlock)
      )
        return false;
    }

    return true;
  }

  // _isOccupied(posArr, block) {}

  _includesBlock(posArr, block) {
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
      if (this._isOnGrid(block) && !this._includesBlock(newPos, block)) {
        this.grid[block[0]][block[1]] = 0;
      }
    });
    this._drawGrid();
    this.currentPos = newPos;
  }

  // rotate(direction) {
  //   const currentPiece = this.currentPiece;
  //   const currPos = this.currentPos;
  //   let [currPosState, shift] = [this.currentPosState, -1];
  //   //  = this.currentPosState;
  //   if (direction === "clockwise") {
  //     shift = 1;
  //     currPosState += 1;
  //   }
  //   // let shift = direction === "clockwise" ? 1 : -1;
  //   const newPos = currentPiece.rotate(currPos, currPosState, shift);
  //   if (this._isValidMove(currPos, newPos)) {
  //     this._updateGrid(currPos, newPos);
  //     this.currentPosState = currPosState % this.currentPiece.numStates;
  //   } else if (direction === "down") return false;
  // }

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
