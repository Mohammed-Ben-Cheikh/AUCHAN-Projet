document.addEventListener('DOMContentLoaded', function () {

    function addProduct(event) {
        // I need to change the information with one where the event is trigger
        // extract Product title 
        // extract  image path
        // extract price
        // check if the card element is already in the cart incremenet the quatité
        // 
        let element = event.target.parentElement.parentElement.parentElement;
        let productInfo = event.target.parentElement.parentElement;
        let mainDiv = document.createElement('div');
        mainDiv.className = 'flex justify-center bg-slate-100 py-6 rounded-[1rem]';
    
    
        let innerDiv = document.createElement('div');
        innerDiv.className = 'bg-slate-100 h-48 md:w-4/6 mt-2 px-3 flex items-center justify-center md:justify-around lg:justify-center lg:space-x-10 lg:ml-16 rounded-[2rem] space-x-3 border-2';
    
    
        let firstFlexDiv = document.createElement('div');
        firstFlexDiv.className = 'flex items-center justify-between';
    
    
        let checkboxDiv = document.createElement('div');
        let checkbox = document.createElement('input');
        checkbox.className = 'h-5 w-5';
        checkbox.type = 'checkbox';
        checkboxDiv.appendChild(checkbox);
    
    
        let imageContainer = document.createElement('div');
        imageContainer.className = 'bg-white w-18 mx-2 h-36 flex items-center justify-center rounded-[2rem] shadow-lg';
        let image = document.createElement('img');
        image.className = 'w-52 rounded-[1rem]';
        image.src = '../images/produit_poulet2.jpg';
        image.alt = 'Chiken';
        imageContainer.appendChild(image);
    
    
        firstFlexDiv.appendChild(checkboxDiv);
        firstFlexDiv.appendChild(imageContainer);
    
    
        let secondContainer = document.createElement('div');
        secondContainer.className = 'space-y-2 p-3';
    
    
        let titleContainer = document.createElement('div');
        titleContainer.className = 'flex justify-between';
        let title = document.createElement('p');
        title.className = 'title text-lg';
        title.textContent = 'Entier Chicken';
        let trashIcon = document.createElement('span');
        trashIcon.className = 'text-4xl';
        trashIcon.id = "remove";
        trashIcon.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
        titleContainer.appendChild(title);
        titleContainer.appendChild(trashIcon);
    
    
        let selectContainer = document.createElement('div');
        let select = document.createElement('select');
        select.className = 'px-8 text-lg text-center text-white bg-[LimeGreen] rounded-[1rem]';
        let sizes = ['S', 'M', 'L', 'XL'];
        sizes.forEach((size, index) => {
            let option = document.createElement('option');
            option.value = index + 1;
            option.textContent = `Size : ${size}`;
            select.appendChild(option);
        });
        selectContainer.appendChild(select);
    
    
        let ratingContainer = document.createElement('div');
        ratingContainer.className = 'flex';
        let starsContainer = document.createElement('div');
        starsContainer.className = 'flex';
    
        let starColors = ['yellow', 'yellow', 'yellow', 'yellow', 'gray'];
        starColors.forEach(color => {
            let star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            star.classList.add('star');
            star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            star.setAttribute('viewBox', '0 0 576 512');
            let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', color);
            path.setAttribute('d', 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z');
            star.appendChild(path);
            starsContainer.appendChild(star);
        });
    
        let reviews = document.createElement('span');
        reviews.className = 'text-md ml-2';
        reviews.textContent = '(1.2K reviews)';
        ratingContainer.appendChild(starsContainer);
        ratingContainer.appendChild(reviews);
    
    
        let priceContainer = document.createElement('div');
        priceContainer.className = 'flex justify-between lg:w-[20rem]';
        let price = document.createElement('p');
        price.className = 'text-red-600 text-2xl';
        price.textContent = '$3.99';
        let quantityContainer = document.createElement('div');
        quantityContainer.className = 'bg-white px-2 border-2 border-solid border-orange-500 rounded-[1rem] shadow-lg';
        let decrButton = document.createElement('button');
        decrButton.id = 'decr';
        decrButton.className = 'px-2';
        decrButton.textContent = '-';
        let quantitySpan = document.createElement('span');
        quantitySpan.id = 'quantite';
        let incrButton = document.createElement('button');
        incrButton.id = 'incr';
        incrButton.className = 'px-2';
        incrButton.textContent = '+';
    
        quantitySpan.textContent = 1;
        quantityContainer.appendChild(decrButton);
        quantityContainer.appendChild(quantitySpan);
        quantityContainer.appendChild(incrButton);
        priceContainer.appendChild(price);
        priceContainer.appendChild(quantityContainer);
    
    
        secondContainer.appendChild(titleContainer);
        secondContainer.appendChild(selectContainer);
        secondContainer.appendChild(ratingContainer);
        secondContainer.appendChild(priceContainer);
    
    
        innerDiv.appendChild(firstFlexDiv);
        innerDiv.appendChild(secondContainer);
    
    
        mainDiv.appendChild(innerDiv);
        console.log("Hello: ", select);
    
        document.getElementById('productPanier').appendChild(mainDiv);
    
    
        incrButton.addEventListener('click', () => increment(quantitySpan));
        decrButton.addEventListener('click', () => decrement(quantitySpan));
        trashIcon.addEventListener('click', (event) => removeItem(event));

    }

    function increment(quantite) {
        quantite.textContent = parseInt(quantite.textContent) + 1;
        // recalculer le prix apres la quantité est incrementé
    }

    function decrement(quantite) {
        let currentQuantite = parseInt(quantite.textContent);
        if (currentQuantite > 0) {
            quantite.textContent = currentQuantite - 1;
            // recalculer le prix apres que la quantite est decrementé
            }
    }

    function removeItem(event) {
        let element = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        if(element) {
            element.remove();
        } else {
            alert("La Cart est Vide");
        }
    }
    


    document.getElementById('addToCart').addEventListener('click', (event) =>  addProduct(event));

});