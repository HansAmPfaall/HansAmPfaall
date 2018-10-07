function Ship() {
  this.x = swidth / 2 - 4;
  this.y = pixel * 3;

  this.IsMovingRight = false;
  this.IsMovingLeft = false;

  this.draw = function() {
    rect(this.x, this.y, 16, 16);
  }

  this.move = function() {
    // console.log(world[round(ship.x / pixel)][round(ship.y / pixel)])
    if (this.IsMovingRight && world[round((ship.x + 8) / pixel)][round((ship.y) / pixel)] == 0) {
      this.x += 2
    }
    if (this.IsMovingLeft && world[round((ship.x + 8) / pixel) - 1][round((ship.y) / pixel)] == 0) {
      this.x -= 2
    }
    if (world[round((this.x) / pixel)][floor((this.y) / pixel) + 1] == 0) {
      this.y += 0.5
    }
  }

  this.drill = function() {
    // console.log(world[round((ship.x) / pixel)][round((ship.y) / pixel + 1)])
    if (world[round((this.x) / pixel)][round((this.y) / pixel + 1)] == 1) {
      world[round((this.x) / pixel)][round((this.y) / pixel + 1)] = 0
      this.x = round((this.x) / pixel) * pixel
      this.y = round((this.y) / pixel + 1) * pixel
    }
  }


}