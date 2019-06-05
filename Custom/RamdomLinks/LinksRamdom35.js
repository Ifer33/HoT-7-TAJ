DMessage("LinksRandom35: start");
main();
DMessage("LinksRandom35: end");
function main()
{
    if(getVar("AV_Link35_NotFirstTime", false))
    {
        AV_Link35_NotFirstTime();
        return;
    }
    setVar("AV_Link35", 0);
    setVar("AV_Link35_NotFirstTime", true);
    AV_Link35_NotFirstTime();
}
function AV_Link35_NotFirstTime()
{
    if (getVar("AV_Link35", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link35", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link35", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link35", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link35", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link35", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link35", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link35", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link35", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link35", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link35", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link35", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link35", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link35", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link35", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link35", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link35", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link35", getVar("AV_Link35", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link35", getVar("AV_Link35", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link35", getVar("AV_Link35", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link35", getVar("AV_Link35", 0) + 1000);
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
    setVar("AV_Link35", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    let answer0 = getInput("Do you hate yourself a little bit for being drawn to me so much?", 8);
    if (answer0.isTimeout())
    {
        hate_it();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("If only you could tear yourself away from me, right? But you can\'t... %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s good to hear that you\'ve completely accepted yourself as a pervert");
    }
    hate_it();
}
function hate_it()
{
    let answer0 = getInput("Let\'s face it, you\'re addicted to staring at me",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        imAddictedToYouResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        imAddictedToYouNotResponse();
    }
    CMessage("You\'re probably addicted to staring at hot girls in general");
    let answer1 = getInput("It\'s not even just me, is it?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You see a hot girl and you just instantly become a drooling mess");
    CMessage("With a huge bulge in is pants");
    if(getVar("cockSmall",false)){
		CMessage("I mean a <i>tiny</i> bulge %Lol%");
	}
    CMessage("Suddenly you\'re reduced to a bulge and a wet spot and little else");
    CMessage("With an intense desire to go home and %JerkOff%");
    CMessage("At least I\'ve got your habit under control, %Name%");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I " + random("like thinking about ", "sometimes imagine ", "think about ") + "what other " + random("girls ", "women ") + random("see when they look at you", "think of you", "are thinking when they see you"));
    CMessage(random("I bet you ", "You probably ", "You must ", "No doubt you ") + random("do it too", "think about that too", "have those kinds of thoughts all the time"));
    CMessage("In a perfect world " + random("every beautiful girl ", "all beautiful women ") + "would in " + random("her own ", "some ") + "way dominate or humiliate you");
    CMessage("<i>If it were up to me, you'd never cum again, period</i>");
    CMessage("<i>I love how sexually frustrated you are</i>");
    CMessage(random("What if ", "Can you imagine if ") + "every girl you meet would actually say those kinds of things to your face? %Laugh%");
    CMessage("Instead, they\'re probably just thinking it...");
	if(getVar("hasChastity",false)){
		CMessage("Get down on your knees and beg me to lock up your cock");
	}else{
		CMessage("Get down on your knees and beg me to let you jerk your cock");
	}
    CMessage("<i>You have no idea how cruel I can be, you're about to find out though...</i>");
    CMessage("Well, they\'re thinking it in your mind, anyway %Laugh%");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("I know you want to...");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    CMessage("But if you stare when I put them on screen");
    CMessage("Then what happens when you see a nice pair of %Boobs% walking down the street");
    showTaggedImage(4, ["boobs"]);
    CMessage("Or in a bar or at the mall or at work");
    CMessage("Or wherever the fuck you get the chance to take a sneak peek");
    showTaggedImage(4, ["boobs"]);
    CMessage("Then you can\'t help but stare at them, that\'s what happens");
    CMessage("Keep your eyes on the chat window now, %SubName%");
    showTaggedImage(4, ["boobs"]);
    CMessage("You know you\'re not supposed to stare, it\'s impolite");
    showTaggedImage(4, ["boobs"]);
    CMessage("It\'s creepy");
    showTaggedImage(4, ["boobs"]);
    CMessage("No peeking at the gorgeous %Boobs% on your screen");
    showTaggedImage(4, ["boobs"]);
    CMessage("Not even for a moment");
    showTaggedImage(4, ["boobs"]);
    showTaggedImage(4, ["boobs"]);
    CMessage("Don\'t");
    showTaggedImage(4, ["boobs"]);
    CMessage("Fucking");
    showTaggedImage(4, ["boobs"]);
    CMessage("Stare");
    showTaggedImage(4, ["boobs"]);
    CMessage("It\'s tough isn\'t it?");
    CMessage("You can look again, %PetName%");
    CMessage("I don\'t mind if you stare at the pictures I show you");
    CMessage("But when you see a hot girl with a great pair of %Boobs% in the real world...");
    showTaggedImage(4, ["boobs"]);
    CMessage("And you\'re bound to get that lucky from time to time...");
    showTaggedImage(4, ["boobs"]);
    CMessage("Well, just try to control yourself when that happens, %SubName%");
    unlockImages();
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("It\'s so easy to %JerkOff%");
    CMessage("It comes so naturally to you...");
    CMessage("The motion of your hand sliding up and down that shaft");
    CMessage("This must be your ultimate safe space");
    CMessage("When you gaze at me or some porn, the world just fades away");
    CMessage("Your only focus is on how good that %Cock% feels in your hand");
    CMessage("Have you noticed how being focussed on that %Cock% and on me have become the same thing?");
    CMessage("After all, I tell you when you can %JerkOff% and when to stop");
    CMessage("You have to concentrate on what I\'m saying while that hand moves up and down");
    CMessage("Because if you didn\'t, you might miss a command");
    CMessage("And you want to make sure that don\'t miss a single thing I say");
    CMessage("How can you obey my commands if you don\'t know the command, right?");
    CMessage("Don\'t lose your focus, %PetName%");
    setStrokingNoTaunt();
    return;
}