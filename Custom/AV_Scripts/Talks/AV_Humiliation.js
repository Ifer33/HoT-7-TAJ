DMessage("AV_Humiliation: start");
main();
DMessage("AV_Humiliation: end");
function main()
{
    if(getVar("AV_Talk004_NotFirstTime", false))
    {
        AV_Talk004_NotFirstTime();
        return;
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I know you do like being humiliated by girls...and...");
    }
    CMessage("I am " + random("thinking ", "dreaming ") + "a lot about how I could humiliate you...like...");
    setVar("AV_Talk004_NotFirstTime", true);
    AV_Talk004_NotFirstTime();
	return;
}
function AV_Talk004_NotFirstTime()
{
	CMessage(random("So...about humiliation", "Continuing about humiliation"," So...about humiliation", "Let's keep talking about humiliation", "So...humiliation", "Let's keep teasing you with humiliation", "So...about me humiliating you"));
	if(!getVar("AV_THumil01",false) ){
		a001();
		return;
	}else if(!getVar("AV_THumil02",false) ){
		a002();
		return;
	}else if(!getVar("AV_THumil03",false) ){
		a003();
		return;
	}else if(!getVar("AV_THumil04",false) ){
		a004();
		return;
	}else if(!getVar("AV_THumil05",false) ){
		a005();
		return;
	}else if(!getVar("AV_THumil06",false) ){
		a006();
		return;
	}else if(!getVar("AV_THumil07",false) ){
		a007();
		return;
	}else if(!getVar("AV_THumil08",false) ){
		a008();
		return;
	}else if(!getVar("AV_THumil09",false) ){
		a009();
		return;
	}else if(!getVar("AV_THumil10",false) ){
		a010();
		return;
	}else if(!getVar("AV_THumil11",false) ){
		a011();
		return;
	}else if(!getVar("AV_THumil12",false) ){
		a012();
		return;
	}else if(!getVar("AV_THumil13",false) ){
		a013();
		return;
	}
    a013();
    return;
    a001();
}
function a001()
{
    CMessage("Give you instructions for ritual things to do when you\'re in the bathroom");
    setVar("AV_THumil01", true);
    CMessage("pinch yourself when you\'re peeing in a public bathroom.");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    CMessage("1- You can either cum any time you wish but you have to swallow it all");
    let answer0 = getInput("2- or you can only cum once a month but you don\'t have to swallow.");
    while (!(answer0.isLike("1") || answer0.isLike("2")))
    {
        answer0 = getInput("1 or 2 %SubName%?");
    }
    if (answer0.isLike("1"))
    {
        CMessage("Hmm...");
        a001a();
        return;
    }
    else if (answer0.isLike("2"))
    {
        CMessage("Anything to not taste your cum, %SubName%?");
    }
    return;
    a001a();
}
function a001a()
{
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I imagined that, you\'re a cum eater, right?");
    }
    if(!getVar("av_fetish_cei", false))
    {
        answer0 = getInput("Oh really... Would you eat your cum for me?",6);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            wantToEatMyCumResponse();
        }
    }
    return;
    
    a002();
}
function a002()
{
    CMessage("Make you shave all body hair from the neck and down.");
    setVar("AV_THumil02", true);
    CMessage("Have you write words on your body in places where it won\'t show:");
    CMessage("slut, cockroach, %DomName% Hole");
    CMessage("whatever kind of names work to push those buttons of your and make you feel the lovely sting of humiliation.");
    return;
    
    a003();
}
function a003()
{
    CMessage("Make you reveal your body parts to me in intimate and embarrassing ways, as in bend over and spread your ass cheeks for me.");
    setVar("AV_THumil03", true);
    CMessage("Tie you up and talk about how helpless you is");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    let answer0 = getInput("Lick your cum off my feet or being snowballed?");
    while (!(answer0.isLike("lick") || answer0.isLike("cum") || answer0.isLike("snowballed") || answer0.isLike("cbt") || answer0.isLike("balls")))
    {
        answer0 = getInput("cbt snowballed or lick %SubName%?");
    }
    if (answer0.isLike("lick", "cum"))
    {
        CMessage("Oh really...");
        a003a();
        return;
    }
    else if (answer0.isLike("snowballed", "cbt", "balls"))
    {
        CMessage("Oh really...");
        a003b();
        return;
    }
    
    a003a();
}
function a003a()
{
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Always aslut, right?");
    }
    if(!getVar("av_fetish_cei", false))
    {
        answer0 = getInput("Oh realy You do want eat your cum for me?",6);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            wantToEatMyCumResponse();
        }
    }
    return;
    
    a003b();
}
function a003b()
{
    if(!getVar("av_fetish_pain", false))
    {
        answer0 = getInput("Would you spank yours balls for me?",6);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            wantCBTBallsResponse();
        }
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("This does not surprise me");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("By the way...");
        cbt("ball");
    }
    return;
    
    a004();
}
function a004()
{
    CMessage("Tie a pink ribbon tight around your balls and make you wear it for one week.");
    setVar("AV_THumil04", true);
    CMessage("Write something degrading on your body with a permanent marker.");
    CMessage("Have you wear embarrassing clothing under your work clothes");
    CMessage("women\'s underwear, a cock ring, no underwear.");
    return;
    
    a005();
}
function a005()
{
    CMessage("Take your temperature with a rectal thermometer");
    setVar("AV_THumil05", true);
    CMessage("Make you crawl on a leash");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    let answer0 = getInput("Wear a chastity cage for three weeks 24/7 or have a electric shock collar around your balls for 24 hours?");
    while (!(answer0.isLike("chastity") || answer0.isLike("cage") || answer0.isLike("electric") || answer0.isLike("shock") || answer0.isLike("collar")))
    {
        answer0 = getInput("cage or collar %SubName%?");
    }
    if (answer0.isLike("chastity", "cage"))
    {
        CMessage("I would love to see you suffering like that.");
    }
    else if (answer0.isLike("electric", "shock", "collar"))
    {
        CMessage("Ouch...I don\'t know if I could do that with you.");
    }
    return;
    
    a006();
}
function a006()
{
    CMessage("Make you wear a pair of your panties when you\'re out with your friends.");
    setVar("AV_THumil06", true);
    CMessage("Make you use a strapon when I want some fucking.");
    CMessage("Why should I have to suffer not having a good fucking just because you hasn\'t earned a place inside your Goddess?");
    return;
    a007();
}
function a007()
{
    CMessage("Do things in front of a mirror");
    setVar("AV_THumil07", true);
    CMessage("Withhold bathroom privileges");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    answer0 = getInput("You can suck on a StrapOn Dildo for an hour nonstop or be taken anally with a StrapOn Dildo for half hour?");
	while (!(answer0.isLike("suck") || answer0.isLike("anally") || answer0.isLike("anal") || answer0.isLike("fuck") || answer0.isLike("fucked")))
    {
        answer0 = getInput("suck or anal %SubName%?");
    }
    if (answer0.isLike("suck"))
    {
        CMessage("I would make you gag, %PetName% %Lol%");
    }
    else if (answer0.isLike("anally", "anal", "fuck", "fucked"))
    {
        a007a();
        return;
    }
    return;
    
    a007a();
}
function a007a()
{
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("I know...");
        a007b();
        return;
    }
    CMessage("Really?");
    answer0 = getInput("Would you fuck your ass for me?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_wantAnalResponse();
    }
    return;
    a007b();
}
function a007b()
{
    if(getVar("av_doanalnight", false))
    {
        switch(random("anal01", "anal02"))
        {
            case "anal01":
            anal01();
            return;
            break;
            case "anal02":
            anal02();
            return;
            break;
        }
    }
    return;
    
    a008();
}
function a008()
{
    CMessage("Drag you into the shower and pee on you.");
    setVar("AV_THumil08", true);
    CMessage("Deny your orgasm for an entire week. Reward you with a nice blowjob. Slowly, work your way up your body and give you a big kiss.");
    CMessage("Once our lips connect, push your cum into your mouth and make you swallow.");
    return;
    
    a009();
}
function a009()
{
    CMessage("Watch while you go tinkle");
    setVar("AV_THumil09", true);
    CMessage("Genderfuck – panties and lace for boys");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    let answer0 = getInput("Tied and whipped or tied and have hot wax dripped on you?");
    while (!(answer0.isLike("whiped") || answer0.isLike("hot") || answer0.isLike("wax") || answer0.isLike("dripped")))
    {
        answer0 = getInput("whiped or dripped %SubName%?");
    }
    if (answer0.isLike("whiped"))
    {
        CMessage("Hmm...");
    }
    else if (answer0.isLike("hot", "wax", "dripped"))
    {
        CMessage("Really?");
    }
    return;
    a010();
}
function a010()
{
    CMessage("Make you sleep with my favorite strap-on dildo in your mouth!");
    setVar("AV_THumil10", true);
    CMessage("Require you to strip completely every time you uses the toilet");
    CMessage("this is a nice way of sexualizing the use of your privates");
    CMessage("and an especially difficult and possibly humiliating proposition in public restroom stalls.");
    return;
    a011();
}
function a011()
{
    CMessage("Make you repeat embarrassing things I say");
    setVar("AV_THumil11", true);
    CMessage("Make them confess your inner thoughts lusts desires");
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    let answer0 = getInput("Licking my pussy every night or morning for two weeks or tongue fuck my ass one time?");
    while (!(answer0.isLike("pussy") || answer0.isLike("weeks") || answer0.isLike("ass") || answer0.isLike("once") || answer0.isLike("one")))
    {
        answer0 = getInput("pussy or ass %SubName%?");
    }
    if (answer0.isLike("pussy", "weeks"))
    {
        CMessage("Hmm...I would love this too...");
    }
    else if (answer0.isLike("ass", "once", "one"))
    {
        CMessage("Well, there is where your tongue deserve to be");
    }
    return;
    
    a012();
}
function a012()
{
    CMessage("Keep you on your knees or bent over with using the ancient torture restraint called \"The Humbler\"?.");
	setVar("AV_THumil12",true);
    CMessage("Controlling and limiting your toilet access.");
    CMessage("Restricting the number of times you can ask to use the toilet in a day and restricting the time you can spend on the toilet.");
    return;
    
    a013();
}
function a013()
{
    CMessage("Pubic shaving is mandatory");
    CMessage("You has to sit when you pee, any place and any time, standing is not an option for 3 days.");
    setVar("AV_THumil13", true);
    CMessage(random("What would you prefer", "What would you choose", "If you had to choose"));
    let answer0 = getInput("Forced to eat your own cum or drink my urine?");
    while (!(answer0.isLike("eat") || answer0.isLike("cum") || answer0.isLike("my") || answer0.isLike("own") || answer0.isLike("my cum") || answer0.isLike("drink") || answer0.isLike("urine") || answer0.isLike("yours")))
    {
        answer0 = getInput("cum or urine %SubName%?");
    }
    if (answer0.isLike("eat", "cum", "my", "own", "my cum"))
    {
        CMessage("Yeah, I think this is better in any case...");
    }
    else if (answer0.isLike("drink", "urine", "yours"))
    {
        CMessage("Eww...I would never force you to do that %SubName%");
    }
    delVar("AV_THumil01");
    delVar("AV_THumil02");
    delVar("AV_THumil03");
    delVar("AV_THumil04");
    delVar("AV_THumil05");
    delVar("AV_THumil06");
    delVar("AV_THumil07");
    delVar("AV_THumil08");
    delVar("AV_THumil09");
    delVar("AV_THumil10");
    delVar("AV_THumil11");
    delVar("AV_THumil12");
    delVar("AV_THumil13");
    return;
    
    
    
    
    anal01();
}
function anal01()
{
    CMessage(random("Anal time!", "fuck time...for me %Lol%", "time to fuck your ass", "how about we put your ass to the test?", "I think it\'s time to give your ass hole some attention"));
    CMessage(random("Make sure you get that dildo nice and lubed ", "Now get your asspussy wet ", "Lube up your dildo and your butt ") + random("because you know where it is going next", "I want you to get that dildo in there", "and prepare to be fucked"));
    sleep(30);
    CMessage(random("Stand and bend over the desk", "put your legs over the table...open it"));
    sleep(15);
    CMessage(random("Now find a way to get that lubed dildo into your ass", "Place the tip against your butt...Now slide the dildo into your butt", "Slide it into your once tight little ass hole"));
    sleep(20);
    CMessage("Just rock back and forth,");
    CMessage("%StartStroking%");
    CMessage("you can fuck your hands and my cock at the same time.");
    CMessage("Mmm. You like stroking with a cock in your ass?");
    CMessage("You like the way I\'m burying this in your ass?");
    CMessage("God, it looks so good.");
    CMessage("I can\'t keep my eyes off it.");
    CMessage("Mmm, you\'re really starting to quiver.");
    CMessage("You must be getting close.");
    CMessage("Fucking you like this is really getting me worked up, and I just wanna...pump you.");
    CMessage("Your cock is starting to pulse");
    CMessage("Stop!!");
    CMessage("That was amazing.");
    CMessage("I can\'t wait for next time.");
    CMessage("You can remove everything, clean yourself and sit " + "...you have 1 minute to recover");
    sleep(60);
    return;
    
    anal02();
}
function anal02()
{
    CMessage("Hmm, you still look nervous.");
    CMessage("I promise you, I\'ll go nice and slow.");
    CMessage("Why don\'t you get on the floor, on all fours.");
    sleep(15);
    CMessage("My god, you have a cute ass.");
    CMessage(random("Make sure you get that dildo nice and lubed ", "Now get your asspussy wet ", "Lube up your dildo and your butt ") + random("because you know where it is going next", "I want you to get that dildo in there", "and prepare to be fucked"));
    sleep(30);
    CMessage("Mmm, how\'s that feel?");
    CMessage("There, nice and slick.");
    CMessage("Are you ready for this?");
    CMessage("Rub the tip against you, bump up against your ass.");
    CMessage("OK, here we go,");
    CMessage("Just going to go about an inch deep, nice and slow, and then out again.");
    CMessage("Mmm, how was that?");
    CMessage("Again? OK, now go in just a little bit more, and then out again.");
    CMessage("Mmmmm, I bet that feels so tight.");
    CMessage("Ready to go a little deeper?");
    CMessage("OK, here we go...");
    CMessage("God, this is so hot.");
    CMessage("I love making you gasp. You sound like you like it.");
    CMessage("I know I do.");
    CMessage("Let\'s try a few short, slow thrusts.");
    sleep(15);
    CMessage("I love watching it disappear inside you.");
    sleep(15);
    CMessage("Oh my god, you\'re as stiff as a steel rod!");
    CMessage("%Stop%", 0);
    CMessage("You can remove everything, clean yourself and sit " + "...you have 1 minute to recover");
    sleep(60);
    return;
}