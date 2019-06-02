DMessage("AV_ModGeneral1: start");
main();
DMessage("AV_ModGeneral1: end");
function main()
{
    if(getVar("AV_ModGeneral1_NotFirstTime", false))
    {
        AV_ModGeneral1_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral1", 0);
    setVar("AV_ModGeneral1_NotFirstTime", true);
    AV_ModGeneral1_NotFirstTime();
}
function AV_ModGeneral1_NotFirstTime()
{
    if (getVar("AV_ModGeneral1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral1", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral1", getVar("AV_ModGeneral1", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral1", getVar("AV_ModGeneral1", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral1", getVar("AV_ModGeneral1", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral1", getVar("AV_ModGeneral1", 0) + 1000);
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
    setVar("AV_ModGeneral1", 0);
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
    CMessage("This tease is extremely simple but don\'t underestimate it.");
    CMessage(random("I guarantee you will get have a raging Angry Cock before the end", "You may even start to sweat you will be so stimulated"));
    CMessage("You %Like% the sound of that %Slave%");
    CMessage("I\'m going to count to ten over and over at a regular pace.");
    CMessage("When I say one, you %Stroke% one time.  When I say two you %Stroke% two times.");
    CMessage("When I say three you %Stroke% three times. All the way up to ten.");
    CMessage("I count at a regular pace which means you need to stroke faster and faster each time.");
    CMessage("By the time I get to ten you will have to stroke quite fast");
    CMessage("so that you can get all your strokes in before the count starts over.");
    CMessage("What could be simpler?");
    CMessage("Let\'s start");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "count.mp3");
    sleep(52);
    CMessage("It feels so good, but at the same time it\'s a kind of %Torture%. ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("That's what I %Like%");
    }
    CMessage("%ICanKeepThisUp%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "count.mp3");
    sleep(52);
    CMessage("I like creating that dilemma in you.");
    CMessage("%ICanKeepThisUp%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "count.mp3");
    sleep(52);
    CMessage("You\'re torn between pleasing me with your sexual frustration ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("and giving in to an orgasm");
    }
    CMessage("%ICanKeepThisUp%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "count.mp3");
    sleep(52);
    CMessage("Are you a total wreck? ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("I hope so");
    }
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
    CMessage("%PetName%, you have been such a good boy for the past half hour");
    CMessage("I think it\'s time to let you edge again.");
    let answer0 = getInput("Have you been good and saved your cum for me?", 05);
    if (answer0.isTimeout())
    {
        AV_Jump04();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("mmm...very good boy.");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("What?");
        run("Interrupt" + java.io.File.separator + "OpiateFRNPC.js");
    }
    else
    {
        CMessage("%Lol%");
    }
    AV_Jump04();
}
function AV_Jump04()
{
    CMessage("For this 100-1 you will stroke and only edge in the end");
    CMessage("%StartStroking%");
    CMessage("Good.");
    setTempVar("av_intera_001", true);
    CMessage("I\'ll be graceful and count for you today.");
    CMessage("100.");
    CMessage("99.");
    CMessage("98.");
    //setRapidText(true);
    CMessage("97.",0);
    CMessage("96.",0);
    CMessage("95.",0);
    CMessage("94.",0);
    CMessage("93.",0);
    CMessage("92.",0);
    CMessage("91.",0);
    //setRapidText(false);
    CMessage("90.");
    CMessage("%stopstroking%", 0);
    CMessage("Hmm...I wonder what you\'re thinking about as you %Stroke% your %Cock% ...");
    CMessage("%StartStroking%");
    //setRapidText(true);
    CMessage("89.",0);
    CMessage("88.",0);
    CMessage("87.",0);
    CMessage("86.",0);
    CMessage("85.",0);
    CMessage("84.",0);
    CMessage("83.",0);
    CMessage("82.",0);
    CMessage("81.",0);
    CMessage("80.",0);
    CMessage("%stopstroking%", 0);
    //setRapidText(false);
    let answer0 = getInput("Are you thinking about my breasts?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo01();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You aren\'t?");
        increaseAnger(3)
    }
    AV_Timeo01();
}
function AV_Timeo01()
{
    CMessage("Those nice round perky breasts pushed up by my black leather corset?");
    CMessage("You must be you little slut.");
    CMessage("%StartStroking%");
    //setRapidText(true);
    CMessage("79.");
    CMessage("78.");
    CMessage("77.");
    CMessage("76.");
    CMessage("75.");
    CMessage("74.");
    CMessage("73.");
    CMessage("72.");
    CMessage("71.");
    CMessage("70");
    CMessage("%stopstroking%", 0);
    //setRapidText(false);
    CMessage("Or are you thinking about worshiping my tight, round ass?");
    CMessage("They must look amazing underneath this tight red latex skirt.");
    CMessage("Wouldn\'t you just love to put your face there, and maybe even kiss it.");
    CMessage("%StartStroking%");
    setRapidText(true);
    CMessage("69.");
    CMessage("68.");
    CMessage("67.");
    CMessage("66.");
    CMessage("65.");
    CMessage("64.");
    CMessage("63.");
    CMessage("62.");
    CMessage("61.");
    CMessage("60");
    CMessage("%stopstroking%", 0);
    setRapidText(false);
    CMessage("Or...perhaps you\'re thinking about the impossible...");
    CMessage("%StartStroking%");
    CMessage("59.");
    CMessage("58.");
    CMessage("57.");
    CMessage("56.");
    CMessage("55.");
    CMessage("54.");
    CMessage("%stopstroking%", 0);
    CMessage("No, are you thinking about crawling in between my legs");
    CMessage("and worship my hot, wet cunt?");
    CMessage("%StartStroking%");
    CMessage("53.");
    CMessage("52.");
    CMessage("51.");
    CMessage("50.");
    CMessage("%stopstroking%", 0);
    CMessage("Lick my pussy until I come *all* over your face?");
    CMessage("%StartStroking%");
    CMessage("*laugh*");
    setRapidText(true);
    CMessage("49.");
    CMessage("48.");
    CMessage("47.");
    CMessage("44.");
    CMessage("43.");
    CMessage("42.");
    CMessage("41.");
    CMessage("40.");
    CMessage("%stopstroking%", 0);
    setRapidText(false);
    CMessage("Or maybe even");
    CMessage("You\'re thinking about *me* stroking your cock with my hand?");
    CMessage("Those long, delicate %Hands% wrapped around your cock");
    CMessage("%Stroking% *up* and *down*, *up and down*.");
    CMessage("Those same %Hands% slowly, but firmly milking your cum out of your %Cock%");
    CMessage("%StartStroking%");
    setRapidText(true);
    CMessage("39.");
    CMessage("38.");
    CMessage("37.");
    CMessage("36.");
    CMessage("35.");
    CMessage("34.");
    CMessage("33.");
    CMessage("32.");
    CMessage("31.");
    CMessage("30.");
    CMessage("%stopstroking%", 0);
    setRapidText(false);
    CMessage("Oh, you\'re doing surprisingly well tonight.");
    CMessage("But...I can definitely see you strain to hold back your orgasm");
    CMessage("It\'s best you don\'t think about how it will look like if my red, full lips are wrapped around your cock?");
    CMessage("Oh...did you just shiver?");
    CMessage("Mm...the thought is a little too much for you to handle slut?");
    CMessage("%StartStroking%");
    setRapidText(true);
    CMessage("29.");
    CMessage("28.");
    CMessage("27.");
    CMessage("26.");
    CMessage("25.");
    CMessage("24.");
    CMessage("23.");
    CMessage("22.");
    CMessage("21.");
    CMessage("20.");
    CMessage("%stopstroking%", 0);
    setRapidText(false);
    CMessage("Instead of thinking about all these naughty things about me.");
    CMessage("Just to make a point...don\'t you even think about how your %Cock%");
    CMessage("the one in your hand, would feel deep inside me.");
    CMessage("%StartStroking%");
    setRapidText(true);
    CMessage("19.");
    CMessage("18.");
    CMessage("17.");
    CMessage("16.");
    CMessage("15.");
    setRapidText(false);
    CMessage("%stopstroking%", 0);
    CMessage("Fucking my hot, wet, tight cunt. *In* and *out*,*in* and *out*");
    CMessage("and  my pussy clenching and massaging that cock of yours?");
    CMessage("%StartStroking%");
    CMessage("14.");
    CMessage("13.");
    CMessage("12.");
    CMessage("11.");
    CMessage("10.");
    CMessage("%stopstroking%", 0);
    CMessage("Ooh, 10, little one.");
    CMessage("Your face is all twisted...");
    CMessage("%StartStroking%");
    CMessage("9");
    CMessage("8");
    CMessage("7");
    CMessage("6");
    CMessage("5");
    CMessage("4");
    CMessage("3");
    CMessage("2");
    CMessage("1");
    CMessage("%Edge%");
	startEdging();
    sleep(10);		//??
    CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    delVar("av_intera_001");
    CMessage("%ThatsEnough%");
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
    CMessage("I " + random("think I\'ll take ", "need to take ") + "a " + random("short break", "break", "pause", "short pause"));
    CMessage("%AV_Luxury%");
    CMessage(random("Good thing ", "Thankfully ") + "you have some videos on your computer");
    CMessage("I\'m sure one of these girls will be able to keep you occupied for a few moments %Grin%");
    CMessage("Have fun");
    playVideo("Videos" + java.io.File.separator + "*.*",true);
    CMessage("%CensorContinue%");
    CMessage("Well I don\'t know about you, but I feel refreshed");
    if (randomInteger(1, 100) <= 60)
    {
        ContinueCH1();
        return;
    }
    CMessage("So time to get my own hands dirty again %Grin%");
    return;
    ContinueCH1();
}
function ContinueCH1()
{
    CMessage("Let\'s play another");
    playVideo("Videos" + java.io.File.separator + "*.*",true);
    CMessage("%CensorContinue%");
    CMessage("It\'s nice to suffer for a girl like that sometimes");
    if (randomInteger(1, 100) <= 50)
    {
        ContinueCH2();
        return;
    }
    CMessage("So time to get my own hands dirty again %Grin%");
    return;
    ContinueCH2();
}
function ContinueCH2()
{
    CMessage("Let\'s do again");
    playVideo("Videos" + java.io.File.separator + "*.*",true);
    CMessage("%CensorContinue%");
    CMessage("I don\'t mind sharing you with girls like that");
    if (randomInteger(1, 100) <= 40)
    {
        ContinueCH3();
        return;
    }
    CMessage("So time to get my own hands dirty again %Grin%");
    return;
    ContinueCH3();
}
function ContinueCH3()
{
    CMessage("One more");
    playVideo("Videos" + java.io.File.separator + "*.*",true);
    CMessage("%CensorContinue%");
    CMessage("Well I don\'t know about you, but I feel refreshed");
    if (randomInteger(1, 100) <= 20)
    {
        ContinueCH4();
        return;
    }
    CMessage("So time to get my own hands dirty again %Grin%");
    return;
    ContinueCH4();
}
function ContinueCH4()
{
    CMessage("Let\'s play another");
    playVideo("Videos" + java.io.File.separator + "*.*",true);
    CMessage("%CensorContinue%");
    CMessage("So time to get my own hands dirty again %Grin%");
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
    CMessage("On second thought");
    CMessage("%Edge%");
    CMessage("You dont need to tell me if you are on the edge this time");
    CMessage("Just hold when you get there");
    sleep(10);
    switch(random("edge1", "edge2", "edge3", "edge4", "edge5", "edge6", "edge7", "edge8"))
    {
        case "edge1":
        edge1();
        return;
        break;
        case "edge2":
        edge2();
        return;
        break;
        case "edge3":
        edge3();
        return;
        break;
        case "edge4":
        edge4();
        return;
        break;
        case "edge5":
        edge5();
        return;
        break;
        case "edge6":
        edge6();
        return;
        break;
        case "edge7":
        edge7();
        return;
        break;
        case "edge8":
        edge8();
        return;
        break;
    }
    edge1();
}
function edge1()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin001.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge2();
}
function edge2()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin002.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge3();
}
function edge3()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin003.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge4();
}
function edge4()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin004.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge5();
}
function edge5()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin005.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge6();
}
function edge6()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin006.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge7();
}
function edge7()
{
    CMessage("While you watch this %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "ruin007.webm",true);
    CMessage("%stopstroking%", 0);
    return;
    edge8();
}
function edge8()
{
    CMessage("While you watch Dianna %Smile%");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "d010.webm",true);
    CMessage("%stopstroking%", 0);
    return;
}