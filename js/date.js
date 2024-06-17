let now = new Date();
let firstDay = new Date("2024-03-28");

let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
passedTime = Math.floor(passedTime/(1000*60*60*24));

console.log(passedTime);
document.querySelector("#result").innerText = passedTime;

document.querySelector("#startDay").innerText = firstDay.toLocaleString();
document.querySelector("#currentDay").innerText = now.toLocaleString();

function startDay() {
    startDay = document.querySelector("#start").ariaValueMax;
    return startDays;
}
console.log(startDay)