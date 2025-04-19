const num = 123.456789;

// ✅ 1. toString() — Convert number to string
console.log(num.toString()); 
// 👉 "123.456789"

// ✅ 2. toExponential() — Exponential format (scientific notation)
console.log(num.toExponential()); 
// 👉 "1.23456789e+2"

console.log(num.toExponential(2)); 
// 👉 "1.23e+2"

// ✅ 3. toFixed() — Round to fixed number of decimal places
console.log(num.toFixed(2)); 
// 👉 "123.46"

console.log(num.toFixed(5)); 
// 👉 "123.45679"

// ✅ 4. toPrecision() — Round to fixed number of total digits
console.log(num.toPrecision(4)); 
// 👉 "123.5"

console.log(num.toPrecision(6)); 
// 👉 "123.457"

// ✅ 5. valueOf() — Return primitive number value
console.log(num.valueOf()); 
// 👉 123.456789




// ✅ 1. Number() — Converts to number (returns NaN if invalid)
console.log(Number("123"));      
// 👉 123

console.log(Number("123.45"));  
// 👉 123.45

console.log(Number("123abc"));  
// 👉 NaN

console.log(Number(true));      
// 👉 1

console.log(Number(false));     
// 👉 0

console.log(Number(""));        
// 👉 0

// ✅ 2. parseFloat() — Parses and returns floating-point number
console.log(parseFloat("123.456text")); 
// 👉 123.456

console.log(parseFloat("100"));         
// 👉 100

console.log(parseFloat("abc123"));      
// 👉 NaN


// ✅ 3. parseInt() — Parses and returns whole number (integer)
console.log(parseInt("123.99"));    
// 👉 123

console.log(parseInt("123abc"));    
// 👉 123

console.log(parseInt("abc123"));    
// 👉 NaN


// ✅ 4. Number.isInteger() — Checks if value is integer
console.log(Number.isInteger(100));      
// 👉 true

console.log(Number.isInteger(100.5));    
// 👉 false

console.log(Number.isInteger("100"));    
// 👉 false


// ✅ 5. Number.isSafeInteger() — Checks if integer is safe (between -(2^53 - 1) and 2^53 - 1)
console.log(Number.isSafeInteger(9007199254740991));    
// 👉 true

console.log(Number.isSafeInteger(9007199254740992));    
// 👉 false

console.log(Number.isSafeInteger(100.5));               
// 👉 false
