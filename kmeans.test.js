const testKMeansClusters = () => {
  const kmeans = new KMeans(2, [createVector(150, 100), createVector(500,400)])
  points = [
    createVector(160, 120),
    createVector(165, 125),
    createVector(155, 115),
    createVector(480, 360),
    createVector(485, 365),
    createVector(475, 355),
  ]

  kmeans.run(points)

  console.assert(kmeans.clusters[0].center.x === 160)
  console.assert(kmeans.clusters[0].center.y === 120)
  console.assert(kmeans.clusters[1].center.x === 480)
  console.assert(kmeans.clusters[1].center.y === 360)
}
