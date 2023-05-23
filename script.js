// Get the money and bet elements
let moneyElement = document.getElementById('money');
let betElement = document.getElementById('bet');

document.getElementById('flipButton').addEventListener('click', function() {
    // Get the user's bet and choice
    let bet = parseInt(betElement.value);
    let choice = document.getElementById('choice').value;

    // Get the user's money
    let money = parseInt(moneyElement.textContent);

    // Check if the bet is greater than the money available
    if(bet > money) {
        alert("You can't bet more than you have!");
        return;
    }

    // Disable the button during the countdown
    let flipButton = document.getElementById('flipButton');
    flipButton.disabled = true;

    // Countdown before flipping the coin
    let countdownValue = 3;
    let countdownElement = document.createElement('h2');
    countdownElement.id = 'countdown';
    document.body.appendChild(countdownElement);

    let countdown = setInterval(function() {
        countdownElement.innerText = `Flipping in ${countdownValue}...`;
        countdownValue--;

        if(countdownValue < 0) {
            // Randomly choose between head and tail
            let result = Math.random() < 0.5 ? 'head.png' : 'tail.png';

            // Change the coin image
            document.getElementById('coin').src = result;

            // Check if the user won or lost
            let gameResult = '';
            if(result === choice) {
                // User won
                money += bet;
                gameResult = 'You won! It was ' + (result === 'head.png' ? 'Heads' : 'Tails') + '!';
            } else {
                // User lost
                money -= bet;
                gameResult = 'You lost! It was ' + (result === 'head.png' ? 'Heads' : 'Tails') + '!';
            }

            // Ensure the money doesn't go below 0
            money = Math.max(money, 0);

            // Update the user's money and bet max value
            moneyElement.textContent = money;
            betElement.max = money;

            // Display the game result
            document.getElementById('result').textContent = gameResult;

            // Remove the countdown element and enable the button again
            document.body.removeChild(countdownElement);
            flipButton.disabled = false;

            // Clear the countdown
            clearInterval(countdown);
        }
    }, 1000);
});
