var RenderingEngine = /** @class */ (function () {
    function RenderingEngine(game) {
        this.window = window;
        this.game = game;
        this.setupCanvas();
        this.startGameLoop();
    }
    RenderingEngine.prototype.setupCanvas = function () {
        this.canvas = document.body.getElementsByTagName('canvas')[0];
        this.setCanvasSize();
        this.ctx = this.canvas.getContext('2d');
    };
    RenderingEngine.prototype.startGameLoop = function () {
        this.ctx.clearRect(0, 0, this.window.innerWidth, this.window.innerHeight);
        for (var i = 0; i < this.game.level.length; i++) {
            for (var ii = 0; ii < this.game.level[i].length; ii++) {
                var itemX = ((this.game.player.x * 32) - (ii * 32) - (this.window.innerWidth / 2 - 16)) * -1;
                var itemY = ((this.game.player.y * 32) - (i * 32) - (this.window.innerHeight / 2 - 16)) * -1;
                this.ctx.fillStyle = this.game.level[i][ii] === 1 ? 'red' : 'black';
                this.ctx.fillRect(itemX, itemY, 32, 32);
            }
        }
        this.drawPlayer();
        this.window.requestAnimationFrame(this.startGameLoop.bind(this));
    };
    // always draw the player in the middle
    RenderingEngine.prototype.drawPlayer = function () {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.window.innerWidth / 2 - 16, this.window.innerHeight / 2 - 16, 32, 32);
    };
    RenderingEngine.prototype.setCanvasSize = function () {
        this.canvas.width = this.window.innerWidth;
        this.canvas.height = this.window.innerHeight;
    };
    return RenderingEngine;
}());
export { RenderingEngine };
