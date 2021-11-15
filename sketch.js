let videoInput
let sectors
let kmeans

function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
  sectors = Sector.initialize()
  kmeans = new KMeans()
}

function draw() {
  videoInput.draw()
  points = [
    createVector(160, 120),
    createVector(165, 125),
    createVector(155, 115),
    createVector(480, 360),
    createVector(485, 365),
    createVector(475, 355),
  ]
  kmeans.run(points)
}
