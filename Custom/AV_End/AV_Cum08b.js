DMessage("AV_Cum08b: Beginning");
main();
DMessage("AV_Cum08b: End");
function main()
{
    CMessage("Why not let %domFriend2Name% decide of your fate? %Grin%");
    addContact(3);
    SMessage("%Grin%", -1, 3);
    SMessage("It seems I came in at the perfect timing %PetName%!", -1, 3);
    SMessage("Let see...", -1, 3);
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
    /*let answer0 = getInput("You should edge for us %PetName%", -1, true, 3);
    startEdging();
    if (answer0.isLike("came", "finished", "did"))
    {
        SMessage("Good %Grin%", -1, 3);
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        SMessage("You\'re welcome %PetName% %Grin%", -1, 3);
    }
    else
    {
        SMessage("If you say so you %Crazy% %Emote%", -1, 3);
    }*/
	edgeToOrgasm(-1,3);
    CMessage("I hope you enjoyed that orgasm %SubName%");
    SMessage("I sure did enjoy watching it happen %EmoteHappy%", -1, 3);
    CMessage("Let see now...");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    removeContact(3);
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    SMessage("You should edge for us %PetName%", -1, 3);
    startEdging();
    SMessage("Slap your dick %FiveToFifteen% times %PetName%!", -1, 3);
    SMessage("You are right, you won\'t cum %GeneralTime%", -1, 3);
    CMessage("Too bad");
    CMessage("Better luck next time %Grin%");
    SMessage("Maybe :D", -1, 3);
    removeContact(3);
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    /*let answer0 = getInput("You should edge for us %PetName%", -1, true, 3);
    startEdging();
    if (answer0.isLike("ruined", "did"))
    {
        SMessage("%EmoteMoan% %Grin%", -1, 3);
    }
    else if (answer0.isLike("fuck"))
    {
        SMessage("%Grin%", -1, 3);
    }
    else
    {
        SMessage("Poor little thing... %Lol%", -1, 3);
    }*/
	edgeToRuin(-1,3);
    SMessage("You are not alive until you just remove an Orgasm from %PetName% like you", -1, 3);
    SMessage("You should be proud, I did enjoy this!", -1, 3);
    CMessage("Too bad %SubName% %Lol%");
    CMessage("Better luck next time");
    SMessage("Maybe %EmoteHappy%", -1, 3);
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    removeContact(3);
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