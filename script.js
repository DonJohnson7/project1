document.getElementById('flipButton').addEventListener('click', function() {
    // Randomly choose between head and tail
    let result = Math.random() < 0.5 ? 'head.png' : 'tail.png';

    // Change the coin image
    document.getElementById('coin').src = result;

    // Get the user's bet and choice
    let bet = parseInt(document.getElementById('bet').value);
    let choice = document.getElementById('choice').value;

    // Get the user's money
    let moneyElement = document.getElementById('money');
    let money = parseInt(moneyElement.textContent);

    // Check if the user won or lost
    if(result === choice) {
        // User won
        money += bet;
        console.log('You won!');
    } else {
        // User lost
        money -= bet;
        console.log('You lost!');
    }

    // Update the user's money
    moneyElement.textContent = money;
});
