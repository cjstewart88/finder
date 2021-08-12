import { Assets } from "./assets.js";

export class RenderingEngine {
  private canvas;
  private ctx: CanvasRenderingContext2D;
  private window: Window;
  private game;
  private assets: Assets;

  constructor(game) {
    this.window = window;
    this.game = game;
    this.assets = new Assets();
    this.assets.init(this.gameReady.bind(this));
  }

  private gameReady() {
    this.setupCanvas();
    this.startGameLoop();
  }

  private setupCanvas() {
    this.canvas = document.body.getElementsByTagName('canvas')[0];
    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');
  }

  private startGameLoop() {
    this.ctx.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);

    for (let i = 0; i < this.game.currentLevel.map.length; i++) {
      for (let ii = 0; ii < this.game.currentLevel.map[i].length; ii++) {
        const itemX = ((this.game.player.x*32) - (ii*32) - (this.window.innerWidth/2 - 16)) * -1;
        const itemY = ((this.game.player.y*32) - (i*32) - (this.window.innerHeight/2 - 16)) * -1;
        let imgX = 0;
        let imgY = 0;
        switch (this.game.currentLevel.map[i][ii]) {
          case 'D': imgX = 7; imgY = 5; break; // D = Path
          case '0': imgX = 0; imgY = 6; break; // 0 = Grass 1
          case 'Z': imgX = 1; imgY = 6; break; // Z = Grass 2
          case 'Q': imgX = 2; imgY = 6; break; // Z = Grass 3
          case 'J': imgX = 3; imgY = 6; break; // Z = Grass 4
          case 'R': imgX = 0; imgY = 2; break; // R = Path + Right Boarder Grass
          case 'B': imgX = 0; imgY = 5; break; // B = Path + Right Boarder + Bottom Boarder Grass
          case 'C': imgX = 0; imgY = 1; break; // T = Path + Bottom Boarder Grass
          case 'T': imgX = 4; imgY = 3; break; // T = Path + Bottom Boarder Grass
          case 'A': imgX = 6; imgY = 4; break; // T = Grass + path bottom + path right
          case 'L': imgX = 0; imgY = 3; break; // L = Path + Left Boarder Grass
          case 'P': imgX = 4; imgY = 0; break; // P = Path + Left Boarder + top border Grass
          case 'K': imgX = 4; imgY = 2; break; // B = Path + bottom Grass
          case 'I': imgX = 4; imgY = 4; break; // B = Path + bottom Grass
          case 'W': imgX = 2; imgY = 0; break; // B = Path + bottom Grass
          case 'V': imgX = 1; imgY = 0; break; // B = Path + bottom Grass
          case 'X': imgX = 2; imgY = 4; break; // B = Path + bottom Grass
          case 'S': imgX = 4; imgY = 6; break; // S = Start of lvl
          case 'E': imgX = 5; imgY = 6; break; // E = End of lvl
        }

        this.ctx.drawImage(
          this.assets.images['env'], imgX * 32, imgY * 32, 32, 32,
          itemX, itemY, 32, 32
        )
      }
    }

    this.drawPlayer();

    this.window.requestAnimationFrame(this.startGameLoop.bind(this))
  }

  // always draw the player in the middle
  private drawPlayer() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.window.innerWidth/2-16, this.window.innerHeight/2-16,  32, 32);
  }

  private setCanvasSize() {
    this.canvas.width = this.window.innerWidth;
    this.canvas.height = this.window.innerHeight;
  }
}
