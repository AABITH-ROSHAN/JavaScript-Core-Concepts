let arr=[1,2,3,4,5,7]

let [fst,sec,,fourth]=arr

console.log(fst,sec,fourth)



let[,,...rest]=arr

console.log(rest)


let obj={
    name:"Don",
    dept:"MECH",
    detail:{
        hobby:"Tennis"
    }
}

let {name,dept,detail:{hobby}}=obj

console.log(name,dept,hobby)