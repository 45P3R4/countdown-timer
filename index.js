let timerDays;
let timerHours;
let timerMinutes;
let timerSeconds;

let now = new Date();

let countTo = new Date("2024-01-01");

let countdown = new Date(countTo - now);
countTo.setFullYear(now.getFullYear() + 1);

window.onload = init;
window.setInterval(update, 100);

function init() {
    timerDays = document.getElementById("timer-days");
    timerHours = document.getElementById("timer-hours");
    timerMinutes = document.getElementById("timer-minutes");
    timerSeconds = document.getElementById("timer-seconds");
}

function update() {
    now = new Date();
    countdown = new Date(countTo - now);
    timerDays.textContent = (countdown.getDate() < 10 ? '0' : '') + countdown.getDate();
    timerHours.textContent = (countdown.getHours() < 10 ? '0' : '') + countdown.getHours();
    timerMinutes.textContent = (countdown.getMinutes() < 10 ? '0' : '') + countdown.getMinutes();
    timerSeconds.textContent = (countdown.getSeconds() < 10 ? '0' : '') + countdown.getSeconds();
}