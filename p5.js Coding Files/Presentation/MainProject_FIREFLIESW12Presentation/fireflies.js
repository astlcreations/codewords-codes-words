class Wiggle { //move and fade circles
constructor (x,y,size) {
  this.x = x;
  this.y = y;
  this.ellipse = size;
} 
 wiggle() {
    speed = (1);
  }
display() {
  fill ((17,17,12),7);  
  //white outter
  noStroke();
   fill((255, 219, 173),mouseX/15,mouseY/5, fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x/1.05,this.y/1.05, this.ellipse, this.ellipse);
 
 //yellow interior
  noStroke();
   fill((222, 171, 55),mouseX/15,mouseY/5,fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x,this.y, this.ellipse, this.ellipse);
 
  //orange middle
  noStroke();
   fill((227, 255, 100),mouseX/15,mouseY/5, fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x*1.05,this.y*1.05, this.ellipse*1.5, this.ellipse*1.5);
}
}
