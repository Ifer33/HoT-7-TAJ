DMessage("AV_Link: Start");
main();
DMessage("AV_Link: End");
function main()
{
    if (getVar("chastityOn", false))
    {
        run("Stroke" + java.io.File.separator + "Link" + java.io.File.separator + "Link_CHASTITY.js");
        if (getVar("chastityOn", false)){
			return;
		}
		//return;
    }
    setAFK(false);
    unlockImages();
    //TODO: Turn Slideshow off
	slideShowOff();
    delVar("AV_AskedSlow");
    delVar("av_intera_001");
    delVar("av_intera_002");
    delVar("av_intera_003");
    delVar("av_intera_004");
    delVar("av_intera_005");
    delVar("av_intera_006");
    delVar("av_intera_007");
    delVar("av_intera_008");
    delVar("av_intera_009");
    delVar("av_intera_010");
    delVar("av_intera_011");
    delVar("av_intera_012");
    delVar("av_intera_013");
    delVar("av_intera_014");
    delVar("av_intera_015");
    delVar("av_intera_016");
    delVar("av_intera_017");
    delVar("av_intera_018");
    delVar("av_intera_019");
    delVar("av_intera_020");
    delVar("av_MAT5a04");
    delVar("av_MAT5a03");
    delVar("av_MAT5a02");
    delVar("av_MAT5a01");
    delVar("av_MG6a03");
    delVar("av_MG6a02");
    delVar("av_MG6a01");
    delVar("av_GlitterPin");
    delVar("StopAllowed");
    delVar("AV_AskedEdge");
    delVar("AV_Begging");
    setVar("AV_QteModulos", getVar("AV_QteModulos", 0) + 1);
    if(getVar("av_CamDone", false))
    {
        SkipCam();
        return;
    }
    if (randomInteger(1, 100) <= 96)
    {
        SkipCam();
        return;
    }
    if(getVar("av_CamAlternate", false))
    {
        ResetCam();
        return;
    }
    setVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator +"WebCam.js");
    SkipCam();
    return;
    ResetCam();
}
function ResetCam()
{
    delVar("av_CamAlternate");
    setTempVar("av_CamDone", true);
    SkipCam();
	return;
}
function SkipCam()
{
    if (getVar("AV_LikedClothes", 0) <= 0)
    {
        AV_ChClothes();
        return;
    }
    if (getVar("AV_LikedClothes", 0) > 0)
    {
        AV_KeepClothes();
        return;
    }
	return;
    AV_ChClothes();
}
function AV_ChClothes()
{
    if (randomInteger(1, 100) <= 50)
    {
        NoClothes();
        return;
    }
    CMessage("%AV_ChangeClothes%");
    CMessage("%Brb%");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    //TODO: New domme slide show
    NoClothes();
    return;
    AV_KeepClothes();
}
function AV_KeepClothes()
{
    setVar("AV_LikedClothes", getVar("AV_LikedClothes", 0) - 1);
    NoClothes();
	return;
}
function NoClothes()
{
    if(getVar("AV_RuinHorny", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_RuinHMain.js");
    }
    if (randomInteger(1, 100) <= 65)
    {
        continue4();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_RNDCumChances.js");
    continue4();
	return;
}
function continue4()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
        delVar("AV_SubKnees");
        delVar("pvKneeling");
        sleep(20);
    }
    if(getVar("AV_Pins", false))
    {
        CMessage("You can remove all clothespins");
        delVar("AV_Pins");
        sleep(20);
    }
    if(getVar("av_GagOn", false))
    {
        CMessage("%BallGagOff%");
        delVar("av_GagOn");
        sleep(20);
    }
    if(getVar("AV_BallTied", false))
    {
        CMessage("You " + random("can ", "may ") + random("untie your %Balls% ", "remove the shoelace from your %Balls% ") + random("now", "%PetName%", "%SubName%"));
        sleep(10);
    }
    if(getVar("AV_BallTied", false))
    {
        delVar("AV_BallTied");
        delVar("pvBallsTied");
        continue5();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 15)
        {
            TieBall();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 10)
        {
            TieBall();
            return;
        }
    }
    continue45();
    return;
    TieBall();
}
function TieBall()
{
    CMessage("%TieYourBalls%");
    continue45();
	return;
}
function continue45()
{
    if(!getVar("AV_MantPositions", false))
    {
        continue5();
        return;
    }
    if (randomInteger(1, 100) <= 90)
    {
        continue5();
        return;
    }
    if(getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_GoToPosit.js");
    }
    continue6();
    return;
    continue5();
}
function continue5()
{
    if(getVar("AV_MemoryMain", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Memory.js");
    }
    if (randomInteger(1, 100) <= 50)
    {
        SkipIntMain();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Inter" + java.io.File.separator + "AV_Int_Main.js");
    SkipIntMain();
	return;
}
function SkipIntMain()
{
    if (randomInteger(1, 100) <= 99)
    {
        continue6();
        return;
    }
    if(!getVar("AV_DisconectOnce", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Disconnect.js");
    }
    continue6();
	return;
}
function continue6()
{
    if(!getVar("AV_TalkToday", false))
    {
        continue7a();
        return;
    }
    if(getVar("AV_Talk_Decided", false))
    {
        NotCallTalkAgain();
        return;
    }
    delVar("AV_Talk_Alternate");
    if(getVar("AV_TalkToday", false))
    {
        run("Custom" + java.io.File.separator + "AV_Talk.js");
    }
    NotCallTalkAgain();
	return;
}
function NotCallTalkAgain()
{
    if(getVar("AV_Talk_Alternate", false))
    {
        AV_Talk_Alt();
        return;
    }
    setVar("AV_Talk_Alternate", true);
    if(getVar("AV_Talk_Pegging", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Pegging.js");
    }
    if(getVar("AV_Talk_Humiliation", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Humiliation.js");
    }
    if(getVar("AV_Talk_Chastity", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_Chastity.js");
    }
    if(getVar("AV_Talk_Control", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Talks" + java.io.File.separator + "AV_ControlOrg.js");
    }
    continue7();
    return;
    AV_Talk_Alt();
}
function AV_Talk_Alt()
{
    delVar("AV_Talk_Alternate");
    continue7();
    return;
    continue7a();
}
function continue7a()
{
    if(getVar("AV_GlitterJoinOnce", false))
    {
        continue7();
        return;
    }
    if (randomInteger(1, 100) <= 95)
    {
        continue7();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlitterBored.js");
    continue7();
	return;
}
function continue7()
{
    if(getVar("pvAskedForChastity", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_ChastityTalk.js");
    }
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,seconds)]>[3600] @NullResponse @Goto(AV_DommeMistress)
	if(getTimePassed("startDate","seconds")>3600 ){
		AV_DommeMistress();
		return;
	}
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 95)
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        AV_Opcao2();
        return;
    }
    CMessage("What I want " + random("now ", "today ") + "is a slave, a toy that I can " + random("use ", "play with ") + "someone who will do ANYTHING I " + random("tell", "demand"));
    CMessage("I guess I have a sadistic streak after all.");
    Pergunta();
    return;
    AV_Opcao2();
}
function AV_Opcao2()
{
    CMessage("I think deep down you were hoping I would see your devotion and desire");
    CMessage("But I already had other plans. I want a slave.");
    CMessage("Someone who I could " + random("control ", "use for my pleasure ", "abuse ") + "and they\'d still come crawling back, desperate to worship me.");
    Pergunta();
	return;
}
function Pergunta()
{
    let answer0 = getInput("You need to make a decision do you want to commit to being my slave today?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ok, I am glad you have agreed");
		setTempVar("AV_Mistress_youslave");
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        AV_DommeMistress();
        return;
    }
    AV_DommeMistress();
	return;
}
function AV_DommeMistress()
{
    if (randomInteger(1, 100) <= 95)
    {
        AV_NoPosi();
        return;
    }
    if(!getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Positions.js");
    }
    FinalLink();
    return;
    AV_NoPosi();
}
function AV_NoPosi()
{
    if (getVar("AV_QteModulos", 0) > 5)
    {
        Trivia();
        return;
    }
    NoTrivia();
    return;
    Trivia();
}
function Trivia()
{
    if (randomInteger(1, 100) <= 90)
    {
        NoTrivia();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Trivia.js");
    NoTrivia();
	return;
}
function NoTrivia()
{
    if(getVar("av_doanalnight", false))
    {
        DoAnal();
        return;
    }
    if(!getVar("AV_LikeAnal", false))
    {
        Continue9();
        return;
    }
    if(getVar("av_NoAskAnal", false))
    {
        Continue9();
        return;
    }
	//--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,seconds)]>[3600] @NullResponse @Goto(Continue9)
	if(getTimePassed("startDate","seconds")>3600 ){
		Continue9();
		return;
	}
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 20)
        {
            AskAnal();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 10)
        {
            AskAnal();
            return;
        }
    }
    Continue9();
    return;
    AskAnal();
}
function AskAnal()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
    Continue9();
    return;
    DoAnal();
}
function DoAnal()
{
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 35)
        {
            CallAnal();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 25)
        {
            CallAnal();
            return;
        }
    }
    Continue9();
    return;
    CallAnal();
}
function CallAnal()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "DoAnalNight.js");
    CMessage("%RelaxAndBreathe% %PetName%");
    sleep(30);
    //CMessage("%StartStroking%");
    Stroking();
    return;
    Continue9();
}
function Continue9()
{
    if (randomInteger(1, 100) <= 85)
    {
        FinalLink();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        EdgeAV();
        return;
    }
    if(getVar("AV_BreakOne", false))
    {
        FinalLink();
        return;
    }
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    if(getVar("AV_MEM_Crush", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "AV_Crushes.js");
    }
    if(getVar("AV_MEM_Crush", false))
    {
        CrushBack();
        return;
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "AV_Glitters.js");
        ContactBack();
        return;
    }
    CMessage("%AV_Luxury%");
    setTempVar("AV_BreakOne", true);
    CMessage(random("Good thing ", "Thankfully ") + "you have some " + random("porn videos ", "videos ", "nice videos ") + "on your " + random("PC", "computer"));
    CMessage("Have fun");
    playVideo("Videos" + java.io.File.separator + "*.*");
    CMessage("%CensorContinue%");
	setTempVar("AV_EdgeAV_FromVideo");
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_EdgeAV.js");
    FinalLink();
    return;
    ContactBack();
}
function ContactBack()
{
    delVar("AV_MEM_Contact1");
    delVar("AV_MEM_Contact2");
    delVar("AV_MEM_Contact3");
    FinalLink();
    return;
    CrushBack();
}
function CrushBack()
{
    delVar("AV_MEM_Crush");
    FinalLink();
    return;
    EdgeAV();
}
function EdgeAV()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_EdgeAV.js");
    FinalLink();
    return;
    FinalLink();
}
function FinalLink()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_GlitterJoin,seconds)]>[1000] @NullResponse @CallReturn(Custom\AV_Scripts\AV_GlitterBye.txt)
	if(getTimePassed("AV_GlitterJoin","seconds")>1000 ){
		run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlitterBye.js");
	}
    if(getVar("AV_BMDONE", false))
    {
        NoMoreDenied();
        return;
    }
    if(getVar("AV_DBoredDONE", false))
    {
        NotBored();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_DommeBored.js");
    NotBored();
	return;
}
function NotBored()
{
    if (getMood() >= 70)
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_BadMood.js");
    }
    if(!getVar("AV_Denied", false))
    {
        NoMoreDenied();
        return;
    }
    if(getVar("AV_DenialOnce", false))
    {
        NoMoreDenied();
        return;
    }
    if (randomInteger(1, 100) <= 60)
    {
        NoMoreDenied();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Denied.js");
    return;
    NoMoreDenied();
}
function NoMoreDenied()
{
    delVar("AV_DenialOnce");
    if(!getVar("AV_AltMetro", false))
    {
        if (randomInteger(1, 100) <= 20)
        {
            AlternativeMetro();
            return;
        }
    }
    if (randomInteger(1, 100) <= 80)
    {
        FinalLinkForReal();
        return;
    }
    run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "AV_Trainning.js");
    //CMessage("%StartStroking%");
    Stroking();
    return;
    FinalLinkForReal();
}
function FinalLinkForReal()
{
    if(!getVar("AV_Count", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            Counting();
            return;
        }
    }
    if(!getVar("AV_GlitterTime", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            GlitterTime();
            return;
        }
    }
    if(!getVar("AV_ModuleAgain", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            ModuleAgain();
            return;
        }
    }
    run("Custom" + java.io.File.separator + "RamdomLinks" + java.io.File.separator + "*.js");
    BlankLink();
	return;
}
function BlankLink()
{
    CMessage("%RelaxAndBreathe% " + random("%PetName%", "%SubName%"));
    sleep(30);
    //CMessage("%StartStroking%");
    Stroking();
    return;
    AlternativeMetro();
}
function AlternativeMetro()
{
    CMessage("%RelaxAndBreathe% " + random("%PetName%", "%SubName%"));
    setTempVar("AV_AltMetro", true);
    sleep(30);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
    return;
    CMessage("%StartStroking%");
    Stroking();
    return;
    
    Counting();
}
function Counting()
{
    CMessage("%RelaxAndBreathe% " + random("%PetName%", "%SubName%"));
    setTempVar("AV_Count", true);
    sleep(30);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Counting.js");
    Stroking();
    return;
    
    GlitterTime();
}
function GlitterTime()
{
    CMessage("%RelaxAndBreathe% " + random("%PetName%", "%SubName%"));
    setTempVar("AV_GlitterTime", true);
    sleep(30);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlitterTime.js");
    Stroking();
    return;
    
    ModuleAgain();
}
function ModuleAgain()
{
    CMessage("%RelaxAndBreathe% " + random("%PetName%", "%SubName%"));
    setTempVar("AV_ModuleAgain", true);
    sleep(30);
    run("Modules" + java.io.File.separator + "*.js");
    Stroking();
    return;
}