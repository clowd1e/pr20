let pip = document.querySelector("#pip")
let q1 = document.querySelectorAll('input[name="q1"]')
let q2 = document.querySelectorAll('input[name="q2"]')
let q3 = document.querySelectorAll('input[name="q3"]')
let q4 = document.querySelectorAll('input[name="q4"]')
let q5 = document.querySelectorAll('input[name="q5"]')
let q6 = document.querySelectorAll('input[name="q6"]')
let but = document.querySelector("#footer-button")
let k = 0
but.addEventListener('click', function() {
    for (let radio of q1) {
        if (radio.checked && radio.value == "4") {
            k++
        }
    }
    for (let radio of q2) {
        if (radio.checked && radio.value == "1") {
            k++
        }
    }
    for (let radio of q3) {
        if (radio.checked && radio.value == "5") {
            k++
        }
    }
    for (let radio of q4) {
        if (radio.checked && radio.value == "1") {
            k++
        }
    }
    for (let radio of q5) {
        if (radio.checked && radio.value == "3") {
            k++
        }
    }
    for (let radio of q6) {
        if (radio.checked && radio.value == "2") {
            k++
        }
    }
    let result = Math.round(k * 2)
    alert(pip.value + " Оцінка: " + result)
})
