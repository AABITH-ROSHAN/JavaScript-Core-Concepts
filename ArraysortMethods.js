const alphaArr = ["banana", "apple", "cherry", "date"];
const numArr = [40, 10, 100, 30, 20];
const objArr = [
  { name: "A", age: 25 },
  { name: "B", age: 22 },
  { name: "C", age: 28 }
];

// 🔠 1️⃣ Alphabetic Sort (default sort by UTF-16)
console.log(alphaArr.sort());
// 👉 ['apple', 'banana', 'cherry', 'date']

// 🔁 2️⃣ reverse() — reverses the array (in-place)
console.log(alphaArr.reverse());
// 👉 ['date', 'cherry', 'banana', 'apple']

// 🆕 3️⃣ toSorted() — returns sorted copy (ES2023+) doesnt affect orginal
console.log(alphaArr.toSorted());
// 👉 ['apple', 'banana', 'cherry', 'date']

// 🆕 4️⃣ toReversed() — returns reversed copy (ES2023+) doesnt affect orginal
console.log(alphaArr.toReversed());
// 👉 ['apple', 'banana', 'cherry', 'date']

// 🧮 5️⃣ Numeric Sort (default is string sort, so use compare fn)
console.log(numArr.sort((a, b) => a - b)); 
// 👉 [10, 20, 30, 40, 100]

// 🔄 6️⃣ Reverse Numeric Sort
console.log(numArr.sort((a, b) => b - a)); 
// 👉 [100, 40, 30, 20, 10]

// 🎲 7️⃣ Random Sort (not reliable for production use)
console.log(numArr.sort(() => 0.5 - Math.random())); 
// 👉 Random order like [30, 10, 100, 20, 40]

// 🔍 8️⃣ Math.min() — minimum in array using spread
console.log(Math.min(...numArr)); 
// 👉 10

// 🔍 9️⃣ Math.max() — maximum in array using spread
console.log(Math.max(...numArr)); 
// 👉 100



// 🧑‍💻 1️⃣2️⃣ Sorting Array of Objects by Age
console.log(objArr.sort((a, b) => a.age - b.age)); 
// 👉 [ {B:22}, {A:25}, {C:28} ]
