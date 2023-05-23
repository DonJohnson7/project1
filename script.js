document.getElementById('flipButton').addEventListener('click', function() {
    // Randomly choose between head and tail
    let result = Math.random() < 0.5 ? 'C:\Users\Lenovo\Documents\GitHub\project1\heads.png' : 'C:\Users\Lenovo\Documents\GitHub\project1\tails.png';

    // Change the coin image
    document.getElementById('coin').src = result;

    // Print the result
    console.log('The result is: ' + (result === 'C:\Users\Lenovo\Documents\GitHub\project1\heads.png' ? 'Head' : 'Tail'));
});
