// 1. Object.keys(obj) => Returns an array of object's own property names (keys)
const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // 👉 ['name', 'age']


// 2. Object.values(obj) => Returns an array of object's values
console.log(Object.values(user)); // 👉 ['Alice', 25]


// 3. Object.entries(obj) => Returns key-value pairs as arrays
console.log(Object.entries(user)); 
// 👉 [['name', 'Alice'], ['age', 25]]


// 4. Object.fromEntries() => Converts key-value array back to an object
const arr = [['name', 'Bob'], ['age', 30]];
console.log(Object.fromEntries(arr)); // 👉 { name: 'Bob', age: 30 }


// 5. Object.assign(target, ...sources) => Copies properties to target object
const info = { city: 'NY' };
const merged = Object.assign({}, user, info);
console.log(merged); // 👉 { name: 'Alice', age: 25, city: 'NY' }


// 6. Object.hasOwn(obj, prop) => Checks if a property exists (modern version)
console.log(Object.hasOwn(user, 'age')); // 👉 true


// 7. Object.freeze(obj) => Prevents changes to the object (no add/update/delete)
const frozen = Object.freeze({ name: "Charlie" });
frozen.name = "Dave";
console.log(frozen); // 👉 { name: 'Charlie' } (unchanged)


// 8. Object.seal(obj) => Prevents adding/removing properties but allows updates
const sealed = Object.seal({ name: "Eve" });
sealed.name = "Eva";
sealed.age = 25; // can't add
console.log(sealed); // 👉 { name: 'Eva' }


// 9. Object.is(a, b) => Compares two values strictly
console.log(Object.is(25, 25)); // 👉 true
console.log(Object.is(NaN, NaN)); // 👉 true (unlike ===)


// 10. Object.getOwnPropertyNames(obj) => Returns all (including non-enumerable) property names
const obj = Object.create({}, {
  hidden: {
    value: 'secret',
    enumerable: false
  }
});
console.log(Object.getOwnPropertyNames(obj)); // 👉 ['hidden']
