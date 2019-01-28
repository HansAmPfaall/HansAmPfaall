function DNA() {
  this.direction = []
  this.step = 0
  this.mutationRate = 0.01


  this.randomize = function() {
    for (var i = 0; i < 1000; i++) {
      this.direction.push(createVector((random(-1, 1)), (random(-1, 1))))
    }
  }

  this.clone = function() {
    rclone = new DNA()
    for (var i = 0; i < this.direction.length; i++) {
      rclone.direction[i] = this.direction[i].copy()
    }
    return rclone
  }

  this.mutate = function() {
    for (var i = 0; i < this.direction.length; i++) {
      if (random(1) < this.mutationRate) {
        this.direction[i] = createVector((random(-1, 1)), (random(-1, 1)))
      }
    }
  }
}