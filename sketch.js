let player;

let bgImag;
let playerImag;
let obstacleImag;
let obstacles = [];

let wordClassifier;

function preload() {
  bgImag = loadImage("background.jpg");
  playerImag = loadImage("player2.png");
  obstacleImag = loadImage("obstacle.png");

  let options = {
    probabillityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("speechCommands18w", options);
}

function setup() {
  createCanvas(1000, 450);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0].label, results[0].confidence);
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new obstacle());
  }

  background(bgImag);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs)) {
      textSize(30);
      text("Game over", (x = 500), (y = 200));
      noLoop();
    }
  }
}
