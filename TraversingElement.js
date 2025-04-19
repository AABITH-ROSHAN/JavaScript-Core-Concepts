let parent =document.getElementById("parent")
let list=document.querySelector(".list")
let item2=document.querySelector(".item2")

console.log(parent.parentElement);//only element
console.log(parent.parentNode);

console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log(parent.lastChild);
console.log(parent.children);
console.log(parent.childElementCount);

console.log(item2.previousElementSibling);
console.log(item2.nextSibling);
//......................