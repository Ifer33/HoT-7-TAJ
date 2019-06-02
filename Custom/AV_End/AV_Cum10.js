DMessage("AV_Cum10: Beginning");
main();
DMessage("AV_Cum10: End");
function main()
{
    CMessage("%StartStroking%");
    CMessage(random("You looking really desperate to cum ", "Oh you are looking so exhausted ") + "...");
    CMessage(random("You are not worth cumming", "But you didn\'t suffer enough yet"));
    CMessage("I hope you haven\'t thought I just would let you cum.");
    CMessage("Just a little bit more");
    CMessage("Stay strong and you will be rewarded");
    DoEdges(2, 3, 0);
    CMessage("now that you are really close...");
    CMessage("I\'m gonna give you a countdown...");
    CMessage("and you\'ll get a chance to cum at the end...");
    CMessage("%StartStroking%");
    CMessage("10");
    CMessage("9");
    CMessage("It must be so frustrating not be in charge of your own orgasm.");
    CMessage("8");
    CMessage("But that\'s what you want, isn\'t it...");
    CMessage("7");
    CMessage("You want me to take care of you...");
    CMessage("6");
    CMessage("So just get ready to cum now!");
    CMessage("5");
    CMessage("I know your whole body just wants to fucking orgasm!");
    CMessage("4");
    CMessage("And that\'s what you\'re gonna do...");
    CMessage("3");
    CMessage("2");
    CMessage("Are you ready for that fucking orgasm? Oh god, you must be so close...");
    CMessage("1");
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