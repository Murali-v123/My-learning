console.log("This is promise js");

let prom1=new Promise((reslove,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("This is not your type")
    }
    else{
        
        setTimeout(() => {
            console.log("Hello murali bhai");
            // reject("Hello bhaiit was rejected")
            reslove("Hello bhai")
        }, 1);
    }
})

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})