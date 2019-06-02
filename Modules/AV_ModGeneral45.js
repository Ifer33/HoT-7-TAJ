DMessage("AV_ModGeneral45: start");
main();
DMessage("AV_ModGeneral45: end");
function main()
{
    if(getVar("AV_ModGeneral45_NotFirstTime", false))
    {
        AV_ModGeneral45_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral45", 0);
    setVar("AV_ModGeneral45_NotFirstTime", true);
    AV_ModGeneral45_NotFirstTime();
}
function AV_ModGeneral45_NotFirstTime()
{
    if (getVar("AV_ModGeneral45", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral45", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral45", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral45", getVar("AV_ModGeneral45", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral45", getVar("AV_ModGeneral45", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral45", getVar("AV_ModGeneral45", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral45", getVar("AV_ModGeneral45", 0) + 1000);
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
    setVar("AV_ModGeneral45", 0);
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
    CMessage("Beg to touch that twitching cock");
    setTempVar("AV_Begging", true);
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("and I\'ll consider whether I should let you feel anything other than humiliation and degradation.");
    }
    CMessage("I\'m going to take you to the edge.");
    //CustomMode(%DeniyMe%,Goto,Begging3);
    CMessage("So take out your little dick and make a little circle with your thumb and one of your fingers");
    CMessage("and then just slowly move it up and down");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("just over the head of your cock.");
    CMessage("Make it tingle.");
    CMessage("Get yourself so worked up.");
    CMessage("I want you to feel like you\'re teetering on the edge of a cliff");
    CMessage("but you\'re just not going to go over.");
    CMessage("It feels so good.");
    CMessage("And your mind is gone, you can\'t think about anything else but me");
    CMessage("and wanting to cum.");
    CMessage("Go there with me to the edge.");
    CMessage("Feel it in your cock and in your mind.");
    CMessage("Go faster and slower, hanging on the edge.");
    CMessage("The feeling is so amazing, complete and utter bliss.");
    CMessage("It intensifies with each stroke.");
    CMessage("You\'re drooling now");
    CMessage("you can\'t think, your mind is mush.");
    CMessage("I know exactly how to control you.");
    CMessage("Well if you want to cum you have to do one thing for me,");
    CMessage("BEG me to NOT let you cum.");
    CMessage("Beg me %PetName%.");
    CMessage("You\'ll do anything I want when you mind is in the fragile state.");
    CMessage("Say it, beg me not to let you cum.");
    CMessage("%stopstroking%", 0);
    //Command:CustomMode(ModeText,Normal);
    NotBegged3();
    return;
    Begging3();
}
function Begging3()
{
    CMessage("Yes, Beg me %PetName%");
    DoEdges(2, 3, 0);
    CMessage("How good it would feel to cum right now....");
    CMessage("Beg for the denial!");
    CMessage("Am I going to let you...?");
    NotBegged3();
}
function NotBegged3()
{
    CMessage("You\'re lost in this bliss now.");
    //Command:CustomMode(ModeText,Normal);
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
    CMessage("And even though you already know I\'m going to leave you with blue balls");
    CMessage("you still want to stroke your cock so badly to me.");
    setTempVar("AV_Begging", true);
    CMessage("I know you do.");
    //Command:CustomMode(%AV_Beg%,Goto,Begging5)
    CMessage("I want you to beg me to jerk that cock of yours.");
    CMessage("Beg me for my jerk off instructions.");
    CMessage("Beg me to take full control of your cock.");
    CMessage("I know your cock is twitching and throbbing and pulsating");
    CMessage("you can\'t control your horny cock.");
    CMessage("And that\'s why you come to me");
    NotBeg5();
    return;
    Begging5();
}
function Begging5()
{
    CMessage("Stroke it, pump it how I tell you to.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	Stroking();
    CMessage("Follow my instructions %PetName%.");
    CMessage("Show me how bad you want to pump it for me.");
    CMessage("Show me how hard I make you.");
    CMessage("Stroke it fast, get yourself to the edge.");
    edge();
    CMessage("I want you edging your horny cock over and over again.");
    edge();
    CMessage("I'm going to bring you to the edge and make you stop over and over again.");
    edge();
    CMessage("Feel it twitch, watch it throb in the air.");
    edge();
    NotBeg5();
}
function NotBeg5()
{
    CMessage("See how I control that cock of yours?");
    //Command:CustomMode(ModeText,Normal);
    CMessage("Feel the ache, feel it pulsate");
    CMessage("feel the control that my words have over your cock.");
    CMessage("Let all that cum in your cock go back into your balls.");
	let answer1 = getInput("Awww you don't want to stop, do you?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You can't stop stroking to me.");
    CMessage("Go on, stroke it again.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Faster");
    edge();
    CMessage("You are under my control.");
    CMessage("You want to cum so bad but guess what, you aren\'t cumming now.");
    CMessage("You\'re just going to stare at me as I tell you No.");
    CMessage("I know your cock is begging you to touch it right now");
    CMessage("but I want you to learn a lesson about denial.");
    CMessage("It\'s what you deserve.");
    CMessage("I\'m going to leave you with aching blue balls");
    CMessage("and you\'re going to thank me.");
    CMessage("I love torturing you and fucking with you.");
    return;
    
    Modulo3();
}
function Modulo3()
{
    CMessage("You really have no control over that %Cock%");
    CMessage("You are going to obey me");
    CMessage("%stopstroking%", 0);
    stopStroking();
    CMessage("Show me some control.");
    CMessage("I\'ll tell you when you can stroke");
    CMessage("Now go on and jerk it again while you worship me %PetName%.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Jerk, jerk, jerk.");
    CMessage("obey my instructions.");
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Let it twitch and throb in the air.");
    CMessage("Do you see how I own your cock?");
    CMessage("Just look at me %PetName%");
    CMessage("stare at me without touching your cock.");
    CMessage("You see how it stays hard?");
    CMessage("That is the power I have.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Look at my face");
    CMessage("get ready to edge and hold it there");
    holdEdge();
    CMessage("feel that cum move back towards your balls.");
    CMessage("Feel it twitch and throb, begging for you to touch it.");
    CMessage("Its bouncing around all by itself.");
    CMessage("And now youre going to show me some real self control");
    CMessage("and you better not disobey me.");
    CMessage("%KneelForMe%");
    CMessage("You love being on your knees, don\'t you?");
    CMessage("You love kneeling before your Goddess.");
    CMessage("I know you\'re drooling and desperate to %Stroke%");
    if(getVar("av_fetish_cei", false))
    {
        CEI356();
        return;
    }
    redlight();
    return;
    CEI356();
}
function CEI356()
{
    CMessage("You get so horny thinking about cum eating, don\'t you?");
    CMessage("You think about it a lot.");
    CMessage("You love eating your cum, you take it into your mouth and you swallow it right down.");
    redlight();
}
function redlight()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%LittleGame%");
    CMessage("and my favorite game is Red light, Green light.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But this time its going to have a little twist.");
    }
    CMessage("Green light, you get to stroke to your hearts desire.");
    CMessage("And when the Red light comes on, you have to let go of that cock, no more stroking.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But thats not all, during the Red light");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I\'m going to dish out some naughty cock and ball torture instructions on you.");
    }
    CMessage("This is going to be so much fun.");
    CMessage("I know youre already hard with anticipation.");
    CMessage("Are you ready?");
    CMessage("%GreenLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("go ahead and stroke it however you want, fast or slow.");
    CMessage("Enjoy it while you can.");
    CMessage("Do you enjoy looking at me while you get to stroke?");
    CMessage("I know you do");
    CMessage("%RedLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(!getVar("av_fetish_pain", false))
    {
        red01();
        return;
    }
    CMessage("I cant wait to punish you.");
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(randomInt(40, 60));
    CMessage("Oh did that hurt?");
    CMessage("I\'ll bet it did.");
    red01();
}
function red01()
{
    CMessage("You dont deserve to get off this little ride that you\'ve created for yourself");
    CMessage("where youre jerking off and jerking off endlessly.");
    CMessage("%GreenLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("get that dick hard again even if it hurts.");
    CMessage("%Stroke% %PetName%");
    CMessage("%RedLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("I love red light.");
    if(!getVar("av_fetish_pain", false))
    {
        red02();
        return;
    }
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(randomInt(40, 60));
    CMessage("Ouch!");
    Green01();
    return;
    red02();
}
function red02()
{
    CMessage("Your cock is so ready to explode");
    CMessage("Dont you dare touch your cock.");
    Green01();
}
function Green01()
{
    CMessage("%GreenLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("jerk it again");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("if you can after all that pain.");
    }
    CMessage("Stroke it to who are controlling your orgasm right now.");
    CMessage("Hurry up and enjoy Green light.");
    CMessage("%RedLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
        sleep(randomInt(30, 50));
    }
    if(!getVar("av_fetish_pain", false))
    {
        sleep(randomInt(40, 60));
    }
    CMessage("%GreenLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("%One_ST_Stroke%");
    CMessage("%RedLight%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
        sleep(randomInt(30, 50));
    }
    if(!getVar("av_fetish_pain", false))
    {
        sleep(randomInt(40, 60));
    }
    CMessage("%ThatsEnough%");
    return;
    
    
    Modulo4();
}
function Modulo4()
{
    CMessage("Follow along with my instructions very carefully");
    CMessage("as I\'m going to guide your hand on how to edge that cock.");
    let answer0 = getInput("I\'m being really nice aren\'t I?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Know that by obeying my commands you\'re serving me");
    CMessage("and I know how badly you want to serve me.");
    edge();
    CMessage("Just feel your cock pulsate and throb for me.");
    CMessage("Don\'t you dare touch it.");
    CMessage("Feel how torturous it is.");
    CMessage("I\'m going to give you blue balls %SubName%.");
    return;
}