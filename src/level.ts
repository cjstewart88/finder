import { levels } from './levels/levels.js';

export class Level {
  map = [];
  startOfLevel;
  endOfLevel;
  nextLevel;
  previousLevel;

  private flatMap;

  constructor(levelName) {
    Object.assign(this, levels[levelName]);
    this.parseMap();
    this.setStartAndEncOfLevel();
  }

  private parseMap() {
    this.map = [];
    this.flatMap.split('\n').forEach(element => {
      if (!element) return;
      this.map.push(element.trim().split(''));
    });
  }

  private setStartAndEncOfLevel() {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        switch (this.map[y][x]) {
          case 'S':
            this.startOfLevel = { x, y };
            break;
          case 'E':
            this.endOfLevel = { x, y };
            break;
        }
      };
    }
  }

  private randomNumBetween = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
