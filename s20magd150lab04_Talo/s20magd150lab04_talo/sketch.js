var toppings = 0;
var i = 0;

function setup() {
  createCanvas(300, 400);
  colorMode(HSB);
  background(49, 85, 90);
}

function draw() {
  rectMode(CENTER);
  noStroke();
  fill(23, 52, 49);
  rect(150,0,400,100);
  while(i<width){
   fill(348,94,50);
   circle(i,70,40);
    i++;
  }
  fill(0,0,0);
  
//Toppings Counter
  text("Toppings" + " " + toppings, 120, 30);
  print(toppings);
  if(mouseIsPressed || keyIsPressed && mouseIsPressed){
   toppings++;
  }
  
//HEALTH WARNING
  push();
  if(toppings == 10){
   colorMode(RGB);
   fill(255, 0, 0);
   textSize(20);
   textFont('Helvetica');
   text("HEALTH WARNING", width/5, 75); 
  }
  pop();
  
  
}



//Hit ENTER to reset screen and change cheese color
function keyPressed(){
  if(keyCode === ENTER){
    setup();
    toppings = 0;
    i = 0;
  } else {
   return false; 
  }
}



//Mouse click places pepperoni
//Hold a key and click mouse to place bacon
function mousePressed(){
  noStroke();
  fill(348, 94, 62);
  circle(mouseX, mouseY, 75, 75);
  
  if(keyIsPressed && mouseIsPressed){
   fill(339, 66, 68);
   rect(mouseX, mouseY, 75, 75);
    
  } 
  noLoop();
}

function mouseReleased(){
  loop();
}