const str = "Hello JavaScript Java!";

// ✅ 1. indexOf() — First occurrence index
console.log(str.indexOf("Java")); 
// 👉 6

// ✅ 2. lastIndexOf() — Last occurrence index
console.log(str.lastIndexOf("Java")); 
// 👉 17

// ✅ 3. search() — First match index using RegExp
console.log(str.search(/Script/)); 
// 👉 11

// ✅ 4. match() — Returns array of matches (use 'g' flag for all-it takes not only the first includes the all string)
console.log(str.match(/Java/g)); 
// 👉 ['Java', 'Java']

// ✅ 5. matchAll() — Returns iterator of matches (spread to view)
const matches = str.matchAll(/Java/g);
console.log([...matches]); 
// 👉 [ [ 'Java', index: 6, input: 'Hello JavaScript Java!', groups: undefined ],
//      [ 'Java', index: 17, input: 'Hello JavaScript Java!', groups: undefined ] ]

// ✅ 6. includes() — Check if string contains substring
console.log(str.includes("Java")); 
// 👉 true

// ✅ 7. startsWith() — Check if string starts with value
console.log(str.startsWith("Hello")); 
// 👉 true

// ✅ 8. endsWith() — Check if string ends with value
console.log(str.endsWith("Java!")); 
// 👉 true
