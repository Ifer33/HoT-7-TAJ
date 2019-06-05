DMessage("LinksRandom2: start");
main();
DMessage("LinksRandom2: end");
function main()
{
    if(getVar("AV_Link2_NotFirstTime", false))
    {
        AV_Link2_NotFirstTime();
        return;
    }
    setVar("AV_Link2", 0);
    setVar("AV_Link2_NotFirstTime", true);
    AV_Link2_NotFirstTime();
}
function AV_Link2_NotFirstTime()
{
    if (getVar("AV_Link2", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link2", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link2", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link2", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link2", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link2", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link2", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link2", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link2", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link2", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link2", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link2", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link2", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link2", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link2", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link2", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link2", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link2", getVar("AV_Link2", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link2", getVar("AV_Link2", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link2", getVar("AV_Link2", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link2", getVar("AV_Link2", 0) + 1000);
    Link4();
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
    setVar("AV_Link2", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    let answer0 = getInput("Can you feel that unbearable pressure starting to consume your balls yet?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("I know you can feel it trying to strangle your %Cock%.");
    CMessage("It\'s a natural response, your body just wants some relief.");
    CMessage("Of course, I don\'t believe in giving relief when training a %Slave% like you,");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("and I don\'t just mean the relief of orgasm.");
        //run("CBT" + java.io.File.separator + "*.js");
		cbt();
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("and I don\'t just mean the relief of orgasm.");
    }
    CMessage("I mean the absence of torture.");
    CMessage("If I give your cock any kind of break at all,");
    CMessage("it will be very short-lived");
    CMessage("and only because I want the delay to cause your next strokes to be even more excruciating.");
    let answer1 = getInput("Are you recovered yet?");
    while (!(answer1.isLike("no") || answer1.isLike("yes")))
    {
        answer1 = getInput("Yes or no %SubName%?");
    }
    if (answer1.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    else if (answer1.isLike("yes"))
    {
        CMessage("%Good%");
    }
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    if(getVar("AV_NewCrushDONE", false))
    {
        AV_NewCrushDONE();
        return;
    }
    CMessage("You know %SubName%...");
    CMessage("with all that tease and denial");
    CMessage("I bet you have really horny days");
    CMessage("every hot woman you see, give you a erection");
    CMessage("So, I decided use this against you too %Smile%");
    CMessage("So, what we will do is");
    CMessage("When you find a girl who make you horny");
    CMessage("I want you to take at least 10 pictures of her");
    CMessage("And put is a specific folder");
    CMessage("Then, I can use her too make you even more horny %Smile%");
    CMessage("You will create 10 folders now.");
    setRapidText(true);
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\10\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\11\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\12\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\13\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\14\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\15\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\16\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\17\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\18\\");
	SMessage("New folder: TeaseAI\\Images\\av_imagens\\19\\");
	/*@ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\11\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\12\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\13\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\14\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\15\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\16\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\17\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\18\  @ShowImage[av_imagens\System.jpg] 
    --UNINTERPRETED LINE:@SystemMessage New folder found: TeaseAI\Images\av_imagens\19\  @ShowImage[av_imagens\System.jpg] 
    CMessage("Done");*/
    setRapidText(false);
    CMessage("Now, when you find a new crush, just let me know");
    CMessage("And I take care of the rest.");
    setVar("AV_NewCrushDONE", true);
    CMessage("Just remember to use the folders in the numerical order.");
    setStrokingNoTaunt();
    return;
    AV_NewCrushDONE();
}
function AV_NewCrushDONE()
{
    CMessage("You\'re boring me.");
    CMessage("I think I know what the problem is.");
    CMessage("You\'re not really *suffering* yet.");
    CMessage("That\'s what we need, right?");
    if(getVar("AV_Know_19", false))
    {
        AV_Know_19();
        return;
    }
    CMessage("Like... which is the worst \"Ruined");
    setVar("AV_Know_19", true);
    CMessage("A- Letting go right as you cum, causing a dribble");
    CMessage("B- Positioning yourself upside down so that you give yourself a facial");
    let answer0 = getInput("C- Holding a thumb over the hole as you cum, causing a painful pipe backup");
    while (!(answer0.isLike("A") || answer0.isLike("B") || answer0.isLike("C")))
    {
        answer0 = getInput("A, B or C %PetName%?");
    }
    if (answer0.isLike("A"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona18a", true);
    }
    else if (answer0.isLike("B"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona18b", true);
    }
    else if (answer0.isLike("C"))
    {
        CMessage("%EmoteLaugh%");
        setVar("AV_Persona18c", true);
    }
    setStrokingNoTaunt();
    return;
    AV_Know_19();
}
function AV_Know_19()
{
    CMessage("Making you suffer?");
    CMessage("Then I say let\'s make you suffer.");
    if(getVar("AV_DommeMistress", false))
    {
        //run("CBT" + java.io.File.separator + "*.js");
		cbt();
    }
    edge();
    CMessage("I actually see why this is the perfect punishment for a guy like you.");
    CMessage("You deceive women just so you can cum, then you forget all about them.");
    CMessage("Well I\'m going to be the one to punish your cock by making *it* forget all about cumming");
    CMessage("So I think the best thing for us to do is make sure it really, *really* wants to.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    CMessage("%SubName%");
    CMessage("I wonder how many edges you\'ve done for me since I started teasing you");
    CMessage("I don\'t suppose you\'ve been keeping track? %EmoteRandom%");
    CMessage("I did, %SessionEdges% Edges");
    CMessage("I bet your %Cock% still remembers each and every one of them at least!");
    CMessage("I keep trying to imagine how frustrating that\'s got to be ");
    if (randomInteger(0, 100) <= 50)
    {
        CMessage("edging over and over");
    }
    CMessage("stopping right on the brink of an amazing orgasm that would take all that painful ache away form you");
    if(getVar("AV_Know_13", false))
    {
        AV_Know_13();
        return;
    }
    CMessage("The thing is, when edging during tease and denial");
    setVar("AV_Know_13", true);
    CMessage("what is the best way to edge? Full strokes, Soft strokes, tight grip, etc.");
    setVar("AV_Persona12", createInput().getAnswer());
    edge("so, %Edge% with " + getVar("AV_Persona12", ""));
    CMessage("aaannd no rest for you");
    setStrokingNoTaunt();
    return;
    AV_Know_13();
}
function AV_Know_13()
{
    CMessage("The thing is, the more I think about that...the more I start to wonder");
    CMessage("what would make you suffer more?");
    CMessage("1 - Having to stop stroking when you hit the edge");
    let answer0 = getInput("2- having to KEEP stroking when you\'re not allowed to hit the edge at all?");
    while (!(answer0.isLike("1") || answer0.isLike("2")))
    {
        answer0 = getInput("1 for edging or 2 for stroking %SubName%?");
    }
    if (answer0.isLike("1"))
    {
        CMessage("hmm");
        bad();
        return;
    }
    else if (answer0.isLike("2"))
    {
        CMessage("hmm...");
    }
    setStrokingNoTaunt();
    return;
    bad();
}
function bad()
{
    edge()
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("You\'re so %Submissive%.");
    CMessage("Doing everything I tell you to when I tell you.");
    CMessage(random("That\'s good", "You enjoy it"));
    CMessage("Enjoy knowing how good your %Obedience% makes me feel.");
    CMessage("I tell you to stop and you stop.");
    edge("%Edge%");
    CMessage("You want to keep going I know, but you want to please me more.");
    CMessage("To please me you need to do exactly what I say.");
    CMessage("Whatever you do, don\'t CUM.");
    CMessage("You\'ll get your chance later.");
    switch(random("a01", "a02"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
    }
    a01();
}
function a01()
{
    edge("%Edge%");
    Cont();
    return;
    a02();
}
function a02()
{
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    Cont();
}
function Cont()
{
    CMessage("Keep that CUM inside your %Balls% for now.");
    if(getVar("AV_Know_17", false))
    {
        AV_Know_17();
        return;
    }
    CMessage("Tell me, What words of praise do you most enjoy hearing?");
    setVar("AV_Persona09", createInput().getAnswer());
    CMessage("%EmoteLaugh%");
    setVar("AV_Know_17", true);
    setStrokingNoTaunt();
    return;
    AV_Know_17();
}
function AV_Know_17()
{
    let answer0 = getInput("You don\'t want to dissapoint me do you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("Be a " + getVar("AV_Persona09", "") + "Keep the CUM inside.");
    CMessage("You don\'t need to CUM anyways.");
    CMessage(random("This is better than cumming", "This is way more fun for both of us"));
    setStrokingNoTaunt();
    return;
}