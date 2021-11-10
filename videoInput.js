class VideoInput {
  constructor(w, h) {
    this.capture = createCapture(VIDEO);
    this.capture.size(w, h)
    this.capture.hide()
  }

  draw() {
    image(this.capture, 0, 0, 640, 480);
  }
}
