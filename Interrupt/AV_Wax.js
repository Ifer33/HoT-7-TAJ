DMessage("AV_Wax: start");
main();
DMessage("AV_Wax: end");
function main()
{
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("Let me test that. Get a candle.");
    let answer0 = getInput("Let me know if you\'re done.");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("Mistress") || answer0.isLike("yeah") || answer0.isLike("yea") || answer0.isLike("sure")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("done", "yes", "Mistress", "yeah", "yea", "sure"))
    {
        CMessage("Move on");
        if (randomInteger(1, 100) <= 50)
        {
            knees1();
            return;
        }
    }
    getup1();
}
function getup1()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite1g();
        return;
    }
    knees2();
    return;
    knees1();
}
function knees1()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite1k();
        return;
    }
    getup2();
    return;
    Bite1k();
}
function Bite1k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    getup2();
    return;
    Bite1g();
}
function Bite1g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    knees2();
    return;
    getup2();
}
function getup2()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite2g();
        return;
    }
    knees3();
    return;
    knees2();
}
function knees2()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite2k();
        return;
    }
    getup3();
    return;
    Bite2k();
}
function Bite2k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    getup3();
    return;
    Bite2g();
}
function Bite2g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    knees3();
    return;
    getup3();
}
function getup3()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite3g();
        return;
    }
    knees4();
    return;
    knees3();
}
function knees3()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite3k();
        return;
    }
    getup4();
    return;
    Bite3k();
}
function Bite3k()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    getup4();
    return;
    Bite3g();
}
function Bite3g()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    knees4();
    return;
    getup4();
}
function getup4()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite4g();
        return;
    }
    knees5();
    return;
    knees4();
}
function knees4()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite4k();
        return;
    }
    getup5();
    return;
    Bite4k();
}
function Bite4k()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    getup5();
    return;
    Bite4g();
}
function Bite4g()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    knees5();
    return;
    getup5();
}
function getup5()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite5g();
        return;
    }
    knees6();
    return;
    knees5();
}
function knees5()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite5k();
        return;
    }
    getup6();
    return;
    Bite5k();
}
function Bite5k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    getup6();
    return;
    Bite5g();
}
function Bite5g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    knees6();
    return;
    getup6();
}
function getup6()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite6g();
        return;
    }
    knees7();
    return;
    knees6();
}
function knees6()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite6k();
        return;
    }
    getup7();
    return;
    Bite6k();
}
function Bite6k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 70)
    {
        getup7();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    Bite6g();
}
function Bite6g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 70)
    {
        knees7();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    getup7();
}
function getup7()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite7g();
        return;
    }
    knees8();
    return;
    knees7();
}
function knees7()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite7k();
        return;
    }
    getup8();
    return;
    Bite7k();
}
function Bite7k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 60)
    {
        getup8();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    Bite7g();
}
function Bite7g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 60)
    {
        knees8();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    getup8();
}
function getup8()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite8g();
        return;
    }
    knees9();
    return;
    knees8();
}
function knees8()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite8k();
        return;
    }
    getup9();
    return;
    Bite8k();
}
function Bite8k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 50)
    {
        getup9();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    Bite8g();
}
function Bite8g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    if (randomInteger(1, 100) <= 50)
    {
        knees9();
        return;
    }
    CMessage("%ThatsEnough%");
    fim();
    return;
    getup9();
}
function getup9()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite9g();
        return;
    }
    fim();
    return;
    knees9();
}
function knees9()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite9k();
        return;
    }
    fim();
    return;
    Bite9k();
}
function Bite9k()
{
    CMessage("Get the candle and drip the wax all over your %Balls%");
    sleep(8);
    CMessage("%Stop%", 0);
    CMessage("%ThatsEnough%");
    fim();
    return;
    Bite9g();
}
function Bite9g()
{
    CMessage("Get the candle and drip the wax all over your %Cock%");
    sleep(8);
    CMessage("%Stop%", 0);
    CMessage("%ThatsEnough%");
    fim();
    return;
    fim();
}
function fim()
{
    CMessage("You can sit now");
    CMessage("That was %Great%");
    return;
    CMessage("%ThatsEnough%");
    return;
}