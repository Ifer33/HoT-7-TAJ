DMessage("AV_ModGeneral31: start");
main();
DMessage("AV_ModGeneral31: end");
function main()
{
    if(getVar("AV_ModGeneral31_NotFirstTime", false))
    {
        AV_ModGeneral31_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral31", 0);
    setVar("AV_ModGeneral31_NotFirstTime", true);
    AV_ModGeneral31_NotFirstTime();
}
function AV_ModGeneral31_NotFirstTime()
{
    if (getVar("AV_ModGeneral31", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral31", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral31", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral31", getVar("AV_ModGeneral31", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral31", getVar("AV_ModGeneral31", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral31", getVar("AV_ModGeneral31", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral31", getVar("AV_ModGeneral31", 0) + 1000);
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
    setVar("AV_ModGeneral31", 0);
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
    if(getVar("AV_MEM_Crush", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Crush", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
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
    CMessage("I know I make you feel so submissive");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Well now I\'m telling you how to torture your most sensitive body parts.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Yes, this is going to hurt, but you love taking it for me.");
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Of course you do, that\'s the whole point. Your world here has been nothing but frustration.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Man can endure much more than he thinks he can.");
    CMessage("You will at some time today be begging me to let you cum.");
    CMessage("You will think you are at your end.");
    CMessage("But you will be wrong.");
    CMessage("No mater how frustrated you think you are, you won\'t even be close.");
    CMessage("But believe me, you will reach a point where you would do anything just to cum.");
    CMessage("That is what I do here.");
    CMessage("I will break your " + random("spirit", "mind"));
    CMessage("and then I will mould you into the individual I want you to be.");
    CMessage("The lesson being, your pleasure is not important and it is not an option. ");
    if (randomInteger(0, 100) <= -1)
    {
        CMessage("Get used to it.");
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    let answer0 = getInput(random("Is that resentment I see in your eyes?", "Is there still some rebellion in that inadequate mind of yours?"),5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("All I want to see is fear and resignation.");
    CMessage("Resign yourself to your fate.");
    CMessage("Now I\'m not going to be very nice to you.");
    CMessage("Take this piece of string and tie it around your ball sack.");
    setTempVar("AV_BallTied", true);
    CMessage("Tie it tight");
    sleep(30);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I have the almost irresistible urge to pound my knee into those little round peaches.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But not today.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want you to slap those balls 10 times.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Go");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
        sleep(15);
    }
    CMessage("You look a little frustrated %PetName%.");
    CMessage("How are those balls feeling?");
    CMessage(random("Did you tenderise them for me?", "Are they sore and sensitive?"));
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Well it doesn\'t matter how desperate you are.");
    CMessage("No semen better be coming out of the end of that thing");
    CMessage("Keep those balls tied up for me.");
    CMessage("I like to see them bulging like that");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("they make such a delightful target.");
    }
    CMessage("But let\'s not get distracted here.");
    CMessage("You have one purpose here, and one purpose only");
    CMessage("and that is to stroke.");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    if(getVar("av_fetish_cei", false))
    {
        CMessage("you will need a teaspoon go get it, you have 60 seconds");
        sleep(61);
    }
    CMessage("You will no doubt be leaking precum by now.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("You will now need to start collecting this precum.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I will tell you what to do with this precum once you have collected a spoonfull.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Don\'t spill it now, that would be a waste.");
    }
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("give you balls 10 slaps.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(15);
    }
    edge();
	edge();
    if(getVar("av_fetish_pain", false))
    {
        CMessage("give you balls 10 slaps.");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(15);
    }
    CMessage("I am amazed you can control yourself.");
    DoEdges(3, 3, 0);
    if(getVar("av_fetish_cei", false))
    {
        DoEdges(3, 3, 0);
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Let\'s see how much precum you have collected.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Hmm, not as much as I expected.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I want you to drip it onto the palm of your hand.");
        sleep(15);
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Now lick it all");
        sleep(15);
    }
    CMessage("%ThatsEnough%");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("You exist to serve me");
    CMessage("and I\'m perfectly comfortable exploiting that");
    CMessage("Mmmm, I see you\'re so close to cumming.");
    CMessage("Do you want to cum, %Name%?");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("%GoodBoy%");
    CMessage("Good boys obey without question or hesitation.");
    CMessage("Good boys understand that Mistress always knows best");
    CMessage("and will do anything to please her.");
    let answer0 = getInput("And you DO want to please me, don\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    if(!getVar("AV_LikeAnal", false))
    {
        FimMod1();
        return;
    }
    if(getVar("av_NoAskAnal", false))
    {
        FimMod1();
        return;
    }
    if(!getVar("av_doanalnight", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("I see you\'re having fun...");
    CMessage("Let me take care of that");
    CMessage(random("Make sure you get that dildo nice and lubed", "Now get your asspussy wet", "Lube up your dildo and your butt"));
    CMessage("Did you feel that? Yes, imagine that\'s my strap-on.");
    CMessage("it\'s nice and hard for you.");
    CMessage("%KneelForMe%");
    CMessage("Relax... I want you to spread your legs a little further");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put " + randomInt(4, 6) + "clothespins on your %Balls%");
        sleep(30);
    }
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Anal" + java.io.File.separator + "IWillFU0*.mp3");
    CMessage("I am going to fuck your little ass");
    CMessage("Just relax and don\'t touch your cock!");
    CMessage("It will feel so much better this way");
    CMessage("Ok... now take a deep breath aaand");
    CMessage("push in");
    sleep(12);
    CMessage("yes deeper...slowly..");
    CMessage(random("its all in now", "it\'s in"));
    CMessage("Do you like that? I know you do");
    CMessage("Oh my... you\'re already leaking! I think you\'re ready");
    CMessage("Look in my eyes as I penetrate you!  (moans)");
    CMessage("I\'m going to start fucking you, slow");
    CMessage("Yes moan for me... good boy.");
    CMessage("I want you on all fours... now.");
    CMessage("I\'m going to fuck you... hard... and fast..");
    CMessage("hard");
    CMessage("fast");
    CMessage("Yes! You\'re making me so wet!");
    CMessage("Take my cock!");
    CMessage("%StartStroking%");
    CMessage("Oh baby, your cock is leaking so much precum!");
    CMessage("back to slowly fucking your ass.");
    CMessage("%PetName%, you\'re so tight I can see your ass gripping on my cock.");
    CMessage("Slow and gentle... we don\'t want you to cum, do we?");
    CMessage("Relax baby and enjoy the sensations...");
    CMessage("Just feel as massage your prostate.");
    CMessage("I'm going faster now okay... Stop moving your hips...");
    CMessage("You must be really close now...");
    CMessage("I want to stare deep into your eyes as I thrust into your ass.");
    CMessage("Mmm, yes baby...take my cock...you are mine!");
    CMessage("You\'re leaking so much!");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Anal" + java.io.File.separator + "Fucking0*.mp3");
    sleep(20);
    CMessage("I love how you take it baby! This is how we will make love.");
    CMessage("pounds faster and deeper.");
    CMessage("Yes! Feel me fucking you!");
    CMessage("I want you to feel my cock deep in your ass!");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    CMessage("%HolyShit%");
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("I really want to hurt you now...");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Get the spoon, I want you on all fours again.");
        sleep(12);
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Get that ass ready to be spanked...");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Spank");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Again");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("That was beautiful %Name%...");
    CMessage("I can\'t wait to do it again!");
	CMessage("%SitDown%");
    CMessage("You can clean yourself and remove everything");
    sleep(40);
    FimMod1();
}
function FimMod1()
{
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("I want you to entertain me.");
	if (!isStrokingAll())
    {
        setStrokingNoTaunt();
    }
    CMessage("You are going to listen to my instructions and do EXACTLY as I say.");
    CMessage("That\'s right, stroke up and down while I fill your mind with naughty thoughts.");
    CMessage("Show me just how well my good boy can follow instructions.");
    CMessage("I hope you don\'t mind if I join in on the festivities, %Name%.");
    CMessage("No, not like that.");
    CMessage("You just keep touching that magnificent cock while I slip a hand in my panties.");
    CMessage("Mmmmm, just like that, baby.");
    CMessage("Show me how weak, needy, and compliant my good boy can be.");
    CMessage("I think my dirty, submissive little whore needs to learn his place.");
    CMessage("To demonstrate his devotion and self-control.");
    CMessage("Remember, I\'m in charge.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    if(getVar("av_fetish_pain", false))
    {
        //CMessage("%StartStroking%");
		setStrokingNoTaunt();
    }
    CMessage("Ooh, you really DO like it when I torment you like this.");
    CMessage("I think I just saw it twitch.");
    CMessage("%GoodBoy%");
    CMessage("%KeepStroking%");
    CMessage("Speed up ever so slightly.");
    CMessage(random("It\'s so EASY to obey me", "I make you so weak, so powerless, so aroused"));
    CMessage("And you love it, my %PetName%");
    //CMessage("%Edge%");
    //startEdging();
	edge();
    //CMessage("It feels so wonderful to submit, doesn\'t it?");
    //--Command:YesMode(Goto,AV_submit)
	//should be YesMode/customMode
	let answer0 = getInput("It feels so wonderful to submit, doesn\'t it?",3);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        AV_submit();
    }
	answer0 = getInput("To step back and let me take control.",3);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        AV_submit();
    }
	answer0 = getInput("All you have to do is submit and obey.",3);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        AV_submit();
    }
	answer0 = getInput("Good boys " + random("submit", "obey", "let Mistress think for them"),3);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        AV_submit();
    }
	answer0 = getInput("And judging by the expression on your face, I think whatever was left of your brain just melted.",3);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        AV_submit();
    }
    /*CMessage("To step back and let me take control.");
    CMessage("All you have to do is submit and obey.");
    CMessage("Good boys " + random("submit", "obey", "let Mistress think for them"));
    CMessage("And judging by the expression on your face, I think whatever was left of your brain just melted.");*/
    SubmitBack();
	return;
}
function SubmitBack()
{
    CMessage("I want you to know that you\'ll always be safe with me.");
    //--Command:YesMode(Normal)
    let answer0 = getInput("You trust me, don\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("It\'s okay to " + random("want to submit completely", "want a powerful woman to take control", "fantasize about being my naughty little whore"));
    CMessage("So just relax and embrace these feelings.");
    CMessage(random("Surrender everything to me", "Indulge your desires and let yourself grow weak, needy and submissive"));
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I love knowing this turns you on.");
    CMessage("I want to own you and use you.");
    CMessage("To " + random("mold you into my docile, quivering fucktoy", "reprogram you to fit my every whim"));
    CMessage("And with each stroke of your cock, my power over you grows ever so slightly.");
    CMessage("So stroke, submit, and obey, MY good boy.");
    CMessage("%Stop%", 0);
	stopStrokingAll();
    CMessage("%GoodBoy%");
    CMessage("I know you want to touch it so badly");
    CMessage("but you MUST obey my instructions.");
    CMessage("Show me how disciplined MY good boy can be.");
    CMessage("Convince me of your utter devotion.");
    CMessage("Yes, ESPECIALLY if it means surrendering short-term pleasure.");
    CMessage("After all, Mistress knows best, and she will always take care of you.");
    CMessage("So desperate and obedient as you continue to stroke up and down, up and down.");
    CMessage("You\'re completely powerless now.");
    let answer1 = getInput("I bet you\'d do anything I told you to right now. Anything.",5);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        i_Will_Do_AnythingResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        i_Will_Do_Anything_NotResponse();
    }
    CMessage("It\'s so natural, so pleasurable to obey.");
    DoEdges(2, 3, 0);
    CMessage("It feels so good to " + random("submit to my every whim", "be completely owned by me"));
    CMessage("Beg me to use you. Amuse me.");
    CMessage("Let Mistress see just how horny, needy, and owned you are.");
    return;
    AV_submit();
}
function AV_submit()
{
    CMessage("That\'s what I thought.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("And you\'re such a slutty boy, too.");
    }
    CMessage("You " + random("is always horny for Mistress", "think with your cock", "are SO hard and SO VERY, VERY needy", "are ALWAYS ready for Mistress"));
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%KneelForMe%");
    }
    if(!getVar("av_fetish_pain", false))
    {
        SubmitBack();
        return;
    }
    let answer0 = getInput("You\'ll always be hot and needy whenever I want you. Isn\'t that right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage(random("Spank ", "hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    CMessage("%GoodBoy%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ") + "your %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
    }
    CMessage("Now LOOK what you\'ve done to my pretty little pussy.");
    CMessage("My FAVORITE pair of panties are a dripping wet mess");
    CMessage("and it\'s ALL. YOUR. FAULT.");
    SubmitBack();
    return;
    return;
}