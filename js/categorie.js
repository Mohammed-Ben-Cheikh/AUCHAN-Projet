let url = 'http://localhost:3000/api/data';
let connection = new XMLHttpRequest();
connection.open("GET", url, true);
connection.send()
connection.onreadystatechange = function () {
    if (connection.readyState === 4 && connection.status === 200) {
        let data = JSON.parse(connection.responseText)
    }
}