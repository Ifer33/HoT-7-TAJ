main();
function main()
{
    let answer0 = getInput(random("Would you like to improve your chances of cumming", "Would you like to earn an orgasm today", "Would you like to convincing me to let you cum today"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("That\'s great...for me at least", "Oh goodie...more fun for me", "I wonder if you will regret that decision"));
        setVar("AV_FinalEdgeChance", 0);
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Perhaps that\'s for the best", "Scared? Smart move", "Oh well...maybe you\'ll get lucky next time"));
        NoDeal();
        return;
    }
    CMessage(random("First things first", "Let\'s prepare", "We will need to prepare a bit then"));
    let answer1 = getInput(random("Fetch me clothespins, plenty of them", "Get a whole lot of clothespins", "Clothespins... and be quick about it"));
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("done")))
    {
        answer1 = getInput("Are you ready %SubName%?");
    }
    if (answer1.isLike("yes", "ready", "done"))
    {
        CMessage(random("So this is what we are going to do. And by we...I mean you", "So here are the rules", "So here is your challenge"));
    }
    CMessage(random("Start by adding a clothespin to each nipple...that\'s your prepayment as it were", "Each nipple needs a clothespin...just cause I like it like that", "Attach a clothespin on each nipple...to make sure you are paying attention"));
    sleep(20);
    CMessage(random("Now for each additional clothespin you place on your balls...I will increase your chance of an orgasm", "Every clothespin you are willing to place on your balls will increase you chance to cum", "Every clothespin I see sticking on your balls will make me more likely to let you squirt"));
    let answer2 = getInput(random("How many will you take on?", "So how much clothespins are you willing to suffer to increase your odds?", "So what stakes are you prepared to raise?", "How many will fit on your %Balls%?"));
    while (!(answer2.isLike("0") || answer2.isLike("zero") || answer2.isLike("1") || answer2.isLike("2") || answer2.isLike("3") || answer2.isLike("4") || answer2.isLike("5") || answer2.isLike("6") || answer2.isLike("7") || answer2.isLike("8")))
    {
        answer2 = getInput("Give me a number less than 8 %SubName%");
    }
    if (answer2.isLike("0", "zero"))
    {
        CMessage(random("Ok", "no orgasm for you then", "Funny then I guess we\'re done here", "If you don\'t want to help yourself that\'s fine by me"));
        NoDeal();
        return;
    }
    else if (answer2.isLike("1"))
    {
        CMessage(random("That\'s everything?", "That\'s not all that much... but there is always a chance it\'s enough", "I guess you\'re still feeling lucky"));
        Chance1();
        return;
    }
    else if (answer2.isLike("2"))
    {
        CMessage(random("That\'s everything?", "That\'s not all that much... but there is always a chance it\'s enough", "I guess you\'re still feeling lucky"));
        Chance2();
        return;
    }
    else if (answer2.isLike("3"))
    {
        CMessage(random("That\'s everything?", "That\'s not all that much... but there is always a chance it\'s enough", "I guess you\'re still feeling lucky"));
        Chance3();
        return;
    }
    else if (answer2.isLike("4"))
    {
        CMessage(random("That\'s everything?", "That\'s not all that much... but there is always a chance it\'s enough", "I guess you\'re still feeling lucky"));
        Chance4();
        return;
    }
    else if (answer2.isLike("5"))
    {
        CMessage(random("Better not take any chances...smart thinking", "I guess you really want to cum", "Nice... even if you still don\'t get to cum I applaud the effort"));
        Chance5();
        return;
    }
    else if (answer2.isLike("6"))
    {
        CMessage(random("Better not take any chances...smart thinking", "I guess you really want to cum", "Nice... even if you still don\'t get to cum I applaud the effort"));
        Chance6();
        return;
    }
    else if (answer2.isLike("7"))
    {
        CMessage(random("Better not take any chances...smart thinking", "I guess you really want to cum", "Nice... even if you still don\'t get to cum I applaud the effort"));
        Chance7();
        return;
    }
    else if (answer2.isLike("8"))
    {
        CMessage(random("Better not take any chances...smart thinking", "I guess you really want to cum", "Nice... even if you still don\'t get to cum I applaud the effort"));
        Chance8();
        return;
    }
    Chance1();
}
function Chance1()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 1);
    FateAV();
    return;
    Chance2();
}
function Chance2()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 2);
    FateAV();
    return;
    Chance3();
}
function Chance3()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 3);
    FateAV();
    return;
    Chance4();
}
function Chance4()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 4);
    FateAV();
    return;
    Chance5();
}
function Chance5()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 5);
    FateAV();
    return;
    Chance6();
}
function Chance6()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 6);
    FateAV();
    return;
    Chance7();
}
function Chance7()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 7);
    FateAV();
    return;
    Chance8();
}
function Chance8()
{
    setVar("AV_FinalEdgeChance", getVar("AV_FinalEdgeChance", 0) + 8);
    FateAV();
    return;
    FateAV();
}
function FateAV()
{
    CMessage(random("So let\'s start getting them on then", "Let\'s begin the procedure then %PetName%", "Let\'s hurt those balls"));
    CMessage(random("Oh yeah... you are edging for every clothespin you\'re putting on... did I forget to mention that?", "I had a great idea...you are edging after every clothespin... shouldn\'t be too hard after being so close just now right?", "Just putting the clothespins on would be boring... you will edge after each one for my entertainment!"));
    setVar("EdgeFinalCounter", 0);
    EdgeLoop();
	return;
}
function EdgeLoop()
{
    edge("%Edge%");
    //startEdging();
    CMessage("%CheerEdgeATon%");
    setVar("EdgeFinalCounter", getVar("EdgeFinalCounter", 0) + 1);
    if (getVar("EdgeFinalCounter", 0) >= getVar("AV_FinalEdgeChance", 0))
    {
        FinalEdge();
        return;
    }
    EdgeLoop();
    return;
    FinalEdge();
}
function FinalEdge()
{
    CMessage(random("Great show! Look at those pins dancing", "That was entertaining", "Well I most definitely enjoyed that"));
    CMessage(random("get ready for your second chance! Let\'s see if you picked enough pins", "I guess you are curious whether your balls have earned a release...let\'s find out"));
    CMessage(random("Yes...with the clothespins still on of course", "The clothespins aren\'t going anywhere by the way... if you can edge with them... you can cum with them as well", "And keep on those clothespins...I want to see them shake all over the place"));
    if (getVar("AV_FinalEdgeChance", 0) == 1)
    {
        Final10();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 2)
    {
        Final20();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 3)
    {
        Final30();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 4)
    {
        Final40();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 5)
    {
        Final50();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 6)
    {
        Final60();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 7)
    {
        Final70();
        return;
    }
    if (getVar("AV_FinalEdgeChance", 0) == 8)
    {
        Final80();
        return;
    }
    Final10();
	return;
}
function Final10()
{
    if (randomInteger(1, 100) <= 10)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final20();
}
function Final20()
{
    if (randomInteger(1, 100) <= 20)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final30();
}
function Final30()
{
    if (randomInteger(1, 100) <= 30)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final40();
}
function Final40()
{
    if (randomInteger(1, 100) <= 40)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final50();
}
function Final50()
{
    if (randomInteger(1, 100) <= 50)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final60();
}
function Final60()
{
    if (randomInteger(1, 100) <= 60)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final70();
}
function Final70()
{
    if (randomInteger(1, 100) <= 70)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    Final80();
}
function Final80()
{
    if (randomInteger(1, 100) <= 80)
    {
        AV_Won();
        return;
    }
    AV_Lost();
    return;
    AV_Won();
}
function AV_Won()
{
    CMessage("Give me one last edge");
    startEdging();
    CMessage("%CumForMe%");
	setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    //--Command:UpdateOrgasm
    return;
    AV_Lost();
}
function AV_Lost()
{
    edge("Give me one last edge");
    //startEdging();
    CMessage(random("Just stop it...you haven't earned it. Try harder next time", "Stop jerking...you needed way more clothespins to stand a chance", "Stop, denied again! As if you could ever determine your own faith")+"!");
	setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    NoDeal();
}
function NoDeal()
{
    setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
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