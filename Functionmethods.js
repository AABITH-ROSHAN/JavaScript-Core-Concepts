

const obj={
    name:"Nalan",
    dept:"EEE"
}

const obj1={
    name:"Kesavan",
    dept:"CSE",
     details: function(a,b){
        console.log("Name:"+this.name,"Dept:"+this.dept)
        return a+b;
    }
}

obj1.details.call(obj,10,20)

obj1.details.apply(obj,[1,2])

const res=obj1.details.bind(obj,10,20)

console.log(res());