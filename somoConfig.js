class SomoConfig {
  static width = 640
  static height = 480
  static captureWidth = 160
  static captureHeight = 96
}

class ComputedConfig {
  static nSectors = SomoConfig.captureWidth * SomoConfig.captureHeight
  static sectorWidth = SomoConfig.width / float(SomoConfig.width)
  static sectorHeight = SomoConfig.height / float(SomoConfig.height)
}
