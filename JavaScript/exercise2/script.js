function createCard(title,cName,views,monthsOld,duration,thumbNail) {
    let viewstr

    if(views<1000){
        viewstr=views
    }
    else if(views<1000000){
        viewstr=views/1000+"k"
    }
    else{
        viewstr=views/1000000+"M"
    }
    let html=`
     <div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbNail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} .${viewstr}Views .${monthsOld} months ago</p>
            </div>
        </div>
    </div>`

document.querySelector(".container").innerHTML+=html
}

createCard("Hello Bhai","Murali",500000,3,"15:30","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd1Im5E9tSz6ITdT2uzgykTDWwiyqqyakgj87P5IZYniWucfwIbhRhK4&s=10")