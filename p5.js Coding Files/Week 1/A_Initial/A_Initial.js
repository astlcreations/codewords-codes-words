function setup() {
createCanvas (500,500);

background (225,0,0);
strokeWeight (50);
stroke (0,0,255);
fill (3, 0, 189);
line (0,250,500,250);
}


function draw() {

strokeWeight(1);
stroke(255,0,0);
noFill(0);
rect (mouseX,mouseY,pmouseX,pmouseY);
strokeWeight(1);
stroke(0,0,255);
noFill(0);
rect (mouseX,mouseY,0,pmouseY);
strokeWeight(2);
fill (255, 0, 0);
triangle(300,400,250,100,400,400);
fill (255,0,0);
triangle(100,400,250,100,200,400);



}
