// ✅ JavaScript Map Methods Examples

// ✅ 1. new Map() — Create a new Map
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 25);
console.log(myMap);  
// 👉 Map(2) { 'name' => 'John', 'age' => 25 }

// ✅ 2. set() — Add a new key-value pair
myMap.set("city", "Chennai");
console.log(myMap);  
// 👉 Map(3) { 'name' => 'John', 'age' => 25, 'city' => 'Chennai' }

// ✅ 3. get() — Get value by key
console.log(myMap.get("name"));  
// 👉 John

// ✅ 4. has() — Check if key exists
console.log(myMap.has("age"));  
// 👉 true
console.log(myMap.has("salary"));  
// 👉 false

// ✅ 5. delete() — Delete a key-value pair
myMap.delete("age");
console.log(myMap);  
// 👉 Map(2) { 'name' => 'John', 'city' => 'Chennai' }

// ✅ 6. clear() — Remove all entries
const tempMap = new Map([
  ["a", 1],
  ["b", 2],
]);
tempMap.clear();
console.log(tempMap);  
// 👉 Map(0) {}

// ✅ 7. size — Get the number of entries
console.log(myMap.size);  
// 👉 2

// ✅ 8. keys() — Get an iterator of keys
for (const key of myMap.keys()) {
  console.log(key);  
}
// 👉 name
// 👉 city

// ✅ 9. values() — Get an iterator of values
for (const value of myMap.values()) {
  console.log(value);  
}
// 👉 John
// 👉 Chennai

// ✅ 10. entries() — Get an iterator of [key, value] pairs
for (const [key, value] of myMap.entries()) {
  console.log(key, value);  
}
// 👉 name John
// 👉 city Chennai

// ✅ 11. forEach() — Loop through Map
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);  
});
// 👉 name => John
// 👉 city => Chennai

// ✅ 12. Spread operator (...) — Convert Map to array
const mapToArray = [...myMap];
console.log(mapToArray);  
// 👉 [ [ 'name', 'John' ], [ 'city', 'Chennai' ] ]
