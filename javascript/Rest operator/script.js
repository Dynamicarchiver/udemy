function addNumbers(name, ...numbers) {
    let total = 0;
    for (index in numbers) {
        total = total + numbers[index];
    }
    return `Hi ${name} the total is ${total}`;
}

const newTotal = addNumbers("Boluwatife", 4, 7, 20);
console.log(newTotal);