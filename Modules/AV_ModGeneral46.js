DMessage("AV_ModGeneral46: start");
main();
DMessage("AV_ModGeneral46: end");
function main()
{
    if(getVar("AV_ModGeneral46_NotFirstTime", false))
    {
        AV_ModGeneral46_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral46", 0);
    setVar("AV_ModGeneral46_NotFirstTime", true);
    AV_ModGeneral46_NotFirstTime();
}
function AV_ModGeneral46_NotFirstTime()
{
    if (getVar("AV_ModGeneral46", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral46", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral46", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral46", getVar("AV_ModGeneral46", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral46", getVar("AV_ModGeneral46", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral46", getVar("AV_ModGeneral46", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral46", getVar("AV_ModGeneral46", 0) + 1000);
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
    setVar("AV_ModGeneral46", 0);
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
    CMessage("A good slave puts My happiness as the highest priority.");
    CMessage("A good slave " + random("makes sure I am content and comfortable", "puts Me first"));
    let answer0 = getInput("You want to be a good slave, don\'t you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        wantToBeAGoodBoyResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("As soon as you sit in front of Me");
    CMessage("you know you are a true submissive");
    CMessage("I\'m sure you know that you don\'t deserve to jerk to Me");
    CMessage("But that\'s just it.");
    CMessage("Your %Cock% is basically on an automated response to me");
    CMessage("because you\'ve conditioned yourself to get hard and jerk for ME.");
    CMessage("It\'s all worth being My %PetName%.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("I\'m going to torture your cock, balls, ego and anything else I please.");
    CMessage("That %Cock% and %Balls% belongs to Me");
    CMessage("and it\'s time to have some fun with it.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the ruler ready");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
        sleep(randomInt(35, 50));
    }
    CMessage("I\'m going to have you pump and punish your cock.");
    CMessage("Maybe I\'ll let you cum...");
    CMessage("Maybe I won\'t.");
    CMessage("I make the rules here.");
    DoEdges(2, 3, 0);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("A little bit of pain.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
        sleep(randomInt(35, 50));
    }
    CMessage("A little bit of pleasure.");
    DoEdges(2, 3, 0);
    CMessage("Basically whatever I want you to do.");
    let answer1 = getInput("That excites you, doesn\'t it?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You\'re just excited to be guided by Me.");
    CMessage("Not knowing whats coming next.");
    CMessage("On the edge of your seat.");
    CMessage("Edge of your orgasm.");
    CMessage("Until I finally let you cum.");
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
    CMessage("Before we continue I\'d like to make a few things clear.");
    CMessage("First off, I will tell you to do things for me");
    CMessage("and I expect you to actually do them.");
    CMessage("Second off all, you\'re doing this for my amusement.");
    CMessage("Alright, let\'s get started.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Here\'s what\'s going to happen today:");
    CMessage("I will give you orders and you will obey.");
    CMessage("I will make you feel humiliation, pleasure, frustration and much more.");
    CMessage("You will do as I say, not because I\'m a Goddess");
    CMessage("You will do it because you want to.");
    CMessage("Deep down you love giving up control to someone else.");
    CMessage("Someone like me.");
    CMessage("Start stroking with your other hand.");
    CMessage("See? You obeyed without hesitation.");
    CMessage("You might not like everything I tell you to do.");
    CMessage("But the desire to submit");
    CMessage("the rush of losing control");
    CMessage("is greater that the desire for comfort.");
    CMessage("And when I give you pleasure");
    CMessage("it will be so much better with my permission.");
    CMessage("Switch hands again.");
    CMessage("Stroke a little faster.");
    CMessage("You need me, otherwise you wouldn\'t be here");
    CMessage("So do yourself a favor and obey my commands.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Now that we know where we have each other, let\'s have some fun.");
    CMessage("Go ahead and stand up.");
    CMessage("Spread your legs a bit, let my toy dangle free.");
    CMessage("Now put your hands behind your back.");
    CMessage("This is how a little boy like you should stand when you\'re waiting for orders.");
    CMessage("%KneelForMe%");
    CMessage("Spread your knees apart, to give yourself free access to my toy.");
    CMessage("try to sit on your heels.");
    CMessage("Finally, put your hands on your legs.");
    CMessage("This is another great position to wait for orders.");
    CMessage("Now grab your dick.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Imagine being in this position by the front door, waiting for your Domme to come home.");
    CMessage("Tilt your head back as if you\'re looking up at her.");
    CMessage("%GoodBoy%.");
    CMessage("Keep it like that.");
    CMessage("Feels good, doesn\'t it?");
    CMessage("Being in this position and stroking for me.");
    CMessage("Well, all good things must come to an end.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Bend forward and get on all four.");
    CMessage("Arch your back for me.");
    CMessage("This is how I\'d like you if I was going to play with your ass.");
    CMessage("It\'s perfect for spanking you");
    CMessage("kicking your balls");
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("or fucking your little man-pussy.");
    }
    CMessage("But this position can be improved further.");
    CMessage("I want you to lean forward and put your forehead against the floor.");
    CMessage("Make sure to keep that ass up.");
    CMessage("This is a wonderful position.");
    CMessage("You must feel nice and vulnerable right now");
    CMessage("with your ass in the air.");
    CMessage("Is it humiliating?");
    CMessage("Perfect! It\'s time to teach you some humility.");
    CMessage("Grab my toy with one hand.");
    CMessage("Start stroking slowly.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Now, I want you to thank me for letting you stroke.");
    CMessage("Say out loud: \"Thank you %DomName% for letting me");
    CMessage("%GoodBoy%");
    CMessage("Stroke a little faster.");
    CMessage("Say: \"Thank you %DomName% for putting me in this");
    CMessage("Very good!");
    CMessage("Now I want you to edge for me");
    edge();
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Put a hand on my toy.");
    CMessage("Start stroking for me at a medium pace.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Cup your balls with your other hand.");
    CMessage("Massage them.");
    CMessage("Can you guess what the shoelace is for?");
    CMessage("That\'s right, we\'re going to tie your balls up.");
    CMessage("When I say, I want you to wrap the lace around the base of your cock and balls.");
    CMessage("Then a few times around just the balls.");
    CMessage("You will finish up with a nice little knot at the base of your cock.");
    CMessage("You\'re going to make it tight, but not uncomfortable.");
    CMessage("Stroke faster. Make my toy feel good.");
    CMessage("When you\'re all tied up, we\'re going to do this again: stroking and edging.");
    CMessage("Speaking of the edge, I want you to get there now.");
    edge();
    CMessage("%GoodBoy%");
    CMessage("Now, like I promised. Time to tie your balls up.");
    CMessage("Grab the shoelace.");
    CMessage("Wrap it around the base of your cock and balls.");
    CMessage("Tie a knot at the base.");
    setTempVar("AV_BallTied", true);
    CMessage("Now start wrapping it around just your balls.");
    CMessage("Leave a little string for a last wrap around the base.");
    CMessage("Finish off with a knot in the same position as the first one.");
    CMessage("Hopefully, your balls are little more separated from your cock now.");
    CMessage("Grab my toy again.");
    CMessage("Start stroking, fast this time.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Feels different, doesn\'t it?");
    if(!getVar("av_fetish_pain", false))
    {
        e370d();
        return;
    }
    CMessage("You know why else I want you tied up?");
    CMessage("Because we\'re going to hurt your balls!");
    CMessage("Not yet, don\'t worry.");
    CMessage("But in a little bit you\'re going to stand up");
    CMessage("You\'re going to spread your legs.");
    CMessage("Then you\'re going to smack those balls for me.");
    CMessage("Keep stroking.");
    CMessage("You know it\'s going to hurt.");
    let answer0 = getInput("But it makes you so excited, doesn\'t it?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Excited enough to edge for me?");
    CMessage("Let\'s put it to the test.");
    e370d();
}
function e370d()
{
    edge();
    if(!getVar("av_fetish_pain", false))
    {
        a2339hndr9();
        return;
    }
    CMessage("Alright, get up.");
    CMessage("I want you standing with your legs spread.");
    CMessage("Make sure that little toy of mine is dangling free.");
    CMessage("You need free access to those balls.");
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Don\'t hesitate, just do it.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Grab your dick in one hand and hold it up");
    CMessage("so you have even better access to your balls.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("That\'s a good boy.");
    CMessage("Start stroking, slooowly!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Stroke faster for me!");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Now say: \"Thank you %DomName% for smacking my");
    CMessage("%GoodBoy%");
    CMessage("%stopstroking%", 0);
    a2339hndr9();
}
function a2339hndr9()
{
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
    CMessage("We\'re going to do something a bit elaborate.");
    CMessage("I want you to get a towel");
    sleep(20);
    CMessage("Start by putting the towel on the floor");
    CMessage("%TieYourBalls%");
    CMessage("Get down on all four next to it.");
    CMessage("I want you to start stroking while I let you in on a little secret.");
    CMessage("I love the idea of a little boy like you drooling as he\'s stroking away for me.");
    CMessage("But of course, I don\'t want you to make a mess.");
    CMessage("That\'s why I had you get the towel.");
    CMessage("Stroke faster.");
    CMessage("As you\'re stroking, I\'m going to type the word \'drip\' from time to time.");
    CMessage("When I do, I want you to try do make your cock drip at last one drop of precum on the towel.");
    CMessage("Slow down your strokes a bit.");
    CMessage("Aaaand Drip.");
    sleep(15);
    CMessage("Good boy, keep stroking.");
    CMessage("Driiip!");
    sleep(15);
    CMessage("Mmm, I like this.");
    CMessage("I love you there on all four, stroking away, drooling into that towel.");
    CMessage("Driip!");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("Like a pathetic little house pet, doing everything I tell you to.");
    }
    CMessage("Stroke faster for me boy.");
    CMessage("It makes me so wet, knowing that you\'re doing this for me.");
    CMessage("Speaking of wet, drip!");
    sleep(15);
    CMessage("Mmm, keep stroking %PetName%.");
    CMessage("I want you to try and get close again.");
    edge();
    CMessage("Now drip for me.");
    sleep(15);
    CMessage("Your poor knees must be aching now.");
    CMessage("Stand up!");
    CMessage("Spread your legs!");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get the ruler ready...");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
        sleep(randomInt(35, 50));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("If you did it right, the aching in your knees will have paled in comparison to the pain in your balls.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Haha, see how nice I am to you?");
    }
    CMessage("Take a few steps, stretch your legs.");
    CMessage("Very good.");
    CMessage("%SitDown%");
    return;
}