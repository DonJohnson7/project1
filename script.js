// Get element references
let betAmountInput = document.getElementById('bet');
let choiceSelect = document.getElementById('choice');
let flipButton = document.getElementById('flipButton');
let coinImage = document.getElementById('coin');
let moneySpan = document.getElementById('money');
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

  // Clear the win/lose message
  winloseParagraph.textContent = '';
  wonAmountParagraph.textContent = '';

  // Apply the flipping animation
  coinImage.classList.add('flip-animation');

  let result = flipCoin();

  setTimeout(function() {
    coinImage.src = result;

    if (choice === result) {
      money += betAmount * 2;
      winloseParagraph.textContent = 'YOU WIN!';
      wonAmountParagraph.textContent = '$' + betAmount * 2;
    }

    moneySpan.textContent = money;
    coinImage.classList.remove('flip-animation'); // Remove the flipping animation
  }, 3000); // Wait for 3 seconds before resolving the flip
};

// Adjust max bet amount dynamically
setInterval(function() {
  betAmountInput.max = money;
}, 100);
