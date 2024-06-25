window.onload = function() {

    let miles   = 00
    let seconds = 00
    let minutes = 00
    let hours   = 00
    let takeMiles = document.querySelector("#miles")
    let takeSeconds = document.querySelector("#seconds")
    let takeMinutes = document.querySelector("#minutes")
    let takeHours = document.querySelector("#hours")
    let startBtn = document.querySelector(".startBtn")
    let pauseBtn = document.querySelector(".pauseBtn")
    let resetBtn = document.querySelector(".resetBtn")
    let interval = ""

    startBtn.onclick = function() {
        clearInterval(interval)
        interval = setInterval(startTime, 10)
    }

    pauseBtn.onclick = function() {
        clearInterval(interval)
    }
    
    resetBtn.onclick = function() {
        clearInterval(interval)
        miles   =  "00"
        seconds =  "00"
        minutes =  "00"
        hours   =  "00"
        takeMiles.innerHTML = miles
        takeSeconds.innerHTML = seconds
        takeMinutes.innerHTML = minutes
        takeHours.innerHTML = hours
    }

    function startTime() {
        miles++

        if(miles <= 9) {
            takeMiles.innerHTML = "0" + miles
        }
        
        if(miles > 9) {
            takeMiles.innerHTML = miles
        }
        
        if(miles > 99) {
            seconds++
            takeSeconds.innerHTML = "0" + seconds
            miles = 0
            takeMiles.innerHTML = "0" + 0
        }
        
        if(seconds > 9) {
            takeSeconds.innerHTML = seconds
        }

        if(seconds > 59) {
            minutes++
            takeMinutes.innerHTML = "0" + minutes
            seconds = 0
            takeSeconds.innerHTML = "0" + 0
        }

        if(minutes > 59) {
            hours++
            takeHours.innerHTML = "0" + hours
            minutes = 0
            takeMinutes.innerHTML = minutes
        }
    }
}