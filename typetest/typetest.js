function preload() {
// ensure the .ttf or .otf font is stored in the data directory (of process file)
//"function preload()" is set up before setup() and draw() are called
// add name at start so name written works for font
candynight = loadFont('data/candynight.otf');
//CANT HAVE FONT FILES WITH SPACES IN IT
}
var spin=0;
var letterSize;

function setup() {
createCanvas(600,600);
background(240);
fill (0);
angleMode(DEGREES);
//textSize(40); //text size in pixels eg.32 pixels here
//textFont (bookmanpressscript);
//textFont(font,32); all in one line
textAlign(CENTER); //CENTER, LEFT, RIGHT
frameRate (15);
}


function draw() {
fill(0); //text ink colour
translate(300,300);
rotate(spin);
textSize(letterSize);
textFont(candynight);
text ('Candy Night is the best kind of night', 0,0);
spin+=map(mouseX,0,600,-10,10); //this will make the mouseX affect the spin direction and speed
letterSize=map(mouseY,0,600,8,72);
//spin=map(mouseX,0,600,-10,10);
//spin=spin+int(mouseX/50-300); //spin=spin+( a number) for spin speed


noStroke();
fill(240); //writting over layers
pop();
background(240,30);

}
