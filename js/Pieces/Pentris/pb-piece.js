import Piece from "../pieces";

export default class PBPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 2;
    this.width = 3;
    this.x = -1;
    this.y = -1;

    this.initialState = [[-1, 0], [-1, -1], [0, 0], [0, -1], [0, 1]];
    this.numStates = 4;
    this.rotationMap = {
      3: [[-1, -1], [0, -2], [0, 0], [1, -1], [-1, 1]],
      0: [[0, 1], [-1, 0], [1, 0], [0, -1], [2, 1]],
      1: [[0, 0], [-1, 1], [-1, -1], [-2, 0], [0, -2]],
      2: [[1, 0], [2, 1], [0, 1], [1, 2], [-1, 0]]
    };
  }
}
