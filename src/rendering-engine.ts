export class RenderingEngine {
  private canvas;
  private ctx: CanvasRenderingContext2D;
  private window: Window;
  private game;

  constructor(game) {
    this.window = window;
    this.game = game;
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

    for (let i = 0; i < this.game.level.length; i++) {
      for (let ii = 0; ii < this.game.level[i].length; ii++) {
        const itemX = ((this.game.player.x*32) - (ii*32) - (this.window.innerWidth/2 - 16)) * -1;
        const itemY = ((this.game.player.y*32) - (i*32) - (this.window.innerHeight/2 - 16)) * -1;
        this.ctx.fillStyle = this.game.level[i][ii] === 'D' ? 'brown' : 'green';
        this.ctx.fillRect(itemX, itemY, 32, 32);
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
