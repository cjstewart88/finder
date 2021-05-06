export class InputHandler {
    constructor(game) {
        this.window = window;
        this.game = game;
        this.registerKeyboardEvents();
    }
    registerKeyboardEvents() {
        this.window.onkeydown = ((e) => {
            switch (e.code) {
                case 'ArrowUp':
                    this.game.movePlayer('up');
                    break;
                case 'ArrowDown':
                    this.game.movePlayer('down');
                    break;
                case 'ArrowLeft':
                    this.game.movePlayer('left');
                    break;
                case 'ArrowRight':
                    this.game.movePlayer('right');
                    break;
                case 'Space':
                    this.game.interact();
                    break;
            }
        });
    }
}
