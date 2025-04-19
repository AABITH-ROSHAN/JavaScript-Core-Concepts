
function closure(){
    var count=0;

    return function(){
        count++;
        return count;
    }
}

let res=closure();

console.log(res())

console.log(res())

console.log(res())

console.log(res())