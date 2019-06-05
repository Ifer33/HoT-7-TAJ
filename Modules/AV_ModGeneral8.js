DMessage("AV_ModGeneral8: start");
main();
DMessage("AV_ModGeneral8: end");
function main()
{
    if(getVar("AV_ModGeneral8_NotFirstTime", false))
    {
        AV_ModGeneral8_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral8", 0);
    setVar("AV_ModGeneral8_NotFirstTime", true);
    AV_ModGeneral8_NotFirstTime();
}
function AV_ModGeneral8_NotFirstTime()
{
    if (getVar("AV_ModGeneral8", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral8", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral8", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral8", getVar("AV_ModGeneral8", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral8", getVar("AV_ModGeneral8", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral8", getVar("AV_ModGeneral8", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral8", getVar("AV_ModGeneral8", 0) + 1000);
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
    setVar("AV_ModGeneral8", 0);
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
    CMessage("Do you want to be a good boy for me %GeneralTime%?");
    CMessage("I know it\'s hard to be so vulnerable, but the fact you trust me to take care of you means the world to me.");
    CMessage("I wouldn\'t want to do this with anyone else either, %Name%.");
    CMessage("I promise to take good care of you, and keep you safe.");
    CMessage("Listen up...");
    CMessage("I want you to follow my instructions very carefully.");
    if(!getVar("av_fetish_pain", false))
    {
        AVSKIPain1();
        return;
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You are going to put a clothespin on each nipple.");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Then clip a 2nd clothespin onto 1 leaf end of each clothespin.");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You will twist the clothespins on your nipples, hold for 10 seconds, then release.");
        sleep(15);
    }
    CMessage("ok...on your feet, %Slave%.");
    setTempVar("av_intera_005", true);
    CMessage("It\'s time for another punishment session.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRPu48();
        return;
    }
    CMessage("This time, you will take your paddle/spoon");
    CMessage("and swat your naughty behind following the beats");
    CMessage("Ready?");
    CMessage("Go");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(12);
    CMessage("%GoodBoy%");
    Fimrnd();
    return;
    AVRPu48();
}
function AVRPu48()
{
    CMessage("Spread your ass cheeks apart.");
    CMessage("Wider!");
    CMessage("Now hold that until I say otherwise!");
    CMessage("Take your paddle/spoon, and whip each ass cheek 50 times!");
    sleep(20);
    CMessage("There, nice and bright red, just as it should be!");
    Fimrnd();
}
function Fimrnd()
{
    CMessage("Are your nipples sensitive?");
    CMessage("You\'re nipples are so hard for me. Does that mean you\'re enjoying yourself?");
    CMessage("You are such a naughty boy! Mental note taken, nipple torture are good.");
    CMessage("That\'s right, you\'re my naughty boy.");
    AVSKIPain1();
}
function AVSKIPain1()
{
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    if(getVar("av_fetish_gag", false))
    {
        CMessage("%BallGagOn%");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I can feel your balls getting heavy with cum.");
    CMessage("It\'s all mine, do you understand?");
    CMessage("Every last drop.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("I never claimed to be a saint.");
    CMessage("In fact what I\'m about to do to you is the total opposite of saintly.");
    CMessage("%KneelForMe%");
    if(!getVar("av_fetish_pain", false))
    {
        AVSKIPain2();
        return;
    }
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Do you like the view down there?");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    if(getVar("AV_Know_17", false))
    {
        CMessage(getVar("AV_Persona09", ""));
    }
    if(!getVar("AV_Know_17", false))
    {
        CMessage("Good boy");
    }
    AVSKIPain2();
}
function AVSKIPain2()
{
    CMessage("I knew you would follow instructions.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Move your hand over the head, and rub the base with your thumb.");
    CMessage("That\'s what my tongue would be doing to you %SubName%.");
    CMessage("Mmm, wouldn\'t it be so much better in my mouth?");
    CMessage("Your other hand, I want you to pull it round the bottom to cup at your balls");
    CMessage("palming them");
    CMessage("kneading them and massaging them");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    if(!getVar("av_fetish_pain", false))
    {
        AVSKIPain3();
        return;
    }
    CMessage("Now I want " + randomInt(2, 4) + "Clothespins on your balls");
    sleep(20);
    AVSKIPain3();
}
function AVSKIPain3()
{
    CMessage("I could ruin you at any moment, I could tell you to stop and leave you frustrated, but I won't.");
    CMessage("I want your cock to explode for me, just not quite yet...");
    CMessage("I love to watch you do that.");
    CMessage("You're like a toy that can play with itself... **%Laugh%**");
    DoEdges(3, 3, 0);
    CMessage("%SitDown%");
    if(!getVar("av_fetish_pain", false))
    {
        AVSKIPain4();
        return;
    }
    CMessage("And remove everything");
    AVSKIPain4();
}
function AVSKIPain4()
{
    if(getVar("AV_Know_17", false))
    {
        CMessage(getVar("AV_Persona09", ""));
    }
    if(!getVar("AV_Know_17", false))
    {
        CMessage("Good boy");
    }
    delVar("av_intera_005");
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
    CMessage("Don\'t you wish you were here to play with me?");
    CMessage("That softness, that weight would feel so good in your hands, wouldn\'t it? %EmoteMoan%");
    CMessage("sit on your hands for me.");
    CMessage("What would you do if you were here with me?");
    CMessage("Would you just gently rub the outside of my pussy with your flat hand?");
    CMessage("Would you run a finger up...and down my slit?");
    CMessage("Or would you thrust your cock deep inside of me and savor my muscles squeezing your every inch? %EmoteMoan%");
    CMessage("Do you want to stroke yourself for me?");
    CMessage("Are you ready for that?");
    CMessage("Tell me how badly that cock is crying out to be touched.");
    sleep(15);
    CMessage("That\'s it. Good boy.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("That\'s it. Get yourself all worked up.");
    CMessage("Imagine my hand lightly going up and down.");
    CMessage("Up and down.");
    CMessage("Give the head some attention.");
    CMessage("Take your thumb and forefinger and pretend my lips are wrapped around it.");
    CMessage("Squeeze.");
    CMessage("Work your thumb over the tip.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Your balls are just bursting for their own orgasm, aren\'t they?");
    CMessage("Well it\'s not time for that yet.");
    if(!getVar("AV_LikeAnal", false))
    {
        AVSKIPAn1();
        return;
    }
    CMessage("Go get some lube");
    sleep(20);
    CMessage("What I want you to do now is lube up your fingers.");
    CMessage("Oh, you\'re just so excited, aren\'t you?");
    CMessage("It\'s not the orgasm you wanted, but you were just dying to play with that prostate, weren\'t you?");
    CMessage("Get yourself all nice and lubed up.");
    CMessage("Mm-hm. There you go.");
    CMessage("Bring your legs up.");
    CMessage("Put your knees up near your shoulders and present your ass to me.");
    if(getVar("AV_Know_17", false))
    {
        CMessage(getVar("AV_Persona09", ""));
    }
    if(!getVar("AV_Know_17", false))
    {
        CMessage("Good boy");
    }
    CMessage("Put one hand on your cock and stroke slowly.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("SLOWLY.");
    CMessage("With your other hand, trace little circles around your asshole.");
    CMessage("Rub it lightly.");
    CMessage("Tickle it.");
    CMessage("Are you ready, slave?");
    CMessage("Put your fingers in your ass");
    CMessage("just a little bit, not even to the first knuckle.");
    CMessage("Hold them there for a second.");
    CMessage("Are you still playing with your cock?");
    CMessage("Good. Now take your fingers out.");
    CMessage("Rub them up to your balls and back down to your asshole");
    CMessage("just like I would tease my slit.");
    CMessage("Massage your prostate from the outside.");
    CMessage("Ready to put your fingers back in?");
    CMessage("Push them in slowly, just halfway and stop.");
    CMessage("Hold them there.");
    CMessage("Keep those muscles relaxed.");
    CMessage("With a very light grip, on your cock, I want you to stroke quickly.");
    CMessage("Very light and very fast.");
    CMessage("Feel your ass wanting to tense and pull your fingers in.");
    CMessage("But don\'t let it.");
    CMessage("Think about how good it would feel to press on your g-spot right now.");
    CMessage("But don\'t do it.");
    //CMessage("Edge for me.");
    //startEdging();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
	startEdging("Edge for me.");
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("I want you to plunge your fingers the rest of the way into your ass");
    CMessage("and press against your prostate.");
    CMessage("You\'d better not cum from it.");
    CMessage("All the way in.");
    CMessage("Press your fingers up into that spot you find so pleasurable.");
    CMessage("Don\'t even think about cumming.");
    CMessage("Don\'t think of your fingers pushing a delicious load up through your cock.");
    CMessage("Fuck yourself.");
    CMessage("Let your fingers relax and then press them again.");
    CMessage("Relax and press.");
    CMessage("Don\'t think about me being there with a strap-on.");
    CMessage("Don\'t think about my warm breath on your neck as I whisper in your ear, begging for your cum.");
    CMessage("Keep fucking yourself.");
    CMessage("Moan for me");
    CMessage("I wish I could feel your cock twitching in my hand as I fuck you.");
    CMessage("Now rub the top of your cock.");
    CMessage("No grabbing, no gripping, just a flat palm and flat fingers.");
    CMessage("Doesn\'t that feel good?");
    CMessage("That slippery wetness combined with the dull heat as your press against your g-spot?");
    CMessage("If I were there, it would be my wetness.");
    CMessage("rub it faster.");
    CMessage("Can you cum like this? Is it enough?");
    CMessage("Or is it just enough to keep you on edge and never allow you to cum?");
    CMessage("It doesn't matter because you're going to stop touching your cock.");
    CMessage("Hands off.");
    CMessage("Take your fingers out of your ass.");
    CMessage("Stroke yourself.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Fast.");
    CMessage("Faster.");
    CMessage("Are you going to be a good boy for your mistress?");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("Now fuck yourself.");
    CMessage("Press on that prostate.");
    CMessage("Massage that button just like you\'d want me to.");
    CMessage("Moan. I want to hear your desire.");
    CMessage("I want you pleading to cum.");
    CMessage("Fingers out, and stroke yourself again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("That load is just building up, isn\'t it?");
    CMessage("Get to the edge and ride it.");
    //startEdging();
    holdEdge();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("Fuck yourself again, and keep that cock ready.");
    CMessage("If I were to tell you to cum right now, could you?");
    CMessage("You see, boy, this is what it feels like to give your control to me.");
    CMessage("The line between being a good boy and being disobedient is razor thin, and I want you tiptoeing it.");
    CMessage("Because it entertains me.");
    CMessage("You entertain me.");
    CMessage("Stop Fucking");
    CMessage("Good boy.");
    CMessage("Now get yourself cleaned up");
    sleep(20);
    AVSKIPAn1();
}
function AVSKIPAn1()
{
    CMessage("Well, You are my slave now.");
    CMessage("You should be thankful.");
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
    CMessage("I know that when all is said and done");
    CMessage("when you\'ve squeezed the last few drops of cum out of your %Cock%");
    CMessage("you tend to feel pretty darn miserable.");
    CMessage("But...the grass is always greener.");
    CMessage("So I want you to think about something as you stroke your cock for me...");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("Given the chance, would you give this up?");
    CMessage("If you could take a pill to switch off your arousal to femdom");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("to humiliation");
    }
    CMessage("to the fact that you\'re so utterly addicted, would you swallow it?");
    CMessage("No more fetish obsessions.");
    CMessage("Just a regular guy, enjoying vanilla porn in healthy doses.");
    CMessage("Do you want that?");
    CMessage("Tell me out loud as you pump.");
    CMessage("Admit the truth to me as I mindfuck you deeper into addiction.");
    CMessage("Allow me to show you how little \"real life\" satisfies you.");
    CMessage("You need this.");
    CMessage("It\'s not just that you want it, that you desperately crave my control.");
    CMessage("You NEED this.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You were born inferior.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You were destined to be a loser.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("As miserable as you might feel after the cum spurts out of your cock");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("it\'s nothing compared to the misery of your every day life...");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("exactly why you come here in the first place.");
    }
    CMessage("%stopstroking%", 0);
	stopStroking();
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
    CMessage("Here I am, looking at you.");
    CMessage("Thinking about what we\'re going to do...");
    CMessage("Hmm...");
    CMessage("It\'s one thing to daydream about this while I\'m pretending to pay attention in meetings");
    CMessage("to imagine you obeying me");
    CMessage("imagine making you do things you\'ve never done before");
    CMessage("imagine you cumming harder than I\'ve ever seen you cum before.");
    CMessage("But it\'s a little different actually being here, with you actually lying there naked");
    CMessage("waiting for me to tell you what to do.");
    CMessage("I have to admit that I\'m not completely sure what I\'ll have you do");
    CMessage("how far I\'ll push you.");
    CMessage("But I am really fucking horny.");
    CMessage("Too horny for foreplay.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Bend your knees a little more for me.");
    CMessage("Keep stroking.");
    CMessage("Open your mouth, just a tiny bit.");
    CMessage("Good. Very good.");
    CMessage("this isn\'t about just standing here watching you jack off.");
    CMessage("I mean, I\'m enjoying it, but there are MANY other things I want to see you do before we\'re done.");
    CMessage("I do need you to show me you know I\'m in charge.");
    CMessage("I have big plans for you. And I don\'t want you backing out on me, spoiling my fun.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Open your mouth. Wider. Show me your tongue. Mmmmm.");
    }
    CMessage("Keep stroking.");
    CMessage("Show me some pre-cum. I want to see some.");
    CMessage("Squeeze it out.");
    CMessage("There you go. Good!");
    if(!getVar("av_fetish_cei", false))
    {
        SkipCEI4();
        return;
    }
    CMessage("Now take your other hand, the one you aren\'t stroking with, and get a little bit on your finger tip.");
    CMessage("Now put that finger tip on the tip of your tongue.");
    CMessage("I told you I\'d be pushing you!");
    CMessage("Go ahead, just a tiny taste, for me.");
    CMessage("Not so bad, right? A little sweet?");
    CMessage("Now, do it again.");
    CMessage("Just the tip of your finger, just the tip of your tongue.");
    CMessage("I bet you\'ve never done this before!");
    CMessage("I\'ve never seen a guy do it before either.");
    CMessage("It's . . . sexy.");
    CMessage("Now put some more on your finger and put your finger all the way in your mouth.");
    CMessage("Suck on your finger");
    CMessage("I want to go further.");
    CMessage("You\'re eating your own cum.");
    CMessage("For me.");
    CMessage("Holy shit.");
    CMessage("My heels feel so tall right now...");
    SkipCEI4();
}
function SkipCEI4()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Stretch your legs out.");
    CMessage("Stretch your arms out.");
    CMessage("Show me what I\'m working with.");
    CMessage("Let me use my imagination.");
    CMessage("%KneelForMe%");
    CMessage("Arms out.");
    CMessage("Mouth open.");
    CMessage("Turn away from me so I can see your ass.");
    CMessage("Mmm...");
    CMessage("Reach back with both hands and spread your ass cheeks apart.");
    CMessage("Show me everything.");
    CMessage("Mmm...");
    CMessage("I want to see that ass.");
    if(getVar("AV_LikeAnal", false))
    {
        Anal59();
        return;
    }
    SkipAnal59();
    return;
    Anal59();
}
function Anal59()
{
    CMessage("I want to see that ass...fucked.");
    CMessage("Go get lube");
    sleep(30);
    CMessage("Yes. Bend over, face down, hands holding your ass open.");
    CMessage("Yes. That\'s good - very good.");
    CMessage("I think that I am going to cum while watching you fuck your ass for me. %Emote%.");
    CMessage("Put some lube on the middle finger");
    CMessage("Hmm. And the ring finger.");
    CMessage("More lube.");
    CMessage("I said I was going to cum while watching you fuck your ass, not while watching you finger your ass.");
    CMessage("More. Good.");
    CMessage("I\'m going to cum so hard, trust me.");
    CMessage("Oh, and no touching your cock.");
    CMessage("I\'m cumming, not you.");
    CMessage("Now reach back and slide your lubed up fingers into your ass.");
    CMessage("Do it slowly, I don\'t want you to hurt yourself.");
    CMessage("Maybe just go in a little ways, then come out, then back in a little bit.");
    CMessage("Up to your second knuckle is good.");
    CMessage("For now. In and out, in and out.");
    CMessage("In a little deeper, out not quite as far, in and out, in and out.");
    CMessage("In a little deeper.");
    CMessage("Hold it there.");
    CMessage("Out a little, In more, out, in, in, in all the way.");
    CMessage("As far as you can.");
    CMessage("Is that as far as they go?");
    CMessage("Sit back and sit down on your hand.");
    CMessage("I want to see your fingers all the way up in your ass.");
    CMessage("Oh yes... sit back all the way.");
    CMessage("Now just hold that position.");
    CMessage("If you can feel your prostate feel free to wiggle your fingers a little bit, anything that feels good.");
    CMessage("Right now this is all about me cumming, but that doesn\'t mean you can enjoy yourself too!");
    CMessage("Of course, no touching your cock!");
    CMessage("Ok, now keep your hand on the chair and sit up and down a little.");
    CMessage("Just enough you feel your fingers slide out and back in.");
    CMessage("Do it again.");
    CMessage("And again.");
    CMessage("That\'s what an ass looks like when it is getting fucked.");
    CMessage("Keep going.");
    CMessage("Oh god yes.");
    CMessage("Keep going.");
    CMessage("Keep going.");
    CMessage("Stop");
    CMessage("%HolyShit% That was insane.");
    SkipAnal59();
}
function SkipAnal59()
{
    CMessage("I hope you enjoyed that a hundredth as much as I did!");
    CMessage("You\'re amazing! Best toy ever!");
    CMessage("I\'m going to throw out my vibrator and just ask you to perform for me whenever I want to cum.");
    CMessage("Ok. Wow.");
    return;
}