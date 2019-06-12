DMessage("AV_ModGeneral9: start");
main();
DMessage("AV_ModGeneral9: end");
function main()
{
    if(getVar("AV_ModGeneral9_NotFirstTime", false))
    {
        AV_ModGeneral9_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral9", 0);
    setVar("AV_ModGeneral9_NotFirstTime", true);
    AV_ModGeneral9_NotFirstTime();
}
function AV_ModGeneral9_NotFirstTime()
{
    if (getVar("AV_ModGeneral9", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral9", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral9", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral9", getVar("AV_ModGeneral9", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral9", getVar("AV_ModGeneral9", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral9", getVar("AV_ModGeneral9", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral9", getVar("AV_ModGeneral9", 0) + 1000);
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
    setVar("AV_ModGeneral9", 0);
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("Oh my, what I could do with you.");
    CMessage("Stand up %PetName%, stand up and spread your legs");
    sleep(15);
    CMessage("Now that you are suitably frustrated");
    CMessage("I want you to exercise your PC muscle.");
    CMessage("I want you to, without touching it, make your cock bounce.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And for every bounce you are to hit yourself in the balls");
    }
    CMessage("Start now...");
    CMessage("Oh, you like that don\'t you?");
    CMessage("And you are so good at it");
    CMessage("Keep going...");
    sleep(20);
    CMessage("Now I am going to test you.");
    CMessage("Don\'t look at me like that");
    CMessage("everything up to now was simply a warm up.");
    if(getVar("av_fetish_cei", false))
    {
        CEIPart();
        return;
    }
    if(getVar("av_fetish_pain", false))
    {
        PainPart();
        return;
    }
    DoEdges(3, 3, 0);
    CMessage("Hmmm...");
    ContTea2();
    return;
    CEIPart();
}
function CEIPart()
{
    CMessage("You will not hurt yourself for me.");
    CMessage("No, I just want to see the tears of frustration in your eyes as you fight back the desire to cum.");
    CMessage("Get yourself a teaspoon.");
    sleep(30);
    CMessage("I have only 2 instructions for you");
    CMessage("1) Do not cum");
    CMessage("2) Fill your teaspoon with pre-cum.");
    CMessage("I would advise bending the spoon so that it can be put aside without spilling its contents.");
    CMessage("I will not be prescriptive here.");
    CMessage("You may order whatever videos you wish and stroke your tiny friend however you want.");
    CMessage("I would recommend edging as much as possible however, otherwise you may be here all day.");
    CMessage("Once you have collected your designated amount");
    CMessage("pour it into the palm of your hand and rub both hands gently together.");
    CMessage("Now rub that pre-cum all over your face.");
    CMessage("Leave it there to dry");
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("yes")))
    {
        answer0 = getInput("Done %SubName%?");
    }
    if (answer0.isLike("done", "ready", "yes"))
    {
        CMessage("%Good%");
		if(getVar("av_fetish_pain", false))
		{
			PainPart();
			return;
		} else {
			ContTea2();
		}
        return;
    }
    PainPart();
}
function PainPart()
{
    CMessage("attach 2 clothespins to your nipple");
    sleep(20);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("attach " + randomInt(2, 4) + "clothespins to your %Balls%");
    sleep(20);
    DoEdges(3, 3, 0);
    CMessage("Hit each butt cheek " + (java.lang.Math.round(randomInt(10, 30) / 10.0) * 10) + "times");
    sleep(30);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    ContTea2();
}
function ContTea2()
{
    CMessage("Good boy...");
    CMessage("%SitDown%, remove all and clean yourself now...");
    CMessage("I will give you 30 seconds");
    sleep(30);
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("Good.");
    CMessage("You sitting at your computer with your cock out.");
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage(random("fully ", "completely ") + "naked for me...");
    }
    CMessage("The idea of it turns me on and makes me want to touch myself.");
    CMessage("Why don\'t you touch yourself for me?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("The name of this game is control.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I need to see if you are an animal or if you have the self awareness to control your instincts.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Your instincts will be to lose control, and only an animal sucumbs to their instincts.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("I need to see if you have the self awareness to control your instincts.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Your instincts will be to lose control, and only an bad boys sucumbs to their instincts.");
    }
    CMessage("You call that %Stroking%?");
    CMessage("Stroking requires your full essence.");
    CMessage("%Stroke% faster");
    CMessage("I\'m afraid there is nor recourse but punishment.");
    CMessage("The willing acceptance of punishment and the ability to withstand it...");
    setTempVar("av_intera_006", true);
    if(getVar("av_fetish_rough", false))
    {
        CMessage("separate us from the beast in the field.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("separates the good from the bad boys.");
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("%KneelForMe%");
    CMessage("Look at you laying down, your throbbing cock can hardly wait.");
    CMessage("Are you aroused?");
    CMessage("I remember back in school how thrilled I was at the realization that");
    CMessage("the boys struggled internally to control their eyes as they talked to me.");
    if(!getVar("av_fetish_pain", false))
    {
        SKPA01();
        return;
    }
    CMessage("Ok collect saliva from your mouth and put it on your nipples");
    sleep(15);
    CMessage("attach 1 clothespin on each nipple");
    sleep(20);
    CMessage("now rotate the clothespin on nipples 5 time for at least 90 degres on the left and then on the right.");
    sleep(20);
    CMessage("take the spoon and hit each ass cheek 10 times as hard as you can.");
    sleep(20);
    let answer0 = getInput("Do you have enough?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Quiet %Slave%, I don\'t want to hear your pathetic excuses.");
        SKPA01();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Good%");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Your torment amuses me, long may it continue.");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Let\'s coninue so...");
    }
    CMessage("How are those balls feeling?");
    CMessage("Are they bruised yet?");
    //CMessage("Get to the edge of orgasm whilst I think about your next task.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    startEdging("Get to the edge of orgasm whilst I think about your next task.");
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("It needs to be something juicy, something...");
    CMessage("ah, I know.");
    if(getVar("av_fetish_bondage", false))
    {
        CMessage("Firstly tie up your balls and cock hard");
        //sleep(33);
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    }
    CMessage("You will stroke only the head with dominant hand.");
    CMessage("Every 10 strokes you will give your balls 5 hard slaps with the spoon.");
    CMessage("You are not allowed to edge");
    SKPA01();
}
function SKPA01()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Your balls will be such an interesting colour by the end of today.");
    CMessage("They may also be swollen.");
    CMessage("I trust you are not desperate to cum yet.");
    CMessage("I hope not, because we haven\'t even started");
    CMessage("and whilst you will get an opportunity to blow your load, it may not be to your liking.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Are you managing to keep the animal tame inside you?");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Are you managing to be a good boy?");
    }
    CMessage("Show me...");
    DoEdges(2, 2, 0);
    if(!getVar("av_fetish_pain", false))
    {
        sleep(20);
        SKPA02();
        return;
    }
    CMessage("There are other torments that can be applied to your balls.");
    CMessage("More Clothespins for example.");
    CMessage("Now then %PetName%, you are going to apply " + randomInt(3, 5) + "to your balls.");
    sleep(33);
    SKPA02();
}
function SKPA02()
{
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("no edging.");
    CMessage("Do you ache?");
    CMessage("Can you feel the desire to cum building within you?");
    CMessage("If you perform well today, there may even be a chance to empty your seed");
    CMessage("I require you to add to the ache in your balls by exercising your PC muscle");
    CMessage("the muscle you use to jump your cock up and down.");
    CMessage("Squeeze it now and see your cock rise.");
    delVar("av_intera_006");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("So here is your exercise regime.");
    CMessage("Clench your PC muscle " + (java.lang.Math.round(randomInt(10, 30) / 10.0) * 10) + " times quickly");
    sleep(33);
    CMessage("Good boy...");
    CMessage("Now...");
    CMessage("Clench and hold for " + random("5 seconds and release for 5 seconds. Do this 10 times", "10 seconds and release for 10 seconds. Do this 5 times"));
    CMessage("Good...");
    CMessage("%SitDown%");
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
    CMessage("Whats the matter %Slave%?");
    CMessage("Is this little bit of stroking too much for you?");
    CMessage("I wanna see some stamina from you %PetName%");
    CMessage("I guess we have to get a little bit more serious here");
    CMessage("Whats the matter %SubName%?");
    CMessage("You have this expression in your eyes %Laugh%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("Now...get on your knees and spread them as wide as you possible can and sit back on your legs");
    sleep(10);
    CMessage("There you go.. thats better %PetName%");
    CMessage("So..");
    CMessage("I bet you would like to have permission to touch your cock again right?");
    CMessage("put your hand back on your cock!");
    CMessage("No stroking yet though.");
    CMessage("You have to wait for permission");
    CMessage("Just feel it growing in your hand.");
    CMessage("Feel the veins and how sensitive and tender your cock is getting...");
    CMessage("Longing for you to stroke it.");
    CMessage("Are you getting anxious %Slave%?");
    CMessage("%StartStroking%");
	//setStrokingNoTaunt();
    CMessage("Stroke it very slowly and softly");
    CMessage("Caress your achy balls with the other hand");
    CMessage("My oh my look at you..");
    CMessage("Did i saw a little quivering over there?");
    CMessage("Someone sems to be getting a little aroused?");
    CMessage("Isnt that so %PetName%?");
    CMessage("Well.. keep going at that pace");
    CMessage("Eyes up here %PetName%..");
    CMessage("Look into my eyes and nowhere else!");
    CMessage("Speed up a little");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Would you like to feel my feet on your cock?");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Dont you dare look at them!");
    }
    CMessage("Stay focused on my face %PetName%");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I bet you would really like that");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("My toes rubbing up and down your shaft");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Slowly milking out tiny drops of precum");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Think about that..");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Would you let me do that?");
    }
    CMessage("Switch your hands and stroke faster!");
    sleep(20);
    CMessage("Twist and squezze your nipples for me while you stroke");
    sleep(20);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    if (randomInteger(1, 100) <= 50)
    {
        AVSkipDouble();
        return;
    }
    CMessage("And now...");
    DoEdges(2, 2, 0);
    AVSkipDouble();
}
function AVSkipDouble()
{
    CMessage("%GoodBoy%");
    CMessage("Hands on your side!");
    CMessage("Let go of that cock!");
    CMessage("So..");
    CMessage("I assume you would like to play with yourself some more?");
    CMessage("You have to earn that right to touch yourself %Slave%..");
    CMessage("Gather some saliva with your finger and rub it over your nipples..");
    CMessage("Very good..");
    CMessage("Now play with them again..");
    CMessage("I want them to be as hard as your cock is!");
    CMessage("Thats what i like to see..");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now put 2 clothespins on your nipples");
        sleep(20);
    }
    CMessage("Now you have to take the long and frustrating route with me");
    CMessage("Take one hand and cup your balls with it");
    CMessage("Are they starting to ache slave?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Just pump that %Cock%");
    CMessage("Long frustrating strokes.");
    CMessage("I want to see you suffer for me slave");
    CMessage("Faster!!");
    holdEdge();
    CMessage("If you want to please me today, then will have to go way beyond your limits for me");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now put 4 clothespins on your " + random("balls", "ears"));
        sleep(20);
    }
    CMessage("Start massaging your swollen balls %PetName%");
    CMessage("They will need alot of love today in order to endure all the ache that is coming");
    CMessage("I want you to change your position now slaveboy..");
    CMessage("Close your legs together while you kneel");
    CMessage("Your knees have to make contact");
    CMessage("Keep your back straight and point your cock torwards me slave");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("How are you feeling slave?");
    CMessage("Is the ache gettin bigger?");
    CMessage("Need to cum?");
    CMessage("You look a bit shaky over there");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    //CMessage("Sit in your chair");
	CMessage("%SitDown%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And remove all clothespins");
        sleep(20);
    }
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("%LittleGame%");
    CMessage("We will pick a card and whoever has the highest card wins the round");
    setVar("AV_CardGamePin", 0);
    CMessage("If I win, you will put a clothespin on your body");
    setVar("AV_CardGameEdge", 0);
    CMessage("If you win, you can edge for me...");
    if(getVar("AV_DommeMistress", false))
    {
        setVar("AV_CardGameLevel", 10);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        setVar("AV_CardGameLevel", 5);
    }
    CMessage("Whoever gets " + getVar("AV_CardGameLevel", "") + "rounds, wins the game");
    CMessage("If I win the game, I can have some fun punishing you a little more");
    CMessage("If you win the game, maybe you can have a second chance if I decide to deny your orgasm today...");
    CMessage("%LetStart%");
    CardStart();
}
function CardStart()
{
    setVar("AV_CardGameSubA", 0);
    setVar("AV_CardGameDomA", 0);
    CMessage(random("Your card is a ", "You got a ") + "...");
    switch(random("a01", "a02", "a03", "a04", "a05", "a06", "a07", "a08", "a09", "a10", "a11", "a12", "a13"))
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
        case "a04":
        a04();
        return;
        break;
        case "a05":
        a05();
        return;
        break;
        case "a06":
        a06();
        return;
        break;
        case "a07":
        a07();
        return;
        break;
        case "a08":
        a08();
        return;
        break;
        case "a09":
        a09();
        return;
        break;
        case "a10":
        a10();
        return;
        break;
        case "a11":
        a11();
        return;
        break;
        case "a12":
        a12();
        return;
        break;
        case "a13":
        a13();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("Ace");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 1);
    CardGameA();
    return;
    a02();
}
function a02()
{
    CMessage("Two");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 2);
    CardGameA();
    return;
    a03();
}
function a03()
{
    CMessage("Three");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 3);
    CardGameA();
    return;
    a04();
}
function a04()
{
    CMessage("Four");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 4);
    CardGameA();
    return;
    a05();
}
function a05()
{
    CMessage("Five");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "05" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 5);
    CardGameA();
    return;
    a06();
}
function a06()
{
    CMessage("Six");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "06" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 6);
    CardGameA();
    return;
    a07();
}
function a07()
{
    CMessage("Seven");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "07" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 7);
    CardGameA();
    return;
    a08();
}
function a08()
{
    CMessage("Eight");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "08" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 8);
    CardGameA();
    return;
    a09();
}
function a09()
{
    CMessage("Nine");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "09" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 9);
    CardGameA();
    return;
    a10();
}
function a10()
{
    CMessage("Ten");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 10);
    CardGameA();
    return;
    a11();
}
function a11()
{
    CMessage("jack");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 11);
    CardGameA();
    return;
    a12();
}
function a12()
{
    CMessage("Queen");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 12);
    CardGameA();
    return;
    a13();
}
function a13()
{
    CMessage("King");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameSubA", getVar("AV_CardGameSubA", 0) + 13);
    CardGameA();
    return;
    CardGameA();
}
function CardGameA()
{
    CMessage(random("My Card is a", "and I got a", "what I got is a"));
    switch(random("a01D", "a02D", "a03D", "a04D", "a05D", "a06D", "a07D", "a08D", "a09D", "a10D", "a11D", "a12D", "a13D"))
    {
        case "a01D":
        a01D();
        return;
        break;
        case "a02D":
        a02D();
        return;
        break;
        case "a03D":
        a03D();
        return;
        break;
        case "a04D":
        a04D();
        return;
        break;
        case "a05D":
        a05D();
        return;
        break;
        case "a06D":
        a06D();
        return;
        break;
        case "a07D":
        a07D();
        return;
        break;
        case "a08D":
        a08D();
        return;
        break;
        case "a09D":
        a09D();
        return;
        break;
        case "a10D":
        a10D();
        return;
        break;
        case "a11D":
        a11D();
        return;
        break;
        case "a12D":
        a12D();
        return;
        break;
        case "a13D":
        a13D();
        return;
        break;
    }
    a01D();
}
function a01D()
{
    CMessage("Ace");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 1);
    CardGameB();
    return;
    a02D();
}
function a02D()
{
    CMessage("Two");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 2);
    CardGameB();
    return;
    a03D();
}
function a03D()
{
    CMessage("Three");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 3);
    CardGameB();
    return;
    a04D();
}
function a04D()
{
    CMessage("Four");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 4);
    CardGameB();
    return;
    a05D();
}
function a05D()
{
    CMessage("Five");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "05" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 5);
    CardGameB();
    return;
    a06D();
}
function a06D()
{
    CMessage("Six");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "06" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 6);
    CardGameB();
    return;
    a07D();
}
function a07D()
{
    CMessage("Seven");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "07" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 7);
    CardGameB();
    return;
    a08D();
}
function a08D()
{
    CMessage("Eight");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "08" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 8);
    CardGameB();
    return;
    a09D();
}
function a09D()
{
    CMessage("Nine");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "09" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 9);
    CardGameB();
    return;
    a10D();
}
function a10D()
{
    CMessage("Ten");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 10);
    CardGameB();
    return;
    a11D();
}
function a11D()
{
    CMessage("jack");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 11);
    CardGameB();
    return;
    a12D();
}
function a12D()
{
    CMessage("Queen");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 12);
    CardGameB();
    return;
    a13D();
}
function a13D()
{
    CMessage("King");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "cards3" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    setVar("AV_CardGameDomA", getVar("AV_CardGameDomA", 0) + 13);
    CardGameB();
    return;
    CardGameB();
}
function CardGameB()
{
    if (getVar("AV_CardGameDomA", 0) == getVar("AV_CardGameSubA", 0))
    {
        EmpateA();
        return;
    }
    if (getVar("AV_CardGameDomA", 0) > getVar("AV_CardGameSubA", 0))
    {
        DommeWonA();
        return;
    }
    if (getVar("AV_CardGameDomA", 0) < getVar("AV_CardGameSubA", 0))
    {
        SubWonA();
        return;
    }
    DommeWonA();
}
function DommeWonA()
{
    CMessage("%Great%, I Won");
    setVar("AV_CardGamePin", getVar("AV_CardGamePin", 0) + 1);
    CMessage(random("Put ", "Place ") + "a " + random("clothespin ", "pin ") + "on " + random("your ", "any place of your ") + random("body", "slave body"));
    sleep(20);
    if (randomInteger(1, 100) <= 75)
    {
        AVPositions();
        return;
    }
    CMessage("get on all four, ass up");
    SkipPositions();
    return;
    AVPositions();
}
function AVPositions()
{
    CMessage(random("stand up", "%KneelForMe%", "%SitDown%"));
    sleep(10);
    CMessage(random("hands behind your back", "hands behind your head", "arms open"));
    SkipPositions();
}
function SkipPositions()
{
    if (getVar("AV_CardGamePin", 0) == getVar("AV_CardGameLevel", 0))
    {
        MissWin();
        return;
    }
    CMessage(random("continuing", "next round"));
    CardStart();
    return;
    SubWonA();
}
function SubWonA()
{
    CMessage(random("Damn ", "Aww ", "%ExclaimFuck% ") + "you won");
    setVar("AV_CardGameEdge", getVar("AV_CardGameEdge", 0) + 1);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    if (getVar("AV_CardGameEdge", 0) == getVar("AV_CardGameLevel", 0))
    {
        SubWin();
        return;
    }
    CMessage(random("continuing", "next round"));
    CardStart();
    return;
    EmpateA();
}
function EmpateA()
{
    CMessage("A Tie!!");
    CMessage("Nobody wins...");
    CardStart();
    return;
    SubWin();
}
function SubWin()
{
    CMessage("You won the game");
    //--Command:MoodBest
	setMood("best");
    CMessage("Congratulations " + random("%SubName% ", "%PetName% ") + "but remember, you still can be denied today...");
    CMessage("%SitDown% and remove all clothespins...");
    sleep(20);
    return;
    MissWin();
}
function MissWin()
{
    CMessage("I won");
    CMessage("Fun Time for me");
    CMessage("%SitDown% and remove all clothespins...");
    switch(random("Puni1", "Puni2", "Puni3", "Puni4"))
    {
        case "Puni1":
        Puni1();
        return;
        break;
        case "Puni2":
        Puni2();
        return;
        break;
        case "Puni3":
        Puni3();
        return;
        break;
        case "Puni4":
        Puni4();
        return;
        break;
    }
    Puni1();
}
function Puni1()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish1.js");
    return;
    return;
    Puni2();
}
function Puni2()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish2.js");
    return;
    return;
    Puni3();
}
function Puni3()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
    return;
    return;
    Puni4();
}
function Puni4()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    return;
    return;
}