// Global variables used to track clicks and if the game is done
var timesClicked = 0;
var gameDone = false;

// Runs when the button is clicked
function buttonPress()
{

    // If the game is over, do nothing
    if (gameDone == true)
    {
        return;
    }

    // Increment the click counter
    timesClicked++;

    // Update the click display
    document.getElementById("clickDisplay").innerHTML = "Times clicked: " + timesClicked;

    // If the click counter is above 30
    if (timesClicked > 30)
    {

        // If it is an even number, move the button to the right
        if (timesClicked % 2 == 0)
        {
            document.getElementById("gameButton").style.marginLeft = 400;
            document.getElementById("gameButton").style.marginRight = 0;
        }

        // If it is an odd number, move the button to the left
        else
        {
            document.getElementById("gameButton").style.marginRight = 400;
            document.getElementById("gameButton").style.marginLeft = 0;
        }

    }

    // If the click counter is above 60
    if (timesClicked > 60)
    {

        // If the click number is a multiple of three, move button to top
        if (timesClicked % 3 == 0)
        {

            document.getElementById("gameButton").style.marginTop = 200;
            document.getElementById("gameButton").style.marginBottom = 0;

        }

        // If it is not a multiple of three, move button to bottom
        else
        {
            document.getElementById("gameButton").style.marginBottom = 200;
            document.getElementById("gameButton").style.marginTop = 0;
        }

    }

    // If the click counter is 72, change button and hidden text
    if (timesClicked == 72)
    {
        document.getElementById("gameButton").innerHTML = "Don't Click Me!!!";
        document.getElementById("hiddenP").innerHTML = "Click me instead";
    }

    // If the click counter is 73
    if (timesClicked == 73)
    {
        timesClicked = 0;
        document.getElementById("clickDisplay").innerHTML = "Times clicked: 0";
        document.getElementById("gameButton").style.marginLeft = 0;
        document.getElementById("gameButton").style.marginRight = 0;
        document.getElementById("gameButton").style.marginTop = 0;
        document.getElementById("gameButton").style.marginBottom = 0;
        document.getElementById("gameButton").innerHTML = "Click Me!";
        document.getElementById("hiddenP").innerHTML = "";
    }

    if (timesClicked == 100)
    {
        document.getElementById("winDisplay").innerHTML = "Actually, I changed my mind. Click the button 200 times to win.";
    }

    if (timesClicked == 192)
    {
        document.getElementById("gameButton").innerHTML = "Don't Click Me!!!";
        document.getElementById("hiddenP").innerHTML = "Click me instead";
    }

    if (timesClicked == 193)
    {
        timesClicked = 0;
        document.getElementById("clickDisplay").innerHTML = "Times clicked: 0";
        document.getElementById("gameButton").style.marginLeft = 0;
        document.getElementById("gameButton").style.marginRight = 0;
        document.getElementById("gameButton").style.marginTop = 0;
        document.getElementById("gameButton").style.marginBottom = 0;
        document.getElementById("gameButton").innerHTML = "Click Me!";
        document.getElementById("hiddenP").innerHTML = "";
    }

    if (timesClicked == 200)
    {
        document.getElementById("winDisplay").innerHTML = "Congrats! You Win!";
        gameDone = true;
    }

}

// Runs when the hidden text is clicked
function hiddenClick()
{
    timesClicked++;
    document.getElementById("clickDisplay").innerHTML = "Times clicked: " + timesClicked;
    document.getElementById("hiddenP").innerHTML = "";
    document.getElementById("gameButton").innerHTML = "Click Me!";
}
