function* generator(){
    yield 1;
    yield 2;
    yield 3;
}
let res=generator()

//console.log(res.next())

for(const val of res){
    console.log(val)
}