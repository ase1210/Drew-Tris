export const drawGrid = grid => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  c.clearRect(0, 0, sq * 10, sq * 20);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect(j * sq, (i - 1) * sq, sq, sq);
      c.strokeStyle = "black";
      c.strokeRect(j * sq, (i - 1) * sq, sq, sq);
    }
  }
};

// CHANGE COLORS for an index position to key into colors array, and -1 for blank

export const drawGameOver = grid => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 25;
  canvas.width = sq * 25;
  canvas.height = sq * 50;

  c.clearRect(0, 0, sq * 25, sq * 50);
  c.fillStyle = "black";
  c.fillRect(0, 0, sq * 25, sq * 50);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect((j + 3) * sq, (i + 16) * sq, sq, sq);
      // c.strokeStyle = "black";
      // c.strokeRect((j + 3) * sq, (i + 17) * sq, sq, sq);
    }
  }
};

export const drawGamePreview = pieces => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  c.fillStyle = "black";
  c.fillRect(0, 0, 10 * sq, 20 * sq);

  pieces.forEach((piece, idx) => {
    piece.initialState.forEach(block => {
      c.fillStyle = piece.color;
      c.fillRect(
        sq * (block[1] - piece.x + (10 - piece.width) / 2),
        sq *
          (block[0] -
            piece.y +
            ((19 / pieces.length) * (idx + 1) - piece.height)),
        sq,
        sq
      );
      c.strokeStyle = "black";
      c.strokeRect(
        sq * (block[1] - piece.x + (10 - piece.width) / 2),
        sq *
          (block[0] -
            piece.y +
            ((19 / pieces.length) * (idx + 1) - piece.height)),
        sq,
        sq
      );
    });
  });
};

export const clearRowAnimation = rowNums => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  for (let i = 0; i < rowNums.length; i++) {
    c.fillStyle = "#ffffff";
    c.fillRect(0, (rowNums[i] - 1) * sq, sq * 10, sq);
  }
};

export const previewPiece = (piece, eleId) => {
  const canvas = document.getElementById(eleId);
  const c = canvas.getContext("2d");
  const sq = canvas.width / 6;
  canvas.width = sq * 6;
  canvas.height = sq * 4;
  c.fillStyle = "black";
  c.fillRect(0, 0, 6 * sq, 4 * sq);
  let pieceState = piece.initialState;
  for (let i = 0; i < pieceState.length; i++) {
    c.fillStyle = piece.color;
    c.fillRect(
      sq * (pieceState[i][1] - piece.x + (6 - piece.width) / 2),
      sq * (pieceState[i][0] - piece.y + (4 - piece.height) / 2),
      sq,
      sq
    );
    c.strokeStyle = "black";
    c.strokeRect(
      sq * (pieceState[i][1] - piece.x + (6 - piece.width) / 2),
      sq * (pieceState[i][0] - piece.y + (4 - piece.height) / 2),
      sq,
      sq
    );
  }
};
