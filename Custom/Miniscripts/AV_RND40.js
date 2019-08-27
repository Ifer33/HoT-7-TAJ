DMessage("AV_RND40: start");
main();
DMessage("AV_RND40: end");
function main()
{
    setTempVar("AV_0RND40", true);
    let answer0 = getInput("beg me to torture your balls", 10);
    if (answer0.isTimeout())
    {
        a9hvd();
        return;
    }
    if (answer0.isLike("beg", "please"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        Task();
        return;
    }
    else
    {
        CMessage("%Lol%");
    }
    a9hvd();
}
function a9hvd()
{
    return;
    
    Task();
}
function Task()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("You know what\'s going to happen now, don\'t you?");
    CMessage("And you know it\'s going to hurt...");
    CMessage("Get the spoon and get ready to spank your %Balls%");
    switch(random("SuCBT01", "SuCBT02", "SuCBT03"))
    {
        case "SuCBT01":
        SuCBT01();
        return;
        break;
        case "SuCBT02":
        SuCBT02();
        return;
        break;
        case "SuCBT03":
        SuCBT03();
        return;
        break;
    }
    
    SuCBT01();
}
function SuCBT01()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "001.mp3");
    wait(55);
	stopAudio();
    CMessage("%GoodBoy%");
	restartStroking();
    return;
    SuCBT02();
}
function SuCBT02()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "002.mp3");
    wait(65);
	stopAudio();
    CMessage("%GoodBoy%");
	restartStroking();
    return;
    SuCBT03();
}
function SuCBT03()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "003.mp3");
    wait(70);
	stopAudio();
    CMessage("%GoodBoy%");
	restartStroking();
    return;
}