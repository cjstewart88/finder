export class InputHandler {
  private window: Window;
  private game

  constructor(game) {
    this.window = window;
    this.game = game;
    this.registerKeyboardEvents();
  }

  private registerKeyboardEvents() {
    this.window.onkeydown = ((e) => {
      switch (e.key) {
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
      }
    });
  }
}
