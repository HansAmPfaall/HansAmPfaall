let ship;
let enemy = [];


function setup() {
  createCanvas(600, 600);
  background(0);
  ship = new Ship();
  enemy.push(new Enemy(100, 100, 20, 20))
}

function draw() {
  background(0);
  // Ship
  ship.draw();
  ship.bulletUpdate();
  if (ship.IsMovingRight && ship.x < 600 - ship.width) ship.move(1);
  if (ship.IsMovingLeft && ship.x > 0 + ship.width) ship.move(-1);
  // Enemy´s
  for (var i = enemy.length-1; i <= 0; i++) {
    enemy[i].move();
    enemy[i].draw();
  }
}




// Keyboard Stuff below
function keyPressed() {
  switch (keyCode) {
    case RIGHT_ARROW:
      ship.IsMovingLeft = false;
      ship.IsMovingRight = true;
      break;
    case LEFT_ARROW:
      ship.IsMovingRight = false;
      ship.IsMovingLeft = true;
      break;
    case 32:
      ship.fire();
      break;
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    ship.IsMovingRight = false;
  } else if (keyCode == LEFT_ARROW) {
    ship.IsMovingLeft = false;
  }
}
