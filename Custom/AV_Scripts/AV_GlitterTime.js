DMessage("AV_GlitterTime: start");
edged=false;
main();
DMessage("AV_GlitterTime: end");
function main()
{
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeStopGlitter()")
    switch(random("a01", "a02", "a03"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
    }
    
    a01();
}
function a01()
{
    addContact(2);
    Start();
    return;
    a02();
}
function a02()
{
    addContact(3);
    Start();
    return;
    a03();
}
function a03()
{
    addContact(4);
    Start();
    return;
    
    Start();
}
function Start()
{
    if (inGroup([1,2]))
    {
        SMessage(random("Can ", "may ") + "I " + random("borrow ", "use ") + "%SubName% " + random("for a while", "a little"), -1, 2);
    }
    if (inGroup([1,3]))
    {
        SMessage(random("Can ", "may ") + "I " + random("borrow ", "use ") + "%SubName% " + random("for a while", "a little"), -1, 3);
    }
    if (inGroup([1,4]))
    {
        SMessage(random("Can ", "may ") + "I " + random("borrow ", "use ") + "%SubName% " + random("for a while", "a little"), -1, 4);
    }
    CMessage("%OfCourse%");
    if (inGroup([1, 2]))
    {
        SMessage("%ThankYou%", -1, 2);
        StartCont1();
        return;
    }
    if (inGroup([1, 3]))
    {
        SMessage("%ThankYou%", -1, 3);
        StartCont2();
        return;
    }
    if (inGroup([1, 4]))
    {
        SMessage("%ThankYou%", -1, 4);
        StartCont3();
        return;
    }
    return;
    StartCont1();
}
function StartCont1()
{
    while(!edged){
		SMessage("%StartStroking%", -1, 2);
		sleep(01);
		//--UNINTERPRETED LINE:@Contact1 @NullResponse @PlayAudio[tease\tgr8\Contact1 special test audio\*.mp3] 
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact1 special test audio" + java.io.File.separator + "*.mp3");
		sleep(10);
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(10, 12));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(15, 18));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(15, 20));
		SMessage("%StrokeTaunts_1%", -1, 2);
		sleep(randomInt(10, 15));
		break;
	}
    SMessage("%stopstroking%", 0,2);
    setVar("edgingmode", "Normal");
    FinishGlitter();
    return;
    
    StartCont2();
}
function StartCont2()
{
	while(!edged){
		SMessage("%StartStroking%", -1, 3);
		sleep(01);
		//--UNINTERPRETED LINE:@Contact2 @NullResponse @PlayAudio[tease\tgr8\Contact2 special test audio\*.mp3]
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "*.mp3");
		sleep(10);
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(10, 12));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(15, 20));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(10, 15));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(15, 18));
		SMessage("%StrokeTaunts_1%", -1, 3);
		sleep(randomInt(10, 15));
		break;
	}
    SMessage("%stopstroking%", 0,3);
    setVar("edgingmode", "Normal");
    FinishGlitter();
    return;
    
    StartCont3();
}
function StartCont3()
{
	while(!edged){
		SMessage("%StartStroking%", -1, 4);
		sleep(01);
		//--UNINTERPRETED LINE:@Contact3 @NullResponse @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t*.mp3] 
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t*.mp3");
		sleep(10);
		SMessage("%StrokeTaunts_1%", -1, 4);
		sleep(randomInt(15, 18));
		stopAudio();
		SMessage("%stopstroking%", 0,4);
		SMessage("%StartStroking%", -1, 4);
		sleep(01);
		//--UNINTERPRETED LINE:@Contact3 @NullResponse @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t*.mp3] @sleep(10)
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t*.mp3");
		sleep(10);
		SMessage("%StrokeTaunts_1%", -1, 4);
		sleep(randomInt(15, 18));
		break;
	}
	stopAudio();
    SMessage("%stopstroking%", 0,4);
    setVar("edgingmode", "Normal");
    FinishGlitter();
    return;
    
    EdgeStopGlitter();
}
function EdgeStopGlitter()
{
	edged=true;
	stopAudio();
    if (inGroup([1, 2]))
    {
        SMessage("%stopstroking%", 0,2);
        setVar("edgingmode", "Normal");
    }
    if (inGroup([1, 3]))
    {
        SMessage("%stopstroking%", 0,3);
        setVar("edgingmode", "Normal");
    }
    if (inGroup([1, 4]))
    {
        SMessage("%stopstroking%", 0,4);
        setVar("edgingmode", "Normal");
    }
    if (inGroup([1, 2]))
    {
        SMessage(random("We seriously have to bring your stamina back on track ", "I don\'t think I authorized you to edge ") + "%SubName%", -1, 2);
    }
    if (inGroup([1, 3]))
    {
        SMessage(random("We seriously have to bring your stamina back on track ", "I don\'t think I authorized you to edge ") + "%SubName%", -1, 3);
    }
    if (inGroup([1, 4]))
    {
        SMessage(random("We seriously have to bring your stamina back on track ", "I don\'t think I authorized you to edge ") + "%SubName%", -1, 4);
    }
    if (inGroup([1, 2]))
    {
        if (randomInteger(1, 100) <= 50)
        {
            moreedgeC1();
            return;
        }
    }
    if (inGroup([1, 3]))
    {
        if (randomInteger(1, 100) <= 50)
        {
            punishmentC2();
            return;
        }
    }
    if (inGroup([1, 4]))
    {
        SMessage("But first we need to punish that %Cock%!", -1, 4);
        punishmentC3();
        return;
    }
    FinishGlitter();
	return;
}
function FinishGlitter()
{
    if (inGroup([1, 2]))
    {
        SMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 2);
    }
    if (inGroup([1, 3]))
    {
        SMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 3);
    }
    if (inGroup([1, 4]))
    {
        SMessage("That\'s " + random("was fun ", "enough ", "it ") + "bye %SubName%", -1, 4);
    }
    removeContact(4);
    removeContact(2);
    removeContact(3);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    moreedgeC1();
}
function moreedgeC1()
{
    SMessage("Since you like to edge so much...", -1, 2);
    edge("Let\'s start by another edge!", -1, 2);
    SMessage("Now I\'ll keep you there a while longer %Grin%", -1, 2);
    //SMessage("Get to the edge", -1, 2);
    //startEdging();
    holdEdge();
    //SMessage("%LetTheEdgeFade%", -1, 2);
    SMessage("And now the real deal...", -1, 2);
    SMessage("Let\'s see if you can survive a chain of edges %Grin%", -1, 2);
    //--Command:GotoDommeApathy
	jumpOldApathy();
	return;
    ApathyLevel1();
}
function ApathyLevel1()
{
    edge("Go on, edge for me", -1, 2);
    edge("Another one right away", -1, 2);
    FinishGlitter();
    return;
    ApathyLevel2();
}
function ApathyLevel2()
{
    edge("Go on, edge for me", -1, 2);
    //startEdging();
    SMessage("Another one right away", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    FinishGlitter();
    return;
    ApathyLevel3();
}
function ApathyLevel3()
{
    SMessage("Go on, edge for me", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    edge("Another one right away", -1, 2);
    //startEdging();
    SMessage("An another one! %Grin%", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    FinishGlitter();
    return;
    ApathyLevel4();
}
function ApathyLevel4()
{
    SMessage("Go on, edge for me", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Another one right away", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("An another one! %Grin%", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Just to make sure let\'s do a fourth...", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    FinishGlitter();
    return;
    ApathyLevel5();
}
function ApathyLevel5()
{
    SMessage("Go on, edge for me", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Another one right away", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("An another one! %Grin%", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Just to make sure let\'s do a fourth...", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Did you think I would stop there? Get to the edge again %PetName%!", -1,2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Starting to learn to control that cock?", -1, 2);
    SMessage("To make sure give me another edge!", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    FinishGlitter();
    return;
    
    punishmentC3();
}
function punishmentC3()
{
    SMessage("%Grin%", -1, 4);
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_CBT_Gliter3.js");
	customTask("AV_CBT_Gliter3",-1,4);
    SMessage("And these %Balls%", -1, 4);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    SMessage("That will teach it some control %lol%", -1, 4);
    FinishGlitter();
    return;
    
    punishmentC2();
}
function punishmentC2()
{
    SMessage("But first we need to punish that %Cock%!", -1, 3);
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_CBT_Gliter2.js");
	customTask("AV_CBT_Gliter2",-1,3);
    SMessage("And these %Balls%", -1, 3);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    SMessage("That will teach it some control %lol%", -1, 3);
    FinishGlitter();
    return;
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
}