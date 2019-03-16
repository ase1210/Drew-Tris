export default class Piece {
  constructor(color) {
    this.color = color;
  }

  directionsMap(key) {
    // k:v  === direction: { row/col index, shift }
    const directions = {
      right: { idx: 1, shift: 1 },
      left: { idx: 1, shift: -1 },
      down: { idx: 0, shift: 1 },
      startingPos: { idx: 1, shift: 5 }
    };
    return directions[key];
  }

  move(direction, currPos) {
    return currPos.map(block => {
      let newBlock = block.slice();
      const { idx, shift } = this.directionsMap(direction);
      newBlock[idx] += shift;
      return newBlock;
    });
  }
}
