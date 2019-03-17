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
        console.log("rotate");
        this.board.rotateCounterClockwise();
      },
      KeyS: () => this.board.rotateClockwise(),
      ArrowUp: () => this.board.rotateClockwise(),
      ArrowDown: () => this.board.move("down"),
      ArrowLeft: () => this.board.move("left"),
      ArrowRight: () => this.board.move("right")
    });
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
    console.log("CLEAR");
  }
  _setScore() {
    console.log("score");
  }

  freezePiece() {
    clearTimeout(this.timeOut);
    this._clearRows();
    this._setScore();
    if (this._gameOver()) {
      console.log("GameOver");
      return;
    } else {
      this._setNextPiece();
    }
  }

  _tick() {
    if (this.board.move("down")) {
      this.freezePiece();
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
