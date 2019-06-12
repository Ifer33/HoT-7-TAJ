DMessage("AV_ModGeneral34: start");
main();
DMessage("AV_ModGeneral34: end");
function main()
{
    if(getVar("AV_ModGeneral34_NotFirstTime", false))
    {
        AV_ModGeneral34_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral34", 0);
    setVar("AV_ModGeneral34_NotFirstTime", true);
    AV_ModGeneral34_NotFirstTime();
}
function AV_ModGeneral34_NotFirstTime()
{
    if (getVar("AV_ModGeneral34", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral34", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral34", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral34", getVar("AV_ModGeneral34", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral34", getVar("AV_ModGeneral34", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral34", getVar("AV_ModGeneral34", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral34", getVar("AV_ModGeneral34", 0) + 1000);
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
    setVar("AV_ModGeneral34", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("We need to get you throbbing.");
    CMessage("I want you to get yourself worked up");
    CMessage("and then I want to talk a bit with you about what naughty things you enjoy.");
    CMessage("Wrap your index finger and thumb around the base of your %Cock%.");
    CMessage("Now give it a little squeeze and tense the muscles in your groin.");
    CMessage(random("Can you feel the blood surging through into it?", "Can you feel the skin get tighter and the nerves begin to get more sensitive?"));
    CMessage("Do it again, give a little squeeze, and tense a bit.");
    CMessage("%GoodBoy%");
    CMessage("%StartStroking%");
    CMessage("Very slowly.  You can wet it if you\'d like.");
    CMessage("Up....... and down.");
    CMessage("Give it another squeeze, tense your muscles, and trace up... and down.");
    CMessage("Good boy. " + random("Keep it up", "Tease yourself"));
    CMessage("You know that every day will be filled with thoughts of me");
    CMessage("thoughts of what I\'ve done to you.");
    CMessage("Sexy, arousing thoughts, filling you with excitement and frustration at every breath.");
    CMessage("Something tells me you\'re getting awfully close");
    CMessage("%stopstroking%", 0);
    CMessage("Its time to play favorite game");
    CMessage("Red light, Green light.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But this time its going to have a little twist.");
    }
    CMessage("Green light, you get to stroke to your hearts desire.");
    CMessage("And when the Red light comes on, you have to let go of that cock, no more stroking.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But thats not all, during the Red light,");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Im going to dish out some naughty cock and ball torture instructions on you.");
    }
    CMessage("This is going to be so much fun.");
    CMessage("I know youre already hard with anticipation.");
    let answer0 = getInput("Are you ready?", 15);
    if (answer0.isTimeout())
    {
        dsfd4v();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("So, get ready because we will start now");
    }
    dsfd4v();
}
function dsfd4v()
{
    //--UNINTERPRETED LINE:<Font color="green">GREEN LIGHT</Font> @PlayAudio[tease\cStroke.mp3]
	CMessage("<c=green b> GREEN LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("%Stroke% it however you want, fast or slow.");
    CMessage("Enjoy it while you can.");
    CMessage("Do you enjoy looking at me while you get to stroke?");
    CMessage("I know you do");
    //--UNINTERPRETED LINE:<Font color="red">RED LIGHT</Font> @PlayAudio[tease\cStop.mp3]
	CMessage("<c=red b> RED LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I cant wait to punish you.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Oh did that hurt?");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I\'ll bet it did.");
    }
    if(!getVar("av_fetish_pain", false))
    {
        sleep(30);
    }
	//--UNINTERPRETED LINE:<Font color="green">GREEN LIGHT</Font> @PlayAudio[tease\cStroke.mp3]
	CMessage("<c=green b> GREEN LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("get that dick hard again even if it hurts.");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% for me %Slave%");
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% for me %PetName%");
    }
    showTaggedImage(4, ["softcore"]);
    sleep(20);
    //--UNINTERPRETED LINE:<Font color="red">RED LIGHT</Font> @PlayAudio[tease\cStop.mp3]
	CMessage("<c=red b> RED LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("I love red light.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Ouch!");
    }
    if(!getVar("av_fetish_pain", false))
    {
        sleep(30);
        //--UNINTERPRETED LINE:<Font color="green">GREEN LIGHT</Font> @PlayAudio[tease\cStroke.mp3]
    }
	CMessage("<c=green b> GREEN LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("%Stroke% again");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("if you can after all that pain.");
    }
    CMessage("Stroke it to the Goddesses who are controlling your orgasm right now.");
    CMessage("Hurry up and enjoy Green light.");
    //--UNINTERPRETED LINE:<Font color="red">RED LIGHT</Font> @PlayAudio[tease\cStop.mp3]
	CMessage("<c=red b> RED LIGHT");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(!getVar("av_fetish_pain", false))
    {
        sleep(30);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("oh, you want me to stop? ");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("What, it hurts? %Lol%");
    }
    CMessage("%ThatsEnough%");
    return;
    
    Modulo2();
}
function Modulo2()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("I think its time to have some fun", "I think you\'re gonna love this", "I bet my %Sexy% ass you\'re gonna love this!"));
    setVar("GNMGlitterDeny", true);
    CMessage(random("I\'m gonna put you in some very capable hands!", "I\'m have a friend who might help you with something", "I think you might get lucky today"));
    CMessage("A friend of mine that you for sure remembers is gonna replace me in just a moment");
    switch(random("Glitter1", "Glitter2", "Glitter3"))
    {
        case "Glitter1":
        Glitter1();
        return;
        break;
        case "Glitter2":
        Glitter2();
        return;
        break;
        case "Glitter3":
        Glitter3();
        return;
        break;
    }
    Glitter2();
}
function Glitter2()
{
    addContact(3);
    CMessage("Cya later " + random("%SubName%", "%PetName%"));
    removeContact(1);
    CMessage("Hi slave!");
    CMessage("Bet you haven\'t forgotten this  %Grin%");
    CMessage("I sure haven\'t! %EmoteMoan%");
    CMessage("God how I could just look at these all day!");
    CMessage("You look sooo hot!");
    holdEdge(-1,3);
    CMessage("So hot! %EmoteMoan%");
    //startEdging();
    //CMessage("%Edge%");
    //CMessage("%LetTheEdgeFade%");
	edge("%Edge%",-1,3);
    CMessage("Stand up");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Stay standing, hands behind your back, don\'t move.");
    sleep(15);
    CMessage("I Hope you enjoyed that little moment of peace");
    CMessage("Get your spoon or ruler...");
    sleep(10);
    CMessage("Get ready to spank your %Balls%");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    //startEdging();
    //CMessage("%Edge%");
	edge("%Edge%",-1,3);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    edge("%Edge%",-1,3);
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%Lol%");
    CMessage("%SitDown%");
    FimGlitters();
    return;
    
    Glitter1();
}
function Glitter1()
{
    addContact(2);
    CMessage("Cya later " + random("%SubName%", "%PetName%"));
    removeContact(1);
    CMessage("Hi slave!");
    CMessage("Its soo good to see you again! %EmoteHappy%");
    CMessage("Lets not waste any time!");
    holdEdge("%Edge%",-1,2);
    CMessage("I just love seeing a boy edge! %EmoteMoan%");
    //startEdging();
    //CMessage("%Edge%");
    //CMessage("%LetTheEdgeFade%");
	edge("%Edge%",-1,2);
    CMessage("I could edge you for hours");
    CMessage("Every day");
    CMessage("All year long!");
    edge("%Edge%",-1,2);
    CMessage("Never letting you have that release you would desperately crave!");
    CMessage("%EmoteMoan%");
    holdEdge("%Edge%",-1,2);
    CMessage("These holding edges are sooo hot!");
    edge("%Edge%",-1,2);
    CMessage("They should go on forever!");
    edge("%Edge%",-1,2);
    CMessage("God that is soo hot! %Lol%");
    CMessage("Lets try some quick ones!");
    DoEdges(2, 3, 0,-1,2);
    CMessage("I\'m seriesly dripping wet right now!");
    CMessage("But I think time might be running out!");
    FimGlitters();
    return;
    
    Glitter3();
}
function Glitter3()
{
    addContact(4);
    CMessage("Cya later " + random("%SubName%", "%PetName%"));
    removeContact(1);
    CMessage("Hi you weak excuse of a man!");
    CMessage("Its actually good to see you again!");
    CMessage("Not sure if you\'re happy to see me");
    let answer0 = getInput("Is your %Cock% hard?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I guess you are happy to see me!");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I suppose your %Cock% remembers the last time %Lol%");
    }
    CMessage("Well.. %Grin% %EmoteHappy%");
    CMessage("You might remember I have that thing..");
    CMessage("You might call it a point of view, opinion, belief or something else");
    CMessage("But in my perfect world");
    CMessage("No man should ever enjoy touching himself");
    CMessage("Never enjoy " + random("the pleasure of stroking", "the amazing sensations of an orgasm"));
    CMessage("No, a man should be in agony every with every stroke");
    CMessage("To teach him that pleasure is reserved for women and that he is a mean to and end");
    CMessage("I truely believe that ideal");
    CMessage("And right now i\'m gonna impose my ideal on you!");
    CMessage("Lucky for me there are ways to ensure every stroke isn\'t filled with pleasure");
    CMessage("But rather it frustrating");
    CMessage("%StartStroking%");
    CMessage("SLOW and FRUSTRATING strokes!");
    sleep(15);
    CMessage("You should feel the ache %Lol%");
    CMessage("I hope your %Cock% feels like exploding %EmoteHappy%");
    sleep(15);
    CMessage("%EmoteMoan%");
    sleep(15);
    holdEdge("%Edge%",-1,4);
	holdEdge("%Edge%",-1,4);
    CMessage("I know... a little spanking is always good!");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Bend over and get ready to spank your bare ass.");
    CMessage("Count them as you go!");
    SMessage(random("Hit ", "Spank ") + "your ass", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Spanking can certainly be both fun and arousing.");
    SMessage(random("Hit ", "Spank ") + "your ass", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("But, there are plenty of other, more interesting ways to discipline a naughty boy.");
    CMessage("%KneelForMe%");
    CMessage("Put " + randomInt(3, 5) + "clothespins on your %Balls%");
    sleep(20);
    CMessage("And 2 on your nipples");
    sleep(20);
    DoEdges(2, 3, 0,-1,4);
    CMessage("I bet you just loved that!");
    holdEdge("%Edge%",-1,4);
    CMessage("%SitDown%");
    CMessage("You can remove the clothespins now");
    FimGlitters();
    return;
    
    
    FimGlitters();
}
function FimGlitters()
{
    addContact(1);
    removeContact(3);
    removeContact(2);
    removeContact(4);
    return;
    
    Modulo3();
}
function Modulo3()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    setVar("rounds", getVar("%DomLevel%", 0));
    setVar("max_rounds", getVar("rounds", 0));
    //--Command:GotoDommeApathy
	jumpOldApathy();
	return;
    ApathyLevel1();
}
function ApathyLevel1()
{
    setVar("max_rounds", getVar("rounds", 0) * 1);
    if (randomInteger(1, 100) <= 50)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    ApathyLevel2();
}
function ApathyLevel2()
{
    setVar("max_rounds", getVar("rounds", 0) * 2);
    if (randomInteger(1, 100) <= 50)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    ApathyLevel3();
}
function ApathyLevel3()
{
    setVar("max_rounds", getVar("rounds", 0) * 3);
    if (randomInteger(1, 100) <= 50)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    ApathyLevel4();
}
function ApathyLevel4()
{
    setVar("max_rounds", getVar("rounds", 0) * 4);
    if (randomInteger(1, 100) <= 50)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    ApathyLevel5();
}
function ApathyLevel5()
{
    setVar("max_rounds", getVar("rounds", 0) * 5);
    if (randomInteger(1, 100) <= 66)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    inc_rounds();
}
function inc_rounds()
{
    if (getVar("rounds", 0) == getVar("max_rounds", 0))
    {
        start_suffer();
        return;
    }
    setVar("rounds", getVar("rounds", 0) + 1);
    if (randomInteger(1, 100) <= 33)
    {
        inc_rounds();
        return;
    }
    start_suffer();
    return;
    start_suffer();
}
function start_suffer()
{
    CMessage("I think you are enjoying yourself a bit too much right now...");
    CMessage("Let\'s %Play% together instead %Grin%");
    CMessage("Well it will be fun for me at least... %lol%");
    CMessage("Don\'t be %Nervous%. You know I only give you what you want... %EmoteHappy%");
    CMessage("Let\'s start with an edge");
    edge();
    CMessage("Now let\'s see you suffer a bit for me");
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    CMessage("%EmoteMoan% it feels so right when you %Hurt% yourself for me like that! %Emote%");
    CMessage("Such a good %PetName%");
    CMessage("To reward you let\'s...");
    if (randomInteger(1, 100) <= 50)
    {
        cbt_again();
        return;
    }
    CMessage("do another edge! %Grin%");
    edge();
    CMessage("I am such a %Kind% %DomHonorific%");
    before_loop();
    return;
    cbt_again();
}
function cbt_again()
{
    CMessage("make you please me by %Hurting% yourself a bit more %lol%");
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    CMessage("I am such a %Mean% %DomHonorific% %Grin%");
    before_loop();
    return;
    before_loop();
}
function before_loop()
{
    CMessage("Time to %RelaxAndBreathe% for a while and check a few of your lewd %Pictures% %PetName%");
    CMessage("You can %Stroke% slowly if you want to");
    //--Command:ShowLocalImage
	showLocalTeasePicture();
    sleep(20);
    CMessage("Interesting what you can find on a pervert\'s computer...");
    //--Command:ShowLocalImage
	showLocalTeasePicture();
    sleep(20);
    CMessage("I %Love% looking around like that %lol%");
    //--Command:ShowLocalImage
	showLocalTeasePicture();
    sleep(20);
    CMessage("Ok enough rest!");
    edge_cbt_loop();
    return;
    edge_cbt_loop();
}
function edge_cbt_loop()
{
    setVar("rounds", getVar("rounds", 0) - 1);
    if (getVar("rounds", 0) < 0)
    {
        stop_loop();
        return;
    }
    if (randomInteger(1, 100) <= 35)
    {
        edge_cbt_loop_cbt();
        return;
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstroking%",0);
    CMessage("%LetTheEdgeFade%");
    edge_cbt_loop();
    return;
    edge_cbt_loop_cbt();
}
function edge_cbt_loop_cbt()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    edge_cbt_loop();
    return;
    stop_loop();
}
function stop_loop()
{
    CMessage("%ThatsEnough% for now let\'s get back to where we were... %Grin%");
    return;
    //Adapted from png script
    
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("I will provide you with a proper purpose as my good boy, and in return, you will follow my every command.");
    CMessage("That means you and your cock belong to me");
    let answer0 = getInput("More than fair, don\'t you think?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("why don\'t you run a few fingers along the shaft of that %Cock%?");
    CMessage("Also, wet a finger or two on your other hand and massage your nipples for me.");
    CMessage("I want to warm you up a bit first.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You are probably wondering " + random("where this all leads", "what it\'ll be like if you obey me"));
    CMessage("And I will tell you. You\'ll get a chance to cum. " + random("For me", "To make me happy", "To please me"));
    CMessage("And if you do cum when I tell you to, it\'ll feel just that much better, because you know it\'s what I want.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    let answer1 = getInput("Are you still touching your nipples?",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Pinch one of them.");
    CMessage("Now again, but harder.");
    sleep(10);
    CMessage("Good, now put a clothespin on each nipple");
    sleep(15);
    CMessage("That\'s right.");
    edge();
    CMessage("Now grab your balls for me.");
    CMessage("Harder, get a good grip on those balls, how I would grab them.");
    CMessage("%GoodBoy%");
    CMessage("Let me give you more opportunities to show me that - right now - your body is mine.");
    CMessage("Whenever I say \"clench\", you are going to clench your PC muscle, hold on for about 3 seconds, and then release.");
    let answer2 = getInput("Understood?",5);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Now clench.");
    CMessage("Alright, let\'s get going then, shall we? Listen carefully.");
    CMessage("I\'m going to count you down from 100, and when I reach one, I want you right on the edge.");
    CMessage("You can get there a few numbers early and ride it until I reach the end of the countdown");
    CMessage("as long as you are on the brink of cumming when I stop counting.");
    CMessage("You can stroke however you want, but I have two conditions.");
    CMessage("First. At NO POINT during my countdown are you allowed to stop stroking. Change speed or intensity if you must, but don't ever stop.");
    CMessage("So pace yourself, I need you to last.");
    let answer3 = getInput("Second. Don\'t you DARE fucking cum. Got it?",5);
    if (answer3.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer3.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Let\'s begin.");
    CMessage("100");
    sleep(randomInt(2, 3));
    CMessage("99");
    sleep(2);
    CMessage("98");
    sleep(randomInt(1, 3));
    CMessage("97");
    sleep(randomInt(2, 3));
    CMessage("clench");
    CMessage("96");
    sleep(randomInt(2, 3));
    CMessage("95");
    sleep(2);
    CMessage("94");
    sleep(randomInt(1, 3));
    CMessage("93");
    sleep(randomInt(2, 3));
    CMessage("92");
    sleep(2);
    CMessage("91");
    sleep(randomInt(1, 3));
    CMessage("90");
    sleep(randomInt(2, 3));
    let answer4 = getInput("Tighten the grip on your balls! Were you still grabbing them?",5);
    if (answer4.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer4.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("89");
    sleep(randomInt(2, 3));
    CMessage("88");
    sleep(randomInt(2, 3));
    CMessage("clench");
    CMessage("87");
    sleep(randomInt(2, 3));
    CMessage("86");
    sleep(randomInt(1, 3));
    CMessage("85");
    sleep(2);
    CMessage("84");
    sleep(2);
    CMessage("clench");
    CMessage("83");
    sleep(2);
    CMessage("82");
    sleep(randomInt(1, 3));
    CMessage("81");
    sleep(2);
    CMessage("80");
    sleep(randomInt(1, 3));
    CMessage("Now you can let go of your balls.");
    CMessage("Give those nipples some attention again.");
    CMessage("For the rest of this countdown, whenever you clench, also pinch one of your nipples.");
    CMessage("Let\'s try it out. Clench!");
    CMessage("79");
    sleep(2);
    CMessage("78");
    sleep(2);
    CMessage("77");
    sleep(2);
    CMessage("76");
    sleep(2);
    CMessage("75");
    sleep(2);
    CMessage("clench");
    CMessage("74");
    sleep(2);
    CMessage("73");
    sleep(2);
    CMessage("clench");
    CMessage("72");
    sleep(2);
    CMessage("71");
    sleep(2);
    CMessage("70");
    sleep(2);
    CMessage("I hope you\'re not too close yet, you still have some way to go.");
    CMessage("You wouldn\'t want to fail already. That would be such a disappointment to me, and to yourself of course.");
    CMessage("Clench!");
    CMessage("69");
    sleep(2);
    CMessage("68");
    sleep(2);
    CMessage("67");
    sleep(2);
    CMessage("66");
    sleep(2);
    CMessage("clench");
    CMessage("slap the head of your cock on every number until I reach 60");
    CMessage("65");
    sleep(2);
    CMessage("64");
    sleep(2);
    CMessage("63");
    sleep(2);
    CMessage("clench");
    CMessage("62");
    sleep(2);
    CMessage("61");
    sleep(2);
    CMessage("61");
    sleep(2);
    CMessage("61");
    sleep(2);
    CMessage("clench");
    CMessage("61");
    sleep(2);
    CMessage("60");
    sleep(2);
    CMessage("That\'s unfair you think? Oh we are just getting started.");
    let answer5 = getInput("Are you keeping up with all the slaps and nipple pinches?",5);
    if (answer5.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer5.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("59");
    sleep(2);
    CMessage("clench");
    CMessage("58");
    sleep(2);
    CMessage("57");
    sleep(2);
    CMessage("56");
    sleep(2);
    CMessage("clench");
    CMessage("55");
    sleep(2);
    CMessage("54");
    sleep(2);
    CMessage("53");
    sleep(2);
    CMessage("52");
    sleep(2);
    CMessage("51");
    sleep(2);
    CMessage("50");
    sleep(2);
    CMessage("49");
    sleep(2);
    CMessage("48");
    sleep(2);
    CMessage("clench");
    CMessage("47");
    sleep(2);
    CMessage("46");
    sleep(2);
    CMessage("45");
    sleep(2);
    CMessage("44");
    sleep(2);
    CMessage("43");
    sleep(2);
    CMessage("pinch the other nipple as hard as you can");
    CMessage("42");
    sleep(2);
    CMessage("41");
    sleep(2);
    CMessage("40");
    sleep(2);
    CMessage("Is this too slow for you? Let me go faster.");
    CMessage("That means you should stroke faster, too.");
    //--UNINTERPRETED LINE:39 @RTOn
	setRapidText(true);
	CMessage("39");
    CMessage("38");
    CMessage("37");
    CMessage("36");
    CMessage("35");
    CMessage("34");
    CMessage("33");
    CMessage("32");
    CMessage("31");
    CMessage("30");
    CMessage("29");
    CMessage("28");
    CMessage("27");
    CMessage("26");
    CMessage("25");
    CMessage("24");
    CMessage("23");
    CMessage("22");
    CMessage("21");
	CMessage("20");
    //--UNINTERPRETED LINE:20 @RTOff
	setRapidText(false);
    CMessage("clench");
    CMessage("Why don\'t you hold your breath for the next 10?");
    CMessage("19");
    sleep(2);
    CMessage("18");
    sleep(2);
    CMessage("clench");
    CMessage("17");
    sleep(2);
    CMessage("16");
    sleep(2);
    CMessage("15");
    sleep(2);
    CMessage("14");
    sleep(2);
    CMessage("13");
    sleep(2);
    CMessage("12");
    sleep(2);
    CMessage("11");
    sleep(2);
    CMessage("clench");
    CMessage("11");
    sleep(2);
    CMessage("10");
    sleep(2);
    CMessage("you may breathe again.");
    CMessage("I hope you\'re getting close, only a few numbers left.");
    CMessage("9");
    sleep(2);
    CMessage("8");
    sleep(2);
    CMessage("7");
    sleep(2);
    CMessage("6");
    sleep(2);
    CMessage("5");
    sleep(2);
    CMessage("4");
    sleep(2);
    CMessage("3");
    sleep(2);
    CMessage("2");
    sleep(2);
    CMessage("and 1.");
    CMessage("%Lol%");
    CMessage("That wasn\'t so bad.");
    CMessage("Hm, so far so good");
    let answer6 = getInput("Do you see how exciting and good it feels to obey me?",5);
    if (answer6.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer6.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("In theory, that should be enough motivation for you.");
    if(!getVar("av_fetish_pain", false))
    {
        nju37i();
        return;
    }
    CMessage("But I will give you something else, another form of motivation.");
    CMessage("A reminder of what happens to those who stupidly refuse to follow my commands.");
    CMessage("Slapping your own balls can be quite painful.");
    CMessage("why don\'t you give it a try, so you know what not to bring on yourself.");
    CMessage("I think five slaps will do, at least to give you a taste.");
    CMessage("But I know it\'s hard. So let me help you.");
    CMessage("I\'ll count them out for you.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle05*.mp3");
    sleep(20);
    CMessage("Hey, that one wasn\'t all that bad.");
    CMessage("Let\'s start properly, now that you have an idea of what I want you to do.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
    sleep(20);
    CMessage("Yes, Good boy!");
    CMessage("Oh I know it hurts, little boy, but you\'re making me so happy.");
    CMessage("Subjecting yourself to parts of your possible punishment just because I say so.");
    CMessage("Because you don\'t want to disappoint me.");
    CMessage("That pain in your balls is a reminder of that, be proud of it.");
    CMessage("And you did well.");
    CMessage("So I promise, no more torture for your balls for now, as long as you do as I say.");
    CMessage("I think you should change position.");
    CMessage("get on your knees, head against the chair. Ass up.");
    CMessage("Yes, I think that\'s a great position for you to be in. Vulnerable and submissive.");
    CMessage("That should remind you of your position.");
    CMessage("%StartStroking%");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("with the other hand, rub around your asshole.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("don\'t worry. It\'s not what I have in mind right now.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Well, at least the fucking. I AM going to play with your ass a bit though.");
    }
    CMessage("So here\'s the deal. Whenever you hear the whip, you\'re going to spank yourself for me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("OK, not bad, but a little harder.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Better, but keep hitting harder with each snap.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I hope you\'re still touching that cock. Clench.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I\'m quite enjoing myself, actually.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I love the thought of you spanking your own ass for me.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I bet you love it, too. Admit it.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Clench.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Alright, this is going well. Time to spice it up a bit.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("I\'m going to need you to get to the edge again.");
    CMessage("So I\'ll slap 10 times, and until I\'m done you will reach the edge and ride it.");
    CMessage("But to make it more interesting, you\'re going to hold your breath again.");
    CMessage("It\'s too easy otherwise.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3",true);
    CMessage("Ok, ready?");
    CMessage("Hold your breath, %Edge% and slap your balls!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank10.mp3");
    sleep(10);
    CMessage("Good boy!");
    CMessage("%Stop%", 0);
    CMessage("Well that was fun! I bet you think so too.");
    CMessage("Does your ass hurt? It\'s probably more red than usual.");
    CMessage("What about those balls? %Lol%");
    CMessage("%SitDown%");
    return;
    nju37i();
}
function nju37i()
{
    CMessage("Well that was fun! I bet you think so too.");
    return;
}