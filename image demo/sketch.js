// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let mario;

function preload() {
  mario = loadImage("assests/super-mario-illustration-png-clip-art.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(mouseX, mouseY, 75, 75);
  image(mario, mouseX, mouseY, scalar*(mario.widthh,scalar*mario.height));
}

function mouseWheel (event){
  if event.delta > 0 {
    scalar *= 1.1;
  }
  else{
    scalar *= 0.9;
  }
}