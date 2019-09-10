DMessage("AV_ModGeneral20: start");
edged=false;
main();
DMessage("AV_ModGeneral20: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    if (randomInteger(1, 100) <= 50)
    {
        DecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    IniModule();
    return;
    DecidEdge();
}
function DecidEdge()
{
    edge();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    IniModule();
}
function IniModule()
{
    if(getVar("AV_ModGeneral20_NotFirstTime", false))
    {
        AV_ModGeneral20_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral20", 0);
    setVar("AV_ModGeneral20_NotFirstTime", true);
    AV_ModGeneral20_NotFirstTime();
}
function AV_ModGeneral20_NotFirstTime()
{
    if (getVar("AV_ModGeneral20", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral20", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral20", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral20", getVar("AV_ModGeneral20", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral20", getVar("AV_ModGeneral20", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral20", getVar("AV_ModGeneral20", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral20", getVar("AV_ModGeneral20", 0) + 1000);
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
    setVar("AV_ModGeneral20", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage(random("%SubName%", "%PetName%"));
    let answer0 = getInput("Tell me, what else do you fantasize about?", 15);
    if (answer0.isTimeout())
    {
        AV_Timeo74();
        return;
    }
    if (answer0.isLike("bondage", "me", "up", "tie"))
    {
        CMessage("Hmm");
        Bondage();
        return;
    }
    else if (answer0.isLike("cfnm"))
    {
        CMessage("Hmm");
        cfnm();
        return;
    }
    else if (answer0.isLike("anal", "strapon", "pegging", "prostate"))
    {
        CMessage("Hmm");
        Anal();
        return;
    }
	else if (answer0.isLike("exhibitionism","watching","voyeur"))
    {
        CMessage("Hmm");
        Voyeur();
        return;
    }
    else if (answer0.isLike("Nothing", "no"))
    {
        CMessage("Hmm");
        AV_Timeo74();
        return;
    }
    else
    {
        CMessage("Okay then");
    }
    AV_Timeo74();
}
function AV_Timeo74()
{
    CMessage("Have you ever been at work one day");
    CMessage("or out and about, and suddenly come across a sexy sight");
    CMessage("one that made your cock stiffen in your pants and made you think of cumming?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I bet you ran to the bathroom and stroked your cock in the stall");
    CMessage("thinking of her the whole time.");
    CMessage("Do you think it\'s a sexy thought");
    CMessage("the sight and thought of a woman making you feel like you needed to run off to make yourself orgasm for her?");
    JuntaTudo();
    return;
    Bondage();
}
function Bondage()
{
    CMessage("Have you ever fantasized about a beautiful woman whispering in your ear");
    CMessage("while you\'re tied up and naked for her?");
    CMessage("I bet you have.");
    CMessage("You\'ve probably lied in your bed");
    CMessage("and stroked your cock");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Mmmmmmm, stroking fantasizing about this very situation.");
    JuntaTudo();
    return;
    cfnm();
}
function cfnm()
{
    CMessage("Do you ever stand naked in the mirror");
    CMessage("and wish a woman on " + random("a sexy dress ", "leather clothes ") + "would appear behind you...");
    CMessage("wrap her arms around you and hold you tight?");
    CMessage("Maybe she\'d reach down and stroke your cock for you.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Do you think she could make you would cum?");
    CMessage("Mmmmmmmm. I would make you cum.");
    CMessage("Next time you see a mirror I bet you\'ll think of me taking you from behind");
    CMessage("your clock gets so hard when you think of me taking hold of you");
    CMessage("and stroking your cock until you cum all over the glass.");
    JuntaTudo();
    return;
    Anal();
}
function Anal()
{
    CMessage("Have you ever been lying in bed");
    CMessage("masturbating * %Laugh% *");
    CMessage("and been soooooo close to cumming");
    CMessage("and felt like there was something missing?");
    CMessage("Oh? Felt like there was an empty space that could be filled by pleasure?");
    CMessage("I\'m sure you have.");
    CMessage("Will you let me fill it?");
    CMessage("Have you ever thought about a beautiful dominant woman touching your prostate?");
    CMessage("I know your cock twitches when you think of me sliiiiiding my finger gently into your ass.");
    CMessage("You get so hard when you think of it.");
    CMessage("Think of how hard you\'d shoot your cum if I stroked you this way.");
    CMessage("I don\'t think it would take much.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Just stroking");
    CMessage("stroooking");
    CMessage("strooooooking");
    CMessage("and you\'re right on the edge for me.");
    CMessage("Thinking about cumming.");
    CMessage("Thinking about cumming for me.");
    JuntaTudo();
    return;
}
function Voyeur()
{
    CMessage("I know you lay here at night sometimes,naked with headphones in, stroking your cock because a sexy voice tells you to. ");
    CMessage("I bet your cock would be harder if you knew I\'ve been watching you.");
    CMessage("That\'s right sweetie.");
    CMessage("I\'ve been watching you masturbate.");
    CMessage("Did your cock just twitch?");
    CMessage("That\'s so sexy.");
    CMessage("Has it always been a fantasy of yours, a dominant woman watching you masturbate for her?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("When you were a little boy I bet you thought about masturbating for your teenage babysitter");
    CMessage("standing naked in front of her stroking your little cock until you came.");
    CMessage("Or maybe you sat in the back of your classroom");
    CMessage("hands in your little pocket touching your little cock, masturbating while you stared at your hot teacher.");
    CMessage("You were oh so close and then she locked eyes with you and you came in your little boy school clothes.");
    CMessage("She knew the whole time.");
    JuntaTudo();
    return;
    JuntaTudo();
}
function JuntaTudo()
{
    CMessage("Keep %Stroking%, but");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    if(getVar("av_fetish_gag", false))
    {
        CMessage("%BallGagOn%");
    }
    CMessage("Back to %Stroking% when you are done...");
	if(!isStrokingAll() ){
		setStrokingNoTaunt();
	}
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage("I\'m going to treat you like a whore a slave whore!");
    }
    CMessage("look into my eyes");
    CMessage("I see your cock is leaking something?");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Lick it up now Tell me how bad it tasted");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("It was good Right?");
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Look at you...all worked up already!");
    CMessage("I can\'t help but giggle as you try *so hard* to keep your mind focused.");
    CMessage("Hands on your head! Keep them there!");
    CMessage("You. Will. Not. Touch. That. Cock.");
    CMessage("Until I say so.");
    let answer0 = getInput("Are we clear, darling?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("...I love looking at you and exposing you.");
    CMessage("God, it\'s such a turn on.");
    CMessage("How does your cock feel right now, %PetName%?");
    CMessage("I can imagine how badly you want to stroke it for me.");
    CMessage("Not yet. " + "...not yet, baby.");
    return;
    Modulo2();
}
function Modulo2()
{
    if(!getVar("av_fetish_pain", false))
    {
        NoTeaseFYou();
        return;
    }
    CMessage("Now  I am going to show you the true meaning of girl power!");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I will show you that all men are weak and that women are the dominant sex.");
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("So before we start I want you to know that you will be pushed to your limits");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("So before we start I want you to know that you will be pushed to your limits because I don\'t believe that worthless men like you deserve any mercy.");
    }
    CMessage("We\'ll start of slow so cup you balls with your weak hand slap them 10 times with your strong one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(30);
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("That\'s better. And from now on if I ask you to do something you do it properly and who knows you might get a reward?");
    }
    if(!getVar("AV_DommeMistress", false) && !getVar("av_fetish_rough", false))
    {
        CMessage("That\'s better. Who knows you might get a reward?");
    }
    CMessage("But not yet so lets step it up. So grab that shoelace and tight your balls up tight.");
    sleep(30);
    CMessage("Then give them 5 warm up taps.");
    sleep(20);
    CMessage("Good!");
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("Now slap them 25 times hard. I want you to hit them as hard as you would spank me not like you ever will.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
        sleep(30);
    }
    CMessage("Again! But this time I don\'t want to hear a sound and I want you to stay completely still.");
    CMessage("If you move or make a sound then start again.");
    sleep(30);
    CMessage("Looks like you\'ve earned your reward, so start stroking but make sure that them testicles of yours stay tied tight.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("Yes, I know... I know.");
    let answer0 = getInput("Your %Balls% feels soooo sensitive right now after all that beating doesn\'t it, baby?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        CMessage("Blue Balls");
    }
    CMessage("That\'s right... That\'s right... GOOD BOY... GOOD BOY...");
    CMessage("Do you want to be a GOOD BOY");
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        edge();
    }
    CMessage("That\'s your reward over so I hope you enjoyed it.");
    CMessage("But your going to get more pain now but its not your balls that I\'m targeting.");
    CMessage("It\'s your ass, and we are going to be spanking it.");
    CMessage("So grab your spoon and get on your hands and knees");
    sleep(20);
    CMessage("Now spank each ass cheek 20 times as hard as you can!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(30);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now 30 hits on each!");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
        sleep(40);
    }
    CMessage("Finally do 30 more hits on each and then stop because I want to go back to breaking your balls.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(40);
    CMessage("So if I were you I\'d savour this moment.");
    CMessage("And consider yourself lucky that that I\'m not ramming an 11 inch dildo inside your soft little hole.");
    CMessage("%KneelForMe%");
    CMessage("Put " + randomInt(3, 5) + "clothespins on your %Balls%");
    sleep(30);
    CMessage("And 2 on your nipples");
    sleep(20);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("That\'s right... That\'s right..");
    CMessage("%GoodBoy%");
    let answer1 = getInput("Do you want to be a GOOD BOY for me again?", 5);
    if (answer1.isTimeout())
    {
        AV_Timeo93();
        return;
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Do you?");
    }
    else
    {
        CMessage("Awww, so scared!");
    }
    AV_Timeo93();
}
function AV_Timeo93()
{
    CMessage("It\'s silly to be scared, honey.");
    CMessage("Stop being scared of being controlled.");
    CMessage("This is good. This is VERY good.");
    CMessage(random("To be controlled", "To learn your place in a woman\'s hands"));
    let answer0 = getInput(random("Are you learning your place", "%PetName%", "Are you learning that I am in control"),10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Now I can tell you are getting right on the edge.");
    CMessage("So many helpless sounds and your body just shivering from the pleasure.");
    CMessage("Soooo, soooo good. Let\'s go there, baby.");
    CMessage("That\'s right, it\'s time for you, baby. It\'s time!");
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        edge();
    }
    CMessage("you\'ve taken a small step in learning your place.");
    CMessage("Remove everything of your body");
    CMessage("%SitDown%");
    sleep(20);
    return;
    NoTeaseFYou();
}
function NoTeaseFYou()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_StrokeForCrush.js");
    return;
    Modulo3();
}
function Modulo3()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You know you are my slave, and you will cum only with my permission.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("You know you are my " + "and you will cum only with my permission.");
    }
    if (getOrgasmChance() == 0)
    {
        CMessage("But we know that will never happen %PetName%.");
    }
    if (getOrgasmChance() <= 20 || (getOrgasmChance() >= 30 && getOrgasmChance() <= 70))
    {
        CMessage("And that will not be very often little %PetName%.");
    }
    if (getOrgasmChance() >= 80 )
    {
        CMessage("And just when I tell you.");
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I like to keep you begging.");
    CMessage("It makes you more submissive when you are denied.");
    CMessage("I like to torture you and get inside your head slave.");
    CMessage("You can only cum when I allow you to.");
    CMessage("By the way %SubName%, one of my girlfriends, " + random("%domFriend1Name% ", "%domFriend2Name% ", "%domFriend3Name% ") + "has asked me how i ve managed to train you so well.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("I couldn\'t hold back and i told her you are not my man anymore just my %Slave%.");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("I couldn\'t hold back and i told her you are not my man anymore just my %PetName%.");
    }
    CMessage("She was laughing so much, and seemed to enjoy hearing about your torments.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Yes, like that.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You may find me a bit tougher, now.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But I know you\'ll like that.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%stopstroking%", 0);
		stopStrokingAll();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Squeeze your balls and count to 10 slowly.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("With your other hand, pinch your nipples, first one, then the other.");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        //CMessage("%StartStroking%");
		setStrokingNoTaunt();
    }
    CMessage("Don\'t get to the edge if I haven\'t told you to.");
    CMessage("Also, as I was saying before - I\'ve teased you, so many times.");
    CMessage("I want to give you something different.");
    CMessage("So just be ready for a much more difficult time now");
    CMessage("Stroke faster.");
    CMessage("In fact, stroke almost to the edge");
    CMessage("and then just slowdown enough so you do NOT get quite to the edge.");
    CMessage("I want your " + random("%Cock% to hurt with desire", "%Balls% to ache for that delicious edge"));
    CMessage("So, %GeneralTime%, I am going to give you what you want.");
    CMessage("%Edge%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto84()")
    Loop();
	return;
}
function Loop()
{
    
	if(!edged){
		CMessage("%edgingtaunts1%");
	}if(!edged){
		sleep(1);
		Loop();
	}
    return;
    EdgeForGoto84();
}
function EdgeForGoto84()
{
	edged=true;
    CMessage("Hold that edge and think about that.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I will is going to cause you some pain now.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Not punishment pain. But pain because it turns you on.");
    }
    CMessage("And I\'m going to make you ache, slowly, just because I want to.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Oh yeah, and at some point, you ARE going to eat some cum!");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("That part - that\'s only because I just want to see it.");
        setVar("AV_EatCum", true);
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    setVar("edgingmode", "Normal");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I am going to make your balls and your nipples hurt");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("just the way you must like it.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I maybe will make you ruin an orgasm.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("And then - can you imagine - you are going to BEG me to");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("let you eat it");
    }
    CMessage("so you can edge again, and keep getting turned on.");
    edge();
    if(getVar("av_fetish_cei", false))
    {
        CMessage("If there\'s any precum, lick it up");
    }
    if(getVar("AV_BallTied", false))
    {
        AVTied();
        return;
    }
    CMessage("Take that shoelace, and wrap it around and around your balls,");
    setTempVar("AV_BallTied", true);
    CMessage("nice and tight, then tie it off.");
    sleep(30);
    AVTied();
}
function AVTied()
{
    edge();
    let answer0 = getInput("Awwwwe, is that frustrating?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    CMessage("Too bad");
    if(getVar("AV_DommeMistress", false))
    {
        edge();
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Slowly squeeze your %Balls%, hold and count to 10.");
        sleep(15);
    }
    CMessage("Now slowly squeeze the base of your cock, and squeeze all the way up to the tip.");
    sleep(15);
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Any pre-cum? Lick it up.");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Don\'t edge");
    let answer1 = getInput("Mmmmmm. How\'s that feel? Frustrating?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    CMessage("Keep stroking, just under the edge.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But squeeze one ball with your other fingers, while you keep stroking.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Imagine, if I were stroking you, as you got right to the edge");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I\'d squeeze one ball until you squealed.");
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    if(getVar("av_fetish_pain", false))
    {
        CMessage("squeeze both balls hard!");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Good thing you weren\'t riding the edge, or we would have just ruined your orgasm.");
    }
    edge("Now get to the edge");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put a clothespin on each nipple.");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now squeeze them hard into your nipples.");
    }
    if(!getVar("av_fetish_pain", false))
    {
        JumPain();
        return;
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("but stop just before you get to the edge.");
    CMessage("And slap your %Balls% with the spoon 10 times");
    CMessage("And then, get back to %Stroking%");
    CMessage("repeat till I say to stop", 0);
    sleep(20);
    CMessage("Ooooooh, these feel so nice.");
    sleep(20);
    CMessage("Keep going like this");
    sleep(20);
    CMessage("is it hard to stop stroking that hard?");
    sleep(20);
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    JumPain();
}
function JumPain()
{
    CMessage("Untie your balls.");
    delVar("AV_BallTied");
    delVar("pvBallsTied");
    CMessage("Rub your balls, squeeze them back and forth.");
    let answer0 = getInput("Can you feel the blood flowing back into them?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        CMessage("Im Aching");
    }
    CMessage("Take off your clothespins");
    sleep(10);
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("My vulnerable, darling %PetName%.");
    CMessage(random("I want you to know what its like to *really* ache for something", "I want you to long for me so much" )+ " that you are willing to let me do whatever I want to your "+random("body", "flesh")+".");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You will dance along the fine line between pleasure and pain and you won\'t even care what the difference is anymore.");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Pleasing me is your only concern.");
    }
    CMessage("As it should be.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    let answer0 = getInput("You\'ve always been a Good Boy, haven\'t you?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo27();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yes, you have.");
        increaseAnger(-3)
    }
    else
    {
        CMessage("Hmm...");
    }
    AV_Timeo27();
}
function AV_Timeo27()
{
    CMessage("Tie your string around just your balls.");
    CMessage("Hopefully you have enough slack to wrap it around a couple of times and make it super tight.");
    sleep(15);
    CMessage("I want it tight.");
    sleep(15);
    CMessage("Shiny testicles make me very happy.");
    CMessage("Do this for me.");
    CMessage("With one of your hands, I want you to softly cupping your %Balls%");
    CMessage("And my other hand  just lightly petting your penis");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Back and forth");
    let answer0 = getInput("Doesn\'t that feel nice, dear?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo28();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yes, it does.");
    }
    else
    {
        CMessage("And of course, the male\'s penis would begin to get erect from this stimulation.");
    }
    AV_Timeo28();
}
function AV_Timeo28()
{
    CMessage("Mmmmm. I can feel you starting to harden from that soft petting.");
    CMessage("%GoodBoy%");
    CMessage("I can see you are a little nervous, though.");
    CMessage("You are in good hands, %PetName%.");
    let answer0 = getInput("There we go. Doesn\'t that feel WONDERFUL, dear?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo29();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmmmm, I know it does.");
    }
    else
    {
        CMessage("Just feel your hand lovingly caress your little penis up and down");
    }
    AV_Timeo29();
}
function AV_Timeo29()
{
    CMessage(random("And up and down...", "Sooo nice"));
    CMessage("And feel your other hand pet and massage your %Balls%, squeezing and stroking them");
    CMessage("They feel as if they have a bit of semen in them");
    CMessage("No wonder these balls feel so plump!");
    CMessage("Well don\'t worry, %PetName%, I will take care of that for you.");
    CMessage("Ohhh, listen to you. Making little whimpering noises.");
    let answer0 = getInput("Doesn\'t it feel so good, baby?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo34();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yes it does");
    }
    else
    {
        CMessage("That\'s alright, you can whimper all you like");
    }
    AV_Timeo34();
}
function AV_Timeo34()
{
    CMessage("I'm not going to stop. No no, dear, I'm not going to stop");
    CMessage("Don\'t be so nervous, honey.");
    if (randomInteger(1, 100) <= 50)
    {
        AVMenos();
        return;
    }
    CMessage("Awww, listen to you whimper. My poor little boy!");
    CMessage("I do so love to hear boys whimper, it\'s a good sign that they are learning their place.");
    CMessage("Learning that they are submissive to a woman.");
    CMessage("I can get you to make much louder sounds than what you are making, baby.");
    CMessage("Eventually, males begin weeping and even screaming from the ecstasy I give them.");
    CMessage("Mmmm, we\'ll get there soon enough little one.");
    AVMenos();
}
function AVMenos()
{
    CMessage("Awwww, you look scared, baby!");
    CMessage("That\'s natural, honey.");
    CMessage("It\'s scary to " + random("lose control", "isn\'t it?", "realize you are in the hands of a beautiful woman who is more powerful than you and can control you just by stroking your helpless penis up and down"));
    CMessage("And up and down. And up and down. That\'s right.");
    CMessage("Mmmmm. Now you are starting to leak precum all over your hand. GOOD BOY.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Lick it for me");
        sleep(15);
    }
    CMessage("I think it\'s time to speed up the pace a bit");
    CMessage("Yes, it is baby.");
    CMessage("There. Just like that!");
    CMessage("Now, stop trying to squirm away, %PetName%!");
    CMessage("I\'ve got you!");
    CMessage("All you can do is TAKE IT as I milk you.");
    CMessage(random("That\'s right. Just take it, honey", "Just TAKE IT. There\'s no escape for you"));
    CMessage("Mmmm-hmmm. You\'re going to explode, %PetName%. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("You're going to explode.");
    }
    CMessage("Listen to me and obey me.");
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 10);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        edge();
    }
    if(!getVar("av_fetish_pain", false))
    {
        NoPainForYou();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
		if (randomInteger(0, 100) <= 50)
		{
			CMessage("%KneelForMe%");
		}
    }
    CMessage("Now the clothespins...");
    CMessage("one on each nipple, and one on each ball.");
    sleep(30);
    CMessage("Are the balls hurting yet? Tied up and now the spins?");
    CMessage("oooh");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Shut up and slap your ass hard.");
    }
    CMessage("HARDER!");
    CMessage("I want to see a red ass there!");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now slap your balls twice and tell me how beautiful I am.");
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 100);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        holdEdge();
    }
    CMessage("Oh my %PetName%.");
    CMessage(random("You look so adorable following my orders", "This is making me so hot"));
    CMessage("What is in your mind? What dirty things would you like to do to me?");
    CMessage("Would you like to fuck my pussy? My ass, my feet. My face? My tits? Oh you would love to dont you?");
    CMessage("Your dirty thoughts need to be punished.");
    CMessage("Now reach behind and spank your ass 10 times.");
    CMessage("HARDER!");
    sleep(15);
    CMessage("Okey stop. Take the clothspins off your balls and take away the shoelace.");
    CMessage("%SitDown%");
    NoPainForYou();
}
function NoPainForYou()
{
    CMessage("Mmmm, you are delicious, %PetName%.");
    CMessage("Awww, poor baby.");
    CMessage("It had to be done, honey");
    return;
}