function Ship() {
  this.width = 8;
  this.height = 50;
  this.x = 250;
  this.y = 530;

  this.bullets = []

  this.IsMovingRight = false;
  this.IsMovingLeft = false;

  this.draw = function() {
    triangle(this.x - this.width, this.y + this.height, this.x, this.y, this.x + this.width, this.y + this.height);
  }

  this.move = function(dir) {
    this.x = this.x + (this.width/2) * dir;
  }

  this.fire = function() {
    this.bullets.push([this.x, this.y])
  }


  this.bulletUpdate = function() {
    for (var i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i][1] -= 10
      rect(this.bullets[i][0] - 2.5, this.bullets[i][1], 5, 5)
      if (this.bullets[i][1] < 10) {
        this.bullets.splice(i, 1);
      }
    }
  }

}
