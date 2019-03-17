import Piece from "../pieces";

export default class ZPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[0, 1], [0, 0], [-1, 0], [-1, -1]];
    this.numStates = 2;
    this.rotationMap = {
      0: [[0, 2], [1, 1], [0, 0], [1, -1]],
      1: [[0, -2], [-1, -1], [0, 0], [-1, 1]]
    };
  }
}
