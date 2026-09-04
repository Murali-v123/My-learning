// async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Hey Bhai Wassup")
//         }, 300);
//     })
// }

// async function main() {
//     console.log("Hey Bhaii");
//     let data = await getData()
//     console.log(data);
// }

// main()

// // console.log("hello bhai");
// // let data = getData()
// // console.log(data);

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hey Bhai Wassup");
//         }, 300);
//     });
// }

async function getData() {
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // let data  = await x.json()
  let x =await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.text();
  console.log(data);
}

async function main() {
  console.log("hello bhai");

  let data = await getData(); // Waits 300ms for the promise to resolve
  // let data = without await getdata(); it will not wait for the promise to resolve nd returns pending promise
  // console.log(data);          // Prints: "Hey Bhai Wassup"
}

main();



