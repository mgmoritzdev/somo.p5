let videoInput

function setup() {
  createCanvas(640, 480)
  videoInput = new VideoInput(160, 96)
}

function draw() {
  videoInput.draw()
}
