import Piece from "../pieces";

export default class PXPiece extends Piece {
  constructor(color) {
    super(color);
    this.height = 3;
    this.width = 3;
    this.x = -1;
    this.y = -2;
    this.initialState = [[-2, 0], [-1, -1], [-1, 0], [-1, 1], [0, 0]];
    this.numStates = 1;
    this.rotationMap = {
      0: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    };
  }
}
