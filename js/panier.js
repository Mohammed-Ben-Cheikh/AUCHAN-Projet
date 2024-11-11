let incr = document.getElementById('incr');
let decr = document.getElementById('decr');
let quantite = document.getElementById('quantite');
quantite.textContent = 1;

incr.addEventListener('click', () => {
    quantite.textContent = parseInt(quantite.textContent) + 1;
});

decr.addEventListener('click', () => {
    let currentQuantite = parseInt(quantite.textContent);
    if (currentQuantite > 0) {
        quantite.textContent = currentQuantite - 1;
    }
});