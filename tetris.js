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
import { previewPiece, drawGamePreview } from "./js/View/canvas-templates";

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

  const start = () => {
    const play = document.getElementById("play");
    play.style.zIndex = "-1";
    game.play();
    // play.removeEventListener("click", start);
  };
  play.addEventListener("click", start);

  const classicPieces = [];
  const pieces = [];
  pieces.push(new PJPiece("#D6AFFF"));
  pieces.push(new PLPiece("#AFAFAF"));
  pieces.push(new PWPiece("#AFAFAF"));
  pieces.push(new PTPiece("#D6AFFF"));
  pieces.push(new PUPiece("#FFF19C"));
  pieces.push(new PBPiece("#D68E05"));
  pieces.push(new PDPiece("#E8B8AB"));
  pieces.push(new PXPiece("#B9CBFF"));
  pieces.push(new PSPiece("#A0E8B5"));
  pieces.push(new PZPiece("#14CFBD"));

  classicPieces.push(new LPiece("#D6AFFF"));
  classicPieces.push(new OPiece("#AFAFAF"));
  classicPieces.push(new JPiece("#FFF19C"));
  classicPieces.push(new SPiece("#D68E05"));
  classicPieces.push(new ZPiece("#E8B8AB"));
  classicPieces.push(new IPiece("#A0E8B5 "));
  classicPieces.push(new TPiece("#14CFBD"));
  const game = new Game(classicPieces, 1, colors);
  window.game = game;
  drawGamePreview(classicPieces, colors);
  previewPiece(pieces[8], "saved-piece");
  previewPiece(pieces[9], "next-piece");
});
