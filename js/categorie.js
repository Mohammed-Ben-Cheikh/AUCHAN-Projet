let url = 'http://localhost:3000/api/data';
let connection = new XMLHttpRequest();
connection.open("GET", url, true);
connection.send()
connection.onreadystatechange = function () {
    if (connection.readyState === 4 && connection.status === 200) {
        let data = JSON.parse(connection.responseText)
        let currentPage = 1;
        const itemsPerPage = 5;
        function showProducts(data) {
            let totalProducts = data.length;
            let totalPages = Math.ceil(totalProducts / itemsPerPage);

            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const currentItems = data.slice(start, end);

            document.getElementById("products-container").innerHTML = '';
            currentItems.forEach(element => {
                document.getElementById("products-container").innerHTML += `
                <div class="bg-white shadow-md rounded-lg p-4">
                        <img src="${element.image}" alt="${element.name}"/>
                        <div class="text-center">
                            <h3 class="title text-lg md:text-2xl">${element.name}</h3>
                            <div class="flex justify-center items-center mt-2">
                                <span class="text-yellow-500">★★★★★</span>
                                <span class="text-[12px] mt-1 ml-2">(1.2k reviews)</span>
                            </div>
                            <p class="price text-CoralRed text-xl md:text-3xl">${element.price}.00$</p>
                            <button
                                class="produts py-2 px-3 border-2 border-orange-500 rounded-[1rem] hover:bg-orange-500 hover:duration-500 hover:text-white ">Add
                                to Cart</button>
                        </div>
                    </div>

                `

            });
            document.getElementById("page-numbers").textContent = `Page ${currentPage} of ${totalPages}`;

            document.getElementById("prev").disabled = currentPage === 1;
            document.getElementById("next").disabled = currentPage === totalPages;

        }
        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                showProducts(data.products);
            }
        }
    
        function nextPage() {
            currentPage++;
            showProducts(data.products);
        }
    
        document.getElementById("prev").addEventListener("click", prevPage, false);
        document.getElementById("next").addEventListener("click", nextPage, false);

        showProducts(data.products);
        function addtoLocaleStorage(event) {
            console.log("hello!")
            let localTable = JSON.parse(localStorage.getItem('cart')) || [];
            let element = event.target.parentElement.parentElement.parentElement;
            console.log("aaaa",element);
            console.log("bbbb",element.querySelector('.title').textContent);
            
            
            let data = {
                title: element.querySelector('.title').textContent,
                price: element.querySelector('.price').textContent,
                image: element.querySelector('.imageP').getAttribute('src'),
            }
            localTable.push(data);
        
            localStorage.setItem('cart', JSON.stringify(localTable));
        }
        
        document.querySelector('.products').addEventListener('click', (event) => addtoLocaleStorage(event));

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