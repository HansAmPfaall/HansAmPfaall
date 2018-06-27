function Enemy(x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.draw = function() {
    rect(this.x, this.y, this.width, this.height)
  }

  this.move = function() {
    this.y += 1
  }

}
