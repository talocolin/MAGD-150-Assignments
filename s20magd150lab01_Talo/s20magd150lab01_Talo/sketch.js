function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {

ellipseMode(CENTER);
rectMode(CORNER);

//Moon
fill(255);
ellipse(300, 200, 300, 300);

fill(225);
noStroke();
ellipse(375, 125, 50, 50)

fill(225);
noStroke();
ellipse(335, 165, 15, 15)

//Building Outline
stroke(255);
strokeCap(ROUND);
fill(0);
rect(100, 200, 200, 400);

//Antennas
stroke(0);
line(230, 200, 230, 125);
line(250, 200, 250, 150);

//Stars
stroke(255);
point(30,50);
point(50,75);
point(70, 120);
point(90,90);
point(110,95);
point(80, 75);

point(470,450);
point(450,425);
point(430,380);
point(410,410);
point(390,405);
point(420,425);
}
