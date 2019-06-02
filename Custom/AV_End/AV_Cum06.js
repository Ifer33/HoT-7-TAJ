DMessage("AV_Cum06: Beginning");
main();
DMessage("AV_Cum06: End");
function main()
{
    if (randomInteger(1, 100) <= 33)
    {
        NoMatch();
        return;
    }
    CMessage("Now I\'m going to make you edge for me");
    if (getOrgasmChance() == 0)
    {
        CMessage("And you know I\'m not going to let you come for me %GeneralTime%");
    }
    if (getOrgasmChance() <= 20)
    {
        CMessage("And you know I\'m probably not going to let you come for me %GeneralTime%");
    }
    if (getRuinChance() <= 20 || getRuinChance() == 0)
    {
        CMessage("But will I make you ruin it for me?");
    }
    CMessage("I think you deserve it, but am I feeling that %Mean%?");
    CMessage("Time to find out");
    Continue();
    return;
    
    NoMatch();
}
function NoMatch()
{
    CMessage("I desire for you to kneel for me %Name%");
    CMessage("%KneelForMe%");
    CMessage("and look up at me");
    CMessage("I love putting you in this position");
    CMessage("It\'s a position of %Submission% %Name%");
    CMessage("A position of " + random("subservience ", "%Dedication% ") + "...");
    CMessage("It makes me %Happy% to see you like this");
    CMessage("And since I\'m about to decide if you are allowed to come %GeneralTime%");
    CMessage("I think that it\'s a good position for you to be in");
    CMessage("On your knees in front of me, waiting for me to tell you to edge");
    Continue();
    return;
    
    Continue();
}
function Continue()
{
    CMessage("%StartStroking%");
    CMessage("Now that you know I\'m about to decide your fate");
    CMessage("I\'m going to %Tease% you just a %Little% more");
    CMessage("While you wonder and %Ache% in suspense");
    CMessage("I %Want% for this to be the acheyest edge you\'ve ever felt");
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
    /*startEdging();
    CMessage("%Edge%");
    if (answer-1.isLike("came", "finished", "did"))
    {
        CMessage("%UserCame%");
    }
    else if (answer-1.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        CMessage("You\'re welcome %PetName% %Grin%");
    }
    else
    {
        CMessage("%UserCame%");
    }*/
	edgeToOrgasmHold();
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    if(getVar("av_fetish_cei", false))
    {
        EndCEI();
        return;
    }
    CMessage("I hope you\'ve made an absolute mess %Name%");
    CMessage("Cried out my name and moaned in pleasure as you came");
    CMessage("Shot a little stream across the room for me");
    CMessage("I hope you came so hard %Name%");
    EndFile();
    return;
    
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    //startEdging();
    edge("%Edge%");
    CMessage("%AV_NoCum%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    CMessage("No more stroking, no more edging");
    CMessage("I\'m denying you %GeneralTime%");
    if(getVar("AV_SubKnees", false))
    {
        CMessage("This is why your kneeling %Name%");
    }
    if(getVar("AV_SubKnees", false))
    {
        CMessage("So that you\'ll feel just how much you\'ve %Surrendered% to me");
        CMessage("%How% you've %Surrendered% to <i>my</i> will");
    }
    CMessage("I %Want% to " + random("feel your desperation, and your %Ache%... your need for it", "know I\'m the reason you can\'t have it", "feel your %Submission% to me", "%Think% about you while you\'re in the shower %GeneralTime%"));
    CMessage("I %Want% to know how sensitive you are");
    CMessage("How desperate you are");
    CMessage("I %Want% it to feel like I\'m a Princess");
    CMessage("And you\'re my obedient slave boy %GeneralTime%");
    CMessage("Thank you for letting me deny you %Name%");
    CMessage("Knowing how desperate you are, I'm going to come... <i>so... hard</i> while I'm in the shower %GeneralTime %");
    EndFileNoOrgasm();
    return;
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    /*startEdging();
    CMessage("%Edge%");
    if (answer-1.isLike("ruined", "did"))
    {
        CMessage("Good %Grin%");
    }
    else if (answer-1.isLike("fuck"))
    {
        CMessage("%Grin%");
    }
    else
    {
        CMessage("hehe just calm down now");
    }*/
	edgeToRuinHold();
    CMessage("%AV_UserRuined%");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    if(getVar("AV_SubKnees", false))
    {
        CMessage("This is why youre kneeling %Name%");
        CMessage("%Surrender% to me, %Surrender% to <i>my</i> will");
    }
    CMessage("I %Want% to " + random("feel your desperation, and your %Ache%... your need for it", "know I\'m the reason you can\'t have it", "feel your %Submission% to me", "%Think% about you while you\'re in the shower %GeneralTime%"));
    CMessage("I %Want% to know how sensitive you are");
    CMessage("How desperate you are");
    CMessage("I %Want% it to feel like I\'m a Princess");
    CMessage("And you\'re my obedient slave boy %GeneralTime%");
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
    EndFile();
    return;
    
    EndFileNoOrgasm();
}