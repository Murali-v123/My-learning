console.log("This is promise js");

let prom1=new Promise((reslove,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("This is not your type 1")
    }
    else{
        
        setTimeout(() => {
            console.log("Hello murali bhai 1");
            // reject("Hello bhaiit was rejected")
            reslove("Hello bhai 1")
        }, 1);
    }
})

let prom2=new Promise((reslove,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("This is not your type 2")
    }
    else{
        setTimeout(() => {
            console.log("Hello murali bhai 2");
            // reject("Hello bhaiit was rejected")
            reslove("Hello bhai 2")
        }, 1);
    }
})

// let p3=Promise.all([prom1,prom2])
// let p3=Promise.allSettled([prom1,prom2])
// let p3=Promise.race([prom1,prom2])
let p3=Promise.any([prom1,prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})