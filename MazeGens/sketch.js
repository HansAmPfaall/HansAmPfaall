let swidth = screen.width - screen.width * 0.015
let sheight = screen.height - screen.height * 0.15
let goal = 0
let pop;
let obstacles = []

function setup() {
  obstacles.push(new Obstacle(swidth / 2, sheight / 2, 50, 400))
  obstacles.push(new Obstacle(swidth / 4, 0, 50, 400))
  obstacles.push(new Obstacle(swidth / 4 + swidth / 2, 0, 50, 400))
  pop = new Population()
  createCanvas(swidth, sheight);
  goal = createVector(swidth / 2 + swidth / 4 + swidth / 5, sheight / 2)
  // createCanvas(600, 600);
  background(0);
}

function draw() {
  background(255);
  noFill();
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