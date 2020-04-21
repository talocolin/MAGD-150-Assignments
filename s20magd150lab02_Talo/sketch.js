function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //Planet
  push();
  stroke(255, 255, 255, 30);
  strokeWeight(20);
  let c = color('#6C40EB');
  fill(c);
  circle(100,750,1000);
  pop();
  
  //Distant Planet
  push();
  stroke(255, 255, 255, 10);
  strokeWeight(10);
  fill(0,50,150,255);
  arc(100, 60, 50, 50, 10,-3);
  pop();
  
  //Ship
  push();
  colorMode(HSB, 255);
  noStroke();
  fill(25, 255, 255, 255);
  rotate(0.76);
  translate(187,-100);
  quad(32, 15, 65, 40, 47, 40, 40, 55);
  pop();
  
  //Trail
  push();
  colorMode(RGB, 255);
  noStroke();
  fill(200,0,0,150);
  bezier(400, 1000, 0, 0, 400, 0, 30, 400);
  pop();
  
  
}        