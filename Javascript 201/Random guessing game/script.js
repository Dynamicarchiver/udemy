

while (true) {
    let num = prompt("Guess the number");
     num = Number(num);

    const randomNumber = Math.ceil(Math.random() * 10);
     console.log(randomNumber);

    if (num === randomNumber) {
        alert("Wow!, you got it right you ra a very good guesser");
        break;
    } else {
        console.log("You guessed", num, "But the right number was ", randomNumber);
    }
}