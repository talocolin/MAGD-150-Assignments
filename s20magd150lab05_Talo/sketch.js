var circleX, circleY;
var circleSize = 35;
var circleColor;
var circleHighlight;
var circleOver = false;
var state = false;
var cx,cy;
var cspeed;
var x = 50;
var y = 50;
var w = 300;
var h = 300;

function setup() {
  createCanvas(400, 400);
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  circleX = 370;
  circleY = 370;
  cx=75;
  cy=height/2;
  cspeed =3;
  ellipseMode(CENTER);
}

function draw() {
  update(mouseX, mouseY);
  background(210, 180, 140);
  
  fill(255);
  noStroke();
  text('On', 362, 345);
  
  fill(255);
  noStroke();
  text('Press and hold on screen to create static', 90, 380);

  push();
  noStroke();
  fill(0);
  rect(x,y,w,h);
  if(mouseIsPressed){
    if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
        fill(random(100,200));
        rect(x,y,w,h);
    }
  }

  pop();
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
  
  push();
  if (state){
   fill(250,0,0);
   ellipse(cx,cy,50,50);
   cx+= cspeed;  
  
  if(cx-25 <= 50 || cx+28>350){  
    cspeed *= -1; 
    }
  }
  pop();
  
}

function update( x,  y) {
  if (overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
  } else {
    circleOver = false;
}
}

function mousePressed(){
 if (circleOver == true){
  state = !state; 
 }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}