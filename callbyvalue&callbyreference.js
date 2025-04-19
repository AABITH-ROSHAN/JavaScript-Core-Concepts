    
    //call by value
    let a=10;

    let b=a;

    a=20;
    console.log(a,b)


    //call by reference

    let obj={
        name:"Raju",
        dept:"EEE"
    }

    let obj2={...obj};

    obj2.name="Kathir";

    console.log(obj,obj2)