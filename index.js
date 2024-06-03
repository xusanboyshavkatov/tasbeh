let count = document.querySelector(".count")
let count2 = document.querySelector(".count2")
let res = document.querySelector(".res")

let musiqa = document.querySelector('.musiqa')
let musiqa3 = document.querySelector(".audio")

let countdata = 0

function show() {
    countdata++
    count.innerHTML = countdata
    count2.innerHTML = countdata
}

function restart() {
    countdata = 0
    count.innerHTML = "0"
    count2.innerHTML = "0"
}

isOpen = true

function musiqa1() {
    if (isOpen) {
        musiqa.play()
        musiqa3.src = "img/icons8-no-audio-50.png"
        isOpen = false
    }
    else {
        musiqa.pause()
        isOpen = true
        musiqa3.src = "img/icons8-audio-50.png"
    }

}