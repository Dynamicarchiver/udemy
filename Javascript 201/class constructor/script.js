class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting () {
        console.log(`Hello from ${this.name} and I am ${this.age} years old`);
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}

const kalob = new Person("kalob", 18);
kalob.greeting();
kalob.setName("Boluwatife");;
kalob.setAge(31);
kalob.greeting();