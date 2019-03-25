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

export const drawGamePreview = pieces => {
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  c.fillStyle = "black";
  c.fillRect(0, 0, 10 * sq, 20 * sq);

  c.fillStyle = "red";
  c.fillRect(5 * sq, 20, sq, sq);
  c.fillRect(6 * sq, 20, sq, sq);
  c.fillRect(4 * sq, 20, sq, sq);
  c.fillRect(5 * sq, sq + 20, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 20, sq, sq);
  // c.strokeRect(6 * sq, 20, sq, sq);
  // c.strokeRect(4 * sq, 20, sq, sq);
  // c.strokeRect(5 * sq, sq + 20, sq, sq);

  // Long Piece with Canvas
  c.fillStyle = "blue";
  c.fillRect(5 * sq, 2 * sq + 30, sq, sq);
  c.fillRect(6 * sq, 2 * sq + 30, sq, sq);
  c.fillRect(4 * sq, 2 * sq + 30, sq, sq);
  c.fillRect(7 * sq, 2 * sq + 30, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 2 * sq + 30, sq, sq);
  // c.strokeRect(6 * sq, 2 * sq + 30, sq, sq);
  // c.strokeRect(4 * sq, 2 * sq + 30, sq, sq);
  // c.strokeRect(7 * sq, 2 * sq + 30, sq, sq);

  // Z Piece with Canvas
  c.fillStyle = "green";
  c.fillRect(5 * sq, 3 * sq + 40, sq, sq);
  c.fillRect(6 * sq, 4 * sq + 40, sq, sq);
  c.fillRect(5 * sq, 4 * sq + 40, sq, sq);
  c.fillRect(4 * sq, 3 * sq + 40, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 3 * sq + 40, sq, sq);
  // c.strokeRect(6 * sq, 4 * sq + 40, sq, sq);
  // c.strokeRect(5 * sq, 4 * sq + 40, sq, sq);
  // c.strokeRect(4 * sq, 3 * sq + 40, sq, sq);

  // Reverse Z Piece with Canvas
  c.fillStyle = "indigo";
  c.fillRect(5 * sq, 5 * sq + 130, sq, sq);
  c.fillRect(6 * sq, 5 * sq + 130, sq, sq);
  c.fillRect(5 * sq, 6 * sq + 130, sq, sq);
  c.fillRect(4 * sq, 6 * sq + 130, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 5 * sq + 130, sq, sq);
  // c.strokeRect(6 * sq, 5 * sq + 130, sq, sq);
  // c.strokeRect(5 * sq, 6 * sq + 130, sq, sq);
  // c.strokeRect(4 * sq, 6 * sq + 130, sq, sq);

  // L Piece with Canvas
  c.fillStyle = "yellow";
  c.fillRect(5 * sq, 7 * sq + 140, sq, sq);
  c.fillRect(6 * sq, 7 * sq + 140, sq, sq);
  c.fillRect(4 * sq, 7 * sq + 140, sq, sq);
  c.fillRect(4 * sq, 8 * sq + 140, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 7 * sq + 140, sq, sq);
  // c.strokeRect(6 * sq, 7 * sq + 140, sq, sq);
  // c.strokeRect(4 * sq, 7 * sq + 140, sq, sq);
  // c.strokeRect(4 * sq, 8 * sq + 140, sq, sq);

  // Reverse L Piece with Canvas
  c.fillStyle = "orange";
  c.fillRect(5 * sq, 9 * sq + 150, sq, sq);
  c.fillRect(6 * sq, 9 * sq + 150, sq, sq);
  c.fillRect(4 * sq, 9 * sq + 150, sq, sq);
  c.fillRect(6 * sq, 10 * sq + 150, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 9 * sq + 150, sq, sq);
  // c.strokeRect(6 * sq, 9 * sq + 150, sq, sq);
  // c.strokeRect(4 * sq, 9 * sq + 150, sq, sq);
  // c.strokeRect(6 * sq, 10 * sq + 150, sq, sq);

  // Square Piece with Canvas
  c.fillStyle = "violet";
  c.fillRect(5 * sq, 11 * sq + 160, sq, sq);
  c.fillRect(6 * sq, 11 * sq + 160, sq, sq);
  c.fillRect(5 * sq, 12 * sq + 160, sq, sq);
  c.fillRect(6 * sq, 12 * sq + 160, sq, sq);
  // c.lineWidth = 2;
  // c.strokeStyle = "black";
  // c.strokeRect(5 * sq, 11 * sq + 160, sq, sq);
  // c.strokeRect(6 * sq, 11 * sq + 160, sq, sq);
  // c.strokeRect(5 * sq, 12 * sq + 160, sq, sq);
  // c.strokeRect(6 * sq, 12 * sq + 160, sq, sq);

  // c.clearRect(0, 0, sq * 10, sq * 20);
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
  }
};
