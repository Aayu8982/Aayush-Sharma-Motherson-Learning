let name = "Aayush Sharma";
console.log(name);

// string length
console.log(name.length); //13

//escape sequence
let text = 'We are the so-called "Vikings" from the north.';
console.log(text); //We are the so-called "Vikings" from the north.

let str1 = "Aayush";
let str2 = new String("Sharma");

console.log(typeof str1, typeof str2); // string object

// JavaScript Strings as Objects
let x = "Aayush";
console.log(x.toUpperCase()); //Aayush
console.log(x.toLowerCase()); //aayush
console.log(x.slice(1)); //ayush
console.log(x.substring(2, x.length)); // yush

let text1 = "this is Aayush";
console.log(text1.indexOf("A")); //8
console.log(text1.lastIndexOf("s")); //12
console.log(text1.search("Aa")); // 8
console.log(text1.search("yus")); // 10
console.log(text1.substr(-6)); // Aayush

let text2 = text1.replaceAll("Aayush", "parth"); 
console.log(text2); // this is parth
console.log(text2.includes("Aayush")); // false
console.log(text2.startsWith("this")); // true
console.log(text2.startsWith("rth")); // false
console.log(text2.endsWith("rth")); // true

// Template literal
let txt1 = `Aayush`;
let txt2 = `my name is ${txt1}`;
console.log(txt2); // my name is Aayush

//bigint
let xt = BigInt(999999999999999);
let type = typeof xt;

console.log(type, xt); //bigint 999999999999999n

// conversion
let a = (100).toString();
console.log(a, typeof a); // 100, String

// exponential
let t = 9.656;
console.log(t.toExponential()); //9.656e+0
console.log(t.toExponential(2)); // 9.66e+0
console.log(t.toExponential(4)); //9.6560e+0
console.log(t.toExponential(6)); //9.656000e+0

// precision
let u = 9.656;
console.log(u.toPrecision()); //9.656
console.log(u.toPrecision(2)); //9.7
console.log(u.toPrecision(4)); //9.656
console.log(u.toPrecision(6)); //9.65600