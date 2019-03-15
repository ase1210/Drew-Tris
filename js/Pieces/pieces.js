class Piece {
  moveLeft() {
    console.log("left");
  }

  moveRight() {
    console.log("right");
  }

  moveDown() {
    console.log("down");
  }

  rotateClockwise() {
    console.log("clockwise");
  }

  rotateCounterClockwise() {
    console.log("counter-clockwise");
  }
}

class IPiece extends Piece {
  constructor(color) {
    super(props);
    this.color = color;
    this.orientations = [
      [[0, -1], [0, 0], [0, 1], [0, 2]],
      [[0, 0], [-1, 0], [-2, 0], [-3, 0]]
    ];
  }
}
