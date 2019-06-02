DMessage("AV_Cum07: Beginning");
main();
DMessage("AV_Cum07: End");
function main()
{
    switch(random("Prep01", "Prep02", "Prep03", "Prep04", "Prep05", "Start"))
    {
        case "Prep01":
        Prep01();
        return;
        break;
        case "Prep02":
        Prep02();
        return;
        break;
        case "Prep03":
        Prep03();
        return;
        break;
        case "Prep04":
        Prep04();
        return;
        break;
        case "Prep05":
        Prep05();
        return;
        break;
        case "Start":
        Start();
        return;
        break;
    }
    
    Prep01();
}
function Prep01()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%TieYourBalls%");
    }
    Start();
    return;
    
    Prep02();
}
function Prep02()
{
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("%KneelForMe%");
    }
    Start();
    return;
    
    Prep03();
}
function Prep03()
{
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put 4 clothespins on your %Balls%");
        sleep(25);
    }
    Start();
    return;
    
    Prep04();
}
function Prep04()
{
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("%TieYourBalls%");
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_pain", false))
    {
        CMessage("Put 2 clothespins on your nipples");
        sleep(15);
    }
    Start();
    return;
    
    Prep05();
}
function Prep05()
{
    if(getVar("av_fetish_cei", false))
    {
        CMessage(random("And you know what else?", "And you know what?", "one last thing", "Besides that", "furthermore"));
		CMessage("If I let you cum or ruin, you will swallow all of it");
		CMessage("And you don't need to wait for my command, understood?");
    }
    Start();
    return;
    
    Start();
}
function Start()
{
    CMessage("%StartStroking%");
    CMessage("Stroke that %Cock%");
    CMessage("Make sure you get ready to cum for me");
    CMessage(random("I\'ll even show you some pictures to help you", "I want you to feel good right now, %PetName%"));
    showLocalTeasePicture();
    CMessage("Tighten your grip...");
    showLocalTeasePicture();
    CMessage("Feel that hard %Cock% pulsing in the palm of your hand");
    showLocalTeasePicture();
    CMessage("All that matters right now is building up an incredible orgasm");
    var orgasmResult = decideOrgasm();
    if (orgasmResult == 2)
    {
        Orgasm_Allow();
        return;
    }
    else if (orgasmResult == 1)
    {
        Orgasm_Ruin();
        return;
    }
    else if (orgasmResult == 0)
    {
        Orgasm_Deny();
        return;
    }
    
    
    Orgasm_Allow();
}
function Orgasm_Allow()
{
    if(getVar("pvSwallowNextLoad", false) )
    {
        Swallow_This_One();
        return;
    }
    if(getVar("pvBowlOfIce", false) )
    {
        Allow_With_Ice();
        return;
    }
    CMessage("I think today I\'m going to let you cum");
    //--Command:Glitter(pvGLGonnaMakeYouCum)
    CMessage("But wait for my command, %PetName%");
    CMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
    CMessage(random("Just think about ", "Imagine ") + "how good it\'s going to feel when you go over the edge");
    CMessage("When you let that orgasm course through you");
    CMessage("Maybe your limbs will start to shudder and shake");
    CMessage("Maybe for a moment you\'ll feel like you\'ve just died and went to heaven %Smile%");
    CMessage("I want you to make " + random("it so ", "sure ") + "that once I " + random("tell you ", "give you the command ") + "to edge, you\'ll edge " + random("right away", "quickly", "without delay"));
    CMessage("All that " + random("sperm ", "cum ", "jizz ") + "in your %Balls% is just screaming to get out %Giggles%");
    CMessage("It\'s going to feel " + random("so fucking good ", "so damn good ", "incredible ") + "when you " + random("finally climax", "explode", "blow that hot load"));
    CMessage("Feel how hard and sensitive your %Cock% is");
    CMessage("I bet the " + random("ache ", "tension ") + "in your %Cock% and %Balls% is " + random("almost too much now", "getting unbearable"));
    if (randomInteger(1, 100) <= 50)
    {
        go_glitter();
        return;
    }
    /*let answer0 = getInput("Get to the edge, %Name%");
    startEdging();
    if (answer0.isLike("came", "cum", "orgasm"))
    {
        CMessage("Good boy %Smile%");
    }
    else if (answer0.isLike("you", "thanks"))
    {
        CMessage("You\'re welcome %Name%");
    }
    else
    {
        CMessage("There you go %Smile%");
    }*/
	edgeToOrgasm();
    CMessage("I do think you really needed that...");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    go_glitter();
}
function go_glitter()
{
    addContact(3);
    CMessage("Get ready, %PetName%");
    SMessage("I don\'t think you should let him cum, %DomName%", -1, 3);
    SMessage("I don\'t think he deserves that kind of pleasure", -1, 3);
    SMessage("But he's <i>so</i> ready for it now... %Smile%",-1,3);
    SMessage("I know, that\'s exactly why you shouldn\'t let him cum %Laugh%", -1, 3);
    SMessage("Get him all worked up, ready to spray that jizz all over the place, and then...", -1, 3);
    SMessage("...DENIED... it\'s perfect! %Lol%", -1, 3);
    CMessage("Mmm I don\'t know...");
    addContact(2);
    SMessage("Come on %ShortName% - you said you\'d let %SubName% cum, you have to do it!", -1, 2);
    SMessage("And I think he really really REALLY wants it now %Smile%", -1, 2);
    CMessage("Yeah you\'re right, %domFriend1Name%");
    /*let answer0 = getInput("Get to the edge, %Name%");
    startEdging();
    if (answer0.isLike("came", "cum", "orgasm"))
    {
        SMessage("Now that\'s a happy little %PetName% %Laugh%", -1, 2);
    }
    else if (answer0.isLike("you", "thanks"))
    {
        CMessage("You\'re welcome %Name%");
    }
    else
    {
    }*/
	edgeToOrgasm(-1,2);
    SMessage("Too bad all that horny obedience is gone now, too...", -1, 3);
    SMessage("We can always rebuild, %domFriend2Name% %EmoteWink%", -1, 2);
    SMessage("True that %Laugh%", -1, 3);
    removeContact(3);
    SMessage("Bye bye, %SubName% %Giggles%", -1, 2);
    removeContact(2);
    CMessage("That was a close one, you almost missed out on an amazing orgasm... %EmoteWink%");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    Swallow_This_One();
}
function Swallow_This_One()
{
    CMessage("Alright, %PetName%");
    delVar("pvSwallowNextLoad");
    CMessage("Get ready to swallow that big fat load in your %Balls%");
    CMessage("You\'re going to get to the edge in a moment");
    CMessage("And then you\'re going to blow your load right into your hand");
    CMessage("And you\'re going to lick up every last drop");
    /*let answer0 = getInput("%Edge%");
    startEdging();
    if (answer0.isLike("came", "cum", "orgasm"))
    {
        CMessage("Good");
    }
    else if (answer0.isLike("you", "thanks"))
    {
        CMessage("Don\'t thank me yet, %Name% %Smile%");
    }
    else
    {
        CMessage("Mmm");
    }*/
	edgeToOrgasm();
    CMessage("%pthevNowEatYourCum%");
    //setVar("pvNotWantCEI", true);
    //--Command:InterruptsOff
    CMessage(random("Lick it all up", "Lick it up like a good boy", "Be a good boy and lick it up", "Swallow every last drop", "Savour that sticky goo", "Swallow it like a good pet"));
    CMessage("Don\'t think about it, just do it");
    CMessage("Not because you want to, but because <i>I</i> want you to do it");
    CMessage(random("You know you like it ", "that is pretty disgusting ", "That is so nasty ", "You are so gross ", "Better you than me ") + "%EmoteHappy%");
    //delVar("pvNotWantCEI");
    //--Command:InterruptsOn
    CMessage("%ThatsAllForToday%");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    Allow_With_Ice();
}
function Allow_With_Ice()
{
    CMessage("I hope those ice cubes haven\'t completely melted, because we\'re gonna need them %Grin%");
    CMessage("But at the very least you still have a bowl of cold water...");
    CMessage("Now, I\'m gonna let you cum in a moment, but I need you to do something first");
    CMessage("And I think you probably know what that is");
    CMessage("I want you to put that bowl of ice water on the floor in from of you...");
    CMessage("And lower your %Balls% into it %Smile%");
    CMessage("Do it now, %PetName%");
    CMessage("And keep those %Balls% hanging in the bowl, don\'t just dip and pull out");
    CMessage("You will keep those %Balls% in the ice until I say you can stop");
    CMessage("Can you feel that coldness creep up into your body?");
    CMessage("Pretty tough to keep that erection now, hm? %Lol%");
    CMessage("Stay like that a little bit longer, %Name%");
    sleep(randomInt(5, 15));
    CMessage("Alright you can pull out now");
    CMessage("Put the bowl to the side, it\'s time for your orgasm %Smile%");
    /*CMessage("Start stroking, you have 30 seconds to cum, go!");
    --Command:CameMode(Goto,came with ice)
    CMessage("Just say \"I came\" when you do, %Name%");
    sleep(25);
    CMessage("Time\'s up, hands off!");
    --Command:CameMode(Normal)*/
	CMessage("Start stroking, you have 30 seconds to cum, go!");
	let answer0 = getInput("Just say \"I came\" when you do, %Name%",30,0);
	while(true){
		if (answer0.isTimeout()){
			CMessage("Time\'s up, hands off!");
			break;
		}
		else if (answer0.isLike("came", "finished", "did"))
		{
			SMessage("Good %Grin%", -1, 2);
			came_with_ice();
			return;
		}
		else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible"))
		{
			SMessage("You\'re welcome %PetName% %Grin%", -1, 2);
			came_with_ice();
			return;
		}
		else
		{
			SMessage("If you say so you %Crazy% %Emote%", -1, 2);
			came_with_ice();
			return;
		}
	}
    CMessage("Sorry, but you\'re going to have to put those icy %Balls% back in to you pants");
    CMessage("I did give you a chance to cum, you just didn\'t take it...");
    CMessage("Aww look at those little blue snowballs %Lol%");
    CMessage("You just weren\'t horny enough %GeneralTime%");
    CMessage("But look at it from the bright side, next time you'll be <i>really</i> desperate %Grin%");
    CMessage("%ThatsAllForToday%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    came_with_ice();
}
function came_with_ice()
{
    CMessage("Wow, I\'m surprised you were able to cum that quickly with those frosty %Balls% %Laugh%");
    CMessage("I guess you were <i>really</i> desperate to cum %GeneralTime%");
    CMessage("%ThatsAllForToday%");
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    EndFile();
    return;
    
    
    Orgasm_Ruin();
}
function Orgasm_Ruin()
{
    if(getVar("pvSwallowNextLoad", false) )
    {
        Swallow_This_Ruined_One();
        return;
    }
    if(getVar("pvBowlOfIce", false) )
    {
        Ruin_With_Ice();
        return;
    }
    if(getVar("pvEndRuinByContact3", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            ruined_by_c3();
            return;
        }
    }
    CMessage("I think today I\'m going to let you cum");
    //--Command:Glitter(pvGLGonnaMakeYouCum)
    CMessage("But wait for my command, %PetName%");
    CMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
    CMessage(random("Just think about ", "Imagine ") + "how good it\'s going to feel when you go over the edge");
    CMessage("When you let that orgasm course through you");
    CMessage("Maybe your limbs will start to shudder and shake");
    CMessage("Maybe for a moment you\'ll feel like you\'ve just died and went to heaven %Smile%");
    CMessage("I want you to make " + random("it so ", "sure ") + "that once I " + random("tell you ", "give you the command ") + "to edge, you\'ll edge " + random("right away", "quickly", "without delay"));
    CMessage("All that " + random("sperm ", "cum ", "jizz ") + "in your %Balls% is just screaming to get out %Giggles%");
    CMessage("It\'s going to feel " + random("so fucking good ", "so damn good ", "incredible ") + "when you " + random("finally climax", "explode", "blow that hot load"));
    CMessage("Feel how hard and sensitive your %Cock% is");
    CMessage("I bet the " + random("ache ", "tension ") + "in your %Cock% and %Balls% is " + random("almost too much now", "getting unbearable"));
    if (randomInteger(1, 100) <= 50)
    {
        go_glitter3();
        return;
    }
    CMessage("So I\'m going to be nice and let you cum");
    /*let answer0 = getInput("%Edge%");
    startEdging();
    if (answer0.isLike("ruined", "did", "done"))
    {
        CMessage("Very good %Laugh%");
    }
    else if (answer0.isLike("you", "thanks", "gracias", "merci", "gratitude", "grateful"))
    {
        CMessage("You\'re very welcome %Name% %Smile%");
    }
    else
    {
        CMessage("%Grin%");
    }*/
	edgeToRuin();
    CMessage("%AV_UserRuined%");
    CMessage("I did say I'd let you cum, but I didn't say <i>how</i> now...");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    
    go_glitter3();
}
function go_glitter3()
{
    addContact(4);
    CMessage("Get ready, %PetName%");
    SMessage("Before you go any further, %DomName%", -1, 4);
    SMessage("May I make a suggestion for a slight revision of your plan? %Smile%", -1, 4);
    CMessage("What do you have in mind?");
    SMessage("I know you want to let %SubName% cum now, but...", -1, 4);
    SMessage("I think you should make it a <i>ruined</i> orgasm... %Grin%",-1,4);
    CMessage("Mmm you know what, that\'s not a bad idea, %domFriend3Name%");
    CMessage("Alright, ruined orgasm it is %EmoteHappy%");
    /*let answer0 = getInput("%Edge%");
    startEdging();
    holdEdge();
    if (answer0.isLike("ruined", "did", "done"))
    {
        CMessage("Oooh that hurts, doesn\'t it %Laugh%");
    }
    else if (answer0.isLike("you", "thanks", "gracias", "merci", "gratitude", "grateful"))
    {
        CMessage("You\'re very welcome %Name% %Smile%");
    }
    else
    {
        CMessage("%Grin%");
    }*/
	edgeToRuinHold();
    SMessage("See, isn\'t that much more fun?", -1, 4);
    SMessage("For us at least, not so much for %SubName% I guess %Laugh%", -1, 4);
    CMessage("As always, you're right... it <i>is</i> more fun to make him ruin it! %Smile%");
    SMessage("Glad I could help %Smile%", -1, 4);
    removeContact(4);
    CMessage("That didn\'t end quite as pleasurably as you might have hoped, did it...");
    CMessage("Oh well... at least %domFriend3Name% and I enjoyed it, and that\'s all that matters");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    
    ruined_by_c3();
}
function ruined_by_c3()
{
    CMessage("I think today I\'m going to let you cum");
    CMessage("But wait for my command, %PetName%");
    CMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
    CMessage(random("Just think about ", "Imagine ") + "how good it\'s going to feel when you go over the edge");
    addContact(4);
    SMessage("Let me stop you for a second there, %ShortName%", -1,4);
    CMessage("What\'s on your mind, %domFriend3Name%?");
    SMessage("I was thinking we should try out the ruined-by-wooden-spoon thing today", -1, 4);
    CMessage("Well, sure why not %EmoteHappy%");
    CMessage("I was gonna let %SubName% cum, but that sounds like a lot more fun");
    SMessage("We should make him tie up his balls", -1, 4);
    if(getVar("AV_BallTied", false))
    {
        CMessage("Already tied! %Smile%");
    }
    if(!getVar("AV_BallTied", false))
    {
        CMessage("Yes! %TieYourBalls%");
    }
    return_tie_my_balls();
	return;
}
function return_tie_my_balls()
{
    SMessage("That\'s great, now we should prime him for a nice ruined orgasm", -1, 4);
    CMessage("Start stroking that tied up %Cock% %SubName%");
    setVar("edgingmode", "goto");
    setVar("edginggoto", "ruined_by_spoon_edge()");
    CMessage("You shouldn\'t edge yet, but you should be getting really close");
    if(!getVar("AV_SubKnees", false))
    {
        CMessage("Also, get down on your knees, %PetName%");
        setTempVar("AV_SubKnees", true);
    }
    let answer0 = getInput("What about the spoon? %SubName% do you have the spoon ready?",10, -1, true, 4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("My %PetName% is always ready to get his %Balls% smacked %Laugh%");
        have_the_damn_spoon();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Then hurry up and go get the wooden spoon, %SubName%");
    }
    CMessage("But don't get off your knees and don't stop %JerkingOff%");
    SMessage("Let\'s see you struggle a bit, %SubName%", -1, 4);
    SMessage("Stroke that cock while you crawl around looking for a spoon %Lol%", -1, 4);
    CMessage("You should just lay out everything in front of you at the start of the session, %PetName%");
    CMessage("Make it easy for yourself and save us some time, too");
    SMessage("You should train your bitch better, %ShortName% %EmoteWink%", -1, 4);
    CMessage("Alright, you better have to damn spoon now, %SubName%");
    have_the_damn_spoon();
	return;
}
function have_the_damn_spoon()
{
    CMessage("Stroke a bit faster, but don\'t you fucking dare edging");
    how_it_is_going_to_be();
	return;
}
function how_it_is_going_to_be()
{
    SMessage("Here\'s how this is gonna go down, %SubName%", -1, 4);
    SMessage("In a minute you\'re going to get yourself right up to the edge", -1, 4);
    SMessage("You\'re going to edge your cock so hard it becomes unbearable", -1, 4);
    SMessage("And when it becomes unbearable you\'re going to let go of your cock...", -1, 4);
    SMessage("...and take that wooden spoon...", -1, 4);
    SMessage("...and SMACK your balls until all that built cum dribbles out", -1, 4);
    SMessage("You will keep hitting them until that cock stops dribbling", -1,4);
    CMessage("Oh fuck that sounds... intense and painful... and fucking HOT %EmoteMoan%");
    CMessage("The suspense is killing me, do it NOW, %PetName%");
    setVar("edgingmode", "Normal");
	startEdging("%Edge%");
    let answer0 = getInput("ruin your orgasm by smacking those pathetic balls, right NOW!");
    
    if (answer0.isLike("ruined", "done", "did"))
    {
        CMessage("Fuck %Grin%");
    }
    else
    {
        CMessage("Fuck %Grin%");
    }
    SMessage("That was the best orgasm EVER", -1, 4);
    CMessage("If you can call it an orgasm... %SubName% didn\'t seem so enjoy it all that much");
    delVar("pvEndRuinByContact3");
    setVar("pvMod40SkipRuinTalk", true);
    SMessage("This, my dear %DomName%, is how the male orgasm is supposed to be %Smile%", -1, 4);
    SMessage("No pleasure, no real release, just a painful drawn out milking", -1, 4);
    SMessage("I\'m telling you if you make this the standard procedure for %SubName%", -1, 4);
    SMessage("Before long he\'ll be begging you not to ever change it again", -1, 4);
    CMessage("Somehow I doubt that %Lol%");
    SMessage("No really, if you make his orgasms painful and humiliating by default...", -1, 4);
    SMessage("At some point he\'ll accept that this is how it\'s meant to be", -1, 4);
    SMessage("And then he won\'t want it any other way %Smile%", -1, 4);
    SMessage("But I\'m not his owner, so it\'s not up to me I guess", -1, 4);
    SMessage("Talk to you later, %ShortName%", -1, 4);
    removeContact(4);
    CMessage("That was pretty intense, %SubName%");
    let answer1 = getInput("Are you okay?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Yes or no?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Then maybe %domFriend3Name% is right about making this the default method... %Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("You should go take care of yourself now, %SubName%");
    }
    CMessage("%ThatsAllForToday%");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    
    ruined_by_spoon_edge();
}
function ruined_by_spoon_edge()
{
    CMessage("I told you not to edge, %PetName%");
    increaseAnger(3)
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Start stroking again");
    how_it_is_going_to_be();
    return;
    return;
    
    Swallow_This_Ruined_One();
}
function Swallow_This_Ruined_One()
{
    CMessage("It\'s time, %PetName%");
    delVar("pvSwallowNextLoad");
    CMessage("It\'s time for you to swallow that big load we\'ve built up in your %Balls%");
    CMessage("But I\'m a little concerned that you might back out at the last moment");
    CMessage("So...");
    CMessage("I\'m going to ruin your orgasm %Grin%");
    CMessage("That way there will be enough arousal and obedience left in you");
    CMessage("So I can be sure that you\'ll follow through");
    CMessage("In a moment I\'m going to tell you to edge for me");
    CMessage("And then I\'m going to tell you to ruin your orgasm");
    CMessage("You\'re going to catch the cum dribbling out of your %Cock% in your hand");
    CMessage("And you\'re going to eat up every last drop... %Smile%");
	startEdging("%Edge%");
    let answer0 = getInput("%RuinYourOrgasm%");
    if (answer0.isLike("ruined", "done", "did"))
    {
        CMessage("Good, now let that cum dribble into your hand, %PetName%");
    }
    else
    {
        CMessage("Let that cum dribble into your hand, %PetName%");
    }
    CMessage("%pthevNowEatYourCum%");
    //setVar("pvNotWantCEI", true);
    //--Command:InterruptsOff
    CMessage(random("Lick it all up", "Lick it up like a good boy", "Be a good boy and lick it up", "Swallow every last drop", "Savour that sticky goo", "Swallow it like a good pet"));
    CMessage("Don\'t think about it, just do it");
    CMessage("Not because you want to, but because <i>I</i> want you to do it");
    CMessage(random("You know you like it ", "that is pretty disgusting ", "That is so nasty ", "You are so gross ", "Better you than me ") + "%EmoteHappy%");
    //delVar("pvNotWantCEI");
    //--Command:InterruptsOn
    CMessage("%ThatsAllForToday%");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    return;
    Ruin_With_Ice();
}
function Ruin_With_Ice()
{
    CMessage("Take that bowl of ice and put it in front of you, %Name%");
    CMessage("Maybe it\'s turned into ice water already, it\'s been a pretty hot masturbation session %Laugh%");
    CMessage("You probably have some idea of what\'s gonna happen next... %Grin%");
    startEdging("%Edge%");
    let answer0 = getInput("%RuinYourOrgasm%");
    if (answer0.isLike("ruined", "done", "did"))
    {
        CMessage("Now lower your %Balls% into the ice!");
    }
    else
    {
        CMessage("Now lower your %Balls% into the ice!");
    }
    CMessage("Let that cum dribble into the bowl...");
    CMessage("Keep those %Balls% in there, don\'t pull out until I say you can, %Name%");
    CMessage("This must be torture... the frustration of the ruined orgasm with the cold of the ice...");
    if(getVar("pthevCEI_Yes", false))
    {
        CMessage("Pick up a cum covered ice cube and put it in your mouth");
    }
    if(getVar("pthevCEI_Yes", false))
    {
        CMessage("Mmm, cumsicles %Laugh%");
    }
    CMessage("%ThatsAllForToday%");
    setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    delVar("AV_Denied");
    setVar("AV_EndRuin", getVar("AV_EndRuin", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    EndFile();
    return;
    
    
    Orgasm_Deny();
}
function Orgasm_Deny()
{
    if(getVar("pvSwallowNextLoad", false) )
    {
        Swallow_Next_One();
        return;
    }
    if(getVar("pvBowlOfIce", false) )
    {
        Denial_With_Ice();
        return;
    }
    CMessage("I think today I\'m going to let you cum");
    //--Command:Glitter(pvGLGonnaMakeYouCum)
    CMessage("But wait for my command, %PetName%");
    CMessage("I want you to " + random("enjoy ", "savour ") + "this moment");
    CMessage(random("Just think about ", "Imagine ") + "how good it\'s going to feel when you go over the edge");
    CMessage("When you let that orgasm course through you");
    CMessage("Maybe your limbs will start to shudder and shake");
    CMessage("Maybe for a moment you\'ll feel like you\'ve just died and went to heaven %Smile%");
    CMessage("I want you to make " + random("it so ", "sure ") + "that once I " + random("tell you ", "give you the command ") + "to edge, you\'ll edge " + random("right away", "quickly", "without delay"));
    CMessage("All that " + random("sperm ", "cum ", "jizz ") + "in your %Balls% is just screaming to get out %Giggles%");
    CMessage("It\'s going to feel " + random("so fucking good ", "so damn good ", "incredible ") + "when you " + random("finally climax", "explode", "blow that hot load"));
    CMessage("Feel how hard and sensitive your %Cock% is");
    CMessage("I bet the " + random("ache ", "tension ") + "in your %Cock% and %Balls% is " + random("almost too much now", "getting unbearable"));
    if (randomInteger(1, 100) <= 50)
    {
        go_glitter2();
        return;
    }
    CMessage("And you know what, that exactly the way I like it");
    CMessage("Yes, that means I\'ve changed my mind about letting you cum");
    CMessage("So I\'m going to make you edge one more time, but you\'re not going to cum");
    //CMessage("%Edge%");
    //startEdging();
    holdEdge();
    CMessage("%LetTheEdgeFade%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    go_glitter2();
}
function go_glitter2()
{
    addContact(3);
    CMessage("Get ready, %PetName%");
    SMessage("I don\'t think you should let him cum, %DomName%", -1, 3);
    SMessage("I don\'t think he deserves that kind of pleasure", -1, 3);
    CMessage("But he's <i>so</i> ready for it now... %Smile%");
    SMessage("I know, that\'s exactly why you shouldn\'t let him cum %Laugh%", -1, 3);
    SMessage("Get him all worked up, ready to spray that jizz all over the place, and then...", -1, 3);
    SMessage("...DENIED... it\'s perfect! %Lol%", -1, 3);
    CMessage("Mmm I don\'t know...");
    CMessage("Get to the edge, %Name%");
    //startEdging();
    holdEdge();
    CMessage("Sorry %Name% but %domFriend2Name% is right");
    CMessage("It\'s much more fun to keep you denied %Grin%");
    SMessage("That\'s right, enjoy your blue balls, %SubName% %Laugh%", -1, 3);
    removeContact(3);
    CMessage("Aww poor %PetName% - you thought you were going to get to cum...");
    CMessage("Well... maybe next time %Smile%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Swallow_Next_One();
}
function Swallow_Next_One()
{
    CMessage("So about swallowing your cum...");
    CMessage("I like the anticipation so much I think I\'m going to stretch it out a bit %Grin%");
    CMessage("In other words, I\'m not going to let you cum %GeneralTime% %Name%");
    CMessage("You\'re not going to cum until I decide it\'s time");
    CMessage("When I think enough cum has been built up in those %Balls%");
    CMessage("That\'s when I\'m going to milk them dry");
    CMessage("And then you\'re going to gobble up that big fat load");
    CMessage("And it\'s going to slide down your throat, into your belly");
    CMessage("You\'re going to love it, %Name%");
    edge("%Edge%");
    //startEdging();
    //CMessage("%LetTheEdgeFade%");
    CMessage("%ThatsAllForToday%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    Denial_With_Ice();
}
function Denial_With_Ice()
{
    CMessage("Take that bowl of ice and put it in front of you, %Name%");
    CMessage("Maybe it\'s turned into ice water already, it\'s been a pretty hot masturbation session %Laugh%");
    CMessage("You probably have some idea of what\'s gonna happen next... %Grin%");
    edge("%Edge%");
    //startEdging();
    CMessage("Now lower your %Balls% into the ice!");
    CMessage("And get your %Cock% in there as well");
    CMessage("Keep them in there, don\'t pull out until I say you can, %Name%");
    CMessage("Just feel that coldness creeping up into your body...");
    CMessage("I bet your %Cock% can\'t stay hard for long this way");
    CMessage("And that for the best, because I\'m not letting you cum %GeneralTime%");
    CMessage("Take your cock and balls out of the ice now, %Name%");
    CMessage("%ThatsAllForToday%");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    EndFileNoOrgasm();
    return;
    
    EndFile();
}
function EndFile()
{
    if(getVar("AV_EatCum", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            No_CEIav();
            return;
        }
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage("%AV_CumEat%");
        sleep(25);
    }
    if(getVar("AV_EatCum", false))
    {
        CMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%", "You know you like it", "that is pretty disgusting", "T hat is so nasty", "You are so gross", "Better you than me", "Savor this taste in your mouth for a while"));
    }
    No_CEIav();
	return;
}
function No_CEIav()
{
    CMessage("I hope you enjoyed that orgasm %SubName%");
    if(getVar("AV_Persona30", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            PoT();
            return;
        }
    }
    CMessage("Who knows how many you\'re actually going to get?");
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    PoT();
}
function PoT()
{
    CMessage("Now, since you like Post Orgasm Torture");
    CMessage("%StartStroking%");
    sleep(randomInt(10, 20));
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("Keep stroking");
        sleep(randomInt(10, 20));
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Keep stroking and give yourself a HARD slap every 4 strokes.");
        sleep(randomInt(15, 20));
    }
    CMessage("%Lol%");
    sleep(randomInt(10, 20));
    CMessage("%stopstroking%", 0);
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    
    EndFileNoOrgasm();
}
function EndFileNoOrgasm()
{
	setTempVar("Extended_End_EndScript",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
    
    End2();
}
function End2()
{
	setTempVar("Extended_End_BackFromCrush",true);
    run("Structure" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    return;
}