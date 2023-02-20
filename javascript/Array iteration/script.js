const arr = ["Zero", "One", "Two", "Three"];

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}    //older versions

arr.forEach(num => console.log(num));   //new version