console.log("All about loops")

// for loops
var a=0
for (let i = 0; i <= 10; i++) {
    console.log([a+i]);
}

// while loop
var i=0
while(i<=10){
    console.log(i)
    i++
}

// do while
var b=10
do{
    console.log(b)
    b++
}
while(b<5)

// for in loop
let obj = { name: "Alice", age: 25, role: "Admin" }
for (const key in obj) {  
    const element = obj[key];
    console.log(key,element)
    console.log(element)
}

// for of loop
for (const c of "murali v") {
    console.log(c)
}

// for each loop
var color=["red","yellow"]
color.forEach(element => {
    console.log(element)
});
