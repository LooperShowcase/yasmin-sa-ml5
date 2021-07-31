class obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(obstacleImag, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x = this.x - 10;
  }
}
