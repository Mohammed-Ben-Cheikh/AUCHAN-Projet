document.addEventListener('DOMContentLoaded', function () {

    // UPDATE: addProduct should take the Image , Title ,  PRice of the Element Where the Event Happen (DONE)
    // FEAT: the price need to be adjusted when increment or decrement QUantity (DONE)
    // FEAT: the price should be recalculated onchange the sizes (DONE)
    // BUG: if Quantity is Already Incremeneted, modifiying Szif will cause a calculation Bug.(DONE)
    // UPDATE add Product should Verifier if the Product added is already in the cart  (DONE)
    // FEAT: Display the total Price of the cart) (DONE)
    // BUG: Adding product to panier should be in realtime (DONE)

    // BUG: Update the price Immédialty After the Size Changes.
    // BUG: Price Management from Size to Size



    loadFromStorage();
    countCart();
    countTotalPrice();

    function addtoLocaleStorage(event) {
        let localStorageTable = JSON.parse(localStorage.getItem('cart')) || [];
        let element = event.target.parentElement.parentElement.parentElement;
        let isExist = false;

        let data = {
            title: element.querySelector('.title').textContent,
            priceUnit: element.querySelector('.price').textContent,
            price: element.querySelector('.price').textContent,
            img: element.querySelector('.image').getAttribute('src'),
            quantity: 1,
        }


        localStorageTable.forEach((obj) => {
            if(obj.title == data.title) {
                obj.quantity += 1;
                obj.price = parseFloat(obj.priceUnit * obj.quantity).toFixed(2);
                isExist = true;
                CartVerification(data);   
            }
        });

        if(!isExist) {
            localStorageTable.push(data);
            CartVerification(data);
        }

        localStorage.setItem("cart" , JSON.stringify(localStorageTable));
        countCart();
        countTotalPrice();
    }
 
    function increment(element, quantite, price) {
        let temp = JSON.parse(localStorage.getItem('cart'));

        let originalPrice = parseFloat(price.dataset.originalPrice);
        quantite.textContent = parseInt(quantite.textContent) + 1;
        price.textContent = "$ " + (originalPrice *  parseFloat(quantite.textContent)).toFixed(2);

        temp.forEach((data) => {
            if(data.title == element.title) {
                data.quantity = parseInt(quantite.textContent);
                data.price = (originalPrice *  parseFloat(quantite.textContent)).toFixed(2);
            }
        });

        localStorage.setItem("cart" ,JSON.stringify(temp));
        countCart();
        countTotalPrice();  

    }

    function decrement(element, quantite, price) {
        let temp = JSON.parse(localStorage.getItem('cart'));

        let currentQuantite = parseInt(quantite.textContent);
        if (currentQuantite > 1) {
            let originalPrice = parseFloat(price.dataset.originalPrice);
            quantite.textContent = currentQuantite - 1;
            price.textContent = "$ " + (originalPrice *  parseFloat(quantite.textContent)).toFixed(2);

            temp.forEach((data) => {
                if(element.title == data.title) {
                    data.quantity = parseInt(data.quantity) - 1;
                    data.price = (originalPrice *  parseFloat(quantite.textContent)).toFixed(2);
                }
            });
            localStorage.setItem('cart', JSON.stringify(temp));

            } else {
                removeItem(event);
            }
            countCart();
            countTotalPrice();  
    }

    function PricebySize(event) {
        let target = event.target.parentElement.parentElement;
        let ClientSize = event.target.value;
        let price = target.querySelector('.price');
        let originalPrice = parseFloat(price.getAttribute('data-price-original'));
        
        switch(ClientSize) {
            case '1':
                price.setAttribute('data-price', originalPrice);
                break;
            case '2':
                price.setAttribute('data-price', (originalPrice * 1.10).toFixed(2));
                break;
            case '3':
                price.setAttribute('data-price', (originalPrice * 1.20));
                break;
            case '4':
                price.setAttribute('data-price', (originalPrice * 1.30));
                break;
        }
    }

    function removeItem(event) {
        let storage = JSON.parse(localStorage.getItem('cart'));
        let element = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        let title = element.dataset.token;
        if(element) {
            element.remove();
            storage.forEach((data, index) => {
                if(title == data.title) {
                    storage.splice(index, 1)
                }
            })
        }

        localStorage.setItem("cart", JSON.stringify(storage));
        countCart();
        countTotalPrice();  
    }

function CartVerification(data) {
    let productExists = false;

    let ProductCart = document.querySelectorAll('.cartContent');
    console.log(ProductCart);

    ProductCart.forEach((element) => {
        if(data.title == element.dataset.token) {
            productExists = true;
            let quantity = element.querySelector('#quantite');
            let price = element.querySelector('.price');
            console.log(quantity);
            console.log(price);
            increment(data, quantity, price);
        }
    })

    if (!productExists) {
        console.log("Not Found! Adding to cart.");
        addProduct(data);
    }
}


    function loadFromStorage() {
        let sotrage = JSON.parse(localStorage.getItem('cart')) || []

        sotrage.map((element) => {
            addProduct(element);
        })
    }

    function addProduct(element) {
        let mainDiv = document.createElement('div');
        mainDiv.className = 'cartContent flex justify-center bg-slate-100 py-6 rounded-[1rem]';
        mainDiv.setAttribute('data-token', element.title);
    
    
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
        image.className = 'w-52 h-40 rounded-[1rem]';
        image.src = element.img;
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
        title.textContent = element.title;
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
    
    
        let quantityContainer = document.createElement('div');
        quantityContainer.className = 'bg-white px-2 border-2 border-solid border-orange-500 rounded-[1rem] shadow-lg';
        let decrButton = document.createElement('button');
        decrButton.id = 'decr';
        decrButton.className = 'px-2';
        decrButton.textContent = '-';
        let quantitySpan = document.createElement('span');
        quantitySpan.id = 'quantite';
        let priceContainer = document.createElement('div');
        priceContainer.className = 'flex justify-between lg:w-[20rem]';
        let price = document.createElement('p');
        price.className = 'price text-red-600 text-2xl';
        price.setAttribute('data-price', (element.priceUnit * element.quantity).toFixed(2));
        price.setAttribute('data-original-price', element.priceUnit );
        price.textContent = "$ " + (element.priceUnit * element.quantity).toFixed(2);
        let incrButton = document.createElement('button');
        incrButton.id = 'incr';
        incrButton.className = 'px-2';
        incrButton.textContent = '+';
    
        quantitySpan.textContent = element.quantity;
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
    
        document.getElementById('productPanier').appendChild(mainDiv);
    
        incrButton.addEventListener('click', () => increment(element ,quantitySpan, price));
        decrButton.addEventListener('click', () => decrement(element, quantitySpan, price));
        select.addEventListener('change', (event) => PricebySize(event));
        trashIcon.addEventListener('click', (event) => removeItem(event));

    }

    /*function showAtTime(event) {
        let productInfo = event.target.parentElement.parentElement.parentElement;

        let data =  {
            title: productInfo.querySelector('.title').textContent,
            price: productInfo.querySelector('.price').textContent,
            image: productInfo.querySelector('.image').getAttribute('src')
        };


        let mainDiv = document.createElement('div');
        mainDiv.className = 'cartContent flex justify-center bg-slate-100 py-6 rounded-[1rem]';
        mainDiv.setAttribute('data-token', data.title);
    
    
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
        image.src = data.image;
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
        title.textContent = data.title;
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
        price.className = 'price text-red-600 text-2xl';
        price.setAttribute('data-price', data.price);
        price.setAttribute('data-original-price', data.price);
        price.textContent = data.price;
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
    
        document.getElementById('productPanier').appendChild(mainDiv);
    
        incrButton.addEventListener('click', () => increment(quantitySpan, price));
        decrButton.addEventListener('click', () => decrement(quantitySpan, price));
        select.addEventListener('change', (event) => PricebySize(event));
        trashIcon.addEventListener('click', (event) => removeItem(event));

    }*/

    function countCart() {
        let cartContainer = document.querySelectorAll('.cartContent');
        let count = cartContainer.length;

        document.querySelector('.count').textContent = count;
    }

    function countTotalPrice() {
        let storage = JSON.parse(localStorage.getItem('cart'));
        let priceContainer = document.querySelector('.totalprice');
        let total = 0;

        storage.forEach((data) => {
            total += parseFloat(data.price);
        });

        priceContainer.textContent = total
    }
    
    
    document.getElementById('productSuggestion').addEventListener('click', (event) => {
        let classes = Array.from(event.target.classList);
       if (classes.includes('addToCart')) {
            //CartVerification(event);
        }
    });

    document.getElementById('productSuggestion').addEventListener('click', (event) => addtoLocaleStorage(event));
});