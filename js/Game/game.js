import Board from "../Board/board";
import KeyMap from "../KeyMap/keyMap";

export default class Game {
  constructor(pieces, board = new Board()) {
    this.board = board;
    this.pieces = pieces;
    this.score = 0;
    this.level = 1;
    this.bag = [];
    this.timeOut = undefined;
    this._fillAndShuffleBag();
    this.currentPiece = this.bag.shift();
    this.keyMap = undefined;
    this.rowsCleared = 0;

    this._tick = this._tick.bind(this);
    this._setKeyMap = this._setKeyMap.bind(this);
  }

  play() {
    this._setKeyMap();
    this._setNextPiece();
  }

  _setKeyMap() {
    this.keyMap = new KeyMap({
      KeyA: () => {
        this.board.rotateCounterClockwise();
      },
      KeyS: () => this.board.rotateClockwise(),
      ArrowUp: () => this.board.rotateClockwise(),
      ArrowDown: () => this.move("down"),
      ArrowLeft: () => this.move("left"),
      ArrowRight: () => this.move("right")
    });
  }

  move(direction) {
    this.board.move(direction);
  }

  _setNextPiece() {
    this.board.setCurrentPiece(this.currentPiece);
    this.currentPiece = this.bag.shift();
    this._tick();
    if (this.bag.length === 0) {
      this._fillAndShuffleBag();
    }
  }
  _clearRows() {
    let rowsCleared = this.board.clearRows();
    this.rowsCleared += rowsCleared;
    return rowsCleared;
  }
  _setScore(clearedRows) {
    this.score += this.level * 25 * Math.pow(2, clearedRows);
  }

  _updateLevel() {
    if (this.level < 10) {
      this.level = Math.floor(this.rowsCleared / 10) + 1;
    }
  }

  _freezePiece() {
    clearTimeout(this.timeOut);
    let rowsCleared = this._clearRows();
    this._setScore(rowsCleared);
    this._updateLevel();
    if (this._gameOver()) {
      console.log("GameOver");
      return;
    } else {
      this._setNextPiece();
    }
  }

  _tick() {
    if (this.board.move("down")) {
      this._freezePiece();
    } else {
      this.timeOut = setTimeout(this._tick, 75 * (11 - this.level));
    }
  }

  _gameOver() {
    let gameOver = this.board.grid[0].some(pos => pos);
    if (gameOver) {
      this.keyMap.removeEventListener();
    }
    return gameOver;
  }

  _fillAndShuffleBag() {
    let bag = [];
    for (let i = 0; i < 4; i++) {
      bag = bag.concat(this.pieces);
    }
    for (let i = bag.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i);
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    this.bag = bag;
  }
}
