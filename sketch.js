// Irving Torres
// Game: Pong
// 5-14-23

var serial;
// The Serial Control App
var portName = "/dev/tty.usbmodem14101";
var inMessage = 0;

// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

// Canvas
function setup() {
  createCanvas(400, 400);
  serial = new p5.SerialPort();
  serial.open(portName);
  serial.on('data', gotData);
}


function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  console.log(currentString);
      inMessage = currentString;   // save the currentString to use for the text
}
//Background

function draw() {
// console.log(inMessage);
  // Background
  background(0);
   let x1 = map(inMessage, 100,150, 0, width - 70);
  xBall, (x1, 25, 25, 25);
  
  let x2 = map(inMessage, 0, width, 25, 75);
  yBall, (x1, 25, 25, 25);
  
  
  
  // Paddle
  fill('#D6BFBA');
  rect(x1, 375, 70, 10);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

  //Score
  fill('#F08499');
  textSize(24);
  text("Score: " + score, 10, 25);
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 10 ||
    xBall > 400 - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 400 - 10) {
    ySpeed *= -1;
  }
}


// Reset Ball
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#FAB88B');
  ellipse(xBall, yBall, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if ((xBall > inMessage &&
      xBall < inMessage + 90) &&
    (yBall + 10 >= 375)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;

  }
}