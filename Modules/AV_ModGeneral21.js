DMessage("AV_ModGeneral21: start");
edged=false;
main();
DMessage("AV_ModGeneral21: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    if (randomInteger(1, 100) <= 50)
    {
        DecidEdge();
        return;
    }
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    IniModule();
    return;
    DecidEdge();
}
function DecidEdge()
{
    edge();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    IniModule();
}
function IniModule()
{
    if(getVar("AV_ModGeneral21_NotFirstTime", false))
    {
        AV_ModGeneral21_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral21", 0);
    setVar("AV_ModGeneral21_NotFirstTime", true);
    AV_ModGeneral21_NotFirstTime();
}
function AV_ModGeneral21_NotFirstTime()
{
    if (getVar("AV_ModGeneral21", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral21", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral21", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral21", getVar("AV_ModGeneral21", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral21", getVar("AV_ModGeneral21", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral21", getVar("AV_ModGeneral21", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral21", getVar("AV_ModGeneral21", 0) + 1000);
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
    setVar("AV_ModGeneral21", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Wow, these %Balls% look amazing.");
    CMessage("I think we could get them more blue, what do you think?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get ready to give them a few hard smacks");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("and I want you to hit them how hard I would be hitting them if I was there.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Go");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
		stopAudio();
    }
    if(getVar("av_fetish_rough", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Don\'t you go being a little pussy now, I said REALLY fucking hit them you filthy little whore!");
    }
    CMessage("Your balls were full and aching?!?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Go");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(15);
		stopAudio();
        CMessage("How do your balls feel *now,* huh? ");
    }
    CMessage("Aw, they hurt?  That\'s so sad for you");
    CMessage("Mmmm, your cock is literally throbbing, and your balls feel really full.");
    CMessage("Is that what all my teasing did to you?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    if(getVar("av_fetish_rough", false))
    {
        CMessage("you really are a filthy slut. I love it.");
    }
    CMessage("Keep on wanking while giving your balls a good massage...");
    if(!getVar("av_fetish_pain", false))
    {
        r237bg();
        return;
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Get two clothespins and put them on your nipples.");
    CMessage("And " + randomInt(3, 5) + "in your %Balls%");
    sleep(20);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    r237bg();
}
function r237bg()
{
    CMessage("I don\'t want you cumming just yet..");
    CMessage("Don\'t you realize that your training would be seriously compromised if you had an \'accident\'?");
    CMessage("Today I am in teasing mood");
    CMessage("and you know that the tease comes with the denial most of the times");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("but this time is even more special because");
    switch(random("GLR01", "GLR02", "GLR03"))
    {
        case "GLR01":
        GLR01();
        return;
        break;
        case "GLR02":
        GLR02();
        return;
        break;
        case "GLR03":
        GLR03();
        return;
        break;
    }
    GLR01();
}
function GLR01()
{
    CMessage("%domFriend1Name% wanna come here just to give you a few commands");
    addContact(2);
	removeContact(1);
    SMessage("It\'s so easy to tease you.", -1, 2);
    SMessage("So take your cock and lead yourself into the hands of seduction.", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    SMessage("Forget whatever was in your mind", -1, 2);
    SMessage("All I want to do is play with your cock and your mind.", -1, 2);
    CMessage("%stopstroking%", 0);
	stopAudio();
	stopStrokingAll();
    sleep(10);
    SMessage("You are nothing but a mere mortal before your Goddess.", -1, 2);
    SMessage("Just move your hand on your cock for me.", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    SMessage("I am your Masturbatrix who allows you to lose yourself for me.", -1, 2);
    SMessage("Your brain is lost.", -1, 2);
    SMessage("And you are left in a state that will make you more and more addicted to the desire to cum.", -1, 2);
    SMessage("More and more addicted to my words and the playful games that I am going to play with you.", -1, 2);
	stopAudio();
    DoEdges(2, 3, 0);
	addContact(1);
    SMessage("I\'m satisfied .... for now", -1, 2);
    SMessage("He\'s all yours %DomName%", -1, 2);
    CMessage("%EmoteSmile%");
    removeContact(2);
    GlitterGoes();
    return;
    GLR02();
}
function GLR02()
{
    CMessage("%domFriend2Name% wanna come here just to give you a few commands");
    addContact(3);
	removeContact(1);
    SMessage("One day you won\'t be able to live without being under control", -1, 3);
    SMessage("%KneelForMe%", -1, 3);
    SMessage("You can no longer enjoy a normal relationship.", -1, 3);
    SMessage("You need your orders, you need your seduction.", -1, 3);
    SMessage("Poor %PetName%, you desire more of teasing, more of torture.", -1, 3);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Spank ", "Hit ") + "your balls", -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    SMessage("Move your hand for me, release all your energy, make your desires come true.", -1, 3);
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    SMessage("I am here for you. You need guidance, you need approval.", -1, 3);
    SMessage("I\'m going to keep you on the edge", -1, 3);
    SMessage("until I give the order, until my lips pronounce the words", -1, 3);
    SMessage("You are so filled with anticipation", -1, 3);
    SMessage("Feeling it so strongly now as you play with your cock while I play with your mind", -1, 3);
    SMessage("Wait for my words...", -1, 3);
    holdEdge();
    SMessage("I\'m satisfied .... for now", -1, 3);
    SMessage("%SitDown%", -1, 3);
    SMessage("He\'s all yours %DomName%", -1, 3);
	addContact(1);
    CMessage("%EmoteSmile%");
    removeContact(3);
    GlitterGoes();
    return;
    GLR03();
}
function GLR03()
{
    CMessage("%domFriend3Name% wanna come here just to give you a few commands");
    addContact(4);
    SMessage("After several Tease & Denial sessions",-1,4);
	removeContact(1);
    SMessage("you\'re slowly getting the point of all this", -1, 4);
    SMessage("You are a slave.", -1, 4);
    SMessage("%KneelForMe%", -1, 4);
    SMessage("You don\'t get to say \"No\".", -1, 4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Spank ", "Hit ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(21);
		stopAudio();
    }
    SMessage("The Girls are in charge.", -1, 4);
    SMessage("Everything we do is for our pleasure, not yours.", -1, 4);
    DoEdges(2, 3, 0);
    SMessage("You are a tool for us to use as we see fit.", -1, 4);
    SMessage("You can get as frustrated as you want, but I\'ll only punish you further.", -1, 4);
    if(getVar("av_fetish_pain", false))
    {
        SMessage(random("Spank ", "Hit ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(21);
		stopAudio();
    }
    SMessage("I am an evil, cruel, slightly psychotic, cock teasing SADIST, and you belong to me now!", -1, 4);
    DoEdges(2, 3, 0);
    SMessage("I\'m satisfied .... for now", -1, 4);
    SMessage("%SitDown%", -1, 4);
	addContact(1);
    SMessage("He\'s all yours %DomName%", -1, 4);
    CMessage("%EmoteSmile%");
    removeContact(4);
    GlitterGoes();
    return;
    GlitterGoes();
}
function GlitterGoes()
{
    CMessage("Oh, don\'t forget who\'s in control here.");
    CMessage("I dominate YOU.");
    CMessage("You love to be ordered around by me.");
    CMessage("You love me to tell you exactly what I want you to do.");
    CMessage("You\'re practically drooling at the sight of me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("You want me SOOOO badly.");
    CMessage("You want my pussy, my delicious ass, my breasts.");
    CMessage("You want to taste them all.");
    CMessage("You want my panties especially, don\'t you!");
    CMessage("My smitten jerk boy just can\'t get enough.");
    CMessage("If you\'re a good jerk boy, I may let you sniff my panties someday.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("I thought now we should do one of my most favorite things!");
    if(!getVar("av_fetish_pain", false))
    {
        AV_DontPain32();
        return;
    }
    CMessage("Well, CBT, of course!");
    CMessage("And since I can\'t be right there doing it for you, I am going to instruct you on just how I like it done.");
    CMessage("Doesn\'t this sound like fun?");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Your cock and balls are my new toy");
    CMessage("%KneelForMe%");
    sleep(10);
    CMessage("Get the spoon and be ready to " + random("spank ", "hit ") + "your %Balls%...");
    sleep(10);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    CMessage("Time to put that %Balls% to good use.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    CMessage("Now put 2 clothespins on your niples and " + randomInt(3, 6) + "on your balls");
    sleep(20);
    CMessage("You know how much I love knowing that you\'re suffering right?");
    AV_DontPain32();
}
function AV_DontPain32()
{
    CMessage("I know how bad you want to stroke it right now, there is just nothing else in your little mind.");
    CMessage("Well go ahead, I give you permission.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("I want you to stroke while I tease you");
    CMessage("but I don\'t want you to cum until I tell you so.");
    CMessage("I just want to " + random("tease you", "build up that orgasm"));
    CMessage(random("Because I know the more you stroke, the more addicted you become to me", "Sometimes I need to tease and deny you as a means of control"));
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You\'re not worthy of cumming all the time.");
    }
    CMessage("I control " + random("your %Cock%", "your orgasms"));
    let answer0 = getInput("And you will take me teasing and denying you as much as I want, won\'t you %PetName%?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You need this abuse, you crave it.");
    }
    CMessage("It\'s torture, but you\'ll endure it for your Goddess.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("It\'s the price you must pay for the privilege of being allowed to stroke before your Goddess.");
    }
    edge();
    CMessage(random("It doesn\'t even matter, you know what\'s up now", "Whatever, I know what I can make you do now"));
    CMessage("I am in charge and decide when and how often you can touch it");
    CMessage("I am the boss and " + random("I am in control", "have the power"));
    if(!getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(3, 4, 0);
    }
    CMessage("Teasing your %Cock%, and giving it my own pleasure is one of my favorite ways to pass the time.");
    CMessage("I enjoy making you hard");
    CMessage("and I know you crave me playing with it.");
    let answer1 = getInput(random("So are you going to give it to me, and experience my pleasure", "Are you brave enough to offer your cock up to me"),7);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("There are so many ways that I enjoy tormenting cock");
    CMessage("and I plan on having you experience each one since your cock now belongs to me.");
    edge();
    CMessage("I want to see just how many implements it takes to break you...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("to challenge your pain tolerance.");
    }
    CMessage("Perhaps you should think more with your brain before handing yourself over to sadistic women");
    if(!getVar("av_fetish_pain", false))
    {
        AV_DontPain34();
        return;
    }
    CMessage("Remove all the clothespins");
    sleep(20);
    CMessage("Get ready with the spoon again...");
    CMessage(random("spank ", "hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    edge();
    CMessage(random("spank ", "hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    if(!getVar("AV_DommeMistress", false))
    {
        edge();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("spank ", "hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
	stopAudio();
    CMessage("%SitDown%");
    AV_DontPain34();
}
function AV_DontPain34()
{
    CMessage("The only thing that matters is My amusement");
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("You know, I really do want to hear you moan though... can\'t a %Owner% want that?");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("I want to listen to you drowning in pleasure because of me.");
    CMessage("Yes baby, I hear it... it\'s sounds so... thick.");
    CMessage("Keep stroking and imagine its my hand on your cock %PetName%.");
    CMessage("I love hearing you stroke that cock while we talk.");
    CMessage("It\'s so stiff and sticky, and I know it\'s my fault.");
    CMessage("That cock is just for me, right %SubName%?");
    CMessage("I can have that cock whenever I want?");
    let answer0 = getInput("...however I want?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo61();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Really?");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        increaseAnger(3)
    }
    AV_Timeo61();
}
function AV_Timeo61()
{
    CMessage("Yes baby, I am your %Owner% after all.");
    CMessage("Give in %PetName%, give into the pleasure... into the lust. I want you to lust for me.");
    CMessage("I want you to want me the way I want you.");
    CMessage("Want me. Need me. You are...all...mine.");
    DoEdges(2, 3, 0);
    CMessage("You need to know how to control your %Cock%");
    CMessage("So that means that you must control yourself and not just jerk as fast as you can, ok?");
    CMessage("%StartStroking%");
    CMessage("Slow...at that pace");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    CMessage("%DontStop%");
    sleep(20);
    CMessage("Now lets see if you can control your lust");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "b055.mp3");
    if(!getVar("av_fetish_cei", false))
    {
        CMessage("Looks like you are dripping with pre-cum.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Looks like you are dripping with pre-cum why don\'t you lick it up?");
    }
	stopAudio();
    CMessage("%stopstroking%", 0);
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("We\'re going to play Red Light Green Light!");
    setVar("AV_RGBRounds", 0);
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% as fast as you physically can when I say green!");
        setVar("AV_RGB", randomInt(10, 15));
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%Stroke% as fast as you physically can when I say green!");
        setVar("AV_RGB", randomInt(8, 10));
    }
    CMessage("HANDS OFF, when I say red");
    CMessage("This time, your goal IS TO EDGE during these intense but short sequences!");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "AV_FimRGB()")
    CMessage("Ready?");
    AV_RGBLoop();
	return;
}
function AV_RGBLoop()
{
	if(!edged){
    CMessage("%AV_GreenLight%");
	}if(!edged){
	//greenLight();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
	}if(!edged){
    sleep(randomInt(5, 8));
    //redLight();
	}if(!edged){
		CMessage("%redLight%");
	}if(!edged){
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		stopAudio();
	}if(!edged){
		sleep( randomInt(15, 20));
	}if(!edged){
		setVar("AV_RGBRounds", getVar("AV_RGBRounds", 0) + 1);
		if (getVar("AV_RGB", 0) == getVar("AV_RGBRounds", 0))
		{
			YouFaill();
			return;
		}
		AV_RGBLoop();
	}
    return;
    AV_FimRGB();
}
function AV_FimRGB()
{
	edged=true;
    CMessage("Good job %SubName%");
    setVar("edgingmode", "Normal");
    return;
    YouFaill();
}
function YouFaill()
{
	edged=true;
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
	stopAudio();
    setVar("edgingmode", "Normal");
    CMessage("You dont edge in time %SubName%");
    CMessage("I think you need to be punished");
    switch(random("PuMS01", "PuMS02", "PuMS03", "PuMS04"))
    {
        case "PuMS01":
        PuMS01();
        return;
        break;
        case "PuMS02":
        PuMS02();
        return;
        break;
        case "PuMS03":
        PuMS03();
        return;
        break;
        case "PuMS04":
        PuMS04();
        return;
        break;
    }
    PuMS01();
}
function PuMS01()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish1");
    return;
    PuMS02();
}
function PuMS02()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish2");
    return;
    PuMS03();
}
function PuMS03()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish3");
    return;
    PuMS04();
}
function PuMS04()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_PunishRND");
    return;
}