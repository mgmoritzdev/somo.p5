class SectorGroup {
  constructor(analyser) {
    this.initialize()
    this.analyser = analyser
    this.countFound = 0
    this.centroid = createVector()
    this.movingPoints = []
    this.pgraphics = createGraphics(width, height)
    this.pixelChangeThreshold = 50
  }

  initialize() {
    this.sectors = [...Array(ComputedConfig.nSectors).keys()]
      .map(s => new Sector(s))
  }

  analyse(pixels) {
    this.analyser.analyse(this.sectors, pixels)
  }

  draw() {
    this.updateRandomColors()
    this.sectors.forEach(s => s.drawBorder())
  }

  updateRandomColors() {
    const skipRed = 33
    this.color1 = RandomColor.create({
      minHue: skipRed, minAlpha: 100
    })

    this.color2 = RandomColor.create({
      minHue: skipRed, maxAlpha: 90
    })
  }
}
