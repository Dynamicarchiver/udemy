

class Name {
    setName(name) {
        this.name = name;
    }
    speak() {
        if (this.name == undefined) {
            this.name = "Unamed Puppers";
        }
        console.log(`Woof Woff says the dog named ${this.name}`);
    }
}

const thing = new Name;
thing.speak();