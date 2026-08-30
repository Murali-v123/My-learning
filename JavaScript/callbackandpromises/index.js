// 1. Asynchronous execution demonstration
// alert("hello")
console.log("sentence 1");
console.log("sentence 2");

setTimeout(() => {
    console.log("Under timeout function");
}, 2000);


const fn = () => { 
    console.log("hello world");
}
const callback = (arg,fn) =>{
    console.log(arg);
    fn()
}

const loadscript = (src,callback) =>{
    let sc=document.createElement("script")
    sc.src=src
    // sc.onload=callback("hello") or
    sc.onload=()=>callback("sucessful",fn) 
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)