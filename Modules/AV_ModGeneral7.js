DMessage("AV_ModGeneral7: start");
main();
DMessage("AV_ModGeneral7: end");
function main()
{
    if(getVar("AV_ModGeneral7_NotFirstTime", false))
    {
        AV_ModGeneral7_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral7", 0);
    setVar("AV_ModGeneral7_NotFirstTime", true);
    AV_ModGeneral7_NotFirstTime();
}
function AV_ModGeneral7_NotFirstTime()
{
    if (getVar("AV_ModGeneral7", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral7", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral7", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral7", getVar("AV_ModGeneral7", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral7", getVar("AV_ModGeneral7", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral7", getVar("AV_ModGeneral7", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral7", getVar("AV_ModGeneral7", 0) + 1000);
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
    setVar("AV_ModGeneral7", 0);
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
    CMessage("God damn it...");
    CMessage("you\'re still hard, shouldn\'t you go soft from being exposed like this?");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("PERVERT...you\'re still fucking hard.");
    }
    CMessage("No, no no...don\'t move, let me...let me do this.");
    CMessage("Have you gotten past the point where your balls tingle all time?");
    CMessage(random("Where you can\'t sleep at night because you can\'t take your mind off the sensations coursing through your cock and your balls", "Where you have to squeeze your legs together in an attempt to find some relief"));
    CMessage("Or, do they still beg to be emptied?");
    CMessage(random("Do you long to spend some time where your cock and balls are not the center of your life", "Would you like to go back to a time where you didn\'t have to touch it all the time"));
    CMessage("If told to submit to a chastity tube, would it be a relief?");
    CMessage("But, you can\'t learn discipline in a chastity device.");
    CMessage("You can\'t learn " + random("to control yourself if you don\'t touch yourself", "what frustration means if you\'re not masturbating"));
    CMessage("Can you, %PetName%?");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("You\'re only allowed to cum WHEN I SAY SO");
    CMessage("this is just like me jacking you off...");
    CMessage("just...HARDER...squeezing harder, and harder...oh this hurts doesn\'t it?");
    CMessage("Having your cock squeezed this hard, your balls in my fist.");
    CMessage("Do you want me to rip them off?");
    CMessage("No?");
    CMessage("%stopstroking%", 0);
	stopStroking();
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put 2 clothespins on your nipples");
        sleep(20);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("And 4 on your balls");
        sleep(20);
    }
    CMessage("show me that horny cock of yours.");
    CMessage("...why don\'t you pose for me a little?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("I know you\'re a pervert. Pretend youre a nasty porn stud...");
    }
    CMessage("Stand up");
    CMessage("yesss...good boy...");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("turn around...yesss");
        gofour();
        return;
    }
    CMessage("turn around...yesss");
    NOgofour();
    return;
    gofour();
}
function gofour()
{
    CMessage("Go get some lube %SubName%");
    sleep(25);
    CMessage("Mmmm...why don\'t you get on all fours for me...");
    CMessage("...mmm...good boy...");
    CMessage("shhh...don\'t turn around.");
    CMessage("Lube your middle finger");
    sleep(20);
    CMessage("rub yourself sensually");
    CMessage("Get your entire ass lubed, and rub it firmly.");
    CMessage("Start to rub in between your cheeks, too.");
    CMessage("Does it feel good when your fingers run over your asshole?");
    sleep(20);
    CMessage("Ohhhh yesss, push it in!");
    CMessage("yess get it in...get it in...");
    CMessage("stuff it all the way in his ass...");
    CMessage("mmmmmmmm....");
    CMessage("Nice and slow, be gentle with it...mmm...");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("just take it like a faggot, pretend its a real cock up your ass....");
    }
    CMessage("good " + "...that\'s it, get assfucked for me.");
    CMessage("Take it up that tight little boy ass.");
    CMessage("Mmmmm...yess...HARDER...do it harder!");
    CMessage("I know you like it.");
    CMessage("Don\'t pretend you don\'t...");
    CMessage("God... your cock looks so delicious bouncing around as you take in your ass.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Such a sexy faggot cock bouncing as you get assfucked");
    }
    CMessage("moan for me...yess...");
    CMessage("deeper, deeper strokes");
    CMessage("get in that ass DEEP!");
    CMessage("take it...");
    CMessage("good boy");
    CMessage("You can stop now");
    CMessage("go clean yourself");
    sleep(25);
    NOgofour();
}
function NOgofour()
{
    CMessage("%KneelForMe%");
    CMessage("you\'re afraid of cumming, though, aren\'t you, %PetName%?");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("you already feel yourself approaching the danger zone, don\'t you?");
    CMessage("I can hear it in the moans that are escaping from your throat.");
    CMessage("I know you\'re struggling.");
    CMessage("But, struggling makes you stronger.");
    CMessage("Doesn\'t it?");
    CMessage("I have to warn you, %PetName%.");
    CMessage("We\'re about to take a very intense run at it.");
    CMessage("This time it\'s going to be really tough.");
    CMessage("Hey, what\'s that glistening on the end of your spew stick?");
    CMessage("Is it...could it be...Yes! It\'s precum.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Wipe it all up and eat it like a good little %PetName%.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Was it yummy? I hope so.");
    }
    //startEdging("%Edge%");
	//CMessage("%stopstrokingedge%", null, false);
	//CMessage("%lettheedgefade%")
    DoEdges(3, 3, 0);
    CMessage("you see, We must bring Our lesson to a proper close.");
    CMessage("So far, you have learned a great deal about " + random("control", "discipline"));
    CMessage("So far, you have learned a great deal about frustration.");
    CMessage("But, there is one last lesson that you need to learn, %PetName%.");
    CMessage("Stroke as slowly as you can until I say to stop", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Do not approach the edge.");
    sleep(20);
    CMessage("%stopstroking%", 0);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("But, keep your fingers and hand wrapped around your %Cock%.");
    CMessage("What do you notice?");
    CMessage("The heat.");
    CMessage("What else?");
    CMessage("you want to stroke it again, don\'t you?");
    CMessage("OK, go ahead and stroke it slowly until I say to stop.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Keep stroking.");
    CMessage("What do you notice?");
    CMessage("you want to stroke faster?");
    CMessage("OK, go ahead and stroke it faster.");
    CMessage("Now what do you notice?");
    CMessage("The edge.");
    CMessage("Oh, even after all the edging you\'ve done, you want to edge again?");
    CMessage("OK, go ahead and edge again.");
    startEdging("%Edge%");
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("Mmmm...that edge is sweet, isn\'t it, %PetName%.");
    CMessage("What do you want, now?");
    CMessage("I knew the answer.");
    CMessage("you want to cum.");
    CMessage("No.");
    CMessage("Take your hands off and put them on your head.");
    CMessage("Notice anything in common there?");
    CMessage("It was always about what YOU wanted, wasn\'t it?");
    CMessage("you wanted to stroke it. you wanted to stroke it faster. you wanted to edge it.");
    CMessage("you NEVER said ANYTHING about what I want.");
    CMessage("But, Who gave you the permission to do those things?");
    CMessage("Very good. I did.");
    CMessage("I am the Mistress, %PetName%.");
    CMessage("And, in the end, you wanted to cum.");
    CMessage("But, did you get to cum?");
    CMessage("No.");
    CMessage("Why?");
    CMessage("Because I said, No.");
    CMessage("Tell Me Who really matters, %PetName%.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("You can remove all clothespins");
    }
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
    CMessage("You\'ve been such a good obedient boy.");
    CMessage("I think you deserve a little treat.");
	lockImages();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    //CMessage("%StartStroking%");
	Stroking();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I know you perv on her");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I know you\'re a dirty pervert.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I know you %Stroke% to her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I know you use her as porn.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("And you don\'t even have any porn of her, do you?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("But you want some. I know.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("You cover your cock with slippery lube");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage(random("and wrap your fist tight around it", "and pump nice and strong"));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("And you look at pictures of her, don\'t you?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I know you do. Pictures of her in cute little dresses");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("and you stroke really hard, looking at how tight they fit her");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("how snug they squeeze her tits");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("and her " + random("hips", "butt"));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("You like to look at her cute bubble butt, huh?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("It\'s OK");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("And I love knowing that you use her as porn.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("She is " + random("not a porn star", "just a normal girl"));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("She is not even naked ... and you %Stroke% to her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Well ... I guess she is almost naked.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("You found bikini pics of her too, didn\'t you?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Does it make you stroke extra hard when you see so much of her body exposed?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Just a few inches of silky fabric covering her skin.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    unlockImages();
	CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Can you believe she go out in public like that in skimpy bikinis?");
    CMessage("And pose for pictures that you can %Stroke% to?");
    CMessage("I wanna know exactly how you " + random("pump ", "jack ") + "it");
    CMessage("and exactly how you squeeze it and rub it with your thumb.");
    //CMessage("%StartStroking%");
	Stroking();
	lockImages();
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I wanna be able make it so perfect that if you close your eyes, you can\'t tell if it\'s your hand or her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Show me " + random("what you do when you look at her in her bikini", "your %Cock%", "how thick and strong you can make it", "how pretty your cock can get when it\'s all slippery and shiny with lube"));
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Grip it nice and tight so you can show me your precum.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Tighter ... make it tighter, baby.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Is that what you do?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Squeeze as tight as you can with your fist and let your fingers bump up against the base of your cock-head?");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("I love how shiny and purple the head of your cock gets when you squeeze it.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Tighten your grip ... tighten your grip and give me your precum.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("Look at " + random("her ", "pictures of her almost-naked body ") + "and %Stroke% to her");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("and make yourself feel good.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    startEdging("%Edge%");
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    //getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
	unlockImages();
    CMessage("I wanna tease the cum outta your %Cock%.");
    CMessage("I know that\'s what you want.");
    CMessage("And I know how you want me to do it.");
    CMessage("It\'s OK, baby");
    CMessage("perv on her.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    CMessage("your balls are so tight with your hot sticky cum");
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
    CMessage("Oh, you\'re getting goosebumps, standing there all naked like that...");
    CMessage("Showing off your body while I\'m just sitting here, enjoying the view");
    CMessage("I almost feel bad for you.");
    CMessage("Almost.");
    CMessage("%KneelForMe%");
    CMessage("That feels more natural, doesn\'t it?");
    CMessage("On your knees on the hard wooden floor, ass on ankles, looking up at me with your hands behind your back.");
    CMessage("And  you\'re getting so hard just waiting for another command.");
    CMessage("Begging with your eyes.");
    CMessage("You\'re lucky I\'m a merciful goddess.");
    CMessage("You don\'t just have to sit there and watch");
    CMessage("but it needs more desperation.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Such a good boy, so obedient... you get a reward.");
    CMessage("I love looking down at you like this... so desperate");
    CMessage("I\'m going to give it to you a reward");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("you\'re not actually in control here. Are you?");
    CMessage("Who wants to be a good boy now? %Lol%");
    CMessage("Oh, you do? I hope so, because I\'m going to pull harder.");
    CMessage("If you serve your goddess well, maybe I\'ll let you edge again soon.");
    CMessage("%StartStroking%");
    CMessage("Do you want me to play with this %Cock%, pressing into my ass?");
    CMessage("Would you like it if I squeezed those big, heavy balls of yours?");
    CMessage("What if I dig my fingernails into your balls, just lightly?");
    CMessage("damn, they sure do make your cock seem huge don\'t they?");
    CMessage("Is that what you\'re thinking about?");
    CMessage("You do seem to be enjoying it this way though, sweetie...");
    CMessage("though you are shaking a bit.. your eyes seem.. hmmm.. strained");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    if(!getVar("av_fetish_pain", false))
    {
        skippain451();
        return;
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("It\'s time for some clothespin art!");
    CMessage("take two of the clothespins and place one on each of your nipples for me.");
    sleep(15);
    CMessage("Let the clothespin bite into you.");
    CMessage("...yesssss.");
    CMessage("Poor, poor baby. Why do you let me hurt you so?");
    CMessage("Place your hands to the clothespins and twist each around clockwise.");
    sleep(15);
    CMessage("...fuck, that hurts doesn\'t it?!!");
    CMessage("Such a compliant one, you are!");
    CMessage("I\'m so proud of you...");
    CMessage("That\'s enough.");
    CMessage("I want you to take four and attach them to your balls.");
    CMessage("Decorate however you wish, so long as all four are somewhere on your swollen, full, tight testicles.");
    CMessage("Get on your knees and look up at me, darling boy.");
    sleep(15);
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("A boy on his knees is a gorgeous thing to witness.");
    CMessage("A boy objectified and used for my amusement is even more splendid.");
    sleep(15);
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Take the spoon");
    setTempVar("av_intera_004", true);
    CMessage("Now strike the spoon against your balls. Make sure you tap it over the clothespins.");
    CMessage("Hit each clothespin 5 times.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank5.mp3");
    sleep(12);
    CMessage("Harder.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank5.mp3");
    sleep(12);
    CMessage("Harder still.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank5.mp3");
    sleep(12);
    CMessage("Hit the clothespins. 1-2-3-4-5.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank5.mp3");
    sleep(12);
    CMessage("Mmmmmmmmmm......");
    CMessage("Such beautiful music you make!");
    CMessage("I\'ve got to admit...hurting you, hitting you...all of this truly excites me.");
    CMessage("My sweet %PetName% is so slick right now.");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%")
    CMessage("Close your eyes, slut!");
    delVar("av_intera_004");
    CMessage("Keeping your eyes closed, remove each of the clothespins from your balls and your nipples.");
    sleep(15);
    CMessage("Run your forefinger and middle finger up and down the shaft...sooth that ache, baby.");
    CMessage("Caress your balls too...they\'ve suffered quite a bit today.");
    sleep(15);
    skippain451();
}
function skippain451()
{
    CMessage("%SitDown%");
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
    CMessage("Now.. you\'ll do exactly as I tell you to");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("and if you\'re a good slut, I might just let you swallow your load right away instead of playing with it first.. %Lol%");
    }
    CMessage("First.. I wanna se that cock of yours");
    CMessage("%KneelForMe% with your legs apart.");
    CMessage("why are you so hard %PetName%?");
    CMessage("do you like this?");
    CMessage("lift your cock and show me your balls");
    CMessage("mm... looks really full of cum");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I hope you\'re hungry %EmoteLaugh%");
    }
    CMessage("Pull back your foreskin to show me the tip of your cock, and then let it go.");
    CMessage("it will take a while until you get to touch it again");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("When you are fucking your ass, you get to play with it again");
    }
    CMessage("I need to ask you something.");
    CMessage("It\'s really important for what I have in mind.");
    CMessage("and please answer honestly.");
    if(!getVar("AV_LikeAnal", false))
    {
        CMessage("Just this once,");
    }
    let answer0 = getInput("So how about it, will you take it up the ass for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Great. Cause we will start with that pretty soon.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No? That is really too bad.");
        increaseAnger(3)
        skipAnal34();
        return;
    }
    CMessage("Go get some lube...");
    sleep(20);
    CMessage("I hope you\'re up for a challenge..");
    CMessage("well.. actually you have no choice... hehe");
    CMessage("It\'s time to get down to business..");
    CMessage("turn around and stand on all fours, with your legs wide apart.");
    CMessage("I want the tip of your cock to brush against the sheets.. teasing it.");
    CMessage("Now show me your asshole..");
    CMessage("spread your cheeks with your hands and let me se it..");
    CMessage("make yourself comfortable, you\'ll be there for a while. hehe");
    CMessage("lube up your middle finger....");
    CMessage("and reach around your back and slowly massage your asshole for me.");
    CMessage("make it really wet and ready.");
    CMessage("Now.. slide that finger in all the way to the knuckle and let it be inside you for a while.");
    CMessage("Look at me");
    CMessage("do you feel like a slut now?");
    CMessage("Put a little bit of pressure on it");
    sleep(10);
    CMessage("do you feel good my slut?");
    CMessage("%SubName%...");
    CMessage("Push it inside, but no more than 1 inch");
    CMessage("Hold it there %SubName%, think about me and my strapon");
    CMessage("Take it out again");
    CMessage("And push it back in, deeper than before");
    CMessage("%EmoteMoan% just feel that cock inside of your ass");
    CMessage("Pull it out...");
    sleep(8);
    CMessage("And slide it in again");
    CMessage("Deeper %SubName%");
    sleep(5);
    CMessage("Even deeper, as deep as you can now");
    CMessage("God that\'s hot");
    CMessage("Do you like having your ass fucked?");
    CMessage("I can se some precum glistening on the tip of your cock");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("use your finger to scoop it up and taste it.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I hope you enjoyed the taste, cuz you\'ll get a lot more in a while.");
    }
    CMessage("Now slut...");
    CMessage("%KneelForMe%");
    CMessage("I want you to start massaging the tip of your cock with some lube.");
    CMessage("stroke it the same pace you fucking your ass.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b075.mp3");
    Logica();
    return;
    skipAnal34();
}
function skipAnal34()
{
    CMessage("I want you to start massaging the tip of your cock with some lube.");
    CMessage("%StartStroking%");
    Logica();
}
function Logica()
{
    CMessage("Good boy...");
    CMessage("you are right!");
    CMessage("Ass shows are the best!");
    CMessage("%stopstroking%", 0);
    CMessage("%SitDown% and clean yourself up");
    sleep(20);
    return;
}