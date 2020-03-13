
// Your Name
// Date
//
// set interval demo


let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.setInterval(addBall, 500);
}

function draw(){
  background("white");
  moveBalls();
  
  displayBalls();
}

function mousePressed(){
  checkIfHit();
}
function checkIfHit(){
  for (let i=0; i<ballArray.length - 1 ; i --){
    let distaneToMouse = dist(mouseX,mouseY,ballArray[i].x,ballArray[i].y);
    if (distaneToMouse < ballArray[i].radius){
      ballArray.splice(i, 1);
      // ballArray[i].color = ("black");

    }
  }
}
function moveBalls() {
  for (let i =0; i< ballArray.length;i++){
    let dx = random(-10,10);
    let dy = random(-10,10);
    ballArray[i].x += dx;
    ballArray[i].y += dy;
  }
}
function displayBalls(){
  noStroke();
  for (let i=0; i<ballArray.length; i++){
    fill(ballArray[i].color);
    circle(ballArray[i].x,ballArray[i].y,ballArray[i].radius);
  }
}
function addBall(){
  let thisBall = {
    x: random(width),
    y: random(height),
    radius: random(25,50),
    color: color(random(255),random(255),random(255),random(255)),
  };
  ballArray.push(thisBall);
}

