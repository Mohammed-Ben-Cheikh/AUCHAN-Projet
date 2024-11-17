let data = {};
let id = 0 ;
// Fonction pour afficher une alerte personnalisée
function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").classList.remove("hidden");
}

// Fonction pour masquer l'alerte personnalisée
function closeAlert() {
    document.getElementById("customAlert").classList.add("hidden");
}

// Récupération de données utilisateur depuis l'API Random User
fetch('https://randomuser.me/api/')
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        const auto = document.getElementById('auto');
        function autoFillUserData() {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const user = data.results[0]; // Get the first user in the results
            name.value = `${user.name.first} ${user.name.last}`;
            email.value = user.email;
        }
        auto.addEventListener('click', autoFillUserData);
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });

// Récupération de texte pour le message depuis l'API Bacon Ipsum
fetch('https://baconipsum.com/api/?type=meat-and-filler')
    .then(response => {
        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        const auto = document.getElementById('auto');
        function autoFillMessage() {
            const message = document.getElementById('message');
            const messageText = data[0]; // Get the first item in the results
            message.value = messageText;
        }
        auto.addEventListener('click', autoFillMessage);
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
    });


// Validation du formulaire de contact
function validation() {

    // Sélectionne les éléments
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regex pour la validation
    const nameRegex = /^[a-zA-ZÀ-ÿğĞçÇöÖüÜşŞ\u0600-\u06FF\s'-]+$/;   // Accepte uniquement les lettres, espaces et caractères spéciaux
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  // Format email standard

    // Variables de validation
    let isValid = true;
    let errorMessage = "";

    // Validation du nom
    if (!nameRegex.test(name)) {
        errorMessage += "Le nom ne doit contenir que des lettres et des espaces.\n";
        isValid = false;
    }

    // Validation de l'email
    if (!emailRegex.test(email)) {
        errorMessage += "L'email n'est pas valide.\n";
        isValid = false;
    }

    // Validation du message
    if (message === "") {
        errorMessage += "Le message ne peut pas être vide.\n";
        isValid = false;
    }

    // Afficher un message ou envoyer le formulaire
    if (isValid) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            data = {
                name,
                email,
                message
            };
            // Stocker les données dans localStorage
            localStorage.setItem(`formData${}`, JSON.stringify(data));
            console.log("Data collected and saved:", data);
        } else {
            console.log("Please fill in all fields.");
        }
    } else {
        showAlert("Erreurs de validation :\n" + errorMessage);
    }
};



















