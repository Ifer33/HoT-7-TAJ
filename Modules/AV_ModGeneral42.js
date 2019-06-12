DMessage("AV_ModGeneral40: start");
main();
DMessage("AV_ModGeneral40: end");
function main()
{
    if(getVar("AV_ModGeneral42_NotFirstTime", false))
    {
        AV_ModGeneral42_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral42", 0);
    setVar("AV_ModGeneral42_NotFirstTime", true);
    AV_ModGeneral42_NotFirstTime();
}
function AV_ModGeneral42_NotFirstTime()
{
    if (getVar("AV_ModGeneral42", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral42", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral42", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral42", getVar("AV_ModGeneral42", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral42", getVar("AV_ModGeneral42", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral42", getVar("AV_ModGeneral42", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral42", getVar("AV_ModGeneral42", 0) + 1000);
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
    setVar("AV_ModGeneral42", 0);
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
    CMessage("You know, this is actually getting me off faster than if you were here.");
    CMessage("Don\'t get me wrong, I love a man who knows his way around a vagina");
    CMessage("but you wouldn\'t be working this hard on teasing yourself if you were here.");
    CMessage("I feel so... empowered... that might be the best word.");
    CMessage("No, maybe " + "*");
    CMessage("Yes, I like the way that rolls of my tongue.");
    CMessage("%StartStroking%");
    CMessage("You stroking yourself into insanity");
    CMessage("incessantly edging, all to me!");
    CMessage("Just because I told you to!");
    CMessage("I bet you wish you could help me get off.");
    CMessage("I mean more than the thought of you already is!!");
    CMessage("Because I can assure you, you are, but I know you.");
    if(getVar("AV_Beta", false))
    {
        CMessage("Well, beta guys like you anyway.");
    }
    CMessage("If you could replace my fingers with yours, you would in a second.");
    CMessage("You\'re greedy like that.");
    CMessage("You want to feel my dampness on your own hand, don\'t you?");
    CMessage("You want to feel the soft walls of my pussy squeeze in on your fingers as you slide them in");
    CMessage("and you want to watch my eyes clench as you curl your fingers");
    CMessage("and drag them back out.");
    CMessage("You want to listen to my ragged breathing as you drive me closer to cumming.");
    DoEdges(2, 3, 0);
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("Yes, you\'re my bitch, you do what I say and you don\'t hesitate.");
    }
    CMessage("Well listen to your own breath!");
    CMessage("I\'m sure it sounds quite similar right now.");
    CMessage("Remind yourself who is making this all feel so good for you.");
    CMessage("There\'s only one woman you are focused on %GeneralTime% and that\'s me!");
    CMessage("How fucking sexy a thought for me.");
    CMessage("Ok, break time is over");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Shut your eyes, mumble my name, whisper what you want to do to me.");
    CMessage("Oh I know you\'ve been thinking about it.");
    CMessage("you have been thinking about fucking me.");
    switch(random("Position1", "Position2", "Position3", "Position4"))
    {
        case "Position1":
        Position1();
        return;
        break;
        case "Position2":
        Position2();
        return;
        break;
        case "Position3":
        Position3();
        return;
        break;
        case "Position4":
        Position4();
        return;
        break;
    }
    Position1();
}
function Position1()
{
    CMessage("Maybe I\'m good for a rough face fucking.");
    CMessage("Does that make it harder to avoid the edge?");
    CMessage("Thinking about grabbing my hair and slamming your cock back and forth?");
    CMessage("Do you like thinking about making me gag?");
    CMessage("Tears rolling down my cheeks and spit from the corners of my mouth");
    CMessage("as I smile up at you taking you in to the hilt?");
    FimPosition();
    return;
    Position2();
}
function Position2()
{
    CMessage("maybe a good missionary gets your rocks off.");
    CMessage("I see the appeal.");
    CMessage("I\'m on my back, my tits are bouncing with every thrust.");
    CMessage("Reach down and grab a handful.");
    CMessage("They\'re soft and I moan when you squeeze them.");
    CMessage("You can look me in the eyes, lean down and kiss me.");
    CMessage("I\'m not going to promise I won\'t wrap my arms around you");
    CMessage("and dig my nails into your back if you hit the right spot");
    CMessage("but that\'ll probably just make you hornier...");
    FimPosition();
    return;
    Position3();
}
function Position3()
{
    CMessage("Maybe you would love to flip me over.");
    CMessage("I\'ve gotta admit, I feel a certain bit at home with my face in a pillow and ass in the air.");
    CMessage("The way a cock slides in and out of my pussy from this position");
    CMessage("seems to hit all the right spots too!");
    CMessage("I know looking down my back you won\'t be able to help but grab my hips.");
    CMessage("Go right ahead! Take hold and thrust harder!");
    CMessage("Sink your fingers into my waist.");
    CMessage("Watch my ass bounce against you as you make me claw and bite at my pillow.");
    FimPosition();
    return;
    Position4();
}
function Position4()
{
    CMessage("Maybe you would prefer If I was riding you, right?");
    CMessage("Careful not to burst yet while imagining it!");
    CMessage("It would be the perfect angle to watch my tight stomach and curvy hips rise and fall.");
    CMessage("As I bend over, pressing my palms on your chest");
    CMessage("curling my fingers into you skin");
    CMessage("you could watch my tits, rock up and down");
    CMessage("so close to your face.");
    CMessage("Do you like feeling my body pressing down on you?");
    FimPosition();
    return;
    
    FimPosition();
}
function FimPosition()
{
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    return;
    
    Modulo2();
}
function Modulo2()
{
    CMessage("I love to edge you.");
    CMessage("I love getting you right to the brink of cumming, and then stopping.");
    CMessage("You love the way that makes you feel, being completely denied.");
    edge();
    CMessage("And if and when you do get to cum, it\'s so much more powerful.");
    CMessage("The thrill is in the chase for edge addicts you.");
    CMessage("So maybe cumming isn\'t something you should ever do.");
    CMessage("You know that I\'m right, I know you better than you know yourself.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "e3h67ikd()")
    CMessage("I know your wants, your needs, and your desires.");
    setStrokingNoTaunt()
	CMessage("%Edge%");
    CMessage("And you do not need to cum.");
    CMessage("Stare at me and stroke.");
	//holdEdge();
    sleep(15);
    e3h67ikd();
}
function e3h67ikd()
{
    CMessage("%HoldTheEdge%");
    setTempVar("edging", false);
    setTempVar("holdingedge", true);
    CMessage("and when I tell you to stop");
    CMessage("you\'re going to tell me that you don\'t want to cum.");
    CMessage("You\'re going to beg to be denied.");
    CMessage("%Stop%");
	stopStrokingAll();
	setVar("edgingmode", "Normal");
    delVar("edginggoto");
    let answer0 = getInput("Now beg me not to let you cum.", 10);
    if (answer0.isTimeout())
    {
        a3ggjql7();
        return;
    }
    while (!(answer0.isLike("%DeniyMe%") || answer0.isLike("beg")))
    {
        answer0 = getInput("Beg %SubName%");
    }
    if (answer0.isLike("%DeniyMe%", "beg"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    n38efij();
    return;
    a3ggjql7();
}
function a3ggjql7()
{
    CMessage("I want you to beg me to deny you %SubName%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    n38efij();
}
function n38efij()
{
    let answer0 = getInput("Now keep your hands off of your cock while you beg me to never let you cum.");
    while (!(answer0.isLike("%DeniyMe%") || answer0.isLike("beg")))
    {
        answer0 = getInput("Beg %SubName%");
    }
    if (answer0.isLike("%DeniyMe%", "beg"))
    {
        CMessage("%GoodBoy%");
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I love teasing a loser like you who don\'t want to cum.");
    }
    CMessage("I mean you was begging me not to let you cum.");
    CMessage("Keep edging. It feels so good.");
    CMessage("I know you love edging.");
    edge();
    CMessage("Beg me, beg me again not to let you cum.");
    sleep(20);
    CMessage("Now start stroking again, this time staring at my eyes.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("You begged for it, you don\'t want me to allow you to cum.");
    let answer1 = getInput("But doesn\'t it feel good stroking to me?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I know it does.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Since you\'ve been begging me not to cum");
    CMessage("I\'m going to be nice to you and give you your wish, complete denial.");
    CMessage("Isn\'t that nice of me?");
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
    let answer0 = getInput("Haven\'t you had enough getting denied and tortured?");
    if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("You would think by now you\'ve had enough");
    CMessage("but I guess your mind is so warped that you just can\'t get enough.");
    CMessage("The temptation is too great for you.");
    CMessage("You just love %Stroking% yourself to me");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    let answer1 = getInput("But you like being denied, don\'t you?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    CMessage("Tormented and denied.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You like having someone above you to show you just how pathetic you really are.");
    }
    CMessage("And you just can\'t get enough of me.");
    let answer2 = getInput("Are you getting close to cumming for me pervert?");
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You live for these moments.");
    CMessage("I want you to bring yourself right to the edge, get so fucking close.");
    edge();
    if(!getVar("av_fetish_pain", false))
    {
        sleep(20);
        a7737esx();
        return;
    }
    CMessage("Love hurts, doesn\'t it?");
    CMessage("Sacrifice is how we show our dedication and our love.");
    CMessage("I want you to hurt for me now.");
    CMessage("I want you to feel pleasure through pain.");
    CMessage("I want you to sacrifice for me now.");
    CMessage("You\'re usually so selfish, you just want to jerk for me.");
    CMessage("And I understand that, but I want to see real sacrifice today");
    CMessage("I want to see real pain in your eyes.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("To serve me is to please me, jerking off to me is only serving yourself.");
    let answer3 = getInput("Wouldn\'t you do anything to please me?");
    if (answer3.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer3.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Of course you would, so I want you to hurt yourself for me now.");
    CMessage("Get the ruler ready");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("Make it hurt, don\'t be a pussy.");
    CMessage("I want you to feel it in your stomach.");
    CMessage("It feels good to hurt yourself for me.");
    CMessage("Soon your adrenaline and endorphins will kick in and it won\'t hurt so bad.");
    CMessage("It\'s going to feel good to hurt those balls");
    CMessage("so go ahead and give me again");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("This might be hurting you, but it\'s making me feel so good");
    let answer4 = getInput("and that\'s what you want, right?");
    if (answer4.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer4.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("I love seeing you cringe as I get wet.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I\'m going to make you cry like a little bitch.");
    }
    CMessage("Now stroke, just a little bit");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("just enough to get hard.");
    CMessage("And while you\'re stroking, I want you to flick the head of your cock with your other hand.");
    CMessage("Do it hard, make it hurt.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I want you whimpering, don\'t be a bitch.");
    }
    CMessage("Flick it again and again.");
    CMessage("I want you to truly hurt for me.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re a fucking loser and all you deserve it pain and misery, all for my pleasure.");
    }
    CMessage("%stopstroking%", 0);
    a7737esx();
}
function a7737esx()
{
    CMessage("Now take your cock in both hands and give it an indian burn.");
    CMessage("I want you to rub your cock hard with each hand moving in the opposite direction.");
    CMessage("Twist it hard and harder");
    CMessage("make it hurt, make it burn!");
    sleep(15);
    CMessage("you\'re going to thank me for doing this to you.");
    CMessage("%Stop%", 0);
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
    CMessage("You are so horny and weak for me.");
    CMessage("I know how hard you get when you see me.");
    CMessage("I know that you can\'t resist me.");
    CMessage("Admit it.");
    CMessage("So go on and stroke for me, let you mind melt.");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("You like how that feels, don\'t you?");
    CMessage("You would love nothing more than to %Stroke% to me.");
    CMessage("But I love fucking with you.");
    CMessage("I love teasing you.");
    CMessage("And I love giving you instructions because I know you will follow every single one of them.");
    CMessage("You are so weak that you\'ll do exactly as I say without hesitation.");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("This is my game. I love fucking with you.");
    CMessage("I love breaking you down.");
    CMessage("I love making you ache for me.");
    CMessage("No stroking, I don\'t want you to.");
    sleep(10);
    CMessage("You can stroke again now.");
    setStrokingNoTaunt();
	//playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Stroke while you think about fucking me.");
    CMessage("I know how badly you want to.");
    if(getVar("AV_Beta", false))
    {
        CMessage("That\'s never ever going to happen, but it\'s fun to mindfuck you a little bit.");
    }
    CMessage("I love making you ache for something that you\'ll never have.");
    CMessage("Now suffer, hands off of that cock!");
    stopStrokingAll();
	//playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    let answer0 = getInput("I\'m so cruel but you love it so much, it\'s so confusing, isn\'t it?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("It melts your mind just knowing that you can't stop stroking to me");
    CMessage("even though you know I\'m just fucking with you.");
    CMessage("You know that you need to be guided, even if it\'s to complete denial.");
    CMessage("It\'s the right thing to do because you get off on being fucked with.");
    CMessage("Stroke it.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    sleep(randomInt(10, 20));
    CMessage("And stop. LOL!");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
	stopStrokingAll();
    CMessage("I know how badly you want to squirt for me");
    CMessage("but I\'m just having too much fun fucking with you");
    CMessage("and leading you around in circles");
    CMessage("teasing and denying your %Cock%.");
    CMessage("And you can\'t get enough of it.");
    CMessage("You\'re too weak.");
    CMessage("Stroke it.");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(randomInt(10, 20));
    CMessage("And stop.");
	stopStrokingAll();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Stroke and stop. I know how badly this fucks with your brain.");
    CMessage("Now %Stroke% hard");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Beg me to cum.");
    CMessage("I love teasing you.");
    edge();
    CMessage("The denial is the best part of tease and denial, isn\'t it?");
    CMessage("Now thank me for denying you.");
    return;
}