

//shallow copy


//obj
let obj={
    name:"Raju",
    dept:"EEE",
    detail:{
        hobby:"Football"
    }
}

let obj2={...obj};

obj2.name="Kathir";

console.log(obj,obj2)

//arr

const arr1=[1,2,3,4,5];

arr2=[...arr1];

arr2[0]=11

console.log(arr1,arr2);


//Deep copy

//obj

let obj3={
    name:"Raju",
    dept:"EEE",
    detail:{
        hobby:"Football"
    }
}

let obj4=JSON.parse(JSON.stringify(obj3))

obj4.detail.hobby="Cricket"

console.log(obj3,obj4)

//arr
arr3=[1,2,3,[4,5,[6,7],8],9];

arr4=JSON.parse(JSON.stringify(arr3));

arr4[3][0]=44

console.log(arr3,arr4)