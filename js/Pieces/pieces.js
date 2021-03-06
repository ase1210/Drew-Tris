const directions = {
  right: { idx: 1, shift: 1 },
  left: { idx: 1, shift: -1 },
  down: { idx: 0, shift: 1 },
  startingPos: { idx: 1, shift: 5 }
};

export default class Piece {
  constructor(color) {
    this.color = color;
  }

  move(direction, currPos) {
    return currPos.map(block => {
      let newBlock = block.slice();
      const {
        [direction]: { idx, shift }
      } = directions;
      newBlock[idx] += shift;
      return newBlock;
    });
  }

  //   rotate(currPos, state, shift) {
  //     // const { shift } = this.directionsMap(direction);
  //     // if (direction === "clockwise") {
  //     //   state++;
  //     // }
  //     state %= this.numStates;
  //     // let pieceState = (state + 1) % this.numStates;
  //     let rotationMap = this.rotationMap[state];
  //     return currPos.map((block, idx) => {
  //       let newBlock = block.slice();
  //       newBlock[0] += shift * rotationMap[idx][0];
  //       newBlock[1] += shift * rotationMap[idx][1];
  //       return newBlock;
  //     });
  //   }
}
