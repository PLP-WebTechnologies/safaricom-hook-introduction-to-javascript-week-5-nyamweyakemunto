// Part 1: JavaScript Basics
// Declare variables
let name = "Marion";  // string
let age = 25;           // number
let isStudent = true;   // boolean
let hobbies = ["reading", "eating", "travelling"];  // array
const person = { name: "Marion", age: 25 };  // object

// Logging the variables and their types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Part 2: Operators (Simple Calculator)
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }
    alert(`Result: ${result}`);
}

// ** Call the calculator function so that it runs when the page loads **
calculator();  // This will trigger the prompts when the page loads.

// Part 3: Functions (Greeting Function)
function greetUser(name) {
    return `Hello, ${name}! Welcome to the website.`;
}

// Assuming you call the function with a name
let greetingMessage = greetUser("Jacob");
document.body.innerHTML += `<p>${greetingMessage}</p>`;

// Part 4: Control Structures (If Statements)
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    document.body.innerHTML += `<p>You are eligible to vote!</p>`;
} else {
    document.body.innerHTML += `<p>You are not eligible to vote.</p>`;
}

// Part 5: Loops (Display Numbers 1-10)
let ol = document.createElement("ol");

for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}

document.body.appendChild(ol);

// Part 6: DOM Manipulation (Modify Elements)
document.querySelector("h1").textContent = "JavaScript in Action!";

let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);
