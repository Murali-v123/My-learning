console.log("All About Functions")

function add(n1,n2) {
    return n1+n2;
}

console.log(add(1,2))

const fun=()=>{
    console.log("Hello World")
}
fun()

const add1 = (n1,n2) => {
    console.log(n1+n2)
}
add1(3,4) 

function add2(n1,n2,n3=5) {
    return n1+n2+n3;
}

console.log(add2(1,2,45))