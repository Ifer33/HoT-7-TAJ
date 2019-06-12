DMessage("AV_ModGeneral33: start");
main();
DMessage("AV_ModGeneral33: end");
function main()
{
    if(getVar("AV_ModGeneral33_NotFirstTime", false))
    {
        AV_ModGeneral33_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral33", 0);
    setVar("AV_ModGeneral33_NotFirstTime", true);
    AV_ModGeneral33_NotFirstTime();
}
function AV_ModGeneral33_NotFirstTime()
{
    if (getVar("AV_ModGeneral33", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral33", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral33", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral33", getVar("AV_ModGeneral33", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral33", getVar("AV_ModGeneral33", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral33", getVar("AV_ModGeneral33", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral33", getVar("AV_ModGeneral33", 0) + 1000);
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
    setVar("AV_ModGeneral33", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%",0);
    CMessage("%LetTheEdgeFade%");
    CMessage("In a way, and edge is always a disappointment, isn\'t it?");
    CMessage("Even if you know it\'s only an edge and you\'re not going to get to cum");
    CMessage("I bet there\'s always a little glimmer of hope in your mind");
    CMessage("A tiny little voice telling you: <i>Maybe this time she'll let me cum</i>");
    CMessage("And then I tell you to stop again and get away from the edge...");
    CMessage("That the way I am, always crushing your hopes in so many little ways... %Grin%");
    return;
    
    Modulo2();
}
function Modulo2()
{
    if(getVar("pthevCompleteControlNO", false))
    {
        InicioCrush();
        return;
    }
    if(!getVar("AV_TotalControl", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
    }
    InicioCrush();
}
function InicioCrush()
{
    if(getVar("AV_CrushNoMore2", false))
    {
        AV_CrushNoMore2();
        return;
    }
    if(getVar("AV_CrushNoMore1", false))
    {
        AV_CrushNoMore1();
        return;
    }
	if (!isStrokingAll())
    {
        setStrokingNoTaunt();
    }
    CMessage("%Stroke% for " + getVar("AV_Persona02", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    setVar("AV_CrushNoMore1", true);
    CMessage("She makes your balls ache, doesn\'t she %Giggles%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    CMessage("She doesn\'t even have to do anything at all...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    CMessage("It\'s enough for you to know she\'s out there");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    if (randomInteger(1, 100) <= 50)
    {
        JustStop2();
        return;
    }
    CMessage("%Edge%");
	lockImages();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
	startEdging();
	unlockImages();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    EdgeDone2();
    return;
    JustStop2();
}
function JustStop2()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    EdgeDone2();
}
function EdgeDone2()
{
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You know...since you promised to me not to cum unless I say so");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Not only during our sessions but in between as well");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You will probably neve cum again for " + getVar("AV_Persona02", ""));
    }
    return;
    
    AV_CrushNoMore1();
}
function AV_CrushNoMore1()
{
	if (!isStrokingAll())
    {
        setStrokingNoTaunt();
    }
    CMessage("%Stroke% for " + getVar("AV_Persona13", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setVar("AV_CrushNoMore2", true);
    CMessage("Does she know that you\'re... %JerkingOff% to her?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Maybe it turns you on to imagine that she knows");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Maybe you imagine her looking at you as you %JerkOff%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Well let me tell you right now, no girl wants to see that, %PetName%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Not unsolicited, anyway");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    if (randomInteger(1, 100) <= 50)
    {
        JustStop();
        return;
    }
    CMessage("%Edge%");
    //startEdging();
	lockImages();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
	startEdging();
	unlockImages();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    EdgeDone();
    return;
    JustStop();
}
function JustStop()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    EdgeDone();
}
function EdgeDone()
{
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You know...since you let me control when you masturbate");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Not only during our sessions but in between as well");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Now you can only %Stroke% for " + getVar("AV_Persona13", "") + "when I allow.");
    }
    return;
    
    AV_CrushNoMore2();
}
function AV_CrushNoMore2()
{
	if (!isStrokingAll())
    {
        setStrokingNoTaunt();
    }
    CMessage("%Stroke% for " + getVar("AV_Persona01", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    delVar("AV_CrushNoMore1");
    delVar("AV_CrushNoMore2");
    CMessage("Look at her, %PetName%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    CMessage("You know she\'s never going to sleep with you, %PetName%");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    CMessage("I want you to think about that while to %JerkOff% to her pictures");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    if (randomInteger(1, 100) <= 50)
    {
        JustStop3();
        return;
    }
    CMessage("%Edge%");
    //startEdging();
	lockImages();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
	startEdging();
	unlockImages();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    EdgeDone3();
    return;
    JustStop3();
}
function JustStop3()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    EdgeDone3();
}
function EdgeDone3()
{
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You know...since you promised to me not to cum unless I say so");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Not only during our sessions but in between as well");
    }
    if(getVar("AV_TotalControl", false))
    {
        CMessage("You will probably neve cum again for " + getVar("AV_Persona01", ""));
    }
    return;
    
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
    if(getVar("AV_SubKnees", false))
    {
        CMessage("I hope your knees are starting to hurt");
        already_kneeling();
        return;
    }
    CMessage("%KneelForMe%");
    already_kneeling();
}
function already_kneeling()
{
    sleep(10);
    CMessage("So there you are, " + random("kneeling before me", "on your knees", "kneeling like a true slave"));
    CMessage(random("Doing nothing but ", "Just ") + "waiting " + random("to receive ", "for me to give you ") + "your next command");
    CMessage("Your next assignment");
    CMessage("Well, " + random("maybe ", "what if ", "it could be that ") + "there isn\'t " + random("a next assignment ", "one ", "gonna be another command ", "anything to wait for ") + "...");
    CMessage(random("Maybe ", "What if ") + random("all I want is for you to be ", "I just leave you ") + random("on your knees ", "kneeling ") + "before me until your " + random("kneecaps ", "knees ") + random("start to hurt ", "are hurting ") + "like hell");
    CMessage("%PetName%...");
    CMessage("Put your hands behind your back");
    CMessage("I want your back straight, maybe arched a little bit");
    CMessage("Your knees should be at a perfect 90 degree angle");
    CMessage("Spread your knees a little bit further apart");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Look how frustrated you are.");
    CMessage("Don\'t worry, baby.");
    CMessage("After all, if there\'s any time that you could cum...");
    CMessage("it\'d be %GeneralTime%, don\'t you think?");
    DoEdges(2, 3, 0);
	if(ballTorture()){
		//--Command:BallTorture
		Ball_Torture();
		return;
	}
    CMessage("You\'re lucky I don\'t bust your %Balls%, %PetName%");
    CMessage("In fact, I\'m thinking I might have to reconsider our no-ballbusting agreement");
    CMessage("Because you\'re getting off way to easy");
    CMessage("But no ballbusting was the deal, so I won\'t");
    CMessage("Maybe someday you\'ll reconsider that arrangement");
    return;
    Ball_Torture();
}
function Ball_Torture()
{
    if(!getVar("AV_BallTied", false))
    {
        CMessage("I want you to tie off your %Balls% for me right now");
        balls_already_tied();
        return;
    }
    CMessage("Go ahead and untie your %Balls%");
    delVar("AV_BallTied");
    CMessage("I want them to taste the freedom they\'ve been lacking lately");
    CMessage("They suffer so much for me, don\'t they?");
    CMessage("Grab your %Balls% and start rubbing them");
    CMessage("Rub them gently, massage them, squeeze them a bit but not too hard");
    CMessage("They\'ve been tied up so tight, they deserve a little love don\'t you think? %Smile%");
    CMessage("Now tie them back up again, but tighter than before %Grin%");
    balls_already_tied();
}
function balls_already_tied()
{
    CMessage("I\'m going to have some fun with those poor %Balls%");
    setTempVar("AV_BallTied", true);
    CMessage("Hurry the fuck up, I don\'t like to be kept waiting, %PetName%");
    without_shoelace();
}
function without_shoelace()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
    }
    CMessage("I want you to slide up to the edge of your seat so those %Balls% are exposed");
    CMessage("Spread your legs apart as far as you can");
    CMessage("You better have the wooden spoon ready, go get it quickly if you don\'t");
    CMessage("You know what\'s going to happen now, don\'t you?");
    CMessage("And you know it\'s going to hurt...");
    increaseAnger(4)
    CMessage("But that\'s how it is with me, if you\'re bad you get hurt");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Now let me ask you a question, %PetName%");
    CMessage("I think you will understand that there\'s only one right answer to the question");
    let answer0 = getInput("Do you want more?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s not the answer I wanted to hear, %PetName%");
        increaseAnger(3)
    }
    CMessage("So let me try again...");
    let answer1 = getInput("Do you want more, %SubName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Alright then");
    }
    CMessage("I thought you wanted to make me happy, but apparently I\'m not all that important to you");
    //--Command:DommeLevelDown
	changeDommeLevel(-2);
    increaseAnger(3)
    return;
    want_more();
}
function want_more()
{
    CMessage("I know you want nothing more than to make me happy");
    //--Command:DommeLevelDown
	changeDommeLevel(-2);
    CMessage("It\'s just too bad that making me happy sometimes involves getting your %Balls% busted %Laugh%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    if(getVar("AV_BallTied", false))
    {
        CMessage("Go ahead and untie those poor %Balls% now");
        delVar("AV_BallTied");
    }
    CMessage("I almost want to say I hope it doesn\'t hurt too bad, but the truth is I don\'t care");
    CMessage("In fact, why would I make you beat them if I didn\'t want it to hurt...");
    CMessage("That wouldn\'t make any sense now would it %Laugh%");
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
    CMessage(random("%PetName%", "%SubName%"));
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%KneelForMe%");
    CMessage("So far you are making a good picture, naked kneeling on the floor.");
    CMessage("With that look in your eyes.");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("What will happen next, huh?");
    if(!getVar("av_fetish_pain", false))
    {
        JumpMoreSpank();
        return;
    }
    CMessage("I tell you what happens next.");
    CMessage("You\'re not complete. Something important is missing.");
    let answer0 = getInput("It\'s the color of your ass. It clearly is missing some bright red, don\'t you think?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Now take that spoon, head down ass up");
    CMessage("and get ready to start spanking yourself.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Harder!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I said harder!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Now stop. Turn around and show me your ass.");
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 70)
        {
            JumpMoreSpank();
            return;
        }
    }
    CMessage("No it\'s not red enough. Continue spanking!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("More!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    if (randomInteger(1, 100) <= 50)
    {
        JumpMoreSpank();
        return;
    }
    CMessage("Still more!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Don\'t act like a pussy or I\'ll fuck you like one.");
    CMessage("Spank harder.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    JumpMoreSpank();
}
function JumpMoreSpank()
{
    CMessage("Look up to me.");
    CMessage("%GoodBoy%");
    CMessage("Now you look better.");
    let answer0 = getInput("Do you think you deserve to touch yourself?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Fast and Hard.");
    CMessage("Harder.");
    CMessage("I wanna hear a sound when you slam your hand on that body of yours.");
    CMessage("Slam it!");
    DoEdges(2, 3, 0);
    CMessage("Don\'t you dare cumming without my explicit permission.");
    CMessage("Look at you.");
    CMessage("What a desperate mess you are.");
    CMessage("But I can\'t let you cum.");
    CMessage("You know that.");
    CMessage("You just don\'t deserve it.");
    let answer1 = getInput("Plus you would make a such a mess now wouldn\'t you?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    if(!getVar("AV_LikeAnal", false))
    {
        SkipAnalPart();
        return;
    }
    if (randomInteger(1, 100) <= 30)
    {
        SkipAnalPart();
        return;
    }
    CMessage("Go get some lube...");
    sleep(30);
    CMessage("%KneelForMe%");
    CMessage("Lie on your back.");
    CMessage("Lift your knees up so I can see your ass");
    CMessage("Spread your cheeks with your hands.");
    CMessage("I think we can agree that your ass needs some attention, right?");
    CMessage("Lube your fingers and your ass.");
    CMessage("Wow, you\'re so hard, thinking about being fucked up the ass.");
    CMessage("Now show me how you fingerfuck yourself.");
    sleep(30);
    CMessage(random("You\'re a horny little slut", "aren\'t you?", "Hmm"));
    CMessage("Your call this fingerfucking?");
    CMessage("I want at least 2 fingers in.");
    CMessage("Three are better.");
    CMessage("Show me how dirty you can get.");
    CMessage("Yeah in and out. Like it\'s a pussy.");
    sleep(20);
    CMessage("Lube your fingers again when you need to.");
    CMessage("Yes that\'s my boy!");
    CMessage("Look how slutty you can get!");
    sleep(20);
    CMessage("Ok now you can start stroking again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("But keep your fingers in as deep as possible.");
    CMessage("You\'re such a dirty whore.");
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("The way I see it someone should make money with you and whore you out.");
    }
    CMessage("What do you think about that, hm?");
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("Would you like that? A nice lady pimp?");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("You definitely have talent to be whore.");
    }
    CMessage("Keep stroking.");
    CMessage("And keep those fingers in.");
    CMessage("Getting close?");
    CMessage("I\'m going to count you down.");
    CMessage("10... keep those fingers in");
    CMessage("9... I don\'t want to hear a single sound out of your mouth");
    CMessage("8... you can moan again the moment you edge");
    CMessage("7... not too fast");
    CMessage("6... breathe");
    CMessage("5");
    setRapidText(true);
    CMessage("4");
    CMessage("3");
    CMessage("2");
    CMessage("1....");
    /*CMessage("%Edge%");
    CMessage("Hold it");
    setRapidText(false);
    CMessage("hold it");
    sleep(20);
    CMessage("%stopstroking%", 0);*/
	setRapidText(false);
	holdEdge();
    CMessage("%KneelForMe%");
    SkipAnalPart();
}
function SkipAnalPart()
{
    CMessage("Mmm no, I\'m not going to let you off so easy...");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("I know you like that... to edge yourself for me");
    //--Command:CustomMode(%pvDontWantTo%,Goto,cannot take)
    CMessage("But right now I want to make you edge to your breaking point");
    CMessage("%Edge%");
    startEdging();
    CMessage("%stopstroking%", 0);
    //--Command:CustomMode(%pvCantTakeIt%,Goto,cannot take)
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("You\'re going to take it for me, because you want to make me happy");
    CMessage("You do want to make me happy, don\'t you?");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("You\'ve not done much to make me a happy %DomHonorific% %GeneralTime% %PetName%");
    CMessage("And you\'re going to suffer for it");
    DoEdges(3, 3, 100);
    CMessage("I hope you understand that I\'m not doing this to make you feel good");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("And maybe it does feel good far... soon it won\'t feel so good anymore");
    holdEdge();
    //--Command:ApathyLevel(1)
	if(checkOldApathyLevel(1)){
		CMessage("That\'s enough for now");
		enough_edging();
		return;
	}
    CMessage("Should I give you a break, let you breathe easy for a moment?");
    CMessage("Nah... get to the fucking edge right now, %PetName%");
    holdEdge();
    CMessage("You can tell me if you can\'t take it anymore");
    CMessage("I won\'t be happy, but you can tell me...");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("If on the other hand you choose to take whatever I give you without complaint");
    CMessage("You will make me a happy %DomHonorific% once again...");
    holdEdge();
    //--Command:ApathyLevel(2)
    if(checkOldApathyLevel(2)){
		CMessage("That\'s enough for now");
		enough_edging();
		return;
	}
    CMessage("You know I\'m not going to make this easy for you...");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("Don\'t those edges all start to blend together at this point? %Grin%");
    holdEdge();
    CMessage("When I make you hold it, that\'s when it gets especially tough, doesn\'t it?");;
    holdEdge();
    //--Command:ApathyLevel(3)
    if(checkOldApathyLevel(3)){
		CMessage("That\'s enough for now");
		enough_edging();
		return;
	}
    CMessage("I\'m not done with you yet, %PetName%");
    holdEdge();
    CMessage("Hang in there, just remember this what it takes to make me happy");
    holdEdge();
    CMessage("%LetTheEdgeFade%");
    holdEdge();
    CMessage("%LetTheEdgeFade%");
    //--Command:ApathyLevel(4)
    if(checkOldApathyLevel(4)){
		CMessage("That\'s enough for now");
		enough_edging();
		return;
	}
    CMessage("Not bad, %PetName%");
    CMessage("Hang in there a little longer, I\'m almost satisfied");
    holdEdge();
    CMessage("%LetTheEdgeFade%");
    CMessage("That poor %Cock% must be so sensitive right now %Laugh%");
    holdEdge();
    CMessage("Good...");
    CMessage("I\'m going to make you do one more edge and I\'ll be satisfied %Smile%");
    holdEdge();
    CMessage("%LetTheEdgeFade%");
    CMessage("That\'s enough for now");
    enough_edging();
}
function enough_edging()
{
    //--UNINTERPRETED LINE:@NullResponse @SetMood(%Random%(%DomMoodMin%,%DomMoodMax%)) 
	setMood(randomInteger(1,100) );
	//@CustomMode(%pvDontWantTo%,Normal) @CustomMode(%pvCantTakeIt%,Normal)
    CMessage("Anyway, you know I can\'t stay mad at my %PetName% forever %Smile%");
    CMessage("You suffer so much for me already...");
    CMessage("And you took all that edging just to make me happy %Smile%");
    return;
    cannot_take();
}
function cannot_take()
{
    CMessage("Step away from the goddamn edge then, %PetName%");
    increaseAnger(3)
    CMessage("You\'re not making this easier on yourself, you know that right?");
    return;
}