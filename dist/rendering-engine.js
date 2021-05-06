export class RenderingEngine {
    constructor(game) {
        this.window = window;
        this.game = game;
        this.setupCanvas();
        this.startGameLoop();
    }
    setupCanvas() {
        this.canvas = document.body.getElementsByTagName('canvas')[0];
        this.setCanvasSize();
        this.ctx = this.canvas.getContext('2d');
    }
    startGameLoop() {
        this.ctx.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);
        for (let i = 0; i < this.game.currentLevel.map.length; i++) {
            for (let ii = 0; ii < this.game.currentLevel.map[i].length; ii++) {
                const itemX = ((this.game.player.x * 32) - (ii * 32) - (this.window.innerWidth / 2 - 16)) * -1;
                const itemY = ((this.game.player.y * 32) - (i * 32) - (this.window.innerHeight / 2 - 16)) * -1;
                switch (this.game.currentLevel.map[i][ii]) {
                    case 'D':
                        this.ctx.fillStyle = 'brown';
                        break;
                    case '0':
                        this.ctx.fillStyle = 'green';
                        break;
                    case 'S':
                        this.ctx.fillStyle = 'yellow';
                        break;
                    case 'E':
                        this.ctx.fillStyle = 'blue';
                        break;
                }
                this.ctx.fillRect(itemX, itemY, 32, 32);
            }
        }
        this.drawPlayer();
        this.window.requestAnimationFrame(this.startGameLoop.bind(this));
    }
    // always draw the player in the middle
    drawPlayer() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.window.innerWidth / 2 - 16, this.window.innerHeight / 2 - 16, 32, 32);
    }
    setCanvasSize() {
        this.canvas.width = this.window.innerWidth;
        this.canvas.height = this.window.innerHeight;
    }
}
