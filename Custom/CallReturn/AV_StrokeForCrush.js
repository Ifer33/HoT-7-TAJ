DMessage("AV_StrokeForCrush: start");
edged=false;
main();
DMessage("AV_StrokeForCrush: end");
function main()
{
    CMessage(random("%PetName%", "%SubName%"));
    CMessage(random("I\'m on the mood ", "Now I want ") + "to " + random("watch ", "see ") + "you %Stroking% for one of your crushes");
    CMessage("So, you will %Stroke% to the beat till you edge");
    CMessage("Let\'s " + random("pick ", "choose ", "find ") + "one nice girl, shall we?");
    if (randomInteger(1, 100) <= 35)
    {
        AV_CrushSelect();
        return;
    }
    switch(random("AVI50", "AVI51", "AVI52", "AVI53", "AVI54", "AVI55", "AVI56", "AVI57", "AVI58", "AVI59"))
    {
        case "AVI50":
        AVI50();
        return;
        break;
        case "AVI51":
        AVI51();
        return;
        break;
        case "AVI52":
        AVI52();
        return;
        break;
        case "AVI53":
        AVI53();
        return;
        break;
        case "AVI54":
        AVI54();
        return;
        break;
        case "AVI55":
        AVI55();
        return;
        break;
        case "AVI56":
        AVI56();
        return;
        break;
        case "AVI57":
        AVI57();
        return;
        break;
        case "AVI58":
        AVI58();
        return;
        break;
        case "AVI59":
        AVI59();
        return;
        break;
    }
    AVI50();
}
function AVI50()
{
    if(getVar("AV_Know_50", false))
    {
        Sim50();
        return;
    }
    AV_CrushSelect();
    return;
    AVI51();
}
function AVI51()
{
    if(getVar("AV_Know_51", false))
    {
        Sim51();
        return;
    }
    AV_CrushSelect();
    return;
    AVI52();
}
function AVI52()
{
    if(getVar("AV_Know_52", false))
    {
        Sim52();
        return;
    }
    AV_CrushSelect();
    return;
    AVI53();
}
function AVI53()
{
    if(getVar("AV_Know_53", false))
    {
        Sim53();
        return;
    }
    AV_CrushSelect();
    return;
    AVI54();
}
function AVI54()
{
    if(getVar("AV_Know_54", false))
    {
        Sim54();
        return;
    }
    AV_CrushSelect();
    return;
    AVI55();
}
function AVI55()
{
    if(getVar("AV_Know_55", false))
    {
        Sim55();
        return;
    }
    AV_CrushSelect();
    return;
    AVI56();
}
function AVI56()
{
    if(getVar("AV_Know_56", false))
    {
        Sim56();
        return;
    }
    AV_CrushSelect();
    return;
    AVI57();
}
function AVI57()
{
    if(getVar("AV_Know_57", false))
    {
        Sim57();
        return;
    }
    AV_CrushSelect();
    return;
    AVI58();
}
function AVI58()
{
    if(getVar("AV_Know_58", false))
    {
        Sim58();
        return;
    }
    AV_CrushSelect();
    return;
    AVI59();
}
function AVI59()
{
    if(getVar("AV_Know_59", false))
    {
        Sim59();
        return;
    }
    AV_CrushSelect();
    return;
    AV_CrushSelect();
}
function AV_CrushSelect()
{
    setVar("AV_QualCrushes", 0);
    if(!getVar("AV_Know_12", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 1);
    }
    if(!getVar("AV_Know_00", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 10);
    }
    if(!getVar("AV_Know_01", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 100);
    }
    if(!getVar("AV_Know_03", false))
    {
        setVar("AV_QualCrushes", getVar("AV_QualCrushes", 0) + 1000);
    }
    if (getVar("AV_QualCrushes", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_QualCrushes", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Part1_1();
}
function Part1_1()
{
    switch(random("Sim12", "Sim00", "Sim01", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Sim00", "Sim01", "Sim03"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Sim12", "Sim01", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Sim12", "Sim00", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Sim12", "Sim00", "Sim01"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Sim01", "Sim03"))
    {
        case "Sim01":
        Sim01();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Sim00", "Sim03"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Sim03();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Sim12", "Sim03"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim03":
        Sim03();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Sim00", "Sim01"))
    {
        case "Sim00":
        Sim00();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Sim01();
    return;
    Part1_12();
}
function Part1_12()
{
    SemCrush();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Sim12", "Sim01"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim01":
        Sim01();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Sim12();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Sim12", "Sim00"))
    {
        case "Sim12":
        Sim12();
        return;
        break;
        case "Sim00":
        Sim00();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Sim00();
    return;
    SemCrush();
}
function SemCrush()
{
    CMessage("I should go deeper in your mind %SubName%");
    return;
    Sim12();
}
function Sim12()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona13", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto1()")
    Loop1();
	return;
}
function Loop1()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
	if(edged){
		edged=false;
		return;
	}else{
		Loop1();
	}
    return;
    EdgeForGoto1();
}
function EdgeForGoto1()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim00();
}
function Sim00()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona01", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto2()")
    Loop2();
	return;
}
function Loop2()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop2();
	}
    return;
    EdgeForGoto2();
}
function EdgeForGoto2()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim01();
}
function Sim01()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona02", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto3()")
    Loop3();
	return;
}
function Loop3()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop3();
	}
    return;
    EdgeForGoto3();
}
function EdgeForGoto3()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim03();
}
function Sim03()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona04", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto4()")
    Loop4();
	return;
}
function Loop4()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop4();
	}
    return;
    EdgeForGoto4();
}
function EdgeForGoto4()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim50();
}
function Sim50()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona50", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto5()")
    Loop5();
	return;
}
function Loop5()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop5();
	}
    return;
    EdgeForGoto5();
}
function EdgeForGoto5()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim51();
}
function Sim51()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona51", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto6()")
    Loop6();
	return;
}
function Loop6()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop6();
	}
    return;
    EdgeForGoto6();
}
function EdgeForGoto6()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim52();
}
function Sim52()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona52", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto7()")
    Loop7();
	return;
}
function Loop7()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop7();
	}
    return;
    EdgeForGoto7();
}
function EdgeForGoto7()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim53();
}
function Sim53()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona53", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto8()")
    Loop8();
	return;
}
function Loop8()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop8();
	}
    return;
    EdgeForGoto8();
}
function EdgeForGoto8()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim54();
}
function Sim54()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona54", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto9()")
    Loop9();
	return;
}
function Loop9()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop9();
	}
    return;
    EdgeForGoto9();
}
function EdgeForGoto9()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim55();
}
function Sim55()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona55", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto10()")
    Loop10();
	return;
}
function Loop10()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop10();
	}
    return;
    EdgeForGoto10();
}
function EdgeForGoto10()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim56();
}
function Sim56()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona56", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto11()")
    Loop11();
	return;
}
function Loop11()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop11();
	}
    return;
    EdgeForGoto11();
}
function EdgeForGoto11()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim57();
}
function Sim57()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona57", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto12()")
    Loop12();
	return;
}
function Loop12()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop12();
	}
    return;
    EdgeForGoto12();
}
function EdgeForGoto12()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim58();
}
function Sim58()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona58", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto13()")
    Loop13();
	return;
}
function Loop13()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop13();
	}
    return;
    EdgeForGoto13();
}
function EdgeForGoto13()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    Sim59();
}
function Sim59()
{
    CMessage("You will %Stroke% for " + getVar("AV_Persona59", ""));
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto14()")
    Loop14();
	return;
}
function Loop14()
{
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 12));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(8, 13));
    if(edged){
		edged=false;
		return;
	}else{
		Loop14();
	}
    return;
    EdgeForGoto14();
}
function EdgeForGoto14()
{
	edged=true;
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("edgingmode", "Normal");
    FinalCrush();
    return;
    FinalCrush();
}
function FinalCrush()
{
    CMessage(random("Well done", "Good", "Nice edge"));
    CMessage(random("I hope you enjoyed it", "I hope you remember what I did for you", "That must have been sooo good"));
    return;
}