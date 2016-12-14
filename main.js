const scl = 0.05; // How big the clouds are, smaller scale => bigger clouds
const width = 600; // Width of canvas
const height = 600; // Height of canvas


function setup() {
  let canvas = createCanvas(width, height);
  background(0);
  // Scales will contain 6 random values from 0 to 0.1 which will be used to scale
  // down randomly the RGB noise values to always create a random pattern
  let scales = [];
  for (let i = 0; i < 6; i++) {
    // Math.random() returns value from 0 to 1, which if divided by 10 gives a
    // value between 0 and 0.1
    scales.push(Math.random() / 10)
  }
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // I'm too lazy to think of a better way to do this
      let noiseR = noise(x * scales[0] * scl, y * scales[1] * scl);
      let noiseG = noise(x * scales[2] * scl, y * scales[3] * scl);
      let noiseB = noise(x * scales[4] * scl, y * scales[5] * scl);
      // Noise returns value from 0 to 1 so it must be scaled to 0-255
      let c = color(noiseR * 255, noiseG * 255, noiseB * 255);
      fill(c);
      noStroke();
      rect(x, y, 1, 1); // Each rectangle represents a pixel
    }
  }
}

function draw() {
  // Not animating hence drawing in setup
}
