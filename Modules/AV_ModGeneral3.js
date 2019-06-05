DMessage("AV_ModGeneral3: start");
main();
DMessage("AV_ModGeneral3: end");
function main()
{
    if(getVar("AV_ModGeneral3_NotFirstTime", false))
    {
        AV_ModGeneral3_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral3", 0);
    setVar("AV_ModGeneral3_NotFirstTime", true);
    AV_ModGeneral3_NotFirstTime();
}
function AV_ModGeneral3_NotFirstTime()
{
    if (getVar("AV_ModGeneral3", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral3", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral3", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral3", getVar("AV_ModGeneral3", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral3", getVar("AV_ModGeneral3", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral3", getVar("AV_ModGeneral3", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral3", getVar("AV_ModGeneral3", 0) + 1000);
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
    setVar("AV_ModGeneral3", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("I need a man who knows how to control his %Cock%");
    CMessage("If you\'re %Submissive% enough...");
    CMessage("I\'ll do my best to reward you as we go along.");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("There you go...");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now your Mistress want to make you suffer");
        //run("CBT" + java.io.File.separator + "*.js");
		cbt();
    }
    CMessage("I want you to stroke it like you\'re balls deep inside my pussy.");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("Oooh, that got you a little harder didn\'t it?");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    let answer0 = getInput("That\'s it.  Are you starting to feel yourself getting to the edge?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good..");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad");
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Not...bad.");
    CMessage("You might impress me after all.");
    CMessage("You know...since you did such a good job for round one here?");
    if(getVar("AV_SubKnees", false))
    {
        AV_SkipKnee1();
        return;
    }
    CMessage("Wouldn\'t it be more fun to go to your knees while you jack it hard for me the second time?");
    CMessage("%KneelForMe%");
    setVar("AV_SubKnees", true);
    AV_SkipKnee1();
}
function AV_SkipKnee1()
{
    CMessage("I\'m going to tell you to stroke again in a second...");
    CMessage("Ready?");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("Imagine me right there in front of you");
    CMessage("in your knees looking up into my eyes while you %Stroke%");
    CMessage("Almost makes you wish you could explode all over me right now doesn\'t it?");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("Only you should that know if you tried to do that...");
    CMessage("I\'d punch you in the balls ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("with all my strength and you'd never see me again so");
    }
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokePositions.js");
	customTask("AV_StrokePositions");
    CMessage("I\'d show a little restraint if I were you.");
    CMessage("You can sit");
    delVar("AV_SubKnees");
    CMessage("%EmoteLaugh% Oh my God...you look like you\'re literally in pain...");
    CMessage("That felt good for you didn\'t it?");
    CMessage("Even if you do pass this test...how the hell will you even sleep tonight?");
    CMessage("Hm...guess that\'s your problem to solve.");
    CMessage("You\'ve done well so far...");
    return;
    Modulo2();
}
function Modulo2()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("%LittleGame% %PetName%");
    CMessage("You will %Stroke% to the beat");
    CMessage("%StartStrokingNS% %AudioStroke%");
    CMessage("%stopstroking%", 0);
    sleep(10);
    CMessage("%StartStrokingNS% %AudioStroke%");
    CMessage("%stopstroking%", 0);
    sleep(10);
    if (randomInteger(1, 100) <= 70)
    {
        ContinueStroke1();
        return;
    }
    return;
    ContinueStroke1();
}
function ContinueStroke1()
{
    CMessage("%StartStrokingNS% %AudioStroke%");
    CMessage("%stopstroking%", 0);
    sleep(10);
    if (randomInteger(1, 100) <= 60)
    {
        ContinueStroke2();
        return;
    }
    return;
    ContinueStroke2();
}
function ContinueStroke2()
{
    CMessage("%StartStrokingNS% %AudioStroke%");
    CMessage("%stopstroking%", 0);
    sleep(15);
    if (randomInteger(1, 100) <= 50)
    {
        ContinueStroke3();
        return;
    }
    return;
    ContinueStroke3();
}
function ContinueStroke3()
{
    CMessage("%StartStrokingNS% %AudioStroke%");
    CMessage("%stopstroking%", 0);
    sleep(10);
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    addContact(2);
    SMessage("Hi %PetName%", -1, 2);
    SMessage("The question is", -1, 2);
    SMessage("Will I be rough with you?", -1, 2);
    SMessage("I don\'t know...", -1, 2);
    SMessage("%DomName% always ask me how much she should deny you", -1, 2);
    SMessage("how long should I make YOU wait?", -1, 2);
    //SMessage("%StartStroking%", -1, 2);
	setStrokingNoTaunt(null,-1,2);
    SMessage("I mean, guys are different than girls right?", -1, 2);
    SMessage("A year for me isn\'t the same as a year for you.", -1, 2);
    SMessage("Hell, I bet making you just go a WEEK would be pretty rough...", -1, 2);
    SMessage("somehow it just doesn\'t seem like enough", -1, 2);
    SMessage("Two weeks, maybe.", -1, 2);
    SMessage("Fourteen days of making you stroke and edge", -1, 2);
    SMessage("over and over", -1, 2);
    SMessage("maybe even make you ruin another orgasm or two", -1, 2);
    SMessage("now THAT would be rough", -1, 2);
    SMessage("But then again", -1, 2);
    SMessage("Why stop at two weeks when I could make you go an entire month?", -1, 2);
    SMessage("Could you fucking imagine?", -1, 2);
    SMessage("I mean, there\'s no way %DomName% would make you go that long", -1, 2);
    SMessage("so it would be priceless watching you", -1, 2);
    SMessage("have to worm your way out of all those orgasms she\'d want to give you", -1, 2);
    SMessage("%stopstroking%", -1, 2);
	stopStroking();
    SMessage("Which brings us to our next question", -1, 2);
    SMessage("will I be gentle with you?", -1, 2);
    SMessage("Why should I be? That\'s what %DomName% for.", -1, 2);
    SMessage("You have no idea how much that cracks me up, by the way.", -1, 2);
    SMessage("So the only question left is...", -1, 2);
    SMessage("...will I hurt you?", -1, 2);
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumberGliter1.js");
	customTask("AV_StrokeNumberGliter1");
    SMessage("I am SO gonna fucking hurt you.", -1, 2);
    SMessage("I\'ve been thinking about last night all morning", -1, 2);
    SMessage("and it\'s so fucking obvious.", -1, 2);
    SMessage("The more your dick aches and suffers...", -1, 2);
    SMessage("the more and more it wants to cum...", -1, 2);
    SMessage("the better my clit will feel.", -1, 2);
    //SMessage("%StartStroking%", -1, 2);
	setStrokingNoTaunt(null,-1,2);
    SMessage("So I will make you stroke until you absolutely can\'t take it anymore", -1, 2);
    SMessage("then let you go run back to %DomName%", -1, 2);
    SMessage("who thinks she\'s being all playful and respectful of your limits...", -1, 2);
    SMessage("but really she\'s just torturing you when you\'re already past the point of being broken.", -1, 2);
    SMessage("I can\'t even begin to tell you how much satisfaction I\'m going to get from that.", -1, 2);
    SMessage("I\'m going to make you edge", -1, 2);
    SMessage("hovering at the brink of the same orgasm I\'m going to deny you every day.", -1, 2);
    SMessage("But don\'t worry...", -1, 2);
    SMessage("I\'ll still give you enough of a taste to let you know what you\'re missing.", -1, 2);
    SMessage("Get close for me", -1, 2);
    SMessage("Stroke it like you fucking mean it", -1, 2);
    SMessage("I want you so close to cumming you feel like your %Cock% gonna break.", -1, 2);
    SMessage("Are you there...?", -1, 2);
    SMessage("Are you that close for me?", -1, 2);
    SMessage("%stopstroking%", -1, 2);
	stopStroking();
    removeContact(2);
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("%PetName%");
    CMessage("We should raise your pulse a bit.");
    if (randomInteger(1, 100) <= 50)
    {
        knees1();
        return;
    }
    getup1();
}
function getup1()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite1g();
        return;
    }
    knees2();
    return;
    knees1();
}
function knees1()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite1k();
        return;
    }
    getup2();
    return;
    Bite1k();
}
function Bite1k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    getup2();
    return;
    Bite1g();
}
function Bite1g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    knees2();
    return;
    getup2();
}
function getup2()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite2g();
        return;
    }
    knees3();
    return;
    knees2();
}
function knees2()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite2k();
        return;
    }
    getup3();
    return;
    Bite2k();
}
function Bite2k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    getup3();
    return;
    Bite2g();
}
function Bite2g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    knees3();
    return;
    getup3();
}
function getup3()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite3g();
        return;
    }
    knees4();
    return;
    knees3();
}
function knees3()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite3k();
        return;
    }
    getup4();
    return;
    Bite3k();
}
function Bite3k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    getup4();
    return;
    Bite3g();
}
function Bite3g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    knees4();
    return;
    getup4();
}
function getup4()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite4g();
        return;
    }
    knees5();
    return;
    knees4();
}
function knees4()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite4k();
        return;
    }
    getup5();
    return;
    Bite4k();
}
function Bite4k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    getup5();
    return;
    Bite4g();
}
function Bite4g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    knees5();
    return;
    getup5();
}
function getup5()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite5g();
        return;
    }
    knees6();
    return;
    knees5();
}
function knees5()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite5k();
        return;
    }
    getup6();
    return;
    Bite5k();
}
function Bite5k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    getup6();
    return;
    Bite5g();
}
function Bite5g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    knees6();
    return;
    getup6();
}
function getup6()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite6g();
        return;
    }
    knees7();
    return;
    knees6();
}
function knees6()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite6k();
        return;
    }
    getup7();
    return;
    Bite6k();
}
function Bite6k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 70)
    {
        getup7();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    Bite6g();
}
function Bite6g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 70)
    {
        knees7();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    getup7();
}
function getup7()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite7g();
        return;
    }
    knees8();
    return;
    knees7();
}
function knees7()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite7k();
        return;
    }
    getup8();
    return;
    Bite7k();
}
function Bite7k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 60)
    {
        getup8();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    Bite7g();
}
function Bite7g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 60)
    {
        knees8();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    getup8();
}
function getup8()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite8g();
        return;
    }
    knees9();
    return;
    knees8();
}
function knees8()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite8k();
        return;
    }
    getup9();
    return;
    Bite8k();
}
function Bite8k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 50)
    {
        getup9();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    Bite8g();
}
function Bite8g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    if (randomInteger(1, 100) <= 50)
    {
        knees9();
        return;
    }
    CMessage("%ThatsEnough%");
    final();
    return;
    getup9();
}
function getup9()
{
    CMessage("Get up!");
    if (randomInteger(1, 100) <= 50)
    {
        Bite9g();
        return;
    }
    final();
    return;
    knees9();
}
function knees9()
{
    CMessage("%KneelForMe%");
    if (randomInteger(1, 100) <= 50)
    {
        Bite9k();
        return;
    }
    final();
    return;
    Bite9k();
}
function Bite9k()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    CMessage("%ThatsEnough%");
    final();
    return;
    Bite9g();
}
function Bite9g()
{
    CMessage("%Stroke% for me");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(8);
    CMessage("%stopstroking%", 0);
    CMessage("%ThatsEnough%");
    final();
    return;
    final();
}
function final()
{
    CMessage("%SitDown%");
    CMessage("That was %Great%");
    return;
}