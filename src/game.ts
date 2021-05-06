import { Level } from "./level.js";
import { Player } from "./player.js";

export class Game {
  public player;
  public level;

  constructor() {
    this.player = new Player();
    this.level = new Level('indigo').data;
  }

  public movePlayer(direction) {
    switch (direction) {
      case 'up':
        if (this.player.y - 1 < 0) return;
        this.player.moveUp();
        break;
      case 'down':
        if (this.player.y + 1 >= this.level.length) return;
        this.player.moveDown();
        break;
      case 'left':
        if (this.player.x - 1 < 0) return;
        this.player.moveLeft();
        break;
      case 'right':
        if (this.player.x + 1 >= this.level[0].length) return;
        this.player.moveRight();
        break;
    }
  }
}
