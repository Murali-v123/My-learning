console.log("Bussiness Name Choosing challenge");

const adjectives={
    1:"Crazy" ,
    2:"Amazing",
    3:"fire"
}

const shopname={
    4:" Engine" ,
    5:" food",
    6:" garment"
}

const lastword={
    7:" Bros" ,
    8:" Limited",
    9:" hub"
}

function randomnumbergenrator(num1,num2) {
    return Math.floor(Math.random()*(num2-num1)+num1)
}

let random1=randomnumbergenrator(1,4)
let random2=randomnumbergenrator(4,7)
let random3=randomnumbergenrator(7,10)

let businessName=adjectives[random1] +shopname[random2] +lastword[random3]

console.log(businessName);
