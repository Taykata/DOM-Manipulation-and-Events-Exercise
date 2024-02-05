function attachEventsListeners() {
    const days = document.getElementById('days');
    const daysBtn = document.getElementById('daysBtn');
    const hours = document.getElementById('hours');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutes = document.getElementById('minutes');
    const minutesBtn = document.getElementById('minutesBtn');
    const seconds = document.getElementById('seconds');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);
    
    function convertDays(click) {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 24 * 60;
        seconds.value = Number(days.value) * 24 * 60 * 60;
    }

    function convertHours() {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(hours.value) * 60 * 60;
    }

    function convertMinutes() {
        days.value = Number(minutes.value) / 60 / 24;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function convertSeconds() {
        days.value = Number(seconds.value) / 60 / 60 / 24;
        hours.value = Number(seconds.value) / 60 / 60;
        minutes.value = Number(seconds.value) / 60;
    }
}