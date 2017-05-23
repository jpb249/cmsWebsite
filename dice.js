// Initialize global variables
var playerScore = 0;
var computerScore = 0;
var gameDone = false;

// Runs when the "Reset" button is clicked
function resetGame()
{

    // Reset global variables
    playerScore = 0;
    computerScore = 0;
    gameDone = false;

    // Reset all the score representations
    document.getElementById("winner").innerHTML = "";
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerRoll").innerHTML = "-";
    document.getElementById("computerRoll").innerHTML = "-";
}

// Runs when the "Roll" utton is clicked
function roll()
{

    // If the game is over, do nothing
    if (gameDone == true)
    {
        return;
    }

    // Calulate two rolls between 1 and 6
    var playerRoll = Math.floor((Math.random() * 6) + 1);
    var computerRoll = Math.floor((Math.random() * 6) + 1);

    // Set the html elements to the rolls
    document.getElementById("playerRoll").innerHTML = playerRoll;
    document.getElementById("computerRoll").innerHTML = computerRoll;

    // If the player's is higher, add one to the score and update
    if (playerRoll > computerRoll)
    {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
    }

    // If the computer's is higher, add one to the score and update
    else if (computerRoll > playerRoll)
    {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
    }

    // If the palyer score is five, end the game and display the message
    if (playerScore == 5)
    {
        document.getElementById("winner").innerHTML = "You Win!";
        gameDone = true;
        return;
    }

    // If the computer score is five, end the game and display the message
    else if (computerScore == 5)
    {
        document.getElementById("winner").innerHTML = "You Lose!";
        gameDone = true;
        return;
    }

}
