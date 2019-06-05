DMessage("LinksRandom18: start");
main();
DMessage("LinksRandom18: end");
function main()
{
    if(getVar("AV_Link18_NotFirstTime", false))
    {
        AV_Link18_NotFirstTime();
        return;
    }
    setVar("AV_Link18", 0);
    setVar("AV_Link18_NotFirstTime", true);
    AV_Link18_NotFirstTime();
}
function AV_Link18_NotFirstTime()
{
    if (getVar("AV_Link18", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link18", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link18", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link18", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link18", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link18", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link18", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link18", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link18", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link18", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link18", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link18", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link18", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link18", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link18", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link18", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link18", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link18", getVar("AV_Link18", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link18", getVar("AV_Link18", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link18", getVar("AV_Link18", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link18", getVar("AV_Link18", 0) + 1000);
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
    setVar("AV_Link18", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("The Femdom " + random("relationship ", "lifestyle ") + "allows you to " + random("explore ", "enjoy ") + "new sexual pleasures");
    CMessage(random("For example ", "Like ") + "...");
    CMessage("You decide when he is allowed to cum, by locking him in chastity device.");
    CMessage("Chastity device is a powerful tool! You truly control his cock, and it\'s wonderful to know it is caged.");
    CMessage("He is carrying it, but you are the owner. No one besides you decide when it will be released.");
    CMessage("The most precious thing to any male is his cock.");
    CMessage("Losing control on it for you, The key holder, will make him your obedient bitch.");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("You know, in femdom " + random("lifestyle", "relationships"));
    CMessage("the dominant woman has " + random("advantages ", "privileges ") + "that vanilla woman " + random("dont have", "can only dream of"));
    CMessage(random("For example ", "Like ") + "...");
    CMessage("You can train him to be your perfect oral slave.");
    CMessage("Since you are the dominant, and he is your subject, he will eat you on demand anytime.");
    CMessage("It is really worth spending the time and train him how to lick you.");
    CMessage("He is yours and unlike a vanilla man, he will do all efforts to follow your instructions in order to please you.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("The Femdom " + random("relationship ", "lifestyle ") + "allows you to " + random("explore ", "enjoy ") + "new sexual pleasures");
    CMessage(random("For example ", "Like ") + "...");
    CMessage("You can turn him into your sex toy.");
    CMessage("There are many devices you can attach to your submissive and make him your sex slave.");
    CMessage("He will become an object, and his only purpose is to please you.");
    CMessage("Exactly like any sex toy you have, but this human toy can follow voice commands");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    if(getVar("AV_LikeAnal", false))
    {
        AV_Peg();
        return;
    }
    CMessage(random("I want to use you more", "I want to use you hard", "I want use you as hard as I like"));
    CMessage("Because you " + random("deserve it", "deserve to be used", "deserved that"));
    CMessage("I will not hold back");
    CMessage("I\'m so damn horny " + random("%PetName%", "%SubName%"));
    setStrokingNoTaunt();
    return;
    AV_Peg();
}
function AV_Peg()
{
    CMessage("You know, in femdom " + random("lifestyle", "relationships"));
    CMessage("the dominant woman has " + random("advantages ", "privileges ") + "that vanilla woman " + random("dont have", "can only dream of"));
    CMessage(random("For example ", "Like ") + "...");
    CMessage("You can fuck him hard!");
    CMessage("It is such a great fun to fuck him.");
    CMessage("Personally, I love the Feeldoe for this purpose.");
    CMessage("It is built to bring the woman satisfaction when penetrating his ass.");
    CMessage("Since you are the dominant, and he is your slave, you can do it anytime you like.");
    setStrokingNoTaunt();
    return;
}