const appendTens = document.getElementById('tens');
const appendSeconds = document.getElementById('seconds');
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let interval;

buttonStart.onclick = function() {
  interval = setInterval(startTimer, 10); // ==> clearInterval 하면 해제
}

buttonStop.onclick = function() {
  clearInterval(interval);
}

buttonReset.onclick = function(){
  clearInterval(interval); // 멈추고 리셋해야됨
  seconds = 0;
  tens = 0;
  appendTens.innerText = 0;
  appendSeconds.innerText = 0;
}


function startTimer(){
  // tens를 1씩 증가
  tens++;

  if(tens > 99){
    // seconds 1 증가시킴
    seconds++;

    // appendSeconds 에도 반영
    appendSeconds.innerHTML = seconds;

    // tens, appendTens => 0
    tens = 0;
    appendTens.innerHTML = 0;
  }else{
    appendTens.innerHTML = tens;
  }
}