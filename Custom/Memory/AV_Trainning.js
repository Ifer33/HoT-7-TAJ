DMessage("AV_Training: Start");
main();
DMessage("AV_Training: End");
function main()
{
    if(getVar("AV_TrainDone", false))
    {
        AV_TrainDone();
        return;
    }
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("Don\'t " + random("move ", "touch your %Cock% ") + "now...");
    if(getVar("AV_TrainWhip", false))
    {
        AV_TrainWhip();
        return;
    }
    if(getVar("AV_TraincEdge", false))
    {
        AV_TraincEdge();
        return;
    }
    if(getVar("AV_TraincStroke", false))
    {
        AV_TraincStroke();
        return;
    }
    CMessage("Just %TellMe%");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    let answer0 = getInput("Did that sound make your %Cock% " + random("squirm", "struggle", "twist"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("I told you we\'d have trained that %Cock%", "Your training it\'s working"));
        StrokeDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
        //--Command:AddTeaseTime(10 Minutes)
    }
    AV_TrainDone();
    return;
    
    AV_TraincStroke();
}
function AV_TraincStroke()
{
    CMessage("Just %TellMe%");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    let answer0 = getInput(random("Now ", "And ") + "that sound make your %Cock% " + random("squirm", "struggle", "twist"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("I told you we\'d have trained that %Cock%", "Your training it\'s working"));
        EdgeDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
        //--Command:AddTeaseTime(10 Minutes)
    }
    AV_TrainDone();
    return;
    
    AV_TraincEdge();
}
function AV_TraincEdge()
{
    CMessage("Just %TellMe%");
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    let answer0 = getInput(random("Now ", "And ") + "that sound make you " + random("jump", "scared", "almost feel pain"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Your training it\'s working");
        PainDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
    }
    AV_TrainDone();
    return;
    
    
    StrokeDone();
}
function StrokeDone()
{
    setVar("AV_TraincStroke", true);
    AV_TrainDone();
    return;
    
    EdgeDone();
}
function EdgeDone()
{
    setVar("AV_TraincEdge", true);
    if(!getVar("av_fetish_pain", false))
    {
        setVar("AV_TrainWhip", true);
    }
    AV_TrainDone();
    return;
    
    PainDone();
}
function PainDone()
{
    setVar("AV_TrainWhip", true);
    AV_TrainDone();
    return;
    
    AV_TrainWhip();
}
function AV_TrainWhip()
{
    CMessage("Now, I want to include a new variable in your training...");
    CMessage("using your sense of smell...");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I could use the smell of your cum %Lol% " + "but I have another idea in mind");
    }
    CMessage("I want you to pick a perfume, cologne or moisturizer with a nice perfume...");
    CMessage("Would be better with a female one, right?");
    CMessage("Or better yet, try to find what perfume does " + getVar("AV_Persona13", "") + "use?");
    CMessage("Anyway...");
    CMessage("I want you to start using that perfume in our session from now on...");
    CMessage("Just enough to feel the aroma");
    CMessage("until it gets impregnated in your brain");
    setVar("AV_TrainDone", true);
    CMessage("Would be interesting when you meet " + getVar("AV_Persona13", "") + "next time, right?");
    AV_TrainDone();
    return;
    
    
    AV_TrainDone();
}
function AV_TrainDone()
{
    if(!getVar("av_doanalnight", false) && !getVar("AV_MEM_Humil", false) && !getVar("AV_MEM_CEI", false) && !getVar("AV_MEM_MenNControl", false))
    {
        NoMemory();
        return;
    }
    if(getVar("AV_MEM_Humil", false))
    {
        AV_MEM_Humil();
        return;
    }
    if(getVar("AV_MEM_CEI", false))
    {
        AV_MEM_CEI();
        return;
    }
    if(getVar("AV_MEM_MenNControl", false))
    {
        AV_MEM_MenNControl();
        return;
    }
    if (getVar("AV_YesNoRatio", 0) >= 4)
    {
        VeryGood();
        return;
    }
    if (getVar("AV_YesNoRatio", 0) <= -4)
    {
        VeryBad();
        return;
    }
    if(getVar("av_doanalnight", false))
    {
        av_doanalnight();
        return;
    }
    NoMemory();
    return;
    
    
    av_doanalnight();
}
function av_doanalnight()
{
    if(getVar("MemoryJustOneAnal", false))
    {
        NoMemory();
        return;
    }
    switch(random("Anal01", "Anal02", "Anal03"))
    {
        case "Anal01":
        Anal01();
        return;
        break;
        case "Anal02":
        Anal02();
        return;
        break;
        case "Anal03":
        Anal03();
        return;
        break;
    }
    Anal01();
}
function Anal01()
{
    CMessage("You love the feeling of " + random("cock ", "a dildo ") + random("sliding right ", "deep ") + "into your " + random("asshole ", "ass ") + "don\'t you?");
    CMessage("I can\'t wait to totally " + random("fuck ", "violate ", "humiliate and dominate ") + "you like the slut you are!");
    CMessage("You\'re " + random("nothing but ", "just ") + "my forced " + random("bi bitch", "slut", "anal slut", "anal bitch"));
    AnalEnd();
    return;
    
    Anal02();
}
function Anal02()
{
    CMessage("%GeneralTime% I\'m going to make you take " + random("that dildo ", "my strap-on ") + "%PetName%");
    CMessage("I love " + random("fucking ", "violating ") + "your mouth and " + random("ass ", "asshole ") + "with " + random("that dildo", "my strap-on"));
    CMessage("and I " + random("laugh ", "smile ") + "in twisted amusement as I do it.");
    CMessage("I " + random("violate ", "fuck ") + "you for my own pleasure and don\'t care about yours!");
    AnalEnd();
    return;
    
    Anal03();
}
function Anal03()
{
    CMessage("I know you " + random("want ", "can\'t wait ") + "to take that plug in your ass.");
    CMessage("I\'m going to make you wait.");
    CMessage("And then... I\'m going to " + random("bend you over and pound ", "fuck ", "violate ") + "you until I\'m satisfied.");
    CMessage("I don\'t care " + random("if hurts ", "how it feels ") + "you\'re going to " + random("do as I say ", "take it ") + "%PetName%!");
    AnalEnd();
    return;
    
    AnalEnd();
}
function AnalEnd()
{
    setTempVar("MemoryJustOneAnal", true);
    return;
    
    AV_MEM_Humil();
}
function AV_MEM_Humil()
{
    switch(random("Hum01", "Hum02", "Hum03"))
    {
        case "Hum01":
        Hum01();
        return;
        break;
        case "Hum02":
        Hum02();
        return;
        break;
        case "Hum03":
        Hum03();
        return;
        break;
    }
    Hum01();
}
function Hum01()
{
    CMessage("I want you to get down on your knees and crawl over to me right now.");
    setTempVar("AV_SubKnees", true);
    if(!getVar("av_fetish_humiliating", false))
    {
        CMessage("I love humiliating your. It\'s so fun.");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I love humiliating a loser like yourself. You\'re so pathetic.");
    }
    CMessage("Stay there...");
    HumilEnd();
    return;
    
    Hum02();
}
function Hum02()
{
    CMessage("Look at you, ready for me to tell you " + random("exactly what I think of your worthless existence ", "how useless you is ", "how worthless you are ") + "...");
    CMessage(random("Let me see ", "Show me ") + "that %Cock%");
    CMessage("lets see if you can try to " + random("keep ", "get ") + "an " + random("hard-on ", "erection ") + "with all my " + random("teasing", "bashing"));
    CMessage("even if you did, the " + random("end ", "finish ") + "would be " + random("useless", "unsatisfying"));
    HumilEnd();
    return;
    
    Hum03();
}
function Hum03()
{
    CMessage("I\'m a " + random("Domme ", "Mistress ") + "who knows the power of " + random("a fetish", "control", "humiliation"));
    CMessage("When I know what pushes your buttons");
    CMessage("I can have you on your knees " + random("worshiping ", "obeying ") + "me in seconds.");
    CMessage("%KneelForMe%");
    CMessage("See? so easy");
    HumilEnd();
    return;
    
    HumilEnd();
}
function HumilEnd()
{
    delVar("AV_MEM_Humil");
    return;
    
    AV_MEM_CEI();
}
function AV_MEM_CEI()
{
    switch(random("CEI01", "CEI02", "CEI03"))
    {
        case "CEI01":
        CEI01();
        return;
        break;
        case "CEI02":
        CEI02();
        return;
        break;
        case "CEI03":
        CEI03();
        return;
        break;
    }
    CEI01();
}
function CEI01()
{
    CMessage("You are going to LOVE " + random("licking ", "eating ") + "your " + random("semen ", "own cum ") + "for me");
    CMessage("so go ahead and " + random("lick up ", "eat ") + "that pre cum for now...");
    CMessage("You\'ve been toying with the idea of tasting yourself for quite some time, haven\'t you?");
    CMessage("So, do it");
    CEIEnd();
    return;
    
    CEI02();
}
function CEI02()
{
    CMessage("I want you to " + random("devour your cum ", "relish in being told to taste yourself ") + "for My amusement.");
    CMessage(random("In no time ", "Before long ") + random("I\'ll turn you into a ", "you will be my ") + "cum  little slut");
    CMessage("that\'s " + random("loves ", "begging ") + "to be told to " + random("eat ", "lick up ") + "their own " + random("mess", "cum", "semen"));
    CMessage("but for now, we\'ll take it slow.");
    CMessage("I enjoy breaking cum sluts in slowly.");
    CEIEnd();
    return;
    
    CEI03();
}
function CEI03()
{
    CMessage("//");
	CMessage("OH, I get it. You have a thing for cum, don’t you?");
	CMessage("It's hard to @RT(lick, eat) your own cum, isn't it?");
	let answer0 = getInput("You want to make me happy, don't you?",6);
    if (answer0.isLike("yes"))
    {
		wantToMakeYouHappyResponse();
    }
    CEIEnd();
	return;
}
function CEIEnd()
{
    delVar("AV_MEM_CEI");
    return;
    
    AV_MEM_MenNControl();
}
function AV_MEM_MenNControl()
{
    switch(random("Con01", "Con02", "Con03"))
    {
        case "Con01":
        Con01();
        return;
        break;
        case "Con02":
        Con02();
        return;
        break;
        case "Con03":
        Con03();
        return;
        break;
    }
    Con01();
}
function Con01()
{
    CMessage("As a man, everything in your life is decided by a female " + random("guardian", "owner"));
    CMessage("Men can be " + random("sold ", "given away ") + "or used " + random("in work camps", "as sex slaves"));
    CMessage(random("women ", "Girls ", "Pussy ") + "rules everything.");
    ControlEnd();
    return;
    
    Con02();
}
function Con02()
{
    CMessage("All the " + random("pain and punishment ", "tease ") + "I will put you through");
    CMessage("to brainwash you into becoming my " + random("complete ", "total ") + "slave.");
    CMessage("I plan to keep you in my control forever.");
    ControlEnd();
    return;
    
    Con03();
}
function Con03()
{
    CMessage("You want a " + random("girl ", "woman ") + "to take control of " + random("you", "your life for you"));
    CMessage("Specifically you want me.");
    CMessage("Show me your self-control because if you can\'t ... you\'re getting " + random("punished", "locked up"));
    ControlEnd();
    return;
    
    ControlEnd();
}
function ControlEnd()
{
    delVar("AV_MEM_MenNControl");
    return;
    
    NoMemory();
}
function NoMemory()
{
    run("Custom" + java.io.File.separator + "RamdomLinks" + java.io.File.separator + "*.*");
    return;
    return;
    
    VeryBad();
}
function VeryBad()
{
    switch(random("VB1", "VB2", "VB3"))
    {
        case "VB1":
        VB1();
        return;
        break;
        case "VB2":
        VB2();
        return;
        break;
        case "VB3":
        VB3();
        return;
        break;
    }
    VB1();
}
function VB1()
{
    CMessage("You\'re lucky I don\'t bust your %Balls% for your recent behaviour, %PetName%");
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("In fact, I\'m thinking I might have to reconsider our no-ballbusting agreement");
    }
    CMessage("Because you\'re getting off way to easy");
    CMessage("If only you made me a happy %DomHonorific% all the time, this wouldn\'t even be an issue");
    CMessage("But that\'s not how it is, is it?");
    if(getVar("av_fetish_pain", false))
    {
        hui75r();
        return;
    }
    return;
    hui75r();
}
function hui75r()
{
    CMessage("%PetName%... I want to tie up those poor %Balls% of yours");
    let answer0 = getInput("Can you go get a shoelace?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Great, go get it then");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
        without_shoelace();
        return;
    }
    let answer1 = getInput("Let me know when you\'re ready, but don\'t make me wait too long...");
    setVar("pthevShoelace", true);
    while (!(answer1.isLike("ready") || answer1.isLike("done")))
    {
        answer1 = getInput("Let me know when you\'re ready");
    }
    if (answer1.isLike("ready", "done"))
    {
        CMessage("Good");
    }
    pthevShoelace();
}
function pthevShoelace()
{
    if(!getVar("AV_BallTied", false))
    {
        CMessage("I want you to tie off your %Balls% for me right now");
        balls_already_tied();
        return;
    }
    CMessage("Go ahead and untie your %Balls%");
    delVar("AV_BallTied");
    CMessage("I want them to taste the freedom they\'ve been lacking lately");
    CMessage("They suffer so much for me, don\'t they?");
    CMessage("Grab your %Balls% and start rubbing them");
    CMessage("Rub them gently, massage them, squeeze them a bit but not too hard");
    CMessage("They\'ve been tied up so tight, they deserve a little love don\'t you think? %Smile%");
    CMessage("Now tie them back up again, but tighter than before %Grin%");
    balls_already_tied();
}
function balls_already_tied()
{
    CMessage("I\'m going to have some fun with those poor %Balls%");
    setTempVar("AV_BallTied", true);
    CMessage("Hurry the fuck up, I don\'t like to be kept waiting, %PetName%");
    without_shoelace();
}
function without_shoelace()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
    }
    CMessage("I want you to slide up to the edge of your seat so those %Balls% are exposed");
    CMessage("Spread your legs apart as far as you can");
    CMessage("You better have the wooden spoon ready, go get it quickly if you don\'t");
    CMessage("You know what\'s going to happen now, don\'t you?");
    CMessage("And you know it\'s going to hurt...");
	changeDommeLevel();
    CMessage("But that\'s how it is with me, if you\'re bad you get hurt");
	cbt("ball");
    CMessage("Now let me ask you a question, %PetName%");
    CMessage("I think you will understand that there\'s only one right answer to the question");
    let answer0 = getInput("Do you want more?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s not the answer I wanted to hear, %PetName%");
        increaseAnger(3)
    }
    CMessage("So let me try again...");
    let answer1 = getInput("Do you want more, %SubName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Alright then");
    }
    CMessage("I thought you wanted to make me happy, but apparently I\'m not all that important to you");
    //--Command:DommeLevelDown
	changeDommeLevel(-2);
    increaseAnger(3)
    return;
    want_more();
}
function want_more()
{
    CMessage("I know you want nothing more than to make me happy");
    changeDommeLevel(-2);
    CMessage("It\'s just too bad that making me happy sometimes involves getting your %Balls% busted %Laugh%");
    //--Command:GotoDommeApathy
	jumpOldApathy();
	return;
    ApathyLevel1();
}
function ApathyLevel1()
{
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    ApathyEndHere();
    return;
    ApathyLevel2();
}
function ApathyLevel2()
{
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    ApathyEndHere();
    return;
    ApathyLevel3();
}
function ApathyLevel3()
{
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    ApathyEndHere();
    return;
    ApathyLevel4();
}
function ApathyLevel4()
{
    ApathyLevel5();
}
function ApathyLevel5()
{
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    CMessage(random("Spank ", "Hit ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
    wait(12);
    ApathyEndHere();
    return;
    ApathyEndHere();
}
function ApathyEndHere()
{
    if(getVar("AV_BallTied", false))
    {
        CMessage("Go ahead and untie those poor %Balls% now");
        delVar("AV_BallTied");
    }
    CMessage("I almost want to say I hope it doesn\'t hurt too bad, but the truth is I don\'t care");
    setVar("AV_YesNoRatio", getVar("AV_YesNoRatio", 0) + 4);
    CMessage("In fact, why would I make you beat them if I didn\'t want it to hurt...");
    CMessage("That wouldn\'t make any sense now would it %Laugh%");
    return;
    
    VB2();
}
function VB2()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("I hope your knees are starting to hurt");
        already_kneeling();
        return;
    }
    CMessage("%KneelForMe%");
    already_kneeling();
}
function already_kneeling()
{
    CMessage("So there you are, " + random("kneeling before me", "on your knees", "kneeling like a true slave"));
    CMessage(random("Doing nothing but ", "Just ") + "waiting " + random("to receive ", "for me to give you ") + "your next command");
    CMessage("Your next assignment");
    CMessage("Well, " + random("maybe ", "what if ", "it could be that ") + "there isn\'t " + random("a next assignment ", "one ", "gonna be another command ", "anything to wait for ") + "...");
    CMessage(random("Maybe ", "What if ") + random("all I want is for you to be ", "I just leave you ") + random("on your knees ", "kneeling ") + "before me until your " + random("kneecaps ", "knees ") + random("start to hurt ", "are hurting ") + "like hell");
    CMessage("%PetName%...");
    let answer0 = getInput("Are you using or pillow or something like that for your knees?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then get rid of it right now, I want your knees on the cold hard floor");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good, you shouldn\'t use a pillow");
    }
    CMessage("Put your hands behind your back");
    CMessage("I want your back straight, maybe arched a little bit");
    CMessage("Your knees should be at a perfect 90 degree angle");
    CMessage("Spread your knees a little bit further apart");
    CMessage("I want to see how long you can keep this up");
    CMessage("Let\'s be clear, I\'m not happy with your performance so far, %PetName%");
    CMessage("So here\'s your chance to redeem yourself");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,cannot take)
    CMessage("If you stay in this exact position long enough,I will be a happy %DomHonorific% again");
	//@CustomMode(#pvDontWantTo,Goto,cannot take)
    CMessage("You should say so if you can\'t take it any more, but I won\'t be happy");
    wait(10);
    //--Command:ApathyLevel(1)
	if(checkOldApathyLevel(1)){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    wait(15);
    if(checkOldApathyLevel(2)){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    wait(15);
    if(checkOldApathyLevel(3)){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    wait(12);
    if(checkOldApathyLevel(4)){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    wait(12);
    CMessage("Alright, that\'s enough");
    enough_kneeling();
}
function enough_kneeling()
{
    setVar("AV_YesNoRatio", getVar("AV_YesNoRatio", 0) + 4);
    CMessage("%SitDown%");
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    return;
    
    VB3();
}
function VB3()
{
    CMessage("Why don\'t you go ahead and stand up");
    wait(10);
    CMessage("So there you are, " + random("standing before me", "all exposed", "presenting yourself like a true slave"));
    CMessage(random("Doing nothing but ", "Just ") + "waiting " + random("to receive ", "for me to give you ") + "your next command");
    CMessage("Your next assignment");
    CMessage("Well, " + random("maybe ", "what if ", "it could be that ") + "there isn\'t " + random("a next assignment ", "one ", "gonna be another command ", "anything to wait for ") + "...");
    CMessage(random("Maybe ", "What if ") + random("all I want is for you to be ", "I just leave you ") + random("on your knees ", "kneeling ") + "before me until your legs " + random("start ", "begin ") + "to hurt");
    CMessage("%PetName%...");
    CMessage("Put your hands behind your back");
    CMessage("I want your back straight, maybe arched a little bit");
    CMessage("Stick your ass out");
    CMessage("Spread your legs a little bit further apart");
    CMessage("Now lift your heels of the floor, I want you on your tippy toes");
    CMessage("I want to see how long you can keep this up");
    CMessage("Let\'s be clear, I\'m not happy with your performance so far, %PetName%");
    CMessage("So here\'s your chance to redeem yourself");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,cannot take)
    CMessage("If you stay in this exact position long enough,I will be a happy %DomHonorific% again");
	//@CustomMode(#pvDontWantTo,Goto,cannot take)
    CMessage("You should say so if you can\'t take it any more, but I won\'t be happy");
    wait(12);
    if(checkOldApathyLevel(1)){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    wait(15);
    if(checkOldApathyLevel(2)){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    wait(15);
    if(checkOldApathyLevel(3)){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    wait(12);
    if(checkOldApathyLevel(4)){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    wait(12);
    CMessage("Alright, that\'s enough");
    enough_standing();
}
function enough_standing()
{
    setVar("AV_YesNoRatio", getVar("AV_YesNoRatio", 0) + 4);
    CMessage("%SitDown%");
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    return;
    cannot_take();
}
function cannot_take()
{
    CMessage("%SitDown%");
    CMessage("But you aren\'t making it easier on yourself by acting this way");
    return;
    
    VeryGood();
}
function VeryGood()
{
    CMessage("I am very happy with you %GeneralTime% %SubName%...");
    CMessage("I want to give you a " + random("small ", "little ") + "reward...");
    CMessage("Let me see...");
	if(checkMinutesPassed(55)){
		//--UNINTERPRETED LINE:@Variable[#DateDifference(AV_SessionTime,seconds)]>[3400] 
		CMessage("Your %Balls% must be "+random("aching so much", "so full")+" after near a hour of "+random("torture", "teasing"));
		AskToRuin();
		return;
	}
    OtherReward();
}
function OtherReward()
{
    let answer0 = getInput("How about %Stroke% for one of your crushes?");
    while (!(answer0.isLike("yes") || answer0.isLike("good") || answer0.isLike("no")))
    {
        answer0 = getInput("Want to %Stroke% for one of your crushes %SubName%?");
    }
    if (answer0.isLike("yes", "good"))
    {
        CMessage("%Good%");
        StrokeCrush();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    return;
    CMessage("Well, I tried %Lol%");
    return;
    
    StrokeCrush();
}
function StrokeCrush()
{
    CMessage("So...");
	setTempVar("a07qplik",true);
    run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "AV_Crushes.js");
    return;
    
    AskToRuin();
}
function AskToRuin()
{
    CMessage("Do you want " + random("to reduce the pressure", "empty it a little"));
    let answer0 = getInput("With a " + random("quickly ", "fast ") + "ruined orgasm?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh, really? You must be " + random("agonizing", "almost exploding"));
        PickTarget();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("wise choice %Lol%");
        OtherReward();
        return;
    }
    PickTarget();
}
function PickTarget()
{
    CMessage("This make me so happy I\'ll let you choose for who you want to ruin, me or one of my Glitter friends.");
    CMessage("No tricks or bad feelings...it\'s your reward...");
    let answer0 = getInput("So, me, %domFriend1Name%, %domFriend2Name% or %domFriend3Name%?");
    while (!(answer0.isLike("you") || answer0.isLike(getVar("domFriend1Name","dfgfd")) || answer0.isLike(getVar("domFriend2Name","dfgfd")) || answer0.isLike(getVar("domFriend3Name","dfgfd"))))
    {
        answer0 = getInput("You, %domFriend1Name%, %domFriend2Name% or %domFriend3Name%?");
    }
    if (answer0.isLike("you"))
    {
        CMessage("aww...so sweet...");
        JustDomme();
        return;
    }
    else if (answer0.isLike(getVar("domFriend1Name","dfgfd")))
    {
        CMessage("OK, let\'s call her");
        addContact(2);
    }
    else if (answer0.isLike(getVar("domFriend2Name","dfgfd")))
    {
        CMessage("OK, let\'s call her");
        addContact(3);
    }
    else if (answer0.isLike(getVar("domFriend3Name","dfgfd")))
    {
        CMessage("OK, let\'s call her");
        addContact(4);
    }
    CMessage("Hey %ShortName%, you was selected to give %SubName% a ruined orgasm...good luck");
    CMessage("I will let you 2 alone");
    removeContact(1);
    CMessage(random("oh so you think you can give me a ruined load? %EmoteMoan%", "Pretty ambicious to ruin a orgasm and continue your session with %DomName%, dont you think?"));
    CMessage(random("thats a lot of cum you have to produce %GeneralTime%", "so your %Balls% really need to be filled up a lot"));
    CMessage("But dont worry, " + random("thats my job", "%Lol%", "I am sure that I am pretty good at that"));
    JustDomme();
}
function JustDomme()
{
    CMessage("Lets start off with our first edge to get warmed");
    edge();
    CMessage("As you can see i am not starting off to hard with you " + "-)");
    CMessage("But from now on, things are going to get exciting %EmoteMoan%");
    CMessage("Actually you decided that you want this, so its not my fault %Lol%");
    CMessage("you know what to do when you hear the beat right?");
    edge();
    CMessage("I will give you a short break to allow your %Balls% to get ready for that ruin");
    CMessage("but dont touch your %Cock%");
    wait(15);
    CMessage("Ready?");
    CMessage("Here you go");
    edgeToRuin();
    CMessage("Just take some deep breath now");
    wait(20);
    CMessage("I think thats enough for now");
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    CMessage("Lets get back to some teasing %Grin%");
    return;
}