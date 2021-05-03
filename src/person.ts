export class Person {
  public name: string;

  constructor(name) {
    this.name = name;
  }

  public hello() {
    console.log(`Hello, ${this.name}!`);
  }
}
