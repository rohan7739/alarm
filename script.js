const timeElement = document.getElementById('time');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
let alarmInterval;

function updateTime(){
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,'0')
    const minutes = now.getMinutes().toString().padStart(2,'0')
    const seconds = now.getSeconds().toString().padStart(2,'0')
    timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;
}

function setAlarm(){
    const alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        const now = new Date();
        const [hours, minutes] = alarmTime.split(':');
        const alarmDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(hours), parseInt(minutes), 0);

        const currentTime = new Date();
        const timeUntilAlarm = alarmDateTime - currentTime;

        if (timeUntilAlarm > 0) {
        clearInterval(alarmInterval);
        alarmInterval = setInterval(() => {
            const currentTime = new Date();
            const timeUntilAlarm = alarmDateTime - currentTime;

            if (timeUntilAlarm <= 0) {
            clearInterval(alarmInterval);
            var audio = new Audio('Alarm_Clock_Alarm.mp3');
            audio.play();
            alert('Alarm! Wake up!');
            }
        }, 1000);
        } else {
        alert('Invalid alarm time. Please set a future time.');
        }
    }
    }



setInterval(updateTime, 1000);
setAlarmButton.addEventListener('click', setAlarm);