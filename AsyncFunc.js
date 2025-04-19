// Creating a new Promise
let getpromise = new Promise((res, rej) => {
    let getpizza = false;

    if (getpizza) {
        setTimeout(() => {
            res("Pizza Received 🍕");
        }, 2000);
    } else {
        setTimeout(() => {
            rej("Pizza not received ❌");
        }, 2000);
    }
});


async function func() {
    try {
        let a = await getpromise; // waits until Promise resolves/rejects
        console.log(a);         
        console.log("Done");
    } catch (error) {
        console.log(error);       // logs if rejected
    } finally {
        console.log("End");       // always runs
    }
}

func();
