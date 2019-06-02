DMessage("AV_ModGeneral43: start");
main();
DMessage("AV_ModGeneral43: end");
function main()
{
    if(getVar("AV_ModGeneral43_NotFirstTime", false))
    {
        AV_ModGeneral43_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral43", 0);
    setVar("AV_ModGeneral43_NotFirstTime", true);
    AV_ModGeneral43_NotFirstTime();
}
function AV_ModGeneral43_NotFirstTime()
{
    if (getVar("AV_ModGeneral43", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral43", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral43", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral43", getVar("AV_ModGeneral43", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral43", getVar("AV_ModGeneral43", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral43", getVar("AV_ModGeneral43", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral43", getVar("AV_ModGeneral43", 0) + 1000);
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
    setVar("AV_ModGeneral43", 0);
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("%KneelForMe%");
    CMessage("I want you to beg me to stroke.");
    setTempVar("av_intera_020", true);
    CMessage("Begging is essential to our relationship.");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("You need to obey my instructions");
    CMessage("and right now I want you stroking your cock.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	Stroking();
    CMessage("I know you love stroking to me.");
    CMessage("Stroke because I say, stroke because you cannot resist.");
    CMessage("That\'s exactly what I want.");
    CMessage("I want you to do it nice and sensual.");
    CMessage("And while you\'re stroking I want you to take your other hand");
    CMessage("put it between your balls");
    CMessage("and you\'re going to feel a hard strip that goes from your dick to your ass.");
    CMessage("I want you to push in until you feel that and I want you to massage it");
    CMessage("and apply some pressure while you\'re stroking your dick.");
    CMessage("%GoodBoy%");
    CMessage("You can feel that, can\'t you?");
    CMessage("Beg for more and thank me for what I\'ve given you.");
    CMessage("Stroke it a bit faster now, but don\'t cum.");
    CMessage("Good, this is how I like you");
    CMessage("this is how I want you, edging and horny.");
    CMessage("It feels so good stroking your cock and rubbing around your balls at my command.");
    CMessage("You can feel your cock getting harder and your balls filling up.");
    CMessage("If you have some precum I want you to rub it around the head of your cock.");
    CMessage("Yes, that feels so nice.");
    CMessage("Im going to leave you with blue balls after stroking to this.");
    CMessage("Work that cock into a frenzy.");
    CMessage("The only thing you deserve are the blue balls I\'m about to give you.");
    CMessage("I\'m going to tease and deny the fuck out of you.");
    CMessage("I want you to really get to edge for me before I complete deny you and fuck you over.");
    DoEdges(2, 3, 0);
    CMessage("Let that cock twitch in the air for me.");
    CMessage("You\'re so fucking horny.");
    CMessage("Your balls are aching.");
    CMessage("But still, no, you may not cum.");
    CMessage("I know it must be so hard to be so aroused, yet denied your orgasm.");
    if(!getVar("av_fetish_pain", false))
    {
        zruytc4456();
        return;
    }
    CMessage("I know you get off on ballbusting, which is great because so do I.");
    CMessage("We\'ll start off easy.");
    CMessage("Spread your legs, lift up your cock");
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("you know you deserve this.");
    CMessage("But this is just the warmup.");
    CMessage("Now get ready for some real fun.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(randomInt(30, 50));
    CMessage("I want it to hurt.");
    CMessage("But I know you\'re still hard.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re a sick fuck who gets turned on from pain to your nuts.");
    }
    DoEdges(2, 3, 0);
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    zruytc4456();
}
function zruytc4456()
{
    CMessage("Now stroke it even more intensely.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	Stroking();
    CMessage("It\'s so hot, isn\'t it?");
    CMessage("This feeling of desperation that I make you feel.");
    CMessage("Edge yourself, ride that edge, but don\'t cum.");
    CMessage("But you don\'t want to cum because you know if you do");
    CMessage("then this intense feeling that I give you goes away.");
    CMessage("You stop listening, you stop obsessing, you turn off your sexual brain as soon as you cum.");
    CMessage("But I found a way around that.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("I\'m not going to let you cum.");
    CMessage("I think it\'s best for both of us.");
    CMessage("Accept your fate, embrace it");
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
    CMessage("%KneelForMe%");
    CMessage("It\'s so easy to tease you.");
    CMessage("Forget whatever was in your mind");
    CMessage("Just move your hand on your cock for me.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	Stroking();
    CMessage("I am your Masturbatrix who allows you to loser yourself for me.");
    CMessage("You need your orders, you need your seduction.");
    CMessage("My poor pet, you desire more of my teasing, more of my torture.");
    CMessage("Move your hand for me, release all your energy, make your desires come true.");
    CMessage("I am here for you. You need guidance, you need approval.");
    CMessage("I\'m going to keep you on the " + "until I give the order, until my lips pronounce the words..");
    CMessage("You are so filled with anticipation loser.");
    CMessage("But not yet... Feeling it so strongly now as you play with your cock while I play with your mind.");
    CMessage("Wait for my words...");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("No, no, you do not get to cum.");
    CMessage("NO! I will not allow you to cum. I know you want to.");
    CMessage("Of course you want to cum");
    CMessage("looking at me, how could you want to do anything but cum hard and often for me.");
    CMessage("Just look at me");
    CMessage("And it feels so right, so good, to stare up at me with your cock throbbing for me.");
    CMessage("I want you to know that I\'m not here to pleasure you at all.");
    CMessage("I\'m just here to tease.");
    CMessage("And the more I edge you, the more I deny you, the more mindfucked you become.");
    DoEdges(2, 3, 0);
    CMessage("You may not cum, you don\'t deserve it.");
    CMessage("I will tease and torment you until you understand that I control your " + random("cock", "orgasms"));
    CMessage("No, no, no cummies for you.");
    CMessage("No making making a filthy mess for you.");
    CMessage("You do not deserve to cum");
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
    let answer0 = getInput("Are you horny?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        gNMHornyResponse();
    }
    CMessage("Well I don\'t want you stroking.");
    CMessage("I don\'t want you to even touch yourself.");
    CMessage("You don\'t deserve it.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re such a pervert");
    }
    CMessage("And forget about cumming, %PetName%");
    CMessage("because that is not going to happen.");
    setTempVar("AV_Begging", true);
    CMessage("You will not be stroking, you will not be cumming");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re a perverted and your %Cock% should be locked up.");
    }
    CMessage("%KneelForMe%");
    CMessage("and beg me.");
    //CustomMode(%AV_Beg%,Goto,Begging1);
    CMessage("And I mean BEG, and plead like it\'s the most important thing in the world to you.");
    CMessage("Because jerking your cock really is the thing you live for.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I know it is so humiliating and makes you feel so fucking pathetic.");
    }
    NotBegged();
    return;
    Begging1();
}
function Begging1()
{
    CMessage("And isn\'t it sad that you have to beg for it?");
    CMessage("You have to beg for permission to touch your own cock.");
    //CustomMode(ModeText,Normal);
    CMessage("You are a slave, and I own that cock.");
    //CustomMode(%AV_Beg%,Goto,Begging2);
    CMessage("And as your Goddess, you must beg me for the simplest of pleasures.");
    CMessage("Let me see it in your eyes how bad you want it.");
    CMessage("BEG me. Harder!");
    CMessage("Begging just to stroke.");
    CMessage("I hold your pleasure in my hands, youre mine");
    CMessage("and I will tell you when you can feel anything.");
    NotBegged();
    return;
    Begging2();
}
function Begging2()
{
    CMessage("There\'s nothing I love more than seeing you on your knees before me");
    //CustomMode(ModeText,Normal):
    CMessage("begging to jerk your cock.");
    if (randomInteger(1, 100) <= 75)
    {
        YouCanStroke();
        return;
    }
    NotBegged();
}
function NotBegged()
{
    CMessage("NO! You aren\'t worthy, you haven\'t begged hard enough.");
    CMessage("Sit on your hands.");
    CMessage("Don\'t you dare touch that cock.");
    CMessage("No, No...");
    CMessage("I just love telling you no while you beg like a good boy.");
    return;
    
    YouCanStroke();
}
function YouCanStroke()
{
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Feel what I am doing to you.");
    CMessage("You love how I control you with my words");
    CMessage("You need me to humiliate you and put you in your place.");
    let answer0 = getInput("You need me to take control, don\'t you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I\'m going to drive you absolutely insane.");
    CMessage("Your cock will be twitching with excitement.");
    CMessage("You will barely be able to contain yourself.");
    CMessage("You feel the cum building up in your balls.");
    CMessage("get ready to edge for me...");
    CMessage("5...");
    CMessage("4...");
    if (randomInteger(1, 100) <= 20)
    {
        CountStop();
        return;
    }
    CMessage("3...");
    if (randomInteger(1, 100) <= 25)
    {
        CountStop();
        return;
    }
    CMessage("2...");
    if (randomInteger(1, 100) <= 30)
    {
        CountStop();
        return;
    }
    CMessage("1...");
    if (randomInteger(1, 100) <= 35)
    {
        CountStop();
        return;
    }
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("I love controlling your cock and your orgasms.");
    return;
    CountStop();
}
function CountStop()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("I know you want to squirt so badly.");
    CMessage("But don\'t, not yet...");
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
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, a shoelace and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I\'m going to tease and deny you");
    CMessage("and you\'re going to love every second of it.");
    CMessage("It\'s sweet cruelty and you love it.");
    CMessage("you know that you\'re going to be denied.");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("I want you desperate for release.");
    CMessage("And then to know, that you\'re not going to get it.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("And that\'s the best part, isn\'t it?");
    CMessage("Not being able to get that release");
    CMessage("I personally think it\'s the best fucking part.");
    CMessage("I want it to be so hard for you to not cum, for you to be denied.");
    CMessage("You will have blue balls %GeneralTime% and you\'re going to love it.");
    CMessage("Because in exchange for those blue balls I\'m allowing you to jerk to me.");
    DoEdges(1, 3, 0);
    let answer0 = getInput("You love giving me control over your orgasms, don\'t you?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You don\'t want to think");
    CMessage("you just want to let me in and allow me to control you.");
    if(!getVar("av_fetish_pain", false))
    {
        a307sbca();
        return;
    }
    CMessage("You will punish yourself for me.");
    CMessage("You will sacrifice your cum, and your pride for me.");
    CMessage("You will suffer for me.");
    CMessage("I want to torture those nipples.");
    CMessage("I know you\'re horny and you want to %Stroke% again");
    CMessage("Well the only way I\'m going to let you");
    CMessage("is if you agree to torture your nipples.");
    CMessage("Start rubbing them with your fingers, pinch a little, then flick \'em.");
    setTempVar("AV_Pins", true);
    CMessage("Take two clothespins and put them on your nipples.");
    sleep(20);
    let answer1 = getInput("Doesn\'t that feel good?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re such a horny little bitch for me.");
    }
    DoEdges(1, 3, 0);
    CMessage("now I want to see some pain in your eyes.");
    CMessage("get the ruler rady");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I enjoy hurting you.");
    CMessage("I need to show you who is boss.");
    CMessage("Keep spanking them.");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(60);
    CMessage("Hurt your nuts for me.");
    CMessage("And don\'t ever forget who is boss!");
    CMessage("I make the decisions.");
    CMessage("No whining, no pouting, no complaining");
    a307sbca();
}
function a307sbca()
{
    DoEdges(1, 3, 0);
    CMessage("Its about time you got this through your head");
    CMessage("Orgasms are not for you.");
    return;
}