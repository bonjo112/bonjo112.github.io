// Interactive Scene
// Nathan Androsoff
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let Tutorial;
let a;
let b;
let c;
let d;
let e;
let Solution;
let possibleSolutions;
let xClicked, yClicked;
let xClicked2, yClicked2;
let arrowPressed;
let v0;
let v1;
let one, two, three, four, five,six , seven, eight, nine;
let base;


function setup() {
  createCanvas(windowHeight , windowHeight);
  background(220);
  //defining solutions
  let Tutorial = [1,1,1,1,1,1,1,1,1];
  let a = [1,1,0,1,2,1,1,1,1];
  let b = [1,2,1,2,1,1,1,2,1];
  let c = [3,1,1,1,2,1,1,1,1];
  let d = [2,3,1,0,3,1,2,2,0];
  let e = [2,0,1,2,4,3,1,1,0];
  
  let possibleSolutions = [Tutorial,a,b,c,d,e]; 
  displayCircleGrid();
  pickASolution();
}


function draw() {
  
  selectBaseWithSpace();
  drawArrowsOnClick("black");
  //checkArrowsEndPosition();
  //isPuzzleDone();
}



//Change base 
function selectBaseWithSpace() {
  if (keyIsPressed && keyCode === 32){
    base = {
      x: mouseX,
      y: mouseY
    };
  }
}

//draw arrow
function drawArrowsOnClick(myColor){
  if(mouseIsPressed){
    let v0  = createVector(xClicked,yClicked);
    let v1 = createVector(mouseX, mouseY);
    let arrowSize = 7;
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    // translate(v0.x, v0.y);
    line(v1.x, v1.y , Number(base.x), Number(base.y));
    rotate(v1.heading());
    translate(v1.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, - arrowSize / 2, arrowSize, 0);
    v1 = (mouseX, mouseY);
  }
}


function pickASolution() {
  if (Tutorial === "done"){
    Solution = possibleSolutions[Math.random(possibleSolutions)];
  }
  else {
    Solution = Tutorial;
  }
  if (Solution === Tutorial) {
    one = 1;
    two = 1;
    three = 1;
    four = 1; 
    five = 1 ;
    six = 1;
    seven = 1;
    eight = 1;
    nine = 1;
  }
  else if (Solution === a) {
    one = 1;
    two = 1;
    three = 0;
    four = 1; 
    five = 2 ;
    six = 1;
    seven = 1;
    eight = 1;
    nine = 1;
  }
  else if (Solution === b) {
    one = 1;
    two = 2;
    three = 1;
    four = 2; 
    five = 1 ;
    six = 1;
    seven = 1;
    eight = 2;
    nine = 1;
  }
  else if (Solution === c) {
    one = 3;
    two = 1;
    three = 1;
    four = 1; 
    five = 2;
    six = 1;
    seven = 1;
    eight = 1;
    nine = 1;
  }
  else if (Solution === d) {
    one = 2;
    two = 3;
    three = 1;
    four = 0; 
    five = 3 ;
    six = 1;
    seven = 2;
    eight = 2;
    nine = 0;
  }
  else if (Solution === e) {
    one = 2;
    two = 0;
    three = 1;
    four = 2; 
    five = 4;
    six = 3;
    seven = 1;
    eight = 1;
    nine = 0;
  }
}
//function checkArrowsEndPosition() {



function IsPuzzleDone() {
  if(one === 0 && two === 0 && three === 0 && four === 0 && five === 0 && six === 0 && seven === 0 && eight === 0 && nine === 0){
    console.log("Complete");
    pickASolution();
  }
}
//displays red balls with numbers
function displayCircleGrid() {
  
  
  textAlign(CENTER, CENTER);
  textSize(32);
  //1
  noStroke();
  fill("red");
  ellipse(width / 2 , height / 2 , 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1", width/2, height/2);
  }
  else if (Solution === a){
    text("1", width/2, height/2);
  }
  else if (Solution === b){
    text("1", width/2, height/2);
  }
  else if (Solution === c){
    text("3", width/2, height/2);
  }
  else if (Solution === d) {
    text("2", width/2, height/2);
  }
  else if (Solution === e){
    text("2", width/2, height/2);
  }
  else {
    text("1", width/2, height/2);
  }

  //2 
  fill("red");
  ellipse(width / 2 + 100 , height / 2  , 50, 50 );
  fill("white");
  if (Solution === Tutorial){
    text("1", width/2 + 100, height/2);
  }
  else if (Solution === a){
    text("1", width/2 + 100, height/2);
  }
  else if (Solution === b){
    text("2", width/2 + 100 , height/2);
  }
  else if (Solution === c){
    text("1", width/2 + 100, height/2);
  }
  else if (Solution === d) {
    text("3", width/2 + 100, height/2);
  }
  else if (Solution === e){
    text("0", width/2 + 100, height/2);
  }
  else {
    text("2", width/2 + 100, height/2);
  }

  //3
  fill("red");
  ellipse(width / 2 + 200 , height / 2  , 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1", width / 2 + 200 , height / 2 );
  }
  else if (Solution === a){
    text("0", width/2 + 200, height/2);
  }
  else if (Solution === b){
    text("1", width/2 + 200, height/2);
  }
  else if (Solution === c){
    text("1", width/2 + 200, height/2);
  }
  else if (Solution === d) {
    text("1", width/2 + 200, height/2);
  }
  else if (Solution === e){
    text("1", width/2 + 200, height/2);
  }
  else {
    text("3", width/2 + 200, height/2);
  }

  //4
  fill("red");
  ellipse(width / 2, height / 2 - 65, 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1",width / 2, height / 2 - 65);
  }
  else if (Solution === a){
    text("1", width/2, height/2 - 65);
  }
  else if (Solution === b){
    text("2", width/2, height/2 - 65);
  }
  else if (Solution === c){
    text("1", width/2, height/2 -65);
  }
  else if (Solution === d) {
    text("0", width/2, height/2) - 65;
  }
  else if (Solution === e){
    text("2", width/2, height/2 - 65);
  }
  else {
    text("4",width / 2, height / 2 - 65);
  }
  //5
  fill("red");
  ellipse(width / 2 + 100, height / 2 - 65, 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1",width / 2 + 100, height / 2 - 65);
  }
  else if (Solution === a){
    text("2", width/2 + 100, height/2 - 65);
  }
  else if (Solution === b){
    text("1", width/2 + 100, height/2 - 65);
  }
  else if (Solution === c){
    text("2", width/2 + 100, height/2 -65);
  }
  else if (Solution === d) {
    text("3", width/2 + 100, height/2) - 65;
  }
  else if (Solution === e){
    text("4", width/2 + 100, height/2 - 65);
  }
  else {
    text("5",width / 2 + 100, height / 2 - 65 );
  }
  //6
  fill("red");
  ellipse(width / 2 + 200, height / 2 - 65, 50, 50); 
  fill("white");
  if (Solution === Tutorial){
    text("1",width / 2 + 200, height / 2 - 65);
  }
  else if (Solution === a){
    text("1", width/2 + 200, height/2 - 65);
  }
  else if (Solution === b){
    text("1", width/2 + 200, height/2 - 65);
  }
  else if (Solution === c){
    text("1", width/2 + 200, height/2 -65);
  }
  else if (Solution === d) {
    text("1", width/2 + 200, height/2) - 65;
  }
  else if (Solution === e){
    text("3", width/2 + 200, height/2 - 65);
  }
  else {
    text("6",width / 2 + 200, height / 2 - 65 );
  }
  //7
  fill("red");
  ellipse(width / 2, height / 2 - 130, 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1",width / 2, height / 2 - 130);
  }
  else if (Solution === a){
    text("1", width/2 , height/2 - 65);
  }
  else if (Solution === b){
    text("1", width/2 , height/2 - 65);
  }
  else if (Solution === c){
    text("1", width/2 , height/2 -65);
  }
  else if (Solution === d) {
    text("2", width/2 , height/2) - 65;
  }
  else if (Solution === e){
    text("1", width/2 , height/2 - 65);
  }
  else {
    text("7",width / 2, height / 2 - 130);
  }
  //8
  fill("red");
  ellipse(width / 2 + 100, height / 2 - 130, 50, 50);
  fill("white");
  if (Solution === Tutorial){
    text("1", width / 2 + 100, height / 2 - 130);
  }
  else if (Solution === a){
    text("1", width/2 + 100, height/2 - 130);
  }
  else if (Solution === b){
    text("2", width/2 + 100, height/2 - 130);
  }
  else if (Solution === c){
    text("1", width/2 + 100, height/2 - 130);
  }
  else if (Solution === d) {
    text("2", width/2 + 100, height/2 - 130);
  }
  else if (Solution === e){
    text("1", width/2 + 100, height/2 - 130);
  }
  else {
    text("8", width / 2 + 100, height / 2 - 130);
  }

  //9 
  fill("red");
  ellipse(width / 2 + 200, height / 2 - 130, 50, 50); 
  fill("white");
  if (Solution === Tutorial){
    text("1",width / 2 + 200, height / 2 - 130);
  }
  else if (Solution === a){
    text("1", width/2 + 200, height/2 - 130);
  }
  else if (Solution === b){
    text("1", width/2 + 200, height/2 - 130);
  }
  else if (Solution === c){
    text("1", width/2 + 200, height/2 - 130);
  }
  else if (Solution === d) {
    text("0", width/2 + 200, height/2 - 130);
  }
  else if (Solution === e){
    text("0", width/2 + 200, height/2 - 130);
  }
  else {
    text("9",width / 2 + 200, height / 2 - 130 );
  }
}

