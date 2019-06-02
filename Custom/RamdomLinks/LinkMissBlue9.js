DMessage("LinkMissBlue9: start");
main();
DMessage("LinkMissBlue9: end");
function main()
{
    if(getVar("AV_LinkMissBlue9_NotFirstTime", false))
    {
        AV_LinkMissBlue9_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue9", 0);
    setVar("AV_LinkMissBlue9_NotFirstTime", true);
    AV_LinkMissBlue9_NotFirstTime();
}
function AV_LinkMissBlue9_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue9", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue9", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue9", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue9", getVar("AV_LinkMissBlue9", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue9", getVar("AV_LinkMissBlue9", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue9", getVar("AV_LinkMissBlue9", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue9", getVar("AV_LinkMissBlue9", 0) + 1000);
    Link4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_LinkMissBlue9", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("%PetName%...");
    let answer0 = getInput("Do you love me?");
    while (!(answer0.isLike("yes") || answer0.isLike("of course") || answer0.isLike("adore you") || answer0.isLike("worship you") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "of course", "adore you", "worship you"))
    {
        CMessage("Aww poor %PetName% %Giggles%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good, because I don\'t love you either");
        love_you_either();
        return;
    }
    CMessage("Let\'s make one thing clear...");
    CMessage("You may love me, but I don\'t need to love you");
    CMessage("I don't even need to <i>care</i> about you, %SubName%");
    love_you_either();
	return;
}
function love_you_either()
{
    CMessage("All I\'m interested in is controlling you");
    CMessage("Controlling your %Cock% and your arousal");
    CMessage("Turning you into a whimpering, leaky mess");
    CMessage("I\'m not interested in you as a person");
    CMessage("And I certainly don\'t love you");
    CMessage("You\'re are a toy for me to play with and nothing more");
	if(getVar("cockTorture",false) ){
		cbt("cock");
	}
    let answer0 = getInput("Would I do the things I do to you if I loved you?", 8);
    if (answer0.isTimeout())
    {
        why_would_I();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("No, %SubName%");
        if_I_loved_you();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I just want to make you suffer, %SubName% %Smile%");
    }
    else
    {
    }
    why_would_I();
	return;
}
function why_would_I()
{
    CMessage("If I loved you, it would be very different %PetName%");
    CMessage("I certainly wouldn\'t torment you the way I do");
    if_I_loved_you();
	return;
}
function if_I_loved_you()
{
    CMessage("If I loved you, I would put my arms around you");
    CMessage("I would whisper sweet and naughty words in your ear");
    CMessage("I would nibble your earlobe and press my body against yours");
    CMessage("I\'d quietly wish for you to ask me out on a candle lit dinner");
    CMessage("I\'d want you to hold me and make love to me");
    CMessage("But that\'s not the way things are");
    CMessage("And they never will be...");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("You know %PetName%...");
    CMessage("There are times I wish I could say I feel sorry for you");
    CMessage("I mean, I can be so cruel to you sometimes");
    CMessage("The truth is though, I <i>love</i> being cruel to you");
    CMessage("So doing those thing makes me happy, and you want to make me happy");
    CMessage("That means I really don\'t have any reason to feel bad about it %Smile%");
	if(getVar("cockTorture",false) ){
		CMessage("I guess I can be as cruel as I want, whenever I want to");
		cbt("cock");
	}
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("You know what I don\'t understand?");
    CMessage("That not more women do this");
    CMessage("I mean, there are so many submissive guys like you out there");
    CMessage("So why don\'t more women take advantage of it??");
    CMessage("And I\'m not just talking of the kind of suffering I inflict on you, %Name%");
    CMessage("I guess you have to be somewhat of a sadist to enjoy that %Grin%");
    CMessage("But if women only understood how many men are naturally submissive...");
    CMessage("There are so many ways to use that in and around the house");
    CMessage("I guess they\'re afraid of hurting the male \'ego\'");
    CMessage("Well, I don\'t have any such qualms about it %Smile%");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("My poor %PetName%");
    CMessage("The things you do for me...");
    CMessage("It's pretty incredible once you stop to think about it");
    CMessage("I make you suffer and somehow that gives you pleasure");
    CMessage("I make you ache and you just ask for more...");
    let answer0 = getInput("Do you want to ache more, %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yes, you do %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh really...");
        oh_really();
        return;
    }
    CMessage("You always want to ache more");
    increaseAnger(-3)
    Stroking();
    return;
    oh_really();
}
function oh_really()
{
    CMessage("That\'s not the answer I wanted from you, %PetName%");
    increaseAnger(3)
    CMessage("But you knew that didn\'t you?");
    CMessage("Maybe you wanted to see what happens when you talk back to me");
    let answer0 = getInput("Is that it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("So you\'re testing me...");
        increaseAnger(3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, you\'re going to find out anyway");
    }
    let answer1 = getInput("What do you think happens now, that I will punish you?");
	while (!(answer1.isLike("yes") || answer0.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("You\'re right about that, %PetName%");
    }
	else if (answer0.isLike("no"))
    {
        CMessage("I <i>am</i> going to punish you, %PetName%");
    }
    if(getVar("ballTorture",false)){
		what_you_wanted();
		return;
	}
    CMessage("But maybe it\'s what you wanted all along");
    CMessage("Because I\'m going to punish you by making you ache even more");
    CMessage("And the more I make you suffer, the better you feel");
    holdEdge();
    CMessage("Maybe you think holding an edge isn\'t much of a punishment");
    CMessage("Let\'s see how you feel about five more...");
    CMessage("Get to the edge, %PetName%");
    DoEdges(5, 5, 100);
    CMessage("And don\'t think you\'ll get much time to recuperate, %PetName%");
    Stroking();
    return;
    what_you_wanted();
}
function what_you_wanted()
{
    CMessage("But maybe it\'s what you wanted");
    CMessage("Because, like I said...");
    CMessage("The more I make you suffer, the better you feel");
    cbt("ball");
    CMessage("You should probably do a couple of edges, too %Grin%");
    CMessage("Get to the edge, %PetName%");
    DoEdges(5, 5, 100);
    CMessage("And don\'t think you\'ll get much time to recuperate, %PetName%");
    Stroking();
    return;
}