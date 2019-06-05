DMessage("AV_ModGeneral5: start");
main();
DMessage("AV_ModGeneral5: end");
function main()
{
    if(getVar("AV_ModGeneral5_NotFirstTime", false))
    {
        AV_ModGeneral5_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral5", 0);
    setVar("AV_ModGeneral5_NotFirstTime", true);
    AV_ModGeneral5_NotFirstTime();
}
function AV_ModGeneral5_NotFirstTime()
{
    if (getVar("AV_ModGeneral5", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral5", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral5", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral5", getVar("AV_ModGeneral5", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral5", getVar("AV_ModGeneral5", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral5", getVar("AV_ModGeneral5", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral5", getVar("AV_ModGeneral5", 0) + 1000);
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
    setVar("AV_ModGeneral5", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Your training is going so well and you don\'t have much left.");
    CMessage("Now we will see how long you can stroke that %Cock%.");
    CMessage("To see if you can keep yourself from shooting yourself");
    CMessage("To see if you can be brought to the edge over and over again.");
    CMessage("Don\'t be sad %Slave%.");
    CMessage("I\'m sure you\'ll enjoy it");
    setStrokingNoTaunt();	
    CMessage("I love watching you %Stroke%.");
    CMessage("Watching you take your cock in your hand and pleasing yourself.");
    CMessage("Keep up that pace for a while.");
    CMessage("Let\'s make that cock feel as good as it can before we finish.");
    let answer0 = getInput(random("Have you thought about how long you could keep all that cum in those balls", "If you really were to test yourself how long do you think you could go"), 10);
	while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("1") || answer0.isLike("2") || answer0.isLike("3") ))
    {
		if (answer0.isTimeout())
		{
			AV_Jump50();
			return;
		}
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    else if (answer0.isLike("1", "2", "3"))
    {
        CMessage("I\'d start slow if you\'ve never tried before.");
    }
    AV_Jump50();
}
function AV_Jump50()
{
    CMessage("Build up the amount of time slowly until you can go longer and longer.");
    CMessage(random("I bet eventually you\'d be able to go for quite a while without an orgasm", "Longer then you think"));
    CMessage("Oooh. Look at all the precum already.");
    CMessage("It looks so nice pushing it\'s way out of that nice throbbing cock.");
    if (getOrgasmChance() == 0 || getOrgasmChance() <= 20)
    {
        CMessage("I can\'t wait to deny you.");
    }
    //if (getOrgasmChance() >= 80 || (getOrgasmChance() >= 30 && getOrgasmChance() <= 70) || )
	else
    {
        CMessage("I can\'t wait to watch you cum.");
    }
    CMessage("I have to admit that I much prefer to watch a cock being pumped when it\'s gone a long time without cumming.");
    CMessage("So much precum drips out of it.");
    CMessage("And I love that it only takes a few seconds of heavy stroking to reach the edge ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("making even more of that precum stream out of it for me.");
    }
    DoEdges(1,1,0);
    CMessage("You wouldn\'t believe how horny you\'d feel if you go a long time without cumming.");
    CMessage(random("You\'d be thinking about stroking even more then you do now", "That cock would get hard all the time and you\'d drip precum all day long"));
    CMessage(random("I can tell that you would enjoy it", "I know you think it would be frustrating"));
    CMessage("but that wouldn\'t bother you after a few days.");
    setStrokingNoTaunt();
    CMessage("If you went a good amount of time without letting any of that cum out of your balls");
    CMessage(random("your orgasm would feel so much better too", "That built up load would just explode out of you with more force then you could imagine"));
    let answer0 = getInput("Something tells me you\'d like that, wouldn\'t you?", 10);
    while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
		if (answer0.isTimeout())
		{
			AV_Jump51();
			return;
		}
        answer0 = getInput("%YesOrNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        increaseAnger(3)
    }
    AV_Jump51();
}
function AV_Jump51()
{
    CMessage("You can take it slow.");
    CMessage("A couple days at first and then slowly add to the number.");
    CMessage("And if you stroke and edge yourself several times each day");
    CMessage("I guarantee that when you do cum you\'ll want to go even further.");
    CMessage(random("Maybe you have no doubt about the benifits of denial already", "Maybe you are probably thinking \"Is she crazy? There's no way that going without an orgasm for more then a day can feel good.\""));
    if (getOrgasmChance() == 0)
    {
        CMessage("%stopstroking%", 0);
		stopStroking();
        decidido();
        return;
    }
    CMessage("So I will make a question after that edge");
    DoEdges(1,1,0);
    let answer0 = getInput("Will you try denying yourself for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
        YesRestrit();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        NoRestrit();
        return;
    }
    YesRestrit();
}
function YesRestrit()
{
    CMessage("I will give you 4 options:");
    CMessage("3 days, 5 days, 1 week or just today");
    let answer0 = getInput("What is going to be?");
    if (answer0.isLike("3 days", "3", "three"))
    {
        CMessage("%Okay%");
        restrictOrgasm(3, "day");
    }
    else if (answer0.isLike("5 days", "5", "five"))
    {
        CMessage("Nice");
        restrictOrgasm(5, "day");
    }
    else if (answer0.isLike("1 week", "1", "one"))
    {
        CMessage("%HolyShit% %PetName%");
        restrictOrgasm(1, "week");
    }
    else if (answer0.isLike("today", "just today"))
    {
        CMessage("It\'s a start");
        restrictOrgasm();
    }
    else if (answer0.isLike("changed my mind", "nevermind"))
    {
        CMessage("pussy");
        NoRestrit();
        return;
    }
    CMessage("I hope you\'ll learn how to take control of your own cock");
    CMessage("and fill those balls up with a whole lot of cum for me.");
    decidido();
    return;
    NoRestrit();
}
function NoRestrit()
{
    CMessage("Well...");
    decidido();
}
function decidido()
{
    CMessage("I can tell that cock is about ready to cum.");
    CMessage("What do you say, one, maybe two more edges before we continue?");
    //CMessage("%StartStroking% again");
	setStrokingNoTaunt("%StartStroking% again");
    CMessage("Fast");
    CMessage("Lets get in at least two more really fast edges.");
    CMessage("I bet those balls of yours are begining to feel really tight?");
    CMessage("All that cum is just waiting for the chance to escape.");
    CMessage("Keep stroking though.");
    CMessage("Keep up a good pace for a while.");
    CMessage("You can last a little while longer, can\'t you?");
    DoEdges(2, 2, 0);
    CMessage("Let that cock throbb and twitch and let all the juicy precum flow out of you.");
    CMessage("Good boy.");
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %Contact1%");
    addContact(2);
    SMessage("Hi %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    SMessage("Now, I know you want to get hard, and I know you want to fuck me hard and cum", -1,2);
    SMessage("but there\'s more to it than that.", -1,2);
    SMessage("You see %SubName%, I\'ve been wanting to do this to you for some time.", -1,2);
    SMessage("I have setup a nice points system for you to use", -1,2);
    SMessage("Here is how it works.", -1,2);
    SMessage("%StartStroking%", -1,2);
    SMessage("Now I don\'t care how you do it but you need to accumulate at least 200 points", -1,2);
    SMessage("Every stroke will be 1 point", -1,2);
    SMessage("A edge will be 10 points", -1,2);
    SMessage("And holding a edge, 20 points", -1,2);
    SMessage("I\'m not counting these strokes right now.", -1,2);
    SMessage("Because I need you desperate before the game begins", -1,2);
    SMessage("Now bring that cock to a nice edge for me", -1,2);
    DoEdges(1,1,0,-1,2);
    SMessage("Just enjoy me, I know if you try you can put every thing out of your mind so it\'s just you and I together.", -1,2);
    SMessage("That\'s right I am the most important person in your life right now.", -1,2);
    SMessage("Now the game begins...", -1,2);
    setVar("AV_GlitterGamew", 0);
    switch(random("Game1", "Game2", "Game3", "Game4", "Game5"))
    {
        case "Game1":
        Game1();
        return;
        break;
        case "Game2":
        Game2();
        return;
        break;
        case "Game3":
        Game3();
        return;
        break;
        case "Game4":
        Game4();
        return;
        break;
        case "Game5":
        Game5();
        return;
        break;
    }
    Game1();
}
function Game1()
{
    SMessage("%Stroke%", -1,2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    sleep(20);
    SMessage("%stopstroking%", 0, 2);
    setVar("AV_GlitterGamew", getVar("AV_GlitterGamew", 0) + 25);
    Calcula();
    return;
    Game2();
}
function Game2()
{
    SMessage("%Stroke%", -1,2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    sleep(20);
    SMessage("%stopstroking%", 0, 2);
    setVar("AV_GlitterGamew", getVar("AV_GlitterGamew", 0) + 40);
    Calcula();
    return;
    Game3();
}
function Game3()
{
    SMessage("%Stroke%", -1,2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3");
    sleep(20);
    SMessage("%stopstroking%", 0,2);
    setVar("AV_GlitterGamew", getVar("AV_GlitterGamew", 0) + 60);
    Calcula();
    return;
    Game4();
}
function Game4()
{
    DoEdges(1,1,0,-1,2);
    setVar("AV_GlitterGamew", getVar("AV_GlitterGamew", 0) + 10);
    Calcula();
    return;
    Game5();
}
function Game5()
{
    holdEdge(-1,2);
    setVar("AV_GlitterGamew", getVar("AV_GlitterGamew", 0) + 20);
    Calcula();
}
function Calcula()
{
    if (getVar("AV_GlitterGamew", 0) > 199)
    {
        GameAcaba();
        return;
    }
    SMessage("You earned " + getVar("AV_GlitterGamew", "") + "so far...", -1,2);
    SMessage("%Praise%", -1,2);
    switch(random("Game1", "Game2", "Game3", "Game4", "Game5"))
    {
        case "Game1":
        Game1();
        return;
        break;
        case "Game2":
        Game2();
        return;
        break;
        case "Game3":
        Game3();
        return;
        break;
        case "Game4":
        Game4();
        return;
        break;
        case "Game5":
        Game5();
        return;
        break;
    }
    GameAcaba();
}
function GameAcaba()
{
    SMessage("You finished the game %SubName%", -1,2);
    SMessage("Oh, I want to be with you so bad it hurts and I can tell you feel the same.", -1,2);
    SMessage("Can I ask you to do something for me?", -1,2);
    SMessage("I want you to tell me how beautiful I am as you stroke your cock.", -1,2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("Start with my hair and cover every little part of my body.", -1,2);
    SMessage("%ICanBeWithYou%", -1,2);
    SMessage("%ICanKeepThisUp%", -1,2);
    SMessage("%ImPleased%", -1,2);
    SMessage("%stopstroking%", 0, 2);
    SMessage("OK we are done for now", -1,2);
    SMessage("Yes I know you did not get to cum.", -1,2);
    SMessage("You have to understand that this is how it is going to be", -1,2);
    SMessage("Look who is back", -1, 2);
    addContact(1);
    CMessage("Hi %PetName%, still alive?");
    removeContact(2);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %Contact3%");
    addContact(4);
    SMessage("Hi %EmoteLaugh%", -1, 4);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 4);
    removeContact(1);
    SMessage("Hello there, are you ready to have some fun?", -1,4);
    SMessage("Mmm, I do love a nice hard cock. Why don\'t you play with your balls a little", -1,4);
    SMessage("Just sit there, in front of your computer.", -1,4);
    SMessage(random("I own you now", "You\'re going to be my little bitch from now on"), -1,4);
    SMessage(random("Is your cock hard?", "It better be. Soft cocks are worthless"), -1,4);
    SMessage("Why don\'t you show me how hard it can get.", -1,4);
    SMessage("Stroke my cock for me.", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("That\'s right... nice and slow.", -1,4);
    SMessage("Dry  that cock for me.", -1,4);
    SMessage("A little faster...keep stroking, oooh, yes,", -1,4);
    SMessage("Faster... Damn. This is turning me on.", -1,4);
    SMessage("Faster still... stroke that cock for me while i pleasure myself.", -1,4);
    SMessage("Ohhh shit, keep going. Fuck... don't stop....", -1,4);
    SMessage(random("Are you getting close?", "Are you about to cum your hot white pearly cum all over my tits?"), -1,4);
    SMessage("%stopstroking%", 0,4);
    SMessage("Sit on your hands. I will cum whenever I want. But YOU cum when and where I say.", -1,4);
    SMessage("Is your cock drooling?", -1,4);
    if(getVar("av_fetish_cei", false))
    {
        SMessage("Scoop whatever has leaked from my cock and put it in your mouth.", -1,4);
    }
    if(getVar("av_fetish_cei", false))
    {
        SMessage("NOW BITCH!", -1,4);
    }
    if(getVar("av_fetish_cei", false))
    {
        SMessage("Sit back on your hand.", -1,4);
    }
    SMessage("Ohhhfuck That is so hot. MMMMM.", -1,4);
    SMessage("Now...", -1,4);
    SMessage("You don\'t think I am just going to make you play with yourself.", -1,4);
    SMessage("Nope.", -1,4);
    SMessage("I am going to make you suffer", -1,4);
    SMessage("Turn your ass around and let me look at it....", -1,4);
    SMessage("Spread those cheeks.", -1,4);
    setTempVar("av_intera_003", true);
    SMessage("MMmmmmmm good boy. I think you LIKE being my little whore.", -1,4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("I want you to smack each of your cheeks 10 times.", -1,4);
    }
    SMessage("You pathetic bitch!", -1,4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("20 more smacks, each cheek, HARD. I want to see your ass turn RED!", -1,4);
    }
    SMessage("That\'s not bad. But you can do better", -1,4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("10 more each! Even harder!", -1,4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Count them with me.", -1,4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("First the left", -1,4);
    }
    if(getVar("av_fetish_pain", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(22);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Now the right", -1,4);
    }
    if(getVar("av_fetish_pain", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(22);
    }
    SMessage("Good", -1,4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("Is your ass hot? I bet your ass is on fire.", -1,4);
    }
    SMessage("That is so sexy, the way you squirm....", -1,4);
    SMessage("Stroke your hard, pulsing cock for me", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("Do you like that?", -1,4);
    SMessage("%KneelForMe%", -1,4);
    SMessage("Stroke that cock for me, slowly.", -1,4);
    SMessage("Look how purple and angry it is", -1,4);
    SMessage("Stroke", -1,4);
    SMessage("Stroke...", -1,4);
    SMessage("Now stroke faster", -1,4);
    SMessage("Faster", -1,4);
    SMessage("Harder", -1,4);
    SMessage("Faster", -1,4);
    SMessage("Are you ready?", -1,4);
    SMessage("%stopstroking%", 0,4);
    SMessage("%SitDown%", -1,4);
    SMessage("We\'re gonna play a little game", -1,4);
    SMessage("I will roll a dice and will decide what you have to do, we\'ll start out nice and easy.", -1,4);
    SMessage("But it\'s gonna get a lot harder as we go on. Are you ready?", -1,4);
    SMessage("Rolling", -1,4);
    switch(random("DA1", "DA2", "DA3", "DA4", "DA5", "DA6"))
    {
        case "DA1":
        DA1();
        return;
        break;
        case "DA2":
        DA2();
        return;
        break;
        case "DA3":
        DA3();
        return;
        break;
        case "DA4":
        DA4();
        return;
        break;
        case "DA5":
        DA5();
        return;
        break;
        case "DA6":
        DA6();
        return;
        break;
    }
    DA1();
}
function DA1()
{
    //SMessage("1. %Edge%", -1,4);
	//SMessage("1.", -1,4);
    //startEdging();
	//DoEdges(1,1,-1,4);
	startEdging("1. %Edge%", -1,4);
	SMessage("%stopstrokingedge%", null, 4);
	SMessage("%lettheedgefade%", -1,4);
    Parte2();
    return;
    DA2();
}
function DA2()
{
    SMessage("2. Stroke to the beat", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b250.mp3");
	sleep(20);
    Parte2();
    return;
    DA3();
}
function DA3()
{
    SMessage("3. Stroke to the beat", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
	sleep(20);
    Parte2();
    return;
    DA4();
}
function DA4()
{
    SMessage("4. light ball tapping.", -1,4);
    sleep(20);
    Parte2();
    return;
    DA5();
}
function DA5()
{
    SMessage("5. Squeeze your balls, not too hard, just enough to make it hurt.", -1,4);
    sleep(20);
    Parte2();
    return;
    DA6();
}
function DA6()
{
    SMessage("6. slow sensual ball massaging.", -1,4);
    sleep(20);
    Parte2();
}
function Parte2()
{
    SMessage("Now it gets a bit harder, you are ready?", -1,4);
    sleep(20);
    SMessage("Rolling", -1,4);
    switch(random("DB1", "DB2", "DB3", "DB4", "DB5", "DB6"))
    {
        case "DB1":
        DB1();
        return;
        break;
        case "DB2":
        DB2();
        return;
        break;
        case "DB3":
        DB3();
        return;
        break;
        case "DB4":
        DB4();
        return;
        break;
        case "DB5":
        DB5();
        return;
        break;
        case "DB6":
        DB6();
        return;
        break;
    }
    DB1();
}
function DB1()
{
    //SMessage("1. %Edge%", -1,4);
	SMessage("1.", -1,4);
    //startEdging();
    DoEdges(2, 2, 0, -1,4);
    Parte3();
    return;
    DB2();
}
function DB2()
{
    SMessage("2. Stroke to the beat", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b250.mp3");
	sleep(20);
    Parte3();
    return;
    DB3();
}
function DB3()
{
    //SMessage("3. %Edge%", -1,4);
    startEdging("3. %Edge%", -1,4);
	SMessage("%stopstrokingedge%", null, 4);
	SMessage("%lettheedgefade%", -1,4);
    SMessage("slap your balls 5 times.", -1,4);
    Parte3();
    return;
    DB4();
}
function DB4()
{
    SMessage("4. Stroke to the beat", -1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    sleep(20);
	Parte3();
    return;
    DB5();
}
function DB5()
{
    SMessage("5. Flick your left ball 5 times, hard.", -1,4);
    Parte3();
    return;
    DB6();
}
function DB6()
{
    SMessage("6. Flick your right ball 5 times, hard.", -1,4);
    Parte3();
}
function Parte3()
{
    SMessage("I hope you like pain.", -1,4);
    sleep(20);
    SMessage("Rolling", -1,4);
    switch(random("DC1", "DC2", "DC3", "DC4", "DC5", "DC6"))
    {
        case "DC1":
        DC1();
        return;
        break;
        case "DC2":
        DC2();
        return;
        break;
        case "DC3":
        DC3();
        return;
        break;
        case "DC4":
        DC4();
        return;
        break;
        case "DC5":
        DC5();
        return;
        break;
        case "DC6":
        DC6();
        return;
        break;
    }
    DC1();
}
function DC1()
{
    SMessage("1. Slap each ball individually 10 times", -1,4);
    sleep(20);
    Parte4();
    return;
    DC2();
}
function DC2()
{
    SMessage("2. Squeeze your right ball for 20 seconds. Squeeze just hard enough to where you feel it in your stomach.", -1,4);
    sleep(20);
    Parte4();
    return;
    DC3();
}
function DC3()
{
    SMessage("3. Squeeze your left ball for 20 seconds. Squeeze just hard enough to where you feel it in your stomach.", -1,4);
    sleep(20);
    Parte4();
    return;
    DC4();
}
function DC4()
{
    SMessage("4. Pull your balls down and away from your body until you feel the chords stretching, hold it", -1,4);
    sleep(20);
    Parte4();
    return;
    DC5();
}
function DC5()
{
    SMessage("5. Rest your balls on the edge of the chair", -1,4);
    sleep(20);
    Parte4();
    return;
    DC6();
}
function DC6()
{
    SMessage("6. Slap and squeeze your balls until your dick goes totally soft.", -1,4);
    sleep(30);
    Parte4();
}
function Parte4()
{
    SMessage("This is the last round of our dice game, how you holding up?", -1,4);
    SMessage("Your balls hurt?", -1,4);
    SMessage("Good, the more swollen they are, the better.", -1,4);
    SMessage("Last round.", -1,4);
    switch(random("DD1", "DD2", "DD3", "DD4", "DD5", "DD6"))
    {
        case "DD1":
        DD1();
        return;
        break;
        case "DD2":
        DD2();
        return;
        break;
        case "DD3":
        DD3();
        return;
        break;
        case "DD4":
        DD4();
        return;
        break;
        case "DD5":
        DD5();
        return;
        break;
        case "DD6":
        DD6();
        return;
        break;
    }
    DD1();
}
function DD1()
{
	SMessage("1.", -1,4);
	DoEdges(2, 2, 100, -1,4);
    /*SMessage("1. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
    return;
    DD2();
}
function DD2()
{
	SMessage("2.", -1,4);
	DoEdges(2, 2, 100, -1,4);
    /*SMessage("2. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
    return;
    DD3();
}
function DD3()
{
	SMessage("3.", -1,4);
	DoEdges(2, 2, 100, -1,4);
    /*SMessage("3. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 2;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
    return;
    DD4();
}
function DD4()
{
	SMessage("4.", -1,4);
	DoEdges(3, 3, 100, -1,4);
    /*SMessage("4. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 3;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
    return;
    DD5();
}
function DD5()
{
	SMessage("5.", -1,4);
	DoEdges(3, 3, 100, -1,4);
    /*SMessage("5. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 3;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
    return;
    DD6();
}
function DD6()
{
	SMessage("6.", -1,4);
	DoEdges(3, 3, 100, -1,4);
    /*SMessage("6. %Edge%", -1,4);
    startEdging();
    holdEdge();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = 3;
        DoEdges(amountEdges, amountEdges, 0, -1,4);
    }
    else
    {
        StartEdging()
    }*/
    Parte5();
}
function Parte5()
{
    SMessage("How\'d you like my game?", -1,4);
    delVar("av_intera_003");
    SMessage("I\'m glad you made it, it gets a lot more fun from here on out.", -1,4);
    SMessage("Look who is back", -1, 4);
    addContact(1);
    CMessage("Hi %PetName%, still alive?");
    removeContact(4);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %Contact2%");
    addContact(3);
    SMessage("Hi %EmoteLaugh%", -1, 3);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    SMessage("%DomName% told me that you agreed to be her slave", -1,3);
    SMessage("but she said she was going to need some help.", -1,3);
    SMessage("She\'s never had a slave before and she\'s afraid she\'s going to let you cum too much.", -1,3);
    SMessage("She\'s asked me and a few of my friend\'s to help her", -1,3);
    SMessage("until she learns not to let you stroke that cock of yours to orgasm all the time.", -1,3);
    SMessage("I know you thought you were going to have an easy time with her in control of that dick,", -1,3);
    SMessage("but you\'re a slave now and your going to have to learn your place.", -1,3);
    SMessage("We control your cock and it\'ll be up to us if you get to stroke it or sit on your hands while it\'s hard and throbbing.", -1,3);
    SMessage("You\'re a %Slave% now and that means you should always be naked in front of your Mistress.", -1,3);
    SMessage("Now jerk that cock off till it\'s nice and hard.", -1,3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("Once it\'s hard though you better take your hand off it.", -1,3);
    SMessage(random("Don\'t worry slave. I\'m not that mean", "You\'ll have plenty of time to stroke that dick. But first I\'ve got a few things to teach you."), -1,3);
    SMessage("As a slave you have given up all control of your will to %DomName%, and to me and my friends.", -1,3);
    SMessage("When we tell you to do something you better do it unless you never want to stroke that cock again.", -1,3);
    SMessage("Now you will be required to do various chores for us", -1,3);
    SMessage("but your primary function is to be our little toy.", -1,3);
    SMessage("We will tease you, call you names and make you do all kinds of things you might not want to do.", -1,3);
    SMessage("But no matter what we tell you to do, you must do it and you must never complain.", -1,3);
    let answer0 = getInput("Now say \'yes Mistress\' for me.",null,-1,true,3);
	while(true){
		if (answer0.isLike("Yes mistress"))
		{
			SMessage("Good boy", -1,3);
			break;
		}
		else if (answer0.isLike("Yes"))
		{
			//SMessage("Yes what?", -1,3);
			answer0 = getInput("Yes what?",null,-1,true,3);
		}else {
			SMessage("Are you listening?", -1,3);
			answer0 = getInput("Yes what?",null,-1,true,3);
		}
	}
    SMessage("From now on you will also have to refer to us as Mistress.", -1,3);
    SMessage("No matter which one of us you are talking to.", -1,3);
    SMessage("I think you\'re starting to get it.", -1,3);
    let answer1 = getInput("Is your cock still good and hard?", 10,-1,true,3);
    while(true){
		if (answer1.isTimeout())
		{
			AV_Jump52();
			return;
		}
		if (answer1.isLike("yes"))
		{
			SMessage("%Good%", -1,3);
			increaseAnger(-3)
			break;
		}
		else if (answer1.isLike("no"))
		{
			SMessage("Bad boy", -1,3);
			increaseAnger(3)
			break;
		}
		else
		{
			answer0 = getInput("Yes or no %SubName%?",10,-1,true,3);
		}
	}
	AV_Jump52();
}
function AV_Jump52()
{
    SMessage("Don\'t worry. You\'ll get use to that.", -1,3);
    SMessage("When your not locked up in a chastity belt you had better be hard, whether we tell you to be or not.", -1,3);
    //SMessage("%StartStroking%", -1,3);
	Stroking(0,3);
    SMessage("One more thing you shouldn\'t forget.", -1,3);
    SMessage("Never, and I mean never, cum without permission.", -1,3);
    SMessage("If you cum when you aren\'t told to that cock will be locked up in its chastity belt", -1,3);
    SMessage("and the key will be destroyed.", -1,3);
    SMessage("Cum when you aren\'t allowed to and you never get to cum again.", -1,3);
    SMessage("Now don\'t go to fast yet, cause you\'re gonna have to last a while.", -1,3);
    SMessage("Does that feel good?", -1,3);
    SMessage("Moving your hand up and down over that stiff dick of mine?", -1,3);
    SMessage("Being a slave can be fun sometimes if you do as your told.", -1,3);
    SMessage("We aren\'t all bitches who want to torture you.", -1,3);
    SMessage("Well some of us will, but I\'m a little nicer then some of my friends.", -1,3);
    SMessage("After all I\'m here to teach you that being a slave can be fun.", -1,3);
    SMessage("Sure you\'ll be frustrated and aching to cum", -1,3);
    SMessage("but sometimes the fun is ours, not yours", -1,3);
    SMessage("but in time you\'ll learn to love having that cock aching for us.", -1,3);
    SMessage("Now I think you need to stroke that cock faster for me.", -1,3);
    SMessage("Get a nice good pace going.", -1,3);
    SMessage("I want you to bring yourself close to the edge for me.", -1,3);
    SMessage("See, slaves should always feel close to the edge.", -1,3);
    SMessage("I want you to feel like you can\'t take anymore and you\'re going to explode.", -1,3);
    SMessage("Are you there yet slave?", -1,3);
    //SMessage("%Edge%", -1,3);
    startEdging("%Edge%", -1,3);
	//startEdging();
	SMessage("%stopstrokingedge%", null, 3);
	SMessage("%lettheedgefade%", -1,3);
    SMessage("Good boy.", -1,3);
    SMessage("If you took your hand off right away, even if you were in the middle of a stroke then you\'re learning.", -1,3);
    SMessage("%stopstroking%", 0,3);
    SMessage("It\'s very important that you learn to obey.", -1,3);
    typing();
}
function typing()
{
    SMessage("I want you to type \'I will obey my Mistress\'.", -1,3);
    SMessage("I want you to feel like you have no choice other then to obey.", -1,3);
    if(writingTask("I will obey my Mistress",-1,3)){
		Goodbou();
	}else{
		Failed_Writing_Task();
	}
    return;
    Failed_Writing_Task();
}
function Failed_Writing_Task()
{
    SMessage("You need to learn, %Slave%", -1,3);
    typing();
    return;
    Goodbou();
}
function Goodbou()
{
    SMessage("Good Boy", -1,3);
    //SMessage("%StartStroking%", -1,3);
	setStrokingNoTaunt(null,-1,3);
    SMessage("The only real attention that cock is going to get is your own hand.", -1,3);
    SMessage("You\'re the one that agreed to this remember?", -1,3);
    SMessage("Now keep %Stroking% that %Cock% for me.", -1,3);
    SMessage("I think we\'ll have you trained in no time.", -1,3);
    SMessage("And you thought you wouldn\'t enjoy this. Silly boy.", -1,3);
    SMessage("You like %Stroking%, don\'t you?", -1,3);
    SMessage("I know you do.", -1,3);
    SMessage("Well if you obey that cock will be hard all the time and you\'ll get to stroke it all you want.", -1,3);
    SMessage("Or at least as much as we let you.", -1,3);
    SMessage("I hope by now you\'ve realized that there is no going back", -1,3);
    SMessage("so you better get used to it.", -1,3);
    SMessage("Now stroke it faster for me.", -1,3);
    SMessage(random("Enjoy every second of it", "See this is a reward for both you and me"), -1,3);
    SMessage("You get to jerk yourself", -1,3);
    SMessage("and I get to watch a little sissy do as I command.", -1,3);
    SMessage("So are you close to cumming?", -1,3);
    SMessage("Do you need to shoot that load for me?", -1,3);
    SMessage("Good boy.", -1,3);
    holdEdge(-1,3);
    SMessage("Does it feel good?", -1,3);
    SMessage("Well that\'s enough for now.", -1,3);
    SMessage("So do you think you\'re getting the hang of this?", -1,3);
    SMessage("Are you becomming a better slave?", -1,3);
    SMessage("It\'ll take time, but it\'ll be fun for both of us.", -1,3);
    SMessage("Everyone thinks that slaves never have fun", -1,3);
    SMessage("but once you become a well trained slave you\'ll have so much fun jerking off for me and %DomName%", -1,3);
    SMessage("that you won\'t even need to cum to have a good time.", -1,3);
    SMessage("You\'ll love having your cock and balls aching all the time you\'ll be begging us not to let you cum.", -1,3);
    SMessage("You don\'t think so?", -1,3);
    SMessage("Well, we\'ll see.", -1,3);
    SMessage("Now bring yourself to the edge.", -1,3);
    startEdging();
    SMessage("Good slave.", -1,3);
    SMessage("You\'re doing so good slave.", -1,3);
    SMessage("I figured it was going to take you a long time to learn how to be obediant.", -1,3);
    SMessage("I want you to sit there with that hard on sticking straight up.", -1,3);
    SMessage("Aching to be stroked.", -1,3);
    SMessage("Before you know it all you\'ll think about will be getting that cock stroked.", -1,3);
    SMessage("See, you\'ve probably figured it out, but that\'s how we control you.", -1,3);
    SMessage("Pretty soon all you\'ll think about is getting your hand wrapped around that cock", -1,3);
    SMessage("and jerking yourself off until you cum.", -1,3);
    SMessage("That desire will will make you do what ever we say in the hope that we\'ll let you pump that dick.", -1,3);
    SMessage("I bet you\'re going crazy right now while that dick just sits there hard as a rock waiting for your hand to touch it.", -1,3);
    SMessage(random("Is it aching?", "Are your balls beginning to swell?"), -1,3);
    SMessage("Get use to it slave.", -1,3);
    SMessage("Just " + random("think about how good it\'s going to feel to let go and cum", "think about spilling that load all over yourself while I watch"), -1,3);
    //SMessage("%StartStroking%", -1,3);
	setStrokingNoTaunt(null,-1,3);
    SMessage("slowly though.", -1,3);
    SMessage("You shouldn\'t be near the edge yet %Slave%.", -1,3);
    SMessage(random("We want a slave that we can play with for a long time", "We\'re gonna teach you to last as long as you can"), -1,3);
    SMessage("so that you\'ll keep stroking and stroking to our commands with out squirting.", -1,3);
    SMessage("The longer you last for us the happier we will be", -1,3);
    SMessage("and the happier we are the better chance you have at making a nice sticky mess for us.", -1,3);
    switch(random("TeaAV1", "TeaAV2"))
    {
        case "TeaAV1":
        TeaAV1();
        return;
        break;
        case "TeaAV2":
        TeaAV2();
        return;
        break;
    }
    TeaAV1();
}
function TeaAV1()
{
    SMessage("Has it been driven in yet?", -1,3);
    SMessage("Everything you do is for us.", -1,3);
    SMessage("For our pleasure.", -1,3);
    TeaAV3();
    return;
    TeaAV2();
}
function TeaAV2()
{
    SMessage("Whether you have a good time or not doesn\'t matter.", -1,3);
    SMessage("It\'s all about us.", -1,3);
    SMessage("You are here to serve your Mistresss.", -1,3);
    TeaAV3();
}
function TeaAV3()
{
    SMessage("Jerk that cock faster now.", -1,3);
    SMessage("Bring yourself to the edge for me slave.", -1,3);
    //startEdging();
    holdEdge( -1,3);
    SMessage("That feeling will be what you crave when were done with you.", -1,3);
    SMessage("You\'ll want to cum", -1,3);
    SMessage("but you\'ll be so satisfied riding the edge of orgasm for us that you\'ll crave that feeling over and over again.", -1,3);
    SMessage("Now let\'s practice something else that you\'ll need to learn.", -1,3);
    SMessage("The longer you go without cumming the happier your Mistresss will be", -1,3);
    SMessage("and you want to make us happy, don\'t you?", -1,3);
    SMessage("Good slave.", -1,3);
    SMessage("No touching yourself until you meet with %DomName%.", -1,3);
    SMessage("Don\'t worry though slave, you haven\'t seen the last of me.", -1,3);
    SMessage("Maybe next time I\'ll let you spill that hot load", -1,3);
    SMessage("and lick each and every drop up.", -1,3);
    SMessage("Look who is back", -1, 3);
    addContact(1);
    CMessage("Hi %PetName%, still alive?");
    SMessage("Bye, bye slave.", -1, 3);
    removeContact(3);
    return;
}