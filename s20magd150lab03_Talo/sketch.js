a = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  //Growing Bubble
   a = a+1.5;
  circle(200, 200, a, height);
  
  if(a>width){
    a=0;
  }
  
  //Flat Bubble
  let mp = map(mouseY, 0, width, 0, 400, true);
  ellipse(mp, 200, 200, 25);
  
  //Mouse Tracking Bubble and Constrained Bubble
  circle(mouseX, mouseY, 30);
  let xc = constrain(mouseX, 150, 250);
  let xy = constrain(mouseY, 150, 250);
  circle(xc, xy, 10);
  
  //Print
  let m = max(100,200/3);
  let mm = min(100-20,200);
  print(m*mm);
  print("Frame Count" + " = " + frameCount);
  
  
}