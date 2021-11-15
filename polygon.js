class Polygon {
  constructor(points) {
    this.points = points;
  }

  draw() {
    beginShape();
    for (const {
        x,
        y
      } of this.points) {
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
