main();
function main()
{
	DMessage("LinksRamdom11: Beginning");
    if(getVar("AV_Link11_NotFirstTime", false))
    {
        AV_Link11_NotFirstTime();
        return;
    }
    setVar("AV_Link11", 0);
    setVar("AV_Link11_NotFirstTime", true);
    AV_Link11_NotFirstTime();
	DMessage("LinksRamdom11: End");
	return
}
function AV_Link11_NotFirstTime()
{
    if (getVar("AV_Link11", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link11", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link11", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link11", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link11", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link11", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link11", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link11", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link11", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link11", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link11", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link11", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link11", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link11", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link11", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link11", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link11", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link11", getVar("AV_Link11", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link11", getVar("AV_Link11", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link11", getVar("AV_Link11", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link11", getVar("AV_Link11", 0) + 1000);
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
}
function Fim()
{
    setVar("AV_Link11", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
}
function Link1()
{
    if (getOrgasmChance() == 0)
    {
        CMessage("Good thing I never allow you to cum, because if I did, it would not be some little orgasm where you feel nice and then its over.");
    }
    if (getOrgasmChance() <= 25)
    {
        CMessage("Good thing I rarely allow you to cum, because if I did, it would not be some little orgasm where you feel nice and then its over.");
    }
    if (getOrgasmChance() >= 26)
    {
        CMessage("You know, if I allow you to cum today it\'s not going to be some little orgasm where you feel nice and then its over.");
    }
    CMessage("No, you wont be able to speak, or think");
    CMessage("or do anything except feel your whole body convulsing with pleasure");
    CMessage("as you\'ll feel that orgasm surging through you over and over.");
    let answer0 = getInput("Ah, doesn\'t that sound amazing?", 5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    let answer1 = getInput("To bad your stuck being all frustrated at the moment, huh?", 5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("Just a little more and you know you\'ll totally lose control.");
    CMessage("The pressure builds up as you hover on the edge.");
    CMessage("Your thighs start to quiver.");
    CMessage("Your toes curling up.");
    CMessage("Your whole body begging for more...");
    CMessage("and finally you just begin slip over that edge");
    CMessage("and you know there\'s no going back.");
    CMessage("You feel a rush of ecstasy that becomes more and more intense");
    CMessage("completely taking over your body.");
    Stroking();
    return;
}
function Link3()
{
    CMessage("I\'ve been wondering have you thought about");
    CMessage("what it\'s going to feel like when you finally get the orgasm that your so desperate for?");
    CMessage("I know how amazing it feels when so much frustration and sexual tension get released.");
    CMessage("Just imagine that excitement growing inside you.");
    CMessage("The arousal building up more and more.");
    CMessage("Feeling your heart pounding and your breathing becoming heavy.");
    CMessage("Your body tensing and a wave of pleasure surging through you");
    CMessage("as you feel yourself getting up to the edge.");
    Stroking();
    return;
}
function Link4()
{
    let answer0 = getInput("oh wow, look at you. Oh, you are so desperate aren\'t you?", 5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_desperateResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    let answer1 = getInput("You really want me to touch you that badly don\'t you?", 5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Mmm... I bet you must be so sensitive right now.");
    CMessage("God, just imagine how good my fingers would feel against you.");
    CMessage("Or my lips... or maybe even my tongue..");
    let answer2 = getInput("Is this getting too much for you?", 5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You poor thing..");
    CMessage("Okay I won\'t keep you waiting any longer.");
    Stroking();
    return;
}