const arr = [10, 20, 30, 40, 30, 20, 10];

// 1️⃣ indexOf() — first occurrence of value
console.log(arr.indexOf(30)); 
// 👉 2

// 2️⃣ lastIndexOf() — last occurrence of value
console.log(arr.lastIndexOf(30)); 
// 👉 4

// 3️⃣ includes() — checks if value exists
console.log(arr.includes(40)); 
// 👉 true

console.log(arr.includes(50)); 
// 👉 false

// 4️⃣ find() — returns the first value that satisfies condition
const found = arr.find((val) => val > 25);
console.log(found); 
// 👉 30

// 5️⃣ findIndex() — returns index of first match
const foundIndex = arr.findIndex((val) => val > 25);
console.log(foundIndex); 
// 👉 2

// 6️⃣ findLast() — returns last value that satisfies condition (ES2023+)
const lastFound = arr.findLast((val) => val > 25);
console.log(lastFound); 
// 👉 30

// 7️⃣ findLastIndex() — returns index of last match (ES2023+)
const lastFoundIndex = arr.findLastIndex((val) => val > 25);
console.log(lastFoundIndex); 
// 👉 4
