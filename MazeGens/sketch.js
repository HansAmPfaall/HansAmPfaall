// let swidth = screen.width - screen.width * 0.015
// let sheight = screen.height - screen.height * 0.15
let swidth = 800 - 800 * 0.015
let sheight = 600 - 600 * 0.15
let goal = 0
let pop;
let obstacles = []

function setup() {
  obstacles.push(new Obstacle(swidth / 2, sheight / 2, sheight / 10, sheight))
  obstacles.push(new Obstacle(swidth / 2 - swidth / 4, -10, sheight / 10, sheight / 2))
  obstacles.push(new Obstacle(swidth / 2 + swidth / 4, -10, sheight / 10, sheight / 2))
  pop = new Population()
  createCanvas(swidth, sheight);
  goal = createVector(swidth / 2 + swidth / 4 + swidth / 5, sheight / 2)
  // createCanvas(600, 600);
  background(0);
}

function draw() {
  background(255);
  noFill();
  rect(0, 0, swidth - 1, sheight - 1)
  stroke(75)
  ellipse(goal.x, goal.y, 50, 50);
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw()
  }
  if (pop.allDead()) {
    pop.naturalSelection()
    pop.mutateAll()
  } else {
    pop.update()
  }
}