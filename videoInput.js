class VideoInput {
  constructor() {
    this.capture = createCapture(VIDEO);
    this.capture.size(
      SomoConfig.captureWidth,
      SomoConfig.captureHeight
    )
    this.capture.hide()
  }

  loadPixels() {
    this.capture.loadPixels()
    this.capture.pixels
    return this.capture.pixels
  }

  draw() {
    image(this.capture, 0, 0, SomoConfig.width, SomoConfig.height);
  }
}
