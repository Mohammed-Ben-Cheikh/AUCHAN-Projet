let url = 'http://localhost:3000/api/data';
let connection = new XMLHttpRequest();
connection.open("GET", url, true);
connection.send()
connection.onreadystatechange = function () {
    if (connection.readyState === 4 && connection.status === 200) {
        let data = JSON.parse(connection.responseText)
        function showProducts(data) {

            document.getElementById("products-container").innerHTML = '';
            data.forEach(element => {
                document.getElementById("products-container").innerHTML += `
                <div id class="bg-white w-[18rem] flex flex-col justify-end gap-6 items-center rounded-[1rem] py-3 px-2">
                 <div>
                            <img class="imageP lg:h-36 md:h-32 sm:h-28 h-242" src="../images/produit_poulet2.jpg" alt="MuscleMilk">
                        </div>
                        <div class="text-center space-y-2">
                            <span class="title text-lg md:text-2xl" value="${element.name}">${element.name}</span>
                            <div class="flex mr-1">
                                <div class="flex">
                                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="yellow" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="yellow" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="yellow" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="yellow" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="gray" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                    </svg>
                                </div>
                                <span class="text-[12px] mt-1 ml-2">(1.2K Avis)</span>
                            </div>
                            <span class=" price text-CoralRed text-xl md:text-3xl">${element.price}.00$</span>
                            <div>
                                <button class="produts py-2 px-3 border-2 border-orange-500 rounded-[1rem] hover:bg-orange-500 hover:duration-500 hover:text-white ">Add to cart</button>
                            </div>
                        </div>
                    </div>

                `

            });

        }
        showProducts(data.products);
        function addtoLocaleStorage(event) {
            console.log("hello!")
            let localTable = JSON.parse(localStorage.getItem('cart')) || [];
            let element = event.target.parentElement.parentElement;
            console.log("aaaa",element);
            console.log("bbbb",element.querySelector('.title').value);
            
            
            let data = {
                title: element.querySelector('.title').textContent,
                price: element.querySelector('.price').textContent,
                image: element.querySelector('.imageP').getAttribute('src'),
            }
            localTable.push(data);
        
            localStorage.setItem('cart', JSON.stringify(localTable));
        }
        
        document.querySelector('.products').addEventListener('click', (event) => addtoLocaleStorage(event));

        document.getElementById("all").addEventListener("click", function () {

            showProducts(data.products)
        })
        document.getElementById("viande").addEventListener("click", function () {
            const ProductViande = data.products.filter(function (item) {
                return item.categories === "Viande"
            })
            
            showProducts(ProductViande)
        })
        document.getElementById("Produits de Ménage").addEventListener("click", function () {
            const ProductMenage = data.products.filter(function (item) {
                return item.categories === "Produits de Ménage"
            })
            
            showProducts(ProductMenage)
        })

        document.getElementById("Charcuterie").addEventListener("click", function () {
            const ProductCharcuterie = data.products.filter(function (item) {
                return item.categories === "Charcuterie"
            })
           
            showProducts(ProductCharcuterie
            )
        })

        document.getElementById("Produits Laitiers").addEventListener("click", function () {
            const ProductLaitier = data.products.filter(function (item) {
                return item.categories === "Produits Laitiers"
            })
            
            showProducts(ProductLaitier)
        })
        document.getElementById("Légumes et Fruits").addEventListener("click", function () {
            const ProductLegume = data.products.filter(function (item) {
                return item.categories === "Légumes et Fruits"
            })
            
            showProducts(ProductLegume)
        })
        document.querySelector(".select-tri").addEventListener("change", function (event) {
            let sortedProducts = [...data.products];

            function triCroissant(product) {
                let len = product.length;
                for (let i = 0; i < len - 1; i++) {
                    for (let j = 0; j < len - 1 - i; j++) {
                        if (product[j].price > product[j + 1].price) {
                            [product[j], product[j + 1]] = [product[j + 1], product[j]];
                        }
                    }
                }
            }

            function triDecroissant(product) {
                let len = product.length;
                for (let i = 0; i < len - 1; i++) {
                    for (let j = 0; j < len - 1 - i; j++) {
                        if (product[j].price < product[j + 1].price) {
                            [product[j], product[j + 1]] = [product[j + 1], product[j]];
                        }
                    }
                }
            }
            
            if (event.target.value === "Prix Croissant") {
                triCroissant(sortedProducts);
            } else if (event.target.value === "Prix Décroissant") {
                triDecroissant(sortedProducts);
            } else {
                sortedProducts = data.products;
            }

            showProducts(sortedProducts);
        });

        document.getElementById("range-input").addEventListener("change", function () {
            const value = document.getElementById("range-input").value
            document.getElementById("range-area").innerHTML = `0 - ${value}`
            if (value == 0) {
                showProducts(data.products)

            } else {
                let allProducts = [...data.products];
                let sorted = []
                allProducts.forEach(item => {
                    if (item.price <= value) {
                        sorted.push(item)
                    }
                })
                showProducts(sorted)
            }


        });
        document.getElementById("search").addEventListener("keyup",function(){
            const value = document.getElementById("search").value.toUpperCase();
            let tableSearch = [];
            let allProducts = [...data.products];
            allProducts.forEach(element => {
                const title = element.name.toUpperCase();
                if(title.indexOf(value) > -1){
                    tableSearch.push(element);
                    showProducts(tableSearch);
                }
            });
            
        })
    }
}