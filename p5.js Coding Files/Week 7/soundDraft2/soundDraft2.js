var song; //initiating the variable/codeword for coding with
var analyzer;
function preload() {
  song = loadSound ('data/Bells2.mp3');
}

function setup() {
  //song = loadSound ('data/drum.mp3'); //associate sound with variable 'song'
  createCanvas (windowWidth, windowHeight); //full window canvas
  background(203,192,184);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(203,192,184);
  textSize(72);
  textFont("Times");
  textAlign (CENTER,CENTER);
}


function draw() {
  background(205,163,137);
  fill(235,193,167);
  var volume = analyzer.getLevel();
  volume*=400;
  noStroke(0);
  ellipse(width/2,height/2,volume*10,volume*10);
  fill(245,242,240);
   volume*=400;
  textSize(volume/30);  
  rotate(volume);
  text ("CAN YOU HEAR THEM?", width/2, height/2);
  text ("the bells", width/2, height/3); //inner left
  text ("the bells", width/2, height/1.5); //upper left
}

function mousePressed() {
  if (song.isPlaying()) {
    background (245,242,240);
    song.stop(); //if the song is playing, stop
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play();
  }
}
