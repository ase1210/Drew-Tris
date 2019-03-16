import Piece from "../pieces";

export default class TPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[0, -1], [0, 0], [0, 1], [1, 0]];
    this.numStates = 4;
    this.rotationMap = {
      0: [[-1, -1], [0, 0], [1, 1], [1, -1]],
      1: [[-1, 1], [0, 0], [1, -1], [-1, -1]],
      2: [[1, 1], [0, 0], [-1, -1], [-1, 1]],
      3: [[1, -1], [0, 0], [-1, 1], [1, 1]]
    };
  }
}
