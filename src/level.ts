export class Level {
  public data = [];

  constructor() {
    this.generateLevel();
  }

  private generateLevel() {
    const levelWidth = this.randomNumBetween(10, 100);
    const levelHeight = this.randomNumBetween(10, 100);

    for (let i = 0; i < levelHeight; i++) {
      this.data[i] = [];
      for (let ii = 0; ii < levelWidth; ii++) {
        this.data[i].push(this.randomNumBetween(0, 1));
      }
    }
  }

  private randomNumBetween = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
