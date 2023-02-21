const person5 = {
    'name' : 'Kalob',
    speak(name) {
        console.log(`My name is ${this.name}`);
    }
}

person5.speak();

function counter() {
    if (this.total === undefined) {
        this.total = 1;
    } else {
        this.total++;
    }
    console.log("Running counter. Total is", this.total)
}
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
