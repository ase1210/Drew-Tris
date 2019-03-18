const canvas = document.getElementById("title-canvas");

const titleSection = document.getElementById("title-section");
canvas.width = titleSection.offsetWidth;
canvas.height = titleSection.offsetHeight;

var c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined
};

let maxRadius = titleSection.offsetHeight / 10;
let colorsArr = ["red", "blue", "green", "black", "orange"];

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", e => {
  const titleSection = document.getElementById("title-section");

  canvas.width = titleSection.offsetWidth;
  canvas.height = titleSection.offsetHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function() {
    if (this.x + radius > titleSection.offsetWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radius > titleSection.offsetHeight || this.y - radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity

    if (
      mouse.x - this.x < 40 &&
      mouse.x - this.x > -40 &&
      mouse.y - this.y < 40 &&
      mouse.y - this.y > -40 &&
      this.radius < maxRadius
    ) {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

let circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < titleSection.offsetHeight * 2; i++) {
    let radius = Math.floor(Math.random() * 10) + 1;
    let x = Math.random() * (titleSection.offsetWidth - radius * 2) + radius;
    let y = Math.random() * (titleSection.offsetHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, titleSection.offsetWidth, titleSection.offsetHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
  c.fillStyle = "#EDF7F5";
  c.fillRect((window.innerWidth / 5) * 2 + 25, 1, 192, 68);
  c.fillStyle = "black";
  c.font = "" + 48 + "pt Roboto";
  c.fillText("Pentris", (window.innerWidth / 5) * 2 + 20, 55);
}
init();
animate();
