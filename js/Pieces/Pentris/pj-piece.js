import Piece from "../pieces";

export default class PJPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 2;
    this.width = 4;
    this.x = -2;
    this.y = -1;
    this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1], [-1, 0]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[0, -2], [1, -1], [2, 0], [3, 1], [1, 1]],
      1: [[-3, 1], [-2, 0], [-1, -1], [0, -2], [0, 0]],
      2: [[2, 2], [1, 1], [0, 0], [-1, -1], [1, -1]],
      3: [[1, -1], [0, 0], [-1, 1], [-2, 2], [-2, 0]]
    };
  }
}
