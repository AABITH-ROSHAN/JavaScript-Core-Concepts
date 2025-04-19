// Step 1: Create a new Promise
let getpromise = new Promise((resolve, reject) => {//callback Functions

    let mesageReceived = true; // condition to check

    // Step 2: If the condition is true, resolve the promise
    if (mesageReceived) {
        resolve("Message Received"); // success case
    } else {
        reject("Not received"); // failure case
    }
});

// Step 3: Handle the resolved value (success)
getpromise.then((msg) => {
    console.log(msg); // Output: Message Received
})

// Step 4: Handle the rejected value (failure)
.catch((error) => {
    console.log(error); // Output: Not received (only if condition was false)
});
