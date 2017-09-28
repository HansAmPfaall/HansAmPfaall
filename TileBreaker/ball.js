function Ball() {
  this.width = 30;
  this.height = 30;
  this.pos = createVector(300, 300);
  this.vel = createVector(0, 10);

  this.draw = function() {
    ellipse(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.update = function() {
    this.pos.add(this.vel)

    // Collision with the walls.
    if (this.pos.x < 0 || this.pos.x > 600) this.vel.x *= -1;
    if (this.pos.y < 0) this.vel.y *= -1;
    if (this.pos.y > 600 + this.height) this.pos.y = 0;
  }

  this.collide = function(obstacle) {
    let cx = this.pos.x;
    let cy = this.pos.y;

    var testX = cx;
    var testY = cy;

    let rx = obstacle.x;
    let ry = obstacle.y;

    let rw = obstacle.width;
    let rh = obstacle.height;
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

    let diameter = this.height;
    // get distance from closest edges
    let distance = sqrt((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY));

    // if the distance is less than the radius, collision!
    if (distance <= diameter / 2) {
      return true;
    }

  }
}
