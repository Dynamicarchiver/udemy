console.log("Loading script");
// setTimeout(function () {
//     console.log("Waited three seconds")
// }, 3000);

let count = 0;

const myInterval = setInterval(function() {
    console.log("Checking Something");
    count++;

    if (count === 3){
        //undet interval
        clearInterval(myInterval)
        console.log("That was the last one");
    }
}, 2000);