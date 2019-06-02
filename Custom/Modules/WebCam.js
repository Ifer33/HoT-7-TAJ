DMessage("WebCam: start");
main();
DMessage("WebCam: end");
function main()
{
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
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    setTempVar("av_CamDone", true);
    if(getVar("AV_CamNotFirst", false))
    {
        AV_CamNotFirst();
        return;
    }
    CMessage("Hey %SubName%, I have some good news...");
    CMessage("You know about camgirls, right?");
    CMessage("So, I have some friends there...and one word leads to another");
    CMessage("I told them about you %EmoteSmile%");
    CMessage("although they are not really Dommes, of course all girls love to tease");
    CMessage("And they were very interested to meet you.");
    setVar("AV_CamNotFirst", true);
    CMessage("What a great chance to make you ache more, and have some fun myself?");
    setAFK(true);
    CMessage("So get ready to meet the first one");
    Cam01();
    return;
    AV_CamNotFirst();
}
function AV_CamNotFirst()
{
    CMessage(random("%PetName%", "%SubName%"));
    setAFK(true);
    CMessage(random("Time to another ", "get ready ", "are you ready ") + "to " + random("another ", "one more ", "more ") + random("webcam show", "camgirls"));
    if(!getVar("AV_Cam02", false))
    {
        Cam02();
        return;
    }
    if(!getVar("AV_Cam03", false))
    {
        Cam03();
        return;
    }
    if(!getVar("AV_Cam04", false))
    {
        Cam04();
        return;
    }
    if(!getVar("AV_Cam05", false))
    {
        Cam05();
        return;
    }
    if(!getVar("AV_Cam06", false))
    {
        Cam06();
        return;
    }
    if(!getVar("AV_Cam07", false))
    {
        Cam07();
        return;
    }
    if(!getVar("AV_Cam08", false))
    {
        Cam08();
        return;
    }
    if(!getVar("AV_Cam09", false))
    {
        Cam09();
        return;
    }
    if(!getVar("AV_Cam10", false))
    {
        Cam10();
        return;
    }
    if(!getVar("AV_Cam11", false))
    {
        Cam11();
        return;
    }
    if(!getVar("AV_Cam12", false))
    {
        Cam12();
        return;
    }
    if(!getVar("AV_Cam13", false))
    {
        Cam13();
        return;
    }
    if(!getVar("AV_Cam14", false))
    {
        Cam14();
        return;
    }
    if(!getVar("AV_Cam15", false))
    {
        Cam15();
        return;
    }
    if(!getVar("AV_Cam16", false))
    {
        Cam16();
        return;
    }
    NoMoreCams();
    return;
    Cam01();
}
function Cam01()
{
    CMessage("The first one, it\'s a close friend of mine...Emma");
    setVar("av_CamAlternate", true);
    CMessage("You will love it...");
    setVar("AV_Cam01", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow06.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam02();
}
function Cam02()
{
    CMessage("%GeneralTime% you will meet Kim");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam02", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow01.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam03();
}
function Cam03()
{
    CMessage("%GeneralTime% you will meet Kate");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam03", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow05.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam04();
}
function Cam04()
{
    CMessage("%GeneralTime% we will have another session with Emma");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam04", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow07.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam05();
}
function Cam05()
{
    CMessage("%GeneralTime% you will meet Ruby");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam05", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow04.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam06();
}
function Cam06()
{
    CMessage("Emma is back %GeneralTime%");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam06", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow08.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam07();
}
function Cam07()
{
    CMessage("%GeneralTime% we will meet Kim again");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam07", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow02.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam08();
}
function Cam08()
{
    CMessage("%GeneralTime% you will meet Mila");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam08", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow12.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam09();
}
function Cam09()
{
    CMessage("%GeneralTime% we will meet Kate again");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam09", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow14.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam10();
}
function Cam10()
{
    CMessage("%GeneralTime% we will meet Emma again");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam10", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow09.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam11();
}
function Cam11()
{
    CMessage("%GeneralTime% we will meet Megan");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam11", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow13.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam12();
}
function Cam12()
{
    CMessage("%GeneralTime% we will have another session with Emma");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam12", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow10.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam13();
}
function Cam13()
{
    CMessage("%GeneralTime% It\'s a special day...");
    setVar("av_CamAlternate", true);
    CMessage("But you need to wait here...");
    setVar("AV_Cam13", true);
    CMessage("I will call you in a minute");
    sleep(20);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow16.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam14();
}
function Cam14()
{
    CMessage("%GeneralTime% we will meet Kim again");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam14", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow03.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam15();
}
function Cam15()
{
    CMessage("%GeneralTime% we will have another session with Emma");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam15", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow11.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    Cam16();
}
function Cam16()
{
    CMessage("%GeneralTime% we will have another session with Kate");
    setVar("av_CamAlternate", true);
    CMessage("Get ready");
    setVar("AV_Cam16", true);
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "cam" + java.io.File.separator + "webcamshow15.mp4",true);
    CMessage("%ThatsEnough%");
    setAFK(false);
    return;
    NoMoreCams();
}
function NoMoreCams()
{
    CMessage("Too bad, no girls available right now...");
    setAFK(false);
    CMessage("Let\'s try something else");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
}