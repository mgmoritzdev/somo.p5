class Cluster {
  constructor(center) {
    this.center = center || createVector(random(width), random(height))
    this.points = Array(this.numClusters).fill([])
  }

  getCenter() {
    return this.center
  }

  setCenter(c) {
    this.center.set(c)
  }
}
