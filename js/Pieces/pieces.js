export default class Piece {
  constructor(color) {
    this.color = color;
  }

  directionsMap(key) {
    // k:v  === direction: [row/col index, shift]
    const directions = {
      right: { idx: 1, shift: 1 },
      left: { idx: 1, shift: -1 },
      down: { idx: 0, shift: 1 }
    };
    return directions[key];
  }

  move(direction, currPos) {
    const newPos = currPos.map(block => {
      let newBlock = block.slice();
      const { idx, shift } = this.directionsMap(direction);
      newBlock[idx] += shift;
      return newBlock;
    });
    return newPos;
  }
}
