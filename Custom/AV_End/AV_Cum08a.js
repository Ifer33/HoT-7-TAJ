DMessage("AV_Cum08a: Beginning");
main();
DMessage("AV_Cum08a: End");
function main()
{
    CMessage("Why not let %domFriend1Name% decide of your fate? %Grin%");
    addContact(2);
    SMessage("%SubName%! I hope you are happy to see me %Emote%", -1, 2);
    SMessage("Your fate is in my hands!", -1, 2);
    SMessage("So...", -1, 2);
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
    /*let answer0 = getInput("You should edge for me %PetName%", -1, true, 2);
    startEdging();
    if (answer0.isLike("came", "finished", "did"))
    {
        SMessage("Good %Grin%", -1, 2);
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        SMessage("You\'re welcome %PetName% %Grin%", -1, 2);
    }
    else
    {
        SMessage("If you say so you %Crazy% %Emote%", -1, 2);
    }*/
	edgeToOrgasm(-1,2);
    CMessage("I hope you enjoyed that orgasm %SubName%");
    SMessage("I sure did enjoy it %EmoteHappy%", -1, 2);
    CMessage("Let see now...");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    removeContact(2);
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    SMessage("You should edge for me %PetName%", -1, 2);
    startEdging();
    SMessage("I think you can take it %SubName%...", -1, 2);
    SMessage("Hands off", -1, 2);
    SMessage("I\'m sorry, but it is so %Sexy% %EmoteHappy%", -1, 2);
    CMessage("Yes it is %Grin%");
    CMessage("Who knows, maybe next time you will get to cum for %domFriend1Name% %Emote%");
    removeContact(2);
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    /*let answer0 = getInput("You should edge for me %PetName%", -1, true, 2);
    startEdging();
    if (answer0.isLike("ruined", "did"))
    {
        SMessage("%EmoteMoan% %Grin%", -1, 2);
    }
    else if (answer0.isLike("fuck"))
    {
        SMessage("%Grin%", -1, 2);
    }
    else
    {
        SMessage("Poor little thing...", -1, 2);
    }*/
	edgeToRuin(-1,2);
    SMessage("I\'m sorry, but I have to say this...", -1, 2);
    SMessage("%ExclaimFuck%", -1, 2);
    SMessage("It was so fucking %Hot%!", -1, 2);
    CMessage("%Lol%");
    SMessage("Next time %SubName%, if %ShortName%", -1, 2);
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    removeContact(2);
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