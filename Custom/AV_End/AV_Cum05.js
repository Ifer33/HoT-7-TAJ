DMessage("AV_Cum05: Beginning");
main();
DMessage("AV_Cum05: End");
function main()
{
    switch(random("a01", "a02", "a03"))
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
    }
    a01();
}
function a01()
{
    CMessage("So show me, prove how much you would please me");
    setTempVar("AV_Final05_1", true);
    CMessage("%StartStroking%");
    CMessage("But don\'t cum just yet!");
    CMessage("When the day arrives that I allow you to please my pussy");
    CMessage("I need to know it\'s going to be something worth building up to.");
    CMessage("I\'ll count to ten slowly, lets see if you can last that long, I certainly hope so.");
    CMessage("But I won\'t make it easy for you!");
    CountDown();
    return;
    
    a02();
}
function a02()
{
    CMessage("%StartStroking%");
    CMessage("I\'ll give you a countdown, %Name%.");
    setTempVar("AV_Final05_2", true);
    CMessage("Then you can get exactly what you need.");
    CMessage("All because of your dedication to me");
    CountDown();
    return;
    
    a03();
}
function a03()
{
    CMessage("%StartStroking%");
    CMessage("Consider yourself lucky I\'m a kind and generous Mistress");
    setTempVar("AV_Final05_3", true);
    CMessage("I\'m going to count down from 10 to 1.");
    CMessage("You are NOT allowed to cum until I reach 1.");
    CountDown();
    return;
    
    CountDown();
}
function CountDown()
{
    CMessage("10");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Will I make you slide that hard cock between my tits?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("that\'s it, keep going. Stroke, stroke.");
    }
    CMessage("9");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Will I let you cum over my soft round tits, rub your hot load over my stiff pink nipples?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("perv to me, perv to me every day. Stroke, stroke.");
    }
    if(getVar("AV_Final05_3", false))
    {
        CMessage("That\'s it, stroke that %Cock%");
    }
    CMessage("8");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Or maybe I\'ll want to take you in my mouth?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("this is for you. You need this, you CRAVE it. Stroke, stroke.");
    }
    CMessage("7");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Taste your cum as it shoots down my throat?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("Stroke, stroke, stroke.");
    }
    if(getVar("AV_Final05_3", false))
    {
        CMessage("God you\'re fucking horny.");
    }
    CMessage("6");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Oh, but then there\'s my warm, pink pussy!");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("You\'re so good at stroking your cock. Stroke, stroke.");
    }
    CMessage("5");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("I do so love a  hard, thick, long cock in my pussy.");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("Stroke, stroke, stroke.");
    }
    CMessage("4");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("That\'s why I own your cock, so I can enjoy it deep within me. Whenever I want it.");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("my special man. My one and only pervert. Stroke, stroke.");
    }
    if(getVar("AV_Final05_3", false))
    {
        CMessage("Mmm so close now, I bet you can almost taste it.");
    }
    CMessage("3");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Will I want it slow, thrusting deep into me?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("can you feel it building? Are you going to give me your cum? Does your cum have my name and body on it?");
    }
    if(getVar("AV_Final05_3", false))
    {
        CMessage("You\'re so desperate for release aren\'t you?");
    }
    CMessage("2");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Or will I be in a mood for hard and fast, pumping into me as hard as you\'re wanking it now?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("I\'m your porn. Use me, %Name%. Stroke to me. Let me make you happy. Make you complete.");
    }
    if(getVar("AV_Final05_3", false))
    {
        CMessage("Are you going to cum for me, %Name%?");
    }
    CMessage("1");
    sleep(randomInt(2, 4));
    if(getVar("AV_Final05_1", false))
    {
        CMessage("Are you nearly there, have I taken you to the edge?  Can you hold on any longer, will you please me, or disappoint me?");
    }
    if(getVar("AV_Final05_2", false))
    {
        CMessage("Are you ready, %PetName%? You look so ready. You need it so, so badly, don\'t you?");
    }
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
	startEdging("%Edge%");
    let answer0 = getInput("%CumForMe%");
    if (answer0.isLike("came", "finished", "did"))
    {
        CMessage("%UserCame%");
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
    {
        CMessage("You\'re welcome %PetName% %Grin%");
    }
    else
    {
        CMessage("%UserCame%");
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
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
	startEdging("%Edge%");
    let answer0 = getInput("%RuinYourOrgasm%");
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
    CMessage("%AV_UserRuined%");
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