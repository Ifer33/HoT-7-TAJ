DMessage("LinksRandom 7: start");
main();
DMessage("LinksRandom 7: end");
function main()
{
    if(getVar("AV_Link7_NotFirstTime", false))
    {
        AV_Link7_NotFirstTime();
        return;
    }
    setVar("AV_Link7", 0);
    setVar("AV_Link7_NotFirstTime", true);
    AV_Link7_NotFirstTime();
}
function AV_Link7_NotFirstTime()
{
    if (getVar("AV_Link7", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link7", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link7", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link7", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link7", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link7", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link7", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link7", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link7", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link7", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link7", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link7", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link7", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link7", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link7", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link7", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link7", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link7", getVar("AV_Link7", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link7", getVar("AV_Link7", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link7", getVar("AV_Link7", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link7", getVar("AV_Link7", 0) + 1000);
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
    setVar("AV_Link7", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("I\'m the kind of woman the likes to be in charge");
    setTempVar("AVp002", true);
    CMessage("and from my understanding, you\'re the kind of man that likes to be told what to do.");
    CMessage("Basically, I want you to agree to let me own your %Cock%.");
    CMessage("You do with it only what I tell you to, when I tell you to.");
    delVar("AVp002");
    CMessage("What you get out of this is just that... you get to completely give up control.");
    CMessage("It just ensures that, in fact, I do own your cock...");
    CMessage("it just happens to be attached to your body, but it will be my property.");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("So I gotta tell you");
    CMessage("I\'ve been getting really into this arrangement we have here");
    CMessage("and I decided to do a little research on male chastity. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("Really interesting stuff!");
    }
    CMessage("I mean, all I really knew is that it\'s fun to make guys want to cum,");
    CMessage("and the longer it\'s been since they came, the more they want it...");
    CMessage("but there\'s SO much more to it than that!");
    CMessage("I had NO IDEA how long some of these guys go without cumming!");
    CMessage("I mean, we\'re talking months!");
    CMessage("I thought maybe a week or 2 was a lot.");
    CMessage("And not only that, most of these guys spend whole weeks in their chastity cages without getting out for any reason at all...");
    CMessage("complete 24/7 lockdown.");
    CMessage("So needless to say, all this got me thinking about our little arrangement.");
    CMessage("I mean, let\'s be honest.");
    CMessage("I have complete control over your %Cock%");
    CMessage("and I love to tease it as much as you probably,");
    CMessage("but the truth is, your level of aching is nowhere near some of these other guys, ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("and that kinda upsets me. I'm not mad at you of course... you're just doing what I say");
    }
    CMessage("It\'s just, I don\'t know..");
    Stroking();
    return;
    Link3();
}
function Link3()
{
    CMessage("You know...");
    CMessage("a true Goddess should also be revengeful sometimes");
    CMessage("Otherwise her flock will go astray... %Grin%");
    CMessage("So I guess It\'s time to punish you for your own good!");
    cbt();
    CMessage("I hope you learned your lesson");
    CMessage("But I suspect you to enjoy those punishments a little too much %Emote%");
    Stroking();
    return;
    Link4();
}
function Link4()
{
    CMessage("Having you worship my feet all the time would be quite nice ");
    if (randomInteger(0, 100) <= -1)
    {
        CMessage("Kissing them...");
    }
    CMessage(random("Rubbing them", "Licking them"));
    CMessage("Sucking my toes...");
    CMessage("All while I deny you any %Pleasure%! %lol%");
    CMessage("Not that you would need any other %Pleasure% than my perfect feet %Emote%");
    CMessage("I would work extra hard at the gym knowing I have my %PetName% waiting for me at home");
    CMessage("Your tongue out and ready for my feet the second I open the door! %Grin% ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("I bet that makes you super horny!!! %lol%");
    }
    CMessage("Keep thinking about it and let\'s see if I can make you even more obedient");
    Stroking();
    return;
}