// let now = new Date(2006,6,26);

// console.log(now);
// Dates

let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

//Time


console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

//TimeStamp(Important)

let time = Date.now();
console.log(time);
/*
Isko Unix Timestamp bolte hain.

⚡ Real-world use:

authentication tokens

logging systems

databases

analytics tracking
*/


// If you want to measure performance

let start = Date.now();

for(let i=0;i<1000000;i++){}

let end = Date.now();

console.log(end - start);

//modern date api

let date = new Date();

let formatted = new Intl.DateTimeFormat("en-IN").format(date);

console.log(formatted);