import Board from "../Board/board";
import { drawGrid } from "../View/canvas-templates";

export default class Game {
  constructor(pieces, board = new Board()) {
    this.board = board;
    this.pieces = pieces;
    this.score = 0;
    this.level = 1;
    this.pieceSequence = this.fillAndShuffleBag();
    this.currentPiece = this.pieceSequence.shift();

    this.tick = this.tick.bind(this);
  }
  nextPiece() {
    this.board.setCurrentPiece(this.currentPiece);
    this.currentPiece = this.pieceSequence.shift();
    this.playRound();
  }

  playRound() {
    if (this.gameOver()) {
      return;
    }
    setTimeout(this.tick, 1000 / this.level);
  }

  tick() {
    console.log("tick-toc");
    console.log(new Date());
    if (this.board.move("down")) {
      this.nextPiece();
    } else {
      this.playRound();
    }
  }

  gameOver() {
    // return this.board[0].some(pos => pos);
    return this.score > 10;
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
    return bag;
  }
}
