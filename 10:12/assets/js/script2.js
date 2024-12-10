//ES 2

const timer = document.getElementById('timer');
let counter = 0;

setInterval(() => {
    counter ++;
    timer.innerText = `${counter}`;
    sessionStorage.setItem("counter", counter);
}, 1000);