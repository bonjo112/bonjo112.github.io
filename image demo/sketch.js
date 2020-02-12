// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let mario;

function preload() {
  mario = loadImage("assests/super-mario-illustration-ong-clip-art.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(mouseX, mouseY, 75, 75);
  image(mario, mouseX, mouseY);
}
