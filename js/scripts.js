

/*Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div> з інформацією. При зникненні фокуса - так само пропадає*/

let textField = document.getElementById('text_field');
let infoDiv = document.getElementById('info');

textField.addEventListener('focus', function() {
    infoDiv.style.display = 'block';
});

textField.addEventListener('blur', function() {
    infoDiv.style.display = 'none';
});


/*На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання, при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо*/

let goLink = document.getElementById('button_two')
function enterUrl() {
    let url = prompt("Введіть посилання:");

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }
    console.log(url);

    goLink.onclick = function() {
        // location.href = url;
        window.open(url)
    }
}

/*Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)*/

let table = document.getElementById("myTable");

for (let i = 1; i <= 10; i++) {
    let row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement("td");
        let number = (i - 1) * 10 + j;
        let cellText = document.createTextNode(number);

        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    table.appendChild(row);
}

/*У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення з цієї папки отримане випадковим чином (Math.random)
*/


let imgElement = document.createElement("img");
let divElement = document.getElementById("showImg");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

let randomImage = images[Math.floor(Math.random() * images.length)];

imgElement.src = "images/" + randomImage;

divElement.appendChild(imgElement);