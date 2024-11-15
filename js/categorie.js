let url = 'http://localhost:3000/api/data';
let connection = new XMLHttpRequest();
connection.open("GET", url, true);
connection.send()
connection.onreadystatechange = function () {
    if (connection.readyState === 4 && connection.status === 200) {
        let data = JSON.parse(connection.responseText)
        console.log(data);
        function showProducts(data) {

            document.getElementById("products-container").innerHTML = '';
            data.forEach(element => {
                document.getElementById("products-container").innerHTML += `
                <div class="bg-white w-[18rem] flex flex-col justify-end gap-6 items-center rounded-[1rem] py-3 px-2">
                

    }
}