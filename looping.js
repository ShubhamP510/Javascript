// Example of a for loop in JavaScript
for (let i = 1; i < 10; ++i) {
    console.log(`Iteration number: ${i}`);
}

// Example of a while loop in 
console.log("Example of a while loop in JavaScript");
let j = 1;
while (j < 10) {
    console.log(`Iteration number: ${j}`);
    j++;
}

// Example of a do-while loop in JavaScript
console.log("Example of a do-while loop in JavaScript");
let k = 1;
do {
    console.log(`Iteration number: ${k}`);
    k++;
}
while (k < 10);


console.log("Example of basic in JavaScript");

let a=10;
let b="Hello"
let c=true;
let d=null;
let e=undefined;
let f=Symbol("symbol")
let g=BigInt(12345678901234567890n);
let h={name:"John", age:30};
let i=[1,2,3,4,5];
console.log("a:", typeof a); // Output: 10
console.log("b:",typeof b); // Output: Hello
console.log("c:",typeof c); // Output: true
console.log("d:",typeof d); // Output: null
console.log("e:",typeof e); // Output: undefined
console.log("f:",typeof f); // Output: Symbol(symbol)
console.log("g:",typeof g); // Output: 12345678901234567890n
console.log("h:",typeof h); // Output: { name: 'John', age: 30 }
console.log("i:",typeof i); // Output: [ 1, 2, 3, 4, 5 ]


console.log("Example area of a reactangle in JavaScript");
// Function to calculate the area of a rectangle
function calculateArea(radius) {
    const pi = Math.PI; // Using Math.PI for a more accurate value of π
    AOR = pi * radius * radius;
    console.log("Area of the circle:", AOR); // Output: Area of the circle: 78.53981633974483
}

// Example usage
const radius = 5;
const area = calculateArea(radius);
console.log(`The area of a circle with radius ${radius} is: ${area}`); // Output: The area of a circle with radius 5 is: 78.53981633974483

let x=5;
let y='5';
console.log("x==y:", x==y); // Output: true (loose equality, type coercion)
console.log("x===y:", x===y); // Output: false (strict equality, no type coercion)


for(let x; x%2===0;x++){
    console.log("x is even:", x); // Output: x is even: 2, x is even: 4, etc.
};

console.log("Checking even or odd numbers from 1 to 10:");
for (let i=1;i<11;i++){
    if(i%2===0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}
