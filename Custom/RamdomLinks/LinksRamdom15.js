DMessage("LinksRandom15: start");
main();
DMessage("LinksRandom15: end");
function main()
{
    if(getVar("AV_Link15_NotFirstTime", false))
    {
        AV_Link15_NotFirstTime();
        return;
    }
    setVar("AV_Link15", 0);
    setVar("AV_Link15_NotFirstTime", true);
    AV_Link15_NotFirstTime();
}
function AV_Link15_NotFirstTime()
{
    if (getVar("AV_Link15", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link15", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link15", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link15", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link15", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link15", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link15", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link15", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link15", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link15", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link15", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link15", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link15", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link15", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link15", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link15", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link15", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link15", getVar("AV_Link15", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link15", getVar("AV_Link15", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link15", getVar("AV_Link15", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link15", getVar("AV_Link15", 0) + 1000);
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
    setVar("AV_Link15", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("av_fetish_rough", false))
    {
        CMessage("What do I do with hand humpers like you?");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("It\'s obvious that you have a thing for my FEET.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I\'m so much better then you and you\'re so pathetic.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I\'m going to let you jerk off as you worship my perfect feet");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("but it\'s going to cost you.");
    }
    CMessage("Im making you do whatever I want from now on");
    CMessage("Im going to control you like no one has ever before.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I might even make you eat your own cum.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("You\'re just a below the ankle foot slave");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("in fact you can only kiss the bottom of my feet thats all you get because youre that much of a slave.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Have a shot glass ready because guys that fuck their hands have to eat their own cum when I say so.");
    }
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("You can tell me anything, you know that.");
    CMessage("You\'ve already confided in me so much.");
    CMessage("I\'m the one who knows your " + random("deepest desires", "darkest fantasies"));
    CMessage("It\'s like this is the place you feel most at home, most sated and entertained.");
    CMessage("My control over you is so effortless.");
    CMessage("I reel you back in without batting an eye, because I have you hook line and sinker forever.");
    CMessage("My bait is so deeply rooted within you that I know you\'re never getting away.");
    CMessage("And deep down you don\'t want to leave.");
    CMessage("This is the best virtual sex of your life.");
    CMessage("So edge for me, lose your mind for me, cum for me.");
    CMessage("Every time you try to run away this is how you\'re left.");
    CMessage("Defeated.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("In the future, women will rule the world and all men will be slaves.");
    setTempVar("AVLink15_3", true);
    CMessage("Males will only exist to be punished for the amusement of superior females.");
    CMessage("There will even be parks and playgrounds with slaves tied to posts");
    CMessage("ready to be whipped and kicked in the balls.");
    delVar("AVLink15_3");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    if(getVar("pvCollared", false))
    {
        AlreadyCollar();
        return;
    }
    if(getVar("AV_WantCollar", false))
    {
        collar_einstieg();
        return;
    }
    CMessage("You should get collared.");
    //--Command:YesMode(Goto,CollarYes)
	answer0=getInput("What you think?",3);
	if(answer0.isLike("yes")){
		CollarYes()
		return;
	}
	answer1=getInput("What kind of collar would be right for you?",3);
	if(answer1.isLike("yes")){
		CollarYes()
		return;
	}
	answer2=getInput("dawg collar or a full metal slave collar, %Lol%!",3);
	if(answer2.isLike("yes")){
		CollarYes()
		return;
	}
	answer3=getInput("Maybe you should get a sharp spike collar",3);
	if(answer3.isLike("yes")){
		CollarYes()
		return;
	}
	answer4=getInput("that tightens into your neck when I pull on it!",3);
	if(answer4.isLike("yes")){
		CollarYes()
		return;
	}
	answer5=getInput("That might be my favorite one yet!",3);
	if(answer5.isLike("yes")){
		CollarYes()
		return;
	}
    /*CMessage("What you think?");
    CMessage("What kind of collar would be right for you?");
    CMessage("dawg collar or a full metal slave collar, %Lol%!");
    CMessage("Maybe you should get a sharp spike collar");
    CMessage("that tightens into your neck when I pull on it!");
    CMessage("That might be my favorite one yet!");*/
    //--Command:YesMode(Normal)
    setStrokingNoTaunt();
    return;
    CollarYes();
}
function CollarYes()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarDecide.js");
    //--Command:YesMode(Normal)
    setStrokingNoTaunt();
    return;
    
    collar_einstieg();
}
function collar_einstieg()
{
    CMessage("Now, get out your collar");
    CMessage("Put it on, if it\'s possible, lock it up");
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Good doggy! *grin*");
    }
    AlreadyCollar();
	return;
}
function AlreadyCollar()
{
    CMessage("You will wear this collar as long as you have your cock out %GeneralTime%");
    CMessage("Now bark for me " + randomInt(2, 6) + "times to show me that you have understood");
    sleep(12);
    //--Command:YesMode(Normal)
    setStrokingNoTaunt();
    return;
}