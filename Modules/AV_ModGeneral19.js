DMessage("AV_ModGeneral19: start");
main();
DMessage("AV_ModGeneral19: end");
function main()
{
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] %Stop% @StopStroking @Goto(IniModule)
    if (isStroking())
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
    stopStroking();
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
    if(getVar("AV_ModGeneral19_NotFirstTime", false))
    {
        AV_ModGeneral19_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral19", 0);
    setVar("AV_ModGeneral19_NotFirstTime", true);
    AV_ModGeneral19_NotFirstTime();
}
function AV_ModGeneral19_NotFirstTime()
{
    if (getVar("AV_ModGeneral19", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral19", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral19", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral19", getVar("AV_ModGeneral19", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral19", getVar("AV_ModGeneral19", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral19", getVar("AV_ModGeneral19", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral19", getVar("AV_ModGeneral19", 0) + 1000);
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
    setVar("AV_ModGeneral19", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("I want to have a little talk about a subject which is very dear to me, and I know it\'s dear to you.");
    CMessage("This subject is: jerking off.");
    CMessage("I know you like it because you do it all the time for me.");
    CMessage("And that\'s fine. I encourage it.");
    CMessage("But did you know it has some side effects?");
    CMessage("First off, there\'s the object of your desire.");
    CMessage("Every time you jerk it for me, you are giving me a little power over you.");
    CMessage("Like, I said, I encourage it.");
    CMessage("So...");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("The second thing is that it\'s addictive.");
    CMessage("Yeah, I know, people say that all the time, porn addiction and whatever.");
    CMessage("But a woman with mastery over this addiction can do a lot with it.");
    CMessage("Like me for instance.");
    CMessage("I get you to jerk off to me. I encourage it.");
    CMessage("I get you to do it, and enjoy it.");
    CMessage("By going out of my way to get you to do it, I get that little bit of power each time.");
    CMessage("But here\'s the thing. I\'m here talking about the power exchange.");
    CMessage("Cementing that in your mind.");
    CMessage("Go ahead, keep stroking. I\'m talking about the power I\'m taking right now.");
    CMessage("I cement that in your mind. The pleasure you\'re feeling has your mind wide open to whatever I say.");
    CMessage("You listen. You obey. And you get addicted.");
    CMessage("Not just to the jerking off.");
    CMessage("You were already addicted to that.");
    CMessage("But to the loss of power. But I\'m the only one talking about that part.");
    CMessage("Scratching that itch. So you get addicted to losing power to me.");
    edge("%Edge%");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Oh, silly me, I\'m getting ahead of myself.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Keep staring at my feet, boy.");
    }
    CMessage("Mmm, I can tell by the way you\'re twitching and the way you tried to hold in a moan there that you\'re enjoying this.");
    CMessage("We have not even gone very far and I can tell you are already being pushed to you limits.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Why don\'t you take your other and slap my balls for me?");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Come on, you call that a slap?");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Do it harder. HARDER.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want to see you in actual pain, you whore.");
    }
    CMessage("Put your hands behind your back.");
    CMessage("My God, you just leaked precum, didn\'t you?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Did hitting the balls really turn you on that much?");
    }
    CMessage("You really are beyond help at this point");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Go on, lick it up. We can\'t have you making a mess everywhere.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Lick it up like the good cumslut you are");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I bet you enjoyed how that tasted, didn\'t you?");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Of course you did.");
    }
    CMessage("Aw, you look so sad and helpless right now.");
    CMessage("You think some edges could help you?");
    DoEdges(2, 4, 0);
    CMessage("That\'s better");
    sleep(20);
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage(random("%SubName%", "%PetName%"));
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("You will need to have some more lube handy.");
        sleep(20);
    }
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(30);
        setVar("AV_PinDone", true);
    }
    CMessage("You\'ve been such a good boy");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("but I do like watching you hurt yourself...");
    }
    CMessage("I want you to slowly play with your balls first");
    CMessage("and suck on your index and middle finger like a good boy");
    CMessage("because you\'ll do anything I say no matter how humiliating it is wouldn\'t you? %Lol%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now slap those balls with the hand you just rubbed them with");
    }
    CMessage("and make those fingers wet!");
    if(!getVar("av_fetish_pain", false))
    {
        JumpPain7();
        return;
    }
    CMessage("Now grab your spoon and spank your ass for me.");
    CMessage("You can get on your hands and knees and hit that naughty ass of yours.");
    sleep(20);
    CMessage("Harder.. harder!");
    CMessage("Give me 30 nice hard swats on your ass..");
    sleep(30);
    let answer0 = getInput("hmm, maybe your balls too.. you want to spank your balls for me?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Slap them a few times, HARD.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(12);
    CMessage("3 more ball slaps... go for it, and make sure they\'re nice and hard");
    JumpPain7();
}
function JumpPain7()
{
    CMessage("Stroke your cock for me...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("think about all the naughty things I\'ve made you do %GeneralTime%");
    CMessage("and how full and sore your balls are..");
    CMessage("keep stroking, faster and faster,");
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("picturing me bending you over my lap and spanking your ass HARD 20, 50, 100 times...");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("pausing to spread your legs and slapping them too");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("finally letting you up and sucking your dickuntil you almost cant stand it...");
    }
    CMessage("almost Cumming.... and then stop");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("Stop everything");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("If you have lube you should actually lube those fingers up right now");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("because I got some plans for you, because you are my little toy and you will do anything I say.");
    }
    CMessage("Now I want you to play with your nipples with the hand you massaged your balls with, come one!.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("you know how pathetic you look right now?");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("but it\'s okay because it\'s for me and I\'m all you need right now ain\'t I?");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("I\'m all you need right now ain\'t I?");
    }
    CMessage("so you better do what I say babe...");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("while we are at it why don\'t you slowly insert one of those fingers in your tight little hole.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Hmm such a good boy just because I told you to do it!");
    }
    CMessage("And you are all mine!");
    CMessage("Now start jerking that hot cock of with your other hand");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("and work that ass for me baby %EmoteMoan%");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("curl your finger up in your ass try to touch that prostate for me while you");
    }
    CMessage("start jerking it faster baby");
    CMessage("come one baby do it but don\'t cum until I tell you to cum!");
    CMessage("hmm such a good boy.");
    CMessage("Come on jerk it faster for, dont you want to show your goddess what a good little boy you are?");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("and start working that ass better you little slut!");
    }
    CMessage("Jerk it as fast as you can and just imagine it\'s my hand");
    if(getVar("AV_LikeAnal", false))
    {
        SMessage("%DomName% turned on the mic");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Anal" + java.io.File.separator + "Fucking0*.mp3");
        sleep(30);
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("while my other other hand is pleasing your ass,");
    }
    CMessage("%stopstroking%", 0);
    CMessage("you thought this was bad?");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go clean yourself");
        sleep(35);
    }
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("So, do you want to play a game?");
    CMessage("I know a fun little game we can play.");
    CMessage("It\'s all about following directions, and having my sexuality completely control you.");
    CMessage("I just love to be in control.");
    CMessage("Lucky for me you\'re love to follow those commands.");
    CMessage("Why don\'t we play a little game of red light, green light?");
    CMessage("You know how the game goes, right?");
    CMessage("When I say \"green light\", you can go and. When I say \"red light\" you've gotta stop!");
    CMessage("Of course, you\'re going to be doing this while jerking off.");
    CMessage("Go on let\'s start.");
    CMessage("<c=green b> GREEN LIGHT");
	setStrokingNoTaunt();
    CMessage("Let\'s see you start jerking off that cock.");
    CMessage("Looking at my sexy body makes it hard for you to control yourself, doesn\'t it?");
    CMessage("<c=red b> RED LIGHT");
	stopStroking();
    CMessage("seeing my sexiness but not being able to touch yourself?");
    CMessage("<c=green b> GREEN LIGHT");
	setStrokingNoTaunt();
    CMessage("Mmmmm, look at me");
    CMessage("I can control anything, including your dick.");
	CMessage("<c=red b> RED LIGHT %EmoteSquirm%");
	stopStroking();
    //CMessage("%EmoteSquirm%");
    CMessage("You almost didn\'t make it on time.");
    CMessage("You would have lost.");
    CMessage("I\'m kinda surprised that you\'re not losing this game.");
    CMessage("Thought you already would\'ve weakened");
    CMessage("<c=green b> GREEN LIGHT");
	setStrokingNoTaunt();
    CMessage("Since you\'re doing so good, maybe I should just let you finish yourself off");
    CMessage("<c=red b> RED LIGHT");
	stopStroking();
    CMessage("Because I don\'t know how you could contain yourself.");
    CMessage("But you can\'t. You have to stand there with that useless tool dangling in the air.");
    CMessage("<c=green b> GREEN LIGHT");
	setStrokingNoTaunt();
    CMessage("I\'m very shocked that you haven\'t lost.");
    CMessage("I guess you really can control yourself.");
    CMessage("<c=red b> RED LIGHT");
	stopStroking();
    CMessage("Those balls look so swollen and ready to burst.");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("You are here to amuse me today.");
    CMessage("You are to do what I tell you when I tell you... got it?");
    CMessage("You better not pussy out on me...");
    if(!getVar("AV_LikeAnal", false))
    {
        SkipLube();
        return;
    }
    let answer0 = getInput("You will need to have some more lube handy. Let me know when you are ready to begin.");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done")))
    {
        answer0 = getInput("Are you ready %SubName%?");
    }
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("%Good%");
    }
    SkipLube();
}
function SkipLube()
{
    CMessage("This is going to be fun for me, not you.");
    CMessage("you have to put on a show for me");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("That\'s right. That\'s what I want to see.");
    CMessage("You do that for me, and maybe I\'ll do something for you");
    CMessage("You\'re gonna be a dirty little masturbator for me. * %Laugh% *");
    CMessage("You\'re going to be a good boy.");
    CMessage("Stroke it up and down, nice and slow.");
    CMessage("I don\'t want you to come yet.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("You know what else I want you to do?");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I want you to play with your dirty little girly hole.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Put some lube on");
        sleep(20);
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Now put your legs on the desk ...open it!!!");
        sleep(20);
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I want you to take a finger and work it into that pretty little ass hole of yours.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Just like that.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Start  stroking the outside of your ass");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("and then slide a finger in");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("just keep sliding that finger in and out of your little girly ass hole.");
    }
    CMessage("Keep stroking your cock!");
    CMessage("Did I tell you to stop?");
    CMessage("I didn\'t.");
    CMessage("Stroke that cock of yours.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("And keep working that finger.");
    }
    CMessage("Does that feel good?");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Grab that little button.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Identify that little button in your sissy whole and press it.");
    }
    CMessage("And you better jerk your cock a little faster now.");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Little faster with a finger up your ass now!");
    }
    CMessage("Does that feel good?");
    CMessage("Isn\'t that exactly what you wanted?");
    CMessage("Keep stroking your cock!");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("You think you can get two fingers and your ass?");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I know your dirty little slut hole is all loosened up with the one.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I want you to take two and slide them in.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Awww, you\'re a pretty little girl with a pretty little sissy hole that\'s all loosened up for me now.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go ahead, get those two fingers in there.");
    }
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("I wanna watch you fuck yourself while jerking your cock! * %Laugh% *");
    }
    CMessage("Now, are you ready?");
    CMessage("Are you almost ready to come?");
    CMessage("Is that cock nice and hard?");
    CMessage("Are you just about ready to squirt?");
    CMessage("Go ahead! Keep jerking!");
    CMessage("Are you ready?");
    CMessage("Jerk that cock!");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("there is a nice sissy!");
    }
    edge();
    CMessage("Good boy");
    if(getVar("AV_LikeAnal", false))
    {
        CMessage("Go clean yourself");
        sleep(35);
    }
    return;
}