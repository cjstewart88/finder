var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("Hello, " + this.name + "!");
    };
    return Person;
}());
export { Person };
