function Paddle() {
  this.width = 120;
  this.height = 15;
  this.x = 300 - (this.width / 2);
  this.y = 550;
  this.speed = 10;

  this.IsMovingRight = false;
  this.IsMovingLeft = false;

  this.draw = function() {
    rect(this.x, this.y, this.width, this.height, 4);
  }

  this.movePaddle = function(dir) {
    this.x += dir * this.speed;
  }

  this.collide = function(ball) {
    let cx = ball.pos.x;
    let cy = ball.pos.y;

    var testX = cx;
    var testY = cy;

    let rx = this.x;
    let ry = this.y;

    let rw = this.width;
    let rh = this.height;
    // which edge is closest?
    if (cx < rx) {
      testX = rx // left edge
    } else if (cx > rx + rw) {
      testX = rx + rw
    } // right edge

    if (cy < ry) {
      testY = ry // top edge
    } else if (cy > ry + rh) {
      testY = ry + rh
    } // bottom edge

    let diameter = ball.height;
    // get distance from closest edges
    let distance = sqrt((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY));

    // if the distance is less than the radius, collision!
    if (distance <= diameter / 2) {
      ball.vel.y *= -1;
      ball.vel.x = (this.x + (this.width / 2) - ball.pos.x) / -10;
    }
  }

}
