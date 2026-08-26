let button=document.querySelector(".btn")
// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>Hey there i have changed you</b>"
// })
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>Hey there i have changed you with double click</b>"
})

document.addEventListener("contextmenu",()=>{
    document.querySelector(".box").innerHTML="<b>Hey there i have changed you</b>"
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.code)
})