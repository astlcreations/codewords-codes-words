function preload() {
wildletters = loadFont('data/WildLetters.ttf');    
}

var myText= "But as the subculture Hellraiser helped build will always remember, every virus turned out into the computer wilds – like every tag sprayed onto the hard urban landscape – is also a carrier for the purest and strongest signal a human being can send. “Remember my name,” the virus says, which – after all – is another way of saying; “I’m alive.”   ";
//make sure quotation marks are the systems and not just copy and pasted

let angle = 0;

function setup() {
createCanvas (windowWidth, windowHeight);
//gradient colour setup
c1 = color(124,115,74);
c2 = color(69,82,39);
setGradient(c1, c2);

textSize (55);
textFont("wildletters");
textAlign(LEFT);
fill(0,200,0);

}
 
function draw() {
//The words
fill(252,0,131);
textLeading(60);
text(myText, int(windowWidth/6), windowHeight/8, int(windowWidth/1.4), windowHeight);
//translate(100,100);
//rotate();

//The circle Brush
fill ((mouseX+mouseY),mouseX/2,mouseY/2); // "/2" devide by half of colours to get full range
ellipse (mouseX,mouseY,100,100); //(centre x, centre y, width, height)
//stroke(150,0,0); //line colour
//strokeWeight (5); //line thickness


}

//gradient functioning
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}
