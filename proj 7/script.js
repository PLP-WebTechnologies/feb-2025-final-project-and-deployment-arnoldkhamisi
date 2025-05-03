function updateClocks() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;

    const hrs = String(hour).padStart(2, "0");
    const mins = String(minute).padStart(2, "0");
    const secs = String(second).padStart(2, "0");
    document.getElementById("digital-clock").textContent = `${hrs}:${mins}:${secs}`;

    checkAlarm(`${hrs}:${mins}`);
  }

  function toggleAlarmSettings() {
    const settings = document.getElementById("alarm-settings");
    settings.style.display = settings.style.display === "block" ? "none" : "block";
  }

  let alarmTime = null;
  let alarmSound = document.getElementById("alarm-audio");

  function setAlarm() {
    alarmTime = document.getElementById("alarm-time").value;
    const ringtone = document.getElementById("ringtone").value;
    alarmSound.src = `${ringtone}.mp3`;
    alert("Alarm set for " + alarmTime);
  }

  function checkAlarm(currentTime) {
    if (alarmTime === currentTime) {
      alarmSound.play();
    }
  }

  setInterval(updateClocks, 1000);
  updateClocks();