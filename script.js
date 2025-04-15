function checkFirst() {
    let first_name = document.getElementById("first_name").value;
    let regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(first_name)) {
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Поле заполнено верно";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Пожалуйста, введите 2-15 символов";
        return false;
    }
}

function checkLast() {
    let last_name = document.getElementById("last_name").value;
    let regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(last_name)) {
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Поле заполнено верно";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Пожалуйста, введите 2-20 символов";
        return false;
    }
}

function checkPatronimyc() {
    let patronimyc = document.getElementById("patronimyc").value;
    let regex = /^[а-яА-Я\s]{2,20}$/;

    if (regex.test(patronimyc)) {
        document.getElementById("patronimyc_Check").style.color = "green";
        document.getElementById("patronimyc_Check").innerHTML = "Поле заполнено верно";
        return true;
    }
    else {
        document.getElementById("patronimyc_Check").style.color = "red";
        document.getElementById("patronimyc_Check").innerHTML = "Пожалуйста, введите 2-20 символов";
        return false;
    }
}

function checkPhone() {
    let telefon = document.getElementById("telefon").value;
    let regex = /^\+7\d{10}$/;

    if (regex.test(telefon)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Поле заполнено верно";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Пожалуйста, введите номер в формате +7хххххххххх";
        return false;
    }
}


function checkArticle() {
    let article = document.getElementById("article").value;
    let regex = /^\d{8}$/;

    if (regex.test(article)) {
        document.getElementById("article_Check").style.color = "green";
        document.getElementById("article_Check").innerHTML = "Поле заполнено верно";
        return true;
    }
    else {
        document.getElementById("article_Check").style.color = "red";
        document.getElementById("article_Check").innerHTML = "Пожалуйста, введите 8 символов";
        return false;
    }
}

function outputData() {
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let patronimyc = document.getElementById("patronimyc").value;
    let telefon = document.getElementById("telefon").value;
    let address = document.getElementById("address").value;
    let article = document.getElementById("article").value;
    let quantity = document.getElementById("quantity").value;

    if (checkFirst() && checkLast() && checkPatronimyc() && checkPhone() && checkArticle()) {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + first_name + "!";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка успешно принята, мы свяжемся с Вами как можно скорее. Вы можете проверить детали заказа ниже:";
        document.getElementById("summary").innerHTML += "Адрес пункта выдачи: " + document.getElementById("address").options[document.getElementById("address").selectedIndex].text + ".<br>"; document.getElementById("summary").innerHTML += "Артикул товара: " + article + ".</br>";
        document.getElementById("summary").innerHTML += "Количество единиц товара: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Контактный номер: " + telefon + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Спасибо за Ваш заказ!</p>";
    }
    else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля заявки";
    }
}

document.getElementById("title").addEventListener("click", function () {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    this.style.color = randomColor;
});


const sendOrderBtn = document.getElementById("sendOrder");
sendOrderBtn.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s ease";
});
sendOrderBtn.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});
