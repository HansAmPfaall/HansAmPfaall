function Enemy() {
  this.animation

  this.IdleAnimation = []
  this.WalkAnimation = []
  this.RunAnimation = []

  this.draw = function () {
    image(this.IdleAnimation[int(frameCount / 5) % this.IdleAnimation.length], 500, 350, 110, 210);
  }

  this.preload = function () {
    for (let index = 1; index < 16; index++) {
      path = 'sprites/Zombi/Idle' + ' ' + '(' + index.toString() + ').png'
      this.IdleAnimation.push(loadImage(path));
    }
  }


  this.move = function () {}


}