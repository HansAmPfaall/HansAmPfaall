let player;
let world = []
let BG;
let song
let swordSwing;
let fightStartSound;
let enemy;

function preload() {
  player = new Player();
  player.preload();
  BG = loadImage('sprites/Background/BG.png');
  song = loadSound('assets/bgLoop.mp3');
  fightStartSound = loadSound('assets/effects/Sound Effect 9.wav');
}

function setup() {
  createCanvas(800, 600);
  enemy = new Enemy();
  enemy.preload()
  song.loop()
}

function draw() {
  // console.log(second())
  background(BG);
  noFill();
  player.inFight = isColliding();
  stroke(75);
  if (player.inFight) {
    if (player.Box.turnNumber % 2 == 1) {
      // Enemy Turn
      enemy.wait()
      if (enemy.rdy) {
        enemy.attack()
        player.Box.turnNumber += 1
        enemy.rdy = false
      }
    }
    enemy.drawFight();
    player.drawFight();
  } else {
    player.move()
    enemy.draw()
    player.draw();
  }
  if (frameCount % 5 == 0) {
    player.frameCount += 1
    enemy.frameCount += 1
  }
}

function isColliding() {
  if (player.inFight) {
    return true
  } else if (enemy.x == player.x + 50) {
    background(0)
    player.prepareFight();
    fightStartSound.play()
    return true
  }
  return false
}

// Keyboard Stuff below
function keyPressed() {
  if (player.inFight == false) {
    if (keyCode === RIGHT_ARROW || keyCode === 68) {
      player.isLookingRight = true;
      player.IsMovingLeft = false;
      player.IsMovingRight = true;
    } else if (keyCode === LEFT_ARROW || keyCode === 65) {
      player.isLookingRight = false;
      player.IsMovingRight = false;
      player.IsMovingLeft = true;
    } else if (keyCode === UP_ARROW || keyCode === 87) {
      // UP
    } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    }
  } else
    if (keyCode === ENTER && player.Box.turnNumber % 2 == 0) {
      player.attack();
    }
    else if (keyCode === UP_ARROW || keyCode === 87) {
      player.Box.y -= 40
    } else if (keyCode === DOWN_ARROW || keyCode === 83) {
      player.Box.y += 40
    }
}

function keyReleased() {
  if (keyCode == 68 || keyCode === RIGHT_ARROW) {
    player.IsMovingRight = false;
  } else if (keyCode == 65 || keyCode === LEFT_ARROW) {
    player.IsMovingLeft = false;
  }
}