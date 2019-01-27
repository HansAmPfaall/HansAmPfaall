function Ship() {
  this.width = 5;
  this.height = 5;
  this.pos = createVector(swidth / 15, sheight / 2)

  this.dead = false
  this.isGoal = false

  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)

  this.fitness = 0

  this.dna = new DNA()
  this.dna.randomize()

  this.draw = function() {
    rect(this.pos.x, this.pos.y, this.width, this.height)
  }

  this.move = function() {
    if (this.dna.step < this.dna.direction.length) {
      this.acc = this.dna.direction[this.dna.step]
      this.dna.step++
    } else(
      this.dead = true
    )
    this.vel.add(this.acc)
    this.vel.limit(5)
    this.pos.add(this.vel)

    if (this.collide()) {
      this.dead = true
    }

  }

  this.collide = function() {
    if (this.pos.x > swidth - 10) {
      return true
    }
    if (this.pos.x < 0) {
      return true
    }
    if (this.pos.y < 0) {
      return true
    }
    if (this.pos.y > sheight - 10) {
      return true
    }
    if (this.pos.dist(goal) < 25) {
      this.goal = true
      return true
    }
    for (var i = 0; i < obstacles.length; i++) {
      if (this.pos.x < obstacles[i].x + obstacles[i].width &&
        this.pos.x > obstacles[i].x &&
        this.pos.y < obstacles[i].y + obstacles[i].height &&
        this.pos.y > obstacles[i].y) {
        return true
      }
    }
  }

  this.calcFitness = function() {
    if (this.goal) {
      this.fitness = 1.0 / 16.0 + 10000.0 / (this.dna.step * this.dna.step)
    } else {
      this.fitness = 1.0 / (this.pos.dist(goal) * this.pos.dist(goal))
    }
  }

  this.duplicate = function() {
    dupl = new Ship()
    dupl.dna = this.dna.clone()
    return dupl
  }

}