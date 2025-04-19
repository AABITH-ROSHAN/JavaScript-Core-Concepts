//get
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>console.log(data))

//put
fetch('https://jsonplaceholder.typicode.com/users/5',{
    method:'put',

    headers:{
        'Content-Type':'application/JSON'
        },
    body:JSON.stringify({
        name:"Aadhi"
    })

    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))

//delete
fetch('https://jsonplaceholder.typicode.com/users/5',{
    method:'delete'
})
.then((res)=>res.json())
     .then((data)=>console.log(data))