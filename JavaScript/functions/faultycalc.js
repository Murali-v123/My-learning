function add(n1,n2) {
    return (n1+n2)
}

function sub(n1,n2) {
    return (n1-n2)
}
function mul(n1,n2) {
    return (n1*n2)
}
function div(n1,n2) {
    return (n1/n2)
}

let a=Number(prompt("Enter A number: "))
let b=Number(prompt("Enter B number: "))

if(Math.random()<0.1){
    console.log("Sum of the numbers are:" + sub(a,b))
    console.log("sub of the numbers are:" + mul(a,b))
    console.log("mul of the numbers are:" + div(a,b))
    console.log("div of the numbers are:" + add(a,b))
}
else{
     console.log("Sum of the numbers are:" + add(a,b))
    console.log("sub of the numbers are:" + sub(a,b))
    console.log("mul of the numbers are:" + mul(a,b))
    console.log("div of the numbers are:" + div(a,b))
}