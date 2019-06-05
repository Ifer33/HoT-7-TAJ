DMessage("AV_ModFetish4: start");
main();
DMessage("AV_ModFetish4: end");
function main()
{
    if(getVar("AV_ModFetish4_NotFirstTime", false))
    {
        AV_ModFetish4_NotFirstTime();
        return;
    }
    setVar("AV_ModFetish4", 0);
    setVar("AV_ModFetish4_NotFirstTime", true);
    AV_ModFetish4_NotFirstTime();
}
function AV_ModFetish4_NotFirstTime()
{
    if (getVar("AV_ModFetish4", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModFetish4", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModFetish4", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModFetish4", getVar("AV_ModFetish4", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModFetish4", getVar("AV_ModFetish4", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModFetish4", getVar("AV_ModFetish4", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModFetish4", getVar("AV_ModFetish4", 0) + 1000);
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
    setVar("AV_ModFetish4", 0);
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
    CMessage("%PetName%");
    CMessage("%domFriend1Name% asked me just asked me if she could make you edge a little for her");
    CMessage("%OfCourse% I said sure %Grin%");
    addContact(2);
    SMessage("See, I was a little easy on you when we first met.", -1, 2);
    SMessage("I didn\'t think it was right to just completely destroy you before %domFriend3Name% had a turn with you.", -1, 2);
    SMessage("But now that she has..", -1, 2);
    SMessage("I can fuck you up without holding back", -1, 2);
    SMessage("%StartStroking%", -1, 2);
    SMessage("From now on...all stroking is done on my terms", -1, 2);
    SMessage("You don\'t get to jerk off without my say so", -1, 2);
    SMessage("you don\'t even get to TOUCH it unless I let you", -1, 2);
    SMessage("And you sure as HELL don\'t get to cum", -1, 2);
    SMessage("The hornier you get...the more receptive you\'ll be to what I have to say to you", -1, 2);
    //SMessage("%Edge%", -1, 2);
    //startEdging();
	edge("%Edge%",-1,2);
    SMessage("%DomName% and I thought very hard about the best way to keep you from cumming.", -1, 2);
    SMessage("We considered locking you up in a permanent chastity device, but that was a little too kinky for our tastes.", -1, 2);
    /*SMessage("%Edge%", -1, 2);
    startEdging();
	SMessage("%stopstrokingedge%", null, 4);
	SMessage("%lettheedgefade%", -1,4);*/
	edge("%Edge%",-1,2);
    SMessage("So in the end, we decided on something simple and effective", -1, 2);
    SMessage("We\'re just going to break your %Cock%", -1, 2);
    SMessage("What\'s that look for? It\'s not like we\'re going to physically snap it in half", -1, 2);
    //SMessage("%StartStroking%", -1, 2);
	setStrokingNoTaunt(null,-1,2);
    SMessage("Now, threats are all fine and good", -1, 2);
    SMessage("they keep you in line easily enough", -1, 2);
    SMessage("But you and I both know they aren\'t the only reason", -1, 2);
    SMessage("that you\'re going to comply with every little thing we tell you to do", -1, 2);
    SMessage("You\'re going to touch yourself in every way we want", -1, 2);
    SMessage("Hurt yourself in every way we tell you to", -1, 2);
    SMessage("because we both know", -1, 2);
    SMessage("that this the only kind of attention you deserve from women", -1, 2);
    CMessage("%stopstroking%", 0);
	stopStroking();
    SMessage("You\'re going to elevate your own arousal to a level beyond pain, beyond suffering.", -1, 2);
    SMessage("The more you edge,the quicker you'll get there...",-1,2);
    //SMessage("so edge for me now.", -1, 2);
    //startEdging();
	edge("so edge for me now.", -1, 2);
    SMessage("Soon you\'ll get to a place where you\'re more desperate to cum than you\'ve been in your entire life", -1, 2);
    SMessage("All that stroking and edging will begin to add up", -1, 2);
    SMessage("until just the mere THOUGHT of touching yourself will make you cry.", -1, 2);
    //SMessage("%Edge%", -1, 2);
    //startEdging();
	edge("%Edge%", -1, 2);
    SMessage("I want as much ache as possible to settle in your flesh before you start stroking again", -1, 2);
    SMessage("When you\'ve finally been teased to the point of desperation", -1, 2);
    SMessage("to the point where you will absolutely go insane if you don\'t cum", -1, 2);
    SMessage("that\'s when it would be perfect to make you ruin your orgasm. %Emote%", -1, 2);
    SMessage("That\'s how every orgasm you\'re ever going to feel from now on should be.", -1, 2);
    SMessage("Which sucks for you, because cocks aren\'t supposed to do all that work by themselves.", -1, 2);
    SMessage("It puts a horrible strain on the flesh and plumbing", -1, 2);
    //SMessage("Think about that...and give me another edge", -1, 2);
    //startEdging();
	edge("Think about that...and give me another edge", -1, 2);
    SMessage("I hope you weren\'t expecting any %Mercy%", -1, 2);
    removeContact(2);
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
    CMessage("%SubName%");
    CMessage("Get a cock ring or some sort of string or rope of your choice");
    CMessage("to wrap that cock up nice and tight and keep you hard just for me.");
    let answer0 = getInput("I will be waiting...");
    while (!(answer0.isLike("Done") || answer0.isLike("ready") || answer0.isLike("yes")))
    {
        answer0 = getInput("Are you ready %Slave%?");
    }
    if (answer0.isLike("Done", "ready", "yes"))
    {
        CMessage("Good %Slave% %EmoteLaugh% Now we can begin.");
    }
    CMessage("We are going to start slowly, teasing those %Balls%.");
    CMessage("Good boy, now take out that cock ring, or that string or rope.");
    CMessage("I want you to put that cock ring around your dick and balls");
    CMessage("if you don\'t have one I want you to take that string");
    CMessage("and wrap it around your dick and balls twice and tie a nice neat knot");
    let answer1 = getInput("I will be waiting...");
    while (!(answer1.isLike("Done") || answer1.isLike("ready") || answer1.isLike("yes")))
    {
        answer1 = getInput("Are you ready %Slave%?");
    }
    if (answer1.isLike("Done", "ready", "yes"))
    {
        CMessage("Good %Slave% %EmoteLaugh%");
    }
    CMessage("%StartStroking% slow and steady.");
    CMessage("Take your non dominant hand and start playing with your nipples.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Pinch them, squeeze them, and play with them while you %Stroke%.");
    }
    CMessage("I know they\'re not as sensitive as my little, soft, pink nipples are");
    CMessage("but you\'ll have to make due. After all, you are just a boy.");
    CMessage("How do those %Balls% feel? Tight?");
    let answer2 = getInput("Full of cum? Aching?");
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("%StrokeFaster%");
    CMessage("Take your hand away from your nipples and start squeezing those %Balls%");
    CMessage("like you\'re trying to force the cum from that cock.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Faster. Do you think I\'m fucking around?");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("FASTER slave.");
    }
    CMessage("Oops! %EmoteLaugh%");
    CMessage("I forgot to play my favourite little game first.");
    CMessage("%stopstroking%", 0);
    CMessage("Just keep kneading those balls for me pet, and listen to what mistress has to say.");
    CMessage("I think I want to take your breath away.");
    CMessage("I know this %Pussy% would do the trick");
    CMessage("but unfortunately for you, all you have is my words %EmoteLaugh%");
    CMessage("But I promise you I can make due.");
    CMessage("I want you to hold your breath for me %PetName%");
    CMessage("As long as you hold your breath you can stroke for me.");
    CMessage("And you know what else? I think I want my pet on his knees.");
    CMessage("%KneelForMe% and take a long, deep breath.");
    CMessage("You\'re going to need it %EmoteLaugh%");
    CMessage("Breathe in... and hold");
    sleep(15);
    CMessage("Now let go.");
    CMessage("Mmm good boy, you\'re making your mistress happy.");
    CMessage("You can continue stroking, but stay on your knees.");
    CMessage("Those %Balls% are probably starting to get really sore aren\'t they?");
    CMessage("I can imagine how red your cock is with all that blood pumping through your veins.");
    CMessage("You might be a little too turned on.");
    CMessage("%stopstroking%", 0);
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTCock_First.js");
		cbt("cock");
    }
    CMessage("Good, now we can continue. I want you trained for me.");
    CMessage("So we\'re going to try that again. This time for a bit longer.");
    CMessage("Breathe in... and hold.");
    sleep(20);
    CMessage("Good boy, you can breathe again.");
    CMessage("You looked a little tense this time. Like you weren\'t going to make it.");
    CMessage("But we\'ll fix that. I know your knees are getting sore so I\'ll be quick this time.");
    CMessage("Now get ready to take a deep breath.");
    CMessage("Breathe in... and hold.");
    sleep(10);
    CMessage("Ten seconds, keep holding it %Slave%.");
    CMessage("Just focus on that cock. How good does it feel?");
    CMessage("I know how badly you want to please me. Just stroke and think of me");
    CMessage("What it would be like if I was standing over you");
    CMessage("rubbing my clit and maybe, just maybe playing with my asshole.");
    CMessage("Ok you can breathe.");
    //CMessage("Now you can get off your knees and sit down.");
	CMessage("%SitDown%");
    CMessage("You were so close but now I am getting bored. Time for some excitement.");
    run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber")
    CMessage("%_YouHaveNoIdeaHowMuchFunThisIs%");
    switch(random("dice1", "dice2"))
    {
        case "dice1":
        dice1();
        return;
        break;
        case "dice2":
        dice2();
        return;
        break;
    }
    dice1();
}
function dice1()
{
    CMessage("%KneelForMe%");
    sleep(10);
    switch(random("dice3", "dice4"))
    {
        case "dice3":
        dice3();
        return;
        break;
        case "dice4":
        dice4();
        return;
        break;
    }
    dice2();
}
function dice2()
{
    CMessage("put your legs up in the desk in the shape of a V");
    CMessage("like a slut ready to get fucked");
    sleep(10);
    switch(random("dice3", "dice4"))
    {
        case "dice3":
        dice3();
        return;
        break;
        case "dice4":
        dice4();
        return;
        break;
    }
    dice3();
}
function dice3()
{
    CMessage("%StartStroking%");
    Inter();
    return;
    dice4();
}
function dice4()
{
    CMessage("play with just your balls for now");
    Inter();
}
function Inter()
{
    CMessage("%_IKnowYouLongToCum%");
    switch(random("dice5", "dice6"))
    {
        case "dice5":
        dice5();
        return;
        break;
        case "dice6":
        dice6();
        return;
        break;
    }
    dice5();
}
function dice5()
{
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    CMessage("%_IKnowYouLongToCum_ST_2L%");
    Fim1();
    return;
    dice6();
}
function dice6()
{
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("%_IKnowYouLongToCum_ST_2L%");
    Fim1();
    return;
    Fim1();
}
function Fim1()
{
    CMessage("Ok so I think I\'ve been enough of a mean bitch of a mistress");
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
    if(getVar("av_fetish_pegging", false))
    {
        av_fetish_pegging();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Audio.js");
    return;
    return;
    av_fetish_pegging();
}
function av_fetish_pegging()
{
    if (randomInteger(1, 100) <= 50)
    {
        Outropeg();
        return;
    }
    CMessage("%PetName%, I think it\'s time for me to tell you some of my kinky fantasies.");
    CMessage("We\'ve been exploring all the kinky fantasies I have, and don\'t get me wrong I\'m loving it.");
    CMessage("One of my favourites fantasies is to fuck you in the %Ass% with my strap-on.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("I love the power it gives me over you, the look on your face as I wank my hard 10\'\' Cock");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("as I stand over you, legs apart so you can see the harness strapped onto my %Pussy% mound.");
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Are you looking at the picture, imagining you were here on your knees, naked with your %Cock% in your hand!");
    showTaggedImage(4, ["strapon"]);
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I know all boys fantasise about being fucked by a girl, you won\'t admit it to your mates");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("but deep down the thought of a young girl penetrating your %Ass% gets you rock hard and wanking like crazy");
        showTaggedImage(4, ["strapon"]);
        sleep(10);
    }
    CMessage("I would command, as kick your back, legs in the air with your anus spread inviting me to penetrate you.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("I don\'t use any lube, just pull your %Ass% cheeks apart and spit in your sphincter.");
    }
    CMessage("I would scream as I shoved two fingers up your %Ass%");
    CMessage("pressing down on your prostate and opening your bum hole up to receive my %Cock%.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    showTaggedImage(4, ["strapon"]);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You could scream as I do this as I tear into your anal passage,");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("violating your virgin ass holes, some just whimper and cry");
        showTaggedImage(4, ["strapon"]);
        sleep(10);
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("but you would lose your %Erection% as I slam my %Cock% up to the hilt");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("something really weird happens like you slowly turning into a girl and losing your manhood as youre fucked.");
    }
    CMessage("You go from %Stroking% your %Cock% with your fist to rubbing the tiny little stubby tip of your %Cock% with your index finger and thumb");
    CMessage("this truly is a show of GIRL POWER and again a demonstration on how weak a sex you boys are.");
    CMessage("For a girl to grind her pussy mound");
    CMessage("banging her clit against a blokes ass cheeks is the ultimate turn on");
    CMessage("seeing your pathetic %Cock% and %Balls% shrivelled up in defeat");
    CMessage("as I penetrate you with the full width and length of my strap-on.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    showTaggedImage(4, ["strapon"]);
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("The final humiliation is when I pull out sharply,");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("seeing the redness of your %Ass% ring all swollen, burning!!");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I whip my harness off");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("diddle my %Pussy% until its pissing cunt juice all over that raw sphincter");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("causing you to scream out in pain as the acid of my girl juice burns your boy bum hole.");
		showTaggedImage(4, ["strapon"]);
        edge();
    }
    if (randomInteger(1, 100) <= 50)
    {
        AVRND15();
        return;
    }
    CMessage("Finally I raise your legs above your head");
    CMessage("order you to %Stroke% off until you cum over your pathetic face");
    CMessage("and that\'s where my other fantasy starts");
    CMessage("because I love to piss on %Slave%, just as you cum");
    CMessage("you are so vulnerable at that time you would let a girl do anything to you.");
    CMessage("Now shove your cock between you legs.");
    CMessage("Because I fancy giving you one last milking!!!");
    CMessage("Thats it %Stroke% it like this, down strokes");
    CMessage("If it was as %Big% as mine you could shove it up your own ass!!");
    AVRND15();
}
function AVRND15()
{
    return;
    Outropeg();
}
function Outropeg()
{
    CMessage("Would you like to hear about what I will be wearing for you tonight?");
    CMessage("instead of panties I am wearing a brand new strap-on that I have been dying to try out.");
    CMessage("Like this one");
    showTaggedImage(4, ["strapon"]);
    CMessage("Once you reach me I am going to have you kiss the head of my strap-on once again.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND03();
        return;
    }
    CMessage("In between kisses you will declare your devotion and total commitment to me.");
    AVRND03();
}
function AVRND03()
{
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Once I am satisfied in your expression of dedication I will allow you to suck on my cock.");
    CMessage("I am going to enjoy watching your head bob up and down on my strap-on");
    CMessage("as you work it farther and farther down your throat.");
    CMessage("You should know that I will not be afraid to grab the back of your head and push it down even further");
    CMessage("if I %Feel% you are not taking as much of it as possible.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND04();
        return;
    }
    CMessage("I must be satisfied that you are giving me your best effort.");
    CMessage("As your mistress, I deserve your best effort.");
    AVRND04();
}
function AVRND04()
{
    CMessage("When I am happy with your performance I will push you back to rest.");
    CMessage("Then I will make you watch as I apply a glob of lube along with your saliva.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("I am going to take my time slathering it up and down the shaft");
    CMessage("so you can appreciate the fact that the entirety of it");
    CMessage("will be thrust into your tight little %Ass% %Very% soon.");
    CMessage("Then I am going to push you face down on the floor once again");
    CMessage("and take my place behind you with your %Ass% high in the air for me.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND05();
        return;
    }
    CMessage("With the tip of my strap-on perched at your hole");
    CMessage("I am going to let it rest there for a few moments.");
    CMessage("I want you to take it all in.");
    AVRND05();
}
function AVRND05()
{
    CMessage("I want you to feel the measure of your helplessness as it knocks gently at your back door.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Before I finally push the head in I am going to make you ask for it");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("No, I am going to make you %Beg% for it.");
    }
    CMessage("With my cock hovering on the brink of your asshole I am going to make you %Beg% for me to fuck you.");
    if(getVar("AV_DommeHornie1", false))
    {
        CMessage("I am going to make you tell me how bad you want it.");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("I am going to make you plead for me to plunge it deep inside you.");
    }
    CMessage("After relishing in your beseechment,");
    CMessage("I will push the head of my cock slowly into your %Ass%.");
    CMessage("Once I get it just a couple inches in I will stop. ");
    CMessage("I will hold your hips in place so that you cannot push back,");
    if(getVar("AV_DommeHornie1", false))
    {
        CMessage("because I know you will want more.");
    }
    CMessage("I am going to make you wait for it.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Once again I am going to make you plead for it.");
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("I will repeat this over and over again.");
    CMessage("I will give you a little bit more of my strap-on cock");
    CMessage("as I %Feel% you have earned it by your %Begging%.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND06();
        return;
    }
    CMessage("I will slowly fill up your %Ass% with my member until I finally get it completely inside you");
    CMessage("And then the real fun will begin.");
    AVRND06();
}
function AVRND06()
{
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Now that I have opened you up to receiving my whole cock");
    CMessage("I will pull it most of the way out and then thrust it back in. Like this");
    showTaggedImage(4, ["strapon"]);
    sleep(10);
    CMessage("Then I will do it again..");
    showTaggedImage(4, ["strapon"]);
    sleep(10);
    CMessage("and again.");
    showTaggedImage(4, ["strapon"]);
    sleep(10);
    CMessage("After a while I will take hold of your wrists for a little added leverage");
    CMessage("so that I can pick up the pace.");
    CMessage("As I continue to pound your ass with my strap-on");
    CMessage("I am sure you will begin moaning with pleasure as you %Feel% the measure of my domination over you.");
    showTaggedImage(4, ["strapon"]);
    sleep(10);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    showTaggedImage(4, ["strapon"]);
    CMessage("%LetTheEdgeFade%");
    CMessage("You will begin thanking me for fucking you as I thrust into you harder and harder.");
    CMessage("Finally, after I have had my fill,");
    CMessage("I will pull my cock from your ass");
    CMessage("and push you over on your side so that you can relax while you catch your breath.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND07();
        return;
    }
    CMessage("I am confident by now there will be a steady flow of pre-cum flowing from the tip of your cock");
    CMessage("and your balls will be even tighter than before.");
    AVRND07();
}
function AVRND07()
{
    CMessage("I can hardly wait to feel them straining against their bondage.");
    CMessage("Once I have had a little fun toying with your boys,");
    CMessage("I will unlock the humbler as well as unclasp your hands.");
    CMessage("I will give you just a couple minutes to recover while I remove my strap-on.");
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
    if(getVar("av_fetish_pain", false))
    {
        av_fetish_pain();
        return;
    }
    let answer0 = getInput("Do you think this is %Sexy%");
    getTeasePicture();
    lockImages();
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m glad to hear you think so");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
    }
    CMessage("Cause you\'re %Gonna% edge to that right now %Grin%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    unlockImages();
    return;
    av_fetish_pain();
}
function av_fetish_pain()
{
    CMessage("You\'re %Aching% so hard right now");
    CMessage("you could probably cum just from squeezing your balls.");
    let answer0 = getInput("Do it! Squeeze those balls but don\'t you dare cum.");
    while (!(answer0.isLike("done") || answer0.isLike("get") || answer0.isLike("ready") || answer0.isLike("yes")))
    {
        answer0 = getInput("Are you done %PetName%?");
    }
    if (answer0.isLike("done", "get", "ready", "yes"))
    {
        CMessage("Good...");
    }
    CMessage("I just love precum, keep stroking nice and slow, get some more out!!");
    let answer1 = getInput("50 strokes, squeeze your balls while stroking, then...");
    while (!(answer1.isLike("done") || answer1.isLike("get") || answer1.isLike("ready") || answer1.isLike("yes")))
    {
        answer1 = getInput("Are you done %PetName%?");
    }
    if (answer1.isLike("done", "get", "ready", "yes"))
    {
        CMessage("Good...Let\'s start");
    }
    CMessage("Slap your %Balls% and edge for me. slap and");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Come on, slap them harder!");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    let answer2 = getInput("You like to have your balls slapped when you\'re on the edge, don\'t you?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("Yes or no %PetName%?");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("I know you like %Slave%");
    }
    else if (answer2.isLike("no"))
    {
        CMessage("Dont lie to me %Slave%");
    }
    CMessage("Grab your balls for me and give them a good squeeze.");
    CMessage("How much cum do you think you have for me so far?");
    return;
}