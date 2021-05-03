var Level = /** @class */ (function () {
    function Level() {
        this.data = [];
        this.randomNumBetween = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        this.generateLevel();
    }
    Level.prototype.generateLevel = function () {
        var levelWidth = this.randomNumBetween(10, 100);
        var levelHeight = this.randomNumBetween(10, 100);
        for (var i = 0; i < levelHeight; i++) {
            this.data[i] = [];
            for (var ii = 0; ii < levelWidth; ii++) {
                this.data[i].push(this.randomNumBetween(0, 1));
            }
        }
    };
    return Level;
}());
export { Level };
