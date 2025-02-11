let timer;
let isRunning = false;
let hr = 0, min = 0, sec = 0, ms = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 10); 
    }
}

function stopStopwatch() 
{
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() 
{
    stopStopwatch();
    hr = min = sec = ms = 0;
    updateDisplay();
}

function updateStopwatch() {
    ms += 10;
    if (ms >= 1000) {
        ms = 0;
        sec++;
    }
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hr++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hours').innerHTML = padZero(hr);
    document.getElementById('mins').innerHTML = padZero(min);
    document.getElementById('seconds').innerHTML = padZero(sec);
    document.getElementById('milliseconds').innerHTML = padMilliseconds(ms);
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function padMilliseconds(num) {
    return num.toString().padStart(3, "0");
}
