class RandomColor {
  static create({minHue, maxHue, minAlpha, maxAlpha}) {
    const defaults = {
      minHue: 0,
      maxHue: 255,
      minAlpha: 0,
      maxAlpha: 255
    }

    if (minHue === undefined) {
      minHue = defaults.minHue
    }

    if (maxHue === undefined) {
      maxHue = defaults.maxHue
    }

    if (minAlpha === undefined) {
      minAlpha = defaults.minAlpha
    }

    if (maxAlpha === undefined) {
      maxAlpha = defaults.maxAlpha
    }

    const hue = int(random(minHue, maxHue))
    const alpha = int(random(minAlpha, maxAlpha))

    return color(hue, 255, 255, alpha)
  }
}
