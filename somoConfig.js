class SomoConfig {
  static width = 640
  static height = 480
  static captureWidth = 160
  static captureHeight = 96
  static pixelChangeThreshold = 50
}

class ComputedConfig {
  static nSectors = SomoConfig.captureWidth * SomoConfig.captureHeight
  static sectorWidth = SomoConfig.width / SomoConfig.captureWidth
  static sectorHeight = SomoConfig.height / SomoConfig.captureHeight
}
