import Piece from "../pieces";

export default class SPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 2;
    this.width = 3;
    this.x = -1;
    this.y = -1;
    this.initialState = [[0, -1], [0, 0], [-1, 0], [-1, 1]];
    this.numStates = 2;
    this.rotationMap = {
      0: [[0, -2], [1, -1], [0, 0], [1, 1]],
      1: [[0, 2], [-1, 1], [0, 0], [-1, -1]]
    };
  }
}
