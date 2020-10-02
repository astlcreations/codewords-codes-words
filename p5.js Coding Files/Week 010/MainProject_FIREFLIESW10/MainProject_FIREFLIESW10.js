function preload() {
wildletters = loadFont('data/WildLetters.ttf');    
}

var myText= "But as the subculture Hellraiser helped build will always remember, every virus turned out into the computer wilds – like every tag sprayed onto the hard urban landscape – is also a carrier for the purest and strongest signal a human being can send. “Remember my name,” the virus says, which – after all – is another way of saying; “I’m alive.”   ";
var randomFireflies = [];

function setup() {
createCanvas (windowWidth, windowHeight);
background (69,82,39);
//textSize (55);
//textFont("wildletters");
//textAlign(CENTER);

//Randomising the circles shapes
//yellow center
c = int(random(20,45));
d = int(random(20,45));
//orange middle
x = int(random(25,50));
y = int(random(25,50));
//white outside
a = int(random(100,150));
b = int(random(100,150));

size = int(random(6,100));

//initial instruction (need to work on how to show/fade out when user clicks)
fill(0,50,0);
textSize (20);
textFont("helvetica");
textAlign(CENTER);
text('Click to release the fireflies');

}
 
function draw() {
background ((69,82,39),1.5);  
fill ((69,82,39),1.5);  
  
//The words
fill(69,82,39);
textSize(55);
textFont('wildletters');
textLeading(60);
text(myText, int(windowWidth/6), windowHeight/8, int(windowWidth/1.4), windowHeight);
textAlign(CENTER);
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
