let videoInput

function setup() {
  createCanvas(SomoConfig.width, SomoConfig.height)
  videoInput = new VideoInput()
}

function draw() {
  videoInput.draw()
}
