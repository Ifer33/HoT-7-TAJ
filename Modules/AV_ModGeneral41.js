DMessage("AV_ModGeneral41: start");
main();
DMessage("AV_ModGeneral41: end");
function main()
{
    if(getVar("AV_ModGeneral41_NotFirstTime", false))
    {
        AV_ModGeneral41_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral41", 0);
    setVar("AV_ModGeneral41_NotFirstTime", true);
    AV_ModGeneral41_NotFirstTime();
}
function AV_ModGeneral41_NotFirstTime()
{
    if (getVar("AV_ModGeneral41", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral41", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral41", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral41", getVar("AV_ModGeneral41", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral41", getVar("AV_ModGeneral41", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral41", getVar("AV_ModGeneral41", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral41", getVar("AV_ModGeneral41", 0) + 1000);
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
    setVar("AV_ModGeneral41", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("You\'ve been here long enough to know that I don\'t ask twice.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Slowly.");
	slowStroking();
    CMessage("Mmm. That\'s cute. You almost look like you enjoy this!");
    CMessage("But I don\'t believe you.");
    CMessage("We\'ve put you through a lot already");
    CMessage("but I know you aren\'t broken yet. I can see it in your eyes.");
    CMessage("I\'ve always seen it in your eyes.");
    CMessage("There\'s still a bit of resistance in you somewhere");
    CMessage("cause I don\'t think you realize that the world you knew is gone.");
    CMessage("I am your world now.");
    CMessage("And I thought I made this clear to you already");
    CMessage("but I guess you needed a reminder.");
    if(!getVar("av_fetish_pain", false))
    {
        jeiu3f();
        return;
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Get the spoon ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank1*.mp3");
    sleep(20);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    jeiu3f();
}
function jeiu3f()
{
    //CMessage("%StrokeFaster%");
	speedUpStroking();
    CMessage("You think things can still go back to the way they were");
    CMessage("if you just keep your head down and play the submissive.");
    CMessage("Well, that\'s all good fun if we were playing around here");
    CMessage("but %Name% we can\'t do that unless you help me help you.");
    CMessage("Faster, and Eyes. Over. Here.");
	speedUpStroking();
    CMessage("When I give you a command, I expect you follow it to a T.");
    CMessage("You should know this by now");
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("but for some reason you don\'t.");
    }
    CMessage("Take yourself to the edge.");
    edge();
	//startEdging();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("You\'re not doing yourself any favors by pretending to be submissive.");
    CMessage("You\'re going to have to prove to me that you\'re truly, and utterly broken.");
    CMessage("You\'re aching for this.");
    CMessage("I mean, holy shit, you are really turned on right now.");
    CMessage("%KneelForMe%");
    CMessage("See, %PetName%? This is submission.");
    CMessage("Mmm. That cock must be throbbing so hard.");
    CMessage("I bet you wish you could play with it right now.");
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("But you can\'t.");
        a328fhjsos();
        return;
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Mmmm fuck yes, let me hear you moan.");
    CMessage("Show me what I do to you, you little slut.");
    CMessage("Let me hear that fucking whimper of yours everytime you stroke.");
    CMessage("It\'s music to my ears.");
    CMessage("You love this. You love this so fucking much.");
    CMessage("I don\'t think you could say no if you wanted to!");
    CMessage("It just feels too fucking good.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    a328fhjsos();
}
function a328fhjsos()
{
    if(!getVar("av_fetish_pain", false))
    {
        a32r8fs();
        return;
    }
    CMessage("I didn\'t think so. You\'re mine, %Slave%.");
    CMessage("Get the spoon ready");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I fucking own you, and for once I think you know it.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Be as loud as you want, honey.");
    CMessage("Just focus on submission");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Louder.");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("LOUDER!");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("That\'s more like it.");
    a32r8fs();
}
function a32r8fs()
{
    CMessage("%SitDown%");
    return;
    
    Modulo2();
}
function Modulo2()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("What are you waiting for?");
    let answer0 = getInput("Will you obey your Mistress?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    let answer1 = getInput("Need I remind you obedience is your primary responsibility?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("%KneelForMe%");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("As you already know, submissive men and male slaves require persistent discipline.");
    CMessage("You understand that female domination is what\'s best for the weak, disobedient man.");
    CMessage("Mild or severe, you will certainly take it any which way you can get it and will beg to obey your Mistress.");
    CMessage("%StartStroking%");
    CMessage("As your Mistress, it is my prerogative to decide when punishment is required.");
    CMessage("This is commonly referred to as \"consensual submission\" to female authority.");
    CMessage("That, of course, has a profound effect on your internal experience.");
    CMessage("You must act in accordance with my will");
    CMessage("as the need to submit can be even more powerful than the need for sex.");
    CMessage("You are here for a reason.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false) || getVar("AV_Beta", false))
    {
        CMessage("If you were a gifted lover you would spend significantly less time masturbating.");
    }
    CMessage("Take all that energy you once put into self-pleasure");
    CMessage("and redirect it to service and servitude.");
    DoEdges(1, 3, 0);
    CMessage("Why shouldn\'t I deny your climax?");
    CMessage("I am just helping you out, after all.");
    CMessage("I am here to tell you the benefits of being denied.");
    CMessage("It\'s not my fault if you say you want tease and denial");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("and then realize that I will happily tease you.");
    CMessage("And deny you...");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    let answer2 = getInput("You don\'t really expect me to let you cum do you?");
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse("AV_YesNeutral");
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        AV_NoNeutral();
    }
    CMessage("I am going to own your cock and your orgasms.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Once it\'s mine, I\'ll be making all of the decisions.");
    CMessage("Just as it should be.");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("Instead of stroking, let\'s twitch your %Cock%");
    CMessage("Remember...");
    setVar("AV_twitchs", 0);
    CMessage("twitch when you hear this sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("and twitch and hold when you hear that one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
    CheckTwitchs();
    return;
    Tw01();
}
function Tw01()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S1D3S.mp3");
    setVar("AV_twitchs", getVar("AV_twitchs", 0) + 1);
    CheckTwitchs();
    return;
    Tw02();
}
function Tw02()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3Deep.mp3");
    setVar("AV_twitchs", getVar("AV_twitchs", 0) + 1);
    CheckTwitchs();
    return;
    Tw03();
}
function Tw03()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S3D.mp3");
    setVar("AV_twitchs", getVar("AV_twitchs", 0) + 1);
    CheckTwitchs();
    return;
    Tw04();
}
function Tw04()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "5Sucks.mp3");
    setVar("AV_twitchs", getVar("AV_twitchs", 0) + 1);
    CheckTwitchs();
    return;
    
    CheckTwitchs();
}
function CheckTwitchs()
{
    if (getVar("AV_twitchs", 0) >= 4)
    {
        EnoughTwitchs();
        return;
    }
    CMessage("Say \" %AV_RepeatAL% \""); 
	//@Goto(Tw01, Tw02, Tw03, Tw04)
	switch(random("Tw01", "Tw02", "Tw03", "Tw04"))
    {
        case "Tw01":
        Tw01();
        return;
        break;
        case "Tw02":
        Tw02();
        return;
        break;
		case "Tw03":
        Tw03();
        return;
        break;
        case "Tw04":
        Tw04();
        return;
        break;
    }
    
    EnoughTwitchs();
}
function EnoughTwitchs()
{
    CMessage("%ThatsEnough%");
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("You see, I already know how incredibly horny you can get");
    CMessage("and how the need to have a release is always present.");
    CMessage("Even now, reading these relatively benign words gets you are thinking about touching your cock.");
    CMessage("Go ahead");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    setStrokingNoTaunt();
	CMessage("Femdom control typically starts off as a fantasy");
    CMessage("maybe of a gorgeous, erotic woman taking control of you");
    CMessage("your penis, and your orgasm.");
    CMessage("There\'s no time to slow down and get to know one another.");
    //CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("That element is replaced by an instant and total submission of your body and mind to me");
    CMessage("for you to obey and do whatever pleases me.");
    CMessage("Playing in fantasy is fun and exciting.");
    CMessage("We can push your limits without real anxiety over exposure of your naughty mind.");
    CMessage("Is tease and denial in your future?");
    CMessage("%KneelForMe%");
    CMessage("or better, on all fours");
    sleep(10);
    CMessage("it excites me that you remain on your hands and knees");
    CMessage("This is an important ritual that didn\'t take long for you to adopt.");
    CMessage("I\'m quite pleased!");
    if(!getVar("av_fetish_pain", false))
    {
        a3hbu0a();
        return;
    }
    CMessage("get that spoon ready...");
    CMessage("Let\'s make that ass red...");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(randomInt(35, 50));
    CMessage("%Stop%");
    CMessage("I wonder how much I could hurt you...");
    CMessage("before you stop loving it...");
    CMessage("Same thing, the other butt now...");
    CMessage(random("Hit ", "Spank ") + "your ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(randomInt(35, 50));
    CMessage("%Stop%");
    CMessage("I\'m happy to motivate you.");
    a3hbu0a();
}
function a3hbu0a()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Men have a natural drive to serve women");
    CMessage("while women want to be pleased.");
    CMessage("Edging your cock and begging not to cum sounds odd, I know.");
    let answer0 = getInput("Would you like to be edging and begging for me?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
        return;
    }
    CMessage("I am a true Cocktease and love to hear men beg.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("Of course, you LOVE to beg to cum, so this is my naughty twist.");
    CMessage("Now, I know when you are ready to cum");
    edge();
    CMessage("when you are right on the edge, and that is the time you need to beg me to STOP.");
    CMessage("\"Oh, please stop, Mistress!\"", 0);
    edge();
    CMessage("That is music to my ears! It is kind of evil, I know");
    CMessage("but when in that mood I do have many tricks up my sleeve.");
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
    CMessage("The submission of your mind and body, to me, is something you give.");
    CMessage("A Gift, if you will.");
    CMessage("Some may think of a Mistress or Femdom as capricious and indifferent to her charge.");
    CMessage("Sure, that is the truth and what really gets the ball rolling for some.");
    CMessage("But not all.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("The D/s dynamic comes in many forms.");
    CMessage("As many forms as there are snowflakes,");
    CMessage("I\'d imagine.");
    if (randomInteger(1, 100) <= 50)
    {
        JustStop();
        return;
    }
    edge();
    ContinuePart2();
    return;
    JustStop();
}
function JustStop()
{
    CMessage("%Stop%", 0);
	stopStrokingAll();
    ContinuePart2();
}
function ContinuePart2()
{
    CMessage("To submit has a simple definition:");
    CMessage("Yield to a superior force, or to the authority or will of another person.");
    CMessage("In practice, it turns out to be a bit more complex.");
    CMessage("Many would love to give up control, let someone else lead.");
    CMessage("Bringing anxiety for some, albeit an arousing sexual anxiety.");
    CMessage("It\'s erotic to think of yourself as the center of a universe");
    CMessage("with focused erotic play with a sexy play partner.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("After all, It\'s all good and fun when Mistress is doing fun and erotic things");
    CMessage("things you think are fun and erotic.");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("But when you have been put to a task you don\'t particularly agree with or want to do");
    CMessage("then your submission is tested.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("No, it\'s not on your no-fly zone.");
    CMessage("Our power exchange negotiation has already discussed and you\'re to abide by those terms.");
    CMessage("How you handle the request, that is the test.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("The answer is yet to be seen.");
    CMessage("Your submission to me");
    CMessage("More sensual than a strict Femdom style");
    CMessage("I love to learn about and condition your mind.");
    CMessage("However, I can be demanding and exacting when a goal and the journey is important to me.");
    CMessage("You do not want to disappoint me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You come to me imperfect and willing to be so for me, for our journey.");
    CMessage("Together, we explore and learn about ourselves, and about what we are together.");
    DoEdges(1, 3, 0);
    CMessage("So, when you make false statements.");
    CMessage("When you don\'t abide by my Mistress Rules");
    CMessage("if you try to guess the answers I\'m looking for instead of being honest and true");
    CMessage("you will most likely meet your mean Mistress.");
    CMessage("I want to play, sure.");
    CMessage("But I will not bend my requirements.");
    CMessage("I will not forgo appropriate discipline as needed.");
    return;
}