let userRoundTotal = 0;
let opponentRoundTotal = 0;
let userTotal = 0;
let opponentTotal = 0;
let rollCount = 0;
// let popUpFade = document.getElementById('game-end-pop-up');

let dice = [];
for (i = 0; i < 6; i++) {
    dice[i] = {
        value: i + 1,
        src: "./../dice-imgs/dice-" + (i + 1) + ".png"
    }
}



function rollDice() {

    const userDiceRoll_1 = rollDie()
    const userDiceRoll_2 = rollDie()
    const opponentDiceRoll_1 = rollDie()
    const opponentDiceRoll_2 = rollDie()

    document.getElementById("dice1").innerHTML = `
        <img src="${dice[userDiceRoll_1].src}" alt="dice">
        <img src="${dice[userDiceRoll_2].src}" alt="dice">
        `
    document.getElementById("dice2").innerHTML = `
        <img src="${dice[opponentDiceRoll_1].src}" alt="dice">
        <img src="${dice[opponentDiceRoll_2].src}" alt="dice">
        `
    userRoundTotal = calculateScore(userDiceRoll_1 + 1, userDiceRoll_2 + 1)
    opponentRoundTotal = calculateScore(opponentDiceRoll_1 + 1, opponentDiceRoll_2 + 1)
}

function rollDie() {
    let roll = Math.floor((Math.random() * (6 - 1)) + 1)
    return roll
}

function calculateScore(die1, die2) {
    if (die1 == 1 || die2 == 1) {
        return roundScore = 0;
    } else {
        if (die1 === die2) {
            return roundScore = (die1 + die2) * 2;
        } else {
            return roundScore = die1 + die2;
        }
    }
}



document.getElementById('roll-dice').addEventListener('click', function () {
    rollCount++;
    rollDice();

    userTotal += userRoundTotal;
    opponentTotal += opponentRoundTotal;

    document.getElementById('userRound').innerText = userRoundTotal;
    document.getElementById('opponentRound').innerText = opponentRoundTotal;
    document.getElementById('userTotal').innerText = userTotal;
    document.getElementById('opponentTotal').innerText = opponentTotal;
    document.getElementById('roundNumber').innerText = rollCount;



    if (rollCount == 3) {
        if (userTotal > opponentTotal) {
            document.getElementById('winner').innerText = "You Win!"
        } else if (userTotal < opponentTotal) {
            document.getElementById('winner').innerText = "Opponent Wins!"
        } else {
            document.getElementById('winner').innerText = "Tie!"
        }

        document.getElementById("userScore").innerText = userTotal;
        document.getElementById("opponentScore").innerText = opponentTotal;

        document.getElementById('roll-dice').setAttribute("disabled", "disabled");

        setTimeout(() => {
            document.getElementById('game-end-pop-up').hidden = false;
        }, 300);
    }
});

document.getElementById('new-game').addEventListener('click', function () {
    location.reload();
});
document.getElementById('playAgain').addEventListener('click', function () {
    location.reload();
});
