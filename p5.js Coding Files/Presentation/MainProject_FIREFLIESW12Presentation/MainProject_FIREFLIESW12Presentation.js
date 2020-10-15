//Computer Wilds by Amy Ledger
//With coding help from:
//Seonghyeon Kim
//Karen Ann Donnachie
//Remarkability

var xPosition, yPosition, size, rand;
var fireFlies = [];
var fade;
var fadeAmount = 1;
var myText= "But as the subculture Hellraiser helped build will always remember, every virus turned out into the computer wilds – like every tag sprayed onto the hard urban landscape – is also a carrier for the purest and strongest signal a human being can send. “Remember my name,” the virus says, which – after all – is another way of saying; “I’m alive.”   ";
var randomFireflies = [];

function preload() {
wildletters = loadFont('data/WildLetters.ttf');    
}

function setup() {
createCanvas (windowWidth, windowHeight);
background (17,17,12);
fade = 0;
size = int(random(6,80));
}

function draw() {
background ((17,17,12),7);  
fill ((17,17,12),7); 
for (var i=0; i<fireFlies.length; i++){
  fireFlies[i].display();
}
//The words
fill(17,17,12);
textSize(55);
textFont('wildletters');
textLeading(60);
text(myText, int(windowWidth/6), windowHeight/9, int(windowWidth/1.5), windowHeight);
textAlign(CENTER);
}

function mousePressed () {
fill ((17,17,12),7); 
size = int(random(6,60));
fireFlies.push(new Wiggle (mouseX, mouseY, size));
}

function mouseDragged () {
 fill ((17,17,12),7);   
size = int(random(6,60));
fireFlies.push(new Wiggle (mouseX, mouseY, size));

}
