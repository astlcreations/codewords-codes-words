//working with midform text
var myText= "You tell me to quiet down cause my opinions make me less beautiful but i was not made with a fire in my belly so i could be put out i was not made with a lightness on my tongue so i could be easy to swallow i was made heavy half blade and half silk difficult to forget and not easy for the mind to follow.";
//make sure quotation marks are the systems and not just copy and pasted

function setup() {
createCanvas (windowWidth, windowHeight);
background ("magenta");
textSize (24);
textFont("Times");
textAlign(LEFT);
//fill(0);
}


function draw() {
background("magenta");
textLeading(mouseY/5);
//textLeading(sin(frameCount*0.01)*100);
text(myText, int(windowWidth/4), 0, int(windowWidth/2), windowHeight);
}
