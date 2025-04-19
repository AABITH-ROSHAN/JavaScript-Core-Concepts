const nums = [1, 2, 3, 4, 5];
const mixed = [1, 2, 3, 4, 5, 6];

// 1️⃣ forEach — loop through array (no return)
nums.forEach((num) => console.log(num * 2)); 
// 👉 2 4 6 8 10

// 2️⃣ map — returns new array by transforming each element
const mapped = nums.map((num) => num * 2);
console.log(mapped); 
// 👉 [2, 4, 6, 8, 10]

// 3️⃣ flatMap — map + flatten one level
const fm = nums.flatMap((n) => [n, n * 10]);
console.log(fm); 
// 👉 [1, 10, 2, 20, 3, 30, 4, 40, 5, 50]

// 4️⃣ filter — returns elements that pass a condition
const even = nums.filter((n) => n % 2 === 0);
console.log(even); 
// 👉 [2, 4]

// 5️⃣ reduce — accumulate from left to right
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); 
// 👉 15

// 6️⃣ reduceRight — accumulate from right to left acc-initial val-current
const sub = nums.reduceRight((acc, val) => acc - val);
console.log(sub); 
// 👉 -5 ( ((((5-4)-3)-2)-1) )

// 7️⃣ every — check if all elements satisfy condition
console.log(nums.every((n) => n > 0)); 
// 👉 true

// 8️⃣ some — check if **at least one** element satisfies condition
console.log(nums.some((n) => n > 3)); 
// 👉 true

// 9️⃣ from — creates array from iterable
const str = "hello";
console.log(Array.from(str)); 
// 👉 ['h', 'e', 'l', 'l', 'o']

// 🔟 keys — returns an iterator of keys (indexes)
const keys = nums.keys();
console.log([...keys]); 
// 👉 [0, 1, 2, 3, 4]

// 1️⃣1️⃣ entries — returns key-value pairs
const entries = nums.entries();
console.log([...entries]); 
// 👉 [[0,1],[1,2],[2,3],[3,4],[4,5]]

// 1️⃣2️⃣ with — returns a copy with value changed at given index (ES2023+)
const updated = nums.with(2, 99); 
console.log(updated); 
// 👉 [1, 2, 99, 4, 5]

// 1️⃣3️⃣ Spread (...) — expands array elements
const spreadArr = [...nums, 6, 7]; 
console.log(spreadArr); 
// 👉 [1, 2, 3, 4, 5, 6, 7]
