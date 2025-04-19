let parent =document.getElementById("parent")
let list=document.querySelector(".list")
let item2=document.getElementsByClassName("item2")
//Use Mostly QuerySelector


let input="item-4"
let li=document.createElement("li");
li.innerText=input
list.appendChild(li)


let para=document.createElement("p");
para.innerText="Hllo EveryOne"
parent.append(para)
