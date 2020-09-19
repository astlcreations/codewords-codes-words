function setup() {
createCanvas (500,500);

background (255, 225,0);
strokeWeight (0);
stroke (0,255,0);
}


function draw() {

strokeWeight(1);
stroke(255,255,0);
noFill(0);
ellipse (mouseX,mouseY,pmouseX,pmouseY);
strokeWeight(1);
stroke(0,255,0);
noFill(0);
ellipse (mouseX,mouseY,0,pmouseX);
strokeWeight(1);
fill (255, 255, 0);
triangle(180,400,240,300,400,400);
fill (255, 255,0);
triangle(100,50,180,400,250,50);

}
