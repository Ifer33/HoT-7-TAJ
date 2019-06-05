DMessage("AV_ModGeneral10: start");
main();
DMessage("AV_ModGeneral10: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStroking())
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
        DdecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStroking();
    IniModule();
    return;
    DdecidEdge();
}
function DdecidEdge()
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
    if(getVar("AV_ModGeneral10_NotFirstTime", false))
    {
        AV_ModGeneral10_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral10", 0);
    setVar("AV_ModGeneral10_NotFirstTime", true);
    AV_ModGeneral10_NotFirstTime();
}
function AV_ModGeneral10_NotFirstTime()
{
    if (getVar("AV_ModGeneral10", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral10", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral10", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral10", getVar("AV_ModGeneral10", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral10", getVar("AV_ModGeneral10", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral10", getVar("AV_ModGeneral10", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral10", getVar("AV_ModGeneral10", 0) + 1000);
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
    setVar("AV_ModGeneral10", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("%PetName%");
    CMessage("Let\'s try something new");
    CMessage("You know...tightening your PC muscle");
    CMessage("the one that stops urine from coming out");
    CMessage("makes your orgasm approach quicker.");
    CMessage("However, you can control that muscle while you masturbate, and you can keep it relaxed.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("If you concentrate on keeping it relaxed the whole time while you %Stroke%");
    CMessage("you can go for a very long time without having that sensation of an impending orgasm.");
    CMessage("But everything still builds up inside you");
    CMessage("even if you can\'t feel it.");
    CMessage("Masturbating for a long time this way can eventually lead to an explosive orgasm with a lot of semen.");
    CMessage("Keep relaxing that muscle.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgePC()")
    CMessage("Try 20 light masturbation strokes, followed by 10 quick ones.");
    CMessage("Keep alternating.");
    CMessage("Most men can\'t stand more than 10 minutes if someone else is doing it.");
    CMessage("This can be considered slow torture masturbation");
    CMessage("you want to ejaculate, but you can\'t.");
    CMessage("When you do, the orgasm is especially good.");
    CMessage("Let me see if you can keep up with more visual estimulations");
    switch(random("pc01", "pc02"))
    {
        case "pc01":
        pc01();
        return;
        break;
        case "pc02":
        pc02();
        return;
        break;
    }
    pc01();
}
function pc01()
{
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "15" + java.io.File.separator + "*.webm");
    pcont();
    return;
    pc02();
}
function pc02()
{
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "10" + java.io.File.separator + "*.webm");
    pcont();
    return;
    pcont();
}
function pcont()
{
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "60" + java.io.File.separator + "*.webm");
    CMessage("wow...you did not edge all that time...");
    CMessage("Good work %SubName%");
    EdgePC();
}
function EdgePC()
{
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    delVar("edginggoto");
    CMessage("That is so fucking  hot for me");
    CMessage("I guess I can be pretty merciless...");
    CMessage("But I love your desperation...");
    CMessage("it\'s hot actually, to let you *imagine* I *might* choose to take you over the edge and let you orgasm...");
    CMessage("But probably I\'ll just tease you until I\'ve had enough of your  precum...");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("%KneelForMe%");
    CMessage("I don\'t want you to think.");
    CMessage("I don\'t want you to fucking talk.");
    CMessage("All I want is your body doing exactly what I tell you to.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("We both know the truth.");
    CMessage("You can\'t cum unless " + random("I tell you to", "you hear me say the fucking words", "I give you permission"));
    let answer0 = getInput("It never feels the same without me, does it?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You\'ll struggle and fight for as long as I want you to.");
    CMessage("And when you\'re fucking done, I\'ll be here.");
    CMessage("Waiting for you to say \'please\'.");
    CMessage("And I know you will. Because no one does it like me.");
    CMessage("No one.");
    CMessage("You\'ll beg for me to do it right.");
    CMessage("But don\'t think you won\'t have to earn it.");
    setTempVar("av_intera_007", true);
    CMessage("%stopstroking%", 0);
	stopStroking();
    if(!getVar("av_fetish_pain", false))
    {
        a3345fy();
        return;
    }
    CMessage("Slap it.");
    CMessage("Slap that %Cock%.");
    CMessage("Again.");
    CMessage("Harder.");
    CMessage("Do it again.");
    CMessage("Do it like I\'d fucking do it.");
    CMessage("Again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    CMessage("Don\'t think I " + random("can\'t hear you", "don\'t see your whole body tense and quiver"));
    CMessage(random("I\'m right there", "I\'m standing over you", "I\'m watching your every move"));
    CMessage(random("And I want to watch you squirm", "I want to hear you fucking moan and whimper"));
    CMessage("And that %Cock%? I want it to hurt.");
    delVar("av_intera_007");
    CMessage(random("I want you to feel me", "I want you to feel me between your legs", "I want you to feel that ache"));
    CMessage("Because you know what that means.");
    a3345fy();
}
function a3345fy()
{
    CMessage("Deep down, you know exactly what that means.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I own you.");
    CMessage("You hate how much that turns you on, don\'t you?");
    CMessage("I know you do.");
    CMessage("But it\'s true. You\'re mine.");
    CMessage("And I\'m going to prove it.");
    CMessage("You need this. You need this so fucking bad.");
    CMessage("To be used. To be shown what you are.");
    CMessage("You want me to tell you what to do.");
    let answer0 = getInput("That\'s the only way you really feel good, isn\'t it?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo05();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
        increaseAnger(3)
    }
    AV_Timeo05();
}
function AV_Timeo05()
{
    CMessage("When I take you out and play with you like a pretty little toy.");
    CMessage("%Stroke% fast");
    CMessage("I want you on the edge.");
    edge();
    CMessage("Do you see how quickly it happens when I tell you?");
    let answer0 = getInput("Now. That\'s so frustrating, isn\'t it?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ark_FrustratedResponse();
    }
    CMessage("You\'re going to hold it.");
    CMessage("You\'re going to hold it for as long as I want you to.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want you tense and frustrated.");
    CMessage("Frustrated and desperate toys are the most obedient.");
    CMessage("You don\'t get anything more until I allow it.");
    CMessage("You\'ve lost ownership of your own body.");
    CMessage("It doesn\'t belong to you anymore.");
    CMessage("It\'s mine.");
    CMessage("And now you have to ask permission to use what belongs to me.");
    CMessage("Are you ready to cum? I bet you are.");
    CMessage("I bet you\'re so close to the edge.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Get your  hand off my property.");
    CMessage("You don\'t get anything unless I allow it.");
    CMessage("All I want right now is to watch you whimper and cry and beg.");
    CMessage("Mmmmmm.");
    CMessage("That\'s right %PetName%.");
    CMessage("Show me how bad you want to cum for me.");
    CMessage("%SitDown%");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("I can tell by the look in your eyes that you\'re ready.");
    CMessage("We need to get these legs of yours apart.");
    CMessage("Good boy!");
    let answer0 = getInput("Do you feel exposed?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo06();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Well don\'t be embarrassed.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("But there is so much more baby.");
    }
	AV_Timeo06();
    return;
}
function AV_Timeo06()
{
    CMessage("Oh my, look at how your legs are shaking.");
    CMessage("you\'ll need to stand up, now...");
    CMessage("I need your legs hanging off the edge.");
    CMessage("look how wet the tip of your cock is.");
    CMessage("You\'re almost ready for me, but I need you to be dripping.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go get some lube...fast");
        sleep(30);
    }
    if(!getVar("AV_LikeAnal", false))
    {
        SkipAnal67();
        return;
    }
    CMessage("Lube one finger");
    CMessage("Now look into my eyes %PetName%.");
    CMessage("Don\'t take your eyes off of me.");
    CMessage("I want you to quickly slide the tip in your ass...");
    CMessage("shhhh, it\'s alright baby");
    CMessage("press the plunger.");
    CMessage("%PetName% you did so well.");
    CMessage("Now your tight little ass is so slick.");
    CMessage("Shhhh. Hush. No questions.");
    CMessage("Just feel.");
    CMessage("Just imagine it\'s my finger inside you");
    CMessage("I am inside you now baby");
    CMessage("Shhh %PetName%. Just get used to me.");
    CMessage("Feel me in you.");
    CMessage("Now I\'m going to slide out.");
    CMessage("Remove your finger");
    CMessage("Good boy.");
    CMessage("Look into my eyes and breathe again.");
    CMessage("Insert your finger again");
    CMessage("Oh, oh good boy.");
    let answer1 = getInput("Does that feel good?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("I know it\'s intense.");
    CMessage("Oh look at your %Cock% jump");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Oh my, look at you!");
    CMessage("I\'m going to make you feel even better");
    CMessage("You\'re still so full.");
    CMessage("I\'m glad you\'re so wet for me.");
    CMessage("keep fucking your ass");
    CMessage("I\'m all the way inside you now.");
    CMessage("I know it is intense.");
    CMessage("Feel me inside you.");
    CMessage("You are so full of me.");
    SkipAnal67();
}
function SkipAnal67()
{
    if(!getVar("AV_LikeAnal", false))
    {
        //CMessage("%StartStroking%");
		setStrokingNoTaunt();
    }
    CMessage("I love your moans.");
    CMessage("Give yourself to me.");
    edge();
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("You took me so well.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Stop fucking your ass");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Oh sweet, don\'t be ashamed.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go clean " + "...I will wait for you %EmoteWink%");
        sleep(30);
    }
    CMessage("you can sit now");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("I want to try something " + random("%PetName%", "%SubName%"));
    CMessage("%AV_Hypno%");
    CMessage("I found some audios to help me");
    switch(random("Actress", "Singer", "Know", "PornStar"))
    {
        case "Actress":
        Actress();
        return;
        break;
        case "Singer":
        Singer();
        return;
        break;
        case "Know":
        Know();
        return;
        break;
        case "PornStar":
        PornStar();
        return;
        break;
    }
    Actress();
}
function Actress()
{
    CMessage("You need to cool down a little for this");
    sleep(20);
    CMessage("Stroke to the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "loops" + java.io.File.separator + "short.mp3");
    sleep(01);
    CMessage("Slow strokes");
    sleep(10);
    CMessage("Keep going");
    sleep(10);
    CMessage("%RelaxAndBreathe%");
    sleep(09);
    CMessage("Now fast...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Will " + getVar("AV_Persona01", "") + "make you loose control?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Slow down");
    sleep(16);
    CMessage("keep going");
    sleep(15);
    CMessage(random("Fast ", "Quick ") + "strokes for me");
    //Command:Slideshow(Softcore,fast)
	setSlideShow("SOFTCORE","fast");
    sleep(13);
    CMessage("Now for them, keep the rhythm");
    //TODO: Turn Slideshow on
	slideShowOn()
    sleep(18);
    CMessage("%stopstroking%", 0);
    //TODO: Turn Slideshow off
	slideShowOff()
    CMessage("%ThatsEnough%");
    sleep(15);
    return;
    Know();
}
function Know()
{
    CMessage("You need to cool down a little for this");
    sleep(20);
    CMessage("Stroke to the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "loops" + java.io.File.separator + "short.mp3");
    sleep(01);
    CMessage("Slow strokes");
    sleep(10);
    CMessage("Keep going");
    sleep(10);
    CMessage("%RelaxAndBreathe%");
    sleep(09);
    CMessage("Now fast...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Will " + getVar("AV_Persona13", "") + "make you loose control?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Slow down");
    sleep(16);
    CMessage("keep going");
    sleep(15);
    CMessage(random("Fast ", "Quick ") + "strokes for me");
    //Command:Slideshow(Softcore,fast)
	setSlideShow("SOFTCORE","fast");
    sleep(13);
    CMessage("Now for them, keep the rhythm");
    //TODO: Turn Slideshow on
	slideShowOn()
    sleep(18);
    CMessage("%stopstroking%", 0);
    //TODO: Turn Slideshow off
	slideShowOff()
    CMessage("%ThatsEnough%");
    sleep(15);
    return;
    Singer();
}
function Singer()
{
    CMessage("You need to cool down a little for this");
    sleep(20);
    CMessage("Stroke to the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "loops" + java.io.File.separator + "short.mp3");
    sleep(01);
    CMessage("Slow strokes");
    sleep(10);
    CMessage("Keep going");
    sleep(10);
    CMessage("%RelaxAndBreathe%");
    sleep(09);
    CMessage("Now fast...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Will " + getVar("AV_Persona02", "") + "make you loose control?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Slow down");
    sleep(16);
    CMessage("keep going");
    sleep(15);
    CMessage(random("Fast ", "Quick ") + "strokes for me");
    //Command:Slideshow(Softcore,fast)
	setSlideShow("SOFTCORE","fast");
    sleep(13);
    CMessage("Now for them, keep the rhythm");
    //TODO: Turn Slideshow on
	slideShowOn()
    sleep(18);
    CMessage("%stopstroking%", 0);
	slideShowOff()
    //TODO: Turn Slideshow off
    CMessage("%ThatsEnough%");
    sleep(15);
    return;
    PornStar();
}
function PornStar()
{
    CMessage("You need to cool down a little for this");
    sleep(20);
    CMessage("Stroke to the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "loops" + java.io.File.separator + "short.mp3");
    sleep(01);
    CMessage("Slow strokes");
    sleep(10);
    CMessage("Keep going");
    sleep(10);
    CMessage("%RelaxAndBreathe%");
    sleep(09);
    CMessage("Now fast...");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Will " + getVar("AV_Persona04", "") + "make you loose control?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    sleep(02);
    CMessage("Slow down");
    sleep(16);
    CMessage("keep going");
    sleep(15);
    CMessage(random("Fast ", "Quick ") + "strokes for me");
    //Command:Slideshow(Softcore,fast)
	setSlideShow("SOFTCORE","fast");
    sleep(13);
    CMessage("Now for them, keep the rhythm");
    //TODO: Turn Slideshow on
	slideShowOn()
    sleep(18);
    CMessage("%stopstroking%", 0);
	slideShowOff()
    //TODO: Turn Slideshow off
    CMessage("%ThatsEnough%");
    sleep(15);
    return;
}