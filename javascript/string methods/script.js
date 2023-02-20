// const a = "a"
                123456789012345678901234567890123456
const course = "Javascript 101: Coding for beginners";

console.log(course);
console.log(course.length); //return teh length of the string starting from 1
// console.log(a.length);
console.log(course.search("Coding")); //returning the number of the first letter in the search function where the number start from 0
console.log(course.slice(16, 22)); //return the a string starting from the first number index in the string up until the last where we start counting at 0

let course2 = course.replace("Coding","Programming"); //it replaces the first string with the second string and returns the string starting from the replaced string
console.log(course2);

console.log(course.toUpperCase())
console.log(course.toLocaleLowerCase());

const spacy = "         lots of spaces,       ";
console.log(spacy.trim()); //it removes all the unnecessary spaces from the beginning and end of a string


console.log(course.split(" ")); //it return an array of string after it encouter the string of symbol in the function

console.log(course.substr(16, 12));// extract a substring from the first argument index and count the last number of array

console.log(course.substring(16, 12));