let player;
let world = []
let BG;

let enemy;

function preload() {
  player = new Player();
  player.preload();
  BG = loadImage('sprites/Background/BG.png');
}

function setup() {
  createCanvas(800, 600);
  enemy = new Enemy();
  enemy.preload()
}

function draw() {
  // console.log(second())
  background(BG);
  noFill();
  stroke(75);
  player.move()
  enemy.draw()
  player.draw();
}



// Keyboard Stuff below
function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.IsMovingLeft = false;
    player.IsMovingRight = true;
  } else if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.IsMovingRight = false;
    player.IsMovingLeft = true;
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    // UP
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    // DOWN
  }
}

function keyReleased() {
  if (keyCode == 68 || keyCode === RIGHT_ARROW) {
    player.IsMovingRight = false;
  } else if (keyCode == 65) {
    player.IsMovingLeft = false;
  }
}