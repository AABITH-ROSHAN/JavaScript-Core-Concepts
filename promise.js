let getpromise=new Promise((res,rej)=>{

    let ring=true;

    if(ring){
        res("Yes it Ring")
    }
    else{
        rej("No it did'nt Ring")
    }
})

getpromise.then((ring)=>{
    console.log(ring)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("End")
})