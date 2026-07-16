const handHr = document.querySelector(".h");
const handMn = document.querySelector(".m");
const second = document.querySelector(".s");

function displayClock() {
    let d = new Date();
    let angleHr = d.getHours() % 12 * 30 + d.getMinutes() * 0.5 - 90;
    let angleMn = d.getMinutes() * 6 - 90;
    let angleSc = d.getSeconds() * 6 + d.getMilliseconds() * 6 / 1000 - 180;

    console.log(`angle is: ${angleSc}`);
    handHr.style.transform = `rotate(${angleHr}deg)`;
    handMn.style.transform = `rotate(${angleMn}deg)`;

    second.style.transform = `rotate(${angleSc}deg)`;
}
//radial-gradient(green 0%, transparent)

setInterval(displayClock, 1);