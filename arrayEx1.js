// 1.1 
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// - What is the length of the array ?
// - Write a function called myAlphabetLength which console.logs the length of the array.
function myAlphabetLength() {
    console.log(myAlphabet);
}
myAlphabetLength();
// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets.
//     - Console.log each item in the array.Also console.log the index for each planet.
const Planets = ["Earth", "Neptune", "Mars", "Jupiter", "Saturn"]
Planets.forEach(function (items) {
    console.log(items)
})
Planets.forEach(function (indexEach) {
    console.log(Planets.indexOf(indexEach))
})
// #### 1.3 Console.log each item in this array: 
let myArr = [1, 2, 'One', true];
myArr.forEach(function (items) {
    console.log(items)
})
