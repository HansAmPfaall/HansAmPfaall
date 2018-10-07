let ship;
let swidth = 600
let sheight = 400
let pixel = 16
let world = []

function setup() {
  createCanvas(swidth, sheight);
  ship = new Ship();
  for (var i = 0; i < swidth / pixel; i++) {
    world[i] = []
    for (var j = 0; j < sheight / pixel; j++) {
      if (j < 4) {
        world[i][j] = 0
      } else {
        world[i][j] = (random(2) & 1) + 1
      }
    }
  }
}

function draw() {
  // console.log(second())
  background(50);
  noFill();
  stroke(75)

  for (var i = 0; i < world.length; i++) {
    for (var j = 0; j < world[i].length; j++) {
      if (world[i][j] > 0) {
        rect(i * pixel, j * pixel, i * pixel + pixel, j * pixel + pixel)
      }
      text(world[i][j], i * pixel + pixel / 2 - pixel / 4, j * pixel + pixel / 2 + pixel / 4)
    }
  }
  // Ship
  fill(color(0))
  ship.draw();
  ship.move()
  // console.log(world[round(ship.x / pixel)][round(ship.y / pixel)])
}



// Keyboard Stuff below
function keyPressed() {
  switch (keyCode) {
    case 68:
      ship.IsMovingLeft = false;
      ship.IsMovingRight = true;
      break;
    case 65:
      ship.IsMovingRight = false;
      ship.IsMovingLeft = true;
      break;
    case 83:
      ship.drill();
      break;
    case 87:
      ship.y -= pixel;
      break;
  }
}

function keyReleased() {
  if (keyCode == 68) {
    ship.IsMovingRight = false;
  } else if (keyCode == 65) {
    ship.IsMovingLeft = false;
  }
}