DMessage("AV_ModGeneral27: start");
main();
DMessage("AV_ModGeneral27: end");
function main()
{
    if(getVar("AV_ModGeneral27_NotFirstTime", false))
    {
        AV_ModGeneral27_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral27", 0);
    setVar("AV_ModGeneral27_NotFirstTime", true);
    AV_ModGeneral27_NotFirstTime();
}
function AV_ModGeneral27_NotFirstTime()
{
    if (getVar("AV_ModGeneral27", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral27", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral27", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral27", getVar("AV_ModGeneral27", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral27", getVar("AV_ModGeneral27", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral27", getVar("AV_ModGeneral27", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral27", getVar("AV_ModGeneral27", 0) + 1000);
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
    setVar("AV_ModGeneral27", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("Girls are cumming hard. And boys are not allowed to!");
    CMessage("I\'m here to remind you that.");
    CMessage("I\'m sure that sometimes I am too kind to you.");
    CMessage("Then, I think I should lock you in chastity permanently.");
    CMessage("And the only award would be permission to eat me out.");
    let answer0 = getInput("You should be so frustrated now, isn\'t it?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Because nasty perverted boys must stay locked.");
    }
    edge();
    CMessage("You must suffer for your Mistress.");
    CMessage("Because girls are nice and sweet.");
    CMessage("Beautiful and desirable.");
    CMessage("And when they cumming - that is wonderful!");
    CMessage("But cumming boys are gross.");
    CMessage("Soiled with sticky mess, immediately lost all their attractiveness.");
    CMessage("That is why you should stay denied.");
    CMessage("No cumming. No relief. Pure lust only.");
    CMessage("That should be the only acceptable option.");
    CMessage("Caged, denied cock. Full, achy balls. No permission to cum.");
    DoEdges(2, 3, 0);
    CMessage("That is what you deserve.");
    CMessage("The funniest thing is that you always want more!");
    CMessage("To be more excited and horny.");
    CMessage("More stroking, more edging.");
    CMessage("Being closer and closer to cumming!");
    CMessage("And I want more as well!");
    CMessage("More teasing, more torturing, more and more denial!");
    CMessage("I love it! To control, to order, to keeping you always horny!");
    CMessage("And slaves must stay obedient.");
    if(getVar("av_fetish_pain", false))
    {
        cbt("ball");
    }
    CMessage("I\'ll make your cock cry with precum while you are holding that massive load for me.");
    edge();
    CMessage("You are all mine now.");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("%Name%, I\'m even jealous a little!");
    CMessage("You\'re having so much pleasure now...");
    CMessage("So sensitive! So horny!");
    addContact(2);
    SMessage("Hi", -1, 2);
    CMessage("Hi %domFriend1Name%");
    SMessage("%SubName%, you just another horny denied boy for me.", -1, 2);
    SMessage("And you must stay denied until your mistress let you cum.", -1, 2);
    SMessage("Girls are cumming hard. And boys are not allowed to!", -1, 2);
    CMessage("%Lol% Where did that come from?");
    SMessage("I am learning %EmoteFace%", -1, 2);
    holdEdge(-1,2);
    if(!getVar("AV_MasuDone", false))
    {
        end3430();
        return;
    }
    SMessage("Hey %DomName%, can I try that Masu thing you talked about?", -1, 2);
    CMessage("Sure, you already know the beats...");
    SMessage("Great, let\'s try %SubName%", -1, 2);
    setVar("AV_MasuRounds", getVar("%Random5%, 9", 0));
    MasuLoop();
}
function MasuLoop()
{
    switch(random("Mas1", "Mas2", "Mas3", "Mas4", "Mas5", "Mas6", "Mas7", "Mas8", "Mas9", "Mas10", "Mas11"))
    {
        case "Mas1":
        Mas1();
        return;
        break;
        case "Mas2":
        Mas2();
        return;
        break;
        case "Mas3":
        Mas3();
        return;
        break;
        case "Mas4":
        Mas4();
        return;
        break;
        case "Mas5":
        Mas5();
        return;
        break;
        case "Mas6":
        Mas6();
        return;
        break;
        case "Mas7":
        Mas7();
        return;
        break;
        case "Mas8":
        Mas8();
        return;
        break;
        case "Mas9":
        Mas9();
        return;
        break;
        case "Mas10":
        Mas10();
        return;
        break;
        case "Mas11":
        Mas11();
        return;
        break;
    }
    Mas1();
}
function Mas1()
{
    SMessage(random("ONE two three four, ONE two three four", "ONE two three four", "Dog"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogdog120.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas2();
}
function Mas2()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat100.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas3();
}
function Mas3()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat120.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas4();
}
function Mas4()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas5();
}
function Mas5()
{
    //--UNINTERPRETED LINE:@Contact1 DOG & CAT @PlayAudio[tease\Masu\dogcat80.wav] @sleep(25)
	SMessage("DOG & CAT", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat80.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas6();
}
function Mas6()
{
    //--UNINTERPRETED LINE:@Contact1 DOG & CAT @PlayAudio[tease\Masu\dogcat100.wav] @sleep(20)
	SMessage("DOG & CAT", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas7();
}
function Mas7()
{
    //--UNINTERPRETED LINE:@Contact1 DOG & CAT faster @PlayAudio[tease\Masu\dogcat140.wav] @sleep(15)
	SMessage("DOG & CAT", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas8();
}
function Mas8()
{
    //--UNINTERPRETED LINE:@Contact1 DOG & CAT switch @PlayAudio[tease\Masu\dogcat-switch140.mp3] @sleep(18)
	SMessage("DOG & CAT", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-switch140.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas9();
}
function Mas9()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas10();
}
function Mas10()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake120.wav");
    sleep(17);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas11();
}
function Mas11()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    MasuBreak();
}
function MasuBreak()
{
    SMessage(random("Imagine if we played Masu for several hours at competition speed how much cum would have built up", "Knowing all this, knowing you will not be able to cum and dancing near the edge is the very essence of highlevel Masu play", "If you do it right you will enter a blisfull trance like state", "That\'s it. Keep your form. Work it hard", "Stroke is To Obey"), -1, 2);
    if (getVar("AV_MasuTrain", 0) >= getVar("AV_MasuRounds", 0))
    {
        MasuEnds();
        return;
    }
    MasuLoop();
    return;
    MasuEnds();
}
function MasuEnds()
{
    SMessage("%ThatsEnough%", -1, 2);
    end3430();
}
function end3430()
{
    SMessage("See you later, thanks for let me use %SubName%", -1, 2);
    CMessage("Bye %domFriend1Name%");
    removeContact(2);
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("%PetName%", "%SubName%"));
    if(!getVar("av_fetish_pain", false))
    {
        a6723fjs();
        return;
    }
	CMessage("Now I’m going to make you suffer.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Shall we begin your punishment?");
	let answer0 = getInput("You may say \"yes mistress\".");
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%");
    }
	if (answer0.isLike("yes"))
    {
		CMessage("Good. I’m glad you agree.");
	}
    else if (answer0.isLike("no"))
    {
        CMessage("You aked for this");
        cbt("ball");
    }
    CMessage("%KneelForMe%");
    CMessage("Gently rub your nipples for me.");
    CMessage("Get them all excited, just starting to perk up.");
    CMessage("Feel the blood rushing to them, interested in the pleasant sensation. " + random("Is that working", "Does that feel nice"));
    CMessage("Now pinch them.");
    CMessage("Hard. You heard me.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Fucking pinch them as hard as you can you worthless fuck.");
    }
	CMessage("Twist them clockwise for me, right to the point when you can’t twist them any more.");
    CMessage("Hold it there.");
    CMessage("Look at you.");
	if(getVar("av_fetish_rough", false))
    {
        CMessage("You’re pathetic.");
    }
    CMessage("Kneeling there at my feet, debasing yourself for my amusement.");
    CMessage("Stop twisting now, go back to rubbing them.");
    CMessage("You’ll do anything I tell you to, not just because you’re mine, but because deep down, you know you deserve it.");
    CMessage("Pinch them hard again, like you fucking mean it.");
    CMessage("You know that all of these punishments are 100% completely deserved");
	if(getVar("av_fetish_rough", false))
    {
        CMessage("because you’re a pathetic little fuckup.");
    }
    CMessage("Right, down on all fours, on the floor, right now.");
    CMessage("Grab whatever it is you got to beat yourself with and take it in your dominant hand.");
    CMessage("On my count, you’re going to slap the right cheek of your ass. ");
    CMessage("And no little sissy hits! I want to hear the crack as it hits you");
    CMessage("and a little mumble of suffering slip out of your piece of shit mouth.");
    if (randomInteger(1, 100) <= 50)
    {
        ewfiu34();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle05a.mp3");
    sleep(15);
    a23rin();
    return;
    ewfiu34();
}
function ewfiu34()
{
    CMessage("ONE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWO!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("HARDER! THREE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Like you fucking mean it! FOUR!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    a23rin();
}
function a23rin()
{
    CMessage("Wait. We forgot to put the nipple clamps on you!");
    CMessage("We got your nipples all worked up, and then didn’t finish off! ");
    CMessage("Why didn’t you remind me?");
    CMessage("Were you trying to get out of your full punishment? Bad slave.");
    CMessage("Put the clamps on, now. And do it properly, not just resting there.");
    CMessage("I want to see your nipples bulging through the clips, and see you squirm whenever your touch them.");
    CMessage("Go on. Once they’re clamped, flick them. Right on the tip.");
	let answer0 = getInput("Mmmm. Hurts, doesn’t it?",5);
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
		if (answer0.isTimeout())
		{
			AV_Timeo300();
			return;
		}
        answer0 = getInput("%YesOrNo%");
    }
	if (answer0.isLike("yes"))
    {
		CMessage("Good. It’s supposed to.");
	}
    else if (answer0.isLike("no"))
    {
        CMessage("You\'re brave %SubName%");
    }
    AV_Timeo300();
}
function AV_Timeo300()
{
    CMessage("That’s for trying to dodge some pain.");
    CMessage("Right back to your ass.");
    CMessage("But how silly of me, I’ve forgotten how far we’d counted.");
    CMessage("Better just start again to be safe");
    if (randomInteger(1, 100) <= 50)
    {
        bfg87();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10b.mp3");
    sleep(15);
    a0dfmnf();
    return;
    bfg87();
}
function bfg87()
{
    CMessage("ONE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWO!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THREE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("I bet your ass is starting to feel really sore now. FOUR!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Every time it strikes, you’re in agony.");
    CMessage("SIX!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Mmmm. You better be fucking suffering.");
    CMessage("SEVEN! EIGHT! NINE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Oh, don’t think you know what I’m gonna say. I make all the choices.");
    CMessage("TEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("ELEVEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("You thought we were done at ten? No no no! You’ve been far too bad for that.");
    CMessage("TWELVE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THIRTEEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    a0dfmnf();
}
function a0dfmnf()
{
    CMessage("%stopstroking%", 0);
    CMessage("Start again, other side.");
    CMessage("Left cheek, ONE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TWO!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("THREE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FOUR!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("FIVE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("You’re slowing up. Don’t. Hit that ass as hard as you fucking can.");
    CMessage("SIX! SEVEN! EIGHT!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Better, but could still be harder.");
    CMessage("NINE!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("TEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("%stopstroking%", 0);
    CMessage("ELEVEN! TWELVE! THIRTEEN!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Actually, no, now I feel like I’ve neglected the left.");
    CMessage("Hit it again for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("one more time.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("And another.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("And another.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    a6723fjs();
}
function a6723fjs()
{
    CMessage("See, I’m training you, like one would train a dog.");
    CMessage("If you’re bad, you get punished. But if you do good, then nice things will happen.");
    CMessage("Grab your hard cock for me.");
    CMessage("Wrap your fingers round it gently and start stroking up and down.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Just slowly at first.");
    CMessage("Really work your way from the base of your cock right up to the tip.");
    CMessage("Feel the pleasure work up and down your cock.");
    CMessage("Think about it being my soft, gently hand on your cock.");
    CMessage("Stroking you up and down.");
    CMessage("Now, speed it up a little bit.");
    CMessage("Not too fast yet, just a medium pace.");
    CMessage("Maybe grip a little more firmly, stroke it up and down.");
    CMessage("If it helps, imagine my infront of you, wearing just some black lace lingerie, stroking your cock, my hair flicking over your thighs and legs, teasing you.");
    CMessage("Now go faster. As fast as you like.");
    CMessage("It\'s time for you to get yourself to the edge.");
    CMessage("Really stroke hard as you imagine thrusting in and out of my tight wet pussy.");
    CMessage("My lips gripping around your hard thick cock as you slide in and out of me.");
    edge();
    CMessage("I bet you really want to cum right about now, don\'t you?");
    CMessage("You just want to erupt in pleasure and spurt all that hot cum out for me.");
    CMessage("I want you to do that as well. But just not quite yet.");
    CMessage("I want your hot, sweet cum, but I want to tease it out.");
    CMessage("%SitDown%");
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("It looks like I get to test your submission now");
    CMessage("I think my goal will be to get you as horny as possible");
    CMessage("so that you are ready to degrade yourself like never before for anyone.");
    CMessage("Stand up...");
    CMessage("Now reach down between your legs and start caressing those balls.");
    CMessage("That\'s it, squeeze and caress them");
    sleep(15);
    CMessage("Look how horny this is getting you!");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Now reach down further and begin running your fingers along the crack of your ass.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go on, get your asshole horny as well.");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Lick your fingers and start rubbing those nipples.");
    CMessage("Feels good, no?");
    CMessage("Keep rubbing and twisting them until they are as hard as your cock.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Go on, try to see how horny you can get by just playing with your nipples.");
    CMessage("hmm...");
    CMessage("Reach down and caress your cock and balls");
    sleep(15);
    CMessage("Take your hands and grab the top of the back of the chair");
    if(getVar("av_fetish_rough", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("put one leg on each side of the chair");
    }
    if(getVar("av_fetish_rough", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("and arch your back so that your ass is sticking out in the \"I want to get fucked in the ass\" position.");
    }
    if(getVar("av_fetish_rough", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("That\'s it, show me that you want to get fucked in the ass!");
    }
    CMessage("Now, take your left hand and start stroking your cock");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    if(getVar("av_fetish_rough", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("all the while you are sticking out your ass.");
    }
    if(getVar("av_fetish_rough", false) && getVar("AV_LikeAnal", false))
    {
        CMessage("That looked so pathetic! You really are a desperate slut!");
    }
    edge();
    CMessage("%SitDown%");
    let answer0 = getInput("You want to degrade and abuse yourself for me, don\'t you?", 5);
    if (answer0.isTimeout())
    {
        time239js();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        yespainhum();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        nopainhum();
        return;
    }
    time239js();
}
function time239js()
{
    if(!getVar("av_fetish_pain", false))
    {
        nopainhum();
        return;
    }
    yespainhum();
}
function yespainhum()
{
    CMessage("Oh fuck that makes me so wet %Slave%, I can\'t wait to take advantage of you");
    CMessage("I\'m going to make you hurt your balls so bad %PetName%");
    CMessage("I want to see you doubled up in pain");
    CMessage("I\'m going to masturbate and cum while you\'re abusing your horrible blue balls.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I think its time I showed you what we\'re going to use some of these toys for.");
    CMessage("First...");
    CMessage("%Edge%");
    startEdging();
    CMessage("Get the spoon...");
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    edge();
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    edge();
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    CMessage("Oh, are those balls starting to hurt %Slave%");
    CMessage("They are? Good, I want you to suffer.");
    CMessage("Grab those clothespins and put 2 on each nipple.");
    CMessage("Twist them round slave");
    CMessage("squeeze them");
    CMessage("pull on them");
    CMessage("twist them");
    CMessage("make yourself hurt because it turns me on.");
    DoEdges(2, 3, 0);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    CMessage("that\'s so hot to see you hurt your balls like this!");
    nopainhum();
}
function nopainhum()
{
    CMessage("that hard cock desperate to cum, maybe I should lock you up in a chastity belt slave");
    CMessage("make you hornier than you\'ve ever been before.");
    CMessage("I\'ll sit on your face, and suck and lick your cock through the cage");
    CMessage("and you\'ll stay denied while I cum and cum and cum again.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("and rub your balls for me");
    CMessage("I want them to be able to take more abuse soon.");
    edge();
    CMessage("How are those balls feeling?");
    CMessage("I\'m not sure how much more they can take");
    CMessage("Remove the clothespins...");
    return;
}