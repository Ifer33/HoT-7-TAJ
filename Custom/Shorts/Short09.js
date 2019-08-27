DMessage("Short09: start");
main();
DMessage("Short09: end");
function main()
{
    if (isStrokingAll())
    {
        CMessage("%StrokeSlower%");
        slowStroke();
    }
    CMessage("Yes, spread your legs apart");
    CMessage("I want to see what is mine.");
    CMessage("Oh you\'re such a good boy, maybe I don\'t even need to be rough with you.");
    let answer0 = getInput("But that %Cock% tells me that maybe you want me to.", 5);
    if (answer0.isTimeout())
    {
        d28efiw();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("It\'s okay, you don\'t have to be ashamed.");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s okay");
    }
    d28efiw();
}
function d28efiw()
{
    CMessage("That is how I\'ve trained you.");
    if (randomInteger(1, 100) <= 60)
    {
        a22mdrr();
        return;
    }
    if(!getVar("av_fetish_pegging", false) && !getVar("AV_LikeAnal", false))
    {
        a22mdrr();
        return;
    }
    CMessage("So, %SubName%...");
    CMessage("You told me you want me to violate your ass...");
    let answer0 = getInput("That\'s right, isn\'t it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Interesting... %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh... I must have misunderstood then");
        a22mdrr();
        return;
    }
    CMessage("Let\'s talk about that some more, shall we...");
    if (randomInteger(1, 100) <= 60)
    {
        NoPlay();
        return;
    }
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("Go get your dildo", "Take out your dildo", "Get your dildo for me"));
    //--Command:CustomMode(%pvDontWantTo%,Goto,not want)
    CMessage(random("Lube it up as much as you need to", "Make it nice and slippery", "Lube up good if you need it", "Use as much lube as you need"));
    CMessage(random("Put it in your ass", "Shove that plug up your ass", "Push that plug into your tight butt"));
    CMessage(random("Your ass belongs to me ", "I can use your ass however I want ", "Your ass is mine to use ", "I own your ass ") + "%Grin%");
    let answer1 = getInput("Let me know when you\'re ready");
    while (!(answer1.isLike("done") || answer1.isLike("did") || answer1.isLike("ready") || answer1.isLike("finished") || answer1.isLike("in") || answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("on't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me")))
    {
        answer1 = getInput("Just say \'ready\' when you are, %SubName% %EmoteFlustered%");
    }
    if (answer1.isLike("done", "did", "ready", "finished", "in"))
    {
        CMessage(random("Good ", "Alright ", "There you go ", "That\'s much better ") + "%Smile%");
        setTempVar("pthevPlugged", true);
    }
    else if (answer1.isLike("don't want to","do not want to","don't want that","do not want that","don't make me","do not make me"))
    {
        CMessage("What are you talking about");
        do_not_want();
        return;
    }
    CMessage(random("That plug fills you up nicely", "I don\'t know why I don\'t do this more often", "Plugged like a good slut"));
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    CMessage("Start fucking that ass for me...");
    NoPlay();
}
function NoPlay()
{
    let answer0 = getInput("Maybe one day I can peg your ass, %PetName%. Would you like that?", 5);
    if (answer0.isTimeout())
    {
        a0sn24d();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yeah?");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Don\'t lie to me");
        increaseAnger(3)
    }
    a0sn24d();
}
function a0sn24d()
{
    CMessage("Imagine how you\'d feel, the way my hips roll and press against your ass.");
    CMessage("Feel how full you are inside. Mmhm.");
    CMessage("While I\'m jerking you off with my hand, I\'ll pump into your ass with a strap-on.");
    let answer0 = getInput("Start out slow and easy. You like that, hmm? Would you like that?", 5);
    if (answer0.isTimeout())
    {
        ew4gdg();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Don\'t lie to me");
        increaseAnger(3)
    }
    ew4gdg();
}
function ew4gdg()
{
    CMessage("Imagine you are making your Miss cum with your mouth and your hands while I fuck your ass.");
    CMessage("You want it faster? You want it harder?");
    CMessage("Oh yeah, you can have it.");
    CMessage("You can get it any way you want it.");
    CMessage("Faster. Deeper. " + "*");
    if(getVar("pthevPlugged", false))
    {
        CMessage("you can stop fucking your ass...go clean yourself");
        sleep(30);
    }
    return;
    a22mdrr();
}
function a22mdrr()
{
    if(!getVar("av_fetish_pain", false))
    {
        a4geah();
        return;
    }
    if (randomInteger(1, 100) <= 60)
    {
        a4geah();
        return;
    }
    CMessage("You clearly need a reminder of who is in charge here.");
    let answer0 = getInput("Did you agree?", 5);
    if (answer0.isTimeout())
    {
        e4grsss();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You had better get all that out of your mind right now.");
        increaseAnger(3)
        cbt("ball");
    }
    e4grsss();
}
function e4grsss()
{
    CMessage("Later, when I\'m tired of abusing you, maybe I\'ll leave you here sore and frustrated and desperate.");
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
        CMessage(random("Hit", "Slap", "Spank")+" your %Balls%");
		playAudio("tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle*.mp3");
		sleep(13);
		stopAudio();
    }
    CMessage("%GoodBoy%");
    return;
    a4geah();
}
function a4geah()
{
    return;
    do_not_want();
}
function do_not_want()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantSuckDildo.js");
    slide_it_in();
    return;
    return;
    slide_it_in();
}
function slide_it_in()
{
    CMessage("Open your mouth");
    CMessage("Stick out your tongue... %Grin%");
    CMessage("Now take that dildo and slide it into your mouth");
    CMessage("Take it as deep as you can and then take it out again");
    CMessage("Very good %Smile%");
    CMessage("Do that again, %Name%");
    CMessage("Wrap you lips around the shaft of that cock and shove it down your throat");
    CMessage("Don't stop this time, keep sucking it");
    CMessage("Keep sliding it in and out of your mouth");
    CMessage("Mmm that\'s a good little cocksucker %Laugh%");
    CMessage("Fondle your %Balls% while you suck that dick");
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    CMessage("I think you\'re about ready to take it in your ass, %Name%");
    CMessage("So lube it up now, if it isn\'t slippery enough from all that sucking %Laugh%");
    CMessage("You're going to want to make it <i>very</i> slippery...");
    CMessage("Go ahead and stick it in your ass, %Name%");
    CMessage("Mmm that\'s so hot %EmoteMoan%");
    CMessage("Fuck yourself with that dildo");
    sleep(9);
    CMessage("Go a little bit faster now");
    sleep(8);
    if(getVar("pvSpankingYes", false))
    {
        CMessage("I want you to spank your ass while you fuck yourself");
        run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "Spanking.js");
    }
    CMessage("How does it feel to be my bitch, hm?");
    CMessage("I bet it feels good, like you are exactly where you belong");
    if(getVar("ballTorture",false)){
		CMessage("Look at your %Balls% swinging as you pound away %Laugh%");
		cbt("ball");
	}
    CMessage("Slow down, %SubName%");
    CMessage("I want you to do slow and deep thrusts now");
    CMessage("Imagine me taking you from behind");
    CMessage("Pulling your hair, smacking your ass");
    CMessage("With every thrust of my hips I drive my strapon deeper into your asshole");
    CMessage("Pull the dildo out of your ass");
    CMessage("You\'re going to do 10 more thrusts, I\'m going to count them for you");
    CMessage("And I want you to push the dildo inside as deep as you can");
    CMessage("Try to push it a little deeper each time");
    CMessage("Get ready...");
    CMessage("1...");
    sleep(randomInt(3, 9));
    CMessage("2...");
    sleep(randomInt(3, 9));
    CMessage("3...");
    sleep(randomInt(3, 9));
    CMessage("4...");
    sleep(randomInt(3, 9));
    CMessage("5...");
    sleep(randomInt(3, 9));
    CMessage("6...");
    sleep(randomInt(3, 9));
    CMessage("7...");
    sleep(randomInt(3, 9));
    CMessage("8...");
    sleep(randomInt(3, 9));
    CMessage("9...");
    sleep(randomInt(3, 9));
    CMessage("And one more...");
    CMessage("10!");
    CMessage("Well done, pull that dildo out of your asshole again %Smile%");
    if(getVar("pvKneeling", false))
    {
        CMessage("Get up, %Name%");
        delVar("pvKneeling");
    }
    let answer0 = getInput("That\'s enough anal action for now, don\'t you think?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("more")))
    {
        answer0 = getInput("That was enough don\'t you think?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("It was fun...");
    }
    else if (answer0.isLike("no", "more"))
    {
        CMessage("Aww %Laugh%");
    }
    CMessage("But there are so many other thing I can do to you %Grin%");
    return;
}