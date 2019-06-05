DMessage("AV_ModGeneral11: start");
main();
DMessage("AV_ModGeneral11: end");
function main()
{
    if(getVar("AV_ModGeneral11_NotFirstTime", false))
    {
        AV_ModGeneral11_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral11", 0);
    setVar("AV_ModGeneral11_NotFirstTime", true);
    AV_ModGeneral11_NotFirstTime();
}
function AV_ModGeneral11_NotFirstTime()
{
    if (getVar("AV_ModGeneral11", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral11", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral11", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral11", getVar("AV_ModGeneral11", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral11", getVar("AV_ModGeneral11", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral11", getVar("AV_ModGeneral11", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral11", getVar("AV_ModGeneral11", 0) + 1000);
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
    setVar("AV_ModGeneral11", 0);
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
    CMessage("I already know that you are an amazing subject");
    CMessage("who gave himself up completely and with that turned into a " + random("screaming ", "begging ", "shivering ") + "and shaking love slave");
    CMessage("with only one thing on his mind and that is to please his Mistress.");
    CMessage("You are going to do what I say and you will like it.");
    CMessage("Understood?");
    CMessage("%KneelForMe%");
    CMessage("Oh, it feels so great");
    CMessage("knowing that you would bend over backwards to do anything just knowing it would make me happy.");
    CMessage("You make me happy, %PetName%.");
    CMessage("It\'s like you were fucking born to do this.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I can feel you not only getting deeper and deeper into it");
    CMessage("but also that you\'re letting go");
    CMessage("thus allowing yourself to drift into an intense sexual bliss and with that under my control.");
    CMessage("Your body goes into lustful and intense spasms with every word I tell");
    CMessage("I just know that you\'re dying to orgasm for me.");
    edge();
    CMessage("Of course that would be way too early and sure enough, after intensifying your lust even more!");
    CMessage("I want you to feel who is in control of your mind and body.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("With every humiliations words, intense feelings of lust intensify.");
    }
    CMessage("The intensity with which your feels and expresse each and everyone of my orders is spectacular my pet.");
    CMessage("I want you to feel my power over you %PetName%.");
    CMessage("Finding the triggers, are the things that turns you on the most, is the key.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Here are one of theses trigger words:");
    CMessage(random("Cock milked", "Draining genitals", "Forced ejaculation", "Controled male orgasm?"));
    CMessage("Does it tell you something %PetName%?");
    CMessage("Is it what you looking for baby??");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("When you start your computer late at night, you\'re not a human being.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You\'re a fuckin\'animal! That\'s right you\'re a little dog.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Cauz little doggyslave can\'t control himself.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Don\'t deny it, pervert! Your %Cock% have no secret for me, %PetName%.");
    }
    CMessage("Keep stroking.");
    CMessage("I want you to repeat after me. \'Thank you mistress, for letting me touch my cock.\'");
    CMessage("You\'re welcome, dear.");
    CMessage("Now, stroke your cock harder.");
    CMessage("Faster.");
    edge();
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Squeeze your fucking balls.");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Don\'t touch your cock, I want you to squeeze those balls of yours.");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Nice and tightly.");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Keep them on there.");
    }
    CMessage("Beg for me to let you cum.");
    CMessage("%SitDown%");
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
    CMessage("I\'m in control. I make the rules.");
    let answer0 = getInput("Do you understand?", 10);
    if (answer0.isTimeout())
    {
        AV_Jump85();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good boy");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Say who\'s in control now.");
    }
    AV_Jump85();
}
function AV_Jump85()
{
    let answer0 = getInput("Do you like being told by a girl that she\'s in control?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("%StartStroking%");
    CMessage("Let\'s start with a few slow strokes.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("Let\'s keep the momentum going.");
    CMessage("Very good!");
    CMessage("What\'s that? %Lol%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("No, there aren\'t any breaks.");
    CMessage("Speed up");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    CMessage("I can tell you are holding back better.");
    CMessage(random("Let\'s try some more intense stimulation", "I think you need to be pushed harder"));
    CMessage("Faster");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    CMessage("Alright %PetName%, think you can handle this?");
    CMessage("I hope you dont mind");
    CMessage(random("But I feel that fast strokes are too hard ", "I think the slower stroking makes things easier ") + "for you");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("I know very well that you are struggling right now");
    CMessage("and that these slow strokes are making you go insane");
    CMessage("but you wanted a tease so you are getting a tease.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    CMessage("The orgasm you will have at the end will be amazing");
    CMessage("if you are man enough to get to the end?");
    CMessage("%stopstroking%", 0);
	stopAudio();
    if (randomInteger(1, 100) <= 50)
    {
        AVRND27();
        return;
    }
    CMessage("You know my love, sometimes");
    CMessage("like right now");
    CMessage("I think about how you\'re soooo good to me.");
    CMessage("My %Pussy% is so fucking satisfied.");
    CMessage("Mm... so deliciously satisfied.");
    KeepGoing();
    return;
    AVRND27();
}
function AVRND27()
{
    CMessage("you\'re just so hungry for my skin all the time");
    CMessage("and that feels so wonderful");
    CMessage("to be so desired, and of course to know you want to pleasure me however I want you to.");
    KeepGoing();
}
function KeepGoing()
{
    CMessage("%StartStroking%");
    CMessage("Freestyle now...");
    CMessage("Now that I\'m denying you, I mean...");
    CMessage(random("because ", "it\'s something else ") + "...");
    CMessage("I want it to be very hard");
    CMessage("Not just your %Cock%");
    CMessage("I want to make it hard for you to follow instructions");
    CMessage("Because I want you very frustrated and very horny");
    CMessage("And when you fail...");
    CMessage("You just give me an excuse to be <i>really</i> mean to you %Grin%");
    DoEdges(2, 2, 0);
    CMessage("There we go.");
    CMessage("Was that so hard?");
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
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("Lay back, relax,  and let me make you happy.");
    CMessage("I\'m sure you\'re pretty hard now, but don\'t do anything yet.");
    CMessage("Just relax for a moment...");
    CMessage("realize that if you follow my instructions, you will feel amazing in these next few minutes");
    CMessage("and, at the end, your cock will explode with pleasure as you shoot loads of cum all over the place.");
    CMessage("Ok, let\'s get started.");
    CMessage("Reach down and feel that cock.");
    CMessage("Take your index finger and rub it right around the base.");
    CMessage("Now run it up the underside and all around the head.");
    CMessage("Now reach down and feel those balls.");
    CMessage("Good boy.");
    CMessage("Now...");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Now reach down and feel those balls with your other hand.");
    CMessage("Nice.");
    CMessage("You can stop playing with your balls now, but keep stroking.");
    CMessage("Good boy.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Now, we\'re going to change things up.");
    CMessage("You know how there\'s that technique of rubbing 2 sticks together to start a fire?");
    CMessage("Do that with your cock.");
    CMessage("Hold your shaft between your two palms and roll it.");
    CMessage("There you go.");
    CMessage("Not too fast.");
    CMessage("Start off slowly.");
    CMessage("Good boy. It feels different, right?");
    CMessage("Instead of the up-down motion of you stroking, it\'s more of a constant steam of pleasure.");
    CMessage("Speed it up now, go to medium speed.");
    CMessage("Nice.");
    CMessage("It feels so good.");
    CMessage("Now go fast.");
    CMessage("It feels awesome to go at the fast speed, doesn\'t it?");
    CMessage("You like that, don\'t you?");
    CMessage("You naughty boy.");
    CMessage("%stopstroking%", 0);
    CMessage("You\'re getting pretty close to cumming now, but we aren\'t ready just yet.");
    CMessage("Back to stroking.");
    CMessage("Go fast now.");
    CMessage("Almost to that point of no return...");
    edge();
    CMessage("Now, lets distract you a little");
    CMessage("bring you back from the brink of orgasm.");
    CMessage("It\'s pretty hard to distract you when you\'re about to cum, but we\'ll try.");
    CMessage("Well, it\'s been a good ammount of time at this point anyway");
    CMessage("back to stroking.");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("A little harder to control this time, eh?");
    CMessage("You just want to cum so badly it\'s driving you crazy.");
    CMessage("But lets take a break.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("You want to come so bad.");
    CMessage("You just want that release.");
    CMessage("It will feel so good.");
    CMessage("Go back to the firestarter method from before.");
    CMessage("Roll your dick between your palms.");
    CMessage("Well, it\'s so much fun to tease you.");
    CMessage("You want to cum so badly, but I won\'t let you yet.");
    CMessage("I can feel it.");
    CMessage("Can you edge with that?");
    CMessage("Let\'s find out");
    edge();
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
    CMessage("%SubName%");
    CMessage("Clasp your hands together behind your back.");
    CMessage(random("You have already agreed to comply", "You have taken an oath to comply"));
    CMessage("Now, I know that you want to touch yourself.");
    CMessage("But remember how much sweeter that is when a " + random("girl ", "woman ") + "is control of how and when you do so.");
    CMessage("Do not touch yourself.");
    CMessage("Keep your hands behind your back.");
    CMessage("Now, I know you have a hand you like to %Stroke% with.");
    CMessage("This is what we will call your dominant hand.");
    CMessage("Your other hand we will call your submissive hand.");
    CMessage("What I want you to do is this:");
    CMessage("Take your submissive hand out from behind your back.");
    CMessage("Leave your dominant hand behind your back.");
    CMessage("Take your submissive hand and place it on the tip of your penis.");
    CMessage("Do not touch your shaft.");
    CMessage("Go ahead and touch the tip to your heart\'s content.");
    CMessage("Do whatever you want with it but do not touch the shaft.");
    CMessage("Now, touch the very top and rub your finger across it.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Now put that finger in your mouth and ingest any moisture that is upon it.");
    }
    CMessage("Now return your submissive hand behind your back.");
    CMessage("Now breath in and out deeply, and remind yourself that you have taken an oath to comply.");
    CMessage("Now, take both hands out from behind your back and let them lie naturally");
    CMessage("not touching your side but a few inches out from your side.");
    CMessage("I know that when you %Stroke%, you like to rub your shaft up and down.");
    CMessage("I am going to allow you to stroke yourself in a moment.");
    CMessage("But when I do, you are only allowed to stroke upwards  according to the specific tempo as I instruct.");
    CMessage("For each beat, you must do one upward stroke.");
    CMessage("Do not do any downward strokes.");
    CMessage("Now, place your submissive hand on your shaft.");
    CMessage("Do not do anything further until I begin the beats.");
    CMessage("Now, begin. %AV_AudioBeat%");
    sleep(20);
    CMessage("%stopstroking%", 0);
    CMessage("Place your submissive hand under your balls.");
    CMessage("Keep it there.");
    sleep(10);
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Now, place your dominant hand just on the tip.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Swirl it around and again take any moisture into your mouth.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("After you have placed your finger into your mouth...");
    }
    CMessage("return both hands to your side.");
    CMessage("You are now feeling the benefits and power of my control.");
    CMessage("You must resist the temptation to do anything other than what I instruct.");
    CMessage("Now, Place your dominant hand underneath your balls.");
    CMessage("Place your submissive hand on the shaft.");
    CMessage("When I begin the beats, %Stroke% upwards using your submissive hand.");
    CMessage("Now. %AV_AudioBeat%");
    sleep(20);
    CMessage("%stopstroking%", 0);
    CMessage("Keep your hand on your shaft but do not move anything.");
    CMessage("Keep your dominant hand under your balls.");
    sleep(10);
    CMessage("Now again %Stroke% to the beat, upwards only. %AV_AudioBeat%");
    sleep(20);
    CMessage("%stopstroking%", 0);
    CMessage("Now again stroke upwards along with my beats with your submissive hand.");
    CMessage("But only stroke upward and do not go any faster than my rhythm.");
    CMessage("Go %AV_AudioBeat%");
    sleep(20);
    CMessage("%stopstroking%", 0);
    CMessage("Keep both hands where they are.");
    sleep(10);
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Now, place your submissive hand on the tip and again take any moisture in your mouth.");
    }
    CMessage("Return both hands to your sides.");
    CMessage("Now with both hands by your side, thrust your pelvis in the air as if you are having sex.");
    CMessage("I\'m not going to count, but I am going to allow you to do this for 15 seconds.");
    CMessage("Go");
    sleep(15);
    CMessage("Stop.");
    CMessage("Now, place your dominant hand under your %Balls%.");
    CMessage("Place your submissive hand over that hand.");
    CMessage("Now, with your hands in that position, move your hands so that your %Cock% flaps forward and backward until I stop.", 0);
    CMessage("Keep going");
    sleep(10);
    CMessage("Stop.");
    CMessage("Remove your hands from your balls and put them by your sides.");
    CMessage("Place your submissive hand under your balls.");
    CMessage("I am going to allow you to stroke rapidly up-and-down using your dominant hand for 10 seconds.");
    CMessage("I will not be counting aloud, but I will be timing you.");
    CMessage("Do not orgasm. Go.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    CMessage("%stopstroking%", 0);
    CMessage("Keep your hand on the shaft.");
    CMessage("I am now going to allow you rapid and down strokes for another 10 seconds.");
    CMessage("Do not come.");
    CMessage("Go.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    CMessage("%stopstroking%", 0);
    CMessage("I am now going to allow UPWARD STROKES ONLY for another 10 seconds.");
    CMessage("Do not come.");
    CMessage("Go.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(10);
    CMessage("%stopstroking%", 0);
    CMessage("This may have been difficult");
    CMessage("but you have made be happy");
    CMessage("and you will find great benefits from this and our future trainings.");
    return;
}