DMessage("AV_AlternateLink: start");
main();
DMessage("AV_AlternateLink: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("%SubName% ...");
    if(getVar("AV_MEM_Contact1", false))
    {
        if (randomInteger(1, 100) <= 85)
        {
            Contact1();
            return;
        }
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        if (randomInteger(1, 100) <= 85)
        {
            Contact2();
            return;
        }
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        if (randomInteger(1, 100) <= 85)
        {
            Contact3();
            return;
        }
    }
    NoGlitter4u();
    return;
    Contact1();
}
function Contact1()
{
    CMessage("So... " + random("%domFriend1Name% made your %Cock% %Ache%", "you miss %domFriend1Name%", "you want %domFriend1Name% to tease you"));
    setTempVar("AV_IntGlitter1", true);
    CMessage("Let\'s call her");
    addContact(2);
    removeContact(1);
    Intro();
    return;
    
    Contact2();
}
function Contact2()
{
    CMessage("So... " + random("%domFriend2Name% made your %Cock% %Ache%", "you miss %domFriend2Name%", "you want %domFriend2Name% to tease you"));
    setTempVar("AV_IntGlitter2", true);
    CMessage("Let\'s call her");
    addContact(3);
    removeContact(1);
    Intro();
    return;
    
    Contact3();
}
function Contact3()
{
    CMessage("So... " + random("%domFriend3Name% made your %Cock% %Ache%", "you miss %domFriend3Name%", "you want %domFriend3Name% to tease you"));
    setTempVar("AV_IntGlitter3", true);
    CMessage("Let\'s call her");
    addContact(4);
    removeContact(1);
    Intro();
    return;
    
    NoGlitter4u();
}
function NoGlitter4u()
{
    if(!getVar("AV_Know_50", false) && !getVar("AV_Know_51", false) && !getVar("AV_Know_52", false) && !getVar("AV_Know_53", false) && !getVar("AV_Know_54", false) && !getVar("AV_Know_55", false) && !getVar("AV_Know_56", false) && !getVar("AV_Know_57", false) && !getVar("AV_Know_58", false) && !getVar("AV_Know_59", false))
    {
        NoExtraCrush();
        return;
    }
    switch(random("SelectCrush", "AssorTits", "SoftCore", "FemDom", "ThreeCrush"))
    {
        case "SelectCrush":
        SelectCrush();
        return;
        break;
        case "AssorTits":
        AssorTits();
        return;
        break;
        case "SoftCore":
        SoftCore();
        return;
        break;
        case "FemDom":
        FemDom();
        return;
        break;
        case "ThreeCrush":
        ThreeCrush();
        return;
        break;
    }
    
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
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona50", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush50", true);
    Intro();
    return;
    
    Cr02();
}
function Cr02()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona51", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush51", true);
    Intro();
    return;
    
    Cr03();
}
function Cr03()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona52", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush52", true);
    Intro();
    return;
    
    Cr04();
}
function Cr04()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona53", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush53", true);
    Intro();
    return;
    
    Cr05();
}
function Cr05()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona54", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush54", true);
    Intro();
    return;
    
    Cr06();
}
function Cr06()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona55", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush55", true);
    Intro();
    return;
    
    Cr07();
}
function Cr07()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona56", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush56", true);
    Intro();
    return;
    
    Cr08();
}
function Cr08()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona57", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush57", true);
    Intro();
    return;
    
    Cr09();
}
function Cr09()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona58", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush58", true);
    Intro();
    return;
    
    Cr10();
}
function Cr10()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona59", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrush59", true);
    Intro();
    return;
    
    NoExtraCrush();
}
function NoExtraCrush()
{
    switch(random("AssorTits", "SoftCore", "FemDom", "ThreeCrush"))
    {
        case "AssorTits":
        AssorTits();
        return;
        break;
        case "SoftCore":
        SoftCore();
        return;
        break;
        case "FemDom":
        FemDom();
        return;
        break;
        case "ThreeCrush":
        ThreeCrush();
        return;
        break;
    }
    
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
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona01", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushAct", true);
    Intro();
    return;
    Singer();
}
function Singer()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona02", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushSing", true);
    Intro();
    return;
    Secret();
}
function Secret()
{
    CMessage("You will %Stroke% and edge for " + getVar("AV_Persona13", ""));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setTempVar("AV_IntCrushSec", true);
    Intro();
    return;
    
    AssorTits();
}
function AssorTits()
{
    if(getVar("AssMan", false))
    {
        AssMan();
        return;
    }
    if(getVar("TitMan", false))
    {
        TitMan();
        return;
    }
    CMessage("Tell me something %PetName%");
    CMessage("Are you more of an ass man");
    let answer0 = getInput("Or do you prefer a nice pair of tits?");
    while (!(answer0.isLike("ass") || answer0.isLike("butt") || answer0.isLike("first") || answer0.isLike("former") || answer0.isLike("behind") || answer0.isLike("rear") || answer0.isLike("hienie") || answer0.isLike("bum") || answer0.isLike("tit") || answer0.isLike("boob") || answer0.isLike("breast") || answer0.isLike("last") || answer0.isLike("latter") || answer0.isLike("both") || answer0.isLike("decide") || answer0.isLike("either") || answer0.isLike("choose") || answer0.isLike("and")))
    {
		if (answer0.isLike("both", "decide", "either", "choose", "and"))
		{
			answer0 = getInput("You have to pick one %PetName%");
			//--Command:LoopAnswer
			//answer0.loop();
		}else{
			answer0 = getInput("Tits or ass %PetName%?");
		}
    }
    if (answer0.isLike("ass", "butt", "first", "former", "behind", "rear", "hienie", "bum"))
    {
        CMessage("%Okay%");
        setVar("AssMan", true);
    }
    else if (answer0.isLike("tit", "boob", "breast", "last", "latter"))
    {
        CMessage("%Okay%");
        setVar("TitMan", true);
    }
    if(getVar("AssMan", false))
    {
        AssMan();
        return;
    }
    if(getVar("TitMan", false))
    {
        TitMan();
        return;
    }
    AssMan();
}
function AssMan()
{
    if (randomInteger(1, 100) <= 20)
    {
        NoAssForYou();
        return;
    }
    CMessage("Since you are an ass man");
    setTempVar("AV_Butt", true);
    Intro();
    return;
    TitMan();
}
function TitMan()
{
    if (randomInteger(1, 100) <= 20)
    {
        NoTitForYou();
        return;
    }
    CMessage("Since you are a tit man");
    setTempVar("AV_Boobs", true);
    Intro();
    return;
    NoAssForYou();
}
function NoAssForYou()
{
    CMessage("I know you are an ass man. But now, you will %Stroke% for Boobs");
    setTempVar("AV_Boobs", true);
    Intro();
    return;
    NoTitForYou();
}
function NoTitForYou()
{
    CMessage("I know you are a tit man. But now, you will %Stroke% for Butts");
    setTempVar("AV_Butt", true);
    Intro();
    return;
    
    SoftCore();
}
function SoftCore()
{
    CMessage("You have some really hot girls pictures on your PC");
    showTaggedImage(4, ["softcore"]);
    CMessage("You will %Stroke% and edge for them now");
    setTempVar("AV_Softcore", true);
    Intro();
    return;
    
    FemDom();
}
function FemDom()
{
    CMessage("You have some really hot femdom pictures on your PC");
    showTaggedImage(4, ["femdom"]);
    CMessage("You will %Stroke% and edge for them now");
    setTempVar("AV_FemDom", true);
    Intro();
    return;
    
    
    Intro();
}
function Intro()
{
    CMessage("Get in the mood and start stroking");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    lockImages();
    CMessage("you\'re going to stroke and edge in various ways,");
    unlockImages();
    CMessage("%stopstroking%", 0);
    CMessage("Ok then, ...");
    CMessage("Gently stroke your cock " + random("20 ", "25 ", "30 ") + "times, as slow as you can bear. %AV_ImgType%");
    lockImages();
    let answer0 = getInput("You always must tell me when you have done your strokings!");
    unlockImages();
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Ok");
    }
    setVar("AV_StrokeIntLink", 0);
    setVar("AV_StrokeIntLinkGoal", getVar("%Random5%,8", 0));
    
    StrokeCheck();
}
function StrokeCheck()
{
    if (getVar("AV_StrokeIntLink", 0) < getVar("AV_StrokeIntLinkGoal", 0))
    {
        StrokeMain();
        return;
    }
    if (getVar("AV_StrokeIntLink", 0) >= getVar("AV_StrokeIntLinkGoal", 0))
    {
        StrokeDone();
        return;
    }
    
    StrokeMain();
}
function StrokeMain()
{
    switch(random("Stroke01", "Stroke02", "Stroke03", "Stroke04", "Stroke05", "Stroke06", "Stroke07", "Stroke08", "Stroke09", "Stroke10", "Stroke11", "Stroke12", "Stroke13", "Stroke14", "Stroke15", "Stroke16", "Stroke17", "Stroke18", "Stroke19"))
    {
        case "Stroke01":
        Stroke01();
        return;
        break;
        case "Stroke02":
        Stroke02();
        return;
        break;
        case "Stroke03":
        Stroke03();
        return;
        break;
        case "Stroke04":
        Stroke04();
        return;
        break;
        case "Stroke05":
        Stroke05();
        return;
        break;
        case "Stroke06":
        Stroke06();
        return;
        break;
        case "Stroke07":
        Stroke07();
        return;
        break;
        case "Stroke08":
        Stroke08();
        return;
        break;
        case "Stroke09":
        Stroke09();
        return;
        break;
        case "Stroke10":
        Stroke10();
        return;
        break;
        case "Stroke11":
        Stroke11();
        return;
        break;
        case "Stroke12":
        Stroke12();
        return;
        break;
        case "Stroke13":
        Stroke13();
        return;
        break;
        case "Stroke14":
        Stroke14();
        return;
        break;
        case "Stroke15":
        Stroke15();
        return;
        break;
        case "Stroke16":
        Stroke16();
        return;
        break;
        case "Stroke17":
        Stroke17();
        return;
        break;
        case "Stroke18":
        Stroke18();
        return;
        break;
        case "Stroke19":
        Stroke19();
        return;
        break;
    }
    
    Stroke01();
}
function Stroke01()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("fondle your balls");
    sleep(20);
    CMessage("%AV_ImgType%");
    let answer0 = getInput("Now use the other hand to stroke at a medium pace " + random("50 ", "60 ", "40 ", "55 ") + "times, while continuing to caress your own balls. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke02();
}
function Stroke02()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Use one hand to rub your nipple, and use the other one to slowly stroke");
    sleep(20);
    CMessage("%AV_ImgType%");
    CMessage("Swap hands and stroke at a medium pace.");
    sleep(10);
    CMessage("%AV_ImgType%");
    CMessage("Move your hand back down to your balls and fondle them while stroking, make sure to have a light grip.");
    sleep(20);
	CMessage("%AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b210.mp3");
    CMessage("%stopstroking%", 0);
    StrokeCheck();
    return;
    
    Stroke03();
}
function Stroke03()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("All right, tighten your grip and continue for another " + random("50 ", "35 ", "40 ", "45 ") + "fast strokes. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    CMessage("Reach the edge, now!");
	CMessage("%AV_ImgType%");
	lockImages();
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    //CMessage("%AV_ImgType%");
    CMessage("let go completely");
	unlockImages();
    StrokeCheck();
    return;
    
    Stroke04();
}
function Stroke04()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Put your hands behind your back and focus on your breathing");
    sleep(20);
    let answer0 = getInput("Stroke your cock at a slow pace " + random("20 ", "25 ", "30 ") + "times and say \'I love beautiful girls.\' at least once. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke05();
}
function Stroke05()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Stroke fast 20 times, then medium 20 times, then slow 20 times. %AV_ImgType%");
    lockImages();
    let answer0 = getInput("Tighten your grip as you go along.");
    unlockImages();
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke06();
}
function Stroke06()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Kneeling or not,...");
    CMessage("bring your head to the floor as low as possible, try to make your nose touch the ground.");
    CMessage("Hold this position");
    sleep(20);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    CMessage("%SitDown%");
    StrokeCheck();
    return;
    
    Stroke07();
}
function Stroke07()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Stand up now.");
    let answer0 = getInput("Stroke fast " + (java.lang.Math.round(randomInt(20, 100) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    let answer1 = getInput("Stroke fast " + (java.lang.Math.round(randomInt(20, 100) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer1.isLike("done")))
    {
        answer1 = getInput("Tell me when you are done ...");
    }
    if (answer1.isLike("done"))
    {
    }
    CMessage("%SitDown%");
    StrokeCheck();
    return;
    
    Stroke08();
}
function Stroke08()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("%KneelForMe%");
    let answer0 = getInput("Stroke fast " + (java.lang.Math.round(randomInt(20, 50) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    let answer1 = getInput("Stroke fast " + (java.lang.Math.round(randomInt(20, 50) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer1.isLike("done")))
    {
        answer1 = getInput("Tell me when you are done ...");
    }
    if (answer1.isLike("done"))
    {
    }
    CMessage("%SitDown%");
    StrokeCheck();
    return;
    
    Stroke09();
}
function Stroke09()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("Stroke slowly " + (java.lang.Math.round(randomInt(10, 50) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke10();
}
function Stroke10()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("%Stroke%");
	CMessage("%AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(4, 7));
    CMessage("%stop%", 0);
    CMessage("%Stroke%");
	CMessage("%AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(4, 9));
    CMessage("%stop%", 0);
    CMessage("%Stroke%");
	CMessage("%AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(4, 7));
    CMessage("%stop%", 0);
    StrokeCheck();
    return;
    
    Stroke11();
}
function Stroke11()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("Stroke " + (java.lang.Math.round(randomInt(20, 80) / 10.0) * 10) + "times at medium speed. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke12();
}
function Stroke12()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("Stroke fast " + (java.lang.Math.round(randomInt(20, 100) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke13();
}
function Stroke13()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("Spread your legs and stroke 50 times at medium pace with a strong grip. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke14();
}
function Stroke14()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("%AV_ImgType%");
    lockImages();
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("relax.");
    unlockImages();
    StrokeCheck();
    return;
    
    Stroke15();
}
function Stroke15()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    let answer0 = getInput("Stroke 50 times at a medium pace and a strong grip, then switch hands and stroke 30 times at a slow pace with a light grip. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke16();
}
function Stroke16()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    if (inGroup(2))
    {
        CMessage("Look at me, stroke 30 times as slowly as you can. %AV_ImgType%");
    }
    if (inGroup(3))
    {
        CMessage("Look at me, stroke 30 times as slowly as you can. %AV_ImgType%");
    }
    if (inGroup(4))
    {
        CMessage("Look at me, stroke 30 times as slowly as you can. %AV_ImgType%");
    }
    if (inGroup(1))
    {
        CMessage("Look at the girl, stroke 30 times as slowly as you can. %AV_ImgType%");
    }
    if (answer-1.isLike("done"))
    {
    }
    StrokeCheck();
    return;
    
    Stroke17();
}
function Stroke17()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage(random("I want ", "give me ", "Let\'s see ") + "an overdrive");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(40);
    CMessage("%stop%", 0);
    StrokeCheck();
    return;
    
    Stroke18();
}
function Stroke18()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Follow the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "*.mp3");
    sleep(randomInt(40, 50));
    CMessage("%stop%", 0);
    StrokeCheck();
    return;
    
    Stroke19();
}
function Stroke19()
{
    setVar("AV_StrokeIntLink", getVar("AV_StrokeIntLink", 0) + 1);
    CMessage("Follow the beats");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "*.mp3");
    sleep(randomInt(40, 50));
    CMessage("%stop%", 0);
    StrokeCheck();
    return;
    
	//---------------------------------------------------------------------------------------------------
    //CMessage("Edges");
	//---------------------------------------------------------------------------------------------------
    
    StrokeDone();
}
function StrokeDone()
{
    switch(random("Edge01", "Edge02", "Edge03", "Edge04", "Edge05", "Edge06"))
    {
        case "Edge01":
        Edge01();
        return;
        break;
        case "Edge02":
        Edge02();
        return;
        break;
        case "Edge03":
        Edge03();
        return;
        break;
        case "Edge04":
        Edge04();
        return;
        break;
        case "Edge05":
        Edge05();
        return;
        break;
        case "Edge06":
        Edge06();
        return;
        break;
    }
    
    Edge01();
}
function Edge01()
{
    CMessage("%KneelForMe%");
	CMessage("%AV_ImgType%");
	lockImages();
    //CMessage("%Edge%");
    //startEdging();
    holdEdge(); 
    CMessage("relax.");
    unlockImages();
    sleep(10);
    CMessage("%SitDown%");
    TasksMain();
    return;
    
    Edge02();
}
function Edge02()
{
    CMessage("Stroke at a slow pace.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    sleep(19);
	CMessage("%AV_ImgType%");
	lockImages();
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("say \"Thank you for letting me edge looking at beautiful girls\"");
    unlockImages();
    sleep(20);
    TasksMain();
    return;
    
    Edge03();
}
function Edge03()
{
    CMessage("play with your nipples");
    sleep(20);
    CMessage("%AV_ImgType%");
    let answer0 = getInput("Stroke at a medium pace " + (java.lang.Math.round(randomInt(10, 50) / 10.0) * 10) + "times. %AV_ImgType%");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
	CMessage("%AV_ImgType%");
	lockImages();
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("relax.");
    unlockImages();
    sleep(10);
    TasksMain();
    return;
    
    Edge04();
}
function Edge04()
{
    CMessage("Using your hands, try to guide your penis downwards so the tip points as far backwards as possible.");
    CMessage("Make yourself hard while in this position by rubbing your cock with one finger.");
	CMessage("%AV_ImgType%");
	lockImages();
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    unlockImages();
	CMessage("%AV_ImgType%");
	lockImages();
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    unlockImages();
    TasksMain();
    return;
    
    Edge05();
}
function Edge05()
{
	CMessage("%AV_ImgType%");
	lockImages();
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    unlockImages();
    TasksMain();
    return;
    
    Edge06();
}
function Edge06()
{
    CMessage("Stand up now.");
    CMessage("%Edge%");
	CMessage("%AV_ImgType%");
	lockImages();
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    CMessage("Relax");
    unlockImages();
    CMessage("%SitDown%");
    TasksMain();
    return;
	//---------------------------------------------------------------------------------------------------
    //CMessage("Tasks");
    //---------------------------------------------------------------------------------------------------
    TasksMain();
}
function TasksMain()
{
    CMessage("Are you wondering " + random("how I will ", "in what way I\'m going ", "what I will do ") + "to " + random("torment ", "torture ") + "you next?");
    if (randomInteger(1, 100) <= 20)
    {
        Not_Have_To_Wonder();
        return;
    }
    CMessage("Well let me think...");
    CMessage("I could tease you some more");
    if (randomInteger(1, 100) <= 40)
    {
        Edge_For_Me();
        return;
    }
    CMessage("Maybe " + random("make you ", "instruct you to ") + random("smack it around ", "make you hurt it ") + "a little bit %Grin%");
    if (randomInteger(1, 100) <= 40)
    {
        Smack_It_Around();
        return;
    }
    CMessage("I could always show you some more " + random("hot ", "sexy ") + random("images ", "pictures ") + "to " + random("make it even harder", "frustrate it even more"));
    if (randomInteger(1, 100) <= 40)
    {
        Blog_Pictures();
        return;
    }
    CMessage("Or " + random("maybe I will ", "I could ") + random("ignore that cock completely ", "shift my attention ", "leave that cock be for now ") + "and " + random("focus on ", "turn to ") + "those %Balls% of yours");
    if (randomInteger(1, 100) <= 40)
    {
        Focus_On_Balls();
        return;
    }
    CMessage("But then again");
    CMessage(random("I think you need to ", "Maybe you should ", "You should probably ") + "spend less time " + random("imagining ", "thinking of ") + "all the things I could put you through");
    CMessage("And more time actually going through them %Grin%");
    Start_Stroking();
    return;
    Edge_For_Me();
}
function Edge_For_Me()
{
    CMessage(random("You know what ", "In fact ", "Actually ") + "I think I will %Grin%");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    if (randomInteger(1, 100) <= 60)
    {
        Edge_Again();
        return;
    }
    CMessage("No point in letting your teasing stop there");
    Start_Stroking();
    return;
    Edge_Again();
}
function Edge_Again()
{
    CMessage("Edge for me again");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    if (randomInteger(1, 100) <= 30)
    {
        Edge_Again();
        return;
    }
    CMessage("No point in letting your teasing stop there");
    Start_Stroking();
    return;
    Smack_It_Around();
}
function Smack_It_Around()
{
    //--Command:CockTorture
	if(cockTorture()){
		CMessage(random("Not a bad idea ", "That sounds like fun ", "Maybe I should do that ") + "actually");
		//run("CBT" + java.io.File.separator + "CBTCock_First.js");
		cbt("cock");
	}
    CMessage("So many ways to make that %Cock% suffer");
    CMessage("Let\'s " + random("return to ", "get back to ") + random("my favorite way ", "the way I like best ") + "of all though %Grin%");
    Start_Stroking();
    return;
    Blog_Pictures();
}
function Blog_Pictures()
{
    CMessage("Like this one");
    //--Command:NewBlogImage
	showTeasePicture();
    CMessage("Or this one");
    showTeasePicture();
    CMessage("Or " + random("what about ", "even ", "maybe ") + "this one");
    showTeasePicture();
    CMessage("There\'s just " + random("so many", "an endless supply", "so much hotness online"));
    CMessage("I\'ll have to find some " + random("even better ", "really hot ", "astonishingly hot ") + random("ones", "pictures", "pics", "images"));
    CMessage("But in the meantime");
    Start_Stroking();
    return;
    Focus_On_Balls();
}
function Focus_On_Balls()
{
    //--Command:BallTorture
	if(ballTorture()){
		CMessage("Yeah, let\'s %Hurt% those %Balls% " + random("of yours ", "for a little while ") + "%EmoteRandom%");
		//run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
	}
    CMessage("I " + random("do enjoy ", "love ", "always have so much fun ") + "making those %Balls% suffer");
    CMessage("But now that %Cock% " + random("needs some attention ", "is feeling left out ", "is starting to feel lonely ") + "%EmoteRandom%");
    Start_Stroking();
    return;
    Start_Stroking();
}
function Start_Stroking()
{
    if (randomInteger(1, 100) <= 33)
    {
        pvLink27A();
        return;
    }
    weiter();
    return;
    
    Not_Have_To_Wonder();
}
function Not_Have_To_Wonder()
{
    CMessage("You don\'t have to wonder %PetName%");
    let answer0 = getInput("Now you have a choice, fucking or spanking?");
    while (!(answer0.isLike("fuck") || answer0.isLike("spank")))
    {
        answer0 = getInput("fucking or spanking, %PetName%");
    }
    if (answer0.isLike("fuck"))
    {
        CMessage("Good, I guess you already figured out who\'s gonna be fucked, %PetName%");
        anal_stuff();
        return;
    }
    else if (answer0.isLike("spank"))
    {
        CMessage("Ok, then let\'s hurt that balls of yours");
        spanking_stuff();
        return;
    }
    anal_stuff();
}
function anal_stuff()
{
    CMessage("We\'re going to do some anal stuff now.");
    CMessage("A good sissy slut needs her asshole trained");
    let answer0 = getInput("so get your buttplug and lube ready, notice me when you are done");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done ...");
    }
    if (answer0.isLike("done"))
    {
    }
    let answer1 = getInput("Pfff, honestly bitch, you DO have a bigger plug than that, don\'t you?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Do you have a bigger buttplug, yes or no");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good, then go and get it");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Then you should consider to buy one");
    }
    CMessage("Rub the skin between your balls and your butt while stroking slowly.");
    CMessage("%AV_ImgType%");
	sleep(20);
    let answer2 = getInput("Lube up the butt plug, tell me when you are done");
    while (!(answer2.isLike("done")))
    {
        answer2 = getInput("Tell me when you are done ...");
    }
    if (answer2.isLike("done"))
    {
    }
    CMessage("put the tip of the plug slightly into your ass, just the tip, only 1 cm deep %AV_ImgType%");
    CMessage("... and start stroking");
	CMessage("%AV_ImgType%");
	lockImages();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Slowly start fucking yourself with your plug. %AV_ImgType%");
    CMessage("Don\'t push it in, use only the upper part of the plug");
    CMessage("Moan softly once you feel comfortable and speed up.");
    sleep(30);
    unlockImages();
    CMessage("Keep going and repeat this 5 times:");
    CMessage("\"I want to have a cock inside me");
    sleep(30);
    CMessage("%AV_ImgType%");
    CMessage("Keep fucking yourself while ...");
    if (inGroup(2))
    {
        CMessage("Edge for me");
		CMessage("%AV_ImgType%");
		lockImages();
        startEdging();
    }
    if (inGroup(3))
    {
        CMessage("Edge for me");
		CMessage("%AV_ImgType%");
		lockImages();
        startEdging();
    }
    if (inGroup(4))
    {
        CMessage("Edge for me");
		CMessage("%AV_ImgType%");
		lockImages();
        startEdging();
    }
    if (inGroup(1))
    {
        CMessage("Edge for this girl");
		CMessage("%AV_ImgType%");
		lockImages();
        startEdging();
    }
    CMessage("%stopstroking%", 0);
    unlockImages();
    CMessage("Start fucking again");
    CMessage("also start wanking again");
	CMessage("%AV_ImgType%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    lockImages();
	sleep(30);
    CMessage("keep fucking yourself while you ...");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstroking%", 0);
    unlockImages();
    CMessage("Take the plug out of your ass if you haven\'t already");
    weiter();
    return;
    spanking_stuff();
}
function spanking_stuff()
{
    CMessage("Now you will get punished,...");
    CMessage("HARD!");
    //if (inGroup(2))
    //{
        CMessage("Imagine I would do the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    /*}
    if (inGroup(3))
    {
        CMessage("Imagine I would do the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    if (inGroup(4))
    {
        CMessage("Imagine I would do the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    if (inGroup(1))
    {
        CMessage("Imagine she would do the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }*/
    CMessage("Let\'s get started %Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    unlockImages();
    if (inGroup(2))
    {
        CMessage("Maybe you would prefer me to do those spanks %AV_ImgType%");
        lockImages();
    }
    if (inGroup(3))
    {
        CMessage("Maybe you would prefer me to do those spanks %AV_ImgType%");
        lockImages();
    }
    if (inGroup(4))
    {
        CMessage("Maybe you would prefer me to do those spanks %AV_ImgType%");
        lockImages();
    }
    if (inGroup(1))
    {
        CMessage("Maybe you would prefer her to do those spanks %AV_ImgType%");
        lockImages();
    }
    CMessage("%Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    unlockImages();
    CMessage("Oh, does it hurt?!");
    CMessage("We are not done, %Petname%");
    if (inGroup(2))
    {
        CMessage("What if I would spank your ass %AV_ImgType%");
        lockImages();
    }
    if (inGroup(3))
    {
        CMessage("What if I would spank your ass %AV_ImgType%");
        lockImages();
    }
    if (inGroup(4))
    {
        CMessage("What if I would spank your ass %AV_ImgType%");
        lockImages();
    }
    if (inGroup(1))
    {
        CMessage("What if she would spank your ass %AV_ImgType%");
        lockImages();
    }
    CMessage("%Grin%");
    if (inGroup(2))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(3))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(4))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(1))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    unlockImages();
    CMessage("Or she " + "%AV_ImgType%");
    lockImages();
    CMessage("%Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    unlockImages();
    CMessage("Stings, doesn\'t it?!");
    CMessage("Come on, one more time");
    if (inGroup(2))
    {
        CMessage("Imagine me doing the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    if (inGroup(3))
    {
        CMessage("Imagine me doing the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    if (inGroup(4))
    {
        CMessage("Imagine me doing the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    if (inGroup(1))
    {
        CMessage("Imagine she would do the spanking while you are all tied up %AV_ImgType%");
        lockImages();
    }
    CMessage("Let\'s get started %Grin%");
    if (inGroup(2))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(3))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(4))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (inGroup(1))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    unlockImages();
    CMessage("Well done, %Petname%!");
    increaseAnger(-3)
    weiter();
    return;
    
    weiter();
}
function weiter()
{
    CMessage("%ThatsEnough%");
    unlockImages();
    sleep(25);
    //--Command:DeletFlag(AV_Softcore,AV_FemDom,AV_Boobs,AV_Butt,AV_IntCrush50,AV_IntCrush51,AV_IntCrush52,AV_IntCrush53)
	delVar("AV_Softcore");
	delVar("AV_FemDom");
	delVar("AV_Boobs");
	delVar("AV_Butt");
	delVar("AV_IntCrush50");
	delVar("AV_IntCrush51");
	delVar("AV_IntCrush52");
	delVar("AV_IntCrush53");
	//--Command:DeletFlag(AV_IntCrush54,AV_IntCrush55,AV_IntCrush56,AV_IntCrush57,AV_IntCrush58,AV_IntCrush59,AV_IntCrushSec,AV_IntCrushSing,AV_IntCrushAct)
	delVar("AV_IntCrush54");
	delVar("AV_IntCrush55");
	delVar("AV_IntCrush56");
	delVar("AV_IntCrush57");
	delVar("AV_IntCrush58");
	delVar("AV_IntCrush59");
	delVar("AV_IntCrushSec");
	delVar("AV_IntCrushSing");
	delVar("AV_IntCrushAct");
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    if(!getVar("av_fetish_pain", false))
    {
        WeiFim();
        return;
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 80)
        {
            WeiFim();
            return;
        }
    }
    run("Custom" + java.io.File.separator + "CRCBTBalls" + java.io.File.separator + "*.js");
    WeiFim();
}
function WeiFim()
{
    return;
    
    pvLink27A();
}
function pvLink27A()
{
    CMessage("%ThatsEnough%");
    unlockImages();
    sleep(25);
	delVar("AV_Softcore");
	delVar("AV_FemDom");
	delVar("AV_Boobs");
	delVar("AV_Butt");
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
	delVar("AV_IntCrushSec");
	delVar("AV_IntCrushSing");
	delVar("AV_IntCrushAct");
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    CMessage("Should I " + random("let you ", "allow you to ", "tell you to ") + "%JerkOff% or " + random("leave you denied ", "deny you ", "not ") + "...");
    CMessage("I can\'t seem to " + random("make up my mind ", "decide ") + "%PetName%");
    CMessage("Both options " + random("are fun in their own way", "have merit", "have their advantages"));
    CMessage("When you %JerkOff%, your arousal grows and you become more " + random("submissive", "obedient"));
    CMessage("When you are denied, you become more and more frustrated");
    CMessage("Which is just so much fun to see %Smile%");
    //--Command:HasChastity
	if(getVar("hasChastity",false) ){
		CMessage("I could put you in chastity of course...");
		if (randomInteger(1, 100) <= 50)
		{
			chooses_chastity();
			return;
		}
	}else{
		//--Command:DoesNotHaveChastity
		CMessage("I would really enjoy seeing you squirm...");
		if (randomInteger(1, 100) <= 50)
		{
			chooses_denial_without_cage();
			return;
		}
	}
    CMessage("But then again...");
    CMessage("Maybe I should grow that arousal some more first");
    CMessage("So that when I do deny you access to my %Cock%");
    CMessage("You\'ll be begging me for mercy %Grin%");
    return;
    chooses_chastity();
}
function chooses_chastity()
{
    if(getVar("pvLink31GoSoft", false))
    {
        already_did_soft()
        return;
    }
    CMessage("Let your %Cock% go soft now, %PetName%");
    setTempVar("pvLink31GoSoft", true);
    CMessage("I don\'t care how you do it");
    CMessage("As long as you do it right now");
    sleep(8);
    CMessage("Slap it, pinch it, put cold water on it...");
    CMessage("That\'s probably the best way, right?");
    CMessage("Dunking your %Balls% in ice water, sounds fun %Laugh%");
    let answer0 = getInput("Is my %Cock% soft and ready for its cage?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        soft_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Do whatever it takes, %Name%");
    }
    CMessage("And don\'t tell me you can\'t do it");
    CMessage("I don\'t care");
    CMessage("If I want it, you <i>will</i> do it");
    CMessage("Do some summersaults, run up and down the stairs");
    CMessage("Whatever it takes, get it soft and limp");
    let answer1 = getInput("Ready?");
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("soft") || answer1.isLike("limp") || answer1.isLike("no")))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("Let me know when you are ready");
			//--Command:LoopAnswer
		}else {
			answer1 = getInput("Is your %Cock% soft?");
		}
    }
    if (answer1.isLike("yes", "ready", "done", "soft", "limp"))
    {
        CMessage("Okay");
    } 
    CMessage("I know it\'s not always easy to do, %SubName%");
    soft_now();
}
function soft_now()
{
    CMessage("It\'s kind of impressive that you could get it down at all...");
    CMessage("Now...");
    if (randomInteger(1, 100) <= 33)
    {
        put_the_cage_on();
        return;
    }
    CMessage("Get that erection back for me, %Name%");
    CMessage("I changed my mind %Smile%");
    CMessage("Make your %Cock% nice and hard again");
    CMessage("It shouldn\'t be too difficult");
    CMessage("After all, it was rock hard only a moment ago %EmoteWink%");
    return;
    put_the_cage_on();
}
function put_the_cage_on()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
    CMessage("Let\'s see how much frustration we can build up in those %Balls% %Grin%");
    return;
    chooses_denial_without_cage();
}
function chooses_denial_without_cage()
{
    CMessage("Put your hands behind your back, %Name%");
    CMessage("You won\'t be touching that %Cock% now");
    CMessage("But I can still tease it %Grin%");
    CMessage("With " + random("hot ", "sexy ") + "pictures");
    //--Command:ShowLocalImage
	showLocalTeasePicture();
    lockImages();
    CMessage("Pictures of things you want, but can\'t have");
    showTaggedImage(4, ["blowjob"]);
    CMessage("Of %Boobs% you\'d like to touch");
    showTaggedImage(4, ["boobs"]);
    CMessage("If only your hands weren\'t tied behind your back...");
    CMessage("You can barely feel it, but there is a rope around your wrists");
    CMessage("It\'s wound tight, keeping your hands in place behind your back");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ass"]);
    CMessage("If only you could reach out and touch it...");
    CMessage("But your hands are tied %Smile%");
    unlockImages();
    CMessage("You can look, but you can\'t touch");
	//todo jump video
    playVideo("Videos" + java.io.File.separator + "*.*");
    //--Command:JumpVideo
    let answer0 = getInput("Do you want to %JerkOff% again?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m glad to hear that, %Name%");
        if (randomInteger(1, 100) <= 50)
        {
            not_going_to_stroke();
            return;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s unfortunate, %Name%");
    }
    CMessage("Because you\'re going to do it anyway %Laugh%");
    CMessage("Your hands are no longer tied");
    return;
    not_going_to_stroke();
}
function not_going_to_stroke()
{
    CMessage("Because there is nothing I enjoy more");
    //--Command:ChastityOn
	setVar("chastityOn");
    CMessage("Than denying you the thing you crave most %Laugh%");
    return;
    already_did_soft();
}
function already_did_soft()
{
    CMessage("Maybe I should make your %Cock% go soft again...");
    CMessage("I wonder how many times you can do that in a row");
    CMessage("Go soft, get hard, go soft, get hard");
    CMessage("Does it become impossible to get it up again after a while?");
    CMessage("A cock is such a funny thing");
    CMessage("The way it has a life of its own");
    CMessage("You have to admit, %SubName%, it controls you");
    CMessage("If it wants something, you want it too");
    CMessage("Like right now, it wants you hand to grab it");
    return;
}