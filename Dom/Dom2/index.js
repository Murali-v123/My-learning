document.querySelector(".Box").innerHTML
document.querySelector(".Box").outerHTML
document.querySelector(".Box").tagName
document.querySelector(".Box").nodeName
document.querySelector(".Box").textContent
document.querySelector(".container").hidden=true
document.querySelector(".box1").hasAttribute("style")
document.querySelector(".box1").getAttribute("style")
document.querySelector(".box1").setAttribute("style","color:blue")
document.querySelector("box1").attributes
document.querySelector(".box1").removeAttribute("style")

document.designMode="on"

let div=document.createElement("div")
div.innerHTML="Hello world"
div.setAttribute("class","created")
document.querySelector(".container").before(div)
document.querySelector(".container").append(div)
document.querySelector(".container").prepend(div)
document.querySelector(".container").after(div)

let cont=document.querySelector(".container")
cont.insertAdjacentElement("beforebegin","<b>hello world</b>")

document.querySelector(".container").classList
document.querySelector(".container").className
document.querySelector(".container").classList.add("harry")
document.querySelector(".container").classList.remove("harry")
document.querySelector(".container").classList.toggle(".box1")

{
    let cont = document.querySelector(".container");
    cont.insertAdjacentHTML("beforebegin", "<b>hello world</b>");
}