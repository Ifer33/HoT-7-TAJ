DMessage("LinksRandom37: start");
main();
DMessage("LinksRandom37: end");
function main()
{
    if(getVar("AV_Link37_NotFirstTime", false))
    {
        AV_Link37_NotFirstTime();
        return;
    }
    setVar("AV_Link37", 0);
    setVar("AV_Link37_NotFirstTime", true);
    AV_Link37_NotFirstTime();
}
function AV_Link37_NotFirstTime()
{
    if (getVar("AV_Link37", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link37", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link37", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link37", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link37", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link37", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link37", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link37", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link37", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link37", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link37", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link37", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link37", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link37", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link37", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link37", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link37", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link37", getVar("AV_Link37", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link37", getVar("AV_Link37", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link37", getVar("AV_Link37", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link37", getVar("AV_Link37", 0) + 1000);
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
    setVar("AV_Link37", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    
    Link1();
}
function Link1()
{
    CMessage("The more intense the stimulation, the \"worse\" your experience will be!");
    CMessage("You needs a good cock teasing all the time");
    CMessage("This doesn\'t mean you\'re going to have an orgasm....");
    CMessage("But you needs to be hard and brought to the edge of an orgasm again and again");
    setStrokingNoTaunt();
    return;
    
    Link2();
}
function Link2()
{
    if(!getVar("av_fetish_cei", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
        return;
    }
    CMessage("I do expect the cum to end up on a plate or in your hand, or in a glass.");
    CMessage("Then, you will lick it all up just for me");
    CMessage("to show your respect, admiration, and devotion to Me.");
    CMessage("Yes, I know it is a tough thing to do");
    CMessage("but I also know that you, my submissive slut");
    CMessage("will do it to prove how devoted you truly are to Me.");
    setStrokingNoTaunt();
    return;
    
    Link3();
}
function Link3()
{
    if(!getVar("av_fetish_cei", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
        return;
    }
    CMessage("I enjoy men who eat their own cum, and from time to time, I insist on cum eating as a condition of an allowed release.");
    CMessage("See, cum eating shows me how submissive and obedient you are.");
    CMessage("Yes, I realize that MANY men are squeamish about cum eating");
    CMessage("but I do not care!");
    CMessage("As your Mistress, I give the order");
    CMessage("and you strive to give me the very best, biggest, creamiest load of cum you can, and then you eat it.");
    setStrokingNoTaunt();
    return;
    
    Link4();
}
function Link4()
{
    CMessage("You know I have high expectations, and you really do have to do so much work to EARN an orgasm from Me");
    CMessage("But, think of it this way.");
    CMessage("You get so much pleasure from stroking every day");
    CMessage("but teasing that cock gives you a different kind of pleasure");
    CMessage("one that can keep you horny until I say, \"Cum for");
    setStrokingNoTaunt();
    return;
}