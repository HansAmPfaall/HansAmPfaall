function Player() {
  this.y = 350;
  this.x = 200;
  this.speed = 2
  this.animation

  this.IdleAnimation = []
  this.WalkAnimation = []
  this.RunAnimation = []

  this.IsMovingRight = false;
  this.IsMovingLeft = false;

  this.draw = function () {
    image(this.animation[int(frameCount / 5) % this.animation.length], this.x, this.y, 110, 220);
  }

  this.move = function () {
    if (this.IsMovingRight) {
      this.x += this.speed;
      this.animation = this.WalkAnimation;
    } else if (this.IsMovingLeft) {
      this.x -= this.speed;
      this.animation = this.WalkAnimation;
    } else {
      this.animation = this.IdleAnimation;
    }
  }

  this.preload = function () {
    for (let index = 1; index < 12; index++) {
      path = 'sprites/Player/Idle' + ' ' + '(' + index.toString() + ').png'
      this.IdleAnimation.push(loadImage(path));
    }
    for (let index = 1; index < 11; index++) {
      path = 'sprites/Player/Walk' + ' ' + '(' + index.toString() + ').png'
      this.WalkAnimation.push(loadImage(path));
    }
    this.animation = this.IdleAnimation;
  }



}