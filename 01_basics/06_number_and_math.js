let a = 10;   // integer
let b = 10.5; // floating number
let c = 2e3;  // exponential = 2000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

//conversion
let num = Number("123");
let num2 = parseInt("123");
let num3 = parseFloat("12.34");

console.log(num);
console.log(num2);
console.log(num3);


//Math

console.log(Math.PI);
console.log(Math.sqrt(4));
console.log(Math.pow(2,4));
console.log(Math.cos(4));
console.log(Math.abs(-8));

// Roundings

Math.round(4.6) // 5
Math.floor(4.9) // 4
Math.ceil(4.1)  // 5
Math.trunc(4.9) // 4

console.log(Math.floor(Math.random()*100)+1);



