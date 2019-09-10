DMessage("End_1_BEG: start");
main();
DMessage("End_1_BEG: end");
function main()
{
    delVar("AV_CrashReport");
    setDate("AVLastSession")
    if (inGroup(2))
    {
        SMessage("%DomName% just call me", -1, 2);
        addContact(1);
    }
    if (inGroup(2))
    {
        CMessage("Sorry %domFriend1Name%, it\'s time to finish the session");
        removeContact(2);
    }
    if (inGroup(3))
    {
        SMessage("%DomName% just call me", -1, 3);
        addContact(1);
    }
    if (inGroup(3))
    {
        CMessage("Sorry %domFriend2Name%, it\'s time to finish the session");
        removeContact(3);
    }
    if (inGroup(4))
    {
        SMessage("%DomName% just call me", -1, 4);
        addContact(1);
    }
    if (inGroup(4))
    {
        CMessage("Sorry %domFriend3Name%, it\'s time to finish the session");
        removeContact(4);
    }
    CMessage("Sounds like you really can\'t take another stroke %Grin%");
    CMessage("I guess I better decide your fate");
    CMessage("But first");
    edge("Give me one last edge");
    CMessage("%SubName%...");
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
    Orgasm_Allow();
}
function Orgasm_Allow()
{
    let answer0 = getInput("Bring yourself to the edge one more time");
    //startEdging();
    if (answer0.isLike("came", "finished", "did"))
    {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        CMessage("You\'re welcome %PetName% %Grin%");
    }
    else
    {
        CMessage("Hehe just calm down now");
    }
    CMessage("I hope you enjoyed that orgasm %SubName%");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    setDate("AVLastOrgasm")
    delVar("AV_Denied");
    CMessage("Who knows how many you\'re actually going to get?");
    EndScript();
    return;
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    edge("Bring yourself to the edge one more time");
    CMessage("Put it back in your pants, you don\'t get to cum now");
    CMessage("Too bad");
    second();
    //return;
    CMessage("Better luck next time %Grin%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndScript();
    return;
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    let answer0 = getInput("Bring yourself to the edge one more time");
    //startEdging();
    if (answer0.isLike("ruined", "did"))
    {
        CMessage("Good %Grin%");
    }
    else if (answer0.isLike("fuck"))
    {
        CMessage("%Grin%");
    }
    else
    {
        CMessage("hehe just calm down now");
    }
    CMessage("I love building up all that pleasure just to snatch it away from you");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setDate("AVLastRuinedOrgasm")
    delVar("AV_Denied");
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    if (randomInteger(1, 100) <= 50)
    {
        more_ruin();
        return;
    }
    CMessage("Better luck next time");
    more_ruin();
}
function more_ruin()
{
    CMessage("In fact I love it so much that I\'ll make you ruin another one for me! %lol%");
    CMessage("%StartStroking%");
    CMessage("I want to see more of your ruined orgasms today!");
    CMessage("I wonder how many I can make you ruin like that %lol%");
    if (getDommeLevel() <= 2)
    {
        dommeLevel1();
        return;
    }
    else if (getDommeLevel() <= 4)
    {
        dommeLevel2();
        return;
    }
    else if (getDommeLevel() <= 6)
    {
        dommeLevel3();
        return;
    }
    else if (getDommeLevel() <= 8)
    {
        dommeLevel4();
        return;
    }
    else if (getDommeLevel() <= 10)
    {
        dommeLevel5();
        return;
    }else{
		dommeLevel3();
        return;
	}
	return;
    DommeLevel5();
}
function DommeLevel5()
{
    DommeLevel4();
	return;
}
function DommeLevel4()
{
    CMessage("Edge for me");
    edgeToRuinHold();
    CMessage("Wow this one must have really hurt %lol%");
    CMessage("But it's way to early to stop!");
    DommeLevel3();
	return;
}
function DommeLevel3()
{
    DommeLevel2();
	return;
}
function DommeLevel2()
{
    CMessage("I want to play with you some more before you ruin again");
    CMessage("Are you dry yet? %lol%");
    CMessage("Let\'s make sure!");
    CMessage("Edge one more time");
    edgeToRuin();
    CMessage("Drip, drip...");
    CMessage("I wonder if you can take more than that...");
    CMessage("Awww, poor boy... I bet you wanted release now. But you can\'t.");
    CMessage("And we are not done with you yet, not even close.");
    DommeLevel1();
	return;
}
function DommeLevel1()
{
    CMessage("I\'m so mean ruining all your orgasms like that");
    CMessage("I\'m sorry! %Grin%");
    CMessage("Well not really... %lol%");
    CMessage("But this time I\'ll let you come, I swear!");
    if (randomInteger(1, 100) <= 20)
    {
        Orgasm_Allow();
        return;
    }
    CMessage("Bring yourself to the edge one more time");
    edgeToRuin();
    CMessage("Well you came... %lol%");
    CMessage("I know i can be so %Mean% to you sometimes");
    let answer0 = getInput("Do you think you can take one more for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("It might be the frustration but you don\'t make sense... Can you take one more yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("ohh I love it when you destroy yourself so willingly %lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good that means you\'re past your limit! Let\'s see how far past it I can make you go %lol%");
    }
    CMessage("So let\'s end that session in a bang!");
    CMessage("Or a splurt in this case %lol%");
    CMessage("Gather all your remaining forces and edge a last time");
    edgeToRuinHold();
    CMessage("Alright you can rest");
    EndScript();
    return;
    second();
}
function second()
{
    CMessage("On second thought");
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_CumFun.js");
    //EndScript();
	return;
}
function EndScript()
{
    if(getVar("AV_DecOrg", false))
    {
        increaseOrgasmChance(8);
    }
    if(getVar("AV_IncRuin", false))
    {
        increaseRuinChance(-8);
    }
    if(getVar("AV_IncOrg", false))
    {
        increaseOrgasmChance(-8);
    }
    if(getVar("AV_DecRuin", false))
    {
        increaseRuinChance(8);
    }
    delVar("AV_DecOrg");
    delVar("AV_IncRuin");
    delVar("AV_IncOrg");
    delVar("AV_DecRuin");
    CMessage("I know I teased you pretty good %GeneralTime%");
    CMessage("But I'm not <i>quite</i> done yet %Grin%");
    CMessage("I\'m sending you some instructions I\'d like you to do for me today");
    CMessage("I think you\'re %Gonna% find them pretty intense %Grin%");
    //--Command:SendDailyTasks
    CMessage("Thanks for giving me such a good time %GeneralTime% %PetName%");
    CMessage("I can\'t wait to see you again %EmoteHappy% Bye");
    setRapidText(true);
    SMessage("<b>END SESSION REPORT</b>");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme mood ended in "+getMood());
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme level ended in "+getDommeLevel());
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme apathy ended in "+getApathyLevel());
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Mistress Mode actived in this session");
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        setRapidText(false);
    }
    SMessage("That Status will be reseted in the next session");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    sleep(10);
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    endSession();
    return;
}