let videoInput
let sectors
let kmeans
let body

function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
  sectors = Sector.initialize()
  kmeans = new KMeans()
}

function draw() {
  // capture.loadPixels()
  // outputVideo.draw()
  videoInput.draw()
  // sectors.forEach(s => s.drawBorder())

  // TODO: sample points, remove me

  const points = getTestPoints()
  kmeans.run(points)
  body = new Body(points)
  body.draw()
}

function getTestPoints(){
  const variance = 45
  const a = createVector(160, 120)
  const b = createVector(480, 360)
  return [
    a,
    createVector(a.x + variance, a.y + variance),
    createVector(a.x - variance, a.y - variance),
    b,
    createVector(b.x + variance, b.y + variance),
    createVector(b.x - variance, b.y - variance),
  ]
}
