DMessage("AV_Cum13: Beginning");
main();
DMessage("AV_Cum13: End");
function main()
{
    CMessage("%StartStroking%");
    CMessage("Now that you know I\'m about to decide your fate...");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "FinalEdge()");
    CMessage("Give me one last edge");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("Come on");
    sleep(10);
    CMessage("You want this");
    CMessage("Edge Now...");
    CMessage("%Edge%");
    FinalEdge();
	return;
}
function FinalEdge()
{
    CMessage("Hold the final edge.");
    CMessage("Then you can meet your fate.");
    CMessage("will this one end with your cum finally getting a sweet release?");
    CMessage("How long should I make you hold it?");
    if (randomInteger(1, 100) <= 33)
    {
        S01();
        return;
    }
    CMessage("And you don\'t even know what\'s going to happen yet, do you?");
    CMessage("In truth, I haven\'t decided at this point...");
    S01();
	return;
}
function S01()
{
    CMessage("I\'ve made you do so much %GeneralTime%.");
    CMessage("And it\'s all led to this.");
    CMessage("Holding an edge before the big finish.");
    if (randomInteger(1, 100) <= 33)
    {
        S02();
        return;
    }
    CMessage("Alright, lets just keep going!");
    if(getVar("AV_Denied", false))
    {
        CMessage("As much as I like teasing you. It\'s been so long since you\'ve leaked. So I wanna see that even more!");
    }
    S02();
	return;
}
function S02()
{
    CMessage("I\'m sure you can hold out.");
    CMessage("The fated moment where he gets to orgasm his finally here.");
    var orgasmResult = decideOrgasm();
    if (orgasmResult == 2)
    {
        Orgasm_Allow();
        return;
    }
    else if (orgasmResult == 1)
    {
        Orgasm_Ruin();
        return;
    }
    else if (orgasmResult == 0)
    {
        Orgasm_Deny();
        return;
    }
    
    Orgasm_Allow();
}
function Orgasm_Allow()
{
    CMessage("%CumForMe%");
    CMessage(random("That\'s it", "give me every last drop of that beautiful load", "Enjoy every second of it, you earned it %Name%"));
    CMessage(random("That\'s it squeeze your cock and give me every little bit", "I want your balls completely empty...just for me...."));
    sleep(15);
    CMessage(random("No...just for you...for you %Name%", "all for you...."));
    CMessage("Did that feel good lucky boy?");
    CMessage("Yeah?");
    CMessage("Good....");
    if(getVar("av_fetish_cei", false))
    {
        EndCEI();
        return;
    }
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    CMessage("%stopstroking%", 0);
    CMessage("%AV_NoCum%");
    CMessage(random("Because that's as close as you're ever going to get to fucking cumming for me %GeneralTime%", "STOP!, FUCKING let go!!"));
    CMessage("So close......so...fucking...close....");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    CMessage("%RuinYourOrgasm%");
    CMessage(random("That\'s right, don\'t fucking touch.", "You feel that??? You can\'t?"));
    CMessage("I know...");
    sleep(15);
    CMessage("%AV_UserRuined%");
    CMessage("Well, too bad, %PetName%.");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    
    EndCEI();
}
function EndCEI()
{
    CMessage("Look at all of that cum, what a fucking mess.");
    CMessage("You\'re not going to just wipe that up with a tissue.");
    CMessage("No way, you\'re going to eat it, every single fucking drop!");
    CMessage("Lift your hand up to your mouth.");
    CMessage("That\'s it.");
    CMessage("Now roll your tongue out and start lapping it up.");
    CMessage("Good job, clean up that cum.");
    CMessage("Savour every delicious drop of it.");
    CMessage("Keep licking until your hand is completely clean.");
    CMessage("It tastes so good, so nice on your tongue.");
    CMessage("The way it just coats your throat, slowly dripping down");
    CMessage("mmm there\'s nothing else quite like it.");
    CMessage("Don\'t worry, from now on you\'re going to be tasting a whole hell of a lot of it.");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    EndFile();
}
function EndFile()
{
    if(getVar("AV_EatCum", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            No_CEIav();
            return;
        }
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage("%AV_CumEat%");
        sleep(25);
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%", "You know you like it", "that is pretty disgusting", "T hat is so nasty", "You are so gross", "Better you than me", "Savor this taste in your mouth for a while"));
    }
    No_CEIav();
	return;
}
function No_CEIav()
{
    CMessage("I hope you enjoyed that orgasm %SubName%");
    if(getVar("AV_Persona30", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            PoT();
            return;
        }
    }
    CMessage("Who knows how many you\'re actually going to get?");
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    PoT();
}
function PoT()
{
    CMessage("Now, since you like Post Orgasm Torture");
    CMessage("%StartStroking%");
    sleep(randomInt(10, 20));
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Keep stroking");
        sleep(randomInt(10, 20));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Keep stroking and give yourself a HARD slap every 4 strokes.");
        sleep(randomInt(15, 20));
    }
    CMessage("%Lol%");
    sleep(randomInt(10, 20));
    CMessage("%stopstroking%", 0);
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    
    EndFileNoOrgasm();
}
function EndFileNoOrgasm()
{
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    
    End2();
}
function End2()
{
	setTempVar("Extended_End_BackFromCrush",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
}