class Player {
  constructor() {
    this.size = 170;
    this.x = this.size - 150;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -30;
    }
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(playerImag, this.x, this.y, this.size, this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 50,
      this.size - 50,
      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );
    return isColliding;
  }
}
