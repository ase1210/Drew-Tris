import Game from "./js/Game/game";
import IPiece from "./js/Pieces/Classic/i-piece";
import SPiece from "./js/Pieces/Classic/s-piece";
import TPiece from "./js/Pieces/Classic/t-piece";
import ZPiece from "./js/Pieces/Classic/z-piece";
import OPiece from "./js/Pieces/Classic/o-piece";
import JPiece from "./js/Pieces/Classic/j-piece";
import LPiece from "./js/Pieces/Classic/l-piece";

const colors = [
  "#E8B8AB",
  "#B9CBFF",
  "#A0E8B5",
  "#14CFBD",
  "#D68E05",
  "#FFF19C",
  "#D6AFFF"
];

document.addEventListener("DOMContentLoaded", () => {
  // const board = new Board();
  const pieces = [];
  pieces.push(new LPiece("#E8B8AB"));
  pieces.push(new OPiece("#B9CBFF"));
  pieces.push(new JPiece("#A0E8B5"));
  pieces.push(new SPiece("#14CFBD"));
  pieces.push(new ZPiece("#D68E05"));
  pieces.push(new IPiece("#FFF19C"));
  pieces.push(new TPiece("#D6AFFF"));
  const game = new Game(pieces);
  window.game = game;
});
