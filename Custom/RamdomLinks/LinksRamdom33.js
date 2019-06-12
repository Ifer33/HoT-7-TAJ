DMessage("LinksRandom33: start");
main();
DMessage("LinksRandom33: end");
function main()
{
    if(getVar("AV_Link33_NotFirstTime", false))
    {
        AV_Link33_NotFirstTime();
        return;
    }
    setVar("AV_Link33", 0);
    setVar("AV_Link33_NotFirstTime", true);
    AV_Link33_NotFirstTime();
}
function AV_Link33_NotFirstTime()
{
    if (getVar("AV_Link33", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link33", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link33", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link33", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link33", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link33", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link33", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link33", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link33", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link33", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link33", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link33", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link33", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link33", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link33", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link33", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link33", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link33", getVar("AV_Link33", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link33", getVar("AV_Link33", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link33", getVar("AV_Link33", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link33", getVar("AV_Link33", 0) + 1000);
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
    setVar("AV_Link33", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("You want more?");
    CMessage("Well, I\'ll let you touch it...in a moment.");
    CMessage("Lightly trace your hands around your cock, but not on it.");
    CMessage("Up and down your thighs, around and around the base...");
    CMessage("but don\'t touch it.");
    CMessage("I want your cock craving for attention.");
    CMessage("And then all it gets is a single finger.");
    CMessage("Slide your finger up and down your shaft, light as a feather.");
    CMessage("It knows something is there, and it wants more.");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("You may grab your %Cock% now");
    CMessage("encase the head in your grip, but don\'t stroke.");
    CMessage("Now tighten your hand.");
    CMessage("Relax.");
    CMessage("Tighten.");
    CMessage("Relax.");
    CMessage("Rhythmically give that head some much needed attention, but no stroking.");
    CMessage("Now tighten your hand and don't stop.");
    CMessage("Keep applying pressure...");
    CMessage("and stop.");
    CMessage("Take a moment...");
    CMessage("then do it again.");
    sleep(10);
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("Take your hands aside and make your cock bounce for me just by clenching your muscles.");
    CMessage("Just like that, good boy.");
    CMessage("Let it bounce desperately before me.");
    CMessage(random("It craves your touch", "It needs my orders"));
    CMessage("Now clench those muscles for a second, then relax.");
    CMessage("Hold it, then bounce again.");
    CMessage("Now clench those muscles and hold it until I say you can stop.");
    CMessage("Almost there...");
    sleep(10);
    CMessage("okay, relax.");
    CMessage("%GoodBoy%");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("I want you to flick your cock for me.");
    CMessage("Not too hard – just enough to feel a little sting.");
    CMessage("Flick your head, your shaft, even your balls...");
    CMessage("just flick everything.");
    CMessage("Use both your hands.");
    CMessage("Now smack it from side to side.");
    CMessage("Back and forth, but in a different kind of way.");
    CMessage("It might hurt a little, but if you do it right it should make you extra hard.");
    CMessage("That\'s right, keep going...");
    CMessage("And stop.");
    //setStrokingNoTaunt();
    return;
}