DMessage("Extended_End: start");
/*if(getVar("Extended_End_EndScript", false))
{
    EndScript();
    return;
}
if(getVar("Extended_End_BackFromCrush", false))
{
    BackFromCrush();
    return;
}*/
main();
DMessage("Extended_End: end");
function main()
{
	if(getVar("Extended_End_EndScript", false))
	{
		EndScript();
		return;
	}
	if(getVar("Extended_End_BackFromCrush", false))
	{
		BackFromCrush();
		return;
	}
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
    CMessage("%TimeToFindIfYouGetToCum%");
    CMessage("You may remove everything attached to your body!");
    if(getVar("ERSWin", false))
    {
        ERSWin();
        return;
    }
    if(getVar("ERLoss", false))
    {
        ERLoss();
        return;
    }
    if (getMood() >= 70)
    {
        IntroFiles();
        return;
    }
    if (getMood() > 30 && getMood() < 70)
    {
        IntroFiles();
        return;
    }
    if (getMood() <= 30)
    {
        if (randomInteger(1, 100) <= 80)
        {
            IntroFiles();
            return;
        }
    }
    CMessage("I am really happy %GeneralTime%, so...");
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_CumCrush.js");
    return;
    
    IntroFiles();
}
function IntroFiles()
{
    switch(random("FinOp01", "FinOp02", "FinOp03", "FinOp04"))
    {
        case "FinOp01":
        FinOp01();
        return;
        break;
        case "FinOp02":
        FinOp02();
        return;
        break;
        case "FinOp03":
        FinOp03();
        return;
        break;
        case "FinOp04":
        FinOp04();
        return;
        break;
    }
	return;
    FinOp01();
}
function FinOp01()
{
    CMessage("That\'s always the big " + random("moment ", "highlight ") + "of " + random("%GeneralTime% ", "this game ") + "right?");
    CMessage("A " + random("possibility ", "chance ") + "of " + random("a orgasm ", "cumming ") + "after you\'ve been " + random("heavily ", "brutally ") + "teased?");
    CMessage("Tease and denial is " + random("great ", "awesome ") + "isnt it?");
    CMessage("So " + random("uncertain ", "unpredictable ") + "... " + random("such a rush", "all the uncertainty"));
    FinOpEsco();
    return;
    
    FinOp02();
}
function FinOp02()
{
    CMessage("This is it %PetName%, the moment we have been building you up for.");
    CMessage("I know you\'ve been holding it for a long time, but you were almost done!");
    FinOpEsco();
    return;
    
    FinOp03();
}
function FinOp03()
{
    CMessage("Your balls must be all swollen with cum.");
    CMessage("I still haven\'t decided if I\'m going to let you release all of that yet.");
    CMessage("I know this is a LOT of stimulation, but you need to refrain from cumming until I tell you to.");
    FinOpEsco();
    return;
    
    FinOp04();
}
function FinOp04()
{
    CMessage("Oh you are looking so exhausted");
    CMessage("I think you earned a chance to cum!");
    CMessage("I hope you haven\'t thought I just would let you cum.");
    FinOpEsco();
    return;
    
    FinOpEsco();
}
function FinOpEsco()
{
    if(getVar("pvEndRuinByContact3", false) || getVar("pvSwallowNextLoad", false) || getVar("pvBowlOfIce", false))
    {
        File07();
        return;
    }
    switch(random("File01", "File02", "File03", "File04", "File05", "File06", "File07", "File08", "File09", "File10", "File11", "File12", "File13", "File14", "File15", "File16", "CumGlitters", "BackFromCrush"))
    {
        case "File01":
        File01();
        return;
        break;
        case "File02":
        File02();
        return;
        break;
        case "File03":
        File03();
        return;
        break;
        case "File04":
        File04();
        return;
        break;
        case "File05":
        File05();
        return;
        break;
        case "File06":
        File06();
        return;
        break;
        case "File07":
        File07();
        return;
        break;
        case "File08":
        File08();
        return;
        break;
        case "File09":
        File09();
        return;
        break;
        case "File10":
        File10();
        return;
        break;
        case "File11":
        File11();
        return;
        break;
        case "File12":
        File12();
        return;
        break;
        case "File13":
        File13();
        return;
        break;
        case "File14":
        File14();
        return;
        break;
        case "File15":
        File15();
        return;
        break;
        case "File16":
        File16();
        return;
        break;
        case "CumGlitters":
        CumGlitters();
        return;
        break;
        case "BackFromCrush":
        BackFromCrush();
        return;
        break;
    }
    
    File01();
}
function File01()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum01.js");
    return;
    File02();
}
function File02()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum02.js");
    return;
    File03();
}
function File03()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum03.js");
    return;
    File04();
}
function File04()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum04.js");
    return;
    File05();
}
function File05()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum05.js");
    return;
    File06();
}
function File06()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum06.js");
    return;
    File07();
}
function File07()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum07.js");
    return;
    File08();
}
function File08()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum08.js");
    return;
    File09();
}
function File09()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum09.js");
    return;
    File10();
}
function File10()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum10.js");
    return;
    File11();
}
function File11()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum11.js");
    return;
    File12();
}
function File12()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum12.js");
    return;
    File13();
}
function File13()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum13.js");
    return;
    File14();
}
function File14()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum14.js");
    return;
    File15();
}
function File15()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum15.js");
    return;
    File16();
}
function File16()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_Cum16.js");
    return;
    CumGlitters();
}
function CumGlitters()
{
    run("Custom" + java.io.File.separator + "AV_End" + java.io.File.separator + "AV_CumGlitters.js");
    return;
    
    BackFromCrush();
}
function BackFromCrush()
{
    CMessage("Now give yourself a " + random("good ", "nice ") + random("wank ", "jerk ") + random("till ", "until ") + "you\'re really " + random("close", "hard"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(randomInt(10, 20));
    if (randomInteger(1, 100) <= 80)
    {
        NoRuin();
        return;
    }
    if (getRuinChance() == 0)
    {
        NoRuin();
        return;
    }
    CMessage("Now that you\'re so close, is the thought of ruining starting to hurt?");
    CMessage("Is it unbearable? ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("Of course it is");
    }
    CMessage("When submission is easy, it isn\'t submission, is it?");
    NoRuin();
	return;
}
function NoRuin()
{
    CMessage(random("Your obedience makes me %Happy%", "There, that\'s better...that\'s a real hard dick", "Well you look really frustrated now", "I don\'t know if you get any enjoyment out of it, but I most will. And that\'s all that matters of course!"));
    CMessage(random("Stroke faster", "Stroke harder", "I can see that pressure building up so much in your shaft and your head"));
    CMessage(random("Are you close %SubName%? I see it in your eyes", "Beg me... Beg me to cum", "So beg %PetName%, beg for my cum command", "Now tell me, do you want to cum?", "So, you wanna cum?", "Do you want to cum %PetName%?", "I\'ve never seen you get that big before"));
    CMessage("Get " + random("close ", "ready ") + "...");
    if (randomInteger(1, 100) <= 33)
    {
        FimSk01();
        return;
    }
    edge("%Edge%");
    if (randomInteger(1, 100) <= 50)
    {
        FimSk02();
        return;
    }
    if (getRuinChance() >= 0)
    {
        CMessage(random("Tell me that you want to ruin for me ", "You know it will be so pleasurable to ruin for me ") + "because your " + random("suffering ", "obedience ") + "is all the reward you need.");
        if (randomInteger(1, 100) <= 50)
        {
            FimSk03();
            return;
        }
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage(random("Say \'please Mistress %DomName% please let me eat my cum for you\'", "Won\'t it be nice to taste your own cum for me?"));
        if (randomInteger(1, 100) <= 70)
        {
            FimSk03();
            return;
        }
    }
    FimSk02();
	return;
}
function FimSk02()
{
    CMessage(random("Say \'please Mistress %DomName%, Please let me cum\'", "That must have been exhausting", "Come on baby, your cock looks like it\'s ready to cum", "I\'m in complete control of your %Cock%"));
    FimSk03();
	return;
}
function FimSk03()
{
    CMessage(random("Not cumming yet", "I want you to think about shooting that load", "I want you to hold it in"));
    sleep(randomInt(10, 15));
    CMessage("%Stroke% that %Cock%.  But don\'t cum yet.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage(random("Stay close", "You\'re right there aren\'t you?", "A little more"));
    CMessage(random("Tell me you\'re ready", "Beg me to let that %Cock% cum", "It\'s going to feel so good", "Just be a good boy and take it"));
    CMessage(random("Wait for it", "I love when we do this"));
    switch(random("FimSk04", "FimSk05", "FimSk01"))
    {
        case "FimSk04":
        FimSk04();
        return;
        break;
        case "FimSk05":
        FimSk05();
        return;
        break;
        case "FimSk01":
        FimSk01();
        return;
        break;
    }
	return;
    FimSk04();
}
function FimSk04()
{
    DoEdges(2, 3, 0);
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
    FimSk05();
}
function FimSk05()
{
    edge("%Edge%");
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
    FimSk01();
}
function FimSk01()
{
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
    if(getVar("AV_EatCum", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            No_CEIav();
            return;
        }
        CMessage("%AV_CumEat%");
        sleep(25);
        CMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%", "You know you like it", "that is pretty disgusting", "T hat is so nasty", "You are so gross", "Better you than me", "Savor this taste in your mouth for a while"));
    }
    No_CEIav();
	return;
}
function No_CEIav()
{
    CMessage("I hope you enjoyed that orgasm %SubName%");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    if(getVar("AV_Persona30", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            PoT();
            return;
        }
    }
    CMessage("Who knows how many you\'re actually going to get?");
    EndScript();
    return;
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    edge("%Edge%");
    CMessage("%AV_NoCum%");
    if (getOrgasmChance() <= 25 || getOrgasmChance() == 0)
    {
        NoSecondChance();
        return;
    }
    if (getMood() <= 30)
    {
        CMessage("You made me happy %GeneralTime%");
        if (randomInteger(1, 100) <= 50)
        {
            second();
            return;
        }
    }
    if (getVar("AV_PosPoints", 0) > 10)
    {
        Position2Chance();
        return;
    }
    CMessage(random("There\'s no ache like knowing you can\'t cum with a dick so desperate for attention..", "Too bad"));
    if (randomInteger(1, 100) <= 30)
    {
        second();
        return;
    }
    NoSecondChance();
	return;
}
function NoSecondChance()
{
    CMessage(random("you won\'t be getting any more from me %GeneralTime% ", "Better luck next time ") + "%Grin%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndScript();
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
    if(getVar("AV_EatCum", false))
    {
        CMessage("%AV_CumEat%");
        sleep(20);
    }
    CMessage("%AV_UserRuined%");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    if (randomInteger(1, 100) <= 50)
    {
        more_ruin();
        return;
    }
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_FinalTaunt.js");
    CMessage("Better luck next time");
    EndScript();
    return;
    more_ruin();
}
function more_ruin()
{
    CMessage("In fact I love it so much that I\'ll give you a chance to ruin another one for me! %lol%");
    let answer0 = getInput("Do you want?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ohhh");
        EndScript();
        return;
    }
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
        CMessage("Good that means you\'re past your limit!");
        EndScript();
        return;
    }
    CMessage("So let\'s end that session in a bang!");
    CMessage("Or a splurt in this case %lol%");
    CMessage("Gather all your remaining forces and edge a last time");
    edgeToRuinHold();
    CMessage("Alright you can rest");
    EndScript();
    return;
    PoT();
}
function PoT()
{
    CMessage("Now, since you like Post Orgasm Torture");
    CMessage("%StartStroking%");
	setStrokingNoTaunt();
    sleep(20);
    CMessage("Keep stroking and give yourself a HARD slap every 4 strokes.");
    sleep(10);
    CMessage("%Lol%");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    EndScript();
    return;
    second();
}
function second()
{
    CMessage(random("Hold on...", "Wait a second", "Don\'t leave yet!", "Oh, hold on a minute, I have some breaking news!", "Wait a second %SubName%, there has been a development", "Don\'t leave yet, you might be in luck %PetName%"));
    CMessage(random("I\'m actually a bit sorry you did not get to cum", "Well...I guess I\'m a bit dissapointed as well, not as much as you of course", "Poor %PetName%, I almost pity you when you look at me so desperately"));
    CMessage(random("But I\'m feeling somewhat lenient today", "But perhaps I\'ll give you another chance", "You are lucky I\'m in a pretty good mood today however"));
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_CumFun.js");
    EndScript();
	return;
}
function EndScript()
{
    if(getVar("AV_DecOrg", false))
    {
        increaseOrgasmChance(10);
    }
    if(getVar("AV_IncRuin", false))
    {
        increaseRuinChance(-10);
    }
    if(getVar("AV_IncOrg", false))
    {
        increaseOrgasmChance(-10);
    }
    if(getVar("AV_DecRuin", false))
    {
        increaseRuinChance(10);
    }
    delVar("AV_DecOrg");
    delVar("AV_IncRuin");
    delVar("AV_IncOrg");
    delVar("AV_DecRuin");
    CMessage("Thanks for giving me such a good time %GeneralTime% %PetName%");
    CMessage("I can\'t wait to see you again %EmoteHappy% Bye");
    setRapidText(true);
    SMessage("<b>END SESSION REPORT</b>");
	//showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    SMessage("The Domme mood ended in %DomMood%");
    //showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    SMessage("The Domme level ended in %DomLevel%");
    //showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    SMessage("The Domme apathy ended in %DomApathy%");
    //showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Mistress Mode actived in this session");
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        setRapidText(false);
    }
    SMessage("That Status will be reseted in the next session");
    //showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    sleep(10);
    //showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg"); 
    endSession();
    return;
    Position2Chance();
}
function Position2Chance()
{
    CMessage(random("Hold on...", "Wait a second", "Don\'t leave yet!", "Oh, hold on a minute, I have some breaking news!", "Wait a second %SubName%, there has been a development", "Don\'t leave yet, you might be in luck %PetName%"));
    CMessage("Since you did so well with your slave position training...");
    setVar("AV_PosPoints", 0);
    CMessage("I will give you a reward...");
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_CumFun.js");
    EndScript();
    return;
    return;
    
    ERSWin();
}
function ERSWin()
{
    CMessage("I guess I still owe you a orgasm for winning the edge roulette game...");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    run("Interrupt" + java.io.File.separator + "ERWins.js");
    return;
    
    ERLoss();
}
function ERLoss()
{
    CMessage("I guess I still owe you a deny for losing the edge roulette game...");
    run("Interrupt" + java.io.File.separator + "ERLosses.js");
    return;
}