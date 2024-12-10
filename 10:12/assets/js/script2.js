//ES 2

let counter = parseInt(sessionStorage.getItem('counter')) || 0;
const timer = document.getElementById('timer');


setInterval(() => {
    counter ++;
    timer.innerText = `${counter}`;
    sessionStorage.setItem("counter", counter);
}, 1000);