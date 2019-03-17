import Piece from "../pieces";

export default class OPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[-1, -1], [-1, 0], [0, 0], [0, -1]];
    this.numStates = 1;
    this.rotationMap = {
      0: [[0, 0], [0, 0], [0, 0], [0, 0]]
    };
  }
}
