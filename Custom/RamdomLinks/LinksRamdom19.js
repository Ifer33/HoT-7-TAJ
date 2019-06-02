DMessage("LinksRandom19: start");
main();
DMessage("LinksRandom19: end");
function main()
{
    if(getVar("AV_Link19_NotFirstTime", false))
    {
        AV_Link19_NotFirstTime();
        return;
    }
    setVar("AV_Link19", 0);
    setVar("AV_Link19_NotFirstTime", true);
    AV_Link19_NotFirstTime();
}
function AV_Link19_NotFirstTime()
{
    if (getVar("AV_Link19", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link19", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link19", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link19", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link19", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link19", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link19", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link19", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link19", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link19", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link19", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link19", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link19", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link19", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link19", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link19", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link19", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link19", getVar("AV_Link19", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link19", getVar("AV_Link19", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link19", getVar("AV_Link19", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link19", getVar("AV_Link19", 0) + 1000);
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
    setVar("AV_Link19", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("After all, you have no choice in the matter.");
    CMessage("Resist all you like it is only going to make my domination over you more fun and more enjoyable for me.");
    CMessage("Meanwhile, you are on your knees, serving, and knowing how to be a good submissive %PetName% for your owner.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Knowing  when I am doing my job right, is when your goddess has you whimpering like a little bitch for her to stop.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Knowing  when I am doing my job right, is when your goddess has you whimpering for her to stop.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Are you that little bitch?");
    }
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("I will not stop pushing you.");
    CMessage("I feel the need to be served, and to serve out punishments.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Fortunately enough, I was born to be served by the weaker sex.");
    }
    CMessage("This goddess is destined to be worshiped.");
    CMessage("The mistress you know you want to succumb to.");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("I like being a bad girl and make good men do bad things");
    CMessage("and turn them into my own personal bad boy.");
    CMessage("This can be everything from having you masturbate to my instructions");
    CMessage("or spanking yourself for me");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("Becoming a bad-girl is the way to go, because being a good girl is so over rated.");
    CMessage("Why do you want to be innocent, because take it from a girl like myself");
    CMessage("there is no going back, once you\'ve gone bad youre bad.");
    CMessage("My philosophy is simple go big or go home");
    CMessage("so if you\'re bad, and love to be naughty");
    CMessage("then you\'ve come to the right place");
    Stroking();
    return;
}