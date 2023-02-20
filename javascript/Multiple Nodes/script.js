// const elems = document.querySelectorAll(".this-class");

// console.log(elems);
const elements = document.querySelectorAll("li");

console.log(elements);

elements.forEach(node => { node.innerText = "This is changed" });
console.log(elements);

elements.forEach((node, index) => {
    node.innerHTML = `Hello this is item ${index  + 1}`
});
elements.forEach(node => {
    node.classList.add("custom-class", "second-class");
})

elements.forEach((node, index) => {
    node.classList.add(`class${index + 1}`);
})