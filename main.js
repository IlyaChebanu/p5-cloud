function setup() {
  const width = 600;
  const height = 600;
  createCanvas(width, height);
}


function draw() {
  const scl = 0.05;
  const width = 600;
  const height = 600;
  background(0);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let noiseR = noise(x * 0.02 * scl, y * 0.08 * scl);
      let noiseG = noise(x * 0.04 * scl, y * 0.06 * scl);
      let noiseB = noise(x * 0.05 * scl, y * 0.03 * scl);
      let c = color(noiseR * 255, noiseG * 255, noiseB * 255);
      // console.log(noiseVal);
      fill(c);
      noStroke();
      rect(x, y, 1, 1);
    }
  }

}
