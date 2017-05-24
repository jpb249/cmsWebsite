var timesClicked = 0;
var gameDone = false;

function buttonPress()
{

    if (gameDone == true)
    {
        return;
    }

    timesClicked++;

    document.getElementById("clickDisplay").innerHTML = "Times clicked: " + timesClicked;

    if (timesClicked > 30)
    {

        if (timesClicked % 2 == 0)
        {
            document.getElementById("gameButton").style.marginLeft = 400;
            document.getElementById("gameButton").style.marginRight = 0;
        }
        else
        {
            document.getElementById("gameButton").style.marginRight = 400;
            document.getElementById("gameButton").style.marginLeft = 0;
        }

    }

    if (timesClicked > 60)
    {
        if (timesClicked % 3 == 0)
        {
            document.getElementById("gameButton").style.marginTop = 200;
            document.getElementById("gameButton").style.marginBottom = 0;
        }
        else
        {
            document.getElementById("gameButton").style.marginBottom = 200;
            document.getElementById("gameButton").style.marginTop = 0;
        }

    }

    if (timesClicked == 72)
    {
        document.getElementById("gameButton").innerHTML = "Don't Click Me!!!";
        document.getElementById("hiddenP").innerHTML = "Click me instead";
    }

    if (timesClicked == 73)
    {
        timesClicked = 0;
        document.getElementById("clickDisplay").innerHTML = "Times clicked: 0";
        document.getElementById("gameButton").style.marginLeft = 0;
        document.getElementById("gameButton").style.marginRight = 0;
        document.getElementById("gameButton").style.marginTop = 0;
        document.getElementById("gameButton").style.marginBottom = 0;
        document.getElementById("gameButton").innerHTML = "Click Me!";
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
    }

    if (timesClicked == 200)
    {
        document.getElementById("winDisplay").innerHTML = "Congrats! You Win!";
        gameDone = true;
    }

}

function hiddenClick()
{
    timesClicked++;
    document.getElementById("clickDisplay").innerHTML = "Times clicked: " + timesClicked;
    document.getElementById("hiddenP").innerHTML = "";
    document.getElementById("gameButton").innerHTML = "Click Me!";
}
