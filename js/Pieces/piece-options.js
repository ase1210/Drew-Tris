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
const tPiece = new TPiece("#FF0000");
const iPiece = new IPiece("#FF7F00");
const oPiece = new OPiece("#FFFF00");
const lPiece = new LPiece("#00FF00");
const jPiece = new JPiece("#0000FF");
const sPiece = new SPiece("#4b0082");
const zPiece = new ZPiece("#EE82EE");

//Pentris Pieces
const pbPiece = new PBPiece("#FF0000");
const pdPiece = new PDPiece("#FF7F00");
const piPiece = new PIPiece("#FFFF00");
const pjPiece = new PJPiece("#00FF00");
const plPiece = new PLPiece("#0000FF");
const pwPiece = new PWPiece("#4b0082");
const psPiece = new PSPiece("#EE82EE");
const pzPiece = new PZPiece("#9400D3");

export const pieces = {
  classic: [lPiece, oPiece, jPiece, sPiece, zPiece, iPiece, tPiece],
  pentris: [
    pjPiece,
    plPiece,
    pwPiece,
    piPiece,
    pbPiece,
    pdPiece,
    psPiece,
    pzPiece
  ],
  combo: [tPiece, iPiece, oPiece, pjPiece, plPiece, pwPiece, psPiece, pzPiece]
};
