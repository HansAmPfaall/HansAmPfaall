function Enemy(x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;

  this.draw = function() {
    // rect(this.x, this.y, this.width, this.height)
    var c = color('red');
    fill(c); // Use 'c' as fill color
    noStroke();
    triangle(this.x, this.y,
      this.x + this.height, this.y - this.width,
      this.x + this.height, this.y + this.width);
  }

  this.move = function() {
    this.x -= 1
  }


}