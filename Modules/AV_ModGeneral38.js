DMessage("AV_ModGeneral38: start");
main();
DMessage("AV_ModGeneral38: end");
function main()
{
    if(getVar("AV_ModGeneral38_NotFirstTime", false))
    {
        AV_ModGeneral38_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral38", 0);
    setVar("AV_ModGeneral38_NotFirstTime", true);
    AV_ModGeneral38_NotFirstTime();
}
function AV_ModGeneral38_NotFirstTime()
{
    if (getVar("AV_ModGeneral38", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral38", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral38", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral38", getVar("AV_ModGeneral38", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral38", getVar("AV_ModGeneral38", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral38", getVar("AV_ModGeneral38", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral38", getVar("AV_ModGeneral38", 0) + 1000);
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
    setVar("AV_ModGeneral38", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
	if(!isStroking()){
		//CMessage("%StartStroking%");
		setStrokingNoTaunt();
	}
    addContact(2);
    SMessage("Hey %DomName%, remember our talk about how hypnotize submissive boys?", -1, 2);
    CMessage("Sure");
    SMessage("Can I try a trick with %SubName%?", -1, 2);
    CMessage("Go ahead");
    SMessage("Nice...", -1, 2);
    SMessage("%SubName%...", -1, 2);
    SMessage("Stare into my eyes....", -1, 2);
    SMessage("Feel yourself drifting and loosing all sense of freedom....", -1, 2);
    SMessage("Let my eyes consume you and let my thoughts be your thoughts....", -1, 2);
    CMessage("%Edge%");
    startEdging();
    CMessage("That\'s it?");
    SMessage("%Lol%, to be honest, I just wanted to make him edge...", -1, 2);
    CMessage("%Lol%");
    CMessage("But you give him just 1 edge?");
    SMessage("You\'re " + "%SubName%...", -1, 2);
    edge("%Edge%", -1, 2);
	edge("%Edge%", -1, 2);
	edge("%Edge%", -1, 2);
	edge("%Edge%", -1, 2);
    SMessage("%ThatsEnough%", -1, 2);
    CMessage("I think so...");
    removeContact(2);
    return;
    
    Modulo2();
}
function Modulo2()
{
    if(!isStroking()){
		//CMessage("%StartStroking%");
		setStrokingNoTaunt();
	}
    addContact(3);
    SMessage("Hey %DomName%, I just finished that book about how hypnotize submissive males", -1, 3);
    CMessage("And?");
    SMessage("Can I try a trick with %SubName%?", -1, 3);
    CMessage("Go ahead");
    SMessage("Nice...", -1, 3);
    SMessage("%SubName%...", -1, 3);
    SMessage("You want to be under our command...", -1, 3);
    SMessage("You want to be reprogrammed into what you deserve to be...", -1, 3);
    SMessage("Stare into my eyes and feel yourself becomming weaker and weaker....", -1, 3);
    edge("%Edge%", -1, 3);
    CMessage("WTF?");
    SMessage("%Lol%", -1, 3);
    CMessage("He don\'t need to be hypnotized for that.");
    SMessage("%Yes% I think so...", -1, 3);
    CMessage("And you was nice to him too");
    SMessage("What? Me? Nice?", -1, 3);
    SMessage("We can\'t have that...", -1, 3);
    if(!getVar("av_fetish_pain", false))
    {
        zwio349();
        return;
    }
    if(!getVar("AV_PinDone", false))
    {
        SMessage("%SubName%, go fetch me a spoon and some clothespins. At least 10 of them.", -1, 3);
        sleep(20);
        setVar("AV_PinDone", true);
    }
    SMessage("Bend over and get ready to spank you ass with the spoon", -1, 3);
    sleep(15);
    SMessage(random("Hit ", "Spank ") + "your ass", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Well, he still don\'t need to be hypnotized for that");
    SMessage("Well, that\'s your fault...You made him a %Slave%", -1, 3);
    CMessage("True...");
    SMessage("So let me take advantage of this", -1, 3);
    SMessage("Again %SubName%", -1, 3);
    SMessage(random("Hit ", "Spank ") + "your ass", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    zwio349();
}
function zwio349()
{
    CMessage("Now let\'s edge you a lot more");
    edge("%Edge%", -1, 3);
	edge("%Edge%", -1, 3);
	edge("%Edge%", -1, 3);
    SMessage("%ThatsEnough%", -1, 3);
    removeContact(3);
    return;
    
    Modulo3();
}
function Modulo3()
{
    if(!isStroking()){
		//CMessage("%StartStroking%");
		setStrokingNoTaunt();
	}
    addContact(4);
    SMessage("Hey %DomName%, did you finished that book about how hypnotize submissive males?", -1, 4);
    CMessage("Yes, but I am not sure if I understood");
    SMessage("May I show you with %SubName%?", -1, 4);
    CMessage("Sure...");
    SMessage("%SubName%...", -1, 4);
    SMessage("You are under my trance...", -1, 4);
    SMessage("You will do as I say or any girls say from now on....", -1, 4);
    SMessage("No objections, you are our %Slave% and you know deep down you deserve this...", -1, 4);
    edge("%Edge%", -1, 4);
    if(!getVar("av_fetish_pain", false))
    {
        a34g68r();
        return;
    }
    SMessage("However you are not weak enough so we need to punish you even more..", -1, 4);
    if(!getVar("AV_PinDone", false))
    {
        SMessage("%SubName%, go fetch me a spoon and some clothespins. At least 10 of them.", -1, 4);
        sleep(20);
        setVar("AV_PinDone", true);
    }
    SMessage("%KneelForMe%", -1, 4);
    SMessage("I control your pain and your pleasure.", -1, 4);
    SMessage("You will however feel more pain than pleasure", -1, 4);
    SMessage("Get ready to spank your %Balls% with the spoon...", -1, 4);
    sleep(13);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    SMessage("The pain you feel strengthens our control", -1, 4);
    a34g68r();
}
function a34g68r()
{
    edge("%Edge%", -1, 4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Ball bursting ", "CBT ", "Balls punishment ") + "again", -1, 4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    SMessage("This makes you even weaker...", -1, 4);
    edge("%Edge%", -1, 4);
    SMessage("More obedient...", -1, 4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Ball bursting ", "CBT ", "Balls punishment ") + "again", -1, 4);
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    SMessage("So that you will eventually understand that only girls cum!", -1, 4);
    edge("%Edge%", -1, 4);
    CMessage("Very nice %Contact3%");
    CMessage("%ThankYou%");
    removeContact(4);
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
    CMessage("Let\'s talk about your crushes, %SubName%...");
    CMessage("They are really super cute, aren\'t?");
    CMessage("Wow, are you getting horny already?");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("Jeez, I think I may have underestimated how much of a horny fucker you really are!");
    }
    CMessage("I\'m having so much fun playing with you already");
    CMessage("watching that %Cock% throb for me as you perv over a girl you can NEVER have.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re just a worthless jerk off whore, right?");
    }
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("you look like you\'re having a little too much fun for my taste.");
    CMessage("What, you mean you\'d enjoy that too??");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("Wow, you perverted pain slut!");
    }
    CMessage("That\'s better, this look suits you really well!");
    CMessage("Let\'s pick one of your crushes now...");
    SelectCrush();
}
function SelectCrush()
{
    if(getVar("AV_Know_50", false))
    {
        setVar("AV_Crush50", 1);
    }
    if(getVar("AV_Know_51", false))
    {
        setVar("AV_Crush50", 2);
    }
    if(getVar("AV_Know_52", false))
    {
        setVar("AV_Crush50", 3);
    }
    if(getVar("AV_Know_53", false))
    {
        setVar("AV_Crush50", 4);
    }
    if(getVar("AV_Know_54", false))
    {
        setVar("AV_Crush50", 5);
    }
    if(getVar("AV_Know_55", false))
    {
        setVar("AV_Crush50", 6);
    }
    if(getVar("AV_Know_56", false))
    {
        setVar("AV_Crush50", 7);
    }
    if(getVar("AV_Know_57", false))
    {
        setVar("AV_Crush50", 8);
    }
    if(getVar("AV_Know_58", false))
    {
        setVar("AV_Crush50", 9);
    }
    if(getVar("AV_Know_59", false))
    {
        setVar("AV_Crush50", 10);
    }
    
    if (getVar("AV_Crush50", 0) == 1)
    {
        Crush01();
        return;
    }
    if (getVar("AV_Crush50", 0) == 2)
    {
        Crush02();
        return;
    }
    if (getVar("AV_Crush50", 0) == 3)
    {
        Crush03();
        return;
    }
    if (getVar("AV_Crush50", 0) == 4)
    {
        Crush04();
        return;
    }
    if (getVar("AV_Crush50", 0) == 5)
    {
        Crush05();
        return;
    }
    if (getVar("AV_Crush50", 0) == 6)
    {
        Crush06();
        return;
    }
    if (getVar("AV_Crush50", 0) == 7)
    {
        Crush07();
        return;
    }
    if (getVar("AV_Crush50", 0) == 8)
    {
        Crush08();
        return;
    }
    if (getVar("AV_Crush50", 0) == 9)
    {
        Crush09();
        return;
    }
    if (getVar("AV_Crush50", 0) == 10)
    {
        Crush10();
        return;
    }
    
    Crush01();
}
function Crush01()
{
    Cr01();
    return;
    Crush02();
}
function Crush02()
{
    switch(random("Cr01", "Cr02"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
    }
    Crush03();
}
function Crush03()
{
    switch(random("Cr01", "Cr02", "Cr03"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
    }
    Crush04();
}
function Crush04()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
    }
    Crush05();
}
function Crush05()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
    }
    Crush06();
}
function Crush06()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05", "Cr06"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
        case "Cr06":
        Cr06();
        return;
        break;
    }
    Crush07();
}
function Crush07()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05", "Cr06", "Cr07"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
        case "Cr06":
        Cr06();
        return;
        break;
        case "Cr07":
        Cr07();
        return;
        break;
    }
    Crush08();
}
function Crush08()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05", "Cr06", "Cr07", "Cr08"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
        case "Cr06":
        Cr06();
        return;
        break;
        case "Cr07":
        Cr07();
        return;
        break;
        case "Cr08":
        Cr08();
        return;
        break;
    }
    Crush09();
}
function Crush09()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05", "Cr06", "Cr07", "Cr08", "Cr09"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
        case "Cr06":
        Cr06();
        return;
        break;
        case "Cr07":
        Cr07();
        return;
        break;
        case "Cr08":
        Cr08();
        return;
        break;
        case "Cr09":
        Cr09();
        return;
        break;
    }
    Crush10();
}
function Crush10()
{
    switch(random("Cr01", "Cr02", "Cr03", "Cr04", "Cr05", "Cr06", "Cr07", "Cr08", "Cr09", "Cr10"))
    {
        case "Cr01":
        Cr01();
        return;
        break;
        case "Cr02":
        Cr02();
        return;
        break;
        case "Cr03":
        Cr03();
        return;
        break;
        case "Cr04":
        Cr04();
        return;
        break;
        case "Cr05":
        Cr05();
        return;
        break;
        case "Cr06":
        Cr06();
        return;
        break;
        case "Cr07":
        Cr07();
        return;
        break;
        case "Cr08":
        Cr08();
        return;
        break;
        case "Cr09":
        Cr09();
        return;
        break;
        case "Cr10":
        Cr10();
        return;
        break;
    }
    
    Cr01();
}
function Cr01()
{
    CMessage(getVar("AV_Persona50", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush50", true);
    Intro();
    return;
    
    Cr02();
}
function Cr02()
{
    CMessage(getVar("AV_Persona51", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush51", true);
    Intro();
    return;
    
    Cr03();
}
function Cr03()
{
    CMessage(getVar("AV_Persona52", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush52", true);
    Intro();
    return;
    
    Cr04();
}
function Cr04()
{
    CMessage(getVar("AV_Persona53", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush53", true);
    Intro();
    return;
    
    Cr05();
}
function Cr05()
{
    CMessage(getVar("AV_Persona54", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush54", true);
    Intro();
    return;
    
    Cr06();
}
function Cr06()
{
    CMessage(getVar("AV_Persona55", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush55", true);
    Intro();
    return;
    
    Cr07();
}
function Cr07()
{
    CMessage(getVar("AV_Persona56", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush56", true);
    Intro();
    return;
    
    Cr08();
}
function Cr08()
{
    CMessage(getVar("AV_Persona57", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush57", true);
    Intro();
    return;
    
    Cr09();
}
function Cr09()
{
    CMessage(getVar("AV_Persona58", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush58", true);
    Intro();
    return;
    
    Cr10();
}
function Cr10()
{
    CMessage(getVar("AV_Persona59", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush59", true);
    Intro();
    return;
    
    NoExtraCrush();
}
function NoExtraCrush()
{
    ThreeCrush();
    return;
    
    ThreeCrush();
}
function ThreeCrush()
{
    switch(random("Singer", "Actress", "Secret"))
    {
        case "Singer":
        Singer();
        return;
        break;
        case "Actress":
        Actress();
        return;
        break;
        case "Secret":
        Secret();
        return;
        break;
    }
    Actress();
}
function Actress()
{
    CMessage(getVar("AV_Persona01", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushAct", true);
    Intro();
    return;
    Singer();
}
function Singer()
{
    CMessage(getVar("AV_Persona02", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushSing", true);
    Intro();
    return;
    Secret();
}
function Secret()
{
    CMessage(getVar("AV_Persona13", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushSec", true);
    Intro();
    return;
    
    Intro();
}
function Intro()
{
    if(getVar("AV_TempCrushesRND2", false))
    {
        AV_TempCrushesRND2();
        return;
    }
    if(getVar("AV_TempCrushesRND3", false))
    {
        AV_TempCrushesRND3();
        return;
    }
    CMessage("Stare into the eyes of that beautiful princess on your screen that you worship. %AV_ImgType%");
	lockImages();
    answer1=getInput("You\'re transfixed by her, aren\'t you? %AV_ImgType%",5);
    //lockImages();
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You can touch your cock- rub the head slowly %AV_ImgType%");
    //unlockImages();
    CMessage("making tiny little circles. %AV_ImgType%");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I like to tease pathetic boys like you  %AV_ImgType%");
    }
    CMessage("Now you may start jerking your cock SLOWLY %AV_ImgType%");
    CMessage("but make sure to give those balls a good squeeze too whilst you do so.  %AV_ImgType%");
    CMessage("You\'re going to continue jerking slowly %AV_ImgType%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("and for every 10 strokes you will slap your balls hard!  %AV_ImgType%");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("If you break eye contact with her, then you slap your balls till I tell you to stop   %AV_ImgType%");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("If you break eye contact with her, then you stop %Stroking% %AV_ImgType%");
    }
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%Stop% %AV_ImgType%");
	unlockImages();
    CMessage("Nicely done, %PetName%!");
    CMessage("You\'re looking a tad uncomfortable there, are you feeling the urge to cum?");
    CMessage("I bet you are.");
    CMessage("But I\'m not letting you yet.");
    setTempVar("AV_TempCrushesRND3", true);
    delVar("AV_IntCrush50");
    delVar("AV_IntCrush51");
    delVar("AV_IntCrush52");
    delVar("AV_IntCrush53");
    delVar("AV_IntCrush54");
    delVar("AV_IntCrush55");
    delVar("AV_IntCrush56");
    delVar("AV_IntCrush57");
    delVar("AV_IntCrush58");
    delVar("AV_IntCrush59");
    delVar("AV_IntCrushAct");
    delVar("AV_IntCrushSing");
    delVar("AV_IntCrushSec");
    CMessage("Let\'s find another of your crushes for some more inspiration...");
    SelectCrush();
    return;
    
    AV_TempCrushesRND3();
}
function AV_TempCrushesRND3()
{
	setStrokingNoTaunt();
	lockImages();
    CMessage("%AV_ImgType%");
    CMessage("I bet you wish she would sit on your face so you could bask in its full glory. %AV_ImgType%");
    CMessage("That\'s it, you can stroke a little faster now %AV_ImgType%");
    CMessage("but let\'s mix things up a bit %AV_ImgType%");
    CMessage("I want you to show me how good your backhand is  %AV_ImgType%");
    CMessage("How is that, did it feel awkward? %AV_ImgType%");
    CMessage("Or have you had practise with that technique? %AV_ImgType%");
    stopStroking();
	CMessage("%Stop% %AV_ImgType%");
    if(!getVar("av_fetish_pain", false))
    {
        a39j84hs();
        return;
    }
    CMessage("Anyway, now that you\'ve shown her ass some love, time to give some to yours %AV_ImgType%");
    CMessage("bend over! %AV_ImgType%");
    CMessage("I want to see 10 hard spanks on each cheek, right away. %AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    sleep(30);
    a39j84hs();
}
function a39j84hs()
{
    CMessage("%KneelForMe%");
    CMessage("Or better, on your hands and knees, like a dog.");
    setTempVar("AV_TempCrushesRND2", true);
	setStrokingNoTaunt();
	lockImages();
    CMessage("%AV_ImgType%");
    CMessage("brilliant %AV_ImgType%");
    CMessage("Keep stroking  %AV_ImgType%");
    CMessage("NO CUMMING.  %AV_ImgType%");
    CMessage("If you edge, you stop for 10 seconds to cool off and then you start straight back up again. %AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
    CMessage("%AV_ImgType%");
	unlockImages();
    CMessage("%Stop%", 0);
	stopStroking();
    delVar("AV_IntCrush50");
    delVar("AV_IntCrush51");
    delVar("AV_IntCrush52");
    delVar("AV_IntCrush53");
    delVar("AV_IntCrush54");
    delVar("AV_IntCrush55");
    delVar("AV_IntCrush56");
    delVar("AV_IntCrush57");
    delVar("AV_IntCrush58");
    delVar("AV_IntCrush59");
    delVar("AV_IntCrushAct");
    delVar("AV_IntCrushSing");
    delVar("AV_IntCrushSec");
    CMessage("Time to find a new crush");
    SelectCrush();
    return;
    
    AV_TempCrushesRND2();
}
function AV_TempCrushesRND2()
{
	lockImages();
    CMessage("I want to see you edge for her %AV_ImgType%");
    CMessage("As I\'m feeling nice %AV_ImgType%");
    CMessage("%AV_ImgType%");
	//lockImages();
	edge("%Edge% %AV_ImgType%");
	edge("%Edge% %AV_ImgType%");
	edge("%Edge% %AV_ImgType%");
    /*CMessage("%Edge% %AV_ImgType%");
    startEdging();
    CMessage("%Edge% %AV_ImgType%");
    startEdging();
    CMessage("%Edge% %AV_ImgType%");
    startEdging();*/
    CMessage("Can you take another one? %AV_ImgType%");
	edge("%Edge% %AV_ImgType%");
	unlockImages();
    delVar("AV_IntCrush50");
    delVar("AV_IntCrush51");
    delVar("AV_IntCrush52");
    delVar("AV_IntCrush53");
    delVar("AV_IntCrush54");
    delVar("AV_IntCrush55");
    delVar("AV_IntCrush56");
    delVar("AV_IntCrush57");
    delVar("AV_IntCrush58");
    delVar("AV_IntCrush59");
    delVar("AV_IntCrushAct");
    delVar("AV_IntCrushSing");
    delVar("AV_IntCrushSec");
    delVar("AV_TempCrushesRND3");
    delVar("AV_TempCrushesRND2");
    CMessage("%ThatsEnough%");
    return;
}