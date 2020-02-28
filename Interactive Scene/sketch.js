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
let v0;
let v1;


function setup() {
  createCanvas(windowHeight , windowHeight);
  background(220);
  let Tutorial = [1,1,1,1,1,1,1,1,1];
  let a = [1,1,0,1,2,1,1,1,1];
  let b = [1,2,1,2,1,1,1,2,1];
  let c = [3,1,1,1,2,1,1,1,1];
  let d = [2,3,1,0,3,1,2,2,0];
  let e = [2,0,1,2,4,3,1,1,0];
  let possibleSolutions = [Tutorial,a,b,c,d,e]; 
}

function draw() {
  pickASolution();
  displayCircleGrid();
  giveBasePointsOfArrows();
  drawArrowsOnClick(v0, v1, "black");
}

function giveBasePointsOfArrows() {
  if (mouseIsPressed) {
    xClicked = mouseX;
    yClicked = mouseY;
  }
}

function pickASolution() {
  if (Tutorial === "done"){
    Solution = possibleSolutions[Math.random(possibleSolutions)];
  }
  else {
    Solution = Tutorial;
  }
}

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
    text("1", width/2 + 100, height/2,);
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
    text("0", width/2 + 200, height/2) - 130;
  }
  else if (Solution === e){
    text("0", width/2 + 200, height/2 - 130);
  }
  else {
    text("9",width / 2 + 200, height / 2 - 130 );
  }
}

//Change base and vac
function drawArrowsOnClick(myColor) {
  let v0 = createVector(xClicked,yClicked);
  let v1 = createVector(mouseX, mouseY);
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(xClicked, yClicked);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

