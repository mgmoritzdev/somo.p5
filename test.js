
function setup() {
  createCanvas(640, 480)
  const start = performance.now()
  testKMeansClusters()
  const stop = performance.now()
  console.log(`${stop- start} millis`)
}

function draw() {
  background(111)
  ellipse(50, 50, 50, 50)
}
