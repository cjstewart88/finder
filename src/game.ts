import { Level } from "./level.js";
import { Player } from "./player.js";

export class Game {
  player;
  currentLevel;
  levelHistory = {};

  constructor() {
    this.player = new Player();
    this.setLevel('indigo');
  }

  interact() {
    if (this.atNextLevelDoor) {
      this.nextLevel();
    } else if (this.atPreviousLevelDoor) {
      this.previousLevel();
    }
  }

  movePlayer(direction) {
    switch (direction) {
      case 'up':
        if (this.player.y - 1 < 0) return;
        this.player.moveUp();
        break;
      case 'down':
        if (this.player.y + 1 >= this.currentLevel.map.length) return;
        this.player.moveDown();
        break;
      case 'left':
        if (this.player.x - 1 < 0) return;
        this.player.moveLeft();
        break;
      case 'right':
        if (this.player.x + 1 >= this.currentLevel.map[0].length) return;
        this.player.moveRight();
        break;
    }
  }

  private get atNextLevelDoor() {
    return JSON.stringify(this.player.pos) === JSON.stringify(this.currentLevel.endOfLevel);
  }

  private get atPreviousLevelDoor() {
    return JSON.stringify(this.player.pos) == JSON.stringify(this.currentLevel.startOfLevel);
  }

  private nextLevel() {
    if (!this.currentLevel.nextLevel) return;
    this.setLevel(this.currentLevel.nextLevel);
    this.player.moveTo(this.currentLevel.startOfLevel.x, this.currentLevel.startOfLevel.y);
  }

  private previousLevel() {
    if (!this.currentLevel.previousLevel) return;
    this.setLevel(this.currentLevel.previousLevel);
    this.player.moveTo(this.currentLevel.endOfLevel.x, this.currentLevel.endOfLevel.y);
  }

  private setLevel(levelName) {
    if (this.levelHistory[levelName]) {
      this.currentLevel = this.levelHistory[levelName];
    } else {
      this.currentLevel = new Level(levelName);
      this.levelHistory[levelName] = this.currentLevel;
    }
  }
}
