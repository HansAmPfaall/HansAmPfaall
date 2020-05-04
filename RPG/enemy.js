function Enemy() {
  this.animation
  this.x = 500;
  this.y = 350;
  this.hp = 100
  this.dmg = 10
  this.animation = []
  this.IdleAnimation = []
  this.AttackAnimation = []
  this.WalkAnimation = []
  this.RunAnimation = []
  this.clock = 0
  this.rdy = false
  this.frameCount = 0

  this.attack = function () {
    this.frameCount = 0
    this.swordSwing.play()
    this.animation = this.AttackAnimation
  }

  this.draw = function () {
    image(this.IdleAnimation[this.frameCount % this.IdleAnimation.length], this.x, this.y, 110, 210);
  }

  this.drawFight = function () {
    if (this.animation == this.AttackAnimation && this.frameCount == this.AttackAnimation.length) {
      this.animation = this.IdleAnimation
    }
    image(this.animation[this.frameCount % this.animation.length], 425, 350, 110, 210);
  }

  this.preload = function () {
    this.swordSwing = loadSound('assets/effects/Sound Effect 3.wav');
    for (let index = 1; index < 16; index++) {
      path = 'sprites/Zombi/Idle' + ' ' + '(' + index.toString() + ').png'
      this.IdleAnimation.push(loadImage(path));
    }
    for (let index = 1; index < 9; index++) {
      path = 'sprites/Zombi/Attack' + ' ' + '(' + index.toString() + ').png'
      this.AttackAnimation.push(loadImage(path));
    }
    this.animation = this.IdleAnimation
  }

  this.wait = function () {
    this.clock += 1
    if (this.clock == 75) {
      this.rdy = true
      this.clock = 0
    }
  }

  this.move = function () { }


}