const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10, 11, 12];
const arr3 = [1, 2, [3, 4, [5, 6], 7], 8];

// 1️⃣ Length of array
console.log(arr1.length); // 👉 6

// 2️⃣ Convert array to string
console.log(arr1.toString()); // 👉 "1,2,3,4,5,6"

// 3️⃣ Get element at index (supports negative index from ES2022)
console.log(arr1.at(5)); // 👉 6

// 4️⃣ Join elements with space
console.log(arr1.join(' ')); // 👉 "1 2 3 4 5 6"

// 5️⃣ Remove last element
console.log(arr1.pop()); // 👉 6
console.log(arr1);       // 👉 [1, 2, 3, 4, 5]

// 6️⃣ Add new element at end
arr2.push(13);
console.log(arr2); // 👉 [7, 8, 9, 10, 11, 12, 13]

// 7️⃣ Remove first element
console.log(arr2.shift()); // 👉 7
console.log(arr2);         // 👉 [8, 9, 10, 11, 12, 13]

// 8️⃣ Add new element at beginning
console.log(arr2.unshift(7)); // 👉 7 (new length)
console.log(arr2);            // 👉 [7, 8, 9, 10, 11, 12, 13]

// 9️⃣ Delete specific index element (leaves undefined)
delete arr1[0];
console.log(arr1); // 👉 [ <1 empty item>, 2, 3, 4, 5 ]

// 🔟 Merge two arrays
console.log(arr1.concat(arr2)); 
// 👉 [ <1 empty item>, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13 ]

// 11️⃣ Copy part of array within itself (modifies original)
console.log(arr2.copyWithin(2, 0));     
// 👉 [7, 8, 7, 8, 9, 10, 11]

console.log(arr2.copyWithin(2, 0, 2));  
// 👉 [7, 8, 7, 8, 9, 10, 11]

// 12️⃣ Flatten nested array to 2 levels
console.log(arr3.flat(2)); 
// 👉 [1, 2, 3, 4, 5, 6, 7, 8]

// 13️⃣ Flatten all levels
console.log(arr3.flat(Infinity)); 
// 👉 [1, 2, 3, 4, 5, 6, 7, 8]

// 14️⃣ flatMap — flatten + map
let a = arr2.flatMap((x) => [x, x * 10]);
console.log(a); 
// 👉 [7, 70, 8, 80, 7, 70, 8, 80, 9, 90, 10, 100, 11, 110]

// 15️⃣ splice: remove 2 from index 3, insert 100, 1000
arr2.splice(3, 2, 100, 1000);
console.log(arr2); 
// 👉 [7, 8, 7, 100, 1000, 10, 11]

// 16️⃣ slice: extract elements (non-destructive)
const b = arr2.slice(0, 2);
console.log(b); // 👉 [7, 8]

// 17️⃣ toSpliced (ES2023): immutable splice
const c = arr2.toSpliced(0, 1);
console.log(c); // 👉 [8, 7, 100, 1000, 10, 11]
