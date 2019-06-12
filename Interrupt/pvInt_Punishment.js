main();
function main()
{
	DMessage("pvInt_Punishment Interrupt: Start");
    if (isStrokingAll())
    {
        Sub_Stroking();
		DMessage("pvInt_Punishment Interrupt: End");
        return;
    }
    else
    {
        Sub_Not_Stroking();
		DMessage("pvInt_Punishment Interrupt: End");
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
    if(getVar("pvPunNotFirst", false))
    {
        pvPunNotFirst();
        return;
    }
    CMessage("It was inevitable, wasn\'t it?");
    setVar("pvPunNotFirst", true);
    CMessage("Eventually it would get to the point where I have to punish you, and here we are");
    CMessage("So what should we do...");
    if(getVar("pvSpankingYes", false) )
    {
        yes_to_spanking();
        return;
    }
    let answer0 = getInput("I feel like I should be able to spank your ass, do you agree?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        setVar("pvSpankingYes", true);
        yes_to_spanking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, that really limits my options %EmoteSad%");
        setVar("pvSpankingNo", true);
    }
    CMessage("But I will respect your limits, as always");
    //--Command:BallTorture
	if(ballTorture()){
		switch(random("CBT", "CORNER"))
		{
			case "CBT":
			CBT();
			return;
			break;
			case "CORNER":
			CORNER();
			return;
			break;
		}
	}
    CORNER();
    return;
    yes_to_spanking();
}
function yes_to_spanking()
{
    CMessage("I can\'t actually bend you over my knee and spank you from here, obviously");
    CMessage("So you\'re going to have to do the spanking yourself");
    if(getVar("pthevCaneNo", false))
    {
        CMessage("Now, you\'ve already told me you don\'t have a cane, which is unfortunate");
        do_not_have_cane();
        return;
    }
    if(getVar("pthevCane", false))
    {
        CMessage("I already know that you have a cane");
        already_have_cane();
        return;
    }
    let answer0 = getInput("It would please me a lot if you had a cane to smack your ass with, do you have one?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %Smile%");
        setVar("pthevCane", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
        setVar("pthevCaneNo", true);
        do_not_have_cane();
        return;
    }
    already_have_cane();
}
function already_have_cane()
{
    if(getVar("pvSpoonNo", false))
    {
        CMessage("It would be nice if you had a wooden spoon as well, but okay...");
        do_not_have_spoon_or_cane();
        return;
    }
    if(getVar("pvSpoon", false))
    {
        CMessage("Together with the wooden spoon that gives me options already %Grin%");
        already_have_cane_and_spoon();
        return;
    }
    question_spoon();
    return;
    do_not_have_cane();
}
function do_not_have_cane()
{
    CMessage("But we\'re going to have to make it work somehow");
    if(getVar("pvSpoonNo", false))
    {
        CMessage("A solution would be if you agreed to use a wooden spoon...");
        do_not_have_spoon_or_cane();
        return;
    }
    if(getVar("pvSpoon", false))
    {
        CMessage("At least you have a wooden spoon, that\'s a good alternative");
        already_have_cane_and_spoon();
        return;
    }
    question_spoon();
}
function question_spoon()
{
    let answer0 = getInput("What about a wooden spoon?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Great %Grin%");
        setVar("pvSpoon", true);
        already_have_cane_and_spoon();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hm %EmoteSad%");
        setVar("pvSpoonNo", true);
    }
    do_not_have_spoon_or_cane();
}
function do_not_have_spoon_or_cane()
{
    CMessage("As always, I will respect your limits");
    if(getVar("pthevLeatherBeltNo", false))
    {
        CMessage("And since you won\'t use a leather belt either...");
        only_hand_spanking_left();
        return;
    }
    if(getVar("pthevLeatherBelt", false))
    {
        CMessage("There\'s always the leather belt, I guess %Grin%");
        SPANKING();
        return;
    }
    question_belt();
    return;
    already_have_cane_and_spoon();
}
function already_have_cane_and_spoon()
{
    if(getVar("pthevLeatherBeltNo", false))
    {
        CMessage("It\'s not so bad then that you won\'t use a belt for spanking");
        SPANKING();
        return;
    }
    if(getVar("pthevLeatherBelt", false))
    {
        CMessage("And then there\'s the leather belt... I\'ve got all I need to keep you in line");
        SPANKING();
        return;
    }
    question_belt();
}
function question_belt()
{
    let answer0 = getInput("Do you have a leather belt you can use for spanking?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Awesome %Smile%");
        setVar("pthevLeatherBelt", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh alright then");
        setVar("pthevLeatherBeltNo", true);
    }
    CMessage("It\'s about time we get to your punishment");
    SPANKING();
    return;
    only_hand_spanking_left();
}
function only_hand_spanking_left()
{
    CMessage("I suppose it\'s going to have to come down to bare hand spanking");
    SPANKING();
    return;
}
function pvPunNotFirst()
{
	DMessage("pvInt_Punishment Interrupt: PunNotFirst");
    if(ballTorture() ){
		with_CBT();
		return;
	}
    if(getVar("pvSpankingYes", false))
    {
        switch(random("SPANKING", "CORNER"))
        {
            case "SPANKING":
            SPANKING();
            return;
            break;
            case "CORNER":
            CORNER();
            return;
            break;
        }
    }
    CORNER();
    return;
}

function with_CBT()
{
	DMessage("pvInt_Punishment Interrupt: withCBT");
    if(getVar("pvSpankingYes", false))
    {
        switch(random("CBT", "SPANKING", "CORNER"))
        {
            case "CBT":
            CBT();
            return;
            break;
            case "SPANKING":
            SPANKING();
            return;
            break;
            case "CORNER":
            CORNER();
            return;
            break;
        }
    }
    switch(random("CBT", "CORNER"))
    {
        case "CBT":
        CBT();
        return;
        break;
        case "CORNER":
        CORNER();
        return;
        break;
    }
    return;
}

function CBT()
{
    if(getVar("pthevShoelace", false))
    {
        go_tie_up_balls();
        return;
    }
    if(getVar("pthevShoelaceNo", false))
    {
        move_on_to_cbt();
        return;
    }
    CMessage("I need you to tie up those %Balls% for me, %Name%");
    let answer0 = getInput("Do you have a shoelace or something like that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        setVar("pthevShoelace", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh... well we can do this without tying them up");
        setVar("pthevShoelaceNo", true);
        move_on_to_cbt();
        return;
    }
    CMessage("Go get it for me, because I want your %Balls% tied up nice and tight");
    let answer1 = getInput("Do you need me to tell you how to do this?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Alright then...");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Alright then");
        go_tie_up_balls();
        return;
    }
    CMessage("You should start with the string underneath you cock and balls");
    CMessage("Your %Balls% should be in the middle of the string");
    CMessage("Now pull up both ends of the string and wrap it around both cock and balls");
    CMessage("Loop around one more time and pull it tight");
    CMessage("Not too tight, though: you don\'t want to restrict the blood flow too much!");
    CMessage("Now loop it around just your %Balls% and tie a simple knot");
    CMessage("Finally, loop it twice around just the base of your %Cock% and tie a simple knot on top");
    CMessage("The knots should be tight, but easy to loosen in case it start to feel uncomfortable");
    CMessage("Safety first, %SubName% %Smile%");
    let answer2 = getInput("Are you ready to continue?");
    while (!(answer2.isLike("yes") || answer2.isLike("ready") || answer2.isLike("done") || answer2.isLike("did") || answer2.isLike("finished") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer2.isLike("yes", "ready", "done", "did", "finished"))
    {
        CMessage("Good %PetName%");
        setTempVar("pvBallsTied", true);
    }
    else if (answer2.isLike("no"))
    {
        CMessage("Let me know when you are ready");
        answer2.loop();
    }
    move_on_to_cbt();
    return;
    return;
    go_tie_up_balls();
}

function go_tie_up_balls()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    move_on_to_cbt();
}

function move_on_to_cbt()
{
    if(getVar("pthevSpoon", false))
    {
        switch(random("cbt1", "cbt2"))
        {
            case "cbt1":
            cbt1();
            return;
            break;
            case "cbt2":
            cbt2();
            return;
            break;
        }
    }
    cbt1();
}

function cbt1()
{
    if(!getVar("pvKneeling", false))
    {
        CMessage("On your knees");
        setTempVar("pvKneeling", true);
    }
	increaseAnger(4);		//not decided wich to use
	changeDommeLevel(2);
    cbt("ball");
    increaseAnger(-4);
	changeDommeLevel(-2);
    if(getVar("pvKneeling", false))
    {
        CMessage("You can stop kneeling now, %PetName%");
        delVar("pvKneeling");
    }
    return;
    cbt2();
}

function cbt2()
{
    CMessage("Go get your wooden spoon for me, %PetName%");
    CMessage("Your %Balls% are going to be so sore when I\'m done with you %Grin%");
    if(!getVar("pvKneeling", false))
    {
        CMessage("On your knees");
        setTempVar("pvKneeling", true);
    }
    CMessage("You will smack your %Balls% to my count, %PetName%");
    CMessage("And you will not hold back, this is supposed to hurt");
    CMessage("Get ready");
    sleep(randomInt(5, 15));
    CMessage("ONE");
    CMessage("TWO");
    CMessage("THREE");
    CMessage("FOUR");
    CMessage("FIVE");
    CMessage("SIX");
    CMessage("SEVEN");
    CMessage("EIGHT");
    CMessage("NINE");
    CMessage("TEN");
    CMessage("That will do for now, %Name%");
    if(getVar("pvKneeling", false))
    {
        CMessage("You can stop kneeling now");
        delVar("pvKneeling");
    }
    if(getVar("pvBallsTied", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_UnTieMyBalls.js");
    }
    return;
}

function SPANKING()
{
    if(getVar("pthevCane", false) && getVar("pthevLeatherBelt", false) && getVar("pthevSpoon", false))
    {
        switch(random("cane", "belt", "spoon"))
        {
            case "cane":
            cane();
            return;
            break;
            case "belt":
            belt();
            return;
            break;
            case "spoon":
            spoon();
            return;
            break;
        }
    }
    if(getVar("pthevCane", false) && getVar("pthevLeatherBelt", false))
    {
        switch(random("cane", "belt"))
        {
            case "cane":
            cane();
            return;
            break;
            case "belt":
            belt();
            return;
            break;
        }
    }
    if(getVar("pthevCane", false) && getVar("pthevSpoon", false))
    {
        switch(random("cane", "spoon"))
        {
            case "cane":
            cane();
            return;
            break;
            case "spoon":
            spoon();
            return;
            break;
        }
    }
    if(getVar("pthevSpoon", false) && getVar("pthevLeatherBelt", false))
    {
        switch(random("spoon", "belt"))
        {
            case "spoon":
            spoon();
            return;
            break;
            case "belt":
            belt();
            return;
            break;
        }
    }
    if(getVar("pthevCane", false))
    {
        cane();
        return;
    }
    if(getVar("pthevLeatherBelt", false))
    {
        belt();
        return;
    }
    if(getVar("pthevSpoon", false))
    {
        spoon();
        return;
    }
    CMessage("You\'re going to spank yourself, so get down on your knees");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "Spanking.js");
	customTask("Spanking");
    //CMessage("Sit back down, %PetName%");
	CMessage("%SitDown%, %PetName%");
    punishment_ending();
    return;
    return;
    cane();
}
function cane()
{
    CMessage(random("Fetch the ", "Go get your ") + "cane %Name%");
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("got it") || answer0.isLike("have it")))
    {
        answer0 = getInput("Ready?");
    }
    if (answer0.isLike("yes", "ready", "got it", "have it"))
    {
        if (randomInteger(1, 100) <= 50)
        {
            skip_kneeling();
        }
    }
    if(!getVar("pvKneeling", false))
    {
        CMessage("%KneelForMe%");
    }
    CMessage("I want you to hold the cane between your teeth");
    let answer1 = getInput("Hands behind your back", 18);
    if (answer1.isTimeout())
    {
        hands_behind_back();
        return;
    }
    else			//test if question works
    {
        CMessage("I said hands behind your back %SubName%");
    }
    CMessage("You really have it learn to listen to me");
    sleep(12);
    hands_behind_back();
}
function hands_behind_back()
{
    CMessage("I think you\'re ready for your " + random("caning ", "punishment ") + "now");
    CMessage("Take the cane out of your mouth");
    CMessage("Oh, and wipe it clean in case you drooled all over it");
    skip_kneeling();
}
function skip_kneeling()
{
    if(getVar("pthevCaneExplained", false))
    {
        pthevCaneExplained();
        return;
    }
    if(getVar("pvKneeling", false))
    {
        CMessage("%SitDown%");
        //delVar("pvKneeling");
    }
    CMessage("I want you to bend over your chair, go get one if you need to");
    sleep(6);
    CMessage("Place your hands on the seat");
    CMessage("You will match every swish and crack of the cane you hear");
    CMessage("Each time you will hit your ass as hard as you can");
    CMessage("I want red stripes across your skin, %Name%");
    setVar("pthevCaneExplained", true);
    CMessage("And I want you to count them out loud");
    top_caning();
    return;
    pthevCaneExplained();
}
function pthevCaneExplained()
{
    CMessage("Get into the position %Name%, hands on your chair");
    CMessage("Don\'t forget to count out loud, and don\'t hold back %SubName%");
    CMessage("Remember that you could never strike as hard as I would");
    top_caning();
}
function top_caning()
{
	//Test playAudio
    CMessage("Get ready...");
    sleep(8);
    //setRapidText(true);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", 1);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    another_one();
}
function another_one()
{
    playAudio("Audio" + java.io.File.separator + "MissBlue" + java.io.File.separator + "cane.mp3",true);
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    if (getVar("PtheVCaneCount", 0) == 20)
    {
        caning_done();
        return;
    }
    if (randomInteger(1, 100) <= 90)
    {
        another_one();
        return;
    }
    caning_done();
}
function caning_done()
{
    //CMessage("That\'s enough, sit down");
	CMessage("That\'s enough, %SitDown%");
    //setRapidText(false);
    let answer0 = getInput("How many, %Name%?");
    if (answer0.isLike("8", "eight"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 8);
    }
    else if (answer0.isLike("9", "nine"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 9);
    }
    else if (answer0.isLike("10", "ten"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 10);
    }
    else if (answer0.isLike("11", "eleven"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 11);
    }
    else if (answer0.isLike("12", "twelve"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 12);
    }
    else if (answer0.isLike("13", "thirteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 13);
    }
    else if (answer0.isLike("14", "fourteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 14);
    }
    else if (answer0.isLike("15", "fifteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 15);
    }
    else if (answer0.isLike("16", "sixteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 16);
    }
    else if (answer0.isLike("17", "seventeen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 17);
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 18);
    }
    else if (answer0.isLike("19", "nineteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 19);
    }
    else if (answer0.isLike("20", "twenty"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 20);
    }
    else if (answer0.isLike("know", "count"))
    {
        wrong_number();
        return;
    }
    else
    {
        CMessage("Nope");
        wrong_number();
        return;
    }
    if (getVar("PtheVCaneCount", 0) == 0)
    {
        right_number();
        return;
    }
    wrong_number();
}
function wrong_number()
{
    if(getVar("pthevPunish01NotAgain", false))
    {
        pthevPunish01NotAgain();
        return;
    }
    CMessage("I guess we\'re going to have to do that again");
    setTempVar("pthevPunish01NotAgain", true);
    CMessage("Get back into the position");
    top_caning();
    return;
    right_number();
}
function right_number()
{
    CMessage("Good, then we can move on %Smile%");
    punishment_ending();
    return;
    return;
    pthevPunish01NotAgain();
}
function pthevPunish01NotAgain()
{
    CMessage("Wrong number again");
    CMessage("But I guess you\'ve learned your lesson, so let\'s move on");
    punishment_ending();
    return;
    return;
    belt();
}
function belt()
{
    CMessage(random("Go get ", "Go fetch ", "You should fetch ", "I want you to get ", "You are going to need ") + random("the ", "your ") + "leather belt, %Name%");
    let answer0 = getInput("Do you have it?");
    while (!(answer0.isLike("yes") || answer0.isLike("got it") || answer0.isLike("ready") || answer0.isLike("not possible") || answer0.isLike("impossible") || answer0.isLike("can't")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Go get it then, tell me when you\'re ready");
		}else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "got it", "ready"))
    {
        CMessage("Good");
    }
    /*else if (answer0.isLike("no"))
    {
        CMessage("Go get it then, tell me when you\'re ready");
        answer0.loop();		//test working??
    }*/
    else if (answer0.isLike("not possible", "impossible", "can't"))
    {
        CMessage("*Sigh*");
        CORNER();
        return;
    }
    CMessage(random("Lets get this over with ", "Well now ", "Alright ") + "%Name%");
    if(!getVar("pvKneeling", false))
    {
        CMessage("%KneelForMe%");
        //setTempVar("pvKneeling", true);
    }
    CMessage("You\'re going to give your ass 30 smacks with the belt");
    CMessage("After every 10 smacks, I want you to type \"Thank you %DomHonorific%\"");
    CMessage("And I want your %Ass% to look nice and red, so do it HARD");
    let answer1 = getInput("Okay %PetName%, do it!");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Good, the next 10 now!");
			break;
		} else {
			sendMessage("What did I tell you to say?");
			answer1.loop();
		}
	}
	answer1 = getInput("Tell me, %SubName%");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Okay, 10 more smacks");
			break;
		} else {
			sendMessage("What did I tell you to say?");
			answer1.loop();
		}
	}
	answer1 = getInput("I\'m waiting, %Name%");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Well done, you can put away the belt for now");
			break;
		} else {
			sendMessage("No, try again %SubName%");
			answer1.loop();
		}
	}
    /*while (!(answer1.isLike("thank you")))
    {
        answer1 = getInput("What did I tell you to say?");
    }
    if (answer1.isLike("you"))
    {
        CMessage("Good, the next 10 now");
    }
    let answer2 = getInput("Tell me, %SubName%");
    while (!(answer2.isLike("you")))
    {
        answer2 = getInput("What did I tell you to say?");
    }
    if (answer2.isLike("you"))
    {
        CMessage("Okay, 10 more smacks");
    }
    let answer3 = getInput("I\'m waiting, %Name%");
    while (!(answer3.isLike("you")))
    {
        answer3 = getInput("No, try again %SubName%");
    }
    if (answer3.isLike("you"))
    {
        CMessage("Well done, you can put away the belt for now");
    }*/
    CMessage("Your ass must be all red and glowing now %Grin%");
    if(getVar("pvKneeling", false))
    {
        CMessage("%SitDown%");
        //delVar("pvKneeling");
    }
    punishment_ending();
    return;
    return;
    spoon();
}
function spoon()
{
    CMessage(random("Go get ", "Go fetch ", "You should fetch ", "I want you to get ", "You are going to need ") + random("the ", "your ") + "wooden spoon, %Name%");
    let answer0 = getInput("Do you have it?");
    while (!(answer0.isLike("yes") || answer0.isLike("got it") || answer0.isLike("ready") || answer0.isLike("not possible") || answer0.isLike("impossible") || answer0.isLike("can't") || answer0.isLike("don't have") || answer0.isLike("haven't")))
    {
        if (answer0.isLike("no"))
		{
			answer0 = getInput("Go get it then, tell me when you\'re ready");
		}else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "got it", "ready"))
    {
        CMessage("Good");
    }
    /*else if (answer0.isLike("no"))
    {
        CMessage("Go get it then, tell me when you\'re ready");
        answer0.loop();
    }*/
    else if (answer0.isLike("not possible", "impossible", "can't", "don't have", "haven't"))
    {
        CMessage("*Sigh*");
        CORNER();
        return;
    }
    CMessage(random("Lets get this over with ", "Well now ", "Alright ") + "%Name%");
    if(!getVar("pvKneeling", false))
    {
        CMessage("%KneelForMe%");
        //setTempVar("pvKneeling", true);
    }
    CMessage("You\'re going to give your ass 30 smacks with the spoon");
    CMessage("After every 10 smacks, I want you to type \"Thank you %DomHonorific%\"");
    CMessage("And I want your %Ass% to look nice and red, so do it HARD");
    let answer1 = getInput("Okay %PetName%, do it!");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Good, the next 10 now!");
			break;
		} else {
			sendMessage("What did I tell you to say?");
			answer1.loop();
		}
	}
	answer1 = getInput("Tell me, %SubName%");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Okay, 10 more smacks");
			break;
		} else {
			sendMessage("What did I tell you to say?");
			answer1.loop();
		}
	}
	answer1 = getInput("I\'m waiting, %Name%");
	while (true) {
		if (answer1.isLike("thank you") ) {
			CMessage("Well done, you can put away the belt for now");
			break;
		} else {
			sendMessage("No, try again %SubName%");
			answer1.loop();
		}
	}
    CMessage("Your ass must be all red and glowing now %Grin%");
    if(getVar("pvKneeling", false))
    {
        CMessage("%SitDown%");
        //delVar("pvKneeling");
    }
    punishment_ending();
    return;
}
function CORNER()
{
    if(getVar("pvHasCollar", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            corner_with_collar();
            return;
        }
    }
    if(getVar("pthevButtPlug", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            corner_with_plug();
            return;
        }
    }
    corner_move_on();
    return;
    corner_with_plug();
}
function corner_with_plug()
{
    if(getVar("pthevPlugged", false))
    {
        corner_move_on();
        return;
    }
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_PlugIn.js");
    corner_move_on();
    return;
    corner_with_collar();
}
function corner_with_collar()
{
    if(getVar("pvCollared", false))
    {
        corner_move_on();
        return;
    }
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarOn.js");
    corner_move_on();
}
function corner_move_on()
{
    if(!getVar("pvKneeling", false))
    {
        CMessage("Down on your knees, right now %PetName%");
        setTempVar("pvKneeling", true);
    }
    CMessage("In a moment " + random("you will crawl ", "I want you go ") + random("to the farthest wall ", "to a corner ") + "of your room");
    CMessage(random("Your back should be ", "Make sure your back is ") + "turned to your computer");
    CMessage("Your nose should almost touch the wall");
    CMessage("And no " + random("touching ", "stroking ") + random("keep your greedy paws ", "hands ") + "off your %Cock%");
    CMessage("When I think it\'s enough I\'m going to ring this bell");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bell.mp3");
    CMessage("So make sure you can hear me");
    let answer0 = getInput("Understood?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        go_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s very simple %PetName%");
    }
    CMessage("You are going to kneel with your nose to the wall");
    CMessage("You can come back when you here this bell");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bell.mp3");
    go_now();
}
function go_now()
{
    CMessage("Go now %PetName%");
    sleep(30);
    let answer0 = getInput("You\'re still there aren\'t you?", 30);
    if (answer0.isTimeout())
    {
        still_there();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh no no no, %PetName%");
    }
    else
    {
		CMessage("Oh no no no, %PetName%");
    }
    if(ballTorture() ){
		CMessage("Your %Balls% " + random("will ", "are going to ") + random("be punished ", "pay the price ", "get a beating ") + "for " + random("your disobedience", "that"));
		cbt("ball");
	}
    CMessage("I\'m not kidding around %SubName%");
    CMessage("Kneel down with your face to the wall, now!");
    sleep(30);
    let answer1 = getInput("You better not be reading this", 30);
    if (answer1.isTimeout())
    {
        still_there();
        return;
    }
    /*if (answer1.isLike("yes"))
    {
    }
    else
    {
    }*/
    CMessage("Well congratulations %SubName%");
    CMessage("%ThatsAllForToday%");
    delVar("AV_CrashReport");
    CMessage("%SeeYouLater%");
    endSession();
    return;
    still_there();
}
function still_there()
{
    CMessage("I guess you\'re not %Smile%");
    sleep(120);
    if (randomInteger(1, 100) <= 10)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 20)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 30)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 40)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 50)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 50)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    if (randomInteger(1, 100) <= 50)
    {
        saved_by_the_bell();
        return;
    }
    sleep(10);
    saved_by_the_bell();
}
function saved_by_the_bell()
{
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bell.mp3");
    let answer0 = getInput("Are you there?");
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
    }
    else
    {
    }
    CMessage("I hope you learned your lesson %PetName%");
    punishment_ending();
    return;
}
function punishment_ending()
{
    //--Command:InterruptsOn not sure if needed in TAJ
    delVar("pthevPunish01NotAgain");
    if(getVar("pvPunishmentEndTease", false))
    {
        pvPunishmentEndTease();
        return;
    }
    if(getVar("pvPunishmentThirdEdge", false))
    {
        pvPunishmentThirdEdge();
        return;
    }
    if(getVar("pvPunishmentRefusedCEI", false))
    {
        pvPunishmentRefusedCEI();
        return;
    }
    return;
    pvPunishmentEndTease();
}
function pvPunishmentEndTease()
{
    CMessage("%ThatsAllForToday%");
    delVar("AV_CrashReport");
    CMessage("%SeeYouLater%");
    endSession();
    return;
    pvPunishmentThirdEdge();
}
function pvPunishmentThirdEdge()
{
    CMessage("Don\'t edge without permission again, %PetName%");
    delVar("pvPunishmentThirdEdge");
    CMessage("When you get close, you can always ask to slow down or stop");
    CMessage("And hope I let you %Grin%");
    return;
    pvPunishmentRefusedCEI();
}
function pvPunishmentRefusedCEI()
{
    CMessage("It\'s not that I mind if you don\'t want to eat your cum");
    CMessage("But if you make a promise, I will hold you to it, %Name%");
    CMessage("%ThatsAllForToday%");
    delVar("AV_CrashReport");
    CMessage("%SeeYouLater%");
    endSession();
    return;
}