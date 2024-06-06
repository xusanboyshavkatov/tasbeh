let tasbeh_popup_input = document.querySelector(".tasbeh_popup_input")
let count_input = document.querySelector(".count_input")
let count_input_btninnerhtml = document.querySelector(".count_input_btn")
let tasbeh_count_h1 = document.querySelector(".tasbeh_count_h1")

let ilova_download = document.querySelector(".ilova_download")

let musiqaicon = document.querySelector(".musiqaicon")

let count = 0
let audio2 = 1
let audioopen = 1

function musiqa() {
    if (audioopen === 1) {
        musiqaicon.src = "img/icons8-vibration-64.png"
        audio2++
        audioopen++
    }
    else if (audioopen === 2) {
        musiqaicon.src = "img/icons8-no-audio-50 (2).png"
        audio2++
        audioopen++
    }
    else if (audioopen === 3) {
        musiqaicon.src = "img/icons8-audio-50 (1).png"
        audio2 = 1
        audioopen = 1
    }
}


function count_input_btn() {
    tasbeh_popup_input.classList.remove("display_none")
}

function save_btn() {
    count_input_btninnerhtml.innerHTML = count_input.value
    count_input_btninnerhtml.style.fontSize = "22px";
    count_input.value = ""
    tasbeh_popup_input.classList.add("display_none")
    event.preventDefault();
}
function cancel_btn() {
    tasbeh_popup_input.classList.add("display_none")
    event.preventDefault();
}


function ilova_not_close() {
    ilova_download.classList.add("display_none")
}

function tasbeh_count() {
    let limit = parseInt(count_input_btninnerhtml.innerHTML);


    if (isNaN(limit) || count < limit) {
        count++
        tasbeh_count_h1.innerHTML = count
        tasbeh_count_h1.style.fontSize = "54px";
        if (audio2 == 1) {
            // Ovoz faylini yuklash
            let audio = new Audio("audio/click.m4a");
            // Ovozni ijro etish
            audio.play();
        }
        else if (audio2 == 2) {
            window.navigator.vibrate([50]);
        }
        else if (audio2 == 3) {
            window.navigator.vibrate([0]);
        }
    }
    else if (count < parseInt(count_input_btninnerhtml.innerHTML)) {
        count++
        tasbeh_count_h1.innerHTML = count
        tasbeh_count_h1.style.fontSize = "54px";
    }


}


function res() {
    count = 0
    tasbeh_count_h1.style.fontSize = "24px";
    tasbeh_count_h1.innerHTML = "Boshlash"

    count_input_btninnerhtml.style.fontSize = "16px";
    count_input_btninnerhtml.innerHTML = "Maqsadli miqdor!"
    count_input.value = ""
}

teng = 1
function info_btn() {
    let info = document.querySelector(".info")
    if (teng == 1) {
        info.classList.remove("display_none")
        teng++
    }

    else if (teng == 2) {
        info.classList.add("display_none")
        teng = 1
    }

}