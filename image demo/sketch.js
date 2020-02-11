// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gear;

function preload() {
  gear = loadImage("assests/gear.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(mouseX, mouseY, 75, 75);
  // fill("red");
  image(gear, mouseX, mouseY)
}
