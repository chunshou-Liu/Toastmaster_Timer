var t;
var seconds = 1;
var gtime =  5 * 60;
var ytime =  6 * 60;
var rtime =  7.5 * 60;
function setTabletimer(){
    gtime =  1 * 60;
    ytime =  1.5 * 60;
    rtime =  2.5 * 60;
}
function setIndividualtimer(){
    gtime =  2 * 60;
    ytime =  2.5 * 60;
    rtime =  3.5 * 60;
}
function setIcetimer(){
    gtime =  4 * 60;
    ytime =  5 * 60;
    rtime =  6.5 * 60;
}
function setPreparedtimer(){
    gtime =  5 * 60;
    ytime =  6 * 60;
    rtime =  7.5 * 60;
}
function changeColor() {
    if (seconds <= ytime && seconds >= gtime) {
    document.body.style.background = "green";
    }
    else if (seconds <= rtime && seconds >= ytime) {
    document.body.style.background = "yellow";
    }
    else if (seconds >= rtime){
        document.body.style.background = "red";
    }
    else{
        document.body.style.background = "white";
    }
}
function secondPassed() {
      var minutes = Math.round((seconds - 30) / 60);
      if (seconds %60 <10){$("#stopWatch").html(minutes +":0" + seconds %60 );}
      else{$("#stopWatch").html(minutes +":" + seconds %60 );}
}
function timer(){
  secondPassed();
  changeColor();
      seconds++;
      t = setTimeout("timer()", 1000);
}

function reset(){
    seconds = 0;
  changeColor();
  clearTimeout(t);
  secondPassed();
}

function stop(){
    clearTimeout(t);
}

