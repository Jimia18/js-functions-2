//Calculate the sum of two numbers, and return the result.
//  (You can choose to just do a function or to connect 
// that function with HTML inputs and a button)
function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let sum = num1 + num2;
    document.getElementById('result').textContent = 'Sum: ' + sum;
}


//Write a javascript function to square numbers
// (Make it reusable optional)
//For loop 1 to 10 — Won’t hard code this
//Pass each number as argument to square
//Return value of argument multiplied by itself
function squareNumber(num) {
    return num * num;
}


for (let i = 1; i <= 10; i++) {
        console.log(`Square of ${i} is ${squareNumber(i)}`);
    }

//. Write a javascript function to return the maximum of 3 numbers.
// Prompt for 3 inputs (You can choose to use just input)
// Convert to numbers
// Pass to the function
// Use Math.max to get the maximum.
 
function maxNumber(){
    let max1 = parseFloat(document.getElementById("maxim1").value);
    let max2 = parseFloat(document.getElementById("maxim2").value);
    let max3 = parseFloat(document.getElementById("maxim3").value);
    let maximNumResult = document.getElementById("maximumNumber")

    if (!isNaN(max1)&& !isNaN(max2)&& !isNaN(max3))
    {
        let maximum = Math.max(max1,max2,max3);
        maximNumResult.textContent = `The maximum number is : ${maximum}`

    }

    else{
        maximNumResult.textContent = "Enter a number"
    }
    
}

//4. Write a JavaScript function that takes a time 
// input in 12-hour format (e.g., "02:30 PM") and converts it to
//  24-hour format (e.g., "14:30"). The function should take user input 
// from an HTML form and display the result.
function convertTo24Hour(time) {
    let [timePart, period] = time.split(" "); // Split the time and period (AM/PM)
    let [hours, minutes] = timePart.split(":").map(num => parseInt(num)); // Split hours and minutes

    // Convert PM and AM to 24-hour format
    if (period === "PM" && hours !== 12) {
        hours += 12; // Convert PM to 24-hour format
    } else if (period === "AM" && hours === 12) {
        hours = 0; // Convert 12 AM to 00 (midnight)
    }

    // Format the hours and minutes to ensure two digits
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

document.getElementById("timeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const timeInput = document.getElementById("timeInput").value.trim();
    const result = convertTo24Hour(timeInput);
    document.getElementById("result").textContent = `Converted time: ${result}`;
});