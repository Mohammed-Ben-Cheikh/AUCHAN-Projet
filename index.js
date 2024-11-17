let container=document.querySelector(".cartes");
let button=document.querySelector(".btnn");
let cardes=document.querySelector(".categories-card");

button.addEventListener('click', function() {
    // Vérifier si la section est cachée
    if (cardes.style.display === 'none' || cardes.style.display === '') {
        cardes.style.display = 'block'; // Afficher la section
    } else {
        cardes.style.display = 'none'; // Cacher la section
    }
});