DMessage("AV_Crushes: start");
var edged=false;
main();
DMessage("AV_Crushes: end");
function main()
{
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I would let you %Stroke% for your crush...");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("But you had being a bad boy %GeneralTime%");
        End2();
        return;
    }
    CMessage("Since " + random("you are so horny for ", "you are really into ") + "...");
    a07qplik();
}
function a07qplik()
{
    CMessage("Who was it?");
    sleep(01);
    let answer0 = getInput("The crush you want to stroke?");
    while (!(answer0.isLike("#AV_PersonaSecret") || answer0.isLike("#AV_PersonaActress") || answer0.isLike("#AV_PersonaSinger") || answer0.isLike("#AV_PersonaPornStar") || answer0.isLike("#AV_Persona50") || answer0.isLike("#AV_Persona51") || answer0.isLike("#AV_Persona52") || answer0.isLike("#AV_Persona53") || answer0.isLike("#AV_Persona54") || answer0.isLike("#AV_Persona55") || answer0.isLike("#AV_Persona56") || answer0.isLike("#AV_Persona57") || answer0.isLike("#AV_Persona58") || answer0.isLike("#AV_Persona59") || answer0.isLike("remember") || answer0.isLike("forget")))
    {
        answer0 = getInput("Who was %SubName%?");
    }
    if (answer0.isLike("#AV_PersonaSecret"))
    {
        CMessage("%Yes%, Your secret crush, " + getVar("AV_Persona13", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer13", true);
    }
    else if (answer0.isLike("#AV_PersonaActress"))
    {
        CMessage("%Yes%, Your Crush actress, " + getVar("AV_Persona01", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer01", true);
    }
    else if (answer0.isLike("#AV_PersonaSinger"))
    {
        CMessage("%Yes%, Your Crush singer, " + getVar("AV_Persona02", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer02", true);
    }
    else if (answer0.isLike("#AV_PersonaPornStar"))
    {
        CMessage("%Yes%, your favourite Pornstar " + getVar("AV_Persona04", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer04", true);
    }
    else if (answer0.isLike("#AV_Persona50"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona50", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer50", true);
    }
    else if (answer0.isLike("#AV_Persona51"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona51", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer51", true);
    }
    else if (answer0.isLike("#AV_Persona52"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona52", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer52", true);
    }
    else if (answer0.isLike("#AV_Persona53"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona53", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer53", true);
    }
    else if (answer0.isLike("#AV_Persona54"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona54", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer54", true);
    }
    else if (answer0.isLike("#AV_Persona55"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona55", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer55", true);
    }
    else if (answer0.isLike("#AV_Persona56"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona56", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer56", true);
    }
    else if (answer0.isLike("#AV_Persona57"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona57", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer57", true);
    }
    else if (answer0.isLike("#AV_Persona58"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona58", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer58", true);
    }
    else if (answer0.isLike("#AV_Persona59"))
    {
        CMessage("%Yes%, " + getVar("AV_Persona59", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
        setTempVar("AV_MEM_CrPer59", true);
    }
    else if (answer0.isLike("remember", "forgot"))
    {
        CMessage("Oh, %Okay%");
        End2();
        return;
    }
    CMessage("I will let you %Stroke% for her...");
    if(getVar("av_firsttimecrushesmemory", false))
    {
        av_firsttimecrushesmemory();
        return;
    }
    CMessage("Since I will be not here to supervise you...");
    CMessage("I will run the auto-run app in TeaseAI");
    setVar("av_firsttimecrushesmemory", true);
    CMessage("This will allow you to say you're on the edge and the app will stop");
    CMessage("till it make you stroke again :D");
    CMessage("No silly, you don\'t have that...");
    CMessage("This is only for the Domme\'s version...");
    setAFK(true);
    av_firsttimecrushesmemory();
}
function av_firsttimecrushesmemory()
{
    CMessage("So...let\'s start");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "bdr583()");
	edged=false;
    CMessage("Brb");
    CMessage("Start Stroking");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(01);
    CMessage("%AV_CrushMemRnd%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(02);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(02);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(02);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(02);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(02);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		bdr583();
	}
	return;
}
function bdr583()
{
	stopAudio();
    CMessage("%stopstroking%", 0);
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    setVar("edgingmode", "Normal");
    CMessage("BREAK TIME");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    sleep(20);
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
    setVar("AV_EdgeCruVarTarget", getVar("#Random3, 7", 0));
    CMessage("STARTING EDGING SEQUENCE...");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    setVar("AV_EdgeCruVar", 0);
    star5567k();
}
function star5567k()
{
    CMessage("%AV_CrushMemRnd%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    setVar("AV_EdgeCruVar", getVar("AV_EdgeCruVar", 0) + 1);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "ds57777()");
	edged=false;
    a222fgb();
}
function a222fgb()
{
	if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
		a222fgb();
	}
    return;
    ds57777();
}
function ds57777()
{
	stopAudio();
    CMessage("%stopstroking%", 0);
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    sleep(randomInt(10, 20));
    if (getVar("AV_EdgeCruVar", 0) < getVar("AV_EdgeCruVarTarget", 0))
    {
        star5567k();
        return;
    }
    if (getVar("AV_EdgeCruVar", 0) >= getVar("AV_EdgeCruVarTarget", 0))
    {
        End();
        return;
    }
    a02();
}
function a02()
{
    SMessage("STARTING OVERDRIVE SEQUENCE...");
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "we4tgt5()");
	edged=false;
    CMessage("%AV_CrushMemRnd%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(05);
	if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		sleep(randomInt(10, 20));
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		sleep(randomInt(10, 20));
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(03);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
	} if(!edged){
		CMessage("%AV_CrushMemRnd%");
		sleep(05);
		we4tgt5();
	}
	return;
}
function we4tgt5()
{
	stopAudio();
    CMessage("%stopstroking%", 0);
    getLocalTeasePicture("Images" + java.io.File.separator + "System" + java.io.File.separator + "Black.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    End();
}
function End()
{
    CMessage("I am back");
    setAFK(false);
    setVar("edgingmode", "Normal");
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
    End2();
}
function End2()
{
    return;
}