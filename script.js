
function currentTime()
{
    var date = new Date();
    var now = date.toLocaleString('en-US', {hour24: false});
    document.getElementById('currentTime').innerHTML = now;

}

setInterval(currentTime, 1);

var alarmSound = new Audio("music.mp3");

function setAlarm(){
    var alarmTime =  document.getElementById('alarmtime').value;
    var now = new Date();
    var alarm = new Date(now.toDateString() + " "+ alarmTime);


    var timeRemaining = alarm - now;

    setTimeout(playAlarm, timeRemaining );
    document.getElementById('alarmtime').disabled =true;


}



function playAlarm(){
    alarmSound.play();
    document.getElementById(' alarmtime').disabled =false;
}
