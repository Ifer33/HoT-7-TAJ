DMessage("AV_ModGeneral30: start");
main();
DMessage("AV_ModGeneral30: end");
function main()
{
    if(getVar("AV_ModGeneral30_NotFirstTime", false))
    {
        AV_ModGeneral30_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral30", 0);
    setVar("AV_ModGeneral30_NotFirstTime", true);
    AV_ModGeneral30_NotFirstTime();
}
function AV_ModGeneral30_NotFirstTime()
{
    if (getVar("AV_ModGeneral30", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral30", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral30", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral30", getVar("AV_ModGeneral30", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral30", getVar("AV_ModGeneral30", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral30", getVar("AV_ModGeneral30", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral30", getVar("AV_ModGeneral30", 0) + 1000);
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
    setVar("AV_ModGeneral30", 0);
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
    CMessage("Look at Me.. Lust over Me..");
    CMessage("Feel that cock throb over Me..");
    CMessage("It gives Me sooo much pleasure to deny you..");
    CMessage("knowing that you are all hot and horny and aching to cum..");
    CMessage("It is such a " + random("big turn on for Me", "rush for Me"));
    CMessage("Knowing that I am the one that is " + random("teasing ", "Denying ") + "you..");
    CMessage("But I like to share too...");
    addContact(2);
    SMessage("Is that " + random("rock ", "hard ") + "cock just waiting for your hands, %SubName%?", -1, 2);
    SMessage("Is it aching for a firm grip?", -1, 2);
    SMessage("Can you feel yourself throbbing thinking about my teasing tongue drawing a circle around the head and swirling it\'s way up to lick up all that leaking precum? Huh?", -1, 2);
    CMessage("We. Don\'t. Care.");
    CMessage("Do you want permission to stroke it yourself?");
    let answer0 = getInput("I suppose... if you ask me again. Nicely.", 5);
    if (answer0.isTimeout())
    {
        wernji9();
        return;
    }
    if (answer0.isLike("beg", "please"))
    {
        CMessage("Hmm.");
        if (randomInteger(1, 100) <= 60)
        {
            Ye456();
            return;
        }
    }
    else
    {
        CMessage("Not good enough...");
    }
    wernji9();
}
function wernji9()
{
    CMessage("Well, I\'d like to say yes, my darling, I really would.");
    CMessage("But you see, It would be very rude of you not to ask %domFriend1Name% permission as well, don\'t you agree?");
    let answer0 = getInput("Go ahead, %PetName%.",null, -1, true, 2);
    while (!(answer0.isLike("beg") || answer0.isLike("please")))
    {
        answer0 = getInput("Beg %SubName%");
    }
    if (answer0.isLike("beg", "please"))
    {
        SMessage("That\'s a good boy.", -1, 2);
    }
    CMessage("Now you have permission from both of us to stroke your cock.");
    Ye456();
}
function Ye456()
{
    //CMessage("%StartStroking%");
	Stroking();
    SMessage("That\'s it. Anyway you like it.", -1, 2);
    CMessage("Oh you *are* enjoying yourself, aren\'t you?");
    CMessage("Who would have thought you\'d be such a greedy slut for an audience?");
    SMessage("Putting on quite a show.", -1, 2);
    CMessage("My %PetName%, so eager to please and show himself off.");
    CMessage("I\'d almost punish you for enjoying this so much if you weren\'t making my friend so happy.");
    SMessage("%Lol%", -1, 2);
    SMessage("Let out all those delicious moans and whimpers for us.", -1, 2);
    //SMessage("%Edge%", -1, 2);
    //startEdging("%Edge%", -1, 2);
    DoEdges(2, 3, 0,-1,2);
    SMessage("That\'s was fun...Thanks %DomName%.", -1, 2);
    CMessage("You\'re welcome, %domFriend1Name%");
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
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I\'ve been thinking a lot about how humiliate you, %SubName%");
    }
    if(!getVar("av_fetish_humiliating", false))
    {
        CMessage("I\'ve been thinking a lot about how tease you more, %SubName%");
    }
    CMessage("And I think the best way was to reveal your kinks to my friends");
    if(!getVar("AV_LikeAnal", false) && !getVar("av_fetish_pain", false))
    {
        CMessage("Yes, %domFriend3Name% want to use you...");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Yes, %domFriend3Name% she is interested in fuck your ass");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%Lol% %domFriend3Name% want to see how much pain you can handle...");
    }
    addContact(4);
    CMessage("Good luck %SubName%");
    removeContact(1);
    CMessage("Your cock looks ready to be abused");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("get your dildo or something like that, and lube");
        sleep(30);
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(!getVar("av_fetish_pain", false))
    {
        a334fgt();
        return;
    }
    CMessage("Grab the spoon and get on all fours!");
    CMessage("Now I want " + randomInt(15, 25) + "smacks on each ass cheek with the spoon!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(30);
    CMessage("Aww did that hurt?");
    CMessage("Too bad %Slave%, give me 20 more on each cheek and don\'t complain to Goddess.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(30);
    CMessage("Your ass better be red");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("because I only fuck red asses");
    }
    if(!getVar("AV_LikeAnal", false))
    {
        a334fgt();
        return;
    }
    CMessage("Grab your dildo and lube it");
    sleep(30);
    CMessage("start fucking that tight ass for me boy!");
    CMessage("In and out 10 times!");
    sleep(10);
    CMessage("Then beg me to stop!");
    sleep(20);
    CMessage("Does it feel good %Slave%?");
    CMessage("Now fuck that ass in my count");
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("6");
    CMessage("7");
    CMessage("8");
    CMessage("9");
    CMessage("10");
    CMessage("Is your ass sore?");
    CMessage("I bet you feel like such a slut");
    CMessage("ohhhh if only you were with me right now.");
    a334fgt();
}
function a334fgt()
{
    //CMessage("%StartStroking%");
	Stroking()
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Keep the dildo inside your ass");
    }
    CMessage("Good boy!");
    CMessage("What is a matter, wanting to cum so bad now?");
    //CMessage("%Edge%");
    //startEdging();
    DoEdges(2, 3, 0,-1,4);
    CMessage("Poor balls, all blue and sore");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Grab your clothes pins, I hope you have at least 10.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put 2 on each nipple for me!");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now 3 on each side of your balls....");
        sleep(30);
    }
    CMessage("Mmmmmmmm. You are making Goddess horny!");
    CMessage("Beg me to let you stroke your cock some more...Beg boy!");
    CMessage("Beg more, you need to crave serving me...");
    //CMessage("%Edge%");
    //startEdging();
    DoEdges(2, 3, 0,-1,4);
    CMessage("Make that cock leak pre-cum.");
    CMessage("%KneelForMe%");
    CMessage("Wouldn\'t you love to be licking me to orgasm right now? I bet you would!");
    if(!getVar("av_fetish_pain", false))
    {
        a33rv9pl();
        return;
    }
    CMessage("Do you want to remove the clothes pins now %Slave%?");
    CMessage("Hehe, well I want you too...One by one but not so fast...");
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("6");
    CMessage("7");
    CMessage("8");
    CMessage("9");
    CMessage("10");
    CMessage("All done %Slave%?");
    CMessage("Mmmm look at those pinch marks, makes Goddess very happy.");
    CMessage("Grab the wooden spoon again...");
    CMessage("I want 10 smacks hard right above your cock...Make it sting.");
    CMessage(random("Hit ", "Spank ") + "your cock");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Good pet...");
    CMessage("Now your %Balls%");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%GoodBoy%");
    a33rv9pl();
}
function a33rv9pl()
{
	CMessage("%SitDown%");
    CMessage("Remove everything and go clean yourself");
    sleep(40);
    addContact(1);
    removeContact(4);
    CMessage("%EmoteWink%");
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
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I\'ve been thinking a lot about how humiliate you, %SubName%");
    }
    if(!getVar("av_fetish_humiliating", false))
    {
        CMessage("I\'ve been thinking a lot about how tease you more, %SubName%");
    }
    CMessage("And I think the best way was to reveal your kinks to my friends");
    if(!getVar("AV_LikeAnal", false) && !getVar("av_fetish_pain", false))
    {
        CMessage("Yes, %domFriend2Name% want to use you...");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Yes, %domFriend2Name% she is interested in fuck your ass");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%Lol% %domFriend2Name% want to see how much pain you can handle...");
    }
    addContact(3);
    CMessage("Good luck %SubName%");
    removeContact(1);
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("get your dildo or something like that, and lube");
        sleep(30);
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(!getVar("AV_LikeAnal", false))
    {
        a913gbdzw();
        return;
    }
    CMessage("Mmmm oh yes, this sweet juicy ass is going to be used.");
    CMessage("Hard and rough, fast and deep...");
    CMessage("that\'s the only way you\'re going to be fucked.");
    CMessage("You\'re already getting hard you pervert!");
    CMessage("Yeah, I\'m gonna start training this ass of yours..");
    CMessage("Some mighty big strap-ons are gonna plow this hole, but first things first.");
    CMessage("Oh, get lubed up and ready to");
    sleep(30);
    CMessage("put your legs on the table...open it!!");
    CMessage("Put the dildo deep into your ass");
    sleep(30);
    CMessage("Oooh, what a tight little asshole!");
    CMessage("Mhm!");
    CMessage("I love " + random("your asspussy", "your fuckhole"));
    CMessage("I\'m gonna feed it regularly.");
    CMessage("Start Pumping");
    CMessage("You like that huh?");
    CMessage("I bet you wish you could stroke that hard cock, but you can\'t!");
    CMessage(random("Can you feel the tension in you balls grow", "Oh, my poor baby boy\'s got an itch to scratch, huh"));
    CMessage("betas and buttplugs go together.");
    CMessage("They just do.");
    CMessage("Training the submissive male must include this critical component.");
    CMessage("your ass is mine to do with as I pleases.");
    CMessage("This reminds you of that important fact: I owns your ass now.");
    CMessage("Stop fucking your ass...");
    CMessage("But keep it inside");
    a913gbdzw();
}
function a913gbdzw()
{
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("That\'s it. That\'s a very good boy.");
    CMessage("Let all of your moans out.");
    CMessage("All of those little whimpers.");
    CMessage("Tell me how you feel. That\'s it.");
    //CMessage("%Edge%");
    //startEdging();
    DoEdges(2, 3, 0,-1,3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now, " + random("we will have an amazing combo of pain and pleasure", "We will be doing a series alternating between pain and pleasure", "You will have pleasure and pain mixed"));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("get the spoon ready...");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Some more edges?");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        //CMessage("%Edge%");
        //startEdging();
        DoEdges(2, 3, 0,-1,3);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        //CMessage("%Edge%");
        //startEdging();
        DoEdges(2, 3, 0,-1,3);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    //CMessage("%Edge%");
    //startEdging();
	edge("%Edge%",-1,3);
    CMessage(random("Wow, that was so cool", "What a show babe", "Spectacular"));
    CMessage("%SitDown%");
	CMessage("Remove everything and go clean yourself");
    sleep(40);
    addContact(1);
    removeContact(3);
    CMessage("%EmoteWink%");
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
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("I will provide you with a proper purpose as my good boy");
    CMessage("and in return, you will follow my every command.");
    CMessage("That means you and your cock belong to me");
    CMessage("until I am satisfied and decide you have held up your end of the bargain.");
    let answer0 = getInput("More than fair, don\'t you think?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You are probably wondering where this all leads, what it\'ll be like if you obey me.");
    CMessage("Pinch that nipple, harder. Let those nails do some work.");
    CMessage("That\'s right.");
    CMessage("Now grab your %Balls%");
    CMessage("Harder, get a good grip on those balls, how I would grab them.");
    CMessage("%GoodBoy%");
    CMessage("Let me give you more opportunities to show me that, right now, your body is mine.");
    CMessage("Whenever I say \"clench\", you are going to clench your PC muscle, hold on for about 3 seconds, and then release.");
    let answer1 = getInput("Understood?", 5);
    if (answer1.isTimeout())
    {
        AV_Timeo857();
        return;
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%Good% Now clench.");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Pay attention, %SubName%");
    }
    else
    {
    }
    AV_Timeo857();
}
function AV_Timeo857()
{
    CMessage("Alright, let\'s get going then, shall we?");
    //CMessage("%StartStroking%");
	Stroking();
    let answer0 = getInput("Tighten the grip on your balls! Were you still grabbing them?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo245();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I didn\'t tell you to let go. slap yourself in the face, then put your hand back down there.");
    }
    else
    {
    }
    AV_Timeo245();
}
function AV_Timeo245()
{
    CMessage("clench");
    sleep(10);
    CMessage("Now you can let go of your balls.");
    CMessage("Give those nipples some attention again.");
    CMessage("For now on, whenever you clench, also pinch one of your nipples.");
    CMessage("Let\'s try it out. Clench!");
    sleep(10);
    CMessage("I hope you\'re not too close yet, you still have some way to go.");
    CMessage("You wouldn\'t want to fail already.");
    CMessage("Clench!");
    CMessage("That would be such a disappointment to me, and to yourself of course.");
    CMessage("Clench!");
    CMessage("That\'s unfair you think? Oh we are just getting started.");
    CMessage("clench, pinch the other nipple as hard as you can");
    CMessage("Is this too slow for you?");
    CMessage("Let me go faster.");
    CMessage("That means you should stroke faster, too.");
    CMessage("Clench!");
    CMessage("Clench!");
    CMessage("Clench!");
    CMessage("Get ready...");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage(random("That wasn\'t so bad", "Hm, so far so good"));
    CMessage("Do you see how exciting and good it feels to obey me?");
    CMessage("In theory, that should be enough motivation for you.");
    CMessage("But I will give you something else, another form of motivation.");
    CMessage("A reminder of what happens to those who stupidly refuse to follow my commands.");
    CMessage("Slapping your own balls can be quite painful.");
    CMessage("why don\'t you give it a try, so you know what not to bring on yourself.");
    CMessage("I think five slaps will do, at least to give you a taste.");
    CMessage("But I know it\'s hard. So let me help you.");
    CMessage("I\'ll count them out for you.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle05*.mp3");
    sleep(15);
    CMessage("Hey, that one wasn\'t all that bad.");
    //CMessage("Now Edge for me");
    //startEdging();
    edge();
    CMessage("OK, let\'s start properly");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
    sleep(15);
    CMessage("Oh I know it hurts, little boy, but you\'re making me so happy.");
    CMessage("Subjecting yourself to parts of your possible punishment just because I say so.");
    CMessage("Because you don\'t want to disappoint me.");
    CMessage("That pain in your balls is a reminder of that, be proud of it.");
    CMessage("And you did well.");
    CMessage("I think you should change position.");
    CMessage("%KneelForMe%");
    CMessage("Ass up.");
    CMessage("Yes, I think that\'s a great position for you to be in.");
    CMessage("Vulnerable and submissive.");
    CMessage("That should remind you of your position.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("with the other hand, rub around your asshole.");
    CMessage("I AM going to play with your ass a bit though.");
    CMessage("So here\'s the deal.");
    CMessage("Whenever you hear the whip, you\'re going to spank yourself for me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("OK, not bad, but a little harder.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Better, but keep hitting harder with each snap.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I hope you\'re still touching that cock. Clench.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I\'m quite enjoing myself, actually.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I love the thought of you spanking your own ass for me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I bet you love it, too. Admit it.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Clench.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Alright, this is going well. Time to spice it up a bit.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I\'m going to need you to get to the edge again.");
    CMessage("But to make it more interesting, I\'ll snap 10 times, and until I\'m done you will ride it.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "a3dg4fh4()")
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Ok, ready?");
    CMessage("%Edge%");
	//edge();
    bb345o();
}
function bb345o()
{
    sleep(15);
    CMessage("%CheerEdgeATon%");
    sleep(15);
    bb345o();
    return;
    a3dg4fh4();
}
function a3dg4fh4()
{
    CMessage("Hold the edge!");
    setVar("edgingmode", "Normal");
	delVar("edginggoto");
    CMessage("One");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Two");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Three");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Four");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Five");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Six");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Seven");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Eight");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...Nine");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("...And ten");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("%GoodBoy%");
    CMessage("%SitDown%");
    return;
}