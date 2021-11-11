class Sector {
  constructor(index) {
    this.index = index
    this.color = new Array(3).fill(0);
    this.previousColor = new Array(3).fill(0);
    this.center = this.calculateSectorCenter(index)
    this.accumulation = 0
  }

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

  static initialize() {
    return [...Array(ComputedConfig.nSectors).keys()]
      .map(s => new Sector(s))
  }
}
