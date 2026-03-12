let result = "5" + 2;  
console.log(result); // "52" — string ban gaya!

let result2 = "5" - 2; 
console.log(result2); // 3 — number ban gaya!

let result3 = "5"*"3"
console.log(typeof result3)
//Why? + concatenates as string, other operators take the value of as number!


//Number
let str = "42";
console.log(Number(str));   // 42
console.log(parseInt(str)); // 42
console.log(+str);          // 42 — shortcut!


//String
let num = 42;
console.log(String(num));   // "42"
console.log(num.toString()); // "42"

//Boolean
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean("Danuj"));  // true
console.log(Boolean(42));       // true


/* falsy values
1. null
2. undefined
3. 0
4. ""
5.NaN

rest all are true

*/


//tricky part

console.log(null + 1);      // 1
console.log(undefined + 1); // NaN => Not-a-Number
console.log(true + true);   // 2
console.log(false + true);     // 1
console.log(false + 1);     //1