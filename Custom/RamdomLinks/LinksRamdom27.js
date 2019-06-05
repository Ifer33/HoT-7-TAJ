DMessage("LinksRandom27: start");
main();
DMessage("LinksRandom27: end");
function main()
{
    if(getVar("AV_Link27_NotFirstTime", false))
    {
        AV_Link27_NotFirstTime();
        return;
    }
    setVar("AV_Link27", 0);
    setVar("AV_Link27_NotFirstTime", true);
    AV_Link27_NotFirstTime();
}
function AV_Link27_NotFirstTime()
{
    if (getVar("AV_Link27", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link27", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link27", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link27", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link27", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link27", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link27", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link27", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link27", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link27", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link27", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link27", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link27", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link27", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link27", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link27", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link27", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link27", getVar("AV_Link27", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link27", getVar("AV_Link27", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link27", getVar("AV_Link27", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link27", getVar("AV_Link27", 0) + 1000);
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
    setVar("AV_Link27", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("Grab your %Balls%");
    CMessage("squeeze and keep holding them like that.");
    sleep(12);
    let answer0 = getInput("Do you remember who they belong to?", 5);
    if (answer0.isTimeout())
    {
        xxxcedw4();
        return;
    }
    while (!(answer0.isLike("you") || answer0.isLike("mistress") || answer0.isLike("domme") || answer0.isLike("yours") || answer0.isLike("no")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("Hmm...so, who?");
		}
		else {
			answer0 = getInput("%YesorNo%");
		}
    }
    if (answer0.isLike("you", "mistress", "domme", "yours"))
    {
        CMessage("%GoodBoy%");
        ke450m();
        return;
    }
    xxxcedw4();
	return;
}
function xxxcedw4()
{
    CMessage("Let me help you this one time");
    CMessage("the answer I\'m waiting for is");
    CMessage("\'They belong to you Miss, for your pleasure not my own\'.");
    let answer0 = getInput("Write it now.");
    while (!(answer0.isLike("They") || answer0.isLike("belong") || answer0.isLike("Miss") || answer0.isLike("pleasure")))
    {
        answer0 = getInput("It\'s not correct, %SubName%, try again");
    }
    if (answer0.isLike("They", "belong", "Miss", "pleasure"))
    {
        CMessage("Correct");
    }
    ke450m();
	return;
}
function ke450m()
{
    CMessage("Good, that\'s better, now...");
    CMessage("Let\'s put my property to work.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Take one hand, slowly, oh so slowly, run the palm up your leg towards your balls");
    sleep(10);
    CMessage("that\'s it, now, slowly run it over your balls");
    let answer0 = getInput("Are they full and aching for me?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Squeeze them, slowly");
    CMessage("yes, like that.");
    CMessage("Run your hand over them");
    CMessage("feeling all of them");
    CMessage("your fingers caressing them");
    CMessage("feeling the shape of them");
    CMessage("squeezing them.");
    CMessage("Let it go...");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("You do not need to think, you are mine");
    CMessage("your cock and balls are mine");
    CMessage("all you need to do is listen and obey");
    if (randomInteger(1, 100) <= 50)
    {
        Opt2();
        return;
    }
    let answer0 = getInput("do you think you can do that from now on?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
	Opt3();
    return;
    Opt2();
}
function Opt2()
{
    let answer0 = getInput("do you think you can do that from now on?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Excellent, a good obedient slave is always a delight.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Don\'t test my limits, %PetName%");
        increaseAnger(3)
        cbt();
    }
    Opt3();
	return;
}
function Opt3()
{
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    let answer0 = getInput("%SubName%, who owns you?");
    while (!(answer0.isLike("you")))
    {
        answer0 = getInput("Let\'s try that again, who owns you?");
        increaseAnger(3)
    }
    if (answer0.isLike("you"))
    {
        CMessage("Yes, that\'s right, my property.");
    }
    CMessage("You are mine now");
    CMessage("and to be even more specific, your cock, your balls, they belong to ME now.");
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Only I say when and how they are used");
    }
    CMessage("I allow you to look after them for me, and that is all you are allowed to do.");
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You do NOT... EVER... play with them on your own");
    }
    let answer1 = getInput("is that understood?");
    while (!(answer1.isLike("you") || answer1.isLike("yes")))
    {
        answer1 = getInput("Who owns your %Cock%?");
        increaseAnger(3)
    }
    if (answer1.isLike("you", "yes"))
    {
        CMessage("%GoodBoy%");
    }
    CMessage("You will do everything when and how I say so, no questions, delay or refusal.");
    let answer2 = getInput("Is that clear?",5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    setStrokingNoTaunt();
    return;
}