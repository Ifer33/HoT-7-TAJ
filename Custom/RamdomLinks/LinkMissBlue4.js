DMessage("LinkMissBlue4: start");
main();
DMessage("LinkMissBlue4: end");
function main()
{
    if(getVar("AV_LinkMissBlue4_NotFirstTime", false))
    {
        AV_LinkMissBlue4_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue4", 0);
    setVar("AV_LinkMissBlue4_NotFirstTime", true);
    AV_LinkMissBlue4_NotFirstTime();
}
function AV_LinkMissBlue4_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue4", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue4", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue4", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue4", getVar("AV_LinkMissBlue4", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue4", getVar("AV_LinkMissBlue4", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue4", getVar("AV_LinkMissBlue4", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue4", getVar("AV_LinkMissBlue4", 0) + 1000);
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
    setVar("AV_LinkMissBlue4", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    Stroking();
    return;
    Link1();
}
function Link1()
{
    CMessage("Whenever it\'s time for me to tell you to stroke again");
    CMessage("There\'s always this little voice in the back of my mind");
    CMessage("It's telling me: <i>why not keep him denied?</i>");
    CMessage("<i>Isn't it way much more fun to leave him hanging?</i>");
    CMessage("Sometimes it\'s hard to not to give in to the voice...");
    CMessage("I do love to deny you your %Cock%, %Name%");
    CMessage("But then I remember why I make you %JerkOff% in the first place");
    CMessage("Because the more you stroke");
    CMessage("The more aroused you become");
    CMessage("And the more you ache when I finally deny your orgasm %Grin%");
    Stroking();
    return;
    Link2();
}
function Link2()
{
    CMessage("%Name%, it\'s too bad you\'re not here with me now");
    let answer0 = getInput("Do you know what I\'d do if you were?", 6);
    if (answer0.isTimeout())
    {
        do_you_know();
        return;
    }
    if (answer0.isLike("beat", "hurt", "whip", "smack", "punch", "spanking", "me"))
    {
        CMessage("Nothing so violent, %Name%");
    }
    else if (answer0.isLike("fuck", "sex", "blowjob"))
    {
        CMessage("%OhNo%");
    }
    else if (answer0.isLike("pussy", "cunnilingus", "pussy", "out"))
    {
        CMessage("That\'s right, %Name%");
    }
    else if (answer0.isLike("kneel", "submit"))
    {
        CMessage("Yes, %PetName%");
    }
    else if (answer0.isLike("stroke", "jerk", "masturbate", "wank"))
    {
        CMessage("%OhNo%");
    }
    else
    {
    }
    do_you_know();
	return;
}
function do_you_know()
{
    CMessage("I\'d tell you to kneel down");
    CMessage("Crawl towards me");
    CMessage("I would open my legs for you and tell you to come closer");
    CMessage("You\'d start kissing my feet, my toes");
    CMessage("Then slowly move up my leg");
    CMessage("Worshipping my ankles and calves and knees");
    CMessage("You\'d graze the tender skin of my inner thighs with your fingers");
    CMessage("Breathe in the scent of my wet %Pussy%");
    //--Command:Worship(Pussy)
    showTaggedImage(4, ["PUSSY"]);
	lockImages();
    //--Command:DommeTag(pussy)
    let answer0 = getInput("Do you want to lick it, %PetName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, you wouldn\'t have a choice anyway");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("If you were here with me, you wouldn\'t have a choice");
    }
    CMessage("Maybe I would tie your hands behind your back");
    CMessage("And shove your face into my %Pussy%");
    CMessage("%EmoteMoan%");
    CMessage("I would teach you to give me orgasm after orgasm...");
    CMessage("Too bad you\'re not here %EmoteSad%");
	unlockImages();
    Stroking();
    return;
    Link3();
}
function Link3()
{
    let answer0 = getInput("Do you need a break %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Too bad, you\'re not getting one %Laugh%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good");
    }
    Stroking();
    return;
    Link4();
}
function Link4()
{
    let answer0 = getInput("Would you like to start stroking again?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("question")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You\'re so predictable %PetName%");
        startstroking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh good, then I can go get myself %SomethingToDrink%");
        getadrink();
        return;
    }
    else if (answer0.isLike("question"))
    {
        CMessage("Ooh you think you\'re clever don\'t you");
    }
    CMessage("No it wasn\'t a trick question");
    cbt("cock");
    CMessage("Let that settle in for a second %PetName%");
    CMessage("Lightly touch the skin of your %Cock% with your fingertips");
    CMessage("Feel how it\'s aching to be stroked again");
    CMessage("I know it\'s ready for more");
    Stroking();
    return;
    getadrink();
}
function getadrink()
{
    CMessage("Don\'t go anywhere %PetName%, and don\'t touch that %Cock%");
    CMessage("You can stare at some %Boobs% in the meantime");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    CMessage("I\'ll be right back!");
    setAFK(true);
    sleep(110);
    CMessage("I\'m here %Smile%");
    setAFK(false);
    unlockImages();
    let answer0 = getInput("Have you been a good boy while I was away?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That makes me very happy %Smile%");
        startstroking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You disappoint me %PetName%");
    }
    CMessage("I gave you two simple instructions: don\'t stroke and stay put");
    let answer1 = getInput("which one did you not follow?");
    while (!(answer1.isLike("first") || answer1.isLike("stroke") || answer1.isLike("stroked") || answer1.isLike("stroking") || answer1.isLike("second") || answer1.isLike("stay") || answer1.isLike("put") || answer1.isLike("staying")))
    {
        answer1 = getInput("Which instruction did you not follow, the first or the second?");
    }
    if (answer1.isLike("first", "stroke", "stroked", "stroking"))
    {
        CMessage("I should have known");
    }
    else if (answer1.isLike("second", "stay", "put", "staying"))
    {
        CMessage("Wow, I would have thought that was the easy part");
    }
    cbt("ball");
    CMessage("I really shouldn\'t have to remind you to follow instructions %PetName%");
    startstroking();
	return;
}
function startstroking()
{
    Stroking();
    return;
}