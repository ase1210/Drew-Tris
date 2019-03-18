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
      c.strokeStyle = "rgba(255,255,255,0.2)";
      c.strokeRect(j * sq, (i - 1) * sq, sq, sq);
    }
  }
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
