console.log("Radhe Radhe");

let time = document.querySelector(".time");
let date = document.querySelector(".date");
let day = document.querySelector(".day");

function updateClock() {
    let d = new Date(); 
     // so that everytime the d as a date object create so the interval will work 

    time.innerHTML = d.toLocaleTimeString();
    // date.innerHTML = d.toLocaleDateString();

    date.innerHTML = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} `;

    day.innerHTML = d.toLocaleString('en-US', { weekday: 'long'});
};

setInterval(updateClock, 1000);
updateClock();              // function call




