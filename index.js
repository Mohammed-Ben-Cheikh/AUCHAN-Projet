// let container=document.querySelector(".cartes");
// let button=document.querySelector(".btnn");
// let cardes=document.querySelector(".categories-card");

// button.addEventListener('click', function() {
//     // Vérifier si la section est cachée
//     if (cardes.style.display === 'none' || cardes.style.display === '') {
//         cardes.style.display = 'block'; // Afficher la section
//     } else {
//         cardes.style.display = 'none'; // Cacher la section
//     }
// });


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
let left=document.querySelector(".left");

left.addEventListener("click",function(){

    vegetablescontainer.scrollBy(50,0);
});