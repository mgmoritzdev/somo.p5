let videoInput
let sectors

function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
  sectors = Sector.initialize()
}

function draw() {
  videoInput.draw()
}
