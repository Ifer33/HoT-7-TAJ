DMessage("AV_ModGeneral2: start");
main();
DMessage("AV_ModGeneral2: end");
function main()
{
    if(getVar("AV_ModGeneral2_NotFirstTime", false))
    {
        AV_ModGeneral2_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral2", 0);
    setVar("AV_ModGeneral2_NotFirstTime", true);
    AV_ModGeneral2_NotFirstTime();
}
function AV_ModGeneral2_NotFirstTime()
{
    if (getVar("AV_ModGeneral2", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral2", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral2", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral2", getVar("AV_ModGeneral2", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral2", getVar("AV_ModGeneral2", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral2", getVar("AV_ModGeneral2", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral2", getVar("AV_ModGeneral2", 0) + 1000);
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
    setVar("AV_ModGeneral2", 0);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Break2%");
    addContact(3);
    let answer0 = getInput("Somebody didn\'t have a very satisfying night, did they?", 5,-1,true,3);
    if (answer0.isTimeout())
    {
        AV_Timeo02();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%", 5,-1,true,3);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%Good%", -1, 3);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Let\'s change that, right?", -1, 3);
    }
    AV_Timeo02();
}
function AV_Timeo02()
{
    SMessage("Well I got some bad news..", -1, 3);
    //SMessage("Now isn\'t going to get any better. %StartStroking%", -1, 3);
	SMessage("Now isn\'t going to get any better.", -1, 3);
	setStrokingNoTaunt(null,-1,3)
    SMessage("I bet you thought you were done stroking today, huh?", -1, 3);
    SMessage("I kinda LIKE the idea of you not being able to cum.", -1, 3);
    SMessage("In fact, I LOVE the idea of you not being able to cum.", -1, 3);
    SMessage("You know what I think?", -1, 3);
    SMessage("I think when you\'re alone with %DomName%", -1, 3);
    SMessage("and she\'s teasing you, moving against you to make desperate", -1, 3);
    SMessage("it won\'t be her body you\'ll be thinking about.", -1, 3);
    SMessage("It will be mine.", -1, 3);
    SMessage("Oh, and something I\'ll be WAY better at than my friend...", -1, 3);
    SMessage("%stopstroking%", 0,3);
	stopStroking();
    SMessage("so much better than some stupid movie.", -1, 3);
    SMessage("Seriously, I was dreading going to that rom-com, but this", -1, 3);
    //SMessage("%StartStroking%", -1, 3);
	setStrokingNoTaunt(null,-1,3);
    SMessage("this is something I could watch all day.", -1, 3);
    let answer1 = getInput("What is it...you want to stop?",5,-1,true,3);
    if (answer1.isTimeout())
    {
        AV_Timeo03();
        return;
    }
    if (answer1.isLike("yes"))
    {
        SMessage("Well, will not happen", -1, 3);
    }
    else if (answer1.isLike("no"))
    {
        SMessage("%Good%", -1, 3);
    }
    AV_Timeo03();
}
function AV_Timeo03()
{
    SMessage("I was thinking about you", -1, 3);
    SMessage("wondering about all the things %DomName% was doing to you", -1, 3);
    SMessage("and how long I was going to have to wait to get my hands on you", -1, 3);
    SMessage("so I could make you suffer twice as bad as she did", -1, 3);
    SMessage("But since I\'m here, I don\'t have to wait", -1, 3);
    SMessage("I can just make you suffer now", -1, 3);
    SMessage("%Edge%", -1, 3);
    startEdging(null,-1,3);
	SMessage("%stopstrokingedge%", -1, 3);
	SMessage("%lettheedgefade%", -1, 3);
    SMessage("Because you do this for me. And it\'s really turning me up!", -1, 3);
    removeContact(3);
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
    CMessage("I love playing with boys who need to cum.");
    CMessage("So, let\'s have you %Stroke% in a way that\'s more appropriate.");
    switch(random("a01", "a02"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("Take your index finger and your middle finger together");
    CMessage("and rub the shaft, right under the head");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("That\'s it...finger your little pussy, %Slave%.");
    cont();
    return;
    a02();
}
function a02()
{
    CMessage("Take your index finger and your thumb");
    CMessage("Make a \'O\' around the shaft, right under the head");
    CMessage("That\'s " + "%Stroke% that way, %Slave%.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    cont();
}
function cont()
{
    CMessage("There we go...now that makes more sense doesn\'t it?");
    CMessage("Finger yourself faster than that.");
    let answer0 = getInput("That\'s it, doesn\'t that feel good?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Lol%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
    }
    CMessage("Now...while you\'re %Liking% that, I want you to picture everything I\'m telling you.");
    CMessage("And tell me if this doesn\'t get your %Cock% harder.");
    CMessage("Imagine me on my knees between your legs, staring into your eyes");
    showTaggedImage(4, ["handjob"]);
    //--Command:TagHandjob
    lockImages();
    CMessage("While I milk your cock with my soft, warm " + "Hands...right in front of my %Face%.");
    CMessage("Are you still rubbing that hard clit for me?");
    unlockImages();
    CMessage("That\'s it.");
    CMessage("Keep going...but don\'t you dare cum without my permission...");
    if (randomInteger(1, 100) <= 50)
    {
        a03();
        return;
    }
    CMessage("Anyway, imagine my hands wrapped tight around your %Cock%.");
    showTaggedImage(4, ["handjob"]);
    //--Command:TagHandjob
    CMessage("Slowly %Stroking% you up...and down...and back up...and back down");
    showTaggedImage(4, ["handjob"]);
    //--Command:TagHandjob
    CMessage("Both of my hands twisting around your hard shaft as they go...");
    showTaggedImage(4, ["handjob"]);
    //--Command:TagHandjob
    CMessage("Keep fingering that little thing.");
    a03();
}
function a03()
{
    CMessage("Now imagine me %Stroking% you faster...and faster...");
    showTaggedImage(4, ["handjob"]);
    //--Command:TagHandjob
    CMessage("And imagine my beautiful lips inching closer to the head of your %Cock%");
    showTaggedImage(4, ["blowjob"]);
    if (getApathyMoodIndex() <= 25)
    {
        CMessage("See me slowly open my mouth, and lean my head right over the tip");
        showTaggedImage(4, ["blowjob"]);
    }
    if (getApathyMoodIndex() <= 25)
    {
        CMessage("You can already feel the warmth of my breath...and the wetness...");
    }
    if (getApathyMoodIndex() <= 25)
    {
        CMessage("You can imagine the beautiful sucking heaven awaiting you inside...and then suddenly");
        showTaggedImage(4, ["blowjob"]);
    }
    CMessage("Take your fingers off your cock");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Don\'t %Touch% it.");
    CMessage("Awww what\'s the matter?");
    CMessage("You wanted to keep dreaming a little longer?");
    CMessage("Well...you might as well face reality right?");
    CMessage("That\'s mean...");
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
    let answer0 = getInput("Are you starting to feel better?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then start stroking to the beat %AudioStroke%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad, start stroking to the beat. %AudioStroke% %PetName%");
    }
    CMessage("I know...");
    CMessage("It seems cruel to build you back up right away.");
    CMessage("But your suffering isn\'t always about me being cruel or punishing you");
    CMessage("Sometimes it\'s just to give me pleasure.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND01();
        return;
    }
    CMessage("To know that you suffer for me.");
    CMessage("That no matter how horrible the ache is");
    CMessage("even though the pain gets more intense with every single pass of your hand");
    CMessage("you still do it... ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("...for me");
    }
    AVRND01();
}
function AVRND01()
{
    CMessage("This can be so much more.");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("You\'re probably wondering how you\'re even going to be able to endure all this.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("That\'s not your job to wonder about shit.");
    }
    CMessage("Your job is to take your hand and put it on your %Cock%.");
    CMessage("Now curl your fingers around the shaft and grab hold of it. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("Your job is to suffer and stroke");
    }
    CMessage("I know you\'re suffering, so get stroking to the beat %AudioStroke%.");
    CMessage("That\'s it.");
    CMessage("It aches so much now, but I know you\'ll recover");
    CMessage("You\'ll stroke through the pain.");
    CMessage("and your %Cock% might protest at first");
    CMessage("but soon enough it will remember how bad it wants an orgasm");
    CMessage("It will start to grow harder");
    CMessage("and suddenly you\'ll find yourself racing towards a brand new orgasm");
    CMessage("Get back on the edge and stay there.");
    holdEdge();
    let answer0 = getInput("Is it even harder to stay on the edge after all that stroking?", 5);
    if (answer0.isTimeout())
    {
        
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good% I want every edge to be an unspeakable torture for you.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Aww");
        increaseAnger(3)
    }
    CMessage("I want you to suffer ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("so much your %Cock% would sooner die than endure another second of it");
    }
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
    CMessage("I think its time for a little test");
    CMessage("I think its important for a %PetName%");
    CMessage("To sometimes be tested to ensure");
    CMessage("that you keep improving yourself in the art of mantain control");
    CMessage("So, I will use your weak points.");
    CMessage("Starring:");
    setTempVar("av_intera_002", true);
    if(getVar("AV_Persona04",false) ){
		CMessage(getVar("AV_Persona04"));
		showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"04"+ java.io.File.separator +"*.*");
		setVar("AV_PornStar",0);
	}
	if(getVar("AV_Persona01",false) ){
		CMessage(getVar("AV_Persona01"));
		showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"02"+ java.io.File.separator +"*.*");
		setVar("AV_Actress",0);
	}
	if(getVar("AV_Persona02",false) ){
		CMessage(getVar("AV_Persona02"));
		showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"03"+ java.io.File.separator +"*.*");
		setVar("AV_Singer",0);
	}
    //--UNINTERPRETED LINE:%Var%[AV_Persona01] @ShowImage[av_imagens\02\*.*] @SetVar[AV_Actress]=[0]
    //--UNINTERPRETED LINE:and %Var%[AV_Persona02] @ShowImage[av_imagens\03\*.*] @SetVar[AV_Singer]=[0]
    CMessage("Are you ready for denial, edging, and humiliation?");
    CMessage("%StartStrokingNS%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
	lockImages();
    switch(random("act1", "sin1", "por1"))
    {
        case "act1":
        act1();
        return;
        break;
        case "sin1":
        sin1();
        return;
        break;
        case "por1":
        por1();
        return;
        break;
    }
    Start_Porn();
}
function Start_Porn()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    switch(random("act1", "sin1"))
    {
        case "act1":
        act1();
        return;
        break;
        case "sin1":
        sin1();
        return;
        break;
    }
    Start_Actress();
}
function Start_Actress()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    switch(random("sin1", "por1"))
    {
        case "sin1":
        sin1();
        return;
        break;
        case "por1":
        por1();
        return;
        break;
    }
    Start_Singer();
}
function Start_Singer()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    switch(random("act1", "por1"))
    {
        case "act1":
        act1();
        return;
        break;
        case "por1":
        por1();
        return;
        break;
    }
    por1();
}
function por1()
{
    //--UNINTERPRETED LINE:@NullResponse @ShowImage[av_imagens\04\*.*] @ChangeVar[AV_PornStar]=[AV_PornStar]+[1] @PlayAudio[tease\b120.mp3]
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"04"+ java.io.File.separator +"*.*");
	setVar("AV_PornStar",getVar("AV_PornStar")+1 );
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    Check1();
    return;
    act1();
}
function act1()
{
    //--UNINTERPRETED LINE:@NullResponse @ShowImage[av_imagens\02\*.*] @ChangeVar[AV_Actress]=[AV_Actress]+[1] @PlayAudio[tease\b120.mp3]
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"02"+ java.io.File.separator +"*.*");
	setVar("AV_Actress",getVar("AV_Actress")+1 );
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    Check1();
    return;
    sin1();
}
function sin1()
{
    //--UNINTERPRETED LINE:@NullResponse @ShowImage[av_imagens\03\*.*] @ChangeVar[AV_Singer]=[AV_Singer]+[1] @PlayAudio[tease\b120.mp3]
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"03"+ java.io.File.separator +"*.*");
	setVar("AV_Singer",getVar("AV_Singer")+1 );
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3");
    Check1();
    return;
    Check1();
}
function Check1()
{
    if (getVar("AV_PornStar", 0) == 3)
    {
        Second_Part();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3");
    if (getVar("AV_Actress", 0) == 3)
    {
        Second_Part();
        return;
    }
    if (getVar("AV_Singer", 0) == 3)
    {
        Second_Part();
        return;
    }
    if (getVar("AV_PornStar", 0) == 1)
    {
        Start_Porn();
        return;
    }
    if (getVar("AV_Actress", 0) == 1)
    {
        Start_Actress();
        return;
    }
    if (getVar("AV_Singer", 0) == 1)
    {
        Start_Singer();
        return;
    }
    Second_Part();
}
function Second_Part()
{
	unlockImages();
    CMessage("You\'ve been a bad boy all these years");
    CMessage("%Stroking% to %Pictures% of celebs on the internet");
    CMessage("Today, I get back at you.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("You are my slave today. Slap that hard cock 2 times, make it sting!");
    }
    setVar("AV_PornStar", 0);
    setVar("AV_Actress", 0);
    setVar("AV_Singer", 0);
	lockImages();
    switch(random("act2", "sin2", "por2"))
    {
        case "act2":
        act2();
        return;
        break;
        case "sin2":
        sin2();
        return;
        break;
        case "por2":
        por2();
        return;
        break;
    }
    a2Start_Porn();
}
function a2Start_Porn()
{
    switch(random("act2", "sin2"))
    {
        case "act2":
        act2();
        return;
        break;
        case "sin2":
        sin2();
        return;
        break;
    }
    a2Start_Actress();
}
function a2Start_Actress()
{
    switch(random("sin2", "por2"))
    {
        case "sin2":
        sin2();
        return;
        break;
        case "por2":
        por2();
        return;
        break;
    }
    a2Start_Singer();
}
function a2Start_Singer()
{
    switch(random("act2", "por2"))
    {
        case "act2":
        act2();
        return;
        break;
        case "por2":
        por2();
        return;
        break;
    }
    por2();
}
function por2()
{
    //--UNINTERPRETED LINE:Stroke %StrokeN% times for %Var%[AV_Persona04] @ShowImage[av_imagens\04\*.*] @ChangeVar[AV_PornStar]=[AV_PornStar]+[1]
	CMessage("Stroke %StrokeN% times for "+getVar("AV_Persona04") );
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"04"+ java.io.File.separator +"*.*");
	setVar("AV_PornStar",getVar("AV_PornStar")+1 );
    Check2();
    return;
    act2();
}
function act2()
{
    //--UNINTERPRETED LINE:Stroke %StrokeN% times for %Var%[AV_Persona01] @ShowImage[av_imagens\02\*.*] @ChangeVar[AV_Actress]=[AV_Actress]+[1]
	CMessage("Stroke %StrokeN% times for "+getVar("AV_Persona01") );
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"02"+ java.io.File.separator +"*.*");
	setVar("AV_Actress",getVar("AV_Actress")+1 );
    Check2();
    return;
    sin2();
}
function sin2()
{
    //--UNINTERPRETED LINE:Stroke %StrokeN% times for %Var%[AV_Persona02]  @ShowImage[av_imagens\03\*.*] @ChangeVar[AV_Singer]=[AV_Singer]+[1]
	CMessage("Stroke %StrokeN% times for "+getVar("AV_Persona02") );
	showImage("Images" + java.io.File.separator +"av_imagens"+ java.io.File.separator +"03"+ java.io.File.separator +"*.*");
	setVar("AV_Singer",getVar("AV_Singer")+1 );
    Check2();
    return;
    Check2();
}
function Check2()
{
    if (getVar("AV_PornStar", 0) == 3)
    {
        Third_Part();
        return;
    }
    if (getVar("AV_Actress", 0) == 3)
    {
        Third_Part();
        return;
    }
    if (getVar("AV_Singer", 0) == 3)
    {
        Third_Part();
        return;
    }
    if (getVar("AV_PornStar", 0) == 1)
    {
        a2Start_Porn();
        return;
    }
    if (getVar("AV_Actress", 0) == 1)
    {
        a2Start_Actress();
        return;
    }
    if (getVar("AV_Singer", 0) == 1)
    {
        a2Start_Singer();
        return;
    }
    Third_Part();
}
function Third_Part()
{
	unlockImages();
    CMessage("Know that I have complete control over your body");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%KneelForMe%");
        setVar("AV_SubKnees", true);
    }
    CMessage("Before we go on, you need to understand something:");
    CMessage("you are a pervert.");
    CMessage("Don\'t be ashamed, just know you are a good %Slave% who will do whatever you\'re told.");
    delVar("av_intera_002");
    return;
}