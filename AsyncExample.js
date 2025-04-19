let getpromise=new Promise((res,rej)=>{

    let ring=false;

    if(ring){
        setTimeout(()=>{
            res("Yes it Ring")
        },3000)
    }
    else{
        setTimeout(()=>{
            rej("No it did'nt Ring")
        },3000)
        
    }
})

async function func() {
    try{
        let get =await getpromise;

        console.log(get)

    }
    catch(error){
        console.log(error.message);
    }
    finally{
        console.log("Done")
    }
    
}
func();