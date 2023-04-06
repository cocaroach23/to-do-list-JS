let username = prompt ("Введите своё имя в дательной падеже")  

let myTitle = document.getElementById('title')

if (username) {
    myTitle.innerHTML = "Задачи для " + username
} else {
    myTitle.innerHTML = "Неавторизороанный пользователь"
}

let number = 0

for (let number = 0; number < 5; number++){
    alert(number)
}

function readTask() {
    let myContainer = document.getElementById("container")
    let myInput = document.getElementById("input")

    let value = myInput.value

    number++

    myContainer.innerHTML = myContainer.innerHTML + "<p>" + number  + value + "</p>"
}