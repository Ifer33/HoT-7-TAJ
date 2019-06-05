DMessage("AV_ModGeneral28: start");
main();
DMessage("AV_ModGeneral28: end");
function main()
{
    if(getVar("AV_ModGeneral28_NotFirstTime", false))
    {
        AV_ModGeneral28_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral28", 0);
    setVar("AV_ModGeneral28_NotFirstTime", true);
    AV_ModGeneral28_NotFirstTime();
}
function AV_ModGeneral28_NotFirstTime()
{
    if (getVar("AV_ModGeneral28", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral28", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral28", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral28", getVar("AV_ModGeneral28", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral28", getVar("AV_ModGeneral28", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral28", getVar("AV_ModGeneral28", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral28", getVar("AV_ModGeneral28", 0) + 1000);
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
    setVar("AV_ModGeneral28", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "Edge for us.js");
    CMessage("%RelaxAndBreathe%");
    return;
    Modulo2();
}
function Modulo2()
{
    //--Command:NotStroking
	if(!isStroking() ){
		CMessage("Start %Stroking% again");
		//playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Tri" + java.io.File.separator + "*.mp3");
		setStrokingNoTaunt();
	}
    else
    {
        CMessage("I went to make you stop now, but...");
    }
    CMessage("I decided that I want you to stroke for all your crushes %EmoteSmile%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "uuyhbdf()")
    if(getVar("AV_Know_03", false))
    {
        CMessage("Paying tribute to " + getVar("AV_Persona04", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("%KeepStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("Take a good look at her body.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_58", false))
    {
        CMessage("%KeepStroking% for " + getVar("AV_Persona58", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("Now your secret crush, " + getVar("AV_Persona13", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("%KeepStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("Feels good, right?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_50", false))
    {
        CMessage("%KeepStroking% for " + getVar("AV_Persona50", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("Now, your Crush singer, " + getVar("AV_Persona02", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("%KeepStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("I want you to imagine those are her hands which are running over your %Cock%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_53", false))
    {
        CMessage("%KeepStroking% for " + getVar("AV_Persona53", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Your Crush actress, " + getVar("AV_Persona01", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("%KeepStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Hmm");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_51", false))
    {
        CMessage("%KeepStroking% for " + getVar("AV_Persona51", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_52", false))
    {
        CMessage("Can you take it for " + getVar("AV_Persona52", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_54", false))
    {
        CMessage("It\'s your fault for having so many crushes, like " + getVar("AV_Persona54", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_55", false))
    {
        CMessage("Almost there, don\'t disappoint " + getVar("AV_Persona55", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_56", false))
    {
        CMessage("%KeepStroking% for " + getVar("AV_Persona56", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_57", false))
    {
        CMessage("You can do it for " + getVar("AV_Persona57", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_59", false))
    {
        CMessage(getVar("AV_Persona59", "") + "is the last one");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    }
    uuyhbdf();
}
function uuyhbdf()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    CMessage("That was fun.");
    setVar("edgingmode", "Normal");
    sleep(15);
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
    CMessage("During your training, you will be taught to worship me");
    CMessage("and you will beg me to allow your relief.");
    CMessage("You will learn that you are here for my pleasure");
    CMessage("and you will be trained to obey without questioning.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You may not enjoy everything that I decide to do with you");
    CMessage("but that is part of giving up control.");
    CMessage("In the end, you\'ll be glad to submit to my will.");
    CMessage("A good slave would put his Mistress\' pleasure before his own no matter what.");
    CMessage("He will do anything to please his Mistress, and is able to control his needs in order to serve her.");
    edge();
    CMessage("If it gives me pleasure to see you deny yourself, that is what you will do.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("It\'s necessary to teach man-slaves what it\'s like to be violated.");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("It\'s like a final stamp which seals the submission, and is standard for any training program.");
    }
    CMessage("From now on, you will tell me, if get close to the edge.");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "FailNotEdge2()")
    CMessage("If you are on the edge is already to late.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Now you\'re only supposed to feel your strokes. Nothing more...");
    CMessage("nothing less. And of course the incredible frustration, that you will never be able to spurt while I\'m with you");
    CMessage("Just... frustrating... strokes!");
    CMessage("All the time!");
    CMessage("Now, let\'s begin for real");
    CMessage("What the hell?! You\'re slagging. Stroke fast!");
    CMessage("I recognized you like my pussy... a lot!");
    CMessage("But don\'t concentrate on just one thing.");
    CMessage("The rest of my body is very hot also");
    CMessage("%Stop%", 0);
	stopStroking();
    setVar("edgingmode", "Normal");
    return;
    FailNotEdge2();
}
function FailNotEdge2()
{
    CMessage("%stopstroking%", 0);
	stopStroking();
    setVar("edgingmode", "Normal");
    CMessage("I love that look on your face, that look of pain.");
    CMessage("We’re going to be seeing a lot more of that before we’re through today.");
	cbt("ball");
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
    CMessage("This will be a test of endurance, or maybe it will be easy for you.");
    addContact(2);
    addContact(3);
    addContact(4);
    SMessage("Hi there, yourself", -1, 2);
    SMessage("You have to excuse my smile. I can't stop it, when I see a slave naked with an hard-on",-1,4);
    SMessage("Now, we have to get our mind on something else, your little denied cock", -1, 3);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "FailNotEdge3()")
    CMessage("I bet you are ready for some action, tough boy?!");
    CMessage("Don\'t answer, it\'s rethorical!");
    CMessage("Be careful, if you edge will be punished.");
    CMessage("Let\'s start...");
    SMessage("%AV_GlittersGame%", -1, 2);
    SMessage("%Stop%",-1,2);
    sleep(randomInt(8, 15));
    CMessage("%AV_GlittersGame%");
    CMessage("%Stop%", 0);
    sleep(randomInt(8, 15));
    SMessage("%AV_GlittersGame%", -1, 4);
    SMessage("%Stop%",-1,4);
    sleep(randomInt(8, 15));
    CMessage("%AV_GlittersGame%");
    CMessage("%Stop%", 0);
    sleep(randomInt(8, 15));
    SMessage("%AV_GlittersGame%", -1, 3);
    SMessage("%Stop%", -1,3);
    SMessage("Go faster! We need to train you.", -1, 4);
    SMessage("Other slaves were in better shape than you.", -1, 3);
    SMessage("Stamina-ways we mean. You look pretty decent after all.", -1, 2);
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 20)
        {
            HaveEnough8();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 40)
        {
            HaveEnough8();
            return;
        }
    }
    NotSkipping();
}
function NotSkipping()
{
    SMessage("%AV_GlittersGame%", -1, 4);
    SMessage("%Stop%",-1,4);
    sleep(randomInt(8, 15));
    SMessage("%AV_GlittersGame%", -1, 2);
    SMessage("%Stop%",-1,2);
    sleep(randomInt(8, 15));
    SMessage("%AV_GlittersGame%", -1, 3);
    SMessage("%Stop%", -1,3);
    sleep(randomInt(8, 15));
    HaveEnough8();
}
function HaveEnough8()
{
    CMessage("%ThatsEnough%");
    CMessage("You did %SubName%");
    setVar("edgingmode", "Normal");
    SMessage("Don\'t worry. We\'re done with you now.", -1, 3);
    SMessage("But we will meet pretty soon again.", -1, 4);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    return;
    FailNotEdge3();
}
function FailNotEdge3()
{
    CMessage("%Stop%", 0);
    CMessage("oh oh... Punishment time");
    if(!getVar("av_fetish_pain", false))
    {
        cbt();
    }
    if(getVar("av_fetish_pain", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    }
    NotSkipping();
    return;
    return;
}