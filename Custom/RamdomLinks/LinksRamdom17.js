DMessage("LinksRandom17: start");
main();
DMessage("LinksRandom17: end");
function main()
{
    if(getVar("AV_Link17_NotFirstTime", false))
    {
        AV_Link17_NotFirstTime();
        return;
    }
    setVar("AV_Link17", 0);
    setVar("AV_Link17_NotFirstTime", true);
    AV_Link17_NotFirstTime();
}
function AV_Link17_NotFirstTime()
{
    if (getVar("AV_Link17", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link17", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link17", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link17", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link17", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link17", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link17", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link17", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link17", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link17", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link17", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link17", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link17", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link17", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link17", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link17", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link17", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link17", getVar("AV_Link17", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link17", getVar("AV_Link17", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link17", getVar("AV_Link17", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link17", getVar("AV_Link17", 0) + 1000);
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
    setVar("AV_Link17", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    if(getVar("av_fetish_rough", false))
    {
        av_fetish_rough();
        return;
    }
    CMessage("%KneelForMe%");
    CMessage("Wow! You are really different now.");
    CMessage("You are so tamed and obedient.");
    CMessage("I was a skeptic. I thought I would fail to train you.");
    CMessage("But look at you now at my feet.");
    CMessage("It\'s so cool that I can control you like this.");
    CMessage("I love the new you.");
    CMessage("Now that you are so obedient we can get along.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I could order a small cage for you to sleep at night.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("That will be so cool, Don\'t you think\'");
    }
    CMessage("I will do whatever  I want with you.");
    CMessage("%SitDown%");
    setStrokingNoTaunt();
    return;
    AV_DommeMistress();
}
function AV_DommeMistress()
{
    CMessage("I always wanted to own a slave.");
    CMessage("Now that I turned %DomAge% and moved to my own house, I decided to have one...you");
    CMessage("At first, I planned to have a slave to serve me in anything I need.");
    CMessage("But I discovered the power of having a slave, a toy to play with when ever I want and how I want.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("It satisfies me to humiliate you.");
    }
    CMessage("I have the power to do anything I want with you.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Your life belongs to me, which makes me your god. I am your owner and your religion.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Now bow down before me and swear to your new religion. You will accept me as your only goddess.");
    }
    setStrokingNoTaunt();
    return;
    av_fetish_rough();
}
function av_fetish_rough()
{
    CMessage("You see, three years ago, I discovered I can train males.");
    CMessage("It is very satisfying to bring a savage modern male into his natural place.");
    CMessage("He learns that he has someone above him, a female owner who can take care of him");
    CMessage("and give him a safe zone when he is obedient and follows her orders.");
    CMessage("I consider my work as art.");
    CMessage("Look at you, look how calm and obedient you are.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Yes darling, %domFriend3Name% is allowed to punish you as much as she wants.");
    CMessage("I call her to educate you according to my needs, so you must obey her.");
    CMessage("You are a good %PetName%, but you need to be more obedient.");
    CMessage("You need to know how to serve me as your %Owner%");
    CMessage("I gave %domFriend3Name% a document that described exactly how I want you to be.");
    CMessage("%domFriend3Name% is very experienced in educating slaves.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("You know that I love my pet very much.");
    CMessage("You are my own creation.");
    CMessage("I\'m very pleased to be your %Owner%.");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("Serving me will bring you much more satisfaction.");
    CMessage("Think about it.");
    CMessage("You are the slave...assistance of the HR manager. %Lol%");
    setStrokingNoTaunt();
    return;
}