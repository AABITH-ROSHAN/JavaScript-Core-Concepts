async function getdata() {

    let data=await fetch("https://jsonplaceholder.typicode.com/users")

    let json=await data.json();

    console.log(json)
    
}
getdata();



async function putdata(){

    let data=await fetch("https://jsonplaceholder.typicode.com/users/1",{

    method:'put',

    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"Aadhi"
    })
    })
    let json=await data.json();

    console.log(json)

}
putdata();