class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
}
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    printName() {
        console.log(this.name);
    }
    printAge() {
        console.log(this.age);
    }
}

const person = new Person("John", 30);
person.printName();