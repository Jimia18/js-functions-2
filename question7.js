function reverseString(str) {
    return
    str.split("").reverse().join("");
}
//prompt a user to input
let userInput = prompt("Enter a string to reverse:");

let reversed = reverseString('userInput');

console.log("original string: " + userInput);
console.log('Reversed String:' + reversed);

//to also display in html
document.write("<h3>Reversed string:" + userInput + "<h3>");
document.write("<h3>Reversed string:" + reversed + "<h3>");    

