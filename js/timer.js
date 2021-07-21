var seconds = 1;
$("#startButton").click(function (e) {
    setInterval(function () {
        var minutes = Math.round((seconds - 30) / 60);
        if (seconds == 0)
        $("#stopWatch").html(minutes +":" + seconds %60 );
        document.getElementById('stopWatch').innerHTML = minutes + ":" + seconds;
        seconds++;
    }, 1000);
});

$("#resetButton").click(function (e) {
    seconds = 0;
});