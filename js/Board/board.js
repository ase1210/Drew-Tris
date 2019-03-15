class Board {
  constructor(height = 20, width = 10) {
    this.height = height;
    this.width = width;
    this.grid = new Array(this.height)
      .fill()
      .map(r => new Array(this.width).fill(0));
  }
}

export default Board;
