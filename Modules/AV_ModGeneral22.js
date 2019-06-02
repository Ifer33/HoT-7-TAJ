DMessage("AV_ModGeneral22: start");
main();
DMessage("AV_ModGeneral22: end");
function main()
{
    if(getVar("AV_ModGeneral22_NotFirstTime", false))
    {
        AV_ModGeneral22_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral22", 0);
    setVar("AV_ModGeneral22_NotFirstTime", true);
    AV_ModGeneral22_NotFirstTime();
}
function AV_ModGeneral22_NotFirstTime()
{
    if (getVar("AV_ModGeneral22", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral22", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral22", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral22", getVar("AV_ModGeneral22", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral22", getVar("AV_ModGeneral22", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral22", getVar("AV_ModGeneral22", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral22", getVar("AV_ModGeneral22", 0) + 1000);
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
    setVar("AV_ModGeneral22", 0);
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
    CMessage("I know why you\'re here. I know the exact reason.");
    CMessage("You want your Mistress to make you cum. You need it.");
    CMessage("You\'ve probably been aching for it all session.");
    CMessage("And now you\'re right here at my beck and call, wanting and needy.");
    CMessage("But let me ask you this? What have you done to earn it?");
    CMessage(random("What exactly have you done to please your Mistress today", "Were you a good boy"));
    CMessage("No, I bet you were just a greedy little slut coming here thinking I\'d let you cum without earning it first.");
    CMessage("Tsk, tsk. You know that\'s not how it works.");
    CMessage("So instead of you getting what you want, we are going to play a little game.");
    CMessage("That toy between your legs? Mine.");
    CMessage("It belongs to me and you clearly need to be reminded of what power I have over it.");
    if(getVar("av_fetish_pain", false))
    {
        cbt("cock");
    }
    CMessage("You\'re going to sit there and you\'re going to listen to exactly how I want to be served.");
    CMessage("And you, my %PetName%, aren\'t going to touch my toy until you have permission.");
    CMessage("You\'re going to lie there, aching and throbbing and I\'ll decide if you get to stroke or not.");
    CMessage("%KneelForMe%");
    CMessage("Now, put your hands at your sides and you keep them there.");
    CMessage("I\'ll let you know when I want you to touch.");
    CMessage("I want you all pent up and desperate. Little boys are so much more obedient when they\'re desperate.");
    CMessage("So you keep your hands off my property until I say so.");
    CMessage("Look down. I want you to see that cock grow for me when I tell you I own it.");
    CMessage("That I\'m the one " + random("who gets it hard", "to decide if you get relief or not"));
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("I want you stripped bare.");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("You aren\'t allowed clothes when you do your chores, are you? No.");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("And why is that? You want me to tell you, don\'t you?");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage(random("You aren\'t allowed clothes because I like to see your body when you serve me", "I like to see that cock rigid and throbbing when you\'re a good boy and do what I tell you to"));
    }
    CMessage(random("I want you hard the whole time you serve me ", "I want to see how much you enjoy being an obedient little pet ") + "My obedient little pet.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Hit your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("I bet it hurts doesn\'t it?");
    CMessage("To be so hard, so ready and not get to touch. Let me fix that for you.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Can you feel the floor on your knees?");
    CMessage("Feels so good doesn\'t it?");
    CMessage("You like being down there, don\'t you?");
    if (randomInteger(1, 100) <= 50)
    {
        a94uh3j();
        return;
    }
    CMessage("I want a nice long massage. You\'re going to be a good boy and make me feel good.");
    CMessage("You\'re going to start at my feet. I want them properly massaged.");
    CMessage("You just kneel right there and take them into your lap and you work them until I tell you move.");
    a2s24sg();
    return;
    a94uh3j();
}
function a94uh3j()
{
    CMessage("Think about rubbing all the tension and soreness out of my soft, pretty feet.");
    CMessage("Picture yourself dropping your head down, bringing you lips to them. That\'s a good boy.");
    CMessage("Show me what an obedient little pet you are for your Owner.");
    a2s24sg();
}
function a2s24sg()
{
    CMessage("You like that idea, don\'t you? Are you squirming for me? I know you fucking are.");
    CMessage("Now, pet, think about your mouth being used and you stroke that cock as hard as you can.");
    CMessage(random("I want you to edge for me soon", "I want you to show me how badly you want to please me"));
    CMessage("Be a good little pet and service me.");
    edge();
    CMessage("I wonder how frustrated you\'ll be if you don\'t get that relief.");
    CMessage("I wonder if you\'ll whimper and moan. I know you will.");
    CMessage("%SitDown%");
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
    CMessage("I\'m going to transform you into what I want you to be");
    CMessage("and I feel that only girls deserve to cum.");
    let answer0 = getInput("You will do as I command?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I thought you would agree that this is the best way.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("We need to transform you into how I want you to be.");
    }
    CMessage("I think it\'s time to start the reprogramming");
    //CMessage("%StartStroking%");
	Stroking();
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Only being able to follow orders from superior women");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("and never being able to think for yourself or pleasure yourself without instructions");
    }
    CMessage("You want to be " + random("under my command", "reprogrammed into what you deserve to be"));
    CMessage("No objections, you are my %PetName% and you know deep down you deserve this...");
    edge();
    CMessage("Now are your balls nice and full?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Good, now slap those balls...");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("I know it hurts but you need this to be programmed...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("I control your pain and your pleasure.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You will however feel more pain than pleasure....");
    }
    CMessage("You want this deep down...");
    edge();
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("Don't even think about stopping untill we tell you...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("The pain you feel strengthens my control...");
    }
    CMessage("Which makes you even weaker...");
    edge();
    CMessage("More obedient...");
    CMessage("So that you will eventually understand that only girls cum!");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Each slap puts you in your place...");
    }
    CMessage("Does this all sound like fun?");
    CMessage("Your head may not think so but your %Cock% is giving me another signal.");
    CMessage("You will learn some self control");
    edge();
    CMessage("Bet that was frustrating!");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("Deep down, you know this is what you want");
    CMessage("You truly want me to fuck with your cock and make those balls ache so badly");
    CMessage("And I am more than happy to do it");
    edge();
    CMessage("you gave over your control to me");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I quite like seeing you hurt those balls for me");
    }
    CMessage("You looked like you struggled to keep that cum in then");
    edge();
    CMessage("It must suck doing all these edges...");
    CMessage("But I am in control so you will do as I say");
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
    CMessage("OK, so here\'s what were\'re going to do...");
    CMessage("You know that girl you " + random("have a massive crush on", "think about all the time"));
    CMessage("Yeah, " + getVar("AV_Persona13", ""));
    CMessage("I\'m going to let you %Stroke% to pictures of her.");
    CMessage(random("I bet you\'re excited", "Aren\'t I just so nice?"));
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Isn\'t she just so hot?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Look at her mouth.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Doesn\'t she have the sexiest little mouth?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Don\'t you want to kiss her?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Imagine her lips on your lips.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Think of her tongue flicking into your mouth, playing with your tongue.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("So intimate and hot.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Yeah. That\'s never going to happen, is it?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    edge();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("What do you think she looks like under those clothes?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Wouldn\'t you love to see?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("How do you think she likes to fuck?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    //CMessage("%StartStroking%");
	Stroking();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("On her back with her feet in the air?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("On her hands and knees, getting it hard from behind?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Reverse cowgirl, so the guy can see her asshole?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("You think she likes having her hair pulled?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Look at her and think about how much you want her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Think about your thing about her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Your favorite part of her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Is it her face? Her belly?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Her sexy ass? Her mouth?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Her feet? Maybe her lovely hair?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Hold that in your mind.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("That\'s where he\'s going to edge.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    edge();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("%GoodBoy%");
    CMessage("I hope you don\'t have to look her in the eye any time soon!");
    return;
    Modulo4();
}
function Modulo4()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking 
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]>=[15] %Edge% @Edge
    CMessage("Don\'t get too excited though, thats the closest you will get to cum for now...");
    CMessage("I hope it adds to your frustration...");
    CMessage("Becuase that is all you are ever going to know from now on...");
    CMessage("FRUSTRATION");
    CMessage("and denial...");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Enjoy these strokes...");
    CMessage("No escaping, no tampering, no release from my control...");
    CMessage("I am going to transform you though, make it so that you never want to cum");
    if(getVar("AV_DoneAnal", false))
    {
        CMessage("I want your balls to be aching so badly before I fuck you to a ruined orgasm...");
    }
    if(!getVar("AV_DoneAnal", false))
    {
        CMessage("I want your balls to be aching so badly");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("So I think a bit of ballbusting will help make your balls ache...");
    }
    CMessage("%stopstroking%", 0);
	stopStroking();
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("Is this not everything you ever wanted? ...");
    if(getVar("AV_DoneAnal", false))
    {
        CMessage("You will learn to love getting your ass pounded by me...");
    }
    CMessage("Deep down I known you want to be mine! ...");
    CMessage("I may be cruel but I know deep down you are happy...");
    CMessage("You will be even more happy when I have reprogrammed you...");
    if(getVar("AV_DoneAnal", false))
    {
        CMessage("into being my sissy bitch....");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("into being my cum eating %Slave%");
    }
    edge();
    CMessage("Let that pleasure just fade and turn into frustration.");
    CMessage("I suggest you hold onto it for as long as you can as once it ends it will be frustration from then on...");
    holdEdge();
    CMessage("Let that edge fade and let the frustration build.");
    let answer0 = getInput("Have I lulled you into a false sense of security by being kind and allowing you to feel some sort of pleasure?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good then what I am going to do next will be extra sadistic for you...");
        SaidYes();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You know me too well! Perhaps you know what\'s coming next then...");
    }
    if(getVar("AV_DoneAnal", false))
    {
        CMessage("Yes I lied... I don\'t want you to have that feeling of pleasure before I fuck you.");
    }
    if(!getVar("AV_DoneAnal", false))
    {
        CMessage("Yes I lied... I don\'t want you to have that feeling of pleasure");
    }
    if(getVar("AV_DoneAnal", false) && getVar("av_fetish_pain", false))
    {
        CMessage("I want you to have nothing but pain before I fuck you.");
    }
    SaidYes();
}
function SaidYes()
{
    CMessage("So take your hands off your cock.");
    CMessage("You will not touch it again!");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "spank ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(!getVar("AV_DoneAnal", false))
    {
        AV_r23h87k();
        return;
    }
    CMessage("Go and grab the lube for me.");
    sleep(40);
    CMessage("Lube up your ass for me, I know you have experimented before so don\'t go all shy.");
    CMessage("This is going to happen.");
    CMessage("I want you to follow all instructions as if I were pounding you.");
    CMessage("You will not need to touch the keyboard or mouse untill then end now");
    CMessage("so just concentrate on following the instructions");
    CMessage("Are you ready %Slave%?");
    CMessage("Then bend over and prepare yourself.");
    sleep(15);
    CMessage("Take a deep breath! I\'m going to push it in slowly...");
    CMessage("Nearly there, I know you can take the whole cock...");
    CMessage("There we are we are all the way in, how does that feel?...");
    CMessage("I\'ll start off slowly.");
    CMessage("Start fucking yourself slowly, don't stop unless I say");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Take it bitch!");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("Take it");
    }
    CMessage("It feels strange doesn\'t it? ....");
    CMessage("You are starting to feel all tingly arn\'t you?");
    CMessage("I can see you like it...");
    CMessage("Maybe I\'ll go a bit harder and faster now...");
    CMessage("That\'s it take it like a real man, I\'m gonna pound your ass");
    CMessage("I feel so powerful fucking you like this...");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I bet you feel so degraded and humiliated, down on your knees whils\'t I fuck you like my bitch....");
    }
    CMessage("Tell me you love it! ...");
    CMessage("Tell me you love my cock in your ass! ....");
    CMessage("Your mind repogramming is starting to take effect....");
    CMessage("I\'m going to fuck you as hard and as fast as I can...");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Oh that\'s it, take it sissy....");
    }
    CMessage("This is making me so hot, hearing you whimper and whine...");
    CMessage("You can stop %SubName%");
    CMessage("Wow, that\'s was amazing");
    CMessage("Go clean yourself...I will need too %EmoteHappy%");
    sleep(45);
    AV_r23h87k();
}
function AV_r23h87k()
{
    CMessage("%RelaxAndBreathe%");
    return;
}