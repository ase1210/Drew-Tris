import Board from "../Board/board";
import KeyMap from "../KeyMap/keyMap";
import { previewPiece } from "../View/canvas-templates";

export default class Game {
  constructor(pieces, difficulty, colors, board = new Board()) {
    this.board = board;
    this.difficulty = difficulty;
    this.colors = colors;
    this.pieces = pieces;
    this.score = 0;
    this.level = 1;
    this.bag = [];
    this.timeOut = undefined;
    this._fillAndShuffleBag();
    this.savedPiece = this.bag.shift();
    this.currentPiece = this.bag.shift();
    this.keyMap = undefined;
    this.rowsCleared = 0;

    this._tick = this._tick.bind(this);
    // this._setKeyMap = this._setKeyMap.bind(this);
  }

  play() {
    // let removePlayEvent = document.getElementbyId('play');

    this._setKeyMap();
    this._setNextPiece();
  }

  pause() {
    const play = document.getElementById("play");
    if (play.innerText === "Pause") {
      clearTimeout(this.timeOut);
      play.innerText = "Resume";
      this.keyMap.removeEventListener();
      this.keyMap = new KeyMap(this._pauseKeys());
      //render paused board
    } else {
      this.keyMap.removeEventListener();
      this.keyMap = new KeyMap(this._keys());
      play.innerText = "Pause";
      this._tick();
    }
  }

  _pauseKeys() {
    return { KeyP: () => this.pause() };
  }
  _keys() {
    return {
      KeyZ: () => {
        this.board.rotateCounterClockwise();
      },
      KeyX: () => this.board.rotateClockwise(),
      KeyP: () => this.pause(),
      ArrowUp: () => this.board.rotateClockwise(),
      ArrowDown: () => this.move("down"),
      ArrowLeft: () => this.move("left"),
      ArrowRight: () => this.move("right")
    };
  }
  _setKeyMap() {
    this.keyMap = new KeyMap(this._keys());
  }

  move(direction) {
    if (this.board.move(direction)) {
      this._freezePiece();
    }
  }

  _setNextPiece() {
    this.board.setCurrentPiece(this.currentPiece);
    this.currentPiece = this.bag.shift();
    previewPiece(this.currentPiece, "next-piece");
    this._tick();
    if (this.bag.length === 0) {
      this._fillAndShuffleBag();
    }
  }
  _clearRows() {
    let rowsCleared = this.board.clearRows();
    this.rowsCleared += rowsCleared;

    // update #Rows display
    let rowsEl = document.getElementById("rows");
    rowsEl.innerHTML = this.rowsCleared;

    return rowsCleared;
  }
  _setScore(clearedRows) {
    this.score += this.level * 25 * Math.pow(2, clearedRows);
    let formattedScore = this.score.toString();

    // update Score display
    let scoreEl = document.getElementById("score");
    scoreEl.innerHTML = formattedScore;
  }

  _updateLevel() {
    if (this.level < 10) {
      this.level = Math.floor(this.rowsCleared / 10) + this.difficulty;
    }

    // update Level display
    let levelEl = document.getElementById("level");
    levelEl.innerHTML = this.level;
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
      // let play = document.getElementById("play");
      // play.addEventListener('click', this.play())
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
