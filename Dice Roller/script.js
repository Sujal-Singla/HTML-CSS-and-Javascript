document.getElementById('roll-btn').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceElement = document.getElementById('dice-number');
    
    // Add a little animation for rolling effect
    diceElement.style.transform = "rotate(360deg)";
    
    setTimeout(() => {
        diceElement.textContent = randomNumber;
        diceElement.style.transform = "rotate(0deg)";
    }, 300);
});
