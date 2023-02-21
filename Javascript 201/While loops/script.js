let num = 0;

while (num < 100) {
    console.log(num);
    num++;
}


while(true) {
    let name = prompt("What is your name")
    if (name === "Kalob") {
        break;
    }
    console.log("Wrong name. Try again.");
}