// create a basic calculator function and Implement various mathematical operations, such as addition, subtraction, multiplication, and division, as well as user interactions to take input and display results.

// function to add two numbers
function add(a, b) {
    return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// function to take user input and display results
function calculator() {
    const a = Number(prompt("Enter the first number:"));
    const b = Number(prompt("Enter the second number:"));

    const addResult = add(a, b);
    const subtractResult = subtract(a, b);
    const multiplyResult = multiply(a, b);
    const divideResult = divide(a, b);

    console.log(`Addition: ${addResult}`);
    console.log(`Subtraction: ${subtractResult}`);
    console.log(`Multiplication: ${multiplyResult}`);
    console.log(`Division: ${divideResult}`);
}

calculator();
// Output:
// Enter the first number: 10
// Enter the second number: 5
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2
