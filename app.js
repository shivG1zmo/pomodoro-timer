let timerdisp = document.getElementById("timer-disp")
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")
let timeLeft = 1500
let timer = null
let isRunning = false

function convert() {
    let min = Math.floor(timeLeft/60)
    min = String(min).padStart(2,"0")
    let sec = timeLeft%60
    sec = String(sec).padStart(2,"0")
    return `${min}:${sec}`
    
}

function updateDisplay() {
    let display = convert()
    timerdisp.textContent = display   
}
