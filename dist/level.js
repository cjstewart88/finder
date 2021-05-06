import { levels } from './levels/levels.js';
var Level = /** @class */ (function () {
    function Level(levelName) {
        this.data = [];
        this.randomNumBetween = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        this.generateLevel(levelName);
    }
    Level.prototype.generateLevel = function (levelName) {
        var _this = this;
        var rawLevelData = levels[levelName];
        this.data = [];
        rawLevelData.split('\n').forEach(function (element) {
            if (!element)
                return;
            _this.data.push(element.split(''));
        });
    };
    return Level;
}());
export { Level };
