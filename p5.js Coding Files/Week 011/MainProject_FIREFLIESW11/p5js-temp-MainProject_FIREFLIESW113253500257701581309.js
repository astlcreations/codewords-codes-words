let leaf1;
let leaf2;

function preload() {
wildletters = loadFont('data/WildLetters.ttf');    
leaf1 = loadImage('data/leaf1.png');
leaf2 = loadImage('data/leaf2.png');
}

var myText= "But as the subculture Hellraiser helped build will always remember, every virus turned out into the computer wilds – like every tag sprayed onto the hard urban landscape – is also a carrier for the purest and strongest signal a human being can send. “Remember my name,” the virus says, which – after all – is another way of saying; “I’m alive.”   ";
var randomFireflies = [];

function setup() {
createCanvas (windowWidth, windowHeight);
background (19,23,12);
//background (255);

//Leaves
//x (top corner placement), y (top left corner), width, height
//image(leaf1, windowWidth/50, windowHeight/10, 250, 150);
//image(leaf2, windowWidth/10, windowHeight/50, 150, 150);

//Randomising the circles shapes
//yellow center
c = int(random(20,45));
d = int(random(20,45));
//orange middle
x = int(random(50,50));
y = int(random(50,50));
//white outside
a = int(random(150,200));
b = int(random(150,200));

size = int(random(6,100));

//initial instruction (need to work on how to show/fade out when user clicks)
fill(0,50,0);
textSize (20);
textFont("helvetica");
textAlign(CENTER);
text('Click to release the fireflies');

}
 
function draw() {
background ((19,23,12),7);  
fill ((19,23,12),7);  
  
//The words
fill(17,17,12);
textSize(50);
textFont('wildletters');
textLeading(60);
text(myText, int(windowWidth/5), windowHeight/7, int(windowWidth/1.5), windowHeight);
textAlign(LEFT);
}

function mousePressed () {

//Orange Circles
noStroke();
fill (255,130,0); //Bright Orange
ellipse (mouseX,mouseY,y,x); //(centre x, centre y, width, height)
x -= random(-1.2,2);
y += random(-1.2,2);

//Yellow Circles
noStroke();
fill (255, 179, 102); //Faded Orange
ellipse (mouseX,mouseY,d,c); //(centre x, centre y, width, height)
d -= random(-1.2,1.2);
c += random(-1.2,1.2);

//White Faded Brush
noStroke();
fill ((mouseX+mouseY),(mouseX,mouseY)/10);
ellipse (mouseX,mouseY,a,b); //(centre x, centre y, width, height)
a -= random(-2,2);
b += random(-2,2);

}
