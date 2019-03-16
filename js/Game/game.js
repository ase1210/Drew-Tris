import Board from "../Board/board";
import KeyMap from "../KeyMap/keyMap";

export default class Game {
  constructor(pieces, board = new Board()) {
    this.board = board;
    this.pieces = pieces;
    this.score = 0;
    this.level = 1;
    this.bag = [];
    this.freeze = false;
    this.timeOut = undefined;
    this.fillAndShuffleBag();
    this.currentPiece = this.bag.shift();
    this.keyMap = undefined;

    this.tick = this.tick.bind(this);
    this.setKeyMap = this.setKeyMap.bind(this);
  }

  play() {
    this.setKeyMap();
    this.setNextPiece();
  }

  setKeyMap() {
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

  setNextPiece() {
    this.board.setCurrentPiece(this.currentPiece);
    this.currentPiece = this.bag.shift();
    this.tick();
    if (this.bag.length === 0) {
      this.fillAndShuffleBag();
    }
  }
  clearRows() {
    console.log("CLEAR");
  }
  setScore() {
    console.log("score");
  }

  freezePiece() {
    clearTimeout(this.timeOut);
    this.clearRows();
    this.setScore();
    if (this.gameOver()) {
      console.log("GameOver");
      return;
    } else {
      this.setNextPiece();
    }
  }

  tick() {
    if (this.board.move("down")) {
      this.freezePiece();
    } else {
      this.timeOut = setTimeout(this.tick, 75 * (11 - this.level));
    }
  }

  gameOver() {
    let gameOver = this.board.grid[0].some(pos => pos);
    if (gameOver) {
      this.keyMap.removeEventListener();
    }
    return gameOver;
  }

  fillAndShuffleBag() {
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
