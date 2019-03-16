import Piece from "../pieces";

export default class SPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[1, -1], [1, 0], [0, 0], [0, 1]];
    this.numStates = 2;
    this.rotationMap = [
      [[0, -2], [1, -1], [0, 0], [1, 1]],
      [[0, 2], [-1, 1], [0, 0], [-1, -1]]
    ];
  }
}
