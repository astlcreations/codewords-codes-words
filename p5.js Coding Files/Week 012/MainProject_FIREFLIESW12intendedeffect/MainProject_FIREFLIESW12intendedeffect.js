var xPosition, yPosition, size, rand;
var fireFlies = [];
var fade;
var fadeAmount = 1;
var myText= "But as the subculture Hellraiser helped build will always remember, every virus turned out into the computer wilds – like every tag sprayed onto the hard urban landscape – is also a carrier for the purest and strongest signal a human being can send. “Remember my name,” the virus says, which – after all – is another way of saying; “I’m alive.”   ";
var randomFireflies = [];

function preload() {
wildletters = loadFont('data/WildLetters.ttf');    
wildsound = loadSound('data/OutsideRecording.mp3');
}

function setup() {
createCanvas (windowWidth, windowHeight);
background (19,23,12);

wildsound.loop();
wildsound.play();
  analyzer = new p5.Amplitude();
  analyzer.setInput(wildsound);
  
fade = 0;
size = int(random(6,80));
  
//initial instruction (need to work on how to show/fade out when user clicks)
fill(255);
textSize (20);
textFont("helvetica");
textAlign(CENTER);
text('Click to release the fireflies');

}
 
function draw() {
background ((19,23,12),7);  
fill ((19,23,12),7); 

for (var i=0; i<fireFlies.length; i++){
  fireFlies[i].display();
}
  
//The words
fill(17,17,12);
textSize(55);
textFont('wildletters');
textLeading(60);
text(myText, int(windowWidth/5), windowHeight/7, int(windowWidth/1.5), windowHeight);
textAlign(LEFT);
}

function mousePressed () {
fill ((19,23,12),7); 
size = int(random(6,100));
fireFlies.push(new Wiggle (mouseX, mouseY, size));
}

function mouseDragged () {
 fill ((19,23,12),7);   
size = int(random(6,100));
fireFlies.push(new Wiggle (mouseX, mouseY, size));

}
