export class Player {
  x = 0;
  y = 0;

  constructor() {}

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  get pos() {
    return { x: this.x, y: this.y };
  }
}
