DMessage("pvCall_FlagAnal: start");
main();
DMessage("pvCall_FlagAnal: end");
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
    if(getVar("pthevDildo", false))
    {
        pthevDildo();
        return;
    }
    if(getVar("pthevAnalOther", false))
    {
        pthevAnalOther();
        return;
    }
    if(getVar("pthevButtPlug", false))
    {
        pthevButtPlug();
        return;
    }
    CMessage("You know what I think...?");
    CMessage("I think you ought to have a dildo");
    a_proper_dildo();
    return;
    return;
    pthevDildo();
}
function pthevDildo()
{
    if(getVar("pthevPlugged", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_PlugOut.js");
    }
    if(getVar("pvCFAA1", false))
    {
        pvCFAA1();
        return;
    }
    if(getVar("pvCFAB1", false))
    {
        pvCFAB1();
        return;
    }
    if(getVar("pvCFAC1", false))
    {
        pvCFAC1();
        return;
    }
    switch(random("d_one", "d_two", "d_three"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_two":
        d_two();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAA1();
}
function pvCFAA1()
{
    if(getVar("pvCFAB2", false))
    {
        delVar("pvCFAA1");
        setVar("pvCFAA2", true);
        delVar("pvCFAB2");
        d_three();
        return;
    }
    if(getVar("pvCFAC2", false))
    {
        delVar("pvCFAA1");
        setVar("pvCFAA2", true);
        delVar("pvCFAC2");
        d_two();
        return;
    }
    delVar("pvCFAA1");
    setVar("pvCFAA2", true);
    switch(random("d_two", "d_three"))
    {
        case "d_two":
        d_two();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAB1();
}
function pvCFAB1()
{
    if(getVar("pvCFAA2", false))
    {
        delVar("pvCFAB1");
        setVar("pvCFAB2", true);
        delVar("pvCFAA2");
        d_three();
        return;
    }
    if(getVar("pvCFAC2", false))
    {
        delVar("pvCFAB1");
        setVar("pvCFAB2", true);
        delVar("pvCFAC2");
        d_one();
        return;
    }
    delVar("pvCFAB1");
    setVar("pvCFAB2", true);
    switch(random("d_one", "d_three"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAC1();
}
function pvCFAC1()
{
    if(getVar("pvCFAA2", false))
    {
        delVar("pvCFAC1");
        setVar("pvCFAC2", true);
        delVar("pvCFAA2");
        d_two();
        return;
    }
    if(getVar("pvCFAB2", false))
    {
        delVar("pvCFAC1");
        setVar("pvCFAC2", true);
        delVar("pvCFAB2");
        d_one();
        return;
    }
    delVar("pvCFAC1");
    setVar("pvCFAC2", true);
    switch(random("d_one", "d_two"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_two":
        d_two();
        return;
        break;
    }
    d_one();
}
function d_one()
{
    CMessage("You know, %Name%");
    setVar("pvCFAA1", true);
    CMessage("It\'s a good thing I\'m not there in the room with you");
    CMessage("I mean, we\'re not going have sex");
    CMessage("And what am I going to do, watch you %JerkOff%...?");
    CMessage("I don\'t think so %Laugh%");
    CMessage("But there is one thing I\'d want to do to you in person");
    CMessage("I\'d love to have you on all fours on my floor");
    CMessage("Walk up behind you with my strapon...");
    CMessage("And thrust that big black cock <i>deep</i> into your ass");
    CMessage("But you\'re not here on the floor with me");
    CMessage("So what can we do...");
    CMessage("I guess you\'re going to have fetch your dildo %Grin%");
    sleep(randomInt(4, 12));
    let answer0 = getInput("Do you have it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Okay then...");
        got_it_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Then go fucking get it, %PetName% %EmoteFlustered%");
    }
    let answer1 = getInput("Let me know when you\'re ready");
    increaseAnger(3)
    while (!(answer1.isLike("ready") || answer1.isLike("have") || answer1.isLike("got")))
    {
        answer1 = getInput("Just say \'ready\' when you\'re ready, %PetName%");
    }
    if (answer1.isLike("ready", "have", "got"))
    {
        CMessage("Don\'t make me wait next time, alright?");
    }
    got_it_now();
	return;
}
function got_it_now()
{
    CMessage("Get on all fours, %PetName%");
    setTempVar("pvKneeling", true);
    CMessage("Give your ass a nice smack");
    CMessage("I would smack the hell out of it if I were there %Laugh%");
    CMessage("Now stick that dildo in it");
    CMessage("Push it in deeper, %SubName%");
    CMessage("As deep as you can...");
    CMessage("Now leave it there, put both your hands on the floor");
    sleep(9);
    CMessage("So, there you are");
    CMessage("My little strapon bitch %Smile%");
    CMessage("You\'re lucky that\'s not really my strapon, %PetName%");
    CMessage("I would wear you out");
    CMessage("You\'re going to have to do that yourself now...");
    CMessage("So take that dildo, pull it up");
    CMessage("And give me 5 deep thrusts");
    CMessage("Wait a second though, I will count them for you %EmoteWink%");
    CMessage("Get ready...");
    sleep(5);
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5 and don\'t pull it back out");
    CMessage("Slap your ass");
    CMessage("Get ready for another 5 thrusts...");
    sleep(5);
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("Leave the dildo in your ass, %PetName%");
    CMessage("Now take that %Cock% in your hand");
    edge("And edge for me");
    CMessage("Four to the floor, %PetName%");
    sleep(randomInt(8, 15));
    CMessage("I want 5 more deep thrusts from you, so get ready");
    CMessage("1");
    sleep(5);
    CMessage("2");
    sleep(3);
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("And take that cock out of your ass, %Name%");
    CMessage("Get up off your knees");
    delVar("pvKneeling");
    CMessage("That\'s enough of that for now, put the dildo away");
    let answer0 = getInput("Do you need a moment?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Do you need a minute to get ready?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Okay, no problem");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good!");
        then_move_on();
        return;
    }
    let answer1 = getInput("Let me know when you\'re ready");
    while (!(answer1.isLike("ready") || answer1.isLike("yes") || answer1.isLike("done") || answer1.isLike("continue")))
    {
        answer1 = getInput("Ready?");
    }
    if (answer1.isLike("ready", "yes", "done", "continue"))
    {
        CMessage("Alright");
    }
    then_move_on();
	return;
}
function then_move_on()
{
    CMessage("Let\'s move on then %Smile%");
    return;
    d_two();
}
function d_two()
{
    let answer0 = getInput("Do you have your dildo, %Name%?");
    setVar("pvCFAB1", true);
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("got it") || answer0.isLike("can't") || answer0.isLike("cannot") || answer0.isLike("can not") || answer0.isLike("possible") || answer0.isLike("impossible")))
    {
		if (answer0.isLike("no", "not", "don't"))
		{
			answer0 = getInput("Then go get it, let me know when you\'re ready");
		}
		else{
			answer0 = getInput("Do you have it or not?");
		}
    }
    if (answer0.isLike("yes", "ready", "got it"))
    {
        CMessage("You\'re going to be a good %PetName% for me, aren\'t you?");
    }
    else if (answer0.isLike("can't", "cannot", "can not", "possible", "impossible"))
    {
        CMessage("Hm...");
        dildo_not_possible();
        return;
    }
    CMessage("Lube up that dildo");
    sleep(9);
    CMessage("Sit back and lift your legs for me");
    CMessage("Show me your ass, %Name%");
    CMessage("Rub it for me, get that ass ready for my big strapon %Grin%");
    CMessage("%EmoteMoan% Strapons are <i>so</i> sexy");
	showTaggedImage(["DILDO"]);
	//@ShowTaggedImage @TagStrapon
    CMessage("I\'d much prefer to fuck you myself, %Name%");
    CMessage("Looking you in the eyes as I penetrate you deeper and deeper");
    CMessage("But you\'re going to have to do it yourself");
    let answer1 = getInput("Is your ass ready for it?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Then let\'s get to it");
        ass_is_ready_for_it_now();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("You can keep rubbing a little bit longer");
    }
    CMessage("Put some lube on it, massage it");
    CMessage("Stick a finger in your ass, %Name%");
    CMessage("Deeper...");
    CMessage("Maybe try 2 fingers %Smile%");
    CMessage("You can\'t tell me this isn\'t " + random("hot", "sexy"));
    showTaggedImage(4, ["ANAL"]);
    //--Command:TagAnalSex
    CMessage("Your ass should be ready now");
    CMessage("So...");
    ass_is_ready_for_it_now();
	return;
}
function ass_is_ready_for_it_now()
{
    CMessage("Slide that dildo into your ass, %SubName%");
    is_it_in();
	return;
}
function is_it_in()
{
    let answer0 = getInput("Is it in?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Feel how it fills you up");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh...");
        are_you_going_to_do_it();
        return;
    }
    CMessage("Start fucking yourself with it slowly");
    CMessage("One thrust every 5 seconds or so");
    sleep(12);
    CMessage("Keep " + random("that pace ", "going ", "doing it just like that ") + "%PetName%");
    CMessage(random("Speed up a little bit ", "A little faster now ") + "one thrust every 3 seconds");
    sleep(10);
    CMessage("Play with your %Balls%");
    CMessage("Fuck yourself as fast as you can now");
    CMessage("Come on, give me a good show, %PetName%");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ANAL"]);
	sleep(2);
    showTaggedImage(4, ["ANAL"]);
    sleep(2);
    showTaggedImage(4, ["ANAL"]);
    sleep(2);
    another_tagged_image();
	return;
}
function another_tagged_image()
{
    showTaggedImage(4, ["ANAL"]);
    sleep(2);
    if (randomInteger(1, 100) <= 75)
    {
        another_tagged_image();
        return;
    }
    let answer0 = getInput("Do you want to be a good %PetName% for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Of course you do %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
        not_a_good_pet();
        return;
    }
    CMessage("So grab that %Cock%");
    CMessage("And while you keep fucking that ass...");
    edge("%Edge%");
    CMessage("Good %PetName%");
    take_the_dildo_out_good_or_bad();
    return;
    not_a_good_pet();
}
function not_a_good_pet()
{
    CMessage("Then you need to be punished, %SubName%");
    cbt();
    take_the_dildo_out_good_or_bad();
	return;
}
function take_the_dildo_out_good_or_bad()
{
    CMessage("Take that dildo out of your ass");
    CMessage("That was pretty " + random("hot", "sexy"));
    CMessage("Put away the dildo now, we\'re done with it for now");
    return;
    are_you_going_to_do_it();
}
function are_you_going_to_do_it()
{
    let answer0 = getInput("Are you going to do it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then do it, %PetName%");
        increaseAnger(3)
        is_it_in();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ah...");
        increaseAnger(3)
    }
    CMessage("So you just let me sit here giving instructions you\'re never going to follow...");
    increaseAnger(3)
    let answer1 = getInput("Do you think I\'m stupid, %PetName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Fuck you, %Name%");
        //--Command:MoodWorst
		setMood("worst");
        setTempVar("pvDommeAngryEnd", true);
        Finished();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Then don\'t treat me like I am");
    }
    let answer2 = getInput("So are you still into anal stuff, yes or no?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("Alright");
        still_into_anal_stuff();
        return;
    }
    else if (answer2.isLike("no"))
    {
        CMessage("Then why didn\'t you say so earlier %EmoteFlustered%");
    }
    CMessage("Communication is very important, %PetName%");
    CMessage("So let me communicate this to you...");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    still_into_anal_stuff();
}
function still_into_anal_stuff()
{
    CMessage("Some other time then...");
    CMessage("Still, I\'m not letting you off so easy, %PetName%");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    d_three();
}
function d_three()
{
    CMessage("Get you dildo out, %Name%");
    setVar("pvCFAC1", true);
    let answer0 = getInput("You\'ve got it, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("got it") || answer0.isLike("no")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Go get it then!");
		}else{
			answer0 = getInput("Do you have your dildo?");
		}
    }
    if (answer0.isLike("yes", "ready", "got it"))
    {
        CMessage("Good %PetName% %Smile%");
    }
    CMessage("I want you to lick it");
    CMessage("Starting at the bottom and then all the way up");
    answer0 = getInput("Have you ever sucked a <i>real</i> cock, %SubName%?");
	while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Wow, I wouldn\'t have guessed");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good for you");
    }
    CMessage("But I want you to suck that dildo now");
    CMessage("Wrap your lips around the tip and suck on it");
    CMessage("Don\'t take it too deep, just take it easy");
    CMessage("I want you to tease it, kiss it, flick it with your tongue");
    let answer1 = getInput("You know where that dildo is going to go next, right?");
    if (answer1.isLike("yes"))
    {
        CMessage("So, where is it going?");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Let me tell you, %Name%");
    }
    else if (answer1.isLike("ass", "butt", "anal"))
    {
        CMessage("That\'s exactly right, %Name%");
    }
    else
    {
        CMessage("No that\'s not it");
    }
    CMessage("It\'s going to go into your ass %Grin%");
    let answer2 = getInput("But before we get to it, can you deepthroat it for me?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("%Smile%");
        increaseAnger(-3)
    }
    else if (answer2.isLike("no"))
    {
        CMessage("%EmoteSad%");
        increaseAnger(3)
        my_little_cs();
        return;
    }
    CMessage("Do it, shove it all the way down your throat!");
    sleep(6);
    CMessage("One more time, you should really be choking on it this time");
    sleep(9);
    CMessage("My little cock sucker %Smile%");
    my_little_cs();
}
function my_little_cs()
{
    CMessage("Get ready to fuck that little ass of yours");
    CMessage("Get some lube if you need it...");
    CMessage("You are probably going to need it %Laugh%");
    CMessage("Lean back so I have better access to your ass");
    CMessage("%PetName%...");
    CMessage("Shove that cock into your ass for me");
    CMessage("Don\'t do anything yet, just put it in");
    let answer0 = getInput("Can you push it a little deeper?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then push it deeper, %Name% %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Just try to gently push it deeper, %Name% %Smile%");
    }
    CMessage("Until you think it can\'t go any deeper");
    CMessage("And now...");
    CMessage("Pull it all the way out very slowly");
    sleep(8);
    CMessage("%EmoteMoan% That is " + random("hot", "sexy", "amazing", "incredible"));
    CMessage("Let\'s do that again");
    CMessage("Push it in as deep as you can");
    CMessage("Until it starts to feel slightly uncomfortable");
    CMessage("Or until it\'s all the way in %EmoteWink%");
    let answer1 = getInput("Is your %Cock% still hard, %Name%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Aww it can\'t stay up %Giggles%");
    }
    CMessage("%StartStroking%");
    CMessage("Slowly pull out the dildo while you stroke");
    CMessage("And when it\'s all the way out...");
    CMessage("Shove it back in");
    cbt("cock");
    edge("%Edge%");
    CMessage("And pull the dildo out again");
    CMessage("I love it when you fuck yourself and edge at the same time %Smile%");
    CMessage("Having control over your %Cock% and your ass at the same time...");
    CMessage("That just made me <i>so</i> fucking wet, %SubName%");
    CMessage("I think I\'ll be typing with one hand from now on %Laugh%");
    CMessage("We\'re going to have to do that again soon...");
    CMessage("But for now I have something else in mind");
    CMessage("So put the dildo away, %Name%");
    return;
    dildo_not_possible();
}
function dildo_not_possible()
{
    let answer0 = getInput("You do have a dildo, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then make sure you can use it... %EmoteFlustered%");
        make_sure_you_do();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I thought you did...");
        delVar("pthevDildo");
    }
    CMessage("So, are you still into anal play?");
    let answer1 = getInput("Are you still into anal play?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("You should probably get yourself a dildo then %Smile%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Oh... well, that\'s okay %SubName%");
        delVar("pthevAnal");
        setVar("pthevNoAnal", true);
    }
    CMessage("Now where were we...");
    return;
    make_sure_you_do();
}
function make_sure_you_do()
{
    let answer0 = getInput("Are you still into anal play?");
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
        CMessage("Oh... well, that\'s okay %SubName%");
        delVar("pthevAnal");
        setVar("pthevNoAnal", true);
    }
    CMessage("Now where were we...");
    return;
    pthevAnalOther();
}
function pthevAnalOther()
{
    CMessage("I know you like sticking stuff in your ass, %Name%");
    CMessage("But you should really get a dildo");
    a_proper_dildo();
	return;
}
function a_proper_dildo()
{
    CMessage("A proper one");
    CMessage("A long, thick cock %Smile%");
    CMessage("Because you know what?");
    CMessage("I love the idea of owning your ass as well as your %Cock%");
    CMessage("And I can only really own your ass if I can violate it %Grin%");
    CMessage("So what do you say...");
    let answer0 = getInput("Are you going to get a dildo?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("already") || answer0.isLike("have one") || answer0.isLike("got one") || answer0.isLike("dildo")))
    {
        answer0 = getInput("Yes or no? Or do you already have one?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Awesome %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad, I hope you change your mind...");
    }
    else if (answer0.isLike("already", "have one", "got one", "dildo"))
    {
        CMessage("Wow...");
        already_got_one();
        return;
    }
    CMessage("Just let me know when you\'ve got one %EmoteWink%");
    return;
    already_got_one();
}
function already_got_one()
{
    let answer0 = getInput("Do you really already have a dildo?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("We can have so much fun with that %EmoteHappy%");
        delVar("pthevAnalOther");
        setVar("pthevDildo", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I must have misunderstood then %EmoteSad%");
        let_me_know_when_you_do();
        return;
    }
    let answer1 = getInput("Do you... want some of that fun right now?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Hmmm");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Maybe later then... keep that dildo close, %Name%");
        then_move_on();
        return;
    }
    CMessage("I\'m going to say no, %PetName%");
    CMessage("It\'s good that you want it");
    CMessage("But I want to violate your ass on <i>my</i> terms %Laugh%");
    CMessage("So, make sure to keep that dildo close");
    CMessage("You\'re going to need it sooner or later %Grin%");
    return;
    let_me_know_when_you_do();
}
function let_me_know_when_you_do()
{
    CMessage("Let me know when you do, %PetName%");
    CMessage("I would love to be able to play with your ass %Grin%");
    return;
    pthevButtPlug();
}
function pthevButtPlug()
{
    run("Custom" + java.io.File.separator + "CallFromMod" + java.io.File.separator + "pvCall_FlagButtPlug.js");
    return;
    return;
    Finished();
}
function Finished()
{
    endSession();
    return;
}