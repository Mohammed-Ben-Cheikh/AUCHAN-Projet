
let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let item1=document.querySelector(".item1");
let item2=document.querySelector(".item2");
let item3=document.querySelector(".item3");

btn1.addEventListener("click",function(){

item1.style.display="block";
item2.style.display="none";
item3.style.display="none";


});
btn2.addEventListener("click",function(){

    item1.style.display="none";
    item2.style.display="block";
    item3.style.display="none";
    
    
    });
    btn3.addEventListener("click",function(){

        item1.style.display="none";
        item2.style.display="none";
        item3.style.display="block";
        
        
        });

// la fonctionnalité des boutons pour les categories de mobile 


let vegetables=document.querySelector(".vegetables");
let milkdairy=document.querySelector(".milk-dairy");
let meat=document.querySelector(".meat");
let fruits=document.querySelector(".fruits");
let electromenage=document.querySelector(".electromenage");
let menage=document.querySelector(".menage");
let vegetablescontainer=document.querySelector(".cards-container1");
let milkcontainer=document.querySelector(".cards-container2");
let meatcontainer=document.querySelector(".cards-container3");
let fruitcontainer=document.querySelector(".cards-container4");
let electromenagecontainer=document.querySelector(".cards-container5");
let menagecontainer=document.querySelector(".cards-container6");




vegetables.addEventListener("click",function(){

    vegetablescontainer.style.display="flex";
    milkcontainer.style.display='none';
    meatcontainer.style.display="none";
    fruitcontainer.style.display="none";
    electromenagecontainer.style.display="none";
    menagecontainer.style.display="none";

});

milkdairy.addEventListener("click",function(){

    vegetablescontainer.style.display="none";
    milkcontainer.style.display='flex';
    meatcontainer.style.display="none";
    fruitcontainer.style.display="none";
    electromenagecontainer.style.display="none";
    menagecontainer.style.display="none";

});
meat.addEventListener("click",function(){

    vegetablescontainer.style.display="none";
    milkcontainer.style.display='none';
    meatcontainer.style.display="flex";
    fruitcontainer.style.display="none";
    electromenagecontainer.style.display="none";
    menagecontainer.style.display="none";

});
fruits.addEventListener("click",function(){

    vegetablescontainer.style.display="none";
    milkcontainer.style.display='none';
    meatcontainer.style.display="none";
    fruitcontainer.style.display="flex";
    electromenagecontainer.style.display="none";
    menagecontainer.style.display="none";

});
electromenage.addEventListener("click",function(){

    vegetablescontainer.style.display="none";
    milkcontainer.style.display='none';
    meatcontainer.style.display="none";
    fruitcontainer.style.display="none";
    electromenagecontainer.style.display="flex";
    menagecontainer.style.display="none";

});
menage.addEventListener("click",function(){

    vegetablescontainer.style.display="none";
    milkcontainer.style.display='none';
    meatcontainer.style.display="none";
    fruitcontainer.style.display="none";
    electromenagecontainer.style.display="none";
    menagecontainer.style.display="flex";

});


// la fonctionnalité des categories des best sellers pour le desktop

let vegetablescontainer1=document.querySelector(".cards-container11");
let milkcontainer1=document.querySelector(".cards-container22");
let meatcontainer1=document.querySelector(".cards-container33");
let fruitcontainer1=document.querySelector(".cards-container44");
let electromenagecontainer1=document.querySelector(".cards-container55");
let menagecontainer1=document.querySelector(".cards-container66");
// Get the select element
let categorySelect = document.querySelector("#categorySelect");

// Add an event listener for the "change" event
categorySelect.addEventListener("change", function() {
  let selectedValue = categorySelect.value; // Get the selected value

  // Hide all containers by default
  vegetablescontainer1.style.display = 'none';
  milkcontainer1.style.display = 'none';
  meatcontainer1.style.display = 'none';
  fruitcontainer1.style.display = 'none';
  electromenagecontainer1.style.display = 'none';
  menagecontainer1.style.display = 'none';

  // Show the selected container based on the value
  if (selectedValue === "vegetables") {
    vegetablescontainer1.style.display = "block";
  } else if (selectedValue === "milk-dairy") {
    milkcontainer1.style.display = 'flex';
  } else if (selectedValue === "meat") {
    meatcontainer1.style.display = "flex";
  } else if (selectedValue === "fruits") {
    fruitcontainer1.style.display = "flex";
  } else if (selectedValue === "electromenage") {
    electromenagecontainer1.style.display = "flex";
  } else if (selectedValue === "menage") {
    menagecontainer1.style.display = "flex";
  }
});


// let vegetables1=document.querySelector(".vegetables1");
// let milkdairy1=document.querySelector(".milk-dairy1");
// let meat1=document.querySelector(".meat1");
// let fruits1=document.querySelector(".fruits1");
// let electromenage1=document.querySelector(".electromenage1");
// let menage1=document.querySelector(".menage1");
// let vegetablescontainer1=document.querySelector(".cards-container11");
// let milkcontainer1=document.querySelector(".cards-container22");
// let meatcontainer1=document.querySelector(".cards-container33");
// let fruitcontainer1=document.querySelector(".cards-container44");
// let electromenagecontainer1=document.querySelector(".cards-container55");
// let menagecontainer1=document.querySelector(".cards-container66");
// console.log(milkdairy1);
// vegetables1.addEventListener("click",function(){

//     vegetablescontainer1.style.display="block";
//     milkcontainer1.style.display='none';
//     meatcontainer1.style.display="none";
//     fruitcontainer1.style.display="none";
//     electromenagecontainer1.style.display="none";
//     menagecontainer1.style.display="none";

// });

// milkdairy1.addEventListener("click",function(){
//     console.log("hello")
//     vegetablescontainer1.style.display="none";
//     milkcontainer1.style.display='flex';
//     meatcontainer1.style.display="none";
//     fruitcontainer1.style.display="none";
//     electromenagecontainer1.style.display="none";
//     menagecontainer1.style.display="none";

// });
// meat1.addEventListener("click",function(){

//     vegetablescontainer1.style.display="none";
//     milkcontainer1.style.display='none';
//     meatcontainer1.style.display="flex";
//     fruitcontainer1.style.display="none";
//     electromenagecontainer1.style.display="none";
//     menagecontainer1.style.display="none";

// });
// fruits1.addEventListener("click",function(){

//     vegetablescontainer1.style.display="none";
//     milkcontainer1.style.display='none';
//     meatcontainer1.style.display="none";
//     fruitcontainer1.style.display="flex";
//     electromenagecontainer1.style.display="none";
//     menagecontainer1.style.display="none";

// });
// electromenage1.addEventListener("click",function(){

//     vegetablescontainer1.style.display="none";
//     milkcontainer1.style.display='none';
//     meatcontainer1.style.display="none";
//     fruitcontainer1.style.display="none";
//     electromenagecontainer1.style.display="flex";
//     menagecontainer1.style.display="none";

// });
// menage1.addEventListener("click",function(){

//     vegetablescontainer1.style.display="none";
//     milkcontainer1.style.display='none';
//     meatcontainer1.style.display="none";
//     fruitcontainer1.style.display="none";
//     electromenagecontainer1.style.display="none";
//     menagecontainer1.style.display="flex";

// });
  
// la fonctionnalité des best sellers pour le mobile 

function addtoLocaleStorage(event) {
    let localStorageTable = JSON.parse(localStorage.getItem('cart')) || [];
    let element = event.target.parentElement;
    let isExist = false;
    console.log(element);
    console.log(element.querySelector('h4').textContent);

    let data = {
        title: element.querySelector('h4').textContent,
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

document.querySelector('.cards-container1').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container2').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container3').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container4').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container5').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container6').addEventListener('click', (event) => addtoLocaleStorage(event));

document.querySelector('.cards-container11').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container22').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container33').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container44').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container55').addEventListener('click', (event) => addtoLocaleStorage(event));
document.querySelector('.cards-container66').addEventListener('click', (event) => addtoLocaleStorage(event));


// ajouter la fonctionnalité de la carousel

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