DMessage("AV_ModGeneral29: start");
main();
DMessage("AV_ModGeneral29: end");
function main()
{
	if(getVar("modlink",false) ){
		a4n48dkd();
		return;
	}
	if(getVar("modlink2",false) ){
		a38yds93();
		return;
	}
    if(getVar("AV_ModGeneral29_NotFirstTime", false))
    {
        AV_ModGeneral29_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral29", 0);
    setVar("AV_ModGeneral29_NotFirstTime", true);
    AV_ModGeneral29_NotFirstTime();
}
function AV_ModGeneral29_NotFirstTime()
{
    if (getVar("AV_ModGeneral29", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral29", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral29", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral29", getVar("AV_ModGeneral29", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral29", getVar("AV_ModGeneral29", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral29", getVar("AV_ModGeneral29", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral29", getVar("AV_ModGeneral29", 0) + 1000);
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
    setVar("AV_ModGeneral29", 0);
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
    CMessage("You can never say no to me.");
    CMessage("I get everything I want.");
    CMessage("You know it\'s true. You\'re addicted.");
    CMessage("I mindfuck you like no one ever has.");
    CMessage("You love my charm and my intense beauty.");
    CMessage("You\'re " + random("so fucking hooked on me", "wrapped around my little finger"));
    CMessage("You should be locked away when you\'re anywhere near me.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Stroke and jerk your brain out, just allow it to become numb.");
    CMessage("You like that you don\'t have to think when you\'re stroking to me.");
    CMessage("You don\'t have to worry about anything real");
    CMessage("all you have to do is pump to my sexy body and go mindless.");
    CMessage("Stroke your life away for me %PetName%.");
    CMessage("You don\'t have to think or worry about anything when you\'re in this state.");
    CMessage("All you have to worry about is humping your hand.");
    CMessage("You\'re mindfucked and horny.");
    CMessage("You\'re completely controlled by your own dick.");
    CMessage("All you care about is cumming.");
    CMessage("And I love controlling your cock");
    CMessage("I love how you obey and jerk when I say and cum only on my command.");
    CMessage("So follow my instructions and %Stroke%");
    CMessage("%GoodBoy%");
    CMessage("I know I can make you cum any second, but I\'m going to make you work for this orgasm.");
    DoEdges(1, 3, 0);
    CMessage("I know you love obeying me");
    CMessage("I know it feels so good, that\'s why you\'re addicted to jerking it.");
    CMessage("You jerk it for me, not knowing when or if I\'m going to let you cum.");
    CMessage("You just love entering that jerk trance state as you mindlessly jerk it to my words and my body.");
    CMessage("Now my %PetName%, we\'re going to play a game");
    CMessage("and it\'s going to feel so good to play");
    CMessage("and you\'re going to follow the rules because you\'re a good pet.");
    CMessage("You\'re going to edge and I\'m going to guide you through girl after girl you have a crush");
    CMessage("and you\'re going to love it.");
    CMessage("I\'m going to make you edge to each of the crushes you told me.");
    CMessage("And I\'m going to do this because I\'m conditioning you.");
    CMessage("Remember, no cumming, just edging.");
    if(getVar("AV_Know_12", false))
    {
        CMessage("Your secret crush, " + getVar("AV_Persona13", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        //CMessage("%StartStroking%");
		Stroking();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("Feels good, right?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("Maybe I should give her a call if you dont do what I say");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        edge("Now %EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        edge("%EdgeNoun% again");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
        sleep(10);
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Hmm");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Your Crush actress, " + getVar("AV_Persona01", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        //CMessage("%StartStroking%");
		Stroking();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Oh it feels so good to touch ourselves doesn\'t it.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Keep going, you can stay on this picture for quite some time.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
        sleep(15);
    }
    if(getVar("AV_Know_00", false))
    {
        edge("Now %EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("Your Crush singer, " + getVar("AV_Persona02", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        //CMessage("%StartStroking%");
		Stroking();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("I want you to imagine those are her hands which are running over your %Cock%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("As if holding a microphone %Lol%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        edge("Now %EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("Paying tribute to " + getVar("AV_Persona04", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        //CMessage("%StartStroking%");
		Stroking();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("Take a good look at her body.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("I want you to have her body firmly in your mind.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        edge("Now %EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_50", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_51", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_52", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_53", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_54", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_55", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_56", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_57", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_58", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_59", false))
    {
        edge("%EdgeNoun%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_50", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_51", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_52", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_53", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_54", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_55", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_56", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_57", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_58", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_59", false))
    {
        edge("%EdgeNoun% again");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    }
    CMessage("%LetTheEdgeFade%");
    CMessage("How does it feel to be denied over and over again in front of each of these beautiful women?");
    let answer0 = getInput("It feels good, doesn\'t it?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveTeaseAndDenialResponse();
    }
    CMessage("You feel your need growing with each and every second.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("But you know that you don\'t deserve these girls, you don\'t deserve this pleasure, and you certainly don\'t deserve to cum to them.");
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
    CMessage("You know you\'re a %Slave%.");
    CMessage("You\'ve been told so many times before, it\'s been drilled into your brain by now.");
    CMessage("And if you want to jerk off you\'ll need instructions because only %Slaves% need to be told how to jerk their dicks.");
    CMessage("It\'s a pretty simple concept that most men can handle but you need instructions on how to touch your own cock.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("It\'s pathetic.");
    }
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("I also know that you like being told what to do by a woman.");
    CMessage("It makes you feel better about yourself.");
    CMessage("It makes you feel like you\'re getting some kind of acceptance from a woman who\'s too beautiful to ever want you.");
    CMessage("So I\'ll give you instructions.");
    CMessage("Stare at me and stroke that %Cock%.");
    CMessage("You know you need help, you need encouragement");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("you need to be told what to do because you\'re a loser.");
    }
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("Even though you want to keep going, you can\'t.");
    CMessage("You know you have to obey me.");
    if(!getVar("av_fetish_rough", false) && !getVar("av_fetish_humiliating", false))
    {
        CMessage("You don\'t have a choice because you need permission to stroke.");
    }
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You don\'t have a choice because you\'re such a loser, you need permission to stroke.");
    }
    CMessage("I give you what you need.");
    CMessage("You thought you knew what you needed.");
    CMessage("But I know better.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("You need the thrill of being pushed past your limits.");
    CMessage("You made your boundaries clear, built out of fear and hesitation.");
    CMessage("I know how much you cling to them.");
    CMessage("But I also know how much you love when I push those limits.");
    CMessage("It\'s not fun playing it safe because then you always know what to expect.");
    CMessage("How fucking boring. And you don\'t want boring, you want the rush.");
    DoEdges(2, 3, 0);
    CMessage("You want the thrill of seeing just how far you will go.");
    CMessage("You want to see just how far I will take you.");
    CMessage("You want the rush of not being in control.");
    CMessage("When you play it safe you\'re only denying yourself");
    CMessage("and you don\'t want that.");
    CMessage("You want the rush of seeing what happens when you push yourself beyond your limits.");
    CMessage(random("Hit", "Slap", "Spank")+" your %Balls%");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle*.mp3");
	sleep(15);
	//@PlayAudio[tease\spank\Belle***.mp3] @sleep(13)
    CMessage("You want to dance on the edge of ecstasy and ruination");
    CMessage("not knowing whether pleasure or destruction awaits you.");
    CMessage("Isn\'t that exciting?");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Just thinking about it makes you cock throb.");
    CMessage("You ache for this. The thrill of danger.");
    CMessage("You know that I could destroy you.");
    CMessage("And yet you follow, mindlessly, helplessly, happily.");
    CMessage("Because you need that rush.");
    CMessage("You love the power I have over you, that\'s the exciting part.");
    CMessage("Will I bring you pleasure or will I take away everything that you\'ve known?");
    CMessage("That\'s the fun, that\'s the rush.");
    CMessage("Pushing your limits and showing you that you are capable of doing so much more.");
    DoEdges(2, 3, 0);
    CMessage("You want to sacrifice everything for me.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You want to be helplessly devoted, my obsessed little loser");
    }
    CMessage("and I\'m here to show you the way.");
    CMessage("I\'m here to show you true pleasure, a pleasure that comes by not playing it safe");
    CMessage("by taking a risk.");
    CMessage("Seeing just what will happen when I push your boundaries.");
    //--UNINTERPRETED LINE:@RT(Hit, Slap, Spank) your %Balls% @PlayAudio[tease\spank\Belle***.mp3] @sleep(13)
	CMessage(random("Hit", "Slap", "Spank")+" your %Balls%");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle*.mp3");
	sleep(15);
    CMessage("Will I destroy you and all of your carefully preconceived ideas about yourself?");
    CMessage("I will tear down everything that you are and build something better in its place.");
    CMessage("I will give you something so much better than you ever imagined.");
    CMessage("That\'s the thrill %PetName%.");
    CMessage("Dangerous excitement. Are you ready to find out just how far you will go?");
    CMessage("I will push every single one of your limits.");
    holdEdge();
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
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("%LittleGame%");
    CMessage("I\'ll tell you how that works.");
    CMessage("There are three disciplines:");
    CMessage("Stroking - Stroking from slow to fast in cycles, stopping before an edge is reached.");
    CMessage("Speed will increase over time.");
    CMessage("Edging - Reaching the edge repeatedly. Rest time will decrease over time.");
    CMessage("Ballooning - Staying on the edge with minimal sensation.");
    CMessage("Difficulty will increase over time.");
    CMessage("This game has 3 stages.");
    CMessage("Each stage consists of the three disciplines, so that we have a total of 9 rounds.");
    CMessage("Stage 1 has the most stroking, Stage 2 the most edging and Stage 3 the most ballooning.");
    CMessage("STAGE 1");
    CMessage("Round 1: Stroking");
    CMessage("get ready");
    CMessage(random("Stroke", "Wank", "Masturbate"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound1.mp3");
    CMessage("Just follow the beat with a medium to firm grip.");
    //Command:Slideshow(Boobs,Butt,Fast)
	setSlideShow(["BOOBS","BUTTS"],"fast");
    CMessage("Let me help you");
    //TODO: Turn Slideshow on
	slideShowOn();
    sleep(100);
	stopAudio();
    CMessage("%Stop%", 0);
    //TODO: Turn Slideshow off
	slideShowOff();
    CMessage("%RelaxAndBreathe%");
    sleep(20);
    CMessage("Because there is no much rest time here...");
    CMessage(random("Stroke", "Wank", "Masturbate"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound2.mp3");
    CMessage("Now the beat gets a tiny bit faster.");
    CMessage("Nothing to worry about.");
    sleep(20);
    CMessage("If you can, make longer, harder strokes.");
    sleep(20);
    CMessage("You can use this stage to get their PC muscle tensed and that will happen if you push it with the strokes.");
    CMessage("Are you a pro? Are you training your PC muscle while stroking already?");
    CMessage("That\'s hot.");
    sleep(30);
	stopAudio();
    CMessage("%Stop%", 0);
    CMessage("%RelaxAndBreathe%");
    sleep(20);
    CMessage(random("Stroke", "Wank", "Masturbate"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound3.mp3");
    CMessage("Speeding up again.");
    CMessage("Try and keep your stroking technique just the same, %PetName%.");
    CMessage("Nice and firm.");
    CMessage("%Smile%");
    //TODO: Turn Slideshow on
	slideShowOn();
    sleep(100);
	stopAudio();
    CMessage("%Stop%", 0);
	slideShowOff();
    //TODO: Turn Slideshow off
    CMessage("%RelaxAndBreathe%");
    sleep(20);
    CMessage(random("Stroke", "Wank", "Masturbate"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound4.mp3");
    CMessage("Now we\'re going to go really fast.");
    CMessage("Do NOT edge, but tell me if you edge.");
    CMessage("And don\'t loosen your grip.");
    CMessage("This is supposed to get your cock nice and ready for all that edging that is lying ahead of you.");
    CMessage("%Smile%");
    //TODO: Turn Slideshow on
	slideShowOn();
    sleep(60);
	stopAudio();
    CMessage("%Stop%", 0);
	slideShowOff();
    //TODO: Turn Slideshow off
    CMessage("%RelaxAndBreathe%");
    CMessage("STAGE 1");
    CMessage("Round 2: Edging");
    edge();
    CMessage("Well done %PetName%");
    CMessage("Now the real fun starts.");
    edge("%Edge%");
    sleep(30);
    edge();
    CMessage("I hope you are not struggling yet.");
    sleep(25);
    edge();
    CMessage("Are you beginning to detect a pattern here?");
    sleep(05);
    CMessage("Yes, edges will come faster.");
    sleep(05);
    CMessage("This is all about building you up in waves.");
    sleep(05);
    CMessage("That doesn\'t mean you get to play safer with the edges.");
    sleep(05);
    edge();
    CMessage("This is still a nice pace, isn\'t it?");
    sleep(05);
    CMessage("Things will become exhausting, though.");
    sleep(05);
    CMessage("So enjoy this while it lasts. Edge coming up.");
    sleep(05);
    edge();
    CMessage("This stage has the least ammount of edging. So savor it.");
    sleep(10);
    edge();
    CMessage("Second to last edge already, %PetName%");
    sleep(05);
    edge();
    CMessage("I hope this gives you taste of what\'s to come.");
    CMessage("You are going to LOVE Stage 2.");
    CMessage("STAGE 1");
    CMessage("Round 3: Balloning");
    CMessage("Let\'s give you a taste of this.");
    CMessage("Ballooning is about holding the edge, you know.");
    CMessage("So maybe we should skip this rest.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "a4n48dkd()")
    CMessage(random("Stroke ", "Wank ", "Masturbate ") + "to the %Edge% and get ready to Hold");
    CMessage("While holding, you may only use three fingers.");
    CMessage("I\'m so excited! Are you?");
    sleep(60);
    a4n48dkd();
}
function a4n48dkd()
{
	if(!getVar("modlink",false) ){
		CMessage("Hold with three fingers");
		CMessage("I\'m going to take your fingers away one by one.");
		setVar("edgingmode", "Normal");
		CMessage("You will just have to cope by being really fucking close.");
		CMessage("Hold with two fingers");
		CMessage("Oh, I\'m sorry. I didn\'t warn you about this.");
		CMessage("And I\'m usually so good about giving a heads up.");
		CMessage("Oh well. One finger coming up.");
		CMessage("Hold with one finger");
		CMessage("As this is the final of this stage, I want you to be super close when this stop.");
		CMessage("That way I know for sure that you did this round correctly.");
		//--Command:SetLink(AV_Ballooning1)
		setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_Ballooning1.js");
		CMessage("%Stop%", 0);
		CMessage("%RelaxAndBreathe%");
		//--Command:BookmarkModule
		setTempVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral29.js");
		setTempVar("modlink",true);
		setTempVar("dontDelMod",false);
		return;
	}
	delVar("modlink");
    if (isStroking())
    {
        if (isStroking())
        {
            CMessage("%stopstroking%", 0);
            stopStroking();
        }
        if(getVar("av_fetish_pain", false))
        {
            cbt("ball");
        }
        if(!getVar("av_fetish_pain", false))
        {
            sleep(20);
        }
        CMessage("So, we can continue...");
    }
    CMessage(random("Stroke", "Wank", "Masturbate"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound2.mp3");
    CMessage("We\'re going to start a bit slower, but the pace will pick up fast.");
    sleep(randomInt(15, 30));
    CMessage("The stroking round is shorter in this stage, just so you know.");
    sleep(randomInt(15, 30));
    CMessage("So put some effort into it, please.");
    sleep(randomInt(15, 30));
    CMessage("Faster beat now.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "sound3.mp3");
    CMessage("The grip has to be tight from now to the end of the round");
    CMessage("I know it\'s hard, but you can do it");
    CMessage("Get your PC muscle to stay tensed, Baby.");
    CMessage("You need all the prep you can get for what\'s to come.");
    CMessage("Which is... not you %Lol%");
    CMessage("%stopstroking%", 0);
	stopAudio();
    CMessage("STAGE 2");
    CMessage("Round 2: Edging");
    CMessage("Get ready. This is the longest Edging segment");
    edge();
    sleep(30);
    CMessage("This is my favorite speed.");
    CMessage("Treat it with respect and edge nicely, please.");
    DoEdges(4, 5, 0);
    CMessage("Hang in there!");
    CMessage("No mistakes now. You\'re so close to the finish line.");
    DoEdges(5, 6, 0);
    CMessage("%RelaxAndBreathe%");
    CMessage("STAGE 2");
    CMessage("Round 3: Balloning");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "a38yds93()")
    CMessage(random("Stroke ", "Wank ", "Masturbate ") + "to the %Edge% and get ready to Hold");
    CMessage("You may only use three fingers to stay on the edge");
    CMessage("I\'ll be watching how many fingers touch your dick, %PetName%!");
    CMessage("No cheating!");
    sleep(60);
    a38yds93();
}
function a38yds93()
{
	if(!getVar("modlink2",false) ){
		CMessage("Hold with three fingers");
		CMessage("One, two, three. Okay, good!");
		setVar("edgingmode", "Normal");
		CMessage("Get ready to lose that third finger...");
		CMessage("You can always use less fingers, just so you know.");
		CMessage("Hold with two fingers");
		CMessage("One, two. Very nice.");
		CMessage("It\'s really exciting, sitting here and watching you.");
		CMessage("Good thing I have snacks.");
		CMessage("Hold with one finger");
		CMessage("%Lol%!");
		CMessage("Keep at it! This is what Balloning is all about.");
		CMessage("Next, I want you to be super close.");
		CMessage("Hold with full hand");
		CMessage("Grab your cock with your full hand now.");
		CMessage("Tight grip.");
		CMessage("Stroke as slowly as you need to.");
		CMessage("You can even not move it at all.");
		CMessage("But hold the edge and grip tightly.");
		CMessage("2 fingers only after this.");
		CMessage("Hold with two fingers");
		CMessage("You are doing well. Would be a shame to lose the edge now");
		CMessage("You will go back to one finger after this.");
		CMessage("Hold with one finger.");
		CMessage("The finale of Stage 2 is coming up.");
		CMessage("Next, you are only allowed to tap with one finger.");
		CMessage("Don\'t lose the edge, leaky boy.");
		CMessage("Hold with Tapping");
		CMessage("Only short little taps.");
		CMessage("No rubbing. Good boy.");
		CMessage("Hold with one finger");
		//--Command:SetLink(AV_Ballooning2)
		setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_Ballooning2.js");
		CMessage("If you are super close and didn\'t need more fingers than you were allowed, you did it!");
		CMessage("%stopstroking%", 0);
		setTempVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral29.js");
		setTempVar("modlink2",true);
		setTempVar("dontDelMod",false);
		return;
	}
	delVar("modlink2");
    if (isStroking())
    {
        if (isStroking())
        {
            CMessage("%stopstroking%", 0);
            stopStroking();
        }
        CMessage("You will be close to the edge pretty much this entire Stage.");
        //Command:Slideshow(Femdom,Lesbian)
		setSlideShow(["FEMDOM","LESBIAN"]);
    }
    CMessage("Start stroking slowly, get faster until you are near the edge, repeat.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("You may be able to stroke super fast for a long time.");
    CMessage("Then do that and torture your cock.");
    CMessage("You will be allowed to edge soon enough.");
    CMessage("Let me help you");
    //TODO: Turn Slideshow on
	slideShowOn();
    sleep(randomInt(40, 60));
    CMessage("%Stop%", 0);
    //TODO: Turn Slideshow off
	slideShowOff();
    CMessage("STAGE 3");
    CMessage("Round 2: Edging");
    edge();
    sleep(30);
    CMessage("You will get less and less time to rest and edge.");
    CMessage("Promise.");
    edge();
    sleep(25);
    CMessage("Your cock must be so rock hard right now.");
    CMessage("Have you thought about whether or net you get to cum %GeneralTime%?");
    edge();
    sleep(20);
    CMessage("I\'m sure you have.");
    edge();
    sleep(15);
    CMessage("Was that edge close enough? Be honest now.");
    CMessage("Where were we? Oh yes, whether you could cum.");
    edge();
    sleep(10);
    CMessage("This is much better than cuming, wouldn\'t you agree?");
    edge();
    sleep(05);
    CMessage("Feel how hard you are. This is amazing.");
    edge();
    CMessage("You can\'t have this if you came recently.");
    DoEdges(5, 6, 0);
    CMessage("%RelaxAndBreathe%");
    sleep(15);
    CMessage("STAGE 3");
    CMessage("Round 3: Balloning");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "bd92jsw()")
    CMessage(random("Stroke ", "Wank ", "Masturbate ") + "to the %Edge% and Hold");
    CMessage("Come on...");
    sleep(15);
    CMessage("You should be close already");
    sleep(60);
    bd92jsw();
}
function bd92jsw()
{
    CMessage("You will be riding that edge now for a really long time.");
    CMessage("Your cock will not be happy after this.");
    setVar("edgingmode", "Normal");
    CMessage("Hold with three fingers");
    CMessage("No accidents. Three fingers should be easy.");
    CMessage("You should be grateful I\'m giving you this time to ease into it.");
    CMessage("You can guess what\'s coming up, can\'t you?");
    CMessage("Hold with 2 fingers");
    sleep(15);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Slap your balls once a second to make me happy %Smile%");
    }
    CMessage("Hold with 1 finger");
    CMessage("You are getting the hang of this.");
    CMessage("But don\'t get cocky.");
    CMessage("Hold with full hand");
    CMessage("Grab your cock with your full hand now, but do it lightly.");
    CMessage("Stay on the edge with the lightest of touch.");
    CMessage("2 fingers after this.");
    CMessage("Hold with 2 fingers");
    CMessage("Uhh, is that too much sensation for you?");
    CMessage("Careful, don\'t go over!");
    CMessage("Oh and there are no fucking rests.");
    CMessage("1 finger coming up.");
    CMessage("Hold with 1 finger");
    CMessage("Now it\'s time to have some REAL fun.");
    CMessage("Next round, you only get to tap your cock 20 times");
    CMessage("Better be fucking close, %Slave%!");
    CMessage("Hold with Tapping");
    CMessage("Tap tap tap, %Slave%.");
    CMessage("20 taps maximum and super close at the end");
    CMessage("Hold with full hand");
    CMessage("Grab your cock TIGHTLY now.");
    CMessage("Do whatever it takes to stay on edge and not cum!");
    CMessage("2 fingers coming up.");
    CMessage("Hold with two fingers");
    CMessage("You will only be tapping next. I love it.");
    CMessage("Hold with Tapping");
    CMessage("I\'m watching you closely. Tap tap tap.");
    CMessage("Hold with 2 fingers");
    CMessage("This is the Finale, %PetName%.");
    CMessage("1 finger coming up.");
    CMessage("Hold with 1 finger");
    CMessage("Nice and close. The entire time.");
    CMessage("Oh, and by the way: tapping is awaits you.");
    CMessage("Hold with Tapping");
    CMessage("Don\'t ever rub, only tap.");
    CMessage("That cum really wants out, right?");
    CMessage("Hold with 1 finger");
    CMessage("If you are really close, you made it.");
    CMessage("%Stop%", 0);
    CMessage("You made it %SubName%");
    CMessage("I am so proud of you...");
	delVar("dontDelMod");
    return;
    Modulo4();
}
function Modulo4()
{
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Omeleg.js");
    return;
}