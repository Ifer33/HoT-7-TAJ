DMessage("AV_ModGeneral44: start");
main();
DMessage("AV_ModGeneral44: end");
function main()
{
    if(getVar("AV_ModGeneral44_NotFirstTime", false))
    {
        AV_ModGeneral44_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral44", 0);
    setVar("AV_ModGeneral44_NotFirstTime", true);
    AV_ModGeneral44_NotFirstTime();
}
function AV_ModGeneral44_NotFirstTime()
{
    if (getVar("AV_ModGeneral44", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral44", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral44", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral44", getVar("AV_ModGeneral44", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral44", getVar("AV_ModGeneral44", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral44", getVar("AV_ModGeneral44", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral44", getVar("AV_ModGeneral44", 0) + 1000);
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
    setVar("AV_ModGeneral44", 0);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend1Name%");
    addContact(2);
    SMessage("%Hi% %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    CMessage("I love it when you deny yourself an orgasm.");
    CMessage("When you edge yourself and get really close and then you dont cum.");
    CMessage("I like when you do that over and over again.");
    CMessage("I find that it makes you more subservient.");
    CMessage("It makes you want me more.");
    CMessage("I could put you in chastity and control your orgasm that way.");
    CMessage("But when you do it yourself, when you deny your orgasm when all you want to do is cum");
    CMessage("now thats obedience.");
    CMessage("That shows me how devoted you are to being a good slave.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want you to do that right now.");
    CMessage("Show me how devoted you are.");
    CMessage("Show me how much control I have over you.");
    CMessage("Go on, stroke, edge yourself.");
    DoEdges(2, 3, 0);
    CMessage("%GoodBoy%");
    CMessage("I know you %SubName%");
    CMessage("theres something about being teased and denied, seduced and toyed with.");
    DoEdges(2, 3, 0);
    CMessage("I love when you deny yourself for me.");
    CMessage("Seeing you get that worked up");
    CMessage("that excited and then knowing that youre going to stop");
    CMessage("just when its the most difficult");
    CMessage("right when you feel that orgasm.");
    DoEdges(2, 3, 0);
    CMessage("Bringing yourself right to the edge and then stopping.");
    CMessage("Doing it over and over again.");
    CMessage("Each time growing more desperate.");
    CMessage("And each time you feel yourself become even more subservient.");
    DoEdges(2, 3, 0);
    let answer0 = getInput("You feel it, dont you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I want you to feel yourself going deeper and deeper into submission.");
    CMessage("You need this.");
    CMessage("How bad do you want to cum?");
    let answer1 = getInput("Do you want to feel this way forever or do you want to let go and cum?", 5);
    if (answer1.isTimeout())
    {
        a22hcf8e();
        return;
    }
    if (answer1.isLike("forever"))
    {
        CMessage("We should tell %DomName% about that, right?");
    }
    else
    {
        CMessage("%Lol%");
    }
    a22hcf8e();
}
function a22hcf8e()
{
    SMessage("Your Domme is back", -1, 2);
    addContact(1);
    CMessage("%Hi% %PetName%, still alive?");
    removeContact(2);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend3Name%");
    addContact(4);
    SMessage("%Hi% %EmoteLaugh%", -1, 4);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 4);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%KneelForMe%");
    CMessage("You\'re being so good kneeling before me.");
    CMessage("You know you dont deserve to cum.");
    CMessage("You dont want to cum. You get turned on being denied.");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("You may not even stroke your horny dick.");
    CMessage("Let your cock twitch with excitement, but don\'t you dare touch it.");
    CMessage("Do whatever you must to prevent yourself from uncontrollably stroking your cock.");
    CMessage("Put 2 clothespins in each nipple");
    sleep(25);
    CMessage("You could go days, weeks and even months without cumming");
    CMessage("We need to hurt those %Balls%");
    CMessage("It\'s the price you must pay for the privilege of being allowed to stroke before me.");
    CMessage("Get the ruler ready");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%Okay%, you earned the right to stroke a little...");
    CMessage("Stroke");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "5toStop.mp3");
    sleep(10);
    CMessage("You do NOT deserve to cum.");
    CMessage("All you can do is stay there in agony, suffering for me.");
    CMessage("Suffer until you can\'t take it anymore.");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    let answer0 = getInput("Are you ready to edge for Me?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Think I can whip you into such a horny state");
    CMessage("that you can stay hard even with clothespins on your tied balls?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "StrokeForMe0*.mp3");
    CMessage("How about one on the tip of your cock?");
    CMessage("If you\'re horny enough you\'ll do anything I tell you to do.");
    CMessage("While you\'re jerking and anticipating that rush you will feel at the point of orgasm");
    CMessage("it\'s easy to manipulate you into doing all sorts of embarrassing things.");
    DoEdges(2, 3, 0);
    CMessage("Now, put " + randomInt(2, 3) + "clothespins on these tied balls");
    sleep(25);
    CMessage("Hands on your head");
    let answer1 = getInput("You already feel more subservient, dont you?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("A little bit weaker.");
    CMessage("I know I have that effect on you.");
    CMessage("A beautiful dominant woman, teasing you.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Im going to count you down to your denial.");
    CMessage("Youre going to completely abandon that cock.");
    CMessage("When I get to one, youre going to completely take that hand off of your cock.");
    CMessage("10...");
    CMessage("9...");
    CMessage("8...");
    CMessage("7...");
    CMessage("6...");
    if (randomInteger(1, 100) <= 30)
    {
        CountStop3();
        return;
    }
    CMessage("5...");
    if (randomInteger(1, 100) <= 40)
    {
        CountStop3();
        return;
    }
    CMessage("4...");
    if (randomInteger(1, 100) <= 50)
    {
        CountStop3();
        return;
    }
    CMessage("3...");
    if (randomInteger(1, 100) <= 60)
    {
        CountStop3();
        return;
    }
    CMessage("2...");
    if (randomInteger(1, 100) <= 70)
    {
        CountStop3();
        return;
    }
    CMessage("1...");
    CountStop3();
}
function CountStop3()
{
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("You may remove all clothespins");
    CMessage("%SitDown%");
    SMessage("Your Domme is back", -1, 4);
    addContact(1);
    CMessage("%Hi% %PetName%, still alive?");
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend2Name%");
    addContact(3);
    SMessage("HI %EmoteLaugh%", -1, 3);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I\'m a big sadist and I love torturing your %Cock%.");
    CMessage("So I\'m going to give you some assignments so you can hurt your dick");
    CMessage("just to please me.");
    CMessage("No pleasure for you");
    CMessage("Why?");
    let answer0 = getInput("Cause we both know you don\'t deserve it, do you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("You only deserve pain and suffering.");
    CMessage("Now grab yourself by the balls and squeeze as hard as you can.");
    CMessage("Harder, make yourself cry.");
    CMessage("I know you\'ll suffer for me.");
    CMessage("let go and Get that ruler ready");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I want you to be so sore that it hurts next time you jerk off.");
    CMessage("Do it over and over and over again.");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("get some clothespins and put them on your nipples for me.");
    sleep(20);
    CMessage("Suffer for me.");
    CMessage("I don\'t care how much it hurts, you\'ll do anything for me.");
    CMessage("But I will help you take the pain");
    DoEdges(1, 2, 0);
    CMessage("I love taking advantage of you.");
    let answer1 = getInput("Take your nipple clamps off, it kinda hurts doesn\'t it?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Rub them a little.");
    CMessage("Give them a little pinch");
    CMessage("and now you\'re going to put them back on.");
    CMessage("Now start edging your horny dick again.");
    DoEdges(1, 2, 0);
    CMessage("Now pull on those clothespins, twist them.");
    CMessage("Make them sore.");
    CMessage("I\'ll bet now you really feel like a bitch.");
    CMessage("Good I want you to feel like a sissy bitch for me with clothespins on your nipples");
    CMessage("Look what I\'ve turned you into.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I like torturing your nipples.");
    CMessage("Now take the clothespins off again and then slap those sore nipples!");
    CMessage("Squeeze them again.");
    CMessage("Abuse your nipples at my command.");
    CMessage("Keep jerking");
    CMessage("If you wanna cum %GeneralTime%, you need to be tortured.");
    CMessage("And this pain will intensify your orgasm.");
    CMessage("Good bitch.");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("Rulers ready, and...");
    SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%GoodBoy%");
    SMessage("Your Domme is back", -1, 3);
    addContact(1);
    CMessage("Hi %PetName%, still alive?");
    removeContact(3);
    return;
    
    Modulo4();
}
function Modulo4()
{
    CMessage("I have a special place I\'m going to take you to today.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "c347dka()");
    CMessage("We\'re going to have some edging tease and denial fun %GeneralTime%.");
    CMessage("%Edge%");
    CMessage("I want you to follow my instructions.");
    CMessage("Do exactly as I say.");
    CMessage("Bring yourself to the edge");
    CMessage("It feels so good.");
    CMessage("I know you\'re growing so horny.");
    CMessage("Edge now!!");
    //sleep(20);
	let t=0;
	while(t<20){
		sleep(1);
		t++;
	}
    c347dka();
	return;
}
function c347dka()
{
	if(getVar("done",false)){
		return;
	}else{
		setTempVar("done",true);
	}
    CMessage("%holdtheedge%");
    setTempVar("edging", false);
    setTempVar("holdingedge", true);
    //stopStrokingAll();
    CMessage("You love that sensation of feeling yourself building");
    CMessage("working closer and closer without going over.");
    CMessage("It almost feels like you\'re putting yourself in a trance.");
    CMessage("You start to lose yourself");
    CMessage("lose your mind, as you can think and feel nothing but that sensation.");
    CMessage("Feel your orgasm swelling in your cock.");
	CMessage("%stopstrokingedge%", 0);
    //stopEdging();
    CMessage("%lettheedgefade%");
	setVar("edgingmode", "Normal");
    delVar("edginggoto");
    //CMessage("%stopstroking%", 0);
    CMessage("Despite knowing that I\'m going to tease that cock of yours until you have blue balls,");
    CMessage("You cannot escape the pretty little grip I have on you.");
    CMessage("You cannot resist my dirty talk...");
    CMessage("the way I tell you to jerk that rock hard throbbing cock of yours.");
    CMessage("I could ruin your orgasms or lock you in chastity");
    CMessage("but I think it would be more fun to mindfuck you");
    CMessage("to the point that you agree that you dont deserve to cum");
    CMessage("til you dont even want to cum.");
    let answer0 = getInput("And you dont want to cum, do you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("No, you just want to jerk yourself silly.");
    return;
}