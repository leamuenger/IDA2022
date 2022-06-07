function setup() {
    createCanvas(5000, 5000);
  }
  function draw() {
    background(
      map(sin(frameCount * 0.25), -1, 1, 0, 255)
    );
  }