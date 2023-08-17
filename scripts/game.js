let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName('circle')) {
        if(circle.getAttribute('data-listener') !== 'true') {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute('id');
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute('data-listener', 'true');
        }
    }
    showScore();
    addTurn();
}


function showScore () {
    document.getElementById('score').innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()* 4))]);
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add('light');
    setTimeout(() => {
        document.getElementById(circ).classList.remove('light');
    }, 400);
}

module.exports = {game, newGame, showScore, addTurn, lightsOn};

