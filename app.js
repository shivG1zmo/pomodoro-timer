let timerdisp = document.getElementById("timer-disp")
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")
let timeLeft = 1500
let timer = null
let isRunning = false
let mode = "work"

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

start.addEventListener('click',()=> {

    if(isRunning === true) {
        alert("Timer already running")
        return
    }
    else {
        isRunning = true 
        timer = setInterval(()=> {
            --timeLeft
            updateDisplay()
            if(timeLeft===0){
                if(mode === "work"){
                alert('Break time 5 minutes')
                mode = "break"
                clearInterval(timer)
                isRunning = false
                timer = null 
                timeLeft = 300   
                updateDisplay()
                }
                else if(mode === "break"){
                    alert('Back to work')
                    mode = "work"
                    clearInterval(timer)
                    isRunning = false
                    timer = null
                    timeLeft = 1500
                    updateDisplay()
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            }
        },1000)
    }

})

pause.addEventListener('click', ()=> {
    if(isRunning === false && timeLeft!== 1500) {
        alert('Already paused')
        return 
    }
    else if(isRunning === false && timeLeft === 1500){
        alert('Timer not started yet')
    }
    else {
        clearInterval(timer)
        isRunning = false
        timer = null
    }
})

reset.addEventListener('click', ()=> {
    if(timeLeft === 1500){
        alert('Timer already reset')
    }   
    else {
    if(mode==="break"){
        alert('Back to work')
        mode = "work"
    } 
    clearInterval(timer)
    isRunning = false
    timer = null
    timeLeft = 1500
    updateDisplay()
}})


updateDisplay()