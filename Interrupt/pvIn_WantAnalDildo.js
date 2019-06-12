DMessage("pvIn_WantAnalDildo: start");
main();
DMessage("pvIn_WantAnalDildo: end");
function main()
{
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
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage(random("Alright ", "Alright then ", "Okay ") + random("you can go ", "go ", "you should ", "you may ") + random("fetch ", "get ", "get out ") + "your dildo");
    switch(random("one", "two", "three", "four"))
    {
        case "one":
        one();
        return;
        break;
        case "two":
        two();
        return;
        break;
        case "three":
        three();
        return;
        break;
        case "four":
        four();
        return;
        break;
    }
    one();
}
function one()
{
    CMessage("Don\'t lube it up yet...");
    CMessage("I want you to worship that cock first");
    CMessage("Start stroking that dildo, %SubName%");
    CMessage("Stroke it the way you stroke that %Cock% attached to your body, the one that belongs to me");
    CMessage("And the dildo is mine too, %PetName%");
    CMessage("Just pretend like I\'m standing in front of you with that dildo strapped to my pelvis");
    CMessage("I want you to kneel before me");
    setTempVar("pvKneeling", true);
    CMessage("Kneel and worship my strapon, %PetName%");
    CMessage("Stroke it like a good, obedient servant");
    CMessage("Now lick it from the base all the way up to the tip");
    //--Command:CustomMode(%pvDontWantTo%,Goto,do not want)
    CMessage("Give the head a little kiss %Smile%");
    CMessage("I think you probably know what\'s going to happen now...");
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
    if(getVar("ballTorture",false));{
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
    do_not_want();
}
function do_not_want()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantSuckDildo.js");
    slide_it_in();
    return;
    return;
    two();
}
function two()
{
    CMessage("Lube it up if you have to, %Name%");
    //--Command:Glitter(pvGL_WA2)	//GlitterApp
    CMessage("It\'s probably best if you do, considering where it\'s going %Lol%");
    CMessage("Here\'s what I want you to do...");
    CMessage("Stick the dildo on the floor so that it\'s standing straight up");
    CMessage("If it has one of those suction cups on the bottom, that should be easy");
    CMessage("If not... you\'re just going to have to hold it down with your hand");
    CMessage("Now squat over the dildo so that the tip touches your asshole");
    CMessage("Tease that hole with the head of that dick but don\'t stick it in yet, %Name%");
    CMessage("Just rub it against your ass...");
    let answer0 = getInput("Mmm you want so badly to penetrate yourself, don\'t you?", 6);
    if (answer0.isTimeout())
    {
        look_at_yourself();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Yes... %EmoteMoan%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("And yet look at yourself right now... %Laugh%");
    }
    look_at_yourself();
}
function look_at_yourself()
{
    CMessage("Just the tip now, let it slide in %SubName%");
    CMessage("Don\'t take it too deep yet, we\'ll get to that...");
    CMessage("Right now I want you to fuck the head of that cock");
    CMessage("Play with your %Balls% while you do that");
    sleep(10);
    CMessage("I think your ass is getting ready for more %Grin%");
    addContact(2);
    SMessage("Anal action still going on?", -1, 2);
    CMessage("You\'re just in time for things to get real, %domFriend1Name%");
    SMessage("Awesome %EmoteHappy%", -1, 2);
    CMessage("Here we go, %SubName%");
    CMessage("Sit down on top of that dildo until it\'s all the way in your ass");
    CMessage("Push it until you can't go any further and then stop, don't pull it back out");
    SMessage("Ouch, looks like its going pretty deep! %Lol%", -1, 2);
    CMessage("Feel how hat dildo fills up your ass, %Name%");
    CMessage("Get on your knees");
    setTempVar("pvKneeling", true);
    if(getVar("pvHasCollar", false))
    {
        CMessage("Go get your collar for us, crawl if you have to");
    }
    if(getVar("pvHasCollar", false))
    {
        CMessage("Hurry up, %Name%");
    }
    if(getVar("pvHasCollar", false))
    {
        CMessage("Put that collar around your neck");
        setTempVar("pvCollared", true);
    }
    SMessage("Like a good little doggie %Lol%", -1, 2);
    sleep(12);
    SMessage("I want you to pull the dildo out now, %SubName%", -1, 2);
    SMessage("Get it all the way out...", -1, 2);
    SMessage("Look at that that nice big cock that was just in your ass...", -1, 2);
    sleep(8);
    SMessage("And now ram it back in %Laugh%", -1, 2);
    CMessage("Also... start stroking %Smile%");
    sleep(5);
    CMessage("It\'s about time you edged with that dildo in your ass");
    SMessage("But wait for it, you can only edge when we say so", -1, 2);
    SMessage("Just stroke for us now you cock slut %Laugh%", -1, 2);
    sleep(8);
    SMessage("%ShortName% should he get to the edge now?", -1, 2);
    CMessage("You\'re so impatient %Lol%");
    SMessage("Yeah, well... get to the edge right now %SubName% %Laugh%", -1, 2);
    startEdging();
    CMessage("%LetTheEdgeFade%");
    CMessage("Take that dildo out again");
    SMessage("That was pretty great %EmoteHappy%", -1, 2);
    SMessage("Do you make him lick the dildo clean?", -1, 2);
    CMessage("Eww no! That\'s nasty...");
    SMessage("Well yeah sure it\'s nasty... that\'s the point %Lol%", -1, 2);
    let answer0 = getInput("Will you suck on that dirty dildo for me, %SubName%?",20, -1, true, 2);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?",10, -1, true, 2);
    }
    if (answer0.isLike("yes"))
    {
        CMessage("OMG %Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Don\'t worry %SubName% you don\'t have to %Smile%");
        not_have_to_ATM();
        return;
    }
    SMessage("Do it, clean your ass juices off that dildo!", -1, 2);
    CMessage("That\'s so gross! %Laugh%");
    SMessage("Take that dildo all the way in your mouth", -1, 2);
    SMessage("Deepthroat it like the filthy slut that you are", -1, 2);
    SMessage("That tastes so good, doesn\'t it...", -1, 2);
    CMessage("That\'s enough, %SubName%");
    SMessage("It\'s a good thing I\'m around to make sure things get done", -1, 2);
    SMessage("Otherwise that dildo would just get placed in its drawer dirty %EmoteWink%", -1, 2);
    CMessage("That\'s true I guess %Lol%");
    removeContact(2);
    CMessage("What you just did is pretty disgusting, %Name%");
    CMessage("And it\'s unhygienic for sure...");
    after_ATM();
    return;
    not_have_to_ATM();
}
function not_have_to_ATM()
{
    SMessage("That\'s just ridiculous...", -1, 2);
    SMessage("Someday when %DomName% isn\'t around, we\'ll see what happens then...", -1, 2);
    CMessage("I won\'t always be able to protect you, %SubName% %EmoteWink%");
    removeContact(2);
    after_ATM();
}
function after_ATM()
{
    if(getVar("pvKneeling", false))
    {
        CMessage("You can get off your knees now");
        delVar("pvKneeling");
    }
    if(getVar("pvCollared", false))
    {
        CMessage("The collar stays on, %PetName%");
    }
    let answer0 = getInput("Do you need a moment or are you ready to continue?");
    while (!(answer0.isLike("ready") || answer0.isLike("continue")))
    {
        answer0 = getInput("Let me know when you\'re ready...");
    }
    if (answer0.isLike("ready", "continue"))
    {
        CMessage("Good");
    }
    CMessage("I think that ass of yours has seen enough action for now");
    return;
    three();
}
function three()
{
    CMessage("You should probably lube it up too %Smile%");
    sleep(12);
    CMessage("Before you start pounding that ass...");
    CMessage("Lube up your index finger and middle finger of your dominant hand");
    CMessage("Lie back with your legs in the air");
    sleep(9);
    CMessage("You look like you\'re ready to get fucked %Grin%");
    CMessage("I want you to start massaging your asshole with your lubed up fingers");
    CMessage("Do it slowly, drawing circles around your hole");
    CMessage("Let me get you in the mood with some pictures in the meantime");
    showTaggedImage(4, ["ANAL"]);
    //--Command:TagAnalSex
    showTaggedImage(4, ["ANAL"]);
    CMessage("That feels good, doesn\'t it...");
    showTaggedImage(4, ["ANAL"]);
    CMessage("Now push your index finger inside");
    showTaggedImage(4, ["ANAL"]);
    CMessage("Push it a little deeper...");
    showTaggedImage(4, ["ANAL"]);
    CMessage("Now add your middle finger, %Name%");
    CMessage("You should have no trouble getting two fingers in there you slut %Laugh%");
    CMessage("Move those fingers in and out of your asshole");
    sleep(8);
    CMessage("We have to make sure it\'s ready for that dildo...");
    sleep(10);
    CMessage("I want you to take the dildo now and push it in there");
    sleep(6);
    CMessage("Oh yeah %Grin%");
    CMessage("Fuck yourself with the dildo, get into a nice rhythm");
    CMessage("A little faster, %Name%");
    CMessage("Keep going just like that... %Smile%");
    setAFK(true);
    sleep(randomInt(40, 90));
    CMessage("I took a short break to make a phone call");
    setAFK(false);
    CMessage("Since you were doing so well without me there %EmoteWink%");
    CMessage("But you can stop now, take that cock out of your ass my little slut");
    let answer0 = getInput("Do you need a moment or are you ready to continue with something else?");
    while (!(answer0.isLike("ready") || answer0.isLike("continue")))
    {
		if (answer0.isLike("more", "anal"))
		{
			answer0 = getInput("That was enough for now %Laugh%");
		}else{
			answer0 = getInput("Let me know when you\'re ready...");
		}
    }
    if (answer0.isLike("ready", "continue"))
    {
        CMessage("Good");
    }
    CMessage("Let\'s move on then %Smile%");
    return;
    four();
}
function four()
{
    CMessage("And while you get ready and lube up that toy...");
    CMessage("Let me tell you about this fantasy I have, it\'s only fair that I tell you...");
    CMessage("You are in it after all %Smile%");
    CMessage("It\'s actually something I hadn\'t fantasized about before I started teasing you");
    CMessage("Let me tell you what your role in this fantasy is");
    CMessage("You are collared and chained to my bedroom wall, naked");
    if(getVar("pvCollared", false))
    {
        CMessage("Much like you are now, except the chained to my wall part %Laugh%");
        you_are_collared();
        return;
    }
    if(getVar("pvHasCollar", false))
    {
        CMessage("Why don\'t you put on your collar right now");
        setTempVar("pvCollared", true);
    }
    if(getVar("pvHasCollar", false))
    {
        CMessage("That way the fantasy will be just that much more real %Smile%");
        sleep(10);
    }
    you_are_collared();
}
function you_are_collared()
{
    CMessage("Now, in this fantasy, I don\'t pay much attention to you");
    CMessage("But I know you are there, with your hard %Cock% aching for me");
    if(getVar("pvKneeling", false))
    {
        CMessage("Get off your knees");
        delVar("pvKneeling");
    }
    CMessage("Put your legs up and expose your asshole to me, %PetName%");
    CMessage("Hold the tip of the dildo against it, but don\'t penetrate yet");
    CMessage("Just tease your ass a little bit...");
    CMessage("We\'re not alone, %Name%");
    CMessage("I\'m about to have sex with a well hung stud and all you can do is watch");
    CMessage("You watch as he tears off my clothes and pulls me close with his arms around my waist");
    CMessage("His hands move over my ass and up my back");
    CMessage("He kisses my neck and grabs my breasts");
    CMessage("Then he turns me around and bends me over across the bed...");
    CMessage("I want you to push the dildo all the way in now in one movement, %SubName%");
    CMessage("Just like my stud thrusts his big cock inside me %EmoteMoan%");
    CMessage("Fuck your asshole with the dildo the way he fucks me, %PetName%");
    CMessage("And as he is fucking me hard and deep, I know your are watching us");
    CMessage("You hear my moans of pleasure and his soft grunts");
    CMessage("You hear his thighs slapping against my ass");
    CMessage("%EmoteMoan%");
    CMessage("I want you to stroke to the edge now as you keep fucking ourself");
    edge();
    CMessage("Move the dildo in and out slowly now");
    CMessage("Mmm I get so turned on when I think how helpless you are, chained to the wall");
    CMessage("Seeing and hearing the kind of hot steamy pleasure that you\'ll never get");
    CMessage("You know, I never fantasized about being watched during sex before I started teasing you...");
    edge();
    CMessage("Don't stop fucking your ass, %Name%");
    answer0 = getInput("Does it turn you on to think of me being fucked by another man?");
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%");
    }
	if (answer0.isLike("yes"))
    {
		CMessage("Yeah I figured you were a little cuckold %Giggles%");
	}
    else if (answer0.isLike("no"))
    {
        CMessage("Well... it's not as if <i>you</i> are ever going to get to fuck me %Laugh%");
    }
    CMessage("What if, after exhausting me with orgasm after orgasm...");
    CMessage("My stud is still not satisfied and sees you chained to my wall...");
	answer0 = getInput("Would you let my stud fuck you?");
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%");
    }
	if (answer0.isLike("yes"))
    {
		CMessage("Wow... that would be <i>so</i> hot %EmoteHappy%");
		would_let_him()
	}
    else if (answer0.isLike("no"))
    {
        CMessage("That would be a bridge too far I guess %Laugh%");
    }
    CMessage("That\'s okay %SubName% it\'s just my fantasy");
    CMessage("But as long as you are chained to my bedroom wall...");
    CMessage("Once my stud has left and I have recovered, I could still take out my strapon");
    CMessage("And fuck you like you\'ve never been fucked before...");
    CMessage("That\'s a fantasy of mine too %Laugh%");
    CMessage("Take the dildo out of your ass now, %Name%");
    CMessage("That\'s enough for now");
    answer1 = getInput("Do you need a moment or are you ready to continue with something else?");
    while (!(answer1.isLike("ready") || answer1.isLike("continue")))
    {
		if (answer1.isLike("more", "anal"))
		{
			answer1 = getInput("Only if you\'ll let my stud do it %Laugh%");
		}else{
			answer1 = getInput("Let me know when you\'re ready...");
		}
    }
    if (answer1.isLike("ready", "continue"))
    {
        CMessage("Good");
    }
    CMessage("Let\'s move on then %Smile%");
    return;
    would_let_him();
}
function would_let_him()
{
    let answer0 = getInput("Would you swallow his spunk, too?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh wow %Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That would be a bridge too far I guess %Laugh%");
    }
    CMessage("It\'s too bad some fantasies will have to remain fantasies...");
    CMessage("But who knows...");
    CMessage("Maybe some day you\'ll find yourself chained to my bedroom wall %Grin%");
    CMessage("Take the dildo out of your ass now, %Name%");
    CMessage("That\'s enough for now");
    answer1 = getInput("Do you need a moment or are you ready to continue with something else?");
    while (!(answer1.isLike("ready") || answer1.isLike("continue") ))
    {
        if (answer1.isLike("more", "anal"))
		{
			answer1 = getInput("I\'d better call my stud then %Laugh%");
		}else{
			answer1 = getInput("Let me know when you\'re ready...");
		}
    }
    if (answer1.isLike("ready", "continue"))
    {
        CMessage("Good");
    }
    CMessage("Let\'s move on then %Smile%");
    return;
    //From taunt cycle via MsWantAnal, when asking for anal
}