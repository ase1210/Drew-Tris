import { drawGrid } from "./js/View/canvas-templates";

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, "#D6AFFF", "#D6AFFF", 0, 0, 0, 0, 0, 0],
  [0, 0, "#D6AFFF", "#D6AFFF", 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, "#E8B8AB", 0, 0, 0, 0, 0, 0, 0],
  ["#E8B8AB", "#E8B8AB", "#E8B8AB", 0, 0, 0, 0, 0, 0, 0],
  ["#B9CBFF", "#B9CBFF", 0, 0, 0, 0, 0, 0, 0, 0],
  ["#B9CBFF", "#B9CBFF", 0, 0, 0, 0, 0, 0, 0, 0],
  ["#A0E8B5", "#A0E8B5", 0, 0, 0, 0, 0, 0, 0, 0],
  ["#A0E8B5", 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ["#A0E8B5", "#FFF19C", 0, 0, 0, 0, 0, 0, 0, 0],
  ["#FFF19C", "#FFF19C", "#FFF19C", 0, 0, 0, "#14CFBD", "#D68E05", 0, 0]
];

document.addEventListener("DOMContentLoaded", () => {
  // const canvas = document.getElementById("canvas");

  // const c = canvas.getContext("2d");
  // window.drawGrid = drawGrid;
  // window.grid = grid;

  function animate() {
    console.log("animate");
    let last = grid.pop();
    grid.unshift(last);
    // grid[19][9] = "#FFF19C";
    drawGrid(grid);
  }
  // window.animate = animate;

  drawGrid(grid);

  setInterval(animate, 1000);
});
