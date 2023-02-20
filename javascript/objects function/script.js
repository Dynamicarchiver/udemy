const person = {
    'name' : "Kalob",
    'age' : 31,
    'height' : "6'0\"",
    'speak' : function(want = "cookies") {
        console.log(`Meow, I want ${want}`);
    },
    talk(to = "Karen") {
        console.log(`I am talking to ${to}`);
    }
}

person.talk("Amanda");
person.speak("Pizza");