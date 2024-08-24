const startBtn = document.getElementById('start-btn');
const countdownDisplay = document.getElementById('countdown');
let countdown;

startBtn.addEventListener('click', function() {
    let time = parseInt(document.getElementById('time').value);

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    clearInterval(countdown);  // Clear any existing countdown
    countdownDisplay.textContent = formatTime(time);

    countdown = setInterval(function() {
        time--;
        countdownDisplay.textContent = formatTime(time);

        if (time <= 0) {
            clearInterval(countdown);
            countdownDisplay.textContent = "Time's up!";
        }
    }, 1000);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
