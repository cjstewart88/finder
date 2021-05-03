import { Game } from './game.js';
import { InputHandler } from './input-handler.js';
import { RenderingEngine } from './rendering-engine.js';

const game = new Game();
new RenderingEngine(game);
new InputHandler(game);
