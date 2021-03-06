import Piece from "../pieces";

export default class PTPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 3;
    this.width = 3;
    this.x = -1;
    this.y = -2;
    this.initialState = [[0, -1], [0, 0], [0, 1], [-1, 0], [-2, 0]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[0, -2], [1, -1], [2, 0], [0, 0], [-1, 1]],
      1: [[-2, 0], [-1, -1], [0, -2], [0, 0], [1, 1]],
      2: [[0, 2], [-1, 1], [-2, 0], [0, 0], [1, -1]],
      3: [[2, 0], [1, 1], [0, 2], [0, 0], [-1, -1]]
    };
  }
}
