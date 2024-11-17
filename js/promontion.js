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

let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let hour1 = document.getElementById('hour1');
let hour2 = document.getElementById('hour2');
let minute1 = document.getElementById('minute1');
let minute2 = document.getElementById('minute2');
let second1 = document.getElementById('second1');
let second2 = document.getElementById('second2');

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

let images = document.querySelectorAll('.carousel-item');
let currentIndex = 0;


function showNextImage() {
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');

    let oldIndex = currentIndex;
    setTimeout(() => {
        images[oldIndex].classList.add('hidden');
    }, 500);

    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
        images[currentIndex].classList.remove('hidden');
        setTimeout(() => {
            images[currentIndex].classList.add('opacity-100');
            images[currentIndex].classList.remove('opacity-0');
        }, 10);
    }, 500);

}

setInterval(showNextImage, 2000);

function addtoLocaleStorage(event) {
    let localStorageTable = JSON.parse(localStorage.getItem('cart')) || [];
    let element = event.target.parentElement;
    let isExist = false;

    let data = {
        title: element.querySelector('.title').textContent,
        priceUnit: element.querySelector('.price').textContent,
        price: element.querySelector('.price').textContent,
        img: element.querySelector('img').getAttribute('src'),
        quantity: 1,
    }


    localStorageTable.forEach((obj) => {
        if(obj.title == data.title) {
            obj.quantity += 1;
            obj.price = parseFloat(obj.priceUnit * obj.quantity).toFixed(2);
            isExist = true;
        }
    });

    if(!isExist) {
        localStorageTable.push(data);
    }

    localStorage.setItem("cart" , JSON.stringify(localStorageTable));
}

document.querySelector('.products').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.products2').addEventListener('click', (event) => addtoLocaleStorage(event));