
//callback

function goodMorning(callback){
    setTimeout(()=>{
        console.log("good Morning")
        callback();
    },2000)
}

function goodNight(){
    console.log("good Night")
    
}


goodMorning(goodNight);


//callback using return 

function sum(callback,x,y){
    
    setTimeout(()=>{
        console.log(x+y);
        callback(x,y);
    },3000)

    
}

function mul(x,y){
    console.log(x*y);
}

sum(mul,10,20);

