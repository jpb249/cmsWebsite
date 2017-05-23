var playerScore = 0;
var computerScore = 0;
var gameDone = false;

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    gameDone = false;

    document.getElementById("winner").innerHTML = "";
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerRoll").innerHTML = "-";
    document.getElementById("computerRoll").innerHTML = "-";
}

function roll()
{

    if (gameDone == true)
    {
        return;
    }

    var playerRoll = Math.floor((Math.random() * 6) + 1);
    var computerRoll = Math.floor((Math.random() * 6) + 1);

    document.getElementById("playerRoll").innerHTML = playerRoll;
    document.getElementById("computerRoll").innerHTML = computerRoll;

    if (playerRoll > computerRoll)
    {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    }
    else if (computerRoll > playerRoll)
    {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
    }

    if (playerScore == 5)
    {
        document.getElementById("winner").innerHTML = "You Win!";
        gameDone = true;
        return;
    }
    else if (computerScore == 5)
    {
        document.getElementById("winner").innerHTML = "You Lose!";
        gameDone = true;
        return;
    }

}
