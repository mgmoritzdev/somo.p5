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
      sector.newColor[0] = pixels[index]
      sector.newColor[1] = pixels[index + 1]
      sector.newColor[2] = pixels[index + 2]

      this.found[index] = sectors.map((s => hasColorChanged(s)))
      this.states[index] = (byte)(found[index] ? 0x01 : 0x00)
    })
    // for(let sector in ) {}
    // for (var as = 0 as < n_sectors as++) {


      // states[as] = (byte)(found[as] ? 0x01 : 0x00)

		  // //	FIXME - comment
		  // if(found[as]) {
			//   fill(255)
			//   rect(centers[as].x, centers[as].y,sectorW, sectorH)
		  // }

      // if (found[as]) {
      //   countFound++
      //   centroid.x += centers[as].x
      //   centroid.y += centers[as].y
      //   movingPoints.push(centers[as])
      // }

      // lastFrameColors[as][0] = newColors[as][0]
      // lastFrameColors[as][1] = newColors[as][1]
      // lastFrameColors[as][2] = newColors[as][2]
    // }
  }
}
