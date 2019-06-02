DMessage("Choose Contact3 special test audio file: start");
edged=false;
date=null;
main();
DMessage("Choose Contact3 special test audio file: end");
function main()
{
    start();
}
function start()
{
    //--UNINTERPRETED LINE:@NullResponse @RTOn @EdgeMode(Goto, stop test) @CheckFlag(circle1) @CheckFlag(circle2) @CheckFlag(circle3) @CheckFlag(circle4) @CheckFlag(circle5) @CheckFlag(no200300) @CheckFlag(overdrive1) @CheckFlag(overdrive2) @CheckFlag(overdrive3) @CheckFlag(tgr8_c3t1) @CheckFlag(tgr8_c3t2) @CheckFlag(tgr8_c3t3) @CheckFlag(tgr8_c3t4) @CheckFlag(tgr8_c3t5) @CheckFlag(tgr8_c3t6)
	setEdgeMode("Goto","stop_test()");
	if(getVar("circle1",false) ){
		circle1();
	}
	if(getVar("circle2",false) ){
		circle2();
	}
	if(getVar("circle3",false) ){
		circle3();
	}
	if(getVar("circle4",false) ){
		circle4();
	}
	if(getVar("circle5",false) ){
		circle5();
	}
	if(getVar("no200300",false) ){
		no200300();
	}
	if(getVar("overdrive1",false) ){
		overdrive1();
	}
	if(getVar("overdrive2",false) ){
		overdrive2();
	}
	if(getVar("overdrive3",false) ){
		overdrive3();
	}
	if(getVar("tgr8_c3t1",false) ){
		tgr8_c2t1();
	}
	if(getVar("tgr8_c3t2",false) ){
		tgr8_c2t2();
	}
	if(getVar("tgr8_c3t3",false) ){
		tgr8_c2t3();
	}
	if(getVar("tgr8_c3t4",false) ){
		tgr8_c2t4();
	}
	if(getVar("tgr8_c3t5",false) ){
		tgr8_c2t5();
	}
	if(getVar("tgr8_c3t6",false) ){
		tgr8_c2t6();
	}
    switch(random("circle1", "circle2", "circle3", "circle4", "circle5", "circle1", "overdrive1", "overdrive2", "overdrive3", "tgr8_c3t1", "tgr8_c3t2", "tgr8_c3t3", "tgr8_c3t4", "tgr8_c3t5", "tgr8_c3t6"))
    {
        case "circle1":
        circle1();
        return;
        break;
        case "circle2":
        circle2();
        return;
        break;
        case "circle3":
        circle3();
        return;
        break;
        case "circle4":
        circle4();
        return;
        break;
        case "circle5":
        circle5();
        return;
        break;
        case "circle1":
        circle1();
        return;
        break;
        case "overdrive1":
        overdrive1();
        return;
        break;
        case "overdrive2":
        overdrive2();
        return;
        break;
        case "overdrive3":
        overdrive3();
        return;
        break;
        case "tgr8_c3t1":
        tgr8_c3t1();
        return;
        break;
        case "tgr8_c3t2":
        tgr8_c3t2();
        return;
        break;
        case "tgr8_c3t3":
        tgr8_c3t3();
        return;
        break;
        case "tgr8_c3t4":
        tgr8_c3t4();
        return;
        break;
        case "tgr8_c3t5":
        tgr8_c3t5();
        return;
        break;
        case "tgr8_c3t6":
        tgr8_c3t6();
        return;
        break;
    }
    circle1();
}
function circle1()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(circle1) @PlayAudio[tease\tgr8\Contact3 special test audio\circle1.mp3] @SetDate(timer, 40 seconds)
	setTempVar("circle1",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "circle1.mp3");
	date=setTempDate("timer");
	date.addSecond(40);
    Loop();
    return;
    circle2();
}
function circle2()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(circle2) @PlayAudio[tease\tgr8\Contact3 special test audio\circle2.mp3] @SetDate(timer, 44 seconds)
	setTempVar("circle2",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "circle2.mp3");
	date=setTempDate("timer");
	date.addSecond(44);
    Loop();
    return;
    circle3();
}
function circle3()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(circle3) @PlayAudio[tease\tgr8\Contact3 special test audio\circle3.mp3] @SetDate(timer, 40 seconds)
	setTempVar("circle3",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "circle3.mp3");
	date=setTempDate("timer");
	date.addSecond(40);
    Loop();
    return;
    circle4();
}
function circle4()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(circle4) @PlayAudio[tease\tgr8\Contact3 special test audio\circle4.mp3] @SetDate(timer, 60 seconds)
	setTempVar("circle4",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "circle4.mp3");
	date=setTempDate("timer");
	date.addSecond(60);
    Loop();
    return;
    circle5();
}
function circle5()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(circle5) @PlayAudio[tease\tgr8\Contact3 special test audio\circle5.mp3] @SetDate(timer, 46 seconds)
	setTempVar("circle5",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "circle5.mp3");
	date=setTempDate("timer");
	date.addSecond(46);
    Loop();
    return;
    no200300();
}
function no200300()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(no200300) @PlayAudio[tease\tgr8\Contact3 special test audio\no200300.mp3] @SetDate(timer, 40 seconds)
	setTempVar("no200300",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "no200300.mp3");
	date=setTempDate("timer");
	date.addSecond(40);
    Loop();
    return;
    overdrive1();
}
function overdrive1()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(overdrive1) @PlayAudio[tease\tgr8\Contact3 special test audio\overdrive1.mp3] @SetDate(timer, 61 seconds)
	setTempVar("overdrive1",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "overdrive1.mp3");
	date=setTempDate("timer");
	date.addSecond(61);
    Loop();
    return;
    overdrive2();
}
function overdrive2()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(overdrive2) @PlayAudio[tease\tgr8\Contact3 special test audio\overdrive2.mp3] @SetDate(timer, 47 seconds)
	setTempVar("overdrive2",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "overdrive2.mp3");
	date=setTempDate("timer");
	date.addSecond(47);
    Loop();
    return;
    overdrive3();
}
function overdrive3()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(overdrive3) @PlayAudio[tease\tgr8\Contact3 special test audio\overdrive3.mp3] @SetDate(timer, 45 seconds)
	setTempVar("overdrive3",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "overdrive3.mp3");
	date=setTempDate("timer");
	date.addSecond(45);
    Loop();
    return;
    tgr8_c3t1();
}
function tgr8_c3t1()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t1) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t1.mp3] @SetDate(timer, 61 seconds)
	setTempVar("tgr8_c3t1",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t1.mp3");
	date=setTempDate("timer");
	date.addSecond(61);
    Loop();
    return;
    tgr8_c3t2();
}
function tgr8_c3t2()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t2) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t2.mp3] @SetDate(timer, 40 seconds)
	setTempVar("tgr8_c3t2",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t2.mp3");
	date=setTempDate("timer");
	date.addSecond(40);
    Loop();
    return;
    tgr8_c3t3();
}
function tgr8_c3t3()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t3) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t3.mp3] @SetDate(timer, %Random%(60, 80) seconds)
	setTempVar("tgr8_c3t3",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t3.mp3");
	date=setTempDate("timer");
	date.addSecond(randomInt(60,80) );
    Loop();
    return;
    tgr8_c3t4();
}
function tgr8_c3t4()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t4) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t4.mp3] @SetDate(timer, 28 seconds)
	setTempVar("tgr8_c3t4",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t4.mp3");
	date=setTempDate("timer");
	date.addSecond(28);
    Loop();
    return;
    tgr8_c3t5();
}
function tgr8_c3t5()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t5) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t5.mp3] @SetDate(timer, 54 seconds)
	setTempVar("tgr8_c3t5",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t5.mp3");
	date=setTempDate("timer");
	date.addSecond(54);
    Loop();
    return;
    tgr8_c3t6();
}
function tgr8_c3t6()
{
    //--UNINTERPRETED LINE:@NullResponse @TempFlag(tgr8_c3t6) @PlayAudio[tease\tgr8\Contact3 special test audio\tgr8_c3t6.mp3] @SetDate(timer, 31 seconds)
	setTempVar("tgr8_c3t6",true);
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact3 special test audio" + java.io.File.separator + "tgr8_c3t6.mp3");
	date=setTempDate("timer");
	date.addSecond(31);
    Loop();
    return;
    Loop();
}
function Loop()
{
	sleep(1);
    if(date.hasPassed() ||edged){
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
    setVar("fail", getVar("fail", 0) + 1);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "stop.mp3");
    if (getVar("fail", 0) == 3)
    {
        test_failed();
        return;
    }
    SMessage(random("Take a break %PetName%", "Let\'s take a break", "Rest now %PetName%", "Rest a bit %PetName%"),-1,4);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "stop test()")
	answer0=getInput("When you're ready type <i>start</i>",20,-1,true,4);
	while (!(answer0.isLike("start") ))
    {
		answer0 = getInput("<i>start</i> please...",10,-1,true,4);
    }
    if (answer0.isLike("start"))
    {
        SMessage("%Good%",-1,4);
        start();
        return;
    }
    test_failed();
}
function test_failed()
{
    //--UNINTERPRETED LINE:@NullResponse @RapidCodeOn @RTOff
	edged=true;
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
    delVar("circle1");
    delVar("circle2");
    delVar("circle3");
    delVar("circle4");
    delVar("circle5");
    delVar("no200300");
    delVar("overdrive1");
    delVar("overdrive2");
    delVar("overdrive3");
    delVar("tgr8_c3t1");
    delVar("tgr8_c3t2");
    delVar("tgr8_c3t3");
    delVar("tgr8_c3t4");
    delVar("tgr8_c3t5");
    delVar("tgr8_c3t6");
    delVar("tgr8 special test");
    delVar("timer");
	stopAudio();
    SMessage("%Stop%", 0,4);
    return;
    
    //Special test for Edge for us. Written by: tigrotto
}