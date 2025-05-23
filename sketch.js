let colors = ["#edafb8", "#f7e1d7", "#dedbd2", "#b0c4b1", "#4a5759"];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noStroke();
  background("#f7e1d7"); 
}

function draw() {
  if (mouseIsPressed && mouseButton === LEFT) {
    background("#f7e1d7"); 

    let d = 7;
    let r = 0;

    for (let i = 0; i < 540 * 30; i += 7) {
      let x = r * cos(i) + height/2;
      let y = r * sin(i) + width/2;

      fill(random(colors));
      rect(x, y, d, d);

      r += 0.5;
      d += 0.04;
    }
  }
}
  