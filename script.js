document.getElementById('flipButton').addEventListener('click', function() {
    // Randomly choose between head and tail
    let result = Math.random() < 0.5 ? 'head.png' : 'tail.png';

    // Change the coin image
    document.getElementById('coin').src = result;

    // Print the result
    console.log('The result is: ' + (result === 'head.png' ? 'Head' : 'Tail'));
});
