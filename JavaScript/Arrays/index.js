let arr=[1,2,3,4,5,6,7,8,9]

let arr1=[11,12,13,14,15,16]

console.log(arr.concat(arr1));

console.log(arr.pop());
console.log(arr.push(100));
console.log(arr.join("-"));
console.log(arr.shift());
console.log(arr.unshift("Hello"));
console.log(arr.toString());
 
const arr3 = Array.of(1, 2, 3, 4, 5, 6, 7, 898);
console.log(arr3); 

let arr4=Array.from("hello")
console.log(arr4);


newarr=arr.map((e)=>{
    return e**2
})
console.log(newarr)


a=[1,2,3,34,5,6]

ab=a.filter(e=>{
    if(e>2) return true
    return false
})
console.log(ab)

ar=a.reduce((a,b)=>{
    return a+b
})
console.log(ar);
