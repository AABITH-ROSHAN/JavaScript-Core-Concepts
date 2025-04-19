function curried(a){

    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

let res=curried(10)(20)(30)
console.log(res)