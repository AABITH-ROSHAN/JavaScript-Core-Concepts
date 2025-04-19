let button =document.getElementById("btn");


button.addEventListener("click",()=>{
    console.log("first Listener");
})

button.addEventListener("click",()=>{
    console.log("Second listener")
})

button.onclick=()=>{
    console.log("First Handler")
}

button.onclick=()=>{
    console.log("Second Handler")
}