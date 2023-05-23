<!DOCTYPE html>
<html>
<head>
    <title>Coin Flip Game</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Coin Flip Game</h1>
    <img id="coin" src="head.png" alt="coin">

    <h2>Your money: $<span id="money">100</span></h2>
    <label for="bet">Bet Amount: </label>
    <input id="bet" type="number" min="1" max="100" value="10">
    <label for="choice">Your choice: </label>
    <select id="choice">
        <option value="head.png">Heads</option>
        <option value="tail.png">Tails</option>
    </select>
    <button id="flipButton">Flip the Coin!</button>

    <script src="script.js"></script>
</body>
</html>
