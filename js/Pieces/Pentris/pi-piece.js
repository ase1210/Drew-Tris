import Piece from "../pieces";

export default class PIPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 1;
    this.width = 4;
    this.x = -2;
    this.y = 0;
    this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1], [0, 2]];
    this.numStates = 2;
    this.rotationMap = {
      0: [[2, -2], [1, -1], [0, 0], [-1, 1], [-2, 2]],
      1: [[-2, 2], [-1, 1], [0, 0], [1, -1], [2, -2]]
    };
  }
}
