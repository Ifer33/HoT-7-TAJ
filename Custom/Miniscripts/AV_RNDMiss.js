DMessage("AV_RNDMiss: start");
main();
DMessage("AV_RNDMiss: end");
function main()
{
    if(getVar("AV_MiniScript1_NotFirstTime", false))
    {
        AV_MiniScript1_NotFirstTime();
        return;
    }
    setVar("AV_MiniScript1", 0);
    setVar("AV_MiniScript1_NotFirstTime", true);
    AV_MiniScript1_NotFirstTime();
}
function AV_MiniScript1_NotFirstTime()
{
    if (getVar("AV_MiniScript1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_MiniScript1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_MiniScript1", getVar("AV_MiniScript1", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_MiniScript1", getVar("AV_MiniScript1", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_MiniScript1", getVar("AV_MiniScript1", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_MiniScript1", getVar("AV_MiniScript1", 0) + 1000);
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
    setVar("AV_MiniScript1", 0);
    CMessage("Say it out and clear: %AV_RepeatAL% ");
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("%StrokeSlower%");
    slowStroking(3);
    CMessage("Submitting yourself and your freedom to your mistress is quite the commitment.");
    CMessage("Are you ready for that level of commitment?");
    CMessage("Do you have the balls, %Slave%?");
    CMessage("Ive got an invisible leash to put around your cock by way of chastity.");
    CMessage("I will own you like a pet.");
    CMessage("It will seem as if you are walking around freely but you and I both know what hides beneath your pants.");
    CMessage("You and I both know you are under the control of yours truly.");
    CMessage("Your actions are dictated by " + random("my decisions", "your ability to serve me"));
    CMessage("Perhaps, if you are an obedient and GENEROUS slave..");
    CMessage("I may release you from chasity.");
    CMessage("However, if you prove to be a failure..");
    CMessage("you face the possibility of your puny cock being locked away for ETERNITY!");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("%StrokeSlower%");
    slowStroking(3);
    CMessage("You\'re in my world now!");
    CMessage("I have a rule:");
    CMessage("anything that comes into my presence is my property, that\'s just the way it is.");
    CMessage("So that means you\'re mine now, to do with what I will.");
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false) || getVar("av_fetish_rough", false))
    {
        CMessage("I hope you want to be my little bitch slave, because you just lost all your freedom.");
    }
    CMessage("Everything you do now is in the name of pleasing and serving me.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("So kneel down and get ready for a beating.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I\'m a natural sadist, and I want you hurting for me.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You\'re going to suffer a lot, and I\'m going to enjoy it.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank3.mp3");
        wait(12);
		stopAudio();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your ass");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        wait(12);
		stopAudio();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank5.mp3");
        wait(12);
		stopAudio();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%SitDown%");
		restartStroking();
    }
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("%StrokeSlower%");
    slowStroking(3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want you to do something for me, something I\'ve been wanting for a long time");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want you to do something that really brings me pleasure.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want you to hurt yourself for my amusement.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("That\'s right, grab your balls and squeeze them till you cry out in pain.");
    }
    CMessage("You just naturally fall into a submissive state");
    CMessage("In fact the meaner I get the more your like it I\'m sure.");
    CMessage("Don\'t worry your little brain about what to do next");
    CMessage("I\'ll tell you exactly what you need to do.");
    CMessage("I\'ll do the thinking for you from now on.");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("%StrokeSlower%");
    slowStroking(3);
    CMessage("I have some very strict requirements and I don\'t know if you can handle it.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You\'d have to take quite the ballbusting.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("It would be a daily routine for me to kick you in the balls as hard as I can.");
    }
    CMessage("You will be in chastity 24/7, locked up in a steel cage with absolutely no release.");
    CMessage("You will suffer for me.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("You\'re going to learn how to properly suck dick for me as you\'ll be doing that just about every day.");
    }
    CMessage("Your life is now mine.");
    CMessage("You will become my full time submissive and I have complete and total control over you.");
    return;
}