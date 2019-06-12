DMessage("LinksRandom26: start");
main();
DMessage("LinksRandom26: end");
function main()
{
    if(getVar("AV_Link26_NotFirstTime", false))
    {
        AV_Link26_NotFirstTime();
        return;
    }
    setVar("AV_Link26", 0);
    setVar("AV_Link26_NotFirstTime", true);
    AV_Link26_NotFirstTime();
}
function AV_Link26_NotFirstTime()
{
    if (getVar("AV_Link26", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link26", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link26", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link26", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link26", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link26", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link26", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link26", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link26", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link26", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link26", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link26", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link26", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link26", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link26", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link26", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link26", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link26", getVar("AV_Link26", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link26", getVar("AV_Link26", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link26", getVar("AV_Link26", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link26", getVar("AV_Link26", 0) + 1000);
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
    setVar("AV_Link26", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("subs are clueless as to how frustrated they make dommes.");
    CMessage("For example, if I have you all trussed up in an office chair");
    CMessage("mitted hands tied above your head, legs splayed wide so I have access to all your treasures");
    CMessage("you have no idea the dilemma I always find myself in.");
    CMessage("Do I torture those %Balls% until they\'re rosy-red and oh so sore?");
    CMessage("Do I slap that sweet face until you get all glassy-eyed and timid?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I know how much you enjoy being put in your place.");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Do I just grab the ring on that collar and cram my whole strap-on down your throat?");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("I know how you\'re always thinking about my big dick flopping around in that strap-on.");
    }
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I enjoyed using men for my orgasm.");
    CMessage("IF I did reciprocate, I enjoyed doing it for them in a very humiliating way");
    CMessage("like making them masturbate with their pants around their ankles");
    CMessage("or telling them that they had to go out in public and find a quiet spot and jack off in the car for me while I listened.");
    CMessage("I liked making them feel like a pervert or a nasty slut.");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("You know how I started getting into denial and teasing?");
    CMessage("I enjoyed telling men how I would tie them up");
    CMessage("tease their cock and maybe never let them cum.");
    CMessage("Perhaps I would just leave them to jack off by themselves");
    CMessage("or maybe I wouldn\'t satisfy them at all, but get off and hang up on them.");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("At some point of my life, I thought to myself that there was no reason why I should be serving men");
    CMessage("and that they had better serve me.");
    CMessage("That is when I began discovering my power and enjoying domination.");
    CMessage("At first I just talked with men who were into oral servitude.");
    CMessage("I got off on telling them how I was going to put a collar on them");
    CMessage("and lock them between my legs to service me.");
    CMessage("I enjoyed the thought of using them as a sex toy and as an object only to fulfill my needs.");
    //setStrokingNoTaunt();
    return;
}