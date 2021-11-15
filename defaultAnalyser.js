class DefaultAnalyser {
  constructor() {
    this.sectors = Sector.initialize()
    this.countFound = 0
    this.centroid = createVector()
    this.movingPoints = []
    this.newColors = new Array(SomoConfig.nSectors)
  }

  drawSectors() {
    this.sectors.forEach(s => s.drawBorder())
  }

  analyse(pixels) {

    for (var as = 0; as < n_sectors; as++) {

      // newColors[as][0] = p_pixels[as]; // (nao tem mais getMeanColorComponents)
      // newColors[as][1] = p_pixels[as + 1];
      // newColors[as][2] = p_pixels[as + 2];

      // found[as] = hasColorChanged(newColors, lastFrameColors, pixelChangeThreshold, as);

      // states[as] = (byte)(found[as] ? 0x01 : 0x00);

		  // //	FIXME - comment
		  // if(found[as]) {
			//   fill(255);
			//   rect(centers[as].x, centers[as].y,sectorW, sectorH)	;
		  // }

      // if (found[as]) {
      //   countFound++;
      //   centroid.x += centers[as].x;
      //   centroid.y += centers[as].y;
      //   movingPoints.push(centers[as]);
      // }

      // lastFrameColors[as][0] = newColors[as][0];
      // lastFrameColors[as][1] = newColors[as][1];
      // lastFrameColors[as][2] = newColors[as][2];
    }
  }
}
