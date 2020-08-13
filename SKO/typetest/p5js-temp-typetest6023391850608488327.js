function preload() {
// ensure the .ttf or .otf font is stored in the data directory (of process file)
//"function preload()" is set up before setup() and draw() are called
font = loadFont('data/CandyNight.otf');
loadFont('data/MyriadVariable.oft');
loadFont('data/BookmanPressScript.otf');
//CANT HAVE FONT FILES WITH SPACES IN IT
}

function setup() {
createCanvas(600,600);
background(0,200,0);
fill (0);
textSize(40); //text size in pixels eg.32 pixels here
textFont (BookmanPressScript);
//textFont(font,32); all in one line
textAlign (CENTER); //CENTER, LEFT, RIGHT
}


function draw(){
  textSize(30);
  textFont(CandyNight);
text ('hey', 300,300);
textSize(35);
textFont(MyriadVariable);
text ('babe', 350,350);
textSize(40);
textFont(BookmanPressScript);
text('looking good', 400,400);
}
