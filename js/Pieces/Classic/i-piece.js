import Piece from "../pieces";

export default class IPiece extends Piece {
  constructor(color) {
    super(color);
    this.initialState = [[0, -2], [0, -1], [0, 0], [0, 1]];
    this.numStates = 2;
    this.rotationMap = [
      [[2, -2], [1, -1], [0, 0], [-1, 1]],
      [[-2, 2], [-1, 1], [0, 0], [1, -1]]
    ];
  }
}
