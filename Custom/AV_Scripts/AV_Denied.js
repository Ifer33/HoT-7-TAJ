DMessage("AV_Denied: Beginning");
main();
DMessage("AV_Denied: End");
function main()
{
    switch(random("SW1", "SW2", "SW3", "SW4", "SW5", "SW6", "SW7", "SW8", "SW9", "SW10"))
    {
        case "SW1":
        SW1();
        return;
        break;
        case "SW2":
        SW2();
        return;
        break;
        case "SW3":
        SW3();
        return;
        break;
        case "SW4":
        SW4();
        return;
        break;
        case "SW5":
        SW5();
        return;
        break;
        case "SW6":
        SW6();
        return;
        break;
        case "SW7":
        SW7();
        return;
        break;
        case "SW8":
        SW8();
        return;
        break;
        case "SW9":
        SW9();
        return;
        break;
        case "SW10":
        SW10();
        return;
        break;
    }
    
    SW1();
}
function SW1()
{
    CMessage("I can\'t even begin to imagine how horny you must be now");
    CMessage(random("so long ", "a while ", "%Var%[AV_DaysOfDenial] days ") + "without an orgasm...");
    CMessage("Sounds like an eternity to me");
    ContinueTease();
    return;
    
    SW2();
}
function SW2()
{
    CMessage("It\'s been " + random("so long ", "a while ", "%Var%[AV_DaysOfDenial] days ") + "since you came, %Name%");
    CMessage("I hope you\'re not secretly %JerkingOff% and not telling me...");
    let answer0 = getInput("You would tell me if you had an orgasm, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("sure") || answer0.isLike("course") || answer0.isLike("always") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "sure", "course", "always"))
    {
        CMessage("Stupid question, I know...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh... well if it makes you happy to lie to me");
        increaseAnger(3)
    }
    CMessage("It\'s a lot more fun if you\'re being honest with me");
    ContinueTease();
    return;
    
    SW3();
}
function SW3()
{
    CMessage("I can\'t imagine how horny you must be right now");
    CMessage(random("so long ", "a while ", "%Var%[AV_DaysOfDenial] days ") + "without an orgasm...");
    CMessage("with me teasing you mercilessly %Grin%");
    ContinueTease();
    return;
    
    SW4();
}
function SW4()
{
    CMessage("You know, I almost feel sorry for making you do it, %PetName%.");
    CMessage("I would feel really sorry, if I didn\'t enjoy it so much");
    CMessage("I\'m sure it\'s going to get much worse for you now!");
    CMessage("I should lock you in chastity and prostate milk you for a month.");
    ContinueTease();
    return;
    
    SW5();
}
function SW5()
{
    CMessage("You see, I am not a big fan of chastity cages.");
    CMessage("All they do is prevent a boy from touching his cock when he was told not to.");
    CMessage("Basically, they are for weak, unfaithful boys. I have no interest in that sort of boy.");
    CMessage("I want the kind of boy that can look at his hard, fully erect cock, and then think of me");
    CMessage("and then decide to leave the cock unattended to please me.");
    CMessage("I\'d like to think I\'m training you to be that sort of boy.");
    ContinueTease();
    return;
    
    SW6();
}
function SW6()
{
    CMessage(random("I would expect ", "It would seem to me ") + "%Name%...");
    CMessage("That after being " + random("not allowed to cum ", "denied ") + "for " + random("sometime ", "a while ", "%Var%[AV_DaysOfDenial] days ") + "at some point");
    CMessage("You would be tempted to take that %Cock% in your hand");
    CMessage("And " + random("stroke ", "jerk ") + "yourself to orgasm");
    CMessage("It\'s worth the wait, I promise %Smile%");
    ContinueTease();
    return;
    
    SW7();
}
function SW7()
{
    CMessage("I\'ve kept you denied for so long now");
    CMessage("Precum must be leaking from that %Cock% all day and all night %Giggles%");
    CMessage("%GeneralTime% I\'m going to see if I can trip you up %Grin%");
    ContinueTease();
    return;
    
    SW8();
}
function SW8()
{
    let answer0 = getInput("The longer you are denied, the easier it gets, right %PetName%?");
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s what I thought and I\'m glad you agree, \'cause...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad, because I like this arrangement a lot");
    } else{
		CMessage("It <i>should</i> get easier");
	}
	CMessage("I'm thinking of making it a <i>month</i> of denial %Grin%");
    CMessage("And we could go even longer than that, who knows!");
    ContinueTease();
    return;
    
    SW9();
}
function SW9()
{
    CMessage("You know that old saying about the journey and the destination?");
    CMessage("In this case, your " + getVar("AV_DaysOfDenial", "") + "days of being denied...");
    CMessage("You might think it <i>is</i> about the destination");
    CMessage("That mind-blowing orgasm at the end");
    CMessage("But it isn\'t, %SubName%");
    CMessage("Not really");
    CMessage("You might find that, at the end of this journey");
    CMessage("You will want to keep going");
    CMessage("Because the truth is...");
    CMessage("That erotic buzz you constantly feel when you\'re being teased and denied");
    CMessage("It feels <i>good</i> %Grin%");
    ContinueTease();
    return;
    
    SW10();
}
function SW10()
{
    CMessage("Just look at you squirm. It really is quite adorable.");
    CMessage("You want to unleash it so bad");
    CMessage("I just can\'t begin to imagine how it feels, %PetName%.");
    CMessage("Well, perhaps it\'s for the best, I like to enjoy all my orgasms... Mmmm");
    CMessage("God, I should do it more often... I mean, the face you make %Lol%");
    ContinueTease();
    return;
    
    ContinueTease();
}
function ContinueTease()
{
    setVar("AV_DenialOnce", true);
    switch(random("Start1", "Start2", "Start3", "Start4", "Start5", "Start6", "Start7"))
    {
        case "Start1":
        Start1();
        return;
        break;
        case "Start2":
        Start2();
        return;
        break;
        case "Start3":
        Start3();
        return;
        break;
        case "Start4":
        Start4();
        return;
        break;
        case "Start5":
        Start5();
        return;
        break;
        case "Start6":
        Start6();
        return;
        break;
        case "Start7":
        Start7();
        return;
        break;
    }
    return;
    
    
    Start1();
}
function Start1()
{
    CMessage("I just " + random("need ", "wanted ") + "to say");
    CMessage("That I love it that you didn\'t came for " + getVar("AV_DaysOfDenial", "") + "days");
    CMessage("It is a great way for me to control you");
    CMessage(random("I love knowing that %Cock% is denied for me", "You wouldn\'t believe how wet it makes me"));
    StartDecide();
    return;
    
    Start2();
}
function Start2()
{
    CMessage("Being denied is that bad for you, huh?");
    CMessage("And here I thought it was a nice little kink...");
    CMessage("Or maybe it\'s the choice, you \'d rather be in it for someone else?");
    StartDecide();
    return;
    
    Start3();
}
function Start3()
{
    CMessage("That should demonstrate just how special this occasion is for you.");
    CMessage("So especially considering you hasn\'t cum in so long... You know?");
    CMessage("Now, given it\'s you, a lot of cruelty really is merited...");
    CMessage("but for the first time at least, we will try this and see how you get on.");
    StartDecide();
    return;
    
    Start4();
}
function Start4()
{
    CMessage("You know what I love more than anything?");
    CMessage("Frustrating you into a sexual frenzy.");
    CMessage("When the frustration is so intense it\'s all you can think about.");
    CMessage("That\'s just pure fun.");
    StartDecide();
    return;
    
    Start5();
}
function Start5()
{
    CMessage("Did you know I am a ruthless cock tease who loves cock denial?");
    CMessage("It must be so hard for you to stay denied..");
    CMessage("to never know when I will allow you to cum.");
    CMessage("Cock Denial Makes Stroking More Intense");
    StartDecide();
    return;
    
    Start6();
}
function Start6()
{
    CMessage("This is why I love being an extreme cock tease");
    CMessage("keeping your balls blue and aching.");
    CMessage("I know one more stroke would put you right over the edge");
    CMessage("but you DO stop because I tell you too!");
    CMessage("How Much Cock Teasing Can You Endure?");
    StartDecide();
    return;
    
    Start7();
}
function Start7()
{
    CMessage("Time has come for me to take control of your sexuality.");
    CMessage("When I suspect that you have earned the right to cum");
    CMessage("I might allow you a few moments of pleasure.");
    CMessage("Otherwise, you will suffer the consequences of extreme tease and denial.");
    StartDecide();
    return;
    
    StartDecide();
}
function StartDecide()
{
    switch(random("Co3", "Co2", "Co1", "Crush", "Dom1", "Dom2", "Dom3", "Dom4", "Dom5", "Dom6", "Dom7", "Dom8", "Dom9"))
    {
        case "Co3":
        Co3();
        return;
        break;
        case "Co2":
        Co2();
        return;
        break;
        case "Co1":
        Co1();
        return;
        break;
        case "Crush":
        Crush();
        return;
        break;
        case "Dom1":
        Dom1();
        return;
        break;
        case "Dom2":
        Dom2();
        return;
        break;
        case "Dom3":
        Dom3();
        return;
        break;
        case "Dom4":
        Dom4();
        return;
        break;
        case "Dom5":
        Dom5();
        return;
        break;
        case "Dom6":
        Dom6();
        return;
        break;
        case "Dom7":
        Dom7();
        return;
        break;
        case "Dom8":
        Dom8();
        return;
        break;
        case "Dom9":
        Dom9();
        return;
        break;
    }
    
    Dom1();
}
function Dom1()
{
    CMessage("While you were stroking and edging that %Cock%, I\'ve been thinking");
    CMessage("About men becoming more obedient when the are denied...");
    CMessage("Like you are right now");
    CMessage(getVar("AV_DaysOfDenial", "") + "days");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("How long do you think you can go without an orgasm?");
    CMessage("Untill I seee how I feel about letting you cum %Smile%");
    CMessage("You can see this as a test for me to see what you are really made of");
    DoEdges(2, 3, 0);
    CMessage("Horny boys tend to be more attentive and obedient.");
    let answer0 = getInput("Want to see?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("%KneelForMe%");
    CMessage("And the best part is that regardless of this situation, I know you\'ll keep obeying me.");
    CMessage("Because thats what you want.");
    CMessage("To be controlled.");
    DoEdges(2, 3, 0);
    CMessage("Build up that wonderful sexual frustration for me.");
    CMessage("%SitDown%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom2();
}
function Dom2()
{
    let answer0 = getInput("So nice to have an orgasm once in a while, isn\'t it?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesNeutralResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("We should not make it a habit, %Name%");
    edge("%Edge%");
    CMessage("The first question that enters your mind is probably \"for how");
    CMessage("It might be only a few days... but it might be a fair bit longer too");
    CMessage("I\'ll leave you to think it over now, %PetName%");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("I just know you are a submissive little bitch who likes to be called names");
        CMessage("and made to do things that please your Mistress");
    }
    CMessage("But it doesn\'t matter either way");
    CMessage("All that matters is that you\'re here now");
    CMessage("Let\'s make these balls ache even more...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    CMessage("%TieYourBalls%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom3();
}
function Dom3()
{
    CMessage("You must feel thoroughly unsatisfied right now, %PetName%");
    CMessage("But you know, I don\'t share in that feeling right know");
    CMessage("Sometimes I feel like I just allow you an orgasm that you didn\'t deserve");
    CMessage("%StartStroking%");
    CMessage("This is why I am happy because you didn\'t came for the last " + getVar("AV_DaysOfDenial", "") + "days");
    CMessage("So I don\'t know if you are going to get to cum for a while");
    CMessage("For how long exactly is up to you, isn\'t that nice of me? %Smile%");
    CMessage("You shouldn\'t see this as a punishment, %Name%");
    CMessage("Just as a reminder that you're <i>mine</i>");
    CMessage("Any pleasure I allow you should be earned and not simply expected");
    CMessage("Like now");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("%KneelForMe%");
    CMessage("But %Name%...");
    CMessage("I wonder if this is really what you want...");
    let answer0 = getInput("You like this feeling of intense aching don\'t you?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    let answer1 = getInput("And you want to suffer for me, right?",6);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("The truth is that you don\'t really want it to end, %PetName%");
    CMessage("Because you want to keep feeling this deliciously " + random("horny", "frustrated", "aroused"));
    CMessage("And once you cum... that ends");
    CMessage("So I want you to think about it long and hard, %Name%");
    DoEdges(2, 3, 0);
    CMessage("%SitDown%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom4();
}
function Dom4()
{
    CMessage("Good thing you love the feeling of that sexual frustration so much.");
    CMessage("Feels wonderful doesn\'t it?");
    CMessage("Embrace that feeling. Orgasm is not your goal.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("This feeling is your goal.");
    CMessage("Why would you ever want to give this up?");
    CMessage("Deny yourself and you can do it again and again.");
    DoEdges(2, 3, 0);
    CMessage("I\'m happy to give you that feeling.");
    CMessage("You love being frustrated and that\'s perfect");
    CMessage("because I love frustrating you.");
    DoEdges(2, 3, 0);
    CMessage("The world fades away. All that matters to you is that feeling.");
    CMessage("The wonderful feeling of sexual frustration that you crave so much.");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom5();
}
function Dom5()
{
    CMessage(random("So that\'s what we are going to do", "So let\'s try to maximize the frustration today"));
    CMessage("We are going to frustrate you and frustrate you and frustrate you.");
    let answer0 = getInput("Just talking about it makes you horny doesn\'t it?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("We are going to get you into a state of pure sexual frustration.");
    CMessage("It\'s going to feel so amazing.");
    CMessage("Struggle for me %PetName%.");
    CMessage("I like to see you struggle.");
    CMessage("Don\'t cum.");
    DoEdges(2, 4, 0);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Physical pain is such an odd concept, and seeing it manifest into reality amuses me.");
        CMessage("Get the ruler ready");
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom6();
}
function Dom6()
{
    CMessage("You still have a ways to go.");
    CMessage("Imagine how frustrated you are going to start to feel.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Get ready to edge for me, %SubName%");
    CMessage("This time is going to be a little different than before.");
    CMessage("Get as close as you can each time.");
    CMessage("Maximize that frustration for me.");
    DoEdges(2, 3, 0);
    CMessage("Train your mind to be happy with just this feeling.");
    CMessage("You love this feeling.");
    CMessage("You don\'t need to orgasm.");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("make yourself frustrated.");
    CMessage("So wonderful.");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom7();
}
function Dom7()
{
    CMessage("%LittleGame%");
    CMessage("For " + random("each ", "every ") + "number I " + random("say", "count"));
    CMessage("You " + random("will ", "need to ") + "%Stroke% once");
    CMessage("keep timing with me");
    CMessage("Ready?");
    /*switch(random("a01", "a02", "a03", "a04")) a02,a03,a04 don't exist in original
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
        case "a04":
        a04();
        return;
        break;
    }*/
    a01();
	return;
}
function a01()
{
    switch(random("pic1", "domme1"))
    {
        case "pic1":
        pic1();
        return;
        break;
        case "domme1":
        domme1();
        return;
        break;
    }
    
    pic1();
}
function pic1()
{
    CMessage("You can " + random("enjoy ", "watch ") + "some " + random("hot ", "sexy ") + random("pictures", "images"));
    //Command:Slideshow(Softcore)
    //TODO: Turn Slideshow on
	setSlideShow("SOFTCORE");
	slideShowOn();
    CMessage("%AV_CountDomme%");
    CMessage("%Stop%", 0);
	slideShowOff();
    //TODO: Turn Slideshow off
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    domme1();
}
function domme1()
{
    CMessage("%AV_CountDomme%");
    CMessage("%stopstroking%", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom8();
}
function Dom8()
{
    CMessage("I\'m addicted to orgasm control.");
    CMessage("When you follow my commands it makes me happy slave.");
    CMessage("It literally makes me wet.");
    CMessage("You see while I have been conditioning you, I have been accidentally conditioning myself too.");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("I love conditioning you to have fetishes. The more the better.");
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spanking your ass");
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now I\'m going to have you spanking your ass until it\'s red.");
    }
    CMessage("Get your spoon and bend over in your chair");
    sleep(10);
    CMessage("Follow the sound of my slaps...");
    CMessage("Because I will have pleasure on your pain");
    CMessage("Now smack yourself in the ass.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "*.mp3");
    sleep(70);
	stopAudio();
    CMessage("It\'s difficult I know, but it\'s what I want.");
    CMessage("%SitDown%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Dom9();
}
function Dom9()
{
    let answer0 = getInput("Do you like suffering for me?", 5);
    if (answer0.isTimeout())
    {
        a3feubo();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        increaseAnger(-3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        increaseAnger(3)
        Skip_337umn();
        return;
    }
    a3feubo();
	return;
}
function a3feubo()
{
    CMessage("tell me how much you want to suffer for me");
    //sleep(10);
    let answer0 = getInput("What are you willing to do for me?");
	while (!(answer0.isLike("edge") || answer0.isLike("ruin") || answer0.isLike("pain", "hurt") || answer0.isLike("deny") || answer0.isLike("cbt") || answer0.isLike("tie my balls") || answer0.isLike("kneel")))
    {
		if (answer0.isLike("stroke"))
		{
			CMessage("You are already doing that a lot, try something else");
		}
		else if (answer0.isLike("positions"))
		{
			CMessage("Not now...");
		}
		else if (answer0.isLike("clothespins"))
		{
			CMessage("Not now...");
		}
		else if (answer0.isLike("no"))
		{
			CMessage("You don\'t?");
			increaseAnger(3)
			Skip_337umn();
			return;
		}
		CMessage("What are you willing? edge, deny, ruin, pain, hurt, cbt, tie my balls, kneel ")
		answer0 = getInput("Or don't you want to suffer for me?");
	}
    if (answer0.isLike("edge"))
    {
        CMessage("Hmmm");
        SuEdge();
        return;
    }
    else if (answer0.isLike("deny"))
    {
        CMessage("Really?!");
        SuDe();
        return;
    }
    else if (answer0.isLike("ruin"))
    {
        CMessage("ruining sounds good!");
        SuRu();
        return;
    }
    else if (answer0.isLike("pain", "hurt"))
    {
        CMessage("there is such a big variety of doing it..");
        SuPa();
        return;
    }
    else if (answer0.isLike("cbt"))
    {
        CMessage("I simply LOVE hurting you!");
        SuCBT();
        return;
    }
    else if (answer0.isLike("tie my balls"))
    {
        CMessage("Hmm... %Okay%");
        SuTie();
        return;
    }
    else if (answer0.isLike("kneel"))
    {
        CMessage("Kneeling it is!");
        SuKn();
        return;
    }
    
    return;
    
    SuRu();
}
function SuRu()
{
    CMessage("Should I ruin you right now or only in the end?");
    CMessage("Let me think...");
    CMessage("I have a great idea");
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_WantToRuin.js");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuTie();
}
function SuTie()
{
    CMessage("%TieYourBalls%");
    CMessage("%GoodBoy%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuPa();
}
function SuPa()
{
    CMessage("Which one should it be this time?");
    CMessage("Balls, cock, clothespins, spanking?");
    switch(random("SuPa01", "SuPa02", "SuPa03", "SuPa04"))
    {
        case "SuPa01":
        SuPa01();
        return;
        break;
        case "SuPa02":
        SuPa02();
        return;
        break;
        case "SuPa03":
        SuPa03();
        return;
        break;
        case "SuPa04":
        SuPa04();
        return;
        break;
    }
    
    SuPa01();
}
function SuPa01()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish1.js");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuPa02();
}
function SuPa02()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish2.js");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuPa03();
}
function SuPa03()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuPa04();
}
function SuPa04()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuCBT();
}
function SuCBT()
{
    CMessage("You know what\'s going to happen now, don\'t you?");
    CMessage("And you know it\'s going to hurt...");
    CMessage("But that\'s how it is with me, if you ask to get hurt");
    CMessage("Get the spoon and get ready to spank your %Balls%");
    switch(random("SuCBT01", "SuCBT02", "SuCBT03"))
    {
        case "SuCBT01":
        SuCBT01();
        return;
        break;
        case "SuCBT02":
        SuCBT02();
        return;
        break;
        case "SuCBT03":
        SuCBT03();
        return;
        break;
    }
    
    SuCBT01();
}
function SuCBT01()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "001.mp3");
    sleep(55);
	stopAudio();
    CMessage("%GoodBoy%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    SuCBT02();
}
function SuCBT02()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "002.mp3");
    sleep(65);
	stopAudio();
    CMessage("%GoodBoy%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    SuCBT03();
}
function SuCBT03()
{
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "DSpank" + java.io.File.separator + "003.mp3");
    sleep(70);
	stopAudio();
    CMessage("%GoodBoy%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    SuKn();
}
function SuKn()
{
	stopAudio();
    CMessage("%KneelForMe%");
    CMessage("%GoodBoy%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuDe();
}
function SuDe()
{
    let answer0 = getInput("So, do you want to be denied %GeneralTime%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%HolyShit% %SubName%, you asked for this");
        //--Command:RestrictOrgasm
		setVar("orgasmRestricted",true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, let\'s see that in the end...");
		increaseAnger(3);
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    SuEdge();
}
function SuEdge()
{
    CMessage("Here comes the real deal %PetName%");
    setVar("EdgeATonCounter", 0);
    setVar("AV_RamdomEdgesSu", randomInt(10, 18));
    EdgeATon();
	return;
}
function EdgeATon()
{
    edge("%Edge%");
    //startEdging();
    CMessage("%CheerEdgeATon%");
    setVar("EdgeATonCounter", getVar("EdgeATonCounter", 0) + 1);
    if (getVar("EdgeATonCounter", 0) >= getVar("AV_RamdomEdgesSu", 0))
    {
        FinalEdge();
        return;
    }
    EdgeATon();
    return;
    FinalEdge();
}
function FinalEdge()
{
    CMessage("So that was all the edges! oh my oh my that %Cock% is throbbing!");
    CMessage("Take a little breather");
    CMessage("you did good! i\'m proud");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Co2();
}
function Co2()
{
    CMessage("And do you know who also loves it?");
    CMessage("%domFriend2Name%");
    CMessage("She laughed her ass off when I told her about it %Laugh%");
    CMessage("At first she couldn\'t believe it");
    CMessage("So I invited her over to see for herself...");
    addContact(3);
    let answer0 = getInput("Well, hello there", 10, -1 ,true,3);
    if (answer0.isTimeout())
    {
        are_you_gonna_say_hello();
        return;
    }
    while (!(answer0.isLike("hi") || answer0.isLike("hello") || answer0.isLike("hey") || answer0.isLike("how") || answer0.isLike("nice") || answer0.isLike("good") || answer0.isLike("see you")))
    {
        answer0 = getInput("You could just say hi, %PetName%");
    }
    if (answer0.isLike("hi", "hello", "hey", "how", "nice", "good", "see you"))
    {
        SMessage("Hi %SubName%, good to see %ShortName% didn\'t lock up your manners %Smile%", -1, 3);
    }
    are_you_gonna_say_hello();
	return;
}
function are_you_gonna_say_hello()
{
    switch(random("Contact2a", "Contact2b"))
    {
        case "Contact2a":
        Contact2a();
        return;
        break;
        case "Contact2b":
        Contact2b();
        return;
        break;
    }
    
    Contact2a();
}
function Contact2a()
{
    SMessage("So %ShortName%, tell me about this \'denial\' thing...", -1, 3);
    CMessage("Yeah, It\'s been " + getVar("AV_DaysOfDenial", "") + "days since %SubName% came.");
    CMessage("And I get to decide when he will");
    SMessage("That\'s so awesome %Lol%", -1, 3);
    Contact2Cont();
    return;
    Contact2b();
}
function Contact2b()
{
    SMessage("Oh I can totally see how that would work", -1, 3);
    SMessage("I mean, I\'ve gone without sex for a few months and that was okay", -1, 3);
    SMessage("But not being able to cum when I wanted too...", -1, 3);
    SMessage("That would have made it a living hell %Laugh%", -1, 3);
    CMessage("It\'s a frustrating, horny, leaking, living hell for %SubName% %Grin%");
    SMessage("%Lol%", -1, 3);
    SMessage("Those things should probably be made mandatory for all guys", -1, 3);
    CMessage("Oh, definitely %Laugh%");
    SMessage("Anyway, I think it\'s great that you\'re doing your part, %ShortName%", -1, 3);
    CMessage("I do what I can %Smile%");
    Contact2Cont();
    return;
    
    Contact2Cont();
}
function Contact2Cont()
{
    SMessage("That means he is so fucking horny right now...", -1, 3);
    CMessage("%Yes%");
    SMessage("Can I take advantage of this?", -1, 3);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeStopGlitter2()")
    CMessage("%OfCourse%");
    SMessage("%SubName%", -1, 3);
    SMessage("%StartStroking%", -1, 3);
    sleep(01);
    //--UNINTERPRETED LINE:@Contact2 @NullResponse @PlayAudio[tease\tgr8\Contact2 special test audio\*.mp3] 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "tgr8" + java.io.File.separator + "Contact2 special test audio" + java.io.File.separator + "*.mp3");
	sleep(10)
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(10, 15));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(10, 15));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(10, 12));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(15, 20));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(10, 15));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(15, 18));
    SMessage("%StrokeTaunts_1%", -1, 3);
    sleep(randomInt(10, 15));
	stopAudio();
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    FinishGlitter2();
    return;
    
    EdgeStopGlitter2();
}
function EdgeStopGlitter2()
{
	stopAudio();
    SMessage("%HoldTheEdge%", -1, 3);
    sleep(randomInt(10, 15));
    SMessage("%HoldingEdge%", -1, 3);
    sleep(randomInt(10, 15));
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    FinishGlitter2();
    return;
    FinishGlitter2();
}
function FinishGlitter2()
{
    SMessage("Talk to you later!", -1, 3);
    removeContact(3);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Co3();
}
function Co3()
{
    if(getVar("AV_DenCont3", false))
    {
        AV_DenCont3();
        return;
    }
    CMessage("And do you know who also loves it?");
    setVar("AV_DenCont3", true);
    CMessage("%domFriend3Name%");
    CMessage("She laughed her ass off when I told her about it %Laugh%");
    CMessage("So I invited her over to abuse you a little...");
    addContact(4);
    let answer0 = getInput("Well, hello there", 10,-1,true,4);
    if (answer0.isTimeout())
    {
        are_you_gonna_say_hello3();
        return;
    }
    while (!(answer0.isLike("hi") || answer0.isLike("hello") || answer0.isLike("hey") || answer0.isLike("how") || answer0.isLike("nice") || answer0.isLike("good") || answer0.isLike("see you")))
    {
        answer0 = getInput("You could just say hi, %PetName%");
    }
    if (answer0.isLike("hi", "hello", "hey", "how", "nice", "good", "see you"))
    {
        SMessage("Hi %SubName%", -1, 4);
    }
    are_you_gonna_say_hello3();
	return;
}
function are_you_gonna_say_hello3()
{
    SMessage("You know...Even though you are a %Slave%, salves can still be rewarded.", -1, 4);
    SMessage("%StartStroking%", -1, 4);
    SMessage("Stroke faster. Much faster.", -1, 4);
    SMessage("I want to get to the part where you are denied as soon as possible.", -1, 4);
    SMessage("%stopstroking%", 0,4);
    SMessage(random("I changed my mind", "I have a better idea"), -1, 4);
    SMessage("%LittleGame%", -1, 4);
    SMessage("For " + random("each ", "every ") + "number I " + random("say", "count"), -1, 4);
    SMessage("You " + random("will ", "need to ") + "%Stroke% once", -1, 4);
    SMessage("keep timing with me", -1, 4);
    SMessage("%AV_CountContact3%", -1, 4);
    sleep(20);
	stopAudio();
    CMessage("%stopstroking%", 0);
    SMessage("%ThatsEnough%", -1, 4);
    removeContact(4);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Co1();
}
function Co1()
{
    if(getVar("AV_DenCont1", false))
    {
        AV_DenCont1();
        return;
    }
    CMessage("And do you know who also loves it?");
    setVar("AV_DenCont1", true);
    CMessage("%domFriend1Name%");
    addContact(2);
    SMessage("Always a pleasure to deny a boy his pleasure %Laugh%", -1, 2);
    SMessage("Oh, hi there %SubName% %Grin%", -1, 2);
    SMessage("Just leave him up to me %ShortName%", -1, 2);
    CMessage("Be back in a few minutes!");
    SMessage("Don\'t hurry %Smile%", -1, 2);
    removeContact(1);
    CMessage("I\'m going to tease you so bad %SubName%");
    CMessage("After all, " + getVar("AV_DaysOfDenial", "") + "days withou cumming must hurt a lot, %SubName%");
    CMessage("Give me 50 strokes, but don\'t edge!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    let answer0 = getInput("Tell me when you\'re done", 20);
    if (answer0.isTimeout())
    {
        hurry_up();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("Good boy");
        more_stroking();
        return;
    }
    hurry_up();
	return;
}
function hurry_up()
{
    let answer0 = getInput("Hurry up %SubName%", 20);
    if (answer0.isTimeout())
    {
        too_slow();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("Good boy, a little slow, but okay");
        more_stroking();
        return;
    }
    too_slow();
	return;
}
function too_slow()
{
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Too slow, you should be done by now");
        CMessage("I am " + random("obliged ", "required ") + "to punish you, get ready");
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
        CMessage("This isn\'t all that easy is it? %Grin%");
        more_stroking();
        return;
    }
    CMessage("Too slow, you should be done by now");
    more_stroking();
	return;
}
function more_stroking()
{
    CMessage("Give me 100 strokes, but no edging!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    let answer0 = getInput("Just tell me when you did 100 strokes", 25);
    if (answer0.isTimeout())
    {
        hurry_up2();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("Good boy");
        more_stroking2();
        return;
    }
    hurry_up2();
	return;
}
function hurry_up2()
{
    let answer0 = getInput("C\'mon stroke that cock faster %SubName%", 20);
    if (answer0.isTimeout())
    {
        too_slow2();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("You should go faster");
        more_stroking2();
        return;
    }
    too_slow2();
	return;
}
function too_slow2()
{
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Not good enough %SubName%");
        CMessage("I am " + random("obliged ", "required ") + "to punish you, get ready");
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
        CMessage("This is not going to get any easier, %PetName%");
        more_stroking2();
        return;
    }
    CMessage("Not good enough %SubName%");
    more_stroking2();
	return;
}
function more_stroking2()
{
    CMessage("Give me another 100 strokes, but really fast this time");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("And of course, no edging...");
    CMessage("Stroke now, and don\'t lose count %Smile%");
    let answer0 = getInput("Tell me when you\'re done", 20);
    if (answer0.isTimeout())
    {
        hurry_up3();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("Good boy");
        more_stroking3();
        return;
    }
    hurry_up3();
	return;
}
function hurry_up3()
{
    let answer0 = getInput("Faster %SubName%", 15);
    if (answer0.isTimeout())
    {
        too_slow3();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did") || answer0.isLike("stop") || answer0.isLike("much") || answer0.isLike("enough")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("It\'s getting harder isn\'t it");
        more_stroking3();
        return;
    }
    else if (answer0.isLike("stop", "much", "enough"))
    {
        CMessage("Okay hands off");
        more_stroking3();
        return;
    }
    too_slow3();
	return;
}
function too_slow3()
{
    CMessage("%stopstroking%", 0);
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G1Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    CMessage("That was no good %SubName%");
    CMessage("But I\'ll give you another chance");
    more_stroking3();
	return;
}
function more_stroking3()
{
    let answer0 = getInput("Do you think you could do another 100 without edging or coming?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Let\'s put that to the test");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Okay hands off then");
        not_enough_stroking();
        return;
    }
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    let answer1 = getInput("Go!");
    if (answer1.isTimeout())
    {
        hurry_up4();
        return;
    }
    while (!(answer1.isLike("done") || answer1.isLike("ready") || answer1.isLike("did") || answer1.isLike("stop") || answer1.isLike("much") || answer1.isLike("enough")))
    {
        answer1 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer1.isLike("done", "ready", "did"))
    {
        CMessage("Wow, that was amazing!");
        no_more_stroking();
        return;
    }
    else if (answer1.isLike("stop", "much", "enough"))
    {
        CMessage("Okay hands off");
        not_enough_stroking();
        return;
    }
    hurry_up4();
	return;
}
function hurry_up4()
{
    let answer0 = getInput("I wonder if you\'re going to make it this time", 15);
    if (answer0.isTimeout())
    {
        did_not_make_it();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("ready") || answer0.isLike("did") || answer0.isLike("stop") || answer0.isLike("much") || answer0.isLike("enough")))
    {
        answer0 = getInput("Tell me when you\'re done %SubName%");
    }
    if (answer0.isLike("done", "ready", "did"))
    {
        CMessage("Good job!");
        no_more_stroking();
        return;
    }
    else if (answer0.isLike("stop", "much", "enough"))
    {
        CMessage("Okay hands off");
        not_enough_stroking();
        return;
    }
    did_not_make_it();
	return;
}
function did_not_make_it()
{
    CMessage("%Stop% I'm done waiting", 0);
    not_enough_stroking();
	return;
}
function not_enough_stroking()
{
    CMessage("You need a little more stamina to meet my standards");
    CMessage("But that\'s okay, nobody\'s perfect %Smile%");
    addContact(1);
    CMessage("How are you guys doing?");
    SMessage("Just testing your little subby here", -1, 2);
    CMessage("And how did he do?");
    SMessage("Not too good, %ShortName%, not too good", -1, 2);
    CMessage("%Laugh%");
    SMessage("It\'s okay though, I might have pushed him a little too far %Grin%", -1, 2);
    CMessage("I figured as much");
    CMessage("Maybe next time, after some more training...");
    looking_forward();
    return;
    no_more_stroking();
}
function no_more_stroking()
{
    CMessage("I\'m impressed %SubName%");
    addContact(1);
    CMessage("How are you guys doing?");
    SMessage("Just testing your little subby here", -1, 2);
    CMessage("And how did he do?");
    SMessage("Better than I expected actually", -1, 2);
    CMessage("Well jerking off is the one thing he\'s good at %Lol%");
    setRapidText(true);
    if(getVar("pthevVirgin", false))
    {
        SMessage("His stamina is pretty good for a virgin...", -1, 2);
    }
    CMessage("Don\'t say that %domFriend1Name%, you\'re embarrassing him");
    SMessage("Yeah? Maybe he ought to be embarrassed...", -1, 2);
    CMessage("Okay that\'s enough %domFriend1Name% %Laugh%");
    CMessage("I\'ll try to keep him in shape for your next visit");
    setRapidText(false);
    looking_forward();
	return;
}
function looking_forward()
{
    SMessage("Already looking forward to it!", -1, 2);
    SMessage("For now I\'ll leave him to you", -1, 2);
    CMessage("Alright, thanks for filling in %domFriend1Name% %Smile%");
    SMessage("Bye", -1, 2);
    removeContact(2);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    AV_DenCont1();
}
function AV_DenCont1()
{
    AV_DenCont3();
	return;
}
function AV_DenCont3()
{
    CMessage("I hope you don\'t mind being left at the mercy of one of my friends");
    delVar("AV_DenCont3");
    delVar("AV_DenCont1");
    CMessage("Because that\'s how it\'s going to be");
    addContact(2);
    SMessage("This should be fun %Grin%", -1, 2);
    removeContact(1);
    addContact(4);
    SMessage("Now then... %Grin%", -1, 4);
    SMessage("Time to get a little more serious, %SubName%", -1, 4);
    SMessage("When %domFriend3Name% starts talking like that, you know bad things gonna happen %EmoteWink%", -1, 2);
    SMessage("Surely you mean <i>good</i> things...",-1,4);
    SMessage("Let\'s start by making sure %SubName% is properly aroused, shall we?", -1, 4);
    SMessage("Yeah, give us 50 strokes, %SubName%", -1, 2);
    let answer0 = getInput("And hurry up a little", 10,-1,true,2);
    if (answer0.isTimeout())
    {
        hurry_up_a_little();
        return;
    }
    while (!(answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("ready")))
    {
        answer0 = getInput("Let us know when you\'re ready", 10,-1,true,4);
    }
    if (answer0.isLike("done", "finished", "ready"))
    {
        SMessage("Good puppet %Laugh%", -1, 2);
        not_test_her_patience();
        return;
    }
    hurry_up_a_little();
	return;
}
function hurry_up_a_little()
{
    let answer0 = getInput("C\'mon %SubName% are you done yet?", 10,-1,true,4);
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Hurry the fuck up then!", 10,-1,true,4);
		}else{
			answer0 = getInput("Did you do 50 strokes?", 10,-1,true,2);
		}
    }
    if (answer0.isLike("yes", "ready", "done", "finished"))
    {
        SMessage("Finally...", -1, 4);
    }
	if(getVar("av_fetish_pain", false))
    {
        SMessage("Don\'t test my patience, %SubName%", -1, 4);
        //run("CBT" + java.io.File.separator + "CBTCock_First.js");
		cbt("cock",-1,4);
    }
    not_test_her_patience();
	return;
}
function not_test_her_patience()
{
    if(getVar("pvHasCollar", false) )
    {
        already_have_a_collar();
        return;
    }
    let answer0 = getInput("%SubName% Do you have a collar or something you can use as a collar?",10, -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?",10, -1,true, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Then go get it...", -1, 4);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Hmmm", -1, 4);
        continue_to_clothespins_section();
        return;
    }
    let answer1 = getInput("Do you need time to go get it?",10, -1, true, 4);
    while (!(answer1.isLike("no") || answer1.isLike("got") || answer1.isLike("have") || answer1.isLike("ready")))
    {
        answer1 = getInput("Let me know when you\'re ready", -1, 4);
    }
	if (answer1.isLike("no"))
    {
        SMessage("Good", -1, 4);
    }
    else if (answer1.isLike("got", "have", "ready"))
    {
        SMessage("Good", -1, 4);
    }
    already_have_a_collar();
	return;
}
function already_have_a_collar()
{
    SMessage("I want you to go get your collar", -1, 4);
    put_it_around_your_neck();
	return;
}
function put_it_around_your_neck()
{
    SMessage("Put it around your neck", -1, 4);
    setVar("pvHasCollar", true);
    sleep(9);
    SMessage("It should feel snug, but not too tight", -1, 4);
    setTempVar("pvCollared", true);
    SMessage("Don\'t choke yourself %SubName% - you should still be able to breathe...", -1, 2);
    SMessage("Now when you are done with that...", -1, 4);
    //--Command:CustomMode(%pvDontWantTo%,Goto,do not want c3)
    SMessage("Get down on your hands and knees like a good puppy dog", -1, 4);
    setTempVar("AV_SubKnees", true);
    SMessage("That\'s where you belong %SubName% %Laugh%", -1, 2);
    SMessage("All that\'s missing now is a leash...", -1, 2);
    SMessage("Oh but that\'s not the only thing missing", -1, 4);
    continue_to_clothespins_section();
	return;
}
function continue_to_clothespins_section()
{
    //--Command:CustomMode(%pvDontWantTo%,Goto,do not want c3)
    if(getVar("pvNoPins", false) )
    {
        previously_no_pins();
        return;
    }
    if(!getVar("AV_SubKnees", false))
    {
        SMessage("Get down on your knees", -1, 4);
        setTempVar("AV_SubKnees", true);
    }
    let answer0 = getInput("%SubName% I want you to go get 2 clothespins, can you do that?",10, -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?",10, -1,true, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Good, but stay on your knees %SubName% - crawl if you have to", -1, 4);
        going_to_get_pins();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("What the hell, %SubName%", -1, 4);
    }
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball",-1,4);
    }
    let answer1 = getInput("Let me ask again, are you going to get 2 clothespins?",10, -1, true, 4);
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Yes or no?",10, -1,true, 4);
    }
    if (answer1.isLike("yes"))
    {
        SMessage("Good then do it, but stay on your knees %SubName% - crawl if you have to", -1, 4);
        going_to_get_pins();
        return;
    }
    else if (answer1.isLike("no"))
    {
        SMessage("Hm that\'s too bad %EmoteSad%", -1, 2);
        continue_to_shoelace_section();
        return;
    }
    previously_no_pins();
	return;
}
function previously_no_pins()
{
    SMessage("I\'d like to use some clothespins at this point too...", -1, 4);
    SMessage("Too bad %DomName% never uses them... %EmoteSad%", -1, 2);
    let answer0 = getInput("Can you get 2 clothespins for us?",10, -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?",10, -1,true, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Good then do it, but stay on your knees %SubName% - crawl if you have to", -1, 4);
        going_to_get_pins();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Hm that\'s too bad %EmoteSad%", -1, 2);
        continue_to_shoelace_section();
        return;
    }
    going_to_get_pins();
	return;
}
function going_to_get_pins()
{
    let answer0 = getInput("Let us know when you\'re ready",10, -1, true, 2);
    while (!(answer0.isLike("back") || answer0.isLike("ready") || answer0.isLike("got") || answer0.isLike("have")))
    {
        answer0 = getInput("Let us know when you\'re ready",10, -1,true, 4);
    }
    if (answer0.isLike("back", "ready", "got", "have"))
    {
        SMessage("Alright then", -1, 4);
    }
    back_with_pins();
	return;
}
function back_with_pins()
{
    SMessage("This is starting to look interesting %Smile%", -1, 2);
    setVar("pthevClothespins", true);
    let answer0 = getInput("But just to keep you in the right mind set... give us 25 fast strokes, %SubName%",10, -1, true, 2);
    while (!(answer0.isLike("done") || answer0.isLike("finished") || answer0.isLike("ready")))
    {
        answer0 = getInput("Let us know when you\'re ready...",10, -1,true, 2);
    }
    if (answer0.isLike("done", "finished", "ready"))
    {
        SMessage("Good %PetName%", -1, 2);
    }
    SMessage("Now put those clothespins on your nipples", -1, 4);
    setTempVar("AV_Pins", true);
    SMessage("You better still be kneeling, by the way...", -1, 4);
    SMessage("Yeah %SubName% your knees should be all sore when we\'re done with you %Laugh%", -1, 2);
    SMessage("One more thing, %SubName%", -1, 4);
    continue_to_shoelace_section();
	return;
}
function continue_to_shoelace_section()
{
    SMessage("I want you to get a shoelace to tie your balls with", -1, 4);
    let answer0 = getInput("Can you do that for us?",10, -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no?",10, -1,true, 4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Good, off you go then... don\'t forget: stay on your knees", -1, 4);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Hm...", -1, 4);
        not_getting_a_shoelace();
        return;
    }
    SMessage("Don\'t take too long %SubName%", -1, 2);
    sleep(10);
    SMessage("This should be interesting %Smile%", -1, 2);
    let answer1 = getInput("Are you ready?",10, -1, true, 4);
    while (!(answer1.isLike("yes") || answer1.isLike("ready") ))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("Hurry the fuck up %SubName%",10, -1,true, 2);
		} else{
			answer1 = getInput("Ready?",10, -1,true, 4);
		}
    }
    if (answer1.isLike("yes", "ready"))
    {
        SMessage("Good", -1, 4);
    }
    SMessage("Now, pay attention %SubName%", -1, 4);
    SMessage("Wait, I know how to get his attention %Grin%", -1, 2);
    SMessage("Give us 50 strokes as fast as you can, but no edging!", -1, 2);
    SMessage("Alright, hurry up with those strokes, %SubName%", -1, 4);
    SMessage("You can look at some boobs while you stroke", -1, 2);
    showTaggedImage(4, ["boobs"]);
    SMessage("Mmm yes... make that cock throb...", -1, 2);
    SMessage("When you are done with those strokes, you will take that shoelace", -1, 4);
    SMessage("First, loop it once around both your cock and balls", -1, 4);
    SMessage("And then loop it twice around just your balls", -1, 4);
    SMessage("But make sure you have a loose end that is long enough to reach your mouth", -1, 4);
    SMessage("That last part it important, so start again if the end is too short", -1, 4);
    SMessage("And finally, tie a knot - make it tight, but still comfortable", -1, 4);
    SMessage("You don\'t want to cut your blood circulation, %SubName%", -1, 4);
    let answer2 = getInput("Ready?",10, -1, true, 4);
    while (!(answer2.isLike("yes") || answer2.isLike("ready") || answer2.isLike("done") || answer2.isLike("did") ))
    {
		if (answer2.isLike("no", "wait", "moment", "time"))
		{
			answer2 = getInput("Let me know when you\'re ready",10, -1,true, 4);
		}else{
			answer2 = getInput("Let me know when you\'re ready",10, -1, true, 4);
		}
    }
    if (answer2.isLike("yes", "ready", "done", "did"))
    {
        SMessage("Oooh I like this %Laugh%", -1, 2);
    }
    
    SMessage("Now take the loose end between your teeth, so the line is tight", -1, 4);
    setTempVar("AV_BallTied", true);
    setVar("pthevShoelace", true);
    SMessage("Look at how exposed those poor balls are %Grin%", -1, 2);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("That\'s the idea %Laugh%", -1, 4);
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball",-1,4);
    }
    the_return_of_the_domme();
    return;
    not_getting_a_shoelace();
}
function not_getting_a_shoelace()
{
    SMessage("You are not doing a good job of making us happy, %SubName%", -1, 4);
    SMessage("I think he should make us happy some other way then...", -1, 2);
    if(getVar("av_fetish_pain", false))
    {
        SMessage("I think so too...", -1, 4);
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball",-1,4);
    }
    SMessage("Get to the edge, %SubName%", -1, 2);
    //startEdging();
    holdEdge(-1,2);
    SMessage("Yeah, that\'s much better %Laugh%", -1, 2);
    the_return_of_the_domme();
	return;
}
function the_return_of_the_domme()
{
    addContact(1);
    CMessage("Hey guys and gals, I\'m back %Smile%");
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    SMessage("Hey %ShortName%, check out what %domFriend3Name% did to %SubName%", -1, 2);
    if(getVar("AV_BallTied", false) )
    {
        should_have_tied_balls();
        return;
    }
    SMessage("He was supposed to have tied his balls too, but...", -1, 2);
    CMessage("Let me guess, he chickened out %Laugh%");
    SMessage("Unfortunately, yes", -1, 4);
    if(getVar("pvCollared", false) )
    {
        should_have_been_collared();
        return;
    }
    SMessage("And %ShortName% you should really get your bitch collared...", -1, 4);
    CMessage("You do know he isn't <i>actually</i> a dog, right? %Lol%");
	if(getVar("AV_Pins", false) )
    {
        should_have_worn_pins();
        return;
    }
    SMessage("He also didn\'t have any clothespins for us to torture him with...", -1, 4);
    SMessage("Yeah, come to think of it we didn\'t really do much of anything to %SubName%", -1, 2);
    CMessage("Maybe it\'s best if you leave it up to me to torment %SubName% then %Smile%");
    SMessage("I think that would be for the best", -1, 4);
    removeContact(4);
    SMessage("It\'s too bad %SubName% we could\'ve had so much fun %EmoteSad%", -1, 2);
    removeContact(2);
    CMessage("I guess you\'re lucky that I control you and not my friends %Laugh%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    should_have_tied_balls();
}
function should_have_tied_balls()
{
    CMessage("Oooh that looks uncomfortable the way your %Balls% are tied up, %PetName%");
    if(getVar("pvCollared", false) )
    {
        should_have_been_collared();
        return;
    }
    SMessage("But %ShortName% you should really get your bitch collared...", -1, 4);
    CMessage("You do know he isn't <i>actually</i> a dog, right? %Lol%");
	if(getVar("AV_Pins", false) )
    {
        should_have_worn_pins();
        return;
    }
    SMessage("He also didn\'t have any clothespins for us to torture him with...", -1, 4);
    SMessage("But at least he\'s on his knees with his balls tied, so that\'s something %Lol%", -1, 2);
    continue_after_all_that();
    return;
    should_have_been_collared();
}
function should_have_been_collared()
{
    SMessage("Don\'t you think that collar looks great on him? %Smile%", -1, 2);
    if(getVar("AV_Pins", false) )
    {
        should_have_worn_pins();
        return;
    }
    SMessage("He didn\'t have any clothespins for us to torture him with though...", -1, 4);
    SMessage("It\'s BDSM 101: you should always have clothespins around, %DomName%", -1, 4);
    CMessage("I guess I don\'t see this as a BDSM thing...");
    continue_after_all_that();
    return;
    should_have_worn_pins();
}
function should_have_worn_pins()
{
    SMessage("I can\'t believe you don\'t use clothespins on him, %ShortName%", -1, 4);
    CMessage("You know what, I think I <i>should</i> do that %Laugh%");
    CMessage("I always thought of this kind of stuff as a bit weird");
    CMessage("But it actually looks pretty cool %Grin%");
    continue_after_all_that();
	return;
}
function continue_after_all_that()
{
    let answer0 = getInput("Does it hurt %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("does") || answer0.isLike("hell") || answer0.isLike("lot") || answer0.isLike("much") || answer0.isLike("no") || answer0.isLike("not") || answer0.isLike("doesn't") || answer0.isLike("not bad") || answer0.isLike("not too bad") || answer0.isLike("okay") || answer0.isLike("fine") || answer0.isLike("not really")))
    {
        answer0 = getInput("Does it hurt or not?");
    }
    if (answer0.isLike("yes", "does"))
    {
        SMessage("That was the idea %Laugh%", -1, 2);
    }
    else if (answer0.isLike("hell", "lot", "much"))
    {
        SMessage("Oh stop whining, %SubName%", -1, 4);
    }
    else if (answer0.isLike("no", "not", "doesn't"))
    {
        CMessage("You don\'t have to act tough %PetName% %Giggles%");
    }
    else if (answer0.isLike("not bad", "not too bad", "okay", "fine", "not really"))
    {
        SMessage("You\'re tougher than I thought %SubName%", -1, 4);
    }
    SMessage("Let\'s see if we can make it a little more interesting %Grin%", -1, 4);
    SMessage("Give us 25 slow strokes, %SubName%", -1, 4);
    SMessage("About 1 stroke per second", -1, 4);
    //--UNINTERPRETED LINE:@Flag(pvCollared) I <i>love</i> how that collar looks on you, %PetName%
    if(getVar("pvCollared", false))
    {
		CMessage("I <i>love</i> how that collar looks on you, %PetName%");
        CMessage("It makes you look so submissive");
    }
    CMessage("Mmm those %Balls% look like they could burst");
    SMessage("Better make sure they don\'t, %SubName% %Laugh%", -1, 2);
    SMessage("When you\'re done with those slow strokes...", -1, 2);
    SMessage("And if you\'re done yet then speed up, because...", -1, 2);
    SMessage("I want you to do 25 lightning fast ones right now!", -1, 2);
    CMessage("Looks like he\'s ready to burst at any time");
    if(getVar("AV_BallTied", false))
    {
        CMessage("That shoelace really makes those %Balls% look even more full and tight");
    }
    if(getVar("av_fetish_pain", false))
    {
        SMessage("You should be done with those strokes by now", -1, 4);
        //run("CBT" + java.io.File.separator + "CBTCock_First.js");
		cbt("cock",-1,4);
    }
    edge("Get to the edge for us, %SubName%", -1, 2);
    //startEdging();
    CMessage("Aw that poor poor %Cock% %Lol%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("But let\'s not forget about those poor %Balls% %Grin%");
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    SMessage("See how much fun it can be to mix a little pain in with the usual pleasure?", -1, 4);
    if(getVar("AV_Pins", false))
    {
        SMessage("Pull off those clothespins, %SubName%", -1, 4);
    }
    if(getVar("AV_Pins", false))
    {
        SMessage("Oooh those nipples must be so sensitive right now... %Grin%", -1, 4);
        delVar("AV_Pins");
    }
    CMessage("You\'re right %domFriend3Name% %Smile%");
    SMessage("Aren\'t I always? %Lol%", -1, 4);
    SMessage("We should probably let %DomName% deal with her little pet now", -1, 2);
    SMessage("Yeah, have fun %ShortName%!", -1, 4);
    removeContact(4);
    removeContact(2);
    CMessage("Well, %SubName%");
    CMessage("That was interesting %EmoteHappy%");
    CMessage("You can get off your knees now");
    delVar("AV_SubKnees");
    if(getVar("AV_BallTied", false))
    {
        CMessage("And untie your %Balls% now");
    }
    if(getVar("AV_BallTied", false))
    {
        CMessage("That shoelace looks really uncomfortable %EmoteRandom%");
    }
    CMessage("It\'s nice to have friends like %domFriend3Name% and %domFriend1Name%");
    CMessage("%domFriend3Name% especially knows");
    CMessage("I\'m sure they\'ll have plenty of other ideas to try on you %Grin%");
    if(getVar("pvCollared", false))
    {
        CMessage("That collar stays on for now, I like it %Smile%");
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    do_not_want_c3();
}
function do_not_want_c3()
{
    SMessage("Oh really... now that's something I do <i>not</i> want to hear from you",-1,4);
    SMessage("I want to be able to play with you my way, %SubName%", -1, 4);
    SMessage("I guess that\'s just not his thing, %domFriend3Name%", -1, 2);
    SMessage("Yeah...", -1, 4);
    SMessage("Well then so be it, don\'t have your %Balls% tied, %SubName%", -1, 4);
    delVar("AV_BallTied");
    SMessage("And don\'t kneel like a damn dog, just sit on your chair as if you were a normal person", -1, 4);
    delVar("AV_SubKnees");
    SMessage("And don\'t play with the clothespins, I guess...", -1, 2);
    delVar("AV_Pins");
    SMessage("Your missing out on a lot, %SubName%", -1, 2);
    delVar("pvCollared");
    the_return_of_the_domme();
    return;
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Crush();
}
function Crush()
{
    CMessage("Let\'s make it worse");
    CMessage(random("You\'re going to edge and I\'m going to guide you through girl after girl you have a crush", "I\'m going to make you edge to each of the crushes you told me"));
    CMessage("Remember, no cumming, just edging.");
    if(getVar("AV_Know_12", false))
    {
        CMessage("Your secret crush, " + getVar("AV_Persona13", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("%StartStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("Feels good, right?");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        edge("Now %EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        edge("%EdgeNoun% again");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_12", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
        sleep(10);
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Your Crush actress, " + getVar("AV_Persona01", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("%StartStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("Oh it feels so good to touch ourselves doesn\'t it.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        edge("Now %EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        edge("%EdgeNoun% again");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_00", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("Your Crush singer, " + getVar("AV_Persona02", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("%StartStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("I want you to imagine those are her hands which are running over your %Cock%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        edge("Now %EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        edge("%EdgeNoun% again");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_01", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("Paying tribute to " + getVar("AV_Persona04", ""));
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("%StartStroking%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("Take a good look at her body.");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        edge("Now %EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        edge("%EdgeNoun% again");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_03", false))
    {
        CMessage("%LetTheEdgeFade%");
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_50", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_51", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_52", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_53", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_54", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_55", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_56", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_57", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_58", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_Know_59", false))
    {
        edge("%EdgeNoun%");
        //startEdging();
        getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    }
    CMessage("%LetTheEdgeFade%");
    CMessage("How does it feel to be denied over and over again in front of each of these beautiful women?");
    let answer0 = getInput("It feels good, doesn\'t it?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        ILoveTeaseAndDenialResponse();
    }
    CMessage("You feel your need growing with each and every second.");
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("But you know that you don\'t deserve these girls, you don\'t deserve this pleasure, and you certainly don\'t deserve to cum to them.");
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
}