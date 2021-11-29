class Sector {
  constructor(index, analyser) {
    this.index = index
    this.newColor = new Array(4).fill(0);
    this.previousColor = new Array(4).fill(0);
    this.hasChanged = false
    this.center = this.calculateSectorCenter(index)
    this.accumulation = 0
    this.threshold = SomoConfig.pixelChangeThreshold
    this.analyser = analyser
  }

  // TODO: obsolete?
  analyse(points) {
    this.update()
    if(this.analyser) {
      const { compare } = this.analyser
    }
  }

  // TODO: obsolete?
  calculateSectorCenter (index) {
    const centerX = ComputedConfig.sectorWidth/2
          + (index % SomoConfig.captureWidth)
          * ComputedConfig.sectorWidth
    const centerY = ComputedConfig.sectorHeight/2
          + int(index / SomoConfig.captureWidth)
          * ComputedConfig.sectorHeight

    return new createVector(centerX, centerY);
  }

  configDrawBorder() {
    noFill()
  }

  drawBorder() {
    this.configDrawBorder()
    rectMode(CENTER)
    rect(this.center.x, this.center.y, 4, 5)
  }

  update(pixels) {
    this.previousColor = this.newColor.slice()
    this.newColor = pixels.slice()
    this.hasChanged = this.compare()
  }

  compare() {
    const {newColor, previousColor, threshold } = this
    return (abs(newColor[0] - previousColor[0]) > threshold) &&
      (abs(newColor[1] - previousColor[1]) > threshold) &&
      (abs(newColor[2] - previousColor[2]) > threshold)
  }
}
