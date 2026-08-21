alert("Hello world");

let a = prompt("Enter a number:");

if (confirm("Do you want to paste the number on your webpage?")) {
    document.body.innerText = "Your number is: " + a;
} else {
    alert("Action canceled.");
}
