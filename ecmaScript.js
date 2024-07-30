class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

let john = new Person("John");
john.greet(); // Hello John