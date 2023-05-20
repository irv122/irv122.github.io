var images=["hair.png"];
var choosenImage;
var caption=["OMG"]  ;
var pos;


function preload(){
 
  pos = floor(random(images.length));
  
  choosenImage =loadImage(images[pos]);
  
}
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  image(choosenImage,0,0,width,height);
  textSize(50);
 text(caption[pos], 00,60);
}
function mousePressed() {
  pos = floor(random(3))
    
  
}