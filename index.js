let count = 0
let counth1 = document.querySelector(".counth1")
let clickbtntext = document.querySelector(".countbtn")


let musiqafile = document.querySelector(".musiqafile")
let musiqaicon = document.querySelector(".musiqaicon")
function clickbtn() {
    count++
    window.navigator.vibrate([50])
    counth1.innerHTML = count
    clickbtntext.innerHTML = count
}
function tasbeh_minus() {
    if(count === 0) return;
    count--
    counth1.innerHTML = count
    clickbtntext.innerHTML = count
}

function tasbeh_restart() {
    count = 0
    counth1.innerHTML = count
    clickbtntext.innerHTML = count
}


isOpen = true

function musiqa() {
    if (isOpen) {
        musiqafile.play()
        musiqaicon.src = "img/tasbeh_audio_icon.png"
        isOpen = false
    }
    else {
        musiqafile.pause()
        isOpen = true
        musiqaicon.src = "img/tasbeh_noaudio_icon.png"
        musiqafile.currentTime = 0;
    }

}
