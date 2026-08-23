console.log("Hello world")
document.querySelector("div")
// <div class=​"container">​…​</div>​
document.querySelector(".box")
// {/* <div class=​box>​box1​</div> */}
document.querySelectorAll(".box")
// NodeList(5) [div.box, div.box, div.box, div.box, div.box]
document.querySelectorAll(".box")[0].style.backgroundColor="red"

// idselector
document.getElementById("box3").style.color="red"

// class selector
// document.getElementsByClassName("box2")[0].style.backgroundColor="yellow"
document.querySelector(".box2").style.backgroundColor = "yellow";


document.getElementsByTagName("div")[3].style.backgroundColor="orange"