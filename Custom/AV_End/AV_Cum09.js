DMessage("AV_Cum09: Beginning");
edged=true;
main();
DMessage("AV_Cum09: End");
function main()
{
    CMessage("I\'m going to give you a countdown");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeFaill()");
    CMessage("You will stroke once for every number I say");
    CMessage("Do not edge till I say so...");
    switch(random("Prep01", "Prep02", "Prep03", "Prep04", "Prep05", "StartEdge"))
    {
        case "Prep01":
        Prep01();
        return;
        break;
        case "Prep02":
        Prep02();
        return;
        break;
        case "Prep03":
        Prep03();
        return;
        break;
        case "Prep04":
        Prep04();
        return;
        break;
        case "Prep05":
        Prep05();
        return;
        break;
        case "StartEdge":
        StartEdge();
        return;
        break;
    }
    
    Prep01();
}
function Prep01()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%TieYourBalls%");
    }
    StartEdge();
    return;
    
    Prep02();
}
function Prep02()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%KneelForMe%");
    }
    StartEdge();
    return;
    
    Prep03();
}
function Prep03()
{
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put 4 clothespins on your %Balls%");
        sleep(25);
    }
    StartEdge();
    return;
    
    Prep04();
}
function Prep04()
{
    if(getVar("AV_DommeMistress", false) || getVar("av_fetish_pain", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false) || getVar("av_fetish_pain", false))
    {
        CMessage("%TieYourBalls%");
    }
    if(getVar("AV_DommeMistress", false) || getVar("av_fetish_pain", false))
    {
        CMessage("Put 2 clothespins on your nipples");
        sleep(15);
    }
    StartEdge();
    return;
    
    Prep05();
}
function Prep05()
{
    if(getVar("av_fetish_cei", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
		CMessage("If I let you cum or ruin, you will swallow all of it");
		CMessage("And you don't need to wait for my command, understood?");
    }
    StartEdge();
    return;
    
    StartEdge();
}
function StartEdge()
{
    switch(random("a01", "a02", "a03", "a04"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
        case "a04":
        a04();
        return;
        break;
    }
    
    a01();
}
function a01()
{
	if(!edged){
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d30.mp3");
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(08);
	}if(!edged){
	stopAudio();
    CMessage("%Edge%");
    setVar("edgingmode", "Normal");
    WaitEdge();
	}
    return;
    
    a02();
}
function a02()
{
	if(!edged){
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d40.mp3");
	}if(!edged){
    sleep(15);
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(08);
	}if(!edged){
	stopAudio();
    CMessage("%Edge%");
    setVar("edgingmode", "Normal");
    WaitEdge();
	}
    return;
    
    a03();
}
function a03()
{
	if(!edged){
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d50.mp3");
	}if(!edged){
    sleep(16);
	}if(!edged){
    sleep(08);
	}if(!edged){
    sleep(08);
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(08);
	}if(!edged){
    sleep(08);
	}if(!edged){
    sleep(07);
	}if(!edged){
	stopAudio();
    CMessage("%Edge%");
    setVar("edgingmode", "Normal");
    WaitEdge();
	}
    return;
    
    a04();
}
function a04()
{
	if(!edged){
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d60.mp3");
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(10);
	}if(!edged){
    sleep(08);
	}if(!edged){
	stopAudio();
    CMessage("%Edge%");
    setVar("edgingmode", "Normal");
    WaitEdge();
	}
    return;
    
    WaitEdge();
}
function WaitEdge()
{
    if(!edged){
	setVar("edgingmode", "Goto");
    setVar("edginggoto", "Edgesucess()");
	CMessage("%edgingtaunts1%");
	}if(!edged){
    CMessage("Time is almost over");
    sleep(randomInt(3, 4));
	}if(!edged){
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
	}if(!edged){
    if (getMood() <= 25)
    {
        CMessage("Too slow, %SubName%...");
    }
	}if(!edged){
    if (getMood() <= 25)
    {
        CMessage("But I will give you a new chance");
        StartEdge();
        return;
    }
	}
	edged=true;
    CMessage("Too slow, %SubName%...");
    CMessage("I don\'t think you want to cum so badly...");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Edgesucess();
}
function Edgesucess()
{
	if(!edged){
	stopAudio();
    CMessage("%HoldTheEdge%");
	}if(!edged){
    sleep(randomInt(10, 15));
	}if(!edged){
    setVar("edgingmode", "Normal");
	}
	edged=true;
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
    return;
    
    
    EdgeFaill();
}
function EdgeFaill()
{
	stopAudio();
    CMessage("%stopstroking%", 0);
    CMessage("You\'re not supposed to edge yet, %SubName%...");
    if (getMood() <= 25)
    {
        CMessage("You\'re lucky I am in a good mood and will give you another chance");
    }
    if (getMood() <= 25)
    {
        CMessage("Rest a little...we don\'t want you to faill again...");
        sleep(20);
        StartEdge();
        return;
    }
    if (getMood() >= 75)
    {
        CMessage("You faill with me again");
        setVar("edgingmode", "Normal");
    }
    if (getMood() >= 75)
    {
        CMessage("I think this is a sign to end this session here.");
        NoHappy();
        return;
    }
    CMessage("What to do?");
    if (randomInteger(1, 100) <= 60)
    {
		edged=true;
        NoSecond();
        return;
    }
    CMessage("I will give you another chance");
    CMessage("Rest a little...we don\'t want you to faill again...");
    sleep(20);
    StartEdge();
    return;
    
    
    NoSecond();
}
function NoSecond()
{
    CMessage("I think this is a sign to end this session here.");
    NoHappy();
    return;
    
    NoHappy();
}
function NoHappy()
{
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    
    
    
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
    CMessage("%stopstroking%", 0);
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