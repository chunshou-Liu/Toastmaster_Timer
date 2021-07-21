var seconds = 7 * 60 ;
var t;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;

}

function countdown() {
    // starts countdown
    secondPassed();
    changeColor();
    if (seconds == 0) {} else {
        seconds--;
        t = setTimeout("countdown()", 1000);
    }
}

function cdpause() {
    // pauses countdown
    clearTimeout(t);
};

function cdreset() {
    // resets countdown
    cdpause();
    secondPassed();
};

function changeColor() {
    if (seconds <= 420 && seconds > 415) {
    document.body.style.background = "green";
    }
    else if (seconds <= 415 && seconds > 410) {
    document.body.style.background = "yellow";
    }
    else {
        document.body.style.background = "red";
    }
}