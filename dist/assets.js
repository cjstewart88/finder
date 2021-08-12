export class Assets {
    constructor() {
        this.sources = [
            { key: 'env', value: 'images/env.PNG' }
        ];
        this.images = {};
        this.loadedImages = 0;
        this.numberOfImages = 0;
    }
    init(finishedLoading) {
        this.numberOfImages = this.sources.length;
        this.sources.forEach((source) => {
            this.images[source.key] = new Image();
            this.images[source.key].onload = () => {
                if (++this.loadedImages === this.numberOfImages) {
                    finishedLoading();
                }
                else {
                    this.loadedImages++;
                }
            };
            this.images[source.key].src = source.value;
        });
    }
}
;
