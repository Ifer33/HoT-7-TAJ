DMessage("Humiliated: start");
main();
DMessage("Humiliated: end");
function main()
{
    if(getVar("AV_Mem_Humiliated_NotFirstTime", false))
    {
        AV_Mem_Humiliated_NotFirstTime();
        return;
    }
    setVar("AV_Mem_Humiliated", 0);
    setVar("AV_Mem_Humiliated_NotFirstTime", true);
    AV_Mem_Humiliated_NotFirstTime();
}
function AV_Mem_Humiliated_NotFirstTime()
{
    if (getVar("AV_Mem_Humiliated", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Mem_Humiliated", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Mem_Humiliated", getVar("AV_Mem_Humiliated", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Mem_Humiliated", getVar("AV_Mem_Humiliated", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Mem_Humiliated", getVar("AV_Mem_Humiliated", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Mem_Humiliated", getVar("AV_Mem_Humiliated", 0) + 1000);
    Modulo4();
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
    setVar("AV_Mem_Humiliated", 0);
    AV_Mem_Humiliated_NotFirstTime();
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("you\'re a pathetic fucking loser.");
    CMessage("You could never hope to satisfy a woman.");
    if (getVar("cocksize", "NA") == "small")
    {
        CMessage("Well, at least not with that pathetic little baby dick.");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I mean, are you even fucking serious with that thing?");
    }
    if (getVar("cocksize", "NA") == "small")
    {
        CMessage("I can barely see it, are you sure you\'ve gone through puberty?");
    }
    Continue_Humil();
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("Well don\'t worry %PetName%, today is your lucky day.");
    CMessage(random("It just so happens that I enjoy turning pathetic wimpy boys into a %Slave%", "I\'m going to turn you from some worthless loser boy into a total %Slave%."));
    CMessage("Mmm I can tell the idea of this turns you on, %PetName%.");
    Continue_Humil();
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("D/s is not for " + random("weaks", "sissies"));
    CMessage("Well, actually, it is %Lol%");
    CMessage("because there are a whole lot of sissies out there who love the power dynamic.");
    CMessage("But you know what I mean. It\'s tough.");
    Continue_Humil();
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("I will reduce you to a simpleton, who obeys simple commands");
    CMessage("Your are completely in my control and your only desire is to please me and jerk off.");
    CMessage("Go ahead and stroke that %Cock%.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("Whine and moan like the pathetic whore you are.");
    }
    CMessage("But don\'t you dare fucking cum, not unless I give you my permission.");
    CMessage("beta men fight their desires because society tells us that Alphas are the ones to be admired and loved.");
    CMessage("Society is wrong.");
    CMessage("betas who have hidden their true selves get overwhelmed when they share with someone");
    CMessage("and go off and hide.");
    CMessage("%stopstroking%", 0);
    Continue_Humil();
}
function Continue_Humil()
{
    CMessage("%Slave%, " + random("Go to ", "stay in ") + "that position now!");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    wait(15);
    CMessage(random("That\'s better", "That\'s your place %Slave%"));
    CMessage("Look at you, standing there...");
    delVar("AV_MEM_Humil");
    CMessage("yet you\'re " + random("rock ", "fucking ") + "hard");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    CMessage("%SitDown%");
    return;
}