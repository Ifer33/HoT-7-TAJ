DMessage("pvCall_FlagButtPlug: start");
main();
DMessage("pvCall_FlagButtPlug: end");
function main()
{
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
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    if(getVar("pthevPlugged", false) && getVar("already plugged", false))
    {
        pthevPlugged();
        return;
    }
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
    let answer0 = getInput("Do you have your butt plug ready, %PetName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good...");
        plug_ready();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad...");
    }
    CMessage("Because I kinda feel like that ass of your should be plugged");
    let answer1 = getInput("Can you go get it for me?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Awesome %EmoteHappy%");
    }
    else if (answer1.isLike("no"))
    {
        do_not_want_plug();
        return;
    }
    let answer2 = getInput("Let me know when you\'re ready to continue");
    while (!(answer2.isLike("ready") || answer2.isLike("yes")))
    {
        answer2 = getInput("Are you ready?");
    }
    if (answer2.isLike("ready", "yes"))
    {
        CMessage("Okay");
    }
    should_be_plugged();
    return;
    return;
    plug_ready();
}
function plug_ready()
{
    CMessage("Because I kinda feel like that ass of yours should be plugged");
    should_be_plugged();
	return;
}
function should_be_plugged()
{
    CMessage(random("Lube it up as much as you need to", "Make it nice and slippery", "Lube up good if you need it", "Use as much lube as you need"));
    CMessage(random("Put it in your ass", "Shove that plug up your ass", "Push that plug into your tight butt"));
    CMessage(random("Your ass belongs to me ", "I can use your ass however I want ", "Your ass is mine to use ", "I own your ass ") + "%Grin%");
    let answer0 = getInput("Let me know when you\'re ready");
    while (!(answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("in") || answer0.isLike("don't want to") || answer0.isLike("do not want to") || answer0.isLike("don't want that") || answer0.isLike("do not want that") || answer0.isLike("don't make me") || answer0.isLike("do not make me")))
    {
        answer0 = getInput("Just say \'ready\' when you are, %SubName% %EmoteFlustered%");
    }
    if (answer0.isLike("done", "did", "ready", "finished", "in"))
    {
        CMessage(random("Good ", "Alright ", "There you go ", "That\'s much better ") + "%Smile%");
        setTempVar("pthevPlugged", true);
    }
    else if (answer0.isLike("don't want to","do not want to","don't want that","do not want that","don't make me","do not make me"))
    {
        CMessage("What are you talking about");
        do_not_want_plug();
        return;
    }
    CMessage(random("Hmmm yes that\'s much better", "That plug fills you up nicely", "I don\'t know why I don\'t do this more often", "Plugged like a good slut"));
    return;
    do_not_want_plug();
}
function do_not_want_plug()
{
    CMessage("I don\'t like it when you say \'no\' to me, %Name%");
    increaseAnger(3)
    let answer0 = getInput("Are you going to wear your plug for me, yes or no?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        said_yes();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("If that\'s how it\'s going to be...");
    }
    CMessage("Put away your butt plug");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    said_yes();
}
function said_yes()
{
    CMessage("Then do as I say, %Name%");
    should_be_plugged();
    return;
    return;
    two();
}
function two()
{
    CMessage("There\'s something I think you should do right now");
    CMessage("And it involves the following your ass, and...");
    CMessage("A butt plug %Grin%");
    should_be_plugged();
    return;
    return;
    three();
}
function three()
{
    if(getVar("pvKneeling", false) && getVar("something missing", false))
    {
        pvKneeling();
        return;
    }
    let answer0 = getInput("Are you " + random("comfortable ", "sitting comfortably ") + "%Name%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Well, we should something about that %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Probably worried what I might do to you next %Grin%");
    }
    CMessage("Get on your knees");
    setTempVar("pvKneeling", true);
    CMessage("Hands behind your back");
    CMessage("Head down");
    CMessage("Back straight");
    CMessage("That\'s much better");
    CMessage("Spread your legs a little further");
    CMessage("Good %PetName% %Smile%");
    something_missing();
	return;
}
function something_missing()
{
    CMessage("I do like that you\'re kneeling for me, but...");
    CMessage("There\'s something missing in this picture, %PetName%");
    let answer0 = getInput("What do you think?");
    if (answer0.isLike("no", "nothing", "fine", "good", "okay", "perfect", "know", "sure", "unsure"))
    {
        CMessage("I think I know what it is");
    }
    else if (answer0.isLike("ass", "buttplug", "plug", "butt", "anal"))
    {
        CMessage("You might be onto something there...");
    }
    else
    {
        CMessage("No, that\'s not it");
    }
    CMessage("Go get your butt plug, but stay on your knees while you do");
    CMessage("Hurry up, %PetName%");
    CMessage("The quicker you are, the sooner we get to the good part...");
    should_be_plugged();
    return;
    return;
    four();
}
function four()
{
    CMessage("You know %PetName%...");
    CMessage("Nothing says \'I love you %DomHonorific% %DomName%\' more than wearing a butt plug %Laugh%");
    CMessage("And I know that you do love me, so...");
    CMessage("Go get your butt plug! %Smile%");
    CMessage("Can you feel it, %Name%?");
    CMessage("That\'s your love for me getting stronger by the second");
    CMessage("Isn\'t it funny what a simple toy can do to you %Grin%");
    should_be_plugged();
    return;
    return;
    already_plugged();
}
function already_plugged()
{
    switch(random("plug_one", "plug_two", "plug_three", "plug_four"))
    {
        case "plug_one":
        plug_one();
        return;
        break;
        case "plug_two":
        plug_two();
        return;
        break;
        case "plug_three":
        plug_three();
        return;
        break;
        case "plug_four":
        plug_four();
        return;
        break;
    }
    plug_one();
	return;
}
function plug_one()
{
    CMessage("Is that plug still feeling nice and tight?");
    CMessage("Tug on it a little");
    CMessage("Don\'t you love how that feels?");
    CMessage("Now pull it out, %Name%");
    sleep(randomInt(5, 10));
    CMessage("And put it back in...");
    CMessage("%EmoteMoan%");
    CMessage("Do that again, pull it out...");
    sleep(randomInt(6, 12));
    CMessage("And put it back in %Smile%");
    CMessage("It\'s going to stay there a little longer, %Name%");
    return;
    plug_two();
}
function plug_two()
{
    CMessage(random("Go ahead take your butt plug out", "Take that plug out of your ass", "Take out your butt plug now"));
    CMessage(random("Your ass must be all stretched out", "Give that stretched hole a rest", "So your ass can finally relax a little"));
    let answer0 = getInput("Are you ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("did") || answer0.isLike("finished")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you are...");
		}else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "ready", "done", "did", "finished"))
    {
        CMessage("Good boy");
        delVar("pthevPlugged");
    }
    CMessage(random("Let\'s continue then", "Let\'s move on then", "Now where were we"));
    CMessage("You probably feel a bit empty now %Giggles%");
    CMessage("We\'ll just have to fill up that " + random("void ", "emptiness ") + "with " + random("frustrationg ", "aching ") + "now, won\'t we?");
    return;
    plug_three();
}
function plug_three()
{
    let answer0 = getInput("Are you ready to take that plug out of your ass?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Aww poor %PetName%, is it starting to feel a bit uncomfortable? %Giggles%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It feels so nice, right? %Smile%");
    }
    CMessage("I think it\'s about time you got it out");
    CMessage("It\'s not like it\'s the last time you\'ll ever wear it %EmoteWink%");
    CMessage(random("Go ahead take your butt plug out", "Take that plug out of your ass", "Take out your plug now"));
    CMessage(random("Your ass must be all stretched out", "Give that stretched hole a rest", "So your ass can finally relax a little"));
    let answer1 = getInput("Are you ready?");
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("did") || answer1.isLike("finished")))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("Let me know when you are...");
		}else{
			answer1 = getInput("%YesOrNo%");
		}
    }
    if (answer1.isLike("yes", "ready", "done", "did", "finished"))
    {
        CMessage("Good boy");
        delVar("pthevPlugged");
    }
    CMessage("Don\'t worry %Name%");
    CMessage("I\'m sure you\'ll be wearing that plug again sooner or later %Smile%");
    return;
    plug_four();
}
function plug_four()
{
    let answer0 = getInput("When you have your butt plug in, does that make you ache even more?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad...");
    }
    CMessage("I want you to ache and suffer as much as possible");
    CMessage("It turns me on so much to know you\'re plugged up, %Name%");
    CMessage("It tells me I own you completely %Smile%");
    CMessage("And I know you want to feel owned");
    CMessage("So that plug is going to stay in a while longer");
    return;
}