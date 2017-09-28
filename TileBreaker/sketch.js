let paddle;
let ball;
let obstacles = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  paddle = new Paddle();
  ball = new Ball();
  for (let i = 0; i < 48; i++) {
    let x, y;
    x = (i % 12) * 49 + 10;
    // y = (i % 12) * 40;
    if (i < 12) y = 10;
    if (i >= 12) y = 50;
    if (i >= 24) y = 90;
    if (i >= 36) y = 130;
    obstacles[i] = new Obstacle(x, y, 40, 30);
  }
  // obstacles[0] = new Obstacle(300 - 30, 60, 40, 30);
}

function draw() {
  background(0)
  // Paddle Stuff
  paddle.draw();
  if (paddle.IsMovingRight && paddle.x < 600 - paddle.width) paddle.movePaddle(1);
  if (paddle.IsMovingLeft && paddle.x >= 0) paddle.movePaddle(-1);
  paddle.collide(ball);
  ball.draw();
  ball.update();
  let hit = false;
  for (let i = 0; i < obstacles.length; i++) {
    if (!hit && ball.collide(obstacles[i])) {
      ball.vel.y *= -1;
      hit = true;
      obstacles[i].y = 600;
    }
    obstacles[i].draw();
  }



}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    paddle.IsMovingLeft = false;
    paddle.IsMovingRight = true;
  } else if (keyCode == LEFT_ARROW) {
    paddle.IsMovingRight = false;
    paddle.IsMovingLeft = true;
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    paddle.IsMovingRight = false;
  } else if (keyCode == LEFT_ARROW) {
    paddle.IsMovingLeft = false;
  }
}
