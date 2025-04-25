function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
    } else {
        return "Error: Invalid operator.";
    }
}

// Example usage:
const result = calculator(10, 5, '+');
console.log(result); // Output: 15
