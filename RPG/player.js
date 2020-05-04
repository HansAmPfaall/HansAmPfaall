function Player() {
  this.y = 350;
  this.x = 200;
  this.speed = 2
  this.animation
  this.hp = 100
  this.dmg = 20


  this.Box = new attackBox();

  this.IdleAnimation = []
  this.WalkAnimation = []
  this.AttackAnimation = []
  this.RunAnimation = []

  this.frameCount = 0;

  this.IsMovingRight = false;
  this.IsMovingLeft = false;
  this.inFight = false;
  this.isLookingRight = true;

  this.draw = function () {
    if (this.isLookingRight) {
      image(this.animation[this.frameCount % this.animation.length], this.x, this.y, 110, 220);
    } else {
      translate(width, 0); // move to far corner
      scale(-1.0, 1.0);    // flip x-axis backwards
      image(this.animation[this.frameCount % this.animation.length], width - this.x - 110, this.y, 110, 220);
    }
  }

  this.drawFight = function () {
    if (this.animation == this.AttackAnimation && this.frameCount == this.AttackAnimation.length) {
      this.animation = this.IdleAnimation
    }
    this.Box.display()
    image(this.animation[this.frameCount % this.animation.length], 300, 350, 110, 220);
  }

  this.prepareFight = function () {
    this.animation = this.IdleAnimation;
  }

  this.attack = function () {
    if (this.Box.y == 420) {
      this.frameCount = 0
      this.animation = this.AttackAnimation
      this.swordSwing.play()
      this.Box.turnNumber += 1
    }
    if (this.Box.y == 540) {
      player.x -= 150
      this.inFight = false
    }
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
    this.swordSwing = loadSound('assets/effects/Sound Effect 12.wav');
    for (let index = 1; index < 12; index++) {
      path = 'sprites/Player/Idle' + ' ' + '(' + index.toString() + ').png'
      this.IdleAnimation.push(loadImage(path));
    }
    for (let index = 1; index < 11; index++) {
      path = 'sprites/Player/Walk' + ' ' + '(' + index.toString() + ').png'
      this.WalkAnimation.push(loadImage(path));
    }
    for (let index = 1; index < 11; index++) {
      path = 'sprites/Player/Attack' + ' ' + '(' + index.toString() + ').png'
      this.AttackAnimation.push(loadImage(path));
    }
    this.animation = this.IdleAnimation;
  }



}