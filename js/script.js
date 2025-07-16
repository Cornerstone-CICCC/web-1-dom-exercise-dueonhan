// YOUR CODE HERE
// No 1
const btn1 = document.querySelector("#btn1");
const output1 = document.querySelector("#output1");

btn1.addEventListener('click', () => {
    output1.style.color = "red";
})

// No 2
const btn2 = document.querySelector("#btn2");
const output2 = document.querySelector("#output2");

btn2.addEventListener('click', () => {
    output2.innerHTML += "<span>Hello World</span>";
})


// No 3

const btn3 = document.querySelector("#btn3");
const output3 = document.querySelector(".small-text");

btn3.addEventListener('click', () => {
    output3.classList.remove("small-text")
})


// No 4

const btn4 = document.querySelector("#btn4");
const output4 = document.querySelector("#output4");

btn4.addEventListener('click', () => {
    const siblings = output4.querySelectorAll('p');
    siblings[0].style.backgroundColor = "red";
    siblings[1].style.backgroundColor = "red";
})


// No 5

const btn5 = document.querySelector("#btn5");

btn5.addEventListener('click', () => {
    const messageVal = document.querySelector("#message").value;
    console.log(messageVal);
})