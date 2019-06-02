DMessage("AV_ModGeneral32: start");
var delay=-1;
var sender=1;
main();
DMessage("AV_ModGeneral32: end");
function main()
{
    if(getVar("AV_ModGeneral32_NotFirstTime", false))
    {
        AV_ModGeneral32_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral32", 0);
    setVar("AV_ModGeneral32_NotFirstTime", true);
    AV_ModGeneral32_NotFirstTime();
}
function AV_ModGeneral32_NotFirstTime()
{
    if (getVar("AV_ModGeneral32", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral32", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral32", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral32", getVar("AV_ModGeneral32", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral32", getVar("AV_ModGeneral32", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral32", getVar("AV_ModGeneral32", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral32", getVar("AV_ModGeneral32", 0) + 1000);
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
    setVar("AV_ModGeneral32", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if(!getVar("av_fetish_pain", false))
    {
        a28huj38dop();
        return;
    }
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Admit it, you want to be my whipping boy.");
    CMessage("Let\'s make it happen!");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    if(getVar("AV_DommeMistress", false))
    {
        setVar("AV_Cane", getVar("%Random25%, 30", 0));
    }
    if(getVar("AV_DommeMistress", false))
    {
        cane();
        return;
    }
    switch(random("Dm01", "Dm02", "Dm03"))
    {
        case "Dm01":
        Dm01();
        return;
        break;
        case "Dm02":
        Dm02();
        return;
        break;
        case "Dm03":
        Dm03();
        return;
        break;
    }
    Dm01();
}
function Dm01()
{
    CMessage("%domFriend1Name% really need to learn how to be more sadistic, so...");
    setVar("AV_Cane", getVar("%Random9%, 11", 0));
    CMessage("Let\'s call her");
    addContact(2);
	sender=2;
    CMessage("%Hi% %domFriend1Name% ready for it?");
    SMessage("%Okay% %DomName%", -1, 2);
    CMessage("Just remember our early conversation");
    removeContact(1);
    cane();
    return;
    Dm02();
}
function Dm02()
{
    CMessage("%domFriend2Name% have a idea for how to hurt you...");
    setVar("AV_Cane", getVar("%Random20%, 26", 0));
    CMessage("Let\'s call her");
    addContact(3);
	sender=3;
    CMessage("%Hi% %domFriend2Name% ready for it?");
    SMessage("%OfCourse% %DomName% Go take a break", -1, 3);
    removeContact(1);
    cane();
    return;
    Dm03();
}
function Dm03()
{
    CMessage("%domFriend3Name% will make you suffer");
    setVar("AV_Cane", getVar("%Random27%, 30", 0));
    CMessage("Let\'s call her");
    addContact(4);
	sender=4;
    CMessage("%Hi% %domFriend3Name% ready for it?");
    SMessage("%OfCourse% %DomName% Go take a break", -1, 4);
    removeContact(1);
    cane();
    return;
    cane();
}
function cane()
{
    CMessage(random("Fetch some ", "Go get some ") + "rubber bands %Name%");
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("got it") || answer0.isLike("have it")))
    {
        answer0 = getInput("Ready?");
    }
    if (answer0.isLike("yes", "ready", "got it", "have it"))
    {
    }
    CMessage("I want you to put a rubber band around each of the following body parts:");
    CMessage("each " + random("upper arm", "forearm"));
    sleep(20);
    CMessage("each " + random("asscheek", "thigh", "calf"));
    sleep(20);
    CMessage("If it is too loose to stay on properly, double it up %Slave%!");
    if (randomInteger(1, 100) <= 40)
    {
        skip_kneeling();
        return;
    }
    if(!getVar("AV_SubKnees", false))
    {
        CMessage("%KneelForMe%");
    }
    let answer1 = getInput("Hands behind your back", 18);
    if (answer1.isTimeout())
    {
        hands_behind_back();
        return;
    }
    else
    {
        CMessage("I said hands behind your back %SubName%");
    }
    CMessage("You really have it learn to listen to me");
    sleep(12);
    hands_behind_back();
}
function hands_behind_back()
{
    //CMessage("%Edge%");
    //startEdging();
    DoEdges(2, 3, 0,delay,sender);
    CMessage("I think you\'re ready for your punishment now");
    CMessage("you will stretch the rubber band and release it so it give you a fast, sharp bite.");
    skip_kneeling();
}
function skip_kneeling()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("Get off your knees");
        delVar("AV_SubKnees");
        delVar("pvKneeling");
    }
    CMessage("I want you to bend over your chair, go get one if you need to");
    sleep(6);
    CMessage("Place your hands on the seat");
    CMessage("You will match every swish and crack of the cane you hear");
    CMessage("Each time you will hit alternately one of the rubber bands as hard as you can");
    CMessage("I want red stripes across your skin, %Name%");
    CMessage("And I want you to count them out loud");
    top_caning();
}
function top_caning()
{
    CMessage("Get ready...");
    sleep(8);
    setRapidText(true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    another_one();
}
function another_one()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    if (getVar("PtheVCaneCount", 0) == getVar("AV_Cane", 0))
    {
        caning_done();
        return;
    }
    if (randomInteger(1, 100) <= 90)
    {
        another_one();
        return;
    }
    caning_done();
}
function caning_done()
{
    CMessage("That\'s enough, sit down");
    setRapidText(false);
    let answer0 = getInput("How many, %SubName%?");
    if (answer0.isLike("8", "eight"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 8);
    }
    else if (answer0.isLike("9", "nine"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 9);
    }
    else if (answer0.isLike("10", "ten"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 10);
    }
    else if (answer0.isLike("11", "eleven"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 11);
    }
    else if (answer0.isLike("12", "twelve"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 12);
    }
    else if (answer0.isLike("13", "thirteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 13);
    }
    else if (answer0.isLike("14", "fourteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 14);
    }
    else if (answer0.isLike("15", "fifteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 15);
    }
    else if (answer0.isLike("16", "sixteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 16);
    }
    else if (answer0.isLike("17", "seventeen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 17);
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 18);
    }
    else if (answer0.isLike("19", "nineteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 19);
    }
    else if (answer0.isLike("20", "twenty"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 20);
    }
    else if (answer0.isLike("21"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 21);
    }
    else if (answer0.isLike("22"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 22);
    }
    else if (answer0.isLike("23"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 23);
    }
    else if (answer0.isLike("24"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 24);
    }
    else if (answer0.isLike("25"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 25);
    }
    else if (answer0.isLike("26"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 26);
    }
    else if (answer0.isLike("27"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 27);
    }
    else if (answer0.isLike("28"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 28);
    }
    else if (answer0.isLike("29"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 29);
    }
    else if (answer0.isLike("30"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 30);
    }
    else if (answer0.isLike("don't know", "lost count"))
    {
        wrong_number();
        return;
    }
    else
    {
        CMessage("Nope");
        wrong_number();
        return;
    }
    if (getVar("PtheVCaneCount", 0) == 0)
    {
        right_number();
        return;
    }
    wrong_number();
}
function wrong_number()
{
    if(getVar("pthevPunish01NotAgain", false))
    {
        pthevPunish01NotAgain();
        return;
    }
    CMessage("I guess we\'re going to have to do that again");
    setTempVar("pthevPunish01NotAgain", true);
    CMessage("Get back into the position");
    setVar("PtheVCaneCount", 0);
    top_caning();
    return;
    right_number();
}
function right_number()
{
    CMessage("Good, then we can move on %Smile%");
    punishment_ending();
    return;
    return;
    pthevPunish01NotAgain();
}
function pthevPunish01NotAgain()
{
    CMessage("Wrong number again");
    CMessage("But I guess you\'ve learned your lesson, so let\'s move on");
    punishment_ending();
    return;
    return;
    punishment_ending();
}
function punishment_ending()
{
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    return;
    a28huj38dop();
}
function a28huj38dop()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("AV_MEM_Crush", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Crush", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo2();
}
function Modulo2()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Now, lay your hands on your sides for me.");
    CMessage("Take a deep breath in...... and breath out.");
    CMessage("Good. I want you to calm down. Relax.");
    CMessage("Good boy. I think you\'re up for the challenge.");
    CMessage("You\'re such a good boy. Now grab on to your cock. Do not stroke it.");
    CMessage("Just hold it.");
    CMessage("Look at that cock. So hard. So firm. So in my control.");
    CMessage("That\'s how I like it. I like it when it does what I tell it to do.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("%GoodBoy%");
    CMessage("You are here for gooning, right?");
    CMessage("That\'s mean absolutely no cumming, only stroking and stroking your %Cock%.");
    CMessage("Let\'s be honest, you know you don\'t need to cum at all.");
    CMessage("Only pure unending pleasure...");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Just hold it by the base.");
    CMessage("Can you feel the cum streaming up to the tip?");
    CMessage("There might even be some precum there. I love that.");
    let answer0 = getInput("You wanna go again, don\'t you?", 5);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
		if (answer0.isTimeout())
		{
			AV_we4tg();
			return;
		}else{
			answer0 = getInput("%YesorNo%");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        dnmdjk9();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    AV_we4tg();
}
function AV_we4tg()
{
    let answer0 = getInput("Say it. You wanna %Stroke% again?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    dnmdjk9();
}
function dnmdjk9()
{
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Hmmm... You think I should let you cum at the end?");
    CMessage("I know you need some relief.");
    CMessage("No, no, I don\'t think so. Keep storking!");
    CMessage("Build it up even more than last time");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("That\'s my good fucking boy.");
    CMessage("Completely " + random("still", "in my control"));
    CMessage("Look at that cock. It is rock - fucking - hard.");
    CMessage(random("Hold ", "Squeeze ") + "it for me.");
    CMessage("Don\'t stroke. Just squeeze.");
    CMessage("Make it fucking ache.");
    CMessage("Fuck. I like this game.");
    CMessage("I don't want this to stop.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("I\'m having so much fun.");
    CMessage(random("Torturing you", "Edging you"));
    CMessage("I love fucking edging you.");
    CMessage("You don\'t want this to end either, do you?");
    CMessage("Or, maybe you do. Because otherwise, you wouldn\'t be able to cum.");
    let answer0 = getInput("And you want to cum, don\'t you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I thought so.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t? I will remember that later.");
    }
    CMessage("But first, I want to torture you some more.");
    CMessage("Do not stroke that cock. Just hold it.");
    CMessage("You want me to say it, don\'t you?");
    CMessage("Beg me. Beg me to say it.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Yes! Stroke! Yes!!");
    CMessage("Keep moaning it while you stroke that cock.");
    CMessage("You\'re gonna cum soon aren\'t you?");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("That was a lot of fun.");
    CMessage("You\'ve been such a good boy.");
    CMessage("You did so well.");
    CMessage("Look at that cock. So exhausted. %Lol%");
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("I want to tease you...");
    CMessage("Not only do I want to tease you... I want to frustrate you...");
    CMessage("Make you ache...");
    CMessage("and in the end cry...");
    CMessage("and then, when I\'m done with you... I will let you kneel on the floor...");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("and let you lick up all that precum");
    }
    CMessage("and start all over!!");
    let answer0 = getInput("Doesn\'t this sound perfect?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    //CMessage("%StartStroking%");
	Stroking();
    if(!getVar("av_fetish_pain", false))
    {
        Keeping();
        return;
    }
    CMessage("and...");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("No, no, no... I don\'t want you to stroke...");
    CMessage("You gonna slap your balls for me.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Get used to it.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%GoodBoy%");
    //CMessage("%StartStroking%");
	Stroking();
    Keeping();
}
function Keeping()
{
    CMessage("Maybe you should try to forget about cumming,");
    if (getOrgasmChance() == 0)
    {
        CMessage("because you know that I will never let you have that pleasure again.");
    }else
    if (getOrgasmChance() <= 20  && getOrgasmChance() <= 70)
    {
        CMessage("because this is unlikely to happen.");
    }else
    if (getOrgasmChance() >= 71 && getOrgasmChance() <= 100)
    {
        CMessage("because today may be the day I denial you.");
    }else
    if (getOrgasmChance()==100 )
    {
        CMessage("because we have a long way to go till there...");
    }
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Look at me.");
    CMessage("Reach down and rub your cock.");
    CMessage("It feels good, doesn\'t it?");
    CMessage("But you want more.");
    CMessage("You want to pull it out and stroke for me, feeling the pleasure build in intensity");
    CMessage("until you finally reach that orgasm.");
    CMessage("But an orgasm isn\'t a right, it\'s a privilege.");
    CMessage("If you want to earn that privilege today");
    CMessage("you\'ll have to follow my every command.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("You\'ll be entertaining me, turning me on, and, most importantly");
    CMessage("showing me just how far you\'ll go to cum for me.");
    CMessage(random("Is this cock throbing right now", "Is this %Balls% aching"));
    CMessage("You don\'t have any self-control. Do you?");
    CMessage("Obey to your cum controller.");
    CMessage("You\'re cockidnapped actually!");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("How would you try to cover up the essential shameful truth about you, now exposed to your Mistress?");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You so deeply desire to be humiliated by a cruel Seductrix, dirty wankoolic.");
        if (randomInteger(1, 100) <= 50)
        {
            MultEdges();
            return;
        }
    }
    //CMessage("%Edge%");
    //startEdging();
	edge();
    return;
    MultEdges();
}
function MultEdges()
{
    DoEdges(2, 3, 0);
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    addContact(2);
    addContact(3);
    addContact(4);
    CMessage("hey girls");
    SMessage("Oooh hey, is it that time again?", -1, 3);
    SMessage("Oh...that\'s right I think we\'re a little late", -1, 2);
    SMessage("Oh no...I hope we didn\'t trick him into thinking he was gonna get off easy this time", -1, 4);
    SMessage("Mmm...I can tell by that dripping cock that he\'s been struggling already.", -1, 3);
    SMessage("It just wouldn\'t be right if we left without doing any damage, would it?", -1, 3);
    SMessage("aw, just look at him keeping his hands at his sides. He\'s such a good boy.", -1, 2);
    SMessage("What are you up to?", -1, 3);
    CMessage("He is all yours...I will be back soon");
    removeContact(1);
    SMessage("Well, I was just thinking...just because he can\'t touch, it doesn\'t mean we can\'t hurt him", -1, 4);
    SMessage("Aw we\'re just so mean to him. I don\'t think he can take it.", -1, 2);
    SMessage("Mmm, but that\'s the fun part, remember?", -1, 4);
    SMessage("Mmm, well how should we start him off?", -1, 3);
    if(!getVar("av_fetish_pain", false))
    {
        SkipPainZ1();
        return;
    }
    if(!getVar("AV_PinDone", false))
    {
        SMessage("First,", -1, 4);
        SMessage("%subName% go fetch me a spoon and some clothespins. At least 10 of them.",-1,4);
        sleep(20);
        setVar("AV_PinDone", true);
    }
    SMessage("Now...", -1, 4);
    if (randomInteger(1, 100) <= 50)
    {
        NoKneel();
        return;
    }
    SMessage("%KneelForMe%", -1, 4);
    NoKneel();
}
function NoKneel()
{
    SMessage("Grab the spoon %SubName%...", -1, 4);
    SMessage("I want 10 smacks hard right those %Balls%... Make it sting.", -1, 4);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    SMessage("That was nice", -1, 3);
    SMessage("Let\'s do it again", -1, 3);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    SkipPainZ1();
}
function SkipPainZ1()
{
    SMessage("Oh please, just give him a break!", -1, 2);
    //SMessage("Is that right, %Slave%? You wanna jerk that cock, don\'t you?", -1, 3);
	let answer1 = getInput("Is that right, %Slave%? You wanna jerk that cock, don\'t you?",5, -1,true, 3);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    SMessage("%StartStroking%", -1, 2);
	//Stroking(-1,2);
    SMessage("Fuck, right there...that\'s it, nice and slow...", -1, 4);
    sleep(12);
    SMessage("Oh my God, come on! I wanna go fucking crazy on it!", -1, 2);
    SMessage("Follow the overdrive", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    SMessage("He looks so nervous, doesn\'t he. He just isn\'t ready...", -1, 3);
    SMessage("Mhm, well I don\'t think he minds.", -1, 4);
    SMessage("Look, his hands " + "He\'s trying so hard. He\'s shaking all over! I think he wants to cry...", -1, 3);
    SMessage("Mmm hmm  That\'s what I wanted to see...his naughty hand on that %Cock%.", -1, 2);
    //SMessage("%Edge%", -1, 4);
    //startEdging();
	edge("%Edge%", -1, 4);
    SMessage("Can you imagine how much pressure he had to release?", -1, 3);
    SMessage("Oh that\'s right. Let him feel that pressure.", -1, 4);
    SMessage("He can barely keep himself together! His fucking face is going crazy, girls.", -1, 4);
    SMessage("What a bunch of little teases you have here, huh you bad boy?", -1, 2);
    //SMessage("%Edge%", -1, 3);
    //startEdging();
	edge("%Edge%", -1, 3);
    SMessage("Oh my god, it\'s so hot  it\'s like it\'s buzzing!", -1, 3);
    SMessage("This must be fucking torture for him!", -1, 3);
    SMessage("Oh he\'s throbbing so hard! Look at the head bob up and down!", -1, 2);
    SMessage("I\'m just imagining that hot cum exploding out of his tip. God I wanna suck the fuck out of it", -1, 2);
    //SMessage("%Edge%", -1, 2);
    //startEdging();
	edge("%Edge%", -1, 2);
    SMessage("Oh no, don\'t tease him!", -1, 4);
    SMessage("I think I heard his stomach drop from here when you said that...", -1, 4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Let\'s hurt him instead...", -1, 4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Grab the spoon again %Slave%...", -1, 4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls again", -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Now, put " + random("3 ", "4 ", "5 ") + "clothespins on your %Balls%", -1, 4);
        sleep(20);
    }
    SMessage("Oh what, naughty boy? You want a nice sloppy blowjob?", -1, 2);
    SMessage("You wanna feel three tongues sliding all over your cock?", -1, 2);
    //SMessage("%StartStroking%", -1, 3);
	Stroking(-1,3);
    SMessage("Aw, poor boy. Listen to those little whimpers!", -1, 4);
    SMessage("But it\'s so soon, girls. I don\'t think he\'ll be able to take it.", -1, 2);
    SMessage("Oh fuck his hips are bucking. He\'s gonna fucking pop!", -1, 3);
    SMessage("Don\'t you dare, %Slave%!", -1, 4);
    SMessage("His balls are getting so fucking tight! Stroke! Stroke!", -1, 2);
    //SMessage("%Edge%", -1, 2);
    //startEdging();
	edge("%Edge%", -1, 2);
    SMessage("There we go, girls! Let him throb!", -1, 4);
    SMessage("That\'s all he gets for now.", -1, 4);
    SMessage("Aw, but I wanted to see him cum!", -1, 2);
    addContact(1);
    CMessage("So, he survived?");
    SMessage("yeah", -1, 3);
    CMessage("Good %Lol%");
    removeContact(2);
    removeContact(3);
    removeContact(4);
	CMessage("%SitDown%");
    CMessage("and remove everything %subName%");
    return;
}