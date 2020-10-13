class Wiggle { //move and wiggle circles
constructor (x,y,size) {
  this.x = x;
  this.y = y;
  this.ellipse = size;
} 
 wiggle() {
    speed = (1);
    //this.x += random (-speed, speed);
    //this.y += random (-speed, speed);
  }
display() {
  //* TRANSPARENT TROUBLE
  // background() works but gets super laggy and fill() doesnt work
  background ((19,23,12),7);  
  //* TRANSPARENT TROUBLE
  //white outter
  noStroke();
   fill(255, 219, 173, fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x/1.1,this.y/1.05, this.ellipse, this.ellipse);
 
 //yellow interior
  noStroke();
   fill(222, 171, 55, fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x,this.y, this.ellipse, this.ellipse);
 
  //orange middle
  noStroke();
   fill(227, 135, 16, fade);
  if (fade<0) fadeAmount=0.1; 
  if (fade>200) fadeAmount=-0.1; 
 
  fade += fadeAmount; 
 ellipse(this.x*1.05,this.y*1.1, this.ellipse, this.ellipse);
}
}
