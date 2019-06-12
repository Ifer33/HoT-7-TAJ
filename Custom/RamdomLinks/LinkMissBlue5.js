DMessage("LinkMissBlue5: start");
main();
DMessage("LinkMissBlue5: end");
function main()
{
    if(getVar("AV_LinkMissBlue5_NotFirstTime", false))
    {
        AV_LinkMissBlue5_NotFirstTime();
        return;
    }
    setVar("AV_LinkMissBlue5", 0);
    setVar("AV_LinkMissBlue5_NotFirstTime", true);
    AV_LinkMissBlue5_NotFirstTime();
}
function AV_LinkMissBlue5_NotFirstTime()
{
    if (getVar("AV_LinkMissBlue5", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkMissBlue5", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_LinkMissBlue5", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkMissBlue5", getVar("AV_LinkMissBlue5", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkMissBlue5", getVar("AV_LinkMissBlue5", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkMissBlue5", getVar("AV_LinkMissBlue5", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkMissBlue5", getVar("AV_LinkMissBlue5", 0) + 1000);
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
    setVar("AV_LinkMissBlue5", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    //setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    CMessage("Is there anything in the world");
    let answer0 = getInput("That is more fun than telling a %PetName% what to do?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("Well of course there is...");
    CMessage("Having actual sex still tops making you squirm, %SubName%");
    CMessage("But it\'s a close second %Smile%");
    //setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("Get ready for more stroking, %PetName%");
    CMessage("Don\'t touch that %Cock% yet, but let your hand hover over it for a second");
    CMessage("Can you feel it?");
    CMessage("Can you feel that hard %Cock% pulling you hand closer like a magnet?");
    CMessage("It\'s a force of nature, you can\'t control it");
    CMessage("That\'s why you need me");
    CMessage("I\'m a force of nature too, %SubName%");
    CMessage("I can\'t keep you from %JerkingOff% of course");
    CMessage("But I can control it, give it direction and purpose");
    CMessage("Feel that animal urge tugging on your hand, pulling it down towards that %Cock%");
    CMessage("Don\'t touch it yet...");
    CMessage("Not until I give you permission");
    CMessage("Get ready...");
    //setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    if(getVar("pvPMEyes", false))
    {
        pvPMEyes();
        return;
    }
    if(getVar("pvPMEno", false))
    {
        pvPMEno();
        return;
    }
    let answer0 = getInput("Do you consider yourself to be a premature ejaculator?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
		if (answer0.isLike("don't understand","not understand","explain","what's that","do you mean","what is"))
		{
			answer0 = getInput("Is it hard to keep yourself from cumming when you\'re %JerkingOff% or having sex?");
		}else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I though you might be, with all this training you do %EmoteWink%");
        setVar("pvPMEyes", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I guess a lifetime of masturbation is paying off then %EmoteWink%");
        setVar("pvPMEno", true);
    }
    if(getVar("pvPMEyes", false))
    {
        pvPMEyes();
        return;
    }
    if(getVar("pvPMEno", false))
    {
        pvPMEno();
        return;
    }
    pvPMEyes();
}
function pvPMEyes()
{
    CMessage("You should learn to control yourself when having sex, %Name%");
	if(getVar("pthevVirgin", false)){
		CMessage("I mean, if you <i>ever</i> get to have sex...");
	}
    CMessage("Because the truth is, to please a girl");
    CMessage("You have to be able to last longer that a minute or two");
    CMessage("Or she\'s not going to want to stick around");
    CMessage("So let\'s get back to some endurance practice %Smile%");
    //setStrokingNoTaunt();
    return;
    pvPMEno();
}
function pvPMEno()
{
    CMessage("Let\'s have some more of that then");
    //setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("When I\'m done with you...");
    CMessage("You\'re going to feel so good that you\'ll feel bad about it");
    CMessage("You won\'t even know the difference between feeling bad and good");
    CMessage("And you won\'t care, %PetName%");
    CMessage("Because you\'re going to want more no matter how it feels %Grin%");
    //setStrokingNoTaunt();
    return;
}