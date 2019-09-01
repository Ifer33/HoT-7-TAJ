DMessage("AV_ModFetish3: start");
main();
DMessage("AV_ModFetish3: end");
function main()
{
    if(getVar("AV_ModFetish3_NotFirstTime", false))
    {
        AV_ModFetish3_NotFirstTime();
        return;
    }
    setVar("AV_ModFetish3", 0);
    setVar("AV_ModFetish3_NotFirstTime", true);
    AV_ModFetish3_NotFirstTime();
}
function AV_ModFetish3_NotFirstTime()
{
    if (getVar("AV_ModFetish3", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModFetish3", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModFetish3", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModFetish3", getVar("AV_ModFetish3", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModFetish3", getVar("AV_ModFetish3", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModFetish3", getVar("AV_ModFetish3", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModFetish3", getVar("AV_ModFetish3", 0) + 1000);
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
    setVar("AV_ModFetish3", 0);
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
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Audio.js");
    return;
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
    if(getVar("av_fetish_bondage", false))
    {
        av_fetish_bondage();
        return;
    }
    CMessage("%PetName%");
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some videos on your computer");
    CMessage("Stroke to the beat %Grin%");
    CMessage("Have fun");
    showCategoryVideo(randomCategory(),true);
    CMessage("%CensorContinue%");
    return;
    av_fetish_bondage();
}
function av_fetish_bondage()
{
    if (randomInteger(1, 100) <= 50)
    {
        Bondage2();
        return;
    }
    if(getVar("AV_Pins", false))
    {
        AV_Pins();
        return;
    }
    Iniciar13();
    return;
    AV_Pins();
}
function AV_Pins()
{
    CMessage("You can remove all clothespins");
    delVar("AV_Pins");
    Iniciar13();
}
function Iniciar13()
{
    CMessage("%PetName%");
    if(!getVar("AV_PinDone", false))
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_GetPins");
    }
    CMessage("Tie up those balls and put those clothespins on your nipples!");
    sleep(30);
    CMessage("You will feel pain today %Slave%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Keep like this until the end of our session");
        NoRemove();
        return;
    }
    CMessage("Now massage those balls, enjoy how nice it feels!");
    sleep(15);
    CMessage("You can remove the clothespins, but keep your %Balls% tied until the end of our session.");
    return;
    NoRemove();
}
function NoRemove()
{
    CMessage("Now massage those balls, enjoy how nice it feels!");
    return;
    Bondage2();
}
function Bondage2()
{
    CMessage("I think that cock could use a little bondage.");
    CMessage("Go get several pieces of shoe lace or rope (or whatever substitute you have).");
    let answer0 = getInput("Let me know when you are ready");
    while (!(answer0.isLike("ready") || answer0.isLike("done")))
    {
        answer0 = getInput("Ready?");
    }
    if (answer0.isLike("ready", "done"))
    {
        CMessage("Good...");
    }
    CMessage("Take the first piece and tie it firmly around your balls.");
    CMessage("Just so that your balls are now seperated from your little penis.");
    CMessage("There should be at least a small amount of excess rope.");
    CMessage("%StartStrokingNS% to the beat %AudioStroke%");
    CMessage("Take the second rope and tie your ankles together.");
    CMessage("Tie them as tightly as possible.");
    CMessage("Just to clarify slave.");
    tied();
}
function tied()
{
    let answer0 = getInput("Your balls are now tied. Your ankles are now tied?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmm, good");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%DoAsISay%");
        tied();
        return;
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Take a 3rd piece of rope/shoelace and tie this to the excees rope around your balls");
    CMessage("and then tie the other end around the rope which is keeping your ankles together.");
    CMessage("This should be tight with little slack slave!");
    CMessage("You will keep there until the end of our session");
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
    CMessage("I want to test your attention %SubName%");
    CMessage("Keep track of the numbers you see in the screen...");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    setVar("AV_AtentGame", 0);
    //--Command:TnASlowSlides
	setSlideShow(["BOOBS","BUTTS"]);
	slideShowOn();
    sleep(15);
	slideShowOff();
    //--Command:StopTnA
    setVar("AV_GameGo", 0);
    round1a();
}
function round1a()
{
    switch(random("At01", "At02", "At03", "At04", "At05", "At06", "At07", "At08", "At09"))
    {
        case "At01":
        At01();
        return;
        break;
        case "At02":
        At02();
        return;
        break;
        case "At03":
        At03();
        return;
        break;
        case "At04":
        At04();
        return;
        break;
        case "At05":
        At05();
        return;
        break;
        case "At06":
        At06();
        return;
        break;
        case "At07":
        At07();
        return;
        break;
        case "At08":
        At08();
        return;
        break;
        case "At09":
        At09();
        return;
        break;
    }
    round1aVolta();
}
function round1aVolta()
{
    CMessage("%Stroke% for " + getVar("AV_Persona13", ""));
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round1b();
        return;
    }
    round1c();
    return;
    round1b();
}
function round1b()
{
    CMessage("%KeepStroking%");
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round1d();
        return;
    }
    round1a();
    return;
    round1c();
}
function round1c()
{
    CMessage("%KeepStroking%");
    showTaggedImage(4, ["softcore"]);
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round1b();
        return;
    }
    round1d();
    return;
    round1d();
}
function round1d()
{
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "*.mp4",true);
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round1a();
        return;
    }
    round1c();
    return;
    GameFinished();
}
function GameFinished()
{
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("So, what is the sum of the numbers you saw?");
    setVar("AV_AtentResp", createInput().getAnswer());
    if (getVar("AV_AtentResp", 0) == getVar("AV_AtentGame", 0))
    {
        right();
        return;
    }
    CMessage("Wrong %PetName%, the correct its " + getVar("AV_AtentGame", ""));
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Here your punishment");
        //run("CBT" + java.io.File.separator + "*.js");
		cbt();
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("%KneelForMe% till we continue");
        sleep(20);
    }
    final1();
    return;
    right();
}
function right()
{
    CMessage("%HolyShit%, good work %PetName%");
    CMessage("Here your reward, %Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
	CMessage("%LetTheEdgeFade%");
    final1();
    return;
    final1();
}
function final1()
{
    CMessage("%RelaxAndBreathe%");
    sleep(10);
    CMessage("%ICanKeepThisUp%");
    Parte2();
    return;
    At01();
}
function At01()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "1.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 1);
    round1aVolta();
    return;
    At02();
}
function At02()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "2.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 2);
    round1aVolta();
    return;
    At03();
}
function At03()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "3.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 3);
    round1aVolta();
    return;
    At04();
}
function At04()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "4.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 4);
    round1aVolta();
    return;
    At05();
}
function At05()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "5.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 5);
    round1aVolta();
    return;
    At06();
}
function At06()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "6.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 6);
    round1aVolta();
    return;
    At07();
}
function At07()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "7.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 7);
    round1aVolta();
    return;
    At08();
}
function At08()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "8.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 8);
    round1aVolta();
    return;
    At09();
}
function At09()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "9.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 9);
    round1aVolta();
    return;
    Parte2();
}
function Parte2()
{
    CMessage("%StartStrokingNS%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    setSlideShow(["BOOBS","BUTTS"]);
	slideShowOn();
    sleep(15);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3",true);
    slideShowOff();
    setVar("AV_GameGo", 0);
    setVar("AV_AtentGame", 0);
    round2a();
}
function round2a()
{
    switch(random("a2At01", "a2At02", "a2At03", "a2At04", "a2At05", "a2At06", "a2At07", "a2At08", "a2At09"))
    {
        case "a2At01":
        a2At01();
        return;
        break;
        case "a2At02":
        a2At02();
        return;
        break;
        case "a2At03":
        a2At03();
        return;
        break;
        case "a2At04":
        a2At04();
        return;
        break;
        case "a2At05":
        a2At05();
        return;
        break;
        case "a2At06":
        a2At06();
        return;
        break;
        case "a2At07":
        a2At07();
        return;
        break;
        case "a2At08":
        a2At08();
        return;
        break;
        case "a2At09":
        a2At09();
        return;
        break;
    }
    round2aVolta();
}
function round2aVolta()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3",true);
    //--Command:ShowLezdomImage
	showCategoryImage("LEZDOM");
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished2();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round2b();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b110.mp3",true);
    round2c();
    return;
    round2b();
}
function round2b()
{
    CMessage("%KeepStroking%");
    //showTaggedImage(4, ["blowjob"]);
	showCategoryImage("BLOWJOB");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished2();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    if (randomInteger(1, 100) <= 50)
    {
        round2d();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    round2a();
    return;
    round2c();
}
function round2c()
{
    CMessage("%Stroke% for " + getVar("AV_Persona01", ""));
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3",true);
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished2();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3",true);
    if (randomInteger(1, 100) <= 50)
    {
        round2b();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b180.mp3",true);
    round2d();
    return;
    round2d();
}
function round2d()
{
    CMessage("%KeepStroking%");
    getTeasePicture(3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished2();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    if (randomInteger(1, 100) <= 50)
    {
        round2a();
        return;
    }
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b120.mp3",true);
    round2c();
    return;
    GameFinished2();
}
function GameFinished2()
{
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("So, what is the sum of the numbers you saw?");
    setVar("AV_AtentResp2", createInput().getAnswer());
    if (getVar("AV_AtentResp2", 0) == getVar("AV_AtentGame", 0))
    {
        right2();
        return;
    }
    CMessage("Wrong %PetName%, the correct its " + getVar("AV_AtentGame", ""));
    CMessage("Here your punishment");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_TaskPins.js");
	customTask("AV_TaskPins");
    setTempVar("AV_Pins", true);
    final2();
    return;
    right2();
}
function right2()
{
    CMessage("%HolyShit%, good work %PetName%");
    CMessage("Here your reward, %Edge%");
    startEdging();
	CMessage("%stopstroking%", 0);
    final2();
    return;
    final2();
}
function final2()
{
    CMessage("%RelaxAndBreathe%");
    sleep(10);
    CMessage("%ICanKeepThisUp%");
    Parte3();
    return;
    a2At01();
}
function a2At01()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "1.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 1);
    round2aVolta();
    return;
    a2At02();
}
function a2At02()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "2.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 2);
    round2aVolta();
    return;
    a2At03();
}
function a2At03()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "3.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 3);
    round2aVolta();
    return;
    a2At04();
}
function a2At04()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "4.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 4);
    round2aVolta();
    return;
    a2At05();
}
function a2At05()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "5.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 5);
    round2aVolta();
    return;
    a2At06();
}
function a2At06()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "6.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 6);
    round2aVolta();
    return;
    a2At07();
}
function a2At07()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "7.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 7);
    round2aVolta();
    return;
    a2At08();
}
function a2At08()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "8.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 8);
    round2aVolta();
    return;
    a2At09();
}
function a2At09()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "9.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 9);
    round2aVolta();
    return;
    Parte3();
}
function Parte3()
{
    CMessage("%StartStroking%");
    //--Command:TnASlowSlides
	setSlideShow(["BOOBS","BUTTS"]);
	slideShowOn();
    sleep(15);
    //--Command:StopTnA
	slideShowOff();
    setVar("AV_GameGo", 0);
    setVar("AV_AtentGame", 0);
    round3a();
}
function round3a()
{
    switch(random("a3At01", "a3At02", "a3At03", "a3At04", "a3At05", "a3At06", "a3At07", "a3At08", "a3At09"))
    {
        case "a3At01":
        a3At01();
        return;
        break;
        case "a3At02":
        a3At02();
        return;
        break;
        case "a3At03":
        a3At03();
        return;
        break;
        case "a3At04":
        a3At04();
        return;
        break;
        case "a3At05":
        a3At05();
        return;
        break;
        case "a3At06":
        a3At06();
        return;
        break;
        case "a3At07":
        a3At07();
        return;
        break;
        case "a3At08":
        a3At08();
        return;
        break;
        case "a3At09":
        a3At09();
        return;
        break;
    }
    round3aVolta();
}
function round3aVolta()
{
    edge();
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished3();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round3b();
        return;
    }
    round3c();
    return;
    round3b();
}
function round3b()
{
    //CMessage("%Edge%");
    //startEdging();
	edge();
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished3();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round3d();
        return;
    }
    round3a();
    return;
    round3c();
}
function round3c()
{
    CMessage("%EdgeNoun% for " + getVar("AV_Persona01", ""));
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished3();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round3b();
        return;
    }
    round3d();
    return;
    round3d();
}
function round3d()
{
    CMessage("%EdgeNoun%");
    getTeasePicture(3);
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    setVar("AV_GameGo", getVar("AV_GameGo", 0) + 1);
    if (getVar("AV_GameGo", 0) > 5)
    {
        GameFinished3();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        round3a();
        return;
    }
    round3c();
    return;
    GameFinished3();
}
function GameFinished3()
{
    CMessage("So, what is the sum of the numbers you saw?");
    setVar("AV_AtentResp3", createInput().getAnswer());
    if (getVar("AV_AtentResp3", 0) == getVar("AV_AtentGame", 0))
    {
        right3();
        return;
    }
    CMessage("Wrong %PetName%, the correct its " + getVar("AV_AtentGame", ""));
    CMessage("Here your punishment");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_TaskPins.js");
	customTask("AV_TaskPins");
    final8();
    return;
    right3();
}
function right3()
{
    CMessage("%HolyShit%, good work %PetName%");
    if(getVar("AV_Pins", false))
    {
        CMessage("You can remove all the clothepins");
        delVar("AV_Pins");
    }
    if(getVar("AV_SubKnees", false))
    {
        CMessage("Alright you can get back on your chair");
        delVar("AV_SubKnees");
    }
    CMessage("Here your reward %Lol%, %Edge%");
    startEdging();
    final3();
    return;
    final8();
}
function final8()
{
    CMessage("%RelaxAndBreathe%");
    Parte3();
    return;
    a3At01();
}
function a3At01()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "1.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 1);
    round3aVolta();
    return;
    a3At02();
}
function a3At02()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "2.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 2);
    round3aVolta();
    return;
    a3At03();
}
function a3At03()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "3.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 3);
    round3aVolta();
    return;
    a3At04();
}
function a3At04()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "4.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 4);
    round3aVolta();
    return;
    a3At05();
}
function a3At05()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "5.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 5);
    round3aVolta();
    return;
    a3At06();
}
function a3At06()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "6.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 6);
    round3aVolta();
    return;
    a3At07();
}
function a3At07()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "7.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 7);
    round3aVolta();
    return;
    a3At08();
}
function a3At08()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "8.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 8);
    round3aVolta();
    return;
    a3At09();
}
function a3At09()
{
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Games" + java.io.File.separator + "Numbers" + java.io.File.separator + "9.jpg");
    sleep(01);
    //--Command:ShowGeneralImage
	showCategoryImage("GENERAL");
    setVar("AV_AtentGame", getVar("AV_AtentGame", 0) + 9);
    round3aVolta();
    return;
    final3();
}
function final3()
{
    CMessage("%ThatsEnough%");
    delVar("AV_AtentGame");
    delVar("AV_AtentResp");
    delVar("AV_AtentResp2");
    delVar("AV_AtentResp3");
    delVar("AV_GameGo");
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
    if(getVar("av_fetish_pain", false))
    {
        av_fetish_pain();
        return;
    }
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some videos on your computer");
    CMessage("Stroke to the beat %Grin%");
	setStrokingNoTaunt();
    CMessage("Have fun");
    showCategoryVideo(randomCategory(),true);
    CMessage("%CensorContinue%");
    return;
    av_fetish_pain();
}
function av_fetish_pain()
{
    CMessage("%PetName%,");
    if(!getVar("AV_PinDone", false))
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_GetPins");
    }
    CMessage("tie your balls up nice and tight now!");
    sleep(30);
    CMessage("Put a rubber band on your cock, loose.");
    sleep(15);
    CMessage("Stroke your cock 50 times fast!");
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done") || answer0.isLike("get") || answer0.isLike("ready")))
    {
        answer0 = getInput("Are you done %PetName%?");
    }
    if (answer0.isLike("done", "get", "ready"))
    {
        CMessage("Good...");
    }
    CMessage("Pull the rubber band up to the sweet spot");
    CMessage("and stretch it way out and let it go");
    let answer1 = getInput("and smack into the sweet spot 10 times!");
    while (!(answer1.isLike("done") || answer1.isLike("get") || answer1.isLike("ready")))
    {
        answer1 = getInput("Are you done %PetName%?");
    }
    if (answer1.isLike("done", "get", "ready"))
    {
        CMessage("Good...");
    }
    CMessage("Slap your tied balls 25 times with the ruler");
    let answer2 = getInput("I want a loud \"SLAP\" sound with each strike!");
    while (!(answer2.isLike("done") || answer2.isLike("get") || answer2.isLike("ready")))
    {
        answer2 = getInput("Are you done %PetName%?");
    }
    if (answer2.isLike("done", "get", "ready"))
    {
        CMessage("Good...");
    }
    CMessage("Take off the clothespins and untie your balls!");
    CMessage("Now massage those balls, enjoy how nice it feels!");
    return;
}