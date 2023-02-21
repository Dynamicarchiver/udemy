
const num = 10

try {
    // throw "Kalobs custom error";
    // console.log("A thing in here");
    num = num + 20;
} catch(error) {
    console.warn("Error LOGGING: ", error);
    // num = num + 15;
} finally {
    console.log("The final number is", num);
}


console.log("SHOW ME!!!!!");