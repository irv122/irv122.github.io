function setup() {
  // put setup code here
  createCanvas(500,500, WEBGL);
  background('#fae');
  detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
  describe(
    'a white sphere with low detail on the x-axis, including a slider to adjust detailX'
  );

createCanvas(500, 500, WEBGL);
  noFill();
}

function draw() {
  // put drawing code here
  background(205, 105, 94);
  rotateY(millis() / 1000);
  sphere(160, detailX.value(), 16);

  rotateY(PI / 6);
  stroke(153);
  box(35);
  let rad = millis() / 1000;
  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);
  // Matrix for rotation around the Y axis
  applyMatrix(
    ct, 0.0,  st,  0.0,
    0.0, 1.0, 0.0,  0.0,
    -st, 0.0,  ct,  0.0,
    0.0, 0.0, 0.0,  1.0
  );

}
