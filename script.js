let username = prompt ("Введите своё имя в дательной падеже")  

let myTitle = document.getElementById('title')

if (username) {
    myTitle.innerHTML = "Задачи для " + username
} else {
    myTitle.innerHTML = "Неавторизороанный пользователь"
}

let number = 0



function readTask() {
    let myContainer = document.getElementById("container")
    let myInput = document.getElementById("input")

    let value = myInput.value
    myInput.value = ""
    
    //number++

    if(number < 5) {
        number++
        myContainer.innerHTML = myContainer.innerHTML + "<p>" + number + "."  + value + "</p>"
        
    } else {
        confirm("Колличество записей ограничено до 5")
    }

    /*for (let number = 0; number < 5; number++){
        alert(number)
    }*/

    //myContainer.innerHTML = myContainer.innerHTML + "<p>" + number + "."  + value + "</p>"
}