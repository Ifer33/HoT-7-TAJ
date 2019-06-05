DMessage("AV_ModGeneral26: start");
main();
DMessage("AV_ModGeneral26: end");
function main()
{
    if(getVar("AV_ModGeneral26_NotFirstTime", false))
    {
        AV_ModGeneral26_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral26", 0);
    setVar("AV_ModGeneral26_NotFirstTime", true);
    AV_ModGeneral26_NotFirstTime();
}
function AV_ModGeneral26_NotFirstTime()
{
    if (getVar("AV_ModGeneral26", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral26", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral26", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral26", getVar("AV_ModGeneral26", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral26", getVar("AV_ModGeneral26", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral26", getVar("AV_ModGeneral26", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral26", getVar("AV_ModGeneral26", 0) + 1000);
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
    setVar("AV_ModGeneral26", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("You know what I really love?");
    CMessage("The control you maintain over that %Cock%");
    CMessage("Getting so close");
    addContact(4);
    CMessage("Knowing how fucking <i>good</i> it would feel if you just let yourself go over");
    CMessage("But holding back for me");
    CMessage("No matter how much you want it");
    CMessage("How much it <i>hurts</i>");
    CMessage("Because it\'s what I want");
    SMessage("Wow %DomName%", -1, 4);
    CMessage("Hi %domFriend3Name%");
    CMessage("Want to make %SubName% stop for me?", 0);
    SMessage("Sure, I will try something different", -1, 4);
    SMessage("I will count you down %SubName%", -1, 4);
    SMessage("%domFriend3Name% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "5toStop.mp3");
    sleep(10);
    SMessage("%Stop%", 0,4);
    stopStroking();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "GoodBoy*.mp3");
    sleep(10);
    if(!getVar("AV_MasuDone", false))
    {
        end3430();
        return;
    }
    SMessage("Hey %DomName%, can I try that Masu thing you talked about?", -1, 4);
    CMessage("Sure, you already know the beats...");
    SMessage("Great, let\'s try %SubName%", -1, 4);
    SMessage("But I think you should %KneelForMe%", -1, 4);
    SMessage("That\'s right...", -1, 4);
    setVar("AV_MasuRounds", getVar("%Random6%, 10", 0));
    MasuLoop();
}
function MasuLoop()
{
    switch(random("Mas1", "Mas2", "Mas3", "Mas4", "Mas5", "Mas6", "Mas7", "Mas8", "Mas9", "Mas10", "Mas11"))
    {
        case "Mas1":
        Mas1();
        return;
        break;
        case "Mas2":
        Mas2();
        return;
        break;
        case "Mas3":
        Mas3();
        return;
        break;
        case "Mas4":
        Mas4();
        return;
        break;
        case "Mas5":
        Mas5();
        return;
        break;
        case "Mas6":
        Mas6();
        return;
        break;
        case "Mas7":
        Mas7();
        return;
        break;
        case "Mas8":
        Mas8();
        return;
        break;
        case "Mas9":
        Mas9();
        return;
        break;
        case "Mas10":
        Mas10();
        return;
        break;
        case "Mas11":
        Mas11();
        return;
        break;
    }
    Mas1();
}
function Mas1()
{
    SMessage(random("ONE two three four, ONE two three four", "ONE two three four", "Dog"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogdog120.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas2();
}
function Mas2()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat100.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas3();
}
function Mas3()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat120.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas4();
}
function Mas4()
{
    SMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas5();
}
function Mas5()
{
    //--UNINTERPRETED LINE:@Contact3 DOG & CAT @PlayAudio[tease\Masu\dogcat80.wav] @sleep(25)
	SMessage("DOG & CAT", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat80.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas6();
}
function Mas6()
{
    //--UNINTERPRETED LINE:@Contact3 DOG & CAT @PlayAudio[tease\Masu\dogcat100.wav] @sleep(20)
	SMessage("DOG & CAT", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas7();
}
function Mas7()
{
    //--UNINTERPRETED LINE:@Contact3 DOG & CAT faster @PlayAudio[tease\Masu\dogcat140.wav] @sleep(15)
	SMessage("DOG & CAT", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas8();
}
function Mas8()
{
    //--UNINTERPRETED LINE:@Contact3 DOG & CAT switch @PlayAudio[tease\Masu\dogcat-switch140.mp3] @sleep(18)
	SMessage("DOG & CAT", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-switch140.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas9();
}
function Mas9()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas10();
}
function Mas10()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake120.wav");
    sleep(17);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas11();
}
function Mas11()
{
    SMessage(random("Snake", "ONE and two, THREE and four"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    MasuBreak();
}
function MasuBreak()
{
    SMessage(random("Imagine if we played Masu for several hours at competition speed how much cum would have built up", "Knowing all this, knowing you will not be able to cum and dancing near the edge is the very essence of highlevel Masu play", "If you do it right you will enter a blisfull trance like state", "That\'s it. Keep your form. Work it hard", "Stroke is To Obey"), -1, 4);
    if (getVar("AV_MasuTrain", 0) >= getVar("AV_MasuRounds", 0))
    {
        MasuEnds();
        return;
    }
    MasuLoop();
    return;
    MasuEnds();
}
function MasuEnds()
{
    SMessage("%ThatsEnough%", -1, 4);
    end3430();
}
function end3430()
{
    SMessage("See you later, thanks for let me use %SubName%", -1, 4);
    CMessage("Bye %domFriend3Name%");
    removeContact(4);
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
    CMessage("Let\'s see if you can follow my orders %SubName%..");
    CMessage("Hmm...can you make your cock even harder %PetName%");
    CMessage("you don\'t seem to be all that well trained for a slave..");
    CMessage("Look at your leaking " + "you haven\'t even touched it yet..");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("you need this..");
    CMessage("Do you need it so badly so that youll go crazy if you dont shoot your juice?");
    let answer0 = getInput("Is it so bad so that you have trouble falling asleep at night?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo1225();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I don\'t belive you..");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You are just " + "that\'s all!");
    }
    AV_Timeo1225();
}
function AV_Timeo1225()
{
    CMessage("Aaww you poor helpless " + "look at you..");
    let answer0 = getInput("Am I being too mean torwards you %PetName%?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        youreMeanResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("You are the one here who wants " + "not me..");
    CMessage("Look at it throbbing just from a couple of strokes..");
    CMessage("Maybe you do really need it afterall");
    CMessage("Try to imagine how good your orgasm would feel if you get to cum %GeneralTime%..");
    CMessage("And that big relief " + "it would feel so good %PetName% " + "wouldn\'t it?");
    CMessage("Getting rid of all that build up pressure in your denied balls..");
    CMessage("I know it would slave..");
    CMessage(random("You are into tease and denial", "You like to be toyed and played with", "You like to be used and abused by woman"));
    CMessage("Does that gets your cock really hard and throbbing %Slave%?");
    CMessage("Relax %PetName% " + "try to focus and keep stroking");
    if (randomInteger(1, 100) <= 50)
    {
        t23we23();
        return;
    }
    CMessage("Think about that very last stroke later today right before you start to shoot a huge torrent of cum all over the place..");
    CMessage("as i said..");
    CMessage("You get denied and denied and after whatever amount of time, there is this big " + "right?");
    CMessage("This big satisfying explosiion that you are craving so much..");
    efwio8();
    return;
    t23we23();
}
function t23we23()
{
    CMessage("That\'s always the big highlight of this " + "right?");
    CMessage("Cumming after you\'ve been brutally denied for weeks and " + "or even months?");
    let answer0 = getInput("Tease and denial is awesome.. isnt it?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveTeaseAndDenialResponse();
    }
    CMessage("So " + "such a " + "all the uncertainty");
    efwio8();
}
function efwio8()
{
    CMessage("I can see your cock reacting to every word I\'m saying %PetName%..");
    CMessage("Or could it be the anticipation about what I am going to to with you?");
    CMessage("No no no %Slave%, we are far from done..");
    CMessage("Slow down");
    CMessage("You are a trembling mess");
    CMessage("But you like it.. don\'t you %SubName%?");
    CMessage("Are you getting close slave?");
    let answer0 = getInput("That big creamy load is building and " + "isn\'t it?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo1335();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Soon %Slave%.. soon..");
        a3d380k();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Just keep stroking that big thick leaking cock for " + "enjoy it");
    }
    AV_Timeo1335();
}
function AV_Timeo1335()
{
    CMessage("Stroke faster!!");
	speedUpStroking();
    a3d380k();
}
function a3d380k()
{
    CMessage("Work that cock %Slave%!");
    CMessage("Because that is what your mistress wants right now!");
    CMessage("All I want you to do is to be an obedient boy for me");
    edge();
    CMessage("Very good");
    CMessage("I like your level of obedience that you\'re showing %SubName%");
    CMessage("I\'m just going to teach you how you can show some real devotion torwards your mistress..");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Little %Slave% like you need to be reminded of their place..");
    }
    edge();
    CMessage("Tell me " + "do you think that you deserve to cum?");
    CMessage("Do you feel entitled to do so because you held your little load in your balls for so long?");
    CMessage("Take the other hand and caress your left nipple while you edge yourself..");
    holdEdge();
    CMessage("We will move on to phase 2 of your training very soon..");
    CMessage("Let\'s see if we can make that slavecock twitch some more for me..");
    CMessage("%KneelForMe%");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Look at me and keep stroking that helpless cock..");
    CMessage("Show me how happy you are that you\'re allowed to stroke for me %PetName%");
    CMessage("Do you crave this feeling strokerboy?");
    let answer0 = getInput("To be completly hopleless and at my mercy?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveBeingControlledResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("you will edge again for me soon..");
    CMessage("And when you do, I want you to let go of your cock and get on all fours and remain in that position..");
    CMessage("Like the good little doggy that you are..");
    let answer1 = getInput("Understood?", 5);
    if (answer1.isTimeout())
    {
        AV_Timeo1375();
        return;
    }
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("I won't say it again slaveboy..stop it..");
    }
    AV_Timeo1375();
}
function AV_Timeo1375()
{
    CMessage("stroke your aching slavecock faster again");
    CMessage("That\'s a little better..");
    CMessage("Don\'t you want to edge for me again?");
    CMessage("Go " + "edge like i said..");
    edge();
    CMessage("Don\'t spuirt yet slave..");
    CMessage("I haven\'t given you permission yet!");
    CMessage("%GoodBoy%");
    CMessage("Stay on all fours but you can use a hand to stroke");
    CMessage("%StartStroking%");
    CMessage("Let\'s me make a new rule..");
    CMessage("Everytime you edge i want to see some precum dripping down on the floor..");
    CMessage("Is it humiliating slave?");
    CMessage("I mean.. there you " + "a leaking horny " + "willing to do everything i tell you..");
    CMessage("A submissive litte thing..");
    CMessage("You just want to " + "right?");
    DoEdges(2, 3, 0);
    CMessage("What a good edgeboy you can be..");
    CMessage("Sit down and hands behind your back!");
    CMessage("But you can always do more of " + "more leaking, more suffering..");
    CMessage("If that\'s what makes your mistress happy..");
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
    let answer0 = getInput("Do you think you deserve to look at the sexy nude body of a girl like me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("No, you don\'t.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s correct, you don\'t.");
    }
    CMessage("All you deserve is looking at girls feet.");
    CMessage("And this is what we\'ll instil in your brain today!");
    CMessage("So, I will put a sexy slideshow");
    CMessage("Don\'t get distracted by pussies, tits, or asses.");
    CMessage("%Stroke% only looking at feet.");
    CMessage("If you can\'t see a feet, hands off.");
    CMessage("When I am done with you today...");
    //Command:Slideshow(Lesbian,Softcore,slow)
	setSlideShow(["LESBIAN","SOFTCORE"],"slow");
    CMessage("every time you see a nude girl, your attention will automatically be drawn to her feet, and away from her nude body.");
    //TODO: Turn Slideshow on
	slideShowOn();
    CMessage("Go ahead, %Stroke% to foot.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	//setStrokingNoTaunt();
	CMessage("%StartStroking%");
    sleep(10);
    sleep(11);
    CMessage("Some of the girls got really hot butts.");
    sleep(10);
    sleep(11);
    CMessage("But that\'s nothing you should care about anymore.");
    sleep(11);
    CMessage("You only deserve to look at feet!");
    sleep(10);
	slideShowOff();
    CMessage("%Stop%", 0);
	stopStroking();
    //TODO: Turn Slideshow off
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    addContact(2);
    CMessage("Hey %domFriend1Name%");
    SMessage("Hi %EmoteLaugh%", -1, 2);
    CMessage("I need to take care of something here, but I will keep a eye in the chat");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    CMessage("Now we\'re going to play a dangerous game.");
    CMessage("Are you excited?");
    CMessage("There's going to be risks involved, but that's not going to stop you.");
    CMessage("I\'m going to let you stroke to me.");
    CMessage("I\'m going to get you so addicted, so entranced.");
    CMessage("Don\'t try to fight it. you\'re already lost.");
    setVar("AV_Glitteroverdives", 0);
    if(getVar("av_fetish_rough", false))
    {
        CMessage("So deep for me loser. I own you.");
    }
    CMessage("You will %Stroke% along a few overdrives");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "f23ww3f7()")
    CMessage("Let\'s see how many you get withot edging");
    CMessage("Get ready");
    CMessage("First one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive3.mp3");
    sleep(35);
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("AV_Glitteroverdives", getVar("AV_Glitteroverdives", 0) + 1);
    CMessage(random("Just give it everything you\'ve got right now!", "You like to edge, you want to edge, you NEED to edge", "You can go faster, I know you can!", "Just a quick sprint to the finish now!", "Come on", "just a bit faster for me!", "Are you holding out for me?"));
    CMessage("Second");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive3.mp3");
    sleep(35);
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("AV_Glitteroverdives", getVar("AV_Glitteroverdives", 0) + 1);
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You stupid slave. And now that I have you nice and pliable I\'m going to take advantage of you loser.");
    }
    CMessage("I told you it was going to be dangerous, but you couldn\'t control yourself with that little dick throbbing.");
    CMessage("A girl like me driving you crazy...");
    CMessage("Another one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive3.mp3");
    sleep(35);
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("AV_Glitteroverdives", getVar("AV_Glitteroverdives", 0) + 1);
    CMessage(random("Just give it everything you\'ve got right now!", "You like to edge, you want to edge, you NEED to edge", "You can go faster, I know you can!", "Just a quick sprint to the finish now!", "Come on", "just a bit faster for me!", "Are you holding out for me?"));
    CMessage("Another one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive3.mp3");
    sleep(35);
	stopAudio();
    CMessage("%Stop%", 0);
    setVar("AV_Glitteroverdives", getVar("AV_Glitteroverdives", 0) + 1);
    CMessage("Teasing you, reminding you of what you can never have.");
    CMessage("Yet it only makes you want me more.");
    CMessage("You\'re so easily manipulated by me.");
    CMessage("Another one");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive3.mp3");
    sleep(35);
	stopAudio();
    CMessage("%Stop%", 0);
    CMessage("Wow, you did without edging");
    CMessage("good job");
    a3f7jaslo();
    return;
    f23ww3f7();
}
function f23ww3f7()
{
    CMessage("%HoldTheEdge%");
	stopAudio();
    if (getVar("AV_Glitteroverdives", 0) == 0)
    {
        Over0();
        return;
    }
    if (getVar("AV_Glitteroverdives", 0) == 1)
    {
        Over1();
        return;
    }
    if (getVar("AV_Glitteroverdives", 0) == 2)
    {
        Over2();
        return;
    }
    if (getVar("AV_Glitteroverdives", 0) == 3)
    {
        Over3();
        return;
    }
    if (getVar("AV_Glitteroverdives", 0) == 4)
    {
        Over4();
        return;
    }
    Over0();
}
function Over0()
{
    CMessage("You didn\'t got even 1 overdrive?");
    CMessage("%HoldingEdge%");
    CMessage("bad slave...");
	stopAudio();
    CMessage("%Stop%", 0);
    CMessage("%DomName% would want a punishment for you, so...");
    a287Punish();
    return;
    Over1();
}
function Over1()
{
    CMessage("Just 1 overdrive done?");
    CMessage("Not good");
    CMessage("%Stop%", 0);
	stopAudio();
    CMessage("%DomName% would want a punishment for you, so...");
    a287Punish();
    return;
    Over2();
}
function Over2()
{
    CMessage("Just 2 overdrives?");
    CMessage("I will not punish you, but hold that edge a little longer...");
    sleep(10);
	stopAudio();
    CMessage("%Stop%", 0);
    Over3();
}
function Over3()
{
    CMessage("%Stop%", 0);
	stopAudio();
    CMessage("3 overdrives are good");
    a3f7jaslo();
    return;
    Over4();
}
function Over4()
{
    CMessage("%Stop%", 0);
	stopAudio();
    CMessage("Well, you almost did it...");
    CMessage("It\'s good enough for me.");
    a3f7jaslo();
    return;
    a287Punish();
}
function a287Punish()
{
    CMessage("I just hope those balls of yours aren\'t too full because as you know cummies are earned in this lifestyle!");
    CMessage("Stand up");
    sleep(10);
    CMessage("Present your ass for me to inspect %PetName%...");
    CMessage("Mmmm. Only one thing wrong with it right now.");
    CMessage("It\'s not red enough. Now do you want to earn my respect?");
    CMessage("Take the paddle and give each cheek at least 20 spanks!");
    CMessage("Right ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(15);
    CMessage("Left ass");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(15);
    CMessage("Ohhhh, done so quick...I know you can do more than that for Goddess but whatever.");
    CMessage("Maybe next time you will work a little harder at exceeding expectations!");
    a3f7jaslo();
    return;
    a3f7jaslo();
}
function a3f7jaslo()
{
    SMessage("%SitDown%", -1, 2);
    setVar("edgingmode", "Normal");
    SMessage("He\'s all yours %DomName%", -1, 2);
    addContact(1);
    CMessage("%EmoteSmile%");
    removeContact(2);
    return;
}