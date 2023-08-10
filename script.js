let stopwatch = '';
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const hundredth = document.getElementById('hundredth');
let lapnum = 0;

function incrementHundredth() {
    hundredth.innerText++;
    if (hundredth.innerText > 99) {
        hundredth.innerText = 0;
        incrementSecond();
    }
}

function incrementSecond() {
    seconds.innerText++;
    if (seconds.innerHTML > 59) {
        seconds.innerText = 0;
        incrementMinute();
    }
}

function incrementMinute() {
    minutes.innerText++;
}

function startStopwatch() {
    stopwatch = setInterval(incrementHundredth, 10);
}

function stopStopwatch() {
    clearInterval(stopwatch);
}

function clearStopwatch(clearRounds) {
    stopStopwatch();
    minutes.innerText = '00';
    seconds.innerText = '00';
    hundredth.innerText = '00'
    if (clearRounds) {
        document.getElementById('lap-times').innerHTML = '';
    }
}

function newLapTime() {
    saveTime();
    clearStopwatch(false);
    startStopwatch();
}

function saveTime() {
    const lapTable = document.getElementById('lap-times');
    lapnum++;
    lapTable.innerHTML = /* HTML */ `
        <p>Runde ${lapnum} - ${minutes.innerText}:${seconds.innerText}:${hundredth.innerText}</p>
    ` + lapTable.innerHTML;
}