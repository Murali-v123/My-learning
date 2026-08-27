console.log("Hello world")
// alert("Hello world")

let box=document.querySelectorAll(".box")
function generateRandomcolor() {
    let val1=Math.ceil(0+Math.random()*235)
    let val2=Math.ceil(0+Math.random()*235)
    let val3=Math.ceil(0+Math.random()*235)
    return `rgb(${val1},${val2},${val3})`
}

Array.from(box).forEach(e=>{
    e.style.backgroundColor=generateRandomcolor()
    e.style.color=generateRandomcolor();
})