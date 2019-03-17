import Piece from "../pieces";

export default class PXPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[-2, -1], [-2, 1], [-1, 0], [0, -1], [0, 1]];
    this.numStates = 2;
    this.rotationMap = {
      0: [[-1, 0], [0, 1], [0, 0], [0, -1], [1, 0]],
      1: [[1, 0], [0, -1], [0, 0], [0, 1], [-1, 0]]
    };
  }
}
