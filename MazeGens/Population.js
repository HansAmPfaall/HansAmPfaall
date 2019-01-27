function Population() {
  this.ships = []
  this.fitnessSum = 0


  for (var i = 0; i < 550; i++) {
    this.ships.push(new Ship())
  }

  this.update = function() {
    for (var i = 0; i < this.ships.length; i++) {
      this.ships[i].draw()
      if (this.ships[i].dead == false) {
        this.ships[i].move();
      }
    }
  }

  this.naturalSelection = function() {
    this.fitnessSum = 0
    newShips = []
    this.calcAllFitness()
    this.calcFitnessSum()
    for (var i = 0; i < this.ships.length; i++) {
      newShips.push(this.selectParent().duplicate())
    }
    this.ships = newShips
  }

  this.selectParent = function() {
    let rand = random(this.fitnessSum)
    let runningSum = 0
    for (var i = 0; i < this.ships.length; i++) {
      runningSum += this.ships[i].fitness
      if (runningSum > rand) {
        return this.ships[i]
      }
    }
  }

  this.allDead = function() {
    for (var i = 0; i < this.ships.length; i++) {
      if (this.ships[i].dead == false) {
        return false
      }
    }
    return true
  }

  this.calcAllFitness = function() {
    for (var i = 0; i < this.ships.length; i++) {
      this.ships[i].calcFitness()
    }
  }

  this.calcFitnessSum = function() {
    for (var i = 0; i < this.ships.length; i++) {
      this.fitnessSum += this.ships[i].fitness
    }
  }

  this.mutateAll = function() {
    for (var i = 0; i < this.ships.length; i++) {
      this.ships[i].dna.mutate()
    }
  }



}