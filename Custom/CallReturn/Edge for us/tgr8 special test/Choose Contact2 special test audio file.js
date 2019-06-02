DMessage("Choose Contact2 special test audio file: start");
edged=false;
date=null;
main();
DMessage("Choose Contact2 special test audio file: end");
function main()
{
    start();
}
function start()
{
    //--UNINTERPRETED LINE:@NullResponse @RTOn @EdgeMode(Goto, stop test) @CheckFlag(tgr8_c2t1) @CheckFlag(tgr8_c2t2) @CheckFlag(tgr8_c2t3) @CheckFlag(tgr8_c2t4) @CheckFlag(tgr8_c2t5)
	setEdgeMode("Goto","stop_test()");
	if(getVar("tgr8_c2t1",false) ){
		tgr8_c2t1();
	}
	if(getVar("tgr8_c2t2",false) ){
		tgr8_c2t2();
	}
	if(getVar("tgr8_c2t3",false) ){
		tgr8_c2t3();
	}
	if(getVar("tgr8_c2t4",false) ){
		tgr8_c2t4();
	}
	if(getVar("tgr8_c2t5",false) ){
		tgr8_c2t5();
	}
    switch(random("tgr8_c2t1", "tgr8_c2t2", "tgr8_c2t3", "tgr8_c2t4", "tgr8_c2t5"))
    {
        case "tgr8_c2t1":
        tgr8_c2t1();
        return;
        break;
        case "tgr8_c2t2":
        tgr8_c2t2();
        return;
        break;
        case "tgr8_c2t3":
        tgr8_c2t3();
        return;
        break;
        case "tgr8_c2t4":
        tgr8_c2t4();
        return;
        break;
        case "tgr8_c2t5":
        tgr8_c2t5();
        return;
        break;
    }
    tgr8_c2t1();
}
function tgr8_c2t1()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c2t1) @PlayAudio[tease\tgr8\Contact2 special test audio\tgr8_c2t1.mp3] @SetDate(timer, %Random%(60, 85) seconds)
	setTempVar("tgr8_c2t1",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "tgr8_c2t1.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,85));
    Loop();
    return;
    tgr8_c2t2();
}
function tgr8_c2t2()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c2t2) @PlayAudio[tease\tgr8\Contact2 special test audio\tgr8_c2t2.mp3] @SetDate(timer, %Random%(60, 85) seconds)
	setTempVar("tgr8_c2t2",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "tgr8_c2t2.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,85));
    Loop();
    return;
    tgr8_c2t3();
}
function tgr8_c2t3()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c2t3) @PlayAudio[tease\tgr8\Contact2 special test audio\tgr8_c2t3.mp3] @SetDate(timer, %Random%(60, 85) seconds)
	setTempVar("tgr8_c2t3",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "tgr8_c2t3.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,85));
    Loop();
    return;
    tgr8_c2t4();
}
function tgr8_c2t4()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c2t4) @PlayAudio[tease\tgr8\Contact2 special test audio\tgr8_c2t4.mp3] @SetDate(timer, %Random%(60, 85) seconds)
	setTempVar("tgr8_c2t4",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "tgr8_c2t4.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,85));
    Loop();
    return;
    tgr8_c2t5();
}
function tgr8_c2t5()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c2t5) @PlayAudio[tease\tgr8\Contact2 special test audio\tgr8_c2t5.mp3] @SetDate(timer, 64 seconds)
	setTempVar("tgr8_c2t5",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "tgr8_c2t5.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,85));
    Loop();
    return;
    Loop();
}
function Loop()
{
    //--Command:CheckDate(timer,End)
	sleep(1);
	if(date.hasPassed() ||edged ){
		End();
		return;
	}
    Loop();
    return;
    stop_test();
}
function stop_test()
{
	edged=true;
	stopAudio();
    setVar("fail", getVar("fail", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "stop.mp3");
    if (getVar("fail", 0) == 3)
    {
        test_failed();
        return;
    }
    SMessage(random("Take a break %PetName%", "Let\'s take a break", "Rest now %PetName%", "Rest a bit %PetName%"),-1,3);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "stop test()")
    answer0=getInput("When you're ready type <i>start</i>",20,-1,true,3);
	while (!(answer0.isLike("start") ))
    {
		answer0 = getInput("<i>start</i> please...",10,-1,true,3);
    }
    if (answer0.isLike("start"))
    {
        SMessage("%Good%",-1,3);
        start();
        return;
    }
    test_failed();
}
function test_failed()
{
    //--UNINTERPRETED LINE:@NullResponse @RapidCodeOn @RTOff
	edged=true;
	setEdgeMode("Normal");
    delVar("fail");
    setTempVar("tgr8 special edge test failed", true);
    delVar("tgr8 special test");
    setVar("tgr8_Edge_for_us_edges_left", getVar("edges_owed", 0));
    setVar("tgr8_Edge_for_us_edges_left", getVar("tgr8_Edge_for_us_edges_left", 0) - getVar("edges_done", 0));
    End();
}
function End()
{
    //--UNINTERPRETED LINE:@NullResponse @RapidCodeOn @RTOff
	edged=true;
	setEdgeMode("Normal");
    delVar("tgr8_c2t1");
    delVar("tgr8_c2t2");
    delVar("tgr8_c2t3");
    delVar("tgr8_c2t4");
    delVar("tgr8_c2t5");
    delVar("tgr8 special test");
    delVar("timer");
	stopAudio();
    SMessage("Stop", 0,3);
    return;
    
    //Special test for Edge for us. Written by: tigrotto
}