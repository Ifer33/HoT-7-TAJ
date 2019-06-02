DMessage("AV_GlittersTest: Start");
var delay = getVar("sendDelay",-1);
var sender = getVar("sendSender",1);
main();
DMessage("AV_GlittersTest: End");
//delay,sender from other skript
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
    SMessage("%stopstroking%", 0,sender);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    SMessage("We should raise your pulse a bit.", delay,sender);
    if (randomInteger(1, 100) <= 50)
    {
        knees1();
        return;
    }
    getup1();
}
function getup1()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    getup2();
    return;
    Bite1g();
}
function Bite1g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    knees2();
    return;
    getup2();
}
function getup2()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    getup3();
    return;
    Bite2g();
}
function Bite2g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    knees3();
    return;
    getup3();
}
function getup3()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    getup4();
    return;
    Bite3g();
}
function Bite3g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    knees4();
    return;
    getup4();
}
function getup4()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    getup5();
    return;
    Bite4g();
}
function Bite4g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    knees5();
    return;
    getup5();
}
function getup5()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    getup6();
    return;
    Bite5g();
}
function Bite5g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    knees6();
    return;
    getup6();
}
function getup6()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 70)
    {
        getup7();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    Bite6g();
}
function Bite6g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 70)
    {
        knees7();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    getup7();
}
function getup7()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 60)
    {
        getup8();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    Bite7g();
}
function Bite7g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 60)
    {
        knees8();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    getup8();
}
function getup8()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 50)
    {
        getup9();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    Bite8g();
}
function Bite8g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    if (randomInteger(1, 100) <= 50)
    {
        knees9();
        return;
    }
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    getup9();
}
function getup9()
{
    SMessage("Get up!", delay,sender);
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
    SMessage("%KneelForMe%", delay,sender);
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
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    Bite9g();
}
function Bite9g()
{
    SMessage("%Stroke% for me", delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    SMessage("%stopstroking%", 0,sender);
    SMessage("%ThatsEnough%", delay,sender);
    fim();
    return;
    fim();
}
function fim()
{
    SMessage("%SitDown%", delay,sender);
    SMessage("That was %Great%", delay,sender);
    return;
}