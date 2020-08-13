function preload() {
// ensure the .ttf or .otf font is stored in the data directory (of process file)
//"function preload()" is set up before setup() and draw() are called
font = loadfont('data/CandyNight.otf');
//CANT HAVE FONT FILES WITH SPACES IN IT
}

function setup() {
createCanvas(600,600);
background(255);
fill (0);
textSize(32);
//text size in pixels eg.32 pixels here
textFont (font);
//textFont(font,32); all in one line
//textAlign (LEFT);
}


function draw() {
text ('oh hey babe looking good', 300,300);
}
