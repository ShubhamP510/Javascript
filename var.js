// Example of var
var x = 10;
var x=15;
console.log("var x:", x); 
var x = 20; 
console.log("var x after reassignment:", x); 

// Example of let
let y = 15;
console.log("let y:", y); 
y = 25; 
console.log("let y after reassignment:", y); // Output: let y after reassignment: 25


// Example of const
const z = 30;
console.log("const z:", z); // Output: const z: 30
// z = 40; // Uncommenting this line will throw an error: Assignment to constant variable.
// Example of const with an object
const person = { name: "John", age: 25 };
console.log("const person:", person);

// Modifying properties of a const object
person.age = 30;
console.log("const person after modifying property:", person);

// Adding a new property to a const object
person.city = "New York";
console.log("const person after adding property:", person);

// Example of const with an array
const numbers = [1, 2, 3];
console.log("const numbers:", numbers);

// Modifying elements of a const array
numbers.push(4);
console.log("const numbers after push:", numbers);

// Reassigning a const variable (will throw an error)
// numbers = [5, 6, 7]; // Uncommenting this line will throw an error: Assignment to constant variable.


// Example of primitive immutable types
let str = "Hello";
console.log("Original string:", str);

// Attempting to modify a string (strings are immutable)
str[0] = "h";
console.log("String after attempting modification:", str); // Output: Hello

// Creating a new string instead
str = "hello";
console.log("New string:", str);

// Example with numbers (also immutable)
let num = 42;
console.log("Original number:", num);

// Reassigning creates a new value
num = num + 1;
console.log("New number:", num);


// Example of logical operators
let a = true;
let b = false;

// Logical AND (&&)
console.log("a && b:", a && b); // Output: false

// Logical OR (||)
console.log("a || b:", a || b); // Output: true

// Logical NOT (!)
console.log("!a:", !a); // Output: false
console.log("!b:", !b); // Output: true

// Combining logical operators
let c = a && !b;
console.log("a && !b:", c); // Output: true

