// Get element references
let betAmountInput = document.getElementById('bet');
let choiceSelect = document.getElementById('choice');
let flipButton = document.getElementById('flipButton');
let coinImage = document.getElementById('coin');
let moneySpan = document.getElementById('money');
let countdownParagraph = document.getElementById('countdown');
let winloseParagraph = document.getElementById('winlose');
let wonAmountParagraph = document.getElementById('wonAmount');

let money = 100;

// Coin flip function
let flipCoin = function() {
  let result = Math.random() < 0.5 ? 'head.png' : 'tail.png';
  return result;
};

flipButton.onclick = function() {
  let betAmount = parseInt(betAmountInput.value);
  let choice = choiceSelect.value;

  if (betAmount > money) {
    alert('Non-sufficient funds!');
    return;
  }

  money -= betAmount;

  // Clear the countdown and win/lose message
  countdownParagraph.textContent = '';
  winloseParagraph.textContent = '';
  wonAmountParagraph.textContent = '';

  // Start the countdown
  let countdown = 3;
  countdownParagraph.textContent = countdown;

  let countdownInterval = setInterval(function() {
    countdown--;
    countdownParagraph.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);

      coinImage.classList.add('flipping'); // Apply the flipping animation

      let result = flipCoin();

      setTimeout(function() {
        coinImage.src = result;

        if (choice === result) {
          money += betAmount * 2;
          winloseParagraph.textContent = 'YOU WIN!';
          wonAmountParagraph.textContent = 'You won $' + betAmount * 2;
        }

        moneySpan.textContent = money;
        coinImage.classList.remove('flipping'); // Remove the flipping animation
      }, 1000);
    }
  }, 1000);
};

// Adjust max bet amount dynamically
setInterval(function() {
  betAmountInput.max = money;
}, 100);
