let videoInput
let kmeans
let body
let randomColor1
let randomColor2
let analyser


function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
  analyser = new DefaultAnalyser()
  kmeans = new KMeans()
  updateRandomColors()
}

function draw() {
  // capture.loadPixels()
  // outputVideo.draw()
  videoInput.draw()
  analyser.drawSectors()

  // TODO: sample points, remove me

  const points = getTestPoints()
  kmeans.run(points)
  body = new Body(points)
  body.draw()
}

function updateRandomColors() {
  const skipRed = 33
  randomColor1 = RandomColor.create({
    minHue: skipRed, minAlpha: 100
  })

  randomColor2 = RandomColor.create({
    minHue: skipRed, maxAlpha: 90
  })

  console.log('randomColor1', randomColor1)
  console.log('randomColor2', randomColor2)
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
