DMessage("AV_Controle: start");
edged=false;
main();
DMessage("AV_Controle: end");
function main()
{
    if (isStrokingAll())
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
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("%RelaxAndBreathe% %PetName%");
    if(getVar("AV_RuinHorny", false))
    {
        AV_RuinHorny();
        return;
    }
    NoRuin();
    return;
    AV_RuinHorny();
}
function AV_RuinHorny()
{
    if (getVar("AV_RuinHorny", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 110)
    {
        Part1_9();
        return;
    }
    Part1_1();
}
function Part1_1()
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
    Part1_2();
}
function Part1_2()
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
    Part1_3();
}
function Part1_3()
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
    Part1_4();
}
function Part1_4()
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
    Part1_6();
}
function Part1_6()
{
    Mod3();
    return;
    Part1_7();
}
function Part1_7()
{
    Mod2();
    return;
    Part1_9();
}
function Part1_9()
{
    Mod1();
    return;
    Part1_12();
}
function Part1_12()
{
    NoRuin();
    return;
    Mod1();
}
function Mod1()
{
    setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny1.js")
    NoRuin();
    return;
    Mod2();
}
function Mod2()
{
    setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny2.js")
    NoRuin();
    return;
    Mod3();
}
function Mod3()
{
    setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny3.js")
    NoRuin();
    return;
    NoRuin();
}
function NoRuin()
{
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhappy();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomangry();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomhappy();
}
function Ramdomhappy()
{
    setVar("AV_DommeBom", getVar("AV_DommeBom", 0) + 1);
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomangry();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomangry();
}
function Ramdomangry()
{
    setVar("AV_DommeRuim", getVar("AV_DommeRuim", 0) + 1);
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomhorny();
}
function Ramdomhorny()
{
    setVar("AV_DommeHorny", getVar("AV_DommeHorny", 0) + 1);
    NoRamdom();
	return;
}
function NoRamdom()
{
    if (getVar("AV_DommeBom", 0) > 10)
    {
        happy2();
        return;
    }
    if (getVar("AV_DommeBom", 0) > 3)
    {
        happy1();
        return;
    }
    continue1();
    return;
    happy1();
}
function happy1()
{
    setTempVar("AV_DommeHappy1", true);
    continue1();
    return;
    happy2();
}
function happy2()
{
    setTempVar("AV_DommeHappy2", true);
    continue1();
    return;
    continue1();
}
function continue1()
{
    if (getVar("AV_DommeRuim", 0) > 10)
    {
        angry2();
        return;
    }
    if (getVar("AV_DommeRuim", 0) > 3)
    {
        angry1();
        return;
    }
    continue2();
    return;
    angry1();
}
function angry1()
{
    setTempVar("AV_DommeAngry1", true);
    continue2();
    return;
    angry2();
}
function angry2()
{
    setTempVar("AV_DommeAngry2", true);
    continue2();
    return;
    continue2();
}
function continue2()
{
    if (getVar("AV_DommeHorny", 0) > 10)
    {
        horny2();
        return;
    }
    if (getVar("AV_DommeHorny", 0) > 3)
    {
        horny1();
        return;
    }
    continue3();
    return;
    horny1();
}
function horny1()
{
    setTempVar("AV_DommeHornie1", true);
    continue3();
    return;
    horny2();
}
function horny2()
{
    setTempVar("AV_DommeHornie2", true);
    continue3();
    return;
    continue3();
}
function continue3()
{
    if(getVar("AV_DecOrg", false))
    {
        SMood2();
        return;
    }
    setVar("AV_DecOrg", true);
    if (getMood() >= 70)
    {
        increaseOrgasmChance(-8);
    }
    SMood2();
	return;
}
function SMood2()
{
    if(getVar("AV_IncRuin", false))
    {
        SMood3();
        return;
    }
    setVar("AV_IncRuin", true);
    if (getMood() >= 70)
    {
        increaseRuinChance(8);
    }
    SMood3();
	return;
}
function SMood3()
{
    if(getVar("AV_IncOrg", false))
    {
        SMood4();
        return;
    }
    setVar("AV_IncOrg", true);
    if (getMood() <= 30)
    {
        increaseOrgasmChance(8);
    }
    SMood4();
	return;
}
function SMood4()
{
    if(getVar("AV_DecRuin", false))
    {
        continue3b();
        return;
    }
    setVar("AV_DecRuin", true);
    if (getMood() <= 30)
    {
        increaseRuinChance(-8);
    }
    continue3b();
	return;
}
function continue3b()
{
    if(getVar("AV_SubKnees", false))
    {
        AV_SubKnees();
        return;
    }
    continue4();
    return;
    AV_SubKnees();
}
function AV_SubKnees()
{
    CMessage("Alright you can get back on your chair");
    delVar("AV_SubKnees");
    continue4();
	return;
}
function continue4()
{
    if(getVar("AV_Pins", false))
    {
        AV_Pins();
        return;
    }
    SkipPins();
    return;
    AV_Pins();
}
function AV_Pins()
{
    CMessage("You can remove all clothespins");
    delVar("AV_Pins");
    SkipPins();
	return;
}
function SkipPins()
{
    if (randomInteger(1, 100) <= 90)
    {
        continue5();
        return;
    }
    if(getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_GoToPosit.js");
    }
    continue5();
}
function continue5()
{
    if (randomInteger(1, 100) <= 95)
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
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 80)
    {
        AV_DommeMistress();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        AV_Opcao2();
        return;
    }
    CMessage("What I want " + random("now ", "today ") + "is a slave, a toy that I can " + random("use ", "play with ") + "someone who will do ANYTHING I " + random("tell them", "demand"));
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
		setTempVar("AV_Mistress_youslave",true);
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
        return;
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
    if (randomInteger(1, 100) <= 80)
    {
        AV_NoPosi();
        return;
    }
    if(!getVar("AV_PositionSecDone", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Positions.js");
    }
    return;
    AV_NoPosi();
}
function AV_NoPosi()
{
    if (randomInteger(1, 100) <= 30)
    {
        CrushesAV();
        return;
    }
    if (randomInteger(1, 100) <= 40)
    {
        EdgeAV();
        return;
    }
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some " + random("porn videos ", "videos ", "nice videos ") + "on your " + random("PC", "computer"));
    CMessage("Stroke to the beat %Grin%");
    CMessage("Have fun");
    showCategoryVideo(randomCategory(),true);
    CMessage("%CensorContinue%");
    return;
    CrushesAV();
}
function CrushesAV()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    return;
    EdgeAV();
}
function EdgeAV()
{
    CMessage("%StartStroking%");
    //Command:Slideshow(Softcore,slow)
	setSlideShow("SOFTCORE","slow");
	slideShowOn();
    //TODO: Turn Slideshow on
    sleep(randomInt(15, 20));
    CMessage("%Edge%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto()")
    //TODO: Turn Slideshow off
	edged=false;
    Loop();
	return;
}
function Loop()
{
	if(!edged){
		CMessage("%edgingtaunts1%");
		sleep(1);
		Loop();
	}
    return;
    EdgeForGoto();
}
function EdgeForGoto()
{
	edged=true;
	slideShowOff();
    switch(random("V10", "V15", "V60"))
    {
        case "V10":
        V10();
        return;
        break;
        case "V15":
        V15();
        return;
        break;
        case "V60":
        V60();
        return;
        break;
    }
    V10();
	return;
}
function V10()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "10" + java.io.File.separator + "*.mp4",true);
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V15();
}
function V15()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "15" + java.io.File.separator + "*.mp4",true);
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V60();
}
function V60()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "60" + java.io.File.separator + "*.mp4",true);
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    FimEdge();
}
function FimEdge()
{
    setVar("edgingmode", "Normal");
    return;
    //Control file to run
    //some variables and
    //check for conditions
    //Some lines at the end
    //to prevent errors
    //by avatarbr
}