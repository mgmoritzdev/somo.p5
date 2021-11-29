class DefaultSectorAnalyser {
  constructor() {
    this.countFound = 0
    this.centroid = createVector()
    this.movingPoints = []
    this.pgraphics = createGraphics(width, height)
    this.pixelChangeThreshold = 50
    this.found = []
    this.states = []
  }

  static compare(sector) {
    const {newColor, previousColor, threshold } = sector
    return (abs(newColor[0] - previousColor[0]) > threshold) &&
      (abs(newColor[1] - previousColor[1]) > threshold) &&
      (abs(newColor[2] - previousColor[2]) > threshold)
  }

  hasColorChanged(sector) {
    const {newColor, previousColor } = sector
    const threshold = this.pixelChangeThreshold
    return (abs(newColor[0] - previousColor[0]) > threshold) &&
      (abs(newColor[1] - previousColor[1]) > threshold) &&
      (abs(newColor[2] - previousColor[2]) > threshold)
  }

  analyse(sectors, pixels) {
    sectors.forEach((sector, index) => {
      sector.update(pixels.slice(index * 4, 4))
      this.found[index] = sector.compare()
      this.states[index] = (byte)(this.found[index] ? 0x01 : 0x00)
    })
  }
}
