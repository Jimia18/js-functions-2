// Function to check if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Prompt user for input
let userNumber = parseInt(prompt("Enter a number:"));

// Determine if the number is even or odd
let result = checkEvenOdd(userNumber);

// Display the result
console.log("The number " + userNumber + " is " + result + ".");

// Also display in HTML
document.write("<h3>The number " + userNumber + " is " + result + ".</h3>");
