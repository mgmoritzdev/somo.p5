class VideoInput {
  constructor() {
    this.capture = createCapture(VIDEO);
    this.capture.size(
      SomoConfig.captureWidth,
      SomoConfig.captureHeight
    )
    this.capture.hide()
  }

  draw() {
    image(this.capture, 0, 0, SomoConfig.width, SomoConfig.height);
  }
}
