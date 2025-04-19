// ✅ JavaScript Set Methods Examples

// ✅ 1. new Set() — Create a new Set
const letters = new Set(["a", "b", "c"]);
console.log(letters);  
// 👉 Set(3) { 'a', 'b', 'c' }

// ✅ 2. add() — Add a new element
letters.add("d");
console.log(letters);  
// 👉 Set(4) { 'a', 'b', 'c', 'd' }

// ✅ 3. delete() — Delete an element
letters.delete("b");
console.log(letters);  
// 👉 Set(3) { 'a', 'c', 'd' }

// ✅ 4. has() — Check if an element exists
console.log(letters.has("a"));  
// 👉 true
console.log(letters.has("b"));  
// 👉 false

// ✅ 5. clear() — Remove all elements
letters.clear();
console.log(letters);  
// 👉 Set(0) {}

// ✅ 6. size — Get the number of elements
const numbers = new Set([1, 2, 3, 4]);
console.log(numbers.size);  
// 👉 4

// ✅ 7. forEach() — Loop through Set values
numbers.forEach((value) => {
  console.log(value);  
});
// 👉 1 2 3 4

// ✅ 8. values() / keys() — Get an iterator of values (both are same for Set)
const iter = numbers.values();
for (const val of iter) {
  console.log(val);  
}
// 👉 1 2 3 4

// ✅ 9. entries() — Get key/value pairs (key === value in Set)
const pairs = numbers.entries();
for (const [key, value] of pairs) {
  console.log(key, value);  
}
// 👉 1 1
// 👉 2 2
// 👉 3 3
// 👉 4 4

// ✅ 10. Spread operator (...) — Convert Set to Array
const arr = [...numbers];
console.log(arr);  
// 👉 [1, 2, 3, 4]
