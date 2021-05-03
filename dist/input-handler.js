var InputHandler = /** @class */ (function () {
    function InputHandler(game) {
        this.window = window;
        this.game = game;
        this.registerKeyboardEvents();
    }
    InputHandler.prototype.registerKeyboardEvents = function () {
        var _this = this;
        this.window.onkeydown = (function (e) {
            switch (e.key) {
                case 'ArrowUp':
                    _this.game.movePlayer('up');
                    break;
                case 'ArrowDown':
                    _this.game.movePlayer('down');
                    break;
                case 'ArrowLeft':
                    _this.game.movePlayer('left');
                    break;
                case 'ArrowRight':
                    _this.game.movePlayer('right');
                    break;
            }
        });
    };
    return InputHandler;
}());
export { InputHandler };
