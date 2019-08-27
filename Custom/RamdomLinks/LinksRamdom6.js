DMessage("LinksRandom 6: start");
main();
DMessage("LinksRandom 6: end");
function main()
{
    if(getVar("AV_Link6_NotFirstTime", false))
    {
        AV_Link6_NotFirstTime();
        return;
    }
    setVar("AV_Link6", 0);
    setVar("AV_Link6_NotFirstTime", true);
    AV_Link6_NotFirstTime();
}
function AV_Link6_NotFirstTime()
{
    if (getVar("AV_Link6", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link6", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link6", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link6", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link6", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link6", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link6", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link6", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link6", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link6", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link6", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link6", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link6", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link6", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link6", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link6", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link6", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link6", getVar("AV_Link6", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link6", getVar("AV_Link6", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link6", getVar("AV_Link6", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link6", getVar("AV_Link6", 0) + 1000);
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
    setVar("AV_Link6", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("av_submissive_position", false))
    {
        av_submissive_position();
        return;
    }
    CMessage("%secondtime%");
    //setStrokingNoTaunt();
    return;
    av_submissive_position();
}
function av_submissive_position()
{
    CMessage("You will now get into the Submissive Position");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
    lockImages();
    CMessage("and wait until you hear a stroking beat.");
    CMessage("Stroke to the beat and return when it stops");
    unlockImages();
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("I bet that %Cock% is starting to really get it now");
    CMessage("It knows if I told you to ruin an orgasm right now");
    CMessage("It would ache so fucking much it\'d drive you absolutely insane");
    CMessage("And if you\'re even half as smart as your %Cock%, you\'ll know...");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Think about how agonizing it would be to touch yourself again");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("knowing that I\'m not going to give you the orgasm you desperately want...");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Think about that as you reach down and curl your fingers firmly around your cock");
    }
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("I bet you haven't stopped thinking about that %Aching% for a second %Grin%");
    CMessage("That\'s okay, I\'ll just give you something else to focus on for a minute");
    if(getVar("AV_Know_26", false))
    {
        AV_Know_26();
        return;
    }
    CMessage("Which do you think is more frustrating?");
    setVar("AV_Know_26", true);
    CMessage("A- Teased and edged with no release.");
    CMessage("B- Teased, edged, and ruined by just letting go completely after the first spasm.");
    let answer0 = getInput("C- Teased and ruined by closing off the ejaculation with thumb as it is left to spasm with no release.");
    while (!(answer0.isLike("A") || answer0.isLike("B") || answer0.isLike("C")))
    {
        answer0 = getInput("A, B or C %PetName%?");
    }
    if (answer0.isLike("A"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona26a", true);
    }
    else if (answer0.isLike("B"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona26b", true);
    }
    else if (answer0.isLike("C"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona26c", true);
    }
    //setStrokingNoTaunt();
    return;
    AV_Know_26();
}
function AV_Know_26()
{
    CMessage("Like this picture for instance %Grin%");
    getTeasePicture();
    lockImages();
    CMessage("I know you used to stroke yourself to pictures like this all the time");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND02();
        return;
    }
    CMessage("I mean, you still do it for me of course %Lol%");
    CMessage("But looking at images like this was different by yourself");
    CMessage("It\'s not just about how sexy it is");
    CMessage("Or how much it turns you on, no");
    AVRND02();
	return;
}
function AVRND02()
{
    CMessage("It\'s about how it sparks your imagination");
    CMessage("Gives that %Cock% of yours a fleeting glimpse of what\'s sexually possible");
    CMessage("The pleasure that\'s out there for it to feel");
    CMessage("But sometimes, just like this picture");
    unlockImages();
    CMessage("All that pleasure gets snatched away from you forever");
    CMessage("Just when it was starting to feel good %Grin%");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("You know %PetName%...");
    CMessage("If I\'m going to build up ache in those %Balls%");
    CMessage("I mean, enough ache to make sure you <i>never</i> forget");
    CMessage("Then I\'m %Gonna% have to do more than just make you edge");
    CMessage("I\'m %Gonna% have to rough them up a little too %Grin%");
    CMessage("Or more to the point");
    CMessage("<i>You're</i> %Gonna% rough them up for me %Lol%");
	cbt("ball");
    CMessage("Take a little breather %PetName%, I\'m sure you need it %Lol%");
    CMessage("I\'ll even give you something to look at while you do");
    getTeasePicture();
    lockImages();
    CMessage("After all");
    CMessage("I do want to give the pain a chance to subside");
    CMessage("But I don't want that ache to go <i>anywhere</i>");
    CMessage("Here\'s another one that\'s pretty sexy I think");
    getTeasePicture();
    CMessage("But you\'re not %Gonna% have time to enjoy this one");
    unlockImages();
    if(getVar("AV_Know_16", false))
    {
        AV_Know_16();
        return;
    }
    CMessage("%TellMe%");
    CMessage("How long do you think you could stand to submerge your %Cock% and balls in ice water?");
    setVar("AV_Persona14", createInput().getAnswer());
    CMessage("noted %EmoteLaugh%");
    setVar("AV_Know_16", true);
    //setStrokingNoTaunt();
    return;
    AV_Know_16();
}
function AV_Know_16()
{
    CMessage("Because those %Balls% are due for some more busting %Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("All right you can take another little break");
    if (randomInteger(1, 100) <= 60)
    {
        AVRND20();
        return;
    }
    CMessage("And let me show you a few more pictures");
    getTeasePicture();
    CMessage("But don\'t get too comfortable");
    getTeasePicture();
    CMessage("These are just a little sexy diversion");
    getTeasePicture();
    CMessage("Your %Balls% still owe me another round of pounding");
    getTeasePicture();
    CMessage("And it\'s time to collect %Grin%");
    cbt("ball");
    CMessage("Poor %SubName%");
    AVRND20();
}
function AVRND20()
{
    CMessage("I bet those %Balls% are feeling so sensitive right now");
    CMessage("Throbbing with ache");
    CMessage("Getting absolutely battered by all that cum crashing around inside them");
    //setStrokingNoTaunt();
    return;
}