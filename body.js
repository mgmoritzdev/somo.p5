class Body {
  constructor(points) {
    this.bodyPoints = points;
    this.polygon = new Polygon(new ConvexHull(points));
    this.bodyAge = 0;
  }

  draw() {
    this.polygon.draw()
  }
}
