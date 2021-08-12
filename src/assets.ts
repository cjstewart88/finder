export class Assets {
  private sources = [
    { key: 'env', value: 'images/env.PNG' }
  ];

  public images = {};
  private loadedImages = 0;
  private numberOfImages = 0;

  constructor() {}

  public init (finishedLoading) {
    this.numberOfImages = this.sources.length;

    this.sources.forEach((source) => {
      this.images[source.key] = new Image();

      this.images[source.key].onload = () => {
        if (++this.loadedImages === this.numberOfImages) {
          finishedLoading();
        } else {
          this.loadedImages++;
        }
      }

      this.images[source.key].src = source.value;
    });
  }

};
