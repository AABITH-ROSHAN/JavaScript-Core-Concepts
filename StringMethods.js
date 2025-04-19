const str = " Hello World! ";
const msg = "javascript is fun";

// 🔢 1️⃣ length — returns length
console.log(str.length); 
// 👉 14

// 🔤 2️⃣ charAt(index) — char at index
console.log(str.charAt(1)); 
// 👉 'H'

// 🔣 3️⃣ charCodeAt(index) — UTF-16 code
console.log(str.charCodeAt(1)); 
// 👉 72

// 🆕 4️⃣ at(index) — like charAt(), supports negative index
console.log(str.at(-2)); 
// 👉 'd'

// 🔠 5️⃣ str[index] — same as charAt(index)
console.log(str[1]); 
// 👉 'H'

// ✂️ 6️⃣ slice(start, end) — extract part (supports negative index)
console.log(str.slice(1, 6)); 
// 👉 'Hello'

// ✂️ 7️⃣ substring(start, end) — like slice but no negative index ,start less than end otherwise it takes reverse
console.log(str.substring(1, 6)); 
// 👉 'Hello'

// ✂️ 8️⃣ substr(start, length) — deprecated but works
console.log(str.substr(1, 5)); 
// 👉 'Hello'

// 🔠 9️⃣ toUpperCase() — convert to upper
console.log(msg.toUpperCase()); 
// 👉 'JAVASCRIPT IS FUN'

// 🔡 🔟 toLowerCase() — convert to lower
console.log(msg.toLowerCase()); 
// 👉 'javascript is fun'

// 🔗 1️⃣1️⃣ concat() — join strings
console.log("JS ".concat("Rocks!")); 
// 👉 'JS Rocks!'

// ✂️ 1️⃣2️⃣ trim() — remove leading & trailing spaces
console.log(str.trim()); 
// 👉 'Hello World!'

// 🔙 1️⃣3️⃣ trimStart() — remove starting spaces
console.log(str.trimStart()); 
// 👉 'Hello World! '

// 🔚 1️⃣4️⃣ trimEnd() — remove trailing spaces
console.log(str.trimEnd()); 
// 👉 ' Hello World!'

// 🧩 1️⃣5️⃣ padStart(targetLength, padText) — add chars at start
console.log("5".padStart(4, "0")); 
// 👉 '0005'

// 🧩 1️⃣6️⃣ padEnd(targetLength, padText) — add chars at end
console.log("5".padEnd(4, "0")); 
// 👉 '5000'

// 🔁 1️⃣7️⃣ repeat(n) — repeats string n times
console.log("Hi ".repeat(3)); 
// 👉 'Hi Hi Hi '

// 🔁 1️⃣8️⃣ replace(search, replaceWith) — replace first match
console.log(msg.replace("is", "was")); 
// 👉 'javascript was fun'

// 🔁 1️⃣9️⃣ replaceAll(search, replaceWith) — replace all matches
console.log("a-a-a".replaceAll("a", "b")); 
// 👉 'b-b-b'

// 🪓 2️⃣0️⃣ split(separator) — convert string to array
console.log(msg.split(" ")); 
// 👉 ['javascript', 'is', 'fun']
