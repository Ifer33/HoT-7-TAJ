DMessage("AlternativeStroking: Beginnning_AV_Script");
main();
DMessage("AlternativeStroking: End_AV_Script");
function main()
{
	setEdgeMode("Goto", "EdgeStop()");
	s01();
	return;
	if(getVar("AlternativeStroking_s02",false) ){
		delVar("AlternativeStroking_s02");
		s02();
		return;
	}
	setEdgeMode("Goto", "EdgeStop()");
    switch(random("s01", "s02"))
    {
        case "s01":
        s01();
        break;
        case "s02":
        s02();
        break;
    }
    
	return;
}
function s01()
{
    if (randomInteger(1, 100) <= 75)
    {
        Alts01();
        return;
    }
	//try{
    CMessage("%StartStroking%");
    sleep(01);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(12);
    CMessage("%StrokeTaunts_1%");
    sleep(15);
    CMessage("%StrokeTaunts_1%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
    sleep(25);
    CMessage("%StrokeTaunts_1%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(30);
    CMessage("%StrokeTaunts_1%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(25);
    CMessage("%StrokeTaunts_1%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
    sleep(20);
	stopAudio();
    CMessage("%stopstroking%", 0);
    //setVar("edgingmode", "Normal");
	setEdgeMode();
    run("Modules" + java.io.File.separator + "*.js");
	/*}catch(err){
		DMessage("catch edge");
		return;
	}*/
    return;
    return;
    
    Alts01();
}

function Alts01()
{
    if (randomInteger(1, 100) <= 50)
    {
        Alts02();
        return;
    }
    CMessage("%StartStroking%");
    sleep(01);
    //--UNINTERPRETED LINE:@NullResponse @PlayAudio[tease\tgr8\Contact1 special test audio\*.mp3] @sleep(10)
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator  + "Contact1 special test audio" + java.io.File.separator + "*.mp3");
    CMessage("%StrokeTaunts_1%");
    sleep(15);
    CMessage("%StrokeTaunts_1%");
    sleep(20);
    CMessage("%StrokeTaunts_1%");
    sleep(30);
    CMessage("%StrokeTaunts_1%");
    sleep(25);
    CMessage("%StrokeTaunts_1%");
    sleep(30);
	stopAudio();
    CMessage("%stopstroking%", 0);
    //setVar("edgingmode", "Normal");
	setEdgeMode();
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Alts02();
}
function Alts02()
{
    CMessage("%StartStroking%");
    sleep(01);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "erotic" + java.io.File.separator + "*.mp3");
    sleep(10);
    CMessage("%StrokeTaunts_1%");
    sleep(15);
    CMessage("%StrokeTaunts_1%");
    sleep(20);
    CMessage("%StrokeTaunts_1%");
    sleep(25);
	stopAudio();
    CMessage("%stopstroking%", 0);
    //setVar("edgingmode", "Normal");
	setEdgeMode();
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    s02();
}

function s02()
{
	CrushStroke();
        return;
    CMessage(random("%PetName%", "%SubName%"));
    if(getVar("AV_MEM_Crush", false))
    {
        CrushStroke();
        return;
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        //setVar("edgingmode", "Normal");
		setEdgeMode();
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        //setVar("edgingmode", "Goto");
        //setVar("edginggoto", "EdgeStopGlitter")
		setEdgeMode("Goto", "EdgeStopGlitter()");
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        ContactStroke();
        return;
    }
    s01();
    return;
    
    EdgeStop();
}
function EdgeStop()
{
	/*try{
	stopAudio();//new
	throw Error("edge");
	}catch(err){
	throw Error("edge");
	}
	return true;*/
	//return eval(throw Error("edge"));
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Early edge.js");
    return;
    //return;
    //CrushStroke();
}
function CrushStroke()
{
    CMessage("Since " + random("you are so horny for ", "you are really into ") + "...");
    CMessage("Who was it?");
    sleep(01);
	var AV_PersonaSecret= getVar("AV_Persona13", "gdfhcvnvb");
	var AV_PersonaActress= getVar("AV_Persona01", "gdfhcvnvb");
	var AV_PersonaSinger= getVar("AV_Persona02", "gdfhcvnvb");
	var AV_PersonaPornStar= getVar("AV_Persona04", "gdfhcvnvb");
	var AV_Persona50= getVar("AV_Persona50", "gdfhcvnvb");
	var AV_Persona51= getVar("AV_Persona51", "gdfhcvnvb");
	var AV_Persona52= getVar("AV_Persona52", "gdfhcvnvb");
	var AV_Persona53= getVar("AV_Persona53", "gdfhcvnvb");
	var AV_Persona54= getVar("AV_Persona54", "gdfhcvnvb");
	var AV_Persona55= getVar("AV_Persona55", "gdfhcvnvb");
	var AV_Persona56= getVar("AV_Persona56", "gdfhcvnvb");
	var AV_Persona57= getVar("AV_Persona57", "gdfhcvnvb");
	var AV_Persona58= getVar("AV_Persona58", "gdfhcvnvb");
	var AV_Persona59= getVar("AV_Persona59", "gdfhcvnvb");
    let answer0 = getInput("The crush you talked about earlier?");
     while (!(answer0.isLike(AV_PersonaSecret) || answer0.isLike(AV_PersonaActress) || answer0.isLike(AV_PersonaSinger) || answer0.isLike(AV_PersonaPornStar) || answer0.isLike(AV_Persona50) || answer0.isLike(AV_Persona51) || answer0.isLike(AV_Persona52) || answer0.isLike(AV_Persona53) || answer0.isLike(AV_Persona54) || answer0.isLike(AV_Persona55) || answer0.isLike(AV_Persona56) || answer0.isLike(AV_Persona57) || answer0.isLike(AV_Persona58) || answer0.isLike(AV_Persona59) || answer0.isLike("remember") || answer0.isLike("forgot") || answer0.isLike("forget")))
    {
        answer0 = getInput("Who was it, %SubName%?");
    }
    if (answer0.isLike(AV_PersonaSecret))
    {
        CMessage("%Yes%, Your secret crush, " + getVar("AV_Persona13", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer13", true);
    }
    else if (answer0.isLike(AV_PersonaActress))
    {
        CMessage("%Yes%, Your Crush actress, " + getVar("AV_Persona01", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer01", true);
    }
    else if (answer0.isLike(AV_PersonaSinger))
    {
        CMessage("%Yes%, Your Crush singer, " + getVar("AV_Persona02", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer02", true);
    }
    else if (answer0.isLike(AV_PersonaPornStar))
    {
        CMessage("%Yes%, your favourite Pornstar " + getVar("AV_Persona04", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer04", true);
    }
    else if (answer0.isLike(AV_Persona50))
    {
        CMessage("%Yes%, " + getVar("AV_Persona50", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer50", true);
    }
    else if (answer0.isLike(AV_Persona51))
    {
        CMessage("%Yes%, " + getVar("AV_Persona51", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer51", true);
    }
    else if (answer0.isLike(AV_Persona52))
    {
        CMessage("%Yes%, " + getVar("AV_Persona52", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer52", true);
    }
    else if (answer0.isLike(AV_Persona53))
    {
        CMessage("%Yes%, " + getVar("AV_Persona53", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer53", true);
    }
    else if (answer0.isLike(AV_Persona54))
    {
        CMessage("%Yes%, " + getVar("AV_Persona54", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer54", true);
    }
    else if (answer0.isLike(AV_Persona55))
    {
        CMessage("%Yes%, " + getVar("AV_Persona55", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer55", true);
    }
    else if (answer0.isLike(AV_Persona56))
    {
        CMessage("%Yes%, " + getVar("AV_Persona56", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer56", true);
    }
    else if (answer0.isLike(AV_Persona57))
    {
        CMessage("%Yes%, " + getVar("AV_Persona57", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer57", true);
    }
    else if (answer0.isLike(AV_Persona58))
    {
        CMessage("%Yes%, " + getVar("AV_Persona58", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer58", true);
    }
    else if (answer0.isLike(AV_Persona59))
    {
        CMessage("%Yes%, " + getVar("AV_Persona59", ""));
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer59", true);
    }
    else if (answer0.isLike("remember", "forgot", "forget"))
    {
        CMessage("Oh, %Okay%");
        s01();
        return;
    }
    delVar("AV_MEM_Crush");
    CMessage("I will " + random("make ", "let ") + "you %Stroke% for her " + random("a little", "for a while"));
    CMessage("%StartStroking%");
    sleep(01);
    CMessage("%AV_CrushMemRnd%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(12);
    CMessage("%AV_CrushMemRnd%");
    sleep(15);
    CMessage("%AV_CrushMemRnd%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
    sleep(35);
    CMessage("%AV_CrushMemRnd%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(30);
    CMessage("%AV_CrushMemRnd%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(30);
    CMessage("%AV_CrushMemRnd%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
    sleep(35);
    CMessage("%AV_CrushMemRnd%");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
    sleep(randomInt(15, 25));
	stopAudio();
    CMessage("%stopstroking%", 0);
    //setVar("edgingmode", "Normal");
	setEdgeMode();
    delVar("AV_MEM_CrPer13");
    delVar("AV_MEM_CrPer01");
    delVar("AV_MEM_CrPer02");
    delVar("AV_MEM_CrPer04");
    delVar("AV_MEM_CrPer50");
    delVar("AV_MEM_CrPer51");
    delVar("AV_MEM_CrPer52");
    delVar("AV_MEM_CrPer53");
    delVar("AV_MEM_CrPer54");
    delVar("AV_MEM_CrPer55");
    delVar("AV_MEM_CrPer56");
    delVar("AV_MEM_CrPer57");
    delVar("AV_MEM_CrPer58");
    delVar("AV_MEM_CrPer59");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    ContactStroke();
}
function ContactStroke()
{
    if(getVar("AV_MEM_Contact1", false))
    {
        Gltter01();
        return;
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        Gltter02();
        return;
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        Gltter03();
        return;
    }
    Gltter01();
}
function Gltter01()
{
    CMessage("So... " + random("%domFriend1Name% made your %Cock% %Ache%", "you miss %domFriend1Name%", "you want %domFriend1Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(2);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 2);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("Hi %SubName%! How are you?", "Nice to see you %SubName%!", "Hello %SubName%!"), -1, 2);
    SMessage("Yes you are a horny little one aren\'t you?", -1, 2);
    SMessage("So...let\'s start", -1, 2);
    GlitterSession();
    return;
    
    Gltter02();
}
function Gltter02()
{
    CMessage("So... " + random("%domFriend2Name% made your %Cock% %Ache%", "you miss %domFriend2Name%", "you want %domFriend2Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(3);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 3);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("Hi ", "Hello ") + random("%SubName%", "%PetName%"), -1, 3);
    SMessage("I don\'t " + random("mind ", "have a problem with ") + "your " + random("lust", "desires"), -1, 3);
    SMessage("After all here you are " + random("naked in front of me", "totally at my mercy"), -1, 3);
    SMessage("So...let\'s start", -1, 3);
    GlitterSession();
    return;
    
    Gltter03();
}
function Gltter03()
{
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("Since you had being a bad boy %GeneralTime%");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I will call %domFriend3Name% to punish you");
    }
    CMessage("So... " + random("%domFriend3Name% made your %Cock% %Ache%", "you miss %domFriend3Name%", "you want %domFriend3Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(4);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 4);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("How is it going %PetName%?", "Are you ready for %Me%, worthless toy?", "Are you ready for %Me%, worthless %PetName%?", "I will tease and edge the hell out of you %PetName%!"), -1, 4);
    SMessage("So...let\'s start", -1, 4);
    GlitterSession();
    return;
    
    GlitterSession();
}
function GlitterSession()
{
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StartStroking%", -1, 2);
        sleep(01);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(12);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 2);
        sleep(15);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 2);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(25);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 2);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 2);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 2);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact1", false))
    {
		stopAudio();
        CMessage("%stopstroking%", 0);
        //setVar("edgingmode", "Normal");
		setEdgeMode();
        FinishGlitter();
        return;
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StartStroking%", -1, 3);
        sleep(01);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(12);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 3);
        sleep(15);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 3);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(25);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 3);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 3);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 3);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
		stopAudio();
        CMessage("%stopstroking%", 0);
        //setVar("edgingmode", "Normal");
		setEdgeMode();
        FinishGlitter();
        return;
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StartStroking%", -1, 4);
        sleep(01);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(12);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 4);
        sleep(15);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 4);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(25);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 4);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 4);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu1*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%StrokeTaunts_1%", -1, 4);
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "MetroAlt" + java.io.File.separator + "Masu2*.mp3");
        sleep(30);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
		stopAudio();
        CMessage("%stopstroking%", 0);
        //setVar("edgingmode", "Normal");
		setEdgeMode();
        FinishGlitter();
        return;
    }
    EdgeStopGlitter();
}
function EdgeStopGlitter()
{
	stopAudio();
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("%stopstroking%", -1, 2);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        SMessage("%stopstroking%", -1, 3);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        SMessage("%stopstroking%", -1, 4);
    }
	setEdgeMode();
    FinishGlitter();
}
function FinishGlitter()
{
    if(getVar("AV_MEM_Contact1", false))
    {
        SMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 2);
        removeContact(2);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        CMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 3);
        removeContact(3);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        CMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 4);
        removeContact(4);
    }
    delVar("AV_MEM_Contact1");
    delVar("AV_MEM_Contact2");
    delVar("AV_MEM_Contact3");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
}