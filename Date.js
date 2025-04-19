// ✅ JavaScript Date Formats Examples

// ✅ 1. ISO Date — "YYYY-MM-DD" (International Standard)
const date1 = new Date("2015-03-25");
console.log(date1);  
// 👉 Wed Mar 25 2015 ...

// ✅ 2. Short Date — "MM/DD/YYYY" (US Format)
const date2 = new Date("03/25/2015");
console.log(date2);  
// 👉 Wed Mar 25 2015 ...

// ✅ 3. Long Date — "Mar 25 2015"
const date3 = new Date("Mar 25 2015");
console.log(date3);  
// 👉 Wed Mar 25 2015 ...

// ✅ 4. Long Date — "25 Mar 2015"
const date4 = new Date("25 Mar 2015");
console.log(date4);  
// 👉 Wed Mar 25 2015 ...


// Get Methods

// ✅ 1. getFullYear() — Get year as a four-digit number (yyyy)
console.log(date1.getFullYear());  // 👉 2015

// ✅ 2. getMonth() — Get month as a number (0-11)
console.log(date1.getMonth());  // 👉 2 (March, since month starts from 0)

// ✅ 3. getDate() — Get day of the month as a number (1-31)
console.log(date1.getDate());  // 👉 25

// ✅ 4. getDay() — Get weekday as a number (0-6)
console.log(date1.getDay());  // 👉 3 (Wednesday)

// ✅ 5. getHours() — Get hour (0-23)
console.log(date1.getHours());  // 👉 0

// ✅ 6. getMinutes() — Get minutes (0-59)
console.log(date1.getMinutes());  // 👉 0

// ✅ 7. getSeconds() — Get seconds (0-59)
console.log(date1.getSeconds());  // 👉 0

// ✅ 8. getMilliseconds() — Get milliseconds (0-999)
console.log(date1.getMilliseconds());  // 👉 0

// ✅ 9. getTime() — Get time (milliseconds since January 1, 1970)
console.log(date1.getTime());  // 👉 1427241600000


// Set Methods

// ✅ 1. setDate() — Set the day of the month as a number (1-31)
date1.setDate(15);
console.log(date1);  // 👉 Sat Mar 15 2015 ...

// ✅ 2. setFullYear() — Set the year (yyyy)
date1.setFullYear(2020);
console.log(date1);  // 👉 Mon Mar 15 2020 ...

// ✅ 3. setHours() — Set the hour (0-23)
date1.setHours(10);
console.log(date1);  // 👉 Mon Mar 15 2020 10:00:00 ...

// ✅ 4. setMilliseconds() — Set the milliseconds (0-999)
date1.setMilliseconds(500);
console.log(date1);  // 👉 Mon Mar 15 2020 10:00:00.500 ...

// ✅ 5. setMinutes() — Set the minutes (0-59)
date1.setMinutes(45);
console.log(date1);  // 👉 Mon Mar 15 2020 10:45:00.500 ...

// ✅ 6. setMonth() — Set the month (0-11)
date1.setMonth(8); // September
console.log(date1);  // 👉 Tue Sep 15 2020 10:45:00.500 ...

// ✅ 7. setSeconds() — Set the seconds (0-59)
date1.setSeconds(30);
console.log(date1);  // 👉 Tue Sep 15 2020 10:45:30.500 ...

// ✅ 8. setTime() — Set the time (milliseconds since January 1, 1970)
date1.setTime(1609459200000); // January 1, 2021
console.log(date1);  // 👉 Fri Jan 01 2021 00:00:00 ...
