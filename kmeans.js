class KMeans {
  constructor(nClusters, centers) {
    this.clusters = Array(nClusters || 1)
      .fill(0)
      .map((c, i) => new Cluster(centers ? centers[i] : undefined));
    this.started = false
  }

  getClosestIndex(a, b) {
    // a = { dist: 123, index: 0 }
    // b = { dist: 124, index: 1 }
    // index = 1
    return b.dist < a.dist ? b : a
  }

  getClosestArray(points) {
    return points.map(p => {
      return this.clusters
        .map((c, i) => {
          return {
            dist: c.center.dist(p),
            index: i
          }
        })
        .reduce(this.getClosestIndex, {dist: Infinity, index: -1 })
        .index
    })
  }

  getClosestArray2(points) {
    let closestArray = Array(points.length).fill(0)

    for(let p = 0; p < points.length; p++) {
      let closest = Infinity
      let closestIdx = -1

      for (let c = 0; c < this.clusters.length; c++) {
        const dist = this.clusters[c].center.dist(points[p])
        if (dist < closest) {
          closest = dist;
          closestIdx = c;
        }
      }
      closestArray[p] = closestIdx;
    }

    return closestArray
  }

  updateClusterCenters(points, closestArray) {
    const avgs = Array(this.clusters.length).fill(0).map(() => {
      return {
        value: createVector(),
        count: 0
      }
    })

    for (let p = 0; p < points.length; p++) {
      avgs[closestArray[p]].value.add(points[p])
      avgs[closestArray[p]].count++
    }

    avgs.map(avg => {
      if (avg.count == 0) {
        avg.value.set(10000000, 10000000);
      } else {
        avg.value.div(avg.count);
      }
    })

    this.clusters.forEach((c, i) => {
      c.setCenter(avgs[i].value)
    })
  }

  run(points) {
    const closestArray = this.getClosestArray(points)
    this.updateClusterCenters(points, closestArray)
  }
}
