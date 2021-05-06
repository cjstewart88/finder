import { levels } from './levels/levels.js';

export class Level {
  public data = [];

  constructor(levelName) {
    this.generateLevel(levelName);
  }

  private generateLevel(levelName) {
    const rawLevelData = levels[levelName];
    this.data = [];
    rawLevelData.split('\n').forEach(element => {
      if (!element) return;
      this.data.push(element.split(''));
    });
  }

  private randomNumBetween = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
