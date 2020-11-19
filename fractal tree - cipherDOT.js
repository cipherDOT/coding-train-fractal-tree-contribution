let angle;
// let slider;
let scl;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider = createSlider(0 ,TWO_PI, PI / 4, 0.001);

}

function draw() {
  background(51);
  stroke(255);
  // scale(0.5);
  translate(width / 2, height);
  let len = 200;
  branch(len);
}


function branch(len) {
  line(0, 0, 0, - len);
  translate(0, -len);
  // angle = slider.value();
  angle = map(mouseX, 0, width, 0, TWO_PI);
  scl = map(mouseY, 0, height, 0.1, 0.67)
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * scl);
    pop();
    push();
    rotate(-angle);
    branch(len * scl);
    pop();
  }
}

// function branch(len) {
//   line(width / 2 + (len / 10) * 2, height, width / 2 + (len / 10) * 2, height - len);
//   branch(len - 10);
// }
