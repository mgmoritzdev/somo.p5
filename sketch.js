let videoInput
let sectorGroup
let body


function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
  analyser = new DefaultSectorAnalyser()
  sectorGroup = new SectorGroup(analyser)
  const pixels = videoInput.loadPixels()
}

function draw() {
  const pixels = videoInput.loadPixels()
  videoInput.draw()
  sectorGroup.analyse(pixels)
  sectorGroup.draw()

  // TODO: sample points, remove me
  const points = getTestPoints()
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
