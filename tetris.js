import Game from "./js/Game/game";
import {
  previewPiece,
  drawGamePreview,
  drawGameOver
} from "./js/View/canvas-templates";
import { pieces } from "./js/Pieces/piece-options";
import { gameoverGrid } from "./js/View/gameover";

const colors = [
  // "#E8B8AB",
  // "#B9CBFF",
  // "#A0E8B5",
  // "#14CFBD",
  // "#D68E05",
  // "#FFF19C",
  // "#D6AFFF",

  //rainbow in order
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4b0082 ",
  "#9400D3"
];

document.addEventListener("DOMContentLoaded", () => {
  const play = document.getElementById("play");
  const classic = document.getElementById("classic");
  const pentris = document.getElementById("pentris");
  const combo = document.getElementById("combo");
  let game = new Game(pieces.classic, 1, colors);

  const start = e => {
    const play = document.getElementById("play");

    if (play.innerText === "Play") {
      const selected = document.getElementsByClassName("selected")[0];
      game = new Game(pieces[selected.id], 1, colors);
      game.play();
      play.innerText = "Pause";
    } else {
      game.pause();
    }
  };

  const chooseMode = e => {
    if (play.innerText === "Play") {
      const selected = document.getElementsByClassName("selected")[0];
      selected.className = "game-selection-button";
      e.target.className = "selected";
      previewPiece(pieces[e.target.id][0], "saved-piece");
      previewPiece(pieces[e.target.id][4], "next-piece");
      drawGamePreview(pieces[e.target.id]);
    }
  };

  play.addEventListener("click", start);
  classic.addEventListener("click", chooseMode);
  pentris.addEventListener("click", chooseMode);
  combo.addEventListener("click", chooseMode);

  drawGamePreview(pieces.classic);
  previewPiece(pieces.classic[0], "saved-piece");
  previewPiece(pieces.classic[4], "next-piece");
  drawGameOver(gameoverGrid);
});
