main();
function main()
{
	DMessage("AV_Pins Interrupt: Start");
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
    if(!getVar("AV_PinDone", false))
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_GetPins.js");
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            Repeat();
            return;
        }
    }
    if(getVar("AV_Pins", false))
    {
        AV_Pins();
        return;
    }
    CMessage("Now I want to play with your niples a bit while looking at those %Sexy% %Boobs%");
    showTaggedImage(4, ["boobs"]);
    CMessage("So %Sexy%");
    showTaggedImage(4, ["boobs"]);
    CMessage("Now that they are hard and ready...");
    CMessage("Put the clamps on them %PetName% " + "%Grin%");
    CMessage("I hope they don\'t hurt that much...");
    //--Command:BadMood(hurts)
	if( checkOldMood("bad") ){
		hurts();
	}
    skip1();
    return;
    hurts();
}
function hurts()
{
    CMessage("Oh who am I kidding...");
    CMessage("I hope they hurt like HELL!!! %lol%");
    skip1();
}
function skip1()
{
    if(getVar("AV_TaskON", false))
    {
        AV_TaskON();
        return;
    }
    Modulo2();
    return;
    AV_TaskON();
}
function AV_TaskON()
{
    run("Interrupt" + java.io.File.separator + "AV_Tasks.js");
    Modulo2();
}
function Modulo2()
{
    CMessage("Put 1 clothespin on your balls just for fun");
    sleep(10);
    CMessage("I hope you are feeling very uncomfortable %Slave%");
    CMessage("Put 1 clothes pins on your %Balls%");
    setTempVar("AV_Pins", true);
    CMessage("Keep there, till I say to remove");
    return;
    AV_Pins();
}
function AV_Pins()
{
    CMessage("Why do you have so much of those on your body %SubName% %Lol%");
    CMessage("You can remove all clothespins");
    delVar("AV_Pins");
    return;
    Repeat();
}
function Repeat()
{
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_TaskPins.js");
	customTask("AV_TaskPins");
    setTempVar("AV_Pins", true);
    return;
}