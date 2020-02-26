// Interactive Scene
// Nathan Androsoff
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let Tut;
let a;
let b;
let c;
let d;
let e;
let possibleSolutions;

function setup() {
  createCanvas(windowHeight , windowHeight);
  background(220);
}


function draw() {
  definingSolutions();
  displayCircleGrid();
}

function definingSolutions() {
  let Tut = [1,1,1,1,1,1,1,1,1];
  let a = [1,1,0,1,2,1,1,1,1];
  let b = [1,2,1,2,1,1,1,2,1];
  let c = [3,1,1,1,2,1,1,1,1];
  let d = [2,3,1,0,3,1,2,2,0];
  let e = [2,0,1,2,4,3,1,1,0];
  let possibleSolutions = [Tut,a,b,c,d,e];
}

function displayCircleGrid() {
  textAlign(CENTER, CENTER);
  textSize(32);
  //1
  fill("red");
  ellipse(width / 2 , height / 2 , 50, 50);
  fill("black");
  text("1", width/2, height/2);
  //2 
  fill("red");
  ellipse(width / 2 + 100 , height / 2  , 50,50 );
  fill("black");
  text("2", width/2 + 100 , height/2);
  //3
  fill("red");
  ellipse(width / 2 + 200 , height / 2  , 50, 50);
  //4
  fill("red");
  ellipse(width / 2, height / 2 - 65, 50, 50);
  fill("black");
  text("4", width/2, height/2 - 65);
  //5
  fill("red");
  ellipse(width / 2 + 100, height / 2 - 65, 50, 50);
  //6
  fill("red");
  ellipse(width / 2 + 200, height / 2 - 65, 50, 50); 
  //7
  fill("red");
  ellipse(width / 2, height / 2 - 130, 50, 50);
  fill("black");
  text("7", width/2, height/2 - 130);
  //8
  fill("red");
  ellipse(width / 2 + 100, height / 2 - 130, 50, 50);
  //9 
  fill("red");
  ellipse(width / 2 + 200, height / 2 - 130, 50, 50); 
}