DMessage("AV_GlittersTest: Start");
let sender = 1;
let delay = -1;
main();
DMessage("AV_GlittersTest: end");
function main()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage(random("%PetName% ", "%SubName% ", "Now ") + "we have reached one " + random("important ", "crucial ") + "part of your " + random("lesson", "training"));
    setVar("AV_GlitterTestRounds", 1);
    CMessage(random("I ", "We ") + random("need ", "will ") + random("know ", "test ") + random("how\'s your behavior ", "If you are fit ") + "to serve a " + random("Domme ", "Mistress ") + random("completely", "entirely"));
    CMessage("So, " + random("a friend of mine ", "my friend ") + "will " + random("use ", "test ") + "you for a " + random("while ", "few minutes ") + "without my " + random("interference", "supervision"));
    CMessage("After that, she will " + random("say ", "tell ") + "me if you " + random("it\'s approved", "has passed"));
    CMessage(random("The male\'s commitment to this part of the training is very important", "It is to your great benefit", "If you do not comply with this, you will not derive the benefits I have promised", "If you do follow through with this, you will win my great confidence"));
    CMessage("So no matter how " + random("hard ", "difficult ") + "you think it might be, I " + random("require ", "demand ") + "you to follow her instructions.");
    CMessage(random("Get ready", "Let\'s choose someone", "let\'s pick a friend", "Who will be the lucky girl?"));
    switch(random("Glit01", "Glit02", "Glit03"))
    {
        case "Glit01":
        Glit01();
        return;
        break;
        case "Glit02":
        Glit02();
        return;
        break;
        case "Glit03":
        Glit03();
        return;
        break;
    }
    Glit01();
}
function Glit01()
{
    addContact(2);
    CMessage(random("Hello ", "Hey ", "Hi ") + "%domFriend1Name%, " + random("You know what to do ", "Do as we talked ", "He is all yours ") + "%EmoteHappy%");
    SMessage(random("Hello ", "Hey ", "Hi ") + "%DomName%, %ThankYou% " + random("for your proposition ", "my dear ") + "I am so " + random("excited ", "ready ") + "for " + random("this ", "that ") + "...", -1, 2);
    removeContact(1);
	sender = 2;
	setVar("sendDelay",delay);
	setVar("sendSender",sender);
    Intro();
    return;
    Glit02();
}
function Glit02()
{
    addContact(3);
    CMessage(random("Hello ", "Hey ", "Hi ") + "%domFriend2Name%, " + random("You know what to do ", "Do as we talked ", "He is all yours ") + "%EmoteHappy%");
    SMessage(random("Hello ", "Hey ", "Hi ") + "%DomName%, %ThankYou% " + random("for your proposition ", "my dear ") + "I am so " + random("excited ", "ready ") + "for " + random("this ", "that ") + "...", -1, 3);
    removeContact(1);
	sender = 3;
	setVar("sendDelay",delay);
	setVar("sendSender",sender);
    Intro();
    return;
    Glit03();
}
function Glit03()
{
    addContact(4);
    CMessage(random("Hello ", "Hey ", "Hi ") + "%domFriend2Name%, " + random("You know what to do ", "Do as we talked ", "He is all yours ") + "%EmoteHappy%");
    SMessage(random("Hello ", "Hey ", "Hi ") + "%DomName%, %ThankYou% " + random("for your proposition ", "my dear ") + "I am so " + random("excited ", "ready ") + "for " + random("this ", "that ") + "...", -1, 4);
    removeContact(1);
	sender = 4;
	setVar("sendDelay",delay);
	setVar("sendSender",sender);
    Intro();
    return;
    Intro();
}
function Intro()
{
    SMessage(random("Well well... %Grin% ", "I hope you remember me ", "so... ") + "%SubName%",delay,sender);
    SMessage("This is a lesson about " + random("submission", "obedience"),delay,sender);
    SMessage("I am going to help you, but you have to do everything I tell you do exactly. OK?",delay,sender);
    SMessage("%DomName% " + random("Give me all the tools ", "told me all about you ") + "so get ready to " + random("suffer", "sweat", "test your limits", "test your obedience", "test your submission"),delay,sender);
    Start();
}
function Start()
{
    if (getVar("AV_GlitterTestRounds", 0) == 1)
    {
        Round_1();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 2)
    {
        Round_2();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 3)
    {
        Round_3();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 4)
    {
        Round_4();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 5)
    {
        Round_5();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 6)
    {
        Round_6();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 7)
    {
        Round_7();
        return;
    }
    if (getVar("AV_GlitterTestRounds", 0) == 8)
    {
        Final();
        return;
    }
    Round_1();
}
function Round_1()
{
	DMessage("AV_GlittersTest: round 1");
    switch(random("Edge", "EdgeHold", "EdgeRND", "Overdrive", "BiteMe"))
    {
        case "Edge":
        Edge();
        return;
        break;
        case "EdgeHold":
        EdgeHold();
        return;
        break;
        case "EdgeRND":
        EdgeRND();
        return;
        break;
        case "Overdrive":
        Overdrive();
        return;
        break;
        case "BiteMe":
        BiteMe();
        return;
        break;
    }
    Round_2();
}
function Round_2()
{
	DMessage("AV_GlittersTest: round 2");
    switch(random("SpankAss", "Positions", "CBT", "Pins"))
    {
        case "SpankAss":
        SpankAss();
        return;
        break;
        case "Positions":
        Positions();
        return;
        break;
        case "CBT":
        CBT();
        return;
        break;
        case "Pins":
        Pins();
        return;
        break;
    }
    Round_3();
}
function Round_3()
{
	DMessage("AV_GlittersTest: round 3");
    switch(random("Edge", "EdgeHold", "EdgeRND", "Overdrive", "BiteMe"))
    {
        case "Edge":
        Edge();
        return;
        break;
        case "EdgeHold":
        EdgeHold();
        return;
        break;
        case "EdgeRND":
        EdgeRND();
        return;
        break;
        case "Overdrive":
        Overdrive();
        return;
        break;
        case "BiteMe":
        BiteMe();
        return;
        break;
    }
    Round_4();
}
function Round_4()
{
	DMessage("AV_GlittersTest: round 4");
    if(!getVar("av_GlitterPin", false))
    {
        switch(random("SpankAss", "Positions", "CBT", "Pins"))
        {
            case "SpankAss":
            SpankAss();
            return;
            break;
            case "Positions":
            Positions();
            return;
            break;
            case "CBT":
            CBT();
            return;
            break;
            case "Pins":
            Pins();
            return;
            break;
        }
    }
    if(getVar("av_GlitterPin", false))
    {
        switch(random("SpankAss", "Positions", "CBT"))
        {
            case "SpankAss":
            SpankAss();
            return;
            break;
            case "Positions":
            Positions();
            return;
            break;
            case "CBT":
            CBT();
            return;
            break;
        }
    }
    Round_5();
}
function Round_5()
{
	DMessage("AV_GlittersTest: round 5");
    switch(random("Edge", "EdgeHold", "EdgeRND", "Overdrive", "BiteMe"))
    {
        case "Edge":
        Edge();
        return;
        break;
        case "EdgeHold":
        EdgeHold();
        return;
        break;
        case "EdgeRND":
        EdgeRND();
        return;
        break;
        case "Overdrive":
        Overdrive();
        return;
        break;
        case "BiteMe":
        BiteMe();
        return;
        break;
    }
    Round_6();
}
function Round_6()
{
	DMessage("AV_GlittersTest: round 6");
    if(!getVar("av_GlitterPin", false))
    {
        switch(random("SpankAss", "Positions", "CBT", "Pins"))
        {
            case "SpankAss":
            SpankAss();
            return;
            break;
            case "Positions":
            Positions();
            return;
            break;
            case "CBT":
            CBT();
            return;
            break;
            case "Pins":
            Pins();
            return;
            break;
        }
    }
    if(getVar("av_GlitterPin", false))
    {
        switch(random("SpankAss", "Positions", "CBT"))
        {
            case "SpankAss":
            SpankAss();
            return;
            break;
            case "Positions":
            Positions();
            return;
            break;
            case "CBT":
            CBT();
            return;
            break;
        }
    }
    Round_7();
}
function Round_7()
{
	DMessage("AV_GlittersTest: round 7");
    switch(random("Edge", "EdgeHold", "EdgeRND", "Overdrive", "BiteMe"))
    {
        case "Edge":
        Edge();
        return;
        break;
        case "EdgeHold":
        EdgeHold();
        return;
        break;
        case "EdgeRND":
        EdgeRND();
        return;
        break;
        case "Overdrive":
        Overdrive();
        return;
        break;
        case "BiteMe":
        BiteMe();
        return;
        break;
    }
    Edge();
}
function Edge()
{
    SMessage("Let\'s " + random("see ", "test ", "watch ") + "how you can " + random("take ", "handle ", "endure ", "bear ") + random("a few ", "some ") + "edges.",delay,sender);
    SMessage("%Edge%",delay,sender);
    DoEdges(4,7, 0,delay,sender);
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    EdgeHold();
}
function EdgeHold()
{
    SMessage("Let\'s " + random("see ", "test ", "watch ") + "how you can " + random("take ", "handle ", "endure ", "bear ", "hold ") + random("a few ", "some ") + "edges.",delay,sender);
    SMessage("%Edge%",delay,sender);
    //startEdging();
    //holdEdge();
    DoEdges(3,5,100,delay,sender);
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    EdgeRND();
}
function EdgeRND()
{
    SMessage("Let\'s " + random("see ", "test ", "watch ") + "how you can " + random("take ", "handle ", "endure ", "bear ") + random("a few ", "some ") + "edges.",delay,sender);
    SMessage("%Edge%",delay,sender);
	DoEdges(4,6, 50,delay,sender);
    /*startEdging();
    if (randomInteger(1, 100) <= 100)
    {
        var amountEdges = randomInt(4, 6);
        DoEdges(amountEdges, amountEdges, 0);
    }
    else
    {
        StartEdging()
    }*/
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    Overdrive();
}
function Overdrive()
{
    SMessage(random("You gonna do a couple of overdrives. Don\'t miss a beat", "An overdrive will push you right on your place", "This overdrive should get you right back into action", "Show me how you can %Take% an overdrive"),delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(randomInt(20, 30));
	stopAudio();
    SMessage("%stopstroking%", 0,sender);
    sleep(randomInt(20, 25));
    SMessage(random("can you %Take% ", "Maybe ", "How about ") + random("One more", "another one"),delay,sender);
    if (randomInteger(1, 100) <= 50)
    {
        Just1OD();
        return;
    }
    SMessage(random("You gonna do a couple of overdrives. Don\'t miss a beat", "An overdrive will push you right on your place", "This overdrive should get you right back into action", "Show me how you can %Take% an overdrive"),delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(randomInt(20, 30));
	stopAudio();
    SMessage("%stopstroking%", 0,sender);
    sleep(randomInt(20, 25));
    Just1OD();
}
function Just1OD()
{
    SMessage(random("I don\'t think you can %Take% another", "I think you would blow with another one", "I think you need to calm down"),delay,sender);
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    BiteMe();
}
function BiteMe()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "BiteMe.js");
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    SpankAss();
}
function SpankAss()
{
    if(getVar("av_GlitterPin", false))
    {
        SMessage("You can remove all clothespins",delay,sender);
        delVar("av_GlitterPin");
        sleep(15);
    }
    SMessage("Stand up",delay,sender);
    sleep(10);
    SMessage("Bend over, " + random("let us see ", "time to spank ") + "this %Ass% of yours",delay,sender);
    SMessage("Get ready with the spoon or ruler",delay,sender);
    sleep(10);
    SMessage(random("Hit ", "spank ") + "your " + random("ass cheek", "ass", "right cheek", "left cheek"),delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "spank ") + "your " + random("ass cheek", "ass", "right cheek", "left cheek"),delay,sender);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(13);
		stopAudio();
    }
    SMessage(random("Hit ", "spank ") + "your " + random("ass cheek", "ass", "right cheek", "left cheek"),delay,sender);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(13);
	stopAudio();
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "spank ") + "your " + random("ass cheek", "ass", "right cheek", "left cheek"),delay,sender);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(13);
		stopAudio();
    }
    SMessage("%SitDown%",delay,sender);
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    CBT();
}
function CBT()
{
    if(getVar("av_GlitterPin", false))
    {
        SMessage("You can remove all clothespins",delay,sender);
        delVar("av_GlitterPin");
        sleep(15);
    }
    SMessage("Time for " + random("a litthe of ", "some ") + random("pain", "ballbusting", "CBT"),delay,sender);
    //run("CBT" + java.io.File.separator + "*.js");
	cbt("both",delay,sender);
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball",delay,sender);
    }
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "*.js");
		cbt("cock",delay,sender);
    }
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    Positions();
}
function Positions()
{
    if(getVar("av_GlitterPin", false))
    {
        SMessage("You can remove all clothespins",delay,sender);
        delVar("av_GlitterPin");
        sleep(15);
    }
    SMessage(random("Rest ", "Break ") + "time...",delay,sender);
    SMessage("But wait in this position",delay,sender);
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    sleep(10);
    SMessage("Stay " + random("like that ", "there ") + "untill " + random("I play ", "you hear ") + "a bell...",delay,sender);
    sleep(randomInt(25, 35));
    SMessage("%SitDown%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Bell.mp3");
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    Pins();
}
function Pins()
{
    SMessage(random("Rest ", "Break ") + "time...",delay,sender);
    SMessage("But I want you to put " + randomInt(2, 5) + "clothespins on your %Balls% " + random("and 2 on your nipples", "%EmoteLaugh%"),delay,sender);
    SMessage("I " + random("hope ", "think ") + "it\'s " + random("hurting", "bitting you", "very uncomfortable"),delay,sender);
    setTempVar("av_GlitterPin", true);
    sleep(randomInt(25, 35));
    setVar("AV_GlitterTestRounds", getVar("AV_GlitterTestRounds", 0) + 1);
    Start();
    return;
    Final();
}
function Final()
{
    SMessage("%ThatsEnough%",delay,sender);
    SMessage(random("I will give you back to your %Owner%", "I will call %DomName% back", "I am done with you....for now"),delay,sender);
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    CMessage(random("I am proud of you", "I appreciate your willingness to accept my guidance and strength", "It gives me great happiness knowing that you did that"));
    return;
}