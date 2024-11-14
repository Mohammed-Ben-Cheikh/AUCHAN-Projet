// btn slaider 1 to promontion
let btn_page1=document.querySelector(".btnPAGE1");
// btn slaider 2 to promontion
let btn_page2=document.querySelector(".btnPAGE2");

btn_page2.onclick=function(){
    document.querySelector('.page1-promontion').classList.add('hidden');
    document.querySelector('.page2-promontion').classList.remove('hidden');
}
btn_page1.onclick=function(){
    document.querySelector('.page1-promontion').classList.remove('hidden');
    document.querySelector('.page2-promontion').classList.add('hidden');
}

let timeLeft = 60000;

const day1 = document.getElementById('day1');
const day2 = document.getElementById('day2');
const hour1 = document.getElementById('hour1');
const hour2 = document.getElementById('hour2');
const minute1 = document.getElementById('minute1');
const minute2 = document.getElementById('minute2');
const second1 = document.getElementById('second1');
const second2 = document.getElementById('second2');

const timerInterval = setInterval(() => {
    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft % 86400) / 3600); 
    let minutes = Math.floor((timeLeft % 3600) / 60); 
    let seconds = timeLeft % 60;


    if (days < 10) {
        day1.textContent = Math.floor(days / 10);
        day2.textContent = days % 10;
    } else {
        day1.textContent = Math.floor(days / 10);
        day2.textContent = days % 10;
    }


    if (hours < 10) {
        hour1.textContent = Math.floor(hours / 10);
        hour2.textContent = hours % 10;
    } else {
        hour1.textContent = Math.floor(hours / 10);
        hour2.textContent = hours % 10;
    }

    
    if (minutes < 10) {
        minute1.textContent = Math.floor(minutes / 10);
        minute2.textContent = minutes % 10;
    } else {
        minute1.textContent = Math.floor(minutes / 10);
        minute2.textContent = minutes % 10;
    }


    if (seconds < 10) {
        second1.textContent = Math.floor(seconds / 10);
        second2.textContent = seconds % 10;
    } else {
        second1.textContent = Math.floor(seconds / 10);
        second2.textContent = seconds % 10;
    }


    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval); 
    }
}, 1000);


let days = Math.floor(timeLeft / 86400);
let hours = Math.floor((timeLeft % 86400) / 3600);
let minutes = Math.floor((timeLeft % 3600) / 60);
let seconds = timeLeft % 60;

if (days < 10) {
    day1.textContent = Math.floor(days / 10);
    day2.textContent = days % 10;
} else {
    day1.textContent = Math.floor(days / 10);
    day2.textContent = days % 10;
}

if (hours < 10) {
    hour1.textContent = Math.floor(hours / 10);
    hour2.textContent = hours % 10;
} else {
    hour1.textContent = Math.floor(hours / 10);
    hour2.textContent = hours % 10;
}

if (minutes < 10) {
    minute1.textContent = Math.floor(minutes / 10);
    minute2.textContent = minutes % 10;
} else {
    minute1.textContent = Math.floor(minutes / 10);
    minute2.textContent = minutes % 10;
}

if (seconds < 10) {
    second1.textContent = Math.floor(seconds / 10);
    second2.textContent = seconds % 10;
} else {
    second1.textContent = Math.floor(seconds / 10);
    second2.textContent = seconds % 10;
}
