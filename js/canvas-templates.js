const block = 40;

export const drawSquare = (x, y, color, c) => {
  c.fillStyle = color;
  c.fillRect(x * block, y * block, block, block);
  c.strokeStyle = "black";
  c.strokeRect(x * block, y * block, block, block);
};

// T Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 0, 40, 40);
// c.fillRect(240, 0, 40, 40);
// c.fillRect(160, 0, 40, 40);
// c.fillRect(200, 40, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 0, 40, 40);
// c.strokeRect(240, 0, 40, 40);
// c.strokeRect(160, 0, 40, 40);
// c.strokeRect(200, 40, 40, 40);

// // Long Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 90, 40, 40);
// c.fillRect(240, 90, 40, 40);
// c.fillRect(160, 90, 40, 40);
// c.fillRect(280, 90, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 90, 40, 40);
// c.strokeRect(240, 90, 40, 40);
// c.strokeRect(160, 90, 40, 40);
// c.strokeRect(280, 90, 40, 40);

// // Z Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 140, 40, 40);
// c.fillRect(240, 180, 40, 40);
// c.fillRect(200, 180, 40, 40);
// c.fillRect(160, 140, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 140, 40, 40);
// c.strokeRect(240, 180, 40, 40);
// c.strokeRect(200, 180, 40, 40);
// c.strokeRect(160, 140, 40, 40);

// // Reverse Z Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 230, 40, 40);
// c.fillRect(240, 230, 40, 40);
// c.fillRect(200, 270, 40, 40);
// c.fillRect(160, 270, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 230, 40, 40);
// c.strokeRect(240, 230, 40, 40);
// c.strokeRect(200, 270, 40, 40);
// c.strokeRect(160, 270, 40, 40);

// // L Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 320, 40, 40);
// c.fillRect(240, 320, 40, 40);
// c.fillRect(160, 320, 40, 40);
// c.fillRect(160, 360, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 320, 40, 40);
// c.strokeRect(240, 320, 40, 40);
// c.strokeRect(160, 320, 40, 40);
// c.strokeRect(160, 360, 40, 40);

// // Reverse L Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 410, 40, 40);
// c.fillRect(240, 410, 40, 40);
// c.fillRect(160, 410, 40, 40);
// c.fillRect(240, 450, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 410, 40, 40);
// c.strokeRect(240, 410, 40, 40);
// c.strokeRect(160, 410, 40, 40);
// c.strokeRect(240, 450, 40, 40);

// // Square Piece with Canvas
// c.fillStyle = "blue";
// c.fillRect(200, 500, 40, 40);
// c.fillRect(240, 500, 40, 40);
// c.fillRect(200, 540, 40, 40);
// c.fillRect(240, 540, 40, 40);
// c.lineWidth = 2;
// c.strokeStyle = "black";
// c.strokeRect(200, 500, 40, 40);
// c.strokeRect(240, 500, 40, 40);
// c.strokeRect(200, 540, 40, 40);
// c.strokeRect(240, 540, 40, 40);
