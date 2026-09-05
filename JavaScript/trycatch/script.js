a=prompt("Enter A NUmber:")
b=prompt("Enter B NUmber:")


// if(isNaN(a) || isNaN(b)){
//     throw new Error("hey bhai bus number Input do"); 
//     }
// let sum=parseInt(a)+parseInt(b)
// console.log("Sum is: "+sum)

try {
    if(isNaN(a) || isNaN(b)){
    throw new Error("Invalid Input"); 
    }
    sum=parseInt(a)+parseInt(b)
    alert("Sum is: "+sum)
}
catch (error) {
    alert("For addition only numbers are allowed") 
}
finally{
    alert("Hey Bhaai")
}
 