import Game from "./js/Game/game";
import IPiece from "./js/Pieces/Classic/i-piece";
import SPiece from "./js/Pieces/Classic/s-piece";
import TPiece from "./js/Pieces/Classic/t-piece";
import ZPiece from "./js/Pieces/Classic/z-piece";
import OPiece from "./js/Pieces/Classic/o-piece";
import JPiece from "./js/Pieces/Classic/j-piece";
import LPiece from "./js/Pieces/Classic/l-piece";
import PXPiece from "./js/Pieces/Pentris/px-piece";
import PZPiece from "./js/Pieces/Pentris/pz-piece";
import PSPiece from "./js/Pieces/Pentris/ps-piece";
import PBPiece from "./js/Pieces/Pentris/pb-piece";
import PDPiece from "./js/Pieces/Pentris/pd-piece";
import PUPiece from "./js/Pieces/Pentris/pu-piece";
import PWPiece from "./js/Pieces/Pentris/pw-piece";
import PTPiece from "./js/Pieces/Pentris/pt-piece";
import PLPiece from "./js/Pieces/Pentris/pl-piece";
import PJPiece from "./js/Pieces/Pentris/pj-piece";
import { previewPiece } from "./js/View/canvas-templates";

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
  const canvas = document.getElementById("tetris");
  const c = canvas.getContext("2d");
  const sq = canvas.width / 10;
  canvas.width = sq * 10;
  canvas.height = sq * 20;

  c.fillStyle = "lightgrey";
  c.fillRect(0, 0, 10 * sq, 20 * sq);

  const play = document.getElementById("play");

  const start = () => {
    game.play();
    play.removeEventListener("click", start);
  };
  play.addEventListener("click", start);
  // const removeHandler = () => {};
  const pieces = [];
  // pieces.push(new PJPiece("#D6AFFF"));
  // pieces.push(new PLPiece("#AFAFAF"));
  // pieces.push(new PWPiece("#AFAFAF"));
  // pieces.push(new PTPiece("#D6AFFF"));
  // pieces.push(new PUPiece("#FFF19C"));
  // pieces.push(new PBPiece("#D68E05"));
  // pieces.push(new PDPiece("#E8B8AB"));
  // pieces.push(new PXPiece("#B9CBFF"));
  // pieces.push(new PSPiece("#A0E8B5"));
  // pieces.push(new PZPiece("#14CFBD"));

  pieces.push(new LPiece("#E8B8AB"));
  pieces.push(new OPiece("#B9CBFF"));
  pieces.push(new JPiece("#A0E8B5"));
  pieces.push(new SPiece("#14CFBD"));
  pieces.push(new ZPiece("#D68E05"));
  pieces.push(new IPiece("#FFF19C"));
  pieces.push(new TPiece("#D6AFFF"));
  const game = new Game(pieces, 1, colors);
  window.game = game;
  previewPiece(pieces[0], "saved-piece");
  previewPiece(pieces[1], "next-piece");
});
