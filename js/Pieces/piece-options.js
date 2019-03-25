import OPiece from "./Classic/o-piece";
import LPiece from "./Classic/l-piece";
import JPiece from "./Classic/j-piece";
import IPiece from "./Classic/i-piece";
import SPiece from "./Classic/s-piece";
import ZPiece from "./Classic/z-piece";
import TPiece from "./Classic/t-piece";
import PJPiece from "./Pentris/pj-piece";
import PLPiece from "./Pentris/pl-piece";
import PWPiece from "./Pentris/pw-piece";
import PIPiece from "./Pentris/pi-piece";
import PBPiece from "./Pentris/pb-piece";
import PDPiece from "./Pentris/pd-piece";
import PSPiece from "./Pentris/ps-piece";
import PZPiece from "./Pentris/pz-piece";

// Classic Pieces
const iPiece = new IPiece("#FF0000");
const tPiece = new TPiece("#FF7F00");
const oPiece = new OPiece("#FFFF00");
const lPiece = new LPiece("#00FF00");
const jPiece = new JPiece("#0000FF");
const sPiece = new SPiece("#4b0082");
const zPiece = new ZPiece("#EE82EE");

//Pentris Pieces
const piPiece = new PIPiece("#FF0000");
const pbPiece = new PBPiece("#FF7F00");
const pdPiece = new PDPiece("#FFFF00");
const pjPiece = new PJPiece("#00FF00");
const plPiece = new PLPiece("#0000FF");
const psPiece = new PSPiece("#4b0082");
const pzPiece = new PZPiece("#EE82EE");
const pwPiece = new PWPiece("#9400D3");

export const pieces = {
  classic: [iPiece, tPiece, oPiece, lPiece, jPiece, sPiece, zPiece],
  pentris: [
    piPiece,
    pbPiece,
    pdPiece,
    pjPiece,
    plPiece,
    psPiece,
    pzPiece,
    pwPiece
  ],
  combo: [iPiece, tPiece, oPiece, pjPiece, plPiece, psPiece, pzPiece, pwPiece]
};
