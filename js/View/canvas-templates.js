export const drawGrid = grid => {
  let sq = 30;

  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  c.clearRect(0, 0, 300, 600);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      c.fillStyle = grid[i][j] || "black";
      c.fillRect(j * sq, i * sq, sq, sq);
      c.strokeStyle = "rgba(255,255,255,0.2)";
      c.strokeRect(j * sq, i * sq, sq, sq);
    }
  }
};
