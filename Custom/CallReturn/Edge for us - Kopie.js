DMessage("Edge for us: start");
main();
DMessage("Edge for us: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage(random("Let me explain you what\'s %Gonna% happen ", "That\'s what you\'re %Gonna% do ", "Here\'s what you\'re %Gonna% do ", "Let %Me% explain what I planned for you %GeneralTime% ", "Here\'s what you\'re %Gonna% do for %Me% ", "Let %Me% tell you what I have in mind for you ", "Let %Me% tell you what I have in mind for you %GeneralTime% ") + random("%PetName%", "%SubName%"));
    CMessage("edges, a lot of edges... " + random("%Grin%", "%GrinEvil%"));
    setVar("tgr8_EFU_min", random(10,12));
    setVar("tgr8_EFU_max", random(15,18));
	setVar("tgr8_EFU_edges_owed",random(getVar("tgr8_EFU_min"),getVar("tgr8_EFU_max") ) );
    CMessage("I will think of a number between");
	CMessage(""+getVar("tgr8_EFU_min"));
	CMessage(""+getVar("tgr8_EFU_max"));
    CMessage("and all you have to do is guess it");
    CMessage("Simple, right?");
    CMessage("So what do you think is the number of edges you will do for %Me% %GeneralTime%?");
    setVar("tgr8_EFU_guess_edges", createInput().getAnswer());
    delVar("tgr8_EFU_min");
    delVar("tgr8_EFU_max");
    if (getVar("tgr8_EFU_guess_edges", 0) == getVar("tgr8_EFU_edges_owed", 0))
    {
        equal();
        return;
    }
    if (getVar("tgr8_EFU_guess_edges", 0) > getVar("tgr8_EFU_edges_owed", 0))
    {
        more();
        return;
    }
    less();
}
function less()
{
    CMessage("Sorry the real number was");
    //--Command:ShowVar(tgr8_EFU_edges_owed)
	CMessage(""+getVar("tgr8_EFU_edges_owed"));
    Continue();
    return;
    equal();
}
function equal()
{
    CMessage("Guessed it!");
    Continue();
    return;
    more();
}
function more()
{
    CMessage("The actual number was");
	CMessage(""+getVar("tgr8_EFU_edges_owed"));
    CMessage("But");
	CMessage(""+getVar("tgr8_EFU_guess_edges"));
    setVar("tgr8_EFU_edges_owed", getVar("%Vartgr8%_EFU_guess_edges", 0));
    Continue();
}
function Continue()
{
    CMessage(random("I invited my friends %domFriend1Name%, %domFriend2Name% and %domFriend3Name% to help me %GeneralTime%", "I asked %domFriend1Name%, %domFriend2Name% and %domFriend3Name% to help %Me% with your edges %GeneralTime%", "I asked my best friends to help me out with your edges"));
    CMessage("They all gladly accepted... %GrinEvil%");
    CMessage("They should join us any moment...");
    CMessage(random("Now, let me explain what you\'re %Gonna% do for us %GeneralTime% ", "I\'ll explain you what you\'re %Gonna% do for us while we wait for %domFriend1Name%, %domFriend2Name% and %domFriend3Name% ", "That\'s what you\'re %Gonna% do for us %GeneralTime% ") + random("%SubName%", "%PetName%"));
    CMessage(random("You will edge for us", "We will make you edge", "You will %Stroke% to the %EdgeNoun% for everyone of us", "You will %Stroke% for us until you reach the %EdgeNoun%"));
    CMessage(random("Every 5 edges you will face a special test", "Once you reach the fifth, tenth, fifteenth... %EdgeNoun% you will face a special test", "You have to complete a special test every 5 edges"));
    CMessage(random("You need to pass these tests to be able to continue", "You must pass all these tests to be able to continue", "If you fail to pass one of these tests you won\'t be able to continue"));
    CMessage(random("And if you fail to pass these tests 3 times... well let\'s just don\'t talk about it now", "And if you fail to pass these tests 3 times you will face the consequences...", "Be advised: if you fail to pass these tests 3 times, well, let\'s just say you will regret the first time we met..."));
    CMessage(random("In order to pass the test you must %Stroke% without %Edging%", "%Stroke% without %Edging%: that\'s what you need to do to pass those tests", "If you %Stroke% without %Edging% for the entire test, then you can continue with those edges, otherwise you need to start over"));
    addContact(2);
    addContact(3);
    addContact(4);
    CMessage(random("Here\'re they are!", "Hi sweeties!", "Hi!", "Hi girls!"));
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 2);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 3);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 4);
    SMessage(random("Hi %SubName%! How are you?", "Nice to see you %SubName%!", "Hello %SubName%!"), -1, 3);
	SMessage(random("Please %domFriend2Name%, we're here to use this %PetName% like the sex-toy he is, not to make conversation with him", "%domFriend2Name%, please, we're not here to have tea and biscuits with this %PetName% here, we're here to use his %Cock% like the <i>toy</i> he is...", "%domFriend2Name% we have a job to do and this job is to collect the edges %PetName% owes to %ShortName%, understand?"),-1,4);
    SMessage("Ok, ok...,Yes %domFriend3Name%,Ok %domFriend3Name%, I just don\'t understand why you have to be so rude with %SubName%",-1,3);
    SMessage(random("How\'s it going %PetName%?", "Are you ready for %Me%, worthless toy?", "Are you ready for %Me%, worthless %PetName%?", "I will tease and edge the hell out of you %PetName%!"), -1, 4);
    SMessage(random("Hi ", "Hello ") + random("%SubName%", "%PetName%"), -1, 2);
    CMessage(random("%SubName% knows everything he needs to know", "I already explained him all he needs to know", "I already prepared %SubName% for what he is about to face"));
    CMessage(random("The only thing he doesn\'t know yet is how many edges he owe us", "The only thing left to tell him is the number of times he has to %ReachTheEdge%", "Last thing he needs to know is how many %EdgeNoun% he owe us"));
    SMessage(random("We should keep this number secret", "Shouldn't we keep this number... <i>inter nos</i>?", "Maybe we should keep this number between ourself..."),-1,2);
    SMessage(random("Could be very funny!", "Think how funny would be!", "Don\'t you think it would be funny %ShortName%?"), -1, 2);
    SMessage(random("I like %Edging% %SubName%, but we shouldn\'t be so %Mean% with him", "I like %SubName% but I think we shouldn\'t %Torture% him this way"), -1, 3);
    SMessage(random("This is how he should be treated %domFriend2Name%", "This is how things are supposed to be %domFriend2Name%, he\'s a %PetName% and a %PetName% does not deserve to be treated any better than this", "%Strokers% like %SubName% don\'t deserve better treatment"), -1, 4);
    SMessage("What do say about it " + random("%DomName%", "%ShortName%"), -1, 4);
    if (randomInteger(1, 100) <= 50)
    {
        I_decide();
        return;
    }
    Mistress_decides();
}
function Mistress_decides()
{
    CMessage("Let me think a minute girls...");
    sleep(5);
    CMessage("Ok, I decided");
    if (randomInteger(1, 100) <= 50)
    {
        t_tell();
        return;
    }
    tell();
}
function tell()
{
    CMessage(random("I'm sorry %domFriend3Name%, but I think %SubName% will be more desperate knowing how many times he will have to get to the %EdgeNoun%", "%domFriend3Name%... I think he'll cry knowing how many edges he owe us", "%domFriend3Name%, don't you think it's better,, <i>for us</i> I mean, to see the desperation in his eyes while he tries to maintain control over his %Cock%?"));
    CMessage(random("One point for you %DomName%", "Ok, your plan is better than mine", "Ok %ShortName%"));
    CMessage(random("%GeneralTime% you're %Gonna% to %ReachTheEdge% for "+getVar("tgr8_EFU_guess_edges")+ " times", "<i>We</i> want you to edge for us "+getVar("tgr8_EFU_guess_edges")+" times", "You will %ReachTheEdge% for "+getVar("tgr8_EFU_guess_edges")+" times", getVar("tgr8_EFU_guess_edges")+" edges: this is how many times you will %ReachTheEdge% for <i><b>our</b> pleasure</i>"));
	Continue_Edge_for_us();
	return;
    dont_tell();
}
function dont_tell()
{
    CMessage(random("Actually, you\'re right %domFriend3Name%. %SubName%... I won\'t tell you how many times you will have to %ReachTheEdge% for us", "Ok, your plan is better than mine %domFriend3Name%", "Ok %domFriend3Name%"));
    Continue_Edge_for_us();
    return;
    I_decide();
}
function I_decide()
{
	SMessage(random("Let's make it more interesting! %SubName%, you will be %Edging% a lot %GeneralTime% but we won't tell you how much. How does it sounds to you?", "Get ready to edge a lot for us %PetName%!, Could be "+random(20,30)+","+ random(40,50)+" a hundred maybe.", "No matter how many edges it could be, you will %Stroke% and %ReachTheEdge% until we tell you to stop. Just because we can... %GrinEvil%"),-1,4);
    SMessage("It\'s %Gonna% be very funny... %EmoteHappy%", -1, 2);
    Continue_Edge_for_us();
}
function Continue_Edge_for_us()
{
    CMessage("Get ready " + random("%PetName%", "%SubName%"));
    CMessage("Your long journey is about to begin!");
    setVar("special_test_edge", 5);
    Command_center();
}
function Command_center()
{
    //--UNINTERPRETED LINE:@NullResponse @RapidCodeOn @RTOff
    if(getVar("tgr8 special test", false))
    {
        tgr8_special_test();
        return;
    }
    if(getVar("tgr8 special edge test failed", false))
    {
        tgr8_special_edge_test_failed();
        return;
    }
    delVar("tgr8 Edged by Domme");
    delVar("tgr8 Edged by Contact1");
    delVar("tgr8 Edged by Contact2");
    delVar("tgr8 Edged by Contact3");
    if (getVar("tgr8_EFU_edges_done", 0) == getVar("tgr8_EFU_edges_owed", 0))
    {
        End_Edge_for_us();
        return;
    }
    setVar("tgr8_EFU_edges_done", getVar("tgr8_EFU_edges_done", 0) + 1);
    if(getVar("tgr8_EFU_edges_done",0)== getVar("special_test_edge", 0)){
		setTempVar("tgr8 special test", true);
		setVar("special_test_edge", getVar("special_test_edge", 0) + 5);
	}
    switch(random("Edged_by_Domme", "Edged_by_Contact1", "Edged_by_Contact2", "Edged_by_Contact3"))
    {
        case "Edged_by_Domme":
        Edged_by_Domme();
        return;
        break;
        case "Edged_by_Contact1":
        Edged_by_Contact1();
        return;
        break;
        case "Edged_by_Contact2":
        Edged_by_Contact2();
        return;
        break;
        case "Edged_by_Contact3":
        Edged_by_Contact3();
        return;
        break;
    }
    Edged_by_Domme();
}
function Edged_by_Domme()
{
    CMessage(random("It\'s my turn now!", "It\'s my turn to edge %SubName% now!", "My turn!", "Get ready to edge for %Me%!", "Get ready to edge for %Me%, %SubName%!", "Get ready to reach the %EdgeNoun% for %Me%, %SubName%!"));
    setTempVar("tgr8 Edged by Domme", true);
    setDom(1);
    edge();
    switch(random("BnB_Slideshow", "Boob_Cooldown", "Butt_Cooldown", "Could_Let_You_Rest", "Even_When_These_Edges_Are_Done", "I_Could_Let_You_Rest", "I_Love_Playing_Games", "Its_Kinda_Funny", "Know_Whatd_Be_Funny", "Pause_For_Edge_Count", "Probably_In_A_Hurry", "Stare_At_This_Picture", "Wait_For_It", "Wait_For_It_JK", "Who_Has_A_Nicer_Ass", "Who_owns_that_cock"))
    {
        case "BnB_Slideshow":
        BnB_Slideshow();
        return;
        break;
        case "Boob_Cooldown":
        Boob_Cooldown();
        return;
        break;
        case "Butt_Cooldown":
        Butt_Cooldown();
        return;
        break;
        case "Could_Let_You_Rest":
        Could_Let_You_Rest();
        return;
        break;
        case "Even_When_These_Edges_Are_Done":
        Even_When_These_Edges_Are_Done();
        return;
        break;
        case "I_Could_Let_You_Rest":
        I_Could_Let_You_Rest();
        return;
        break;
        case "I_Love_Playing_Games":
        I_Love_Playing_Games();
        return;
        break;
        case "Its_Kinda_Funny":
        Its_Kinda_Funny();
        return;
        break;
        case "Know_Whatd_Be_Funny":
        Know_Whatd_Be_Funny();
        return;
        break;
        case "Pause_For_Edge_Count":
        Pause_For_Edge_Count();
        return;
        break;
        case "Probably_In_A_Hurry":
        Probably_In_A_Hurry();
        return;
        break;
        case "Stare_At_This_Picture":
        Stare_At_This_Picture();
        return;
        break;
        case "Wait_For_It":
        Wait_For_It();
        return;
        break;
        case "Wait_For_It_JK":
        Wait_For_It_JK();
        return;
        break;
        case "Who_Has_A_Nicer_Ass":
        Who_Has_A_Nicer_Ass();
        return;
        break;
        case "Who_owns_that_cock":
        Who_owns_that_cock();
        return;
        break;
    }
    Edged_by_Contact1();
}
function Edged_by_Contact1()
{
    CMessage(random("It\'s my turn now!", "It\'s my turn to edge %SubName% now!", "My turn!", "Get ready to edge for %Me%!", "Get ready to edge for %Me%, %SubName%!", "Get ready to reach the %EdgeNoun% for %Me%, %SubName%!"));
    setTempVar("tgr8 Edged by Contact1", true);
    setDom(2);
    edge();
    switch(random("BnB_Slideshow", "Boob_Cooldown", "Butt_Cooldown", "Could_Let_You_Rest", "Even_When_These_Edges_Are_Done", "I_Could_Let_You_Rest", "I_Love_Playing_Games", "Its_Kinda_Funny", "Know_Whatd_Be_Funny", "Pause_For_Edge_Count", "Probably_In_A_Hurry", "Stare_At_This_Picture", "Wait_For_It", "Wait_For_It_JK", "Who_Has_A_Nicer_Ass", "Who_owns_that_cock"))
    {
        case "BnB_Slideshow":
        BnB_Slideshow();
        return;
        break;
        case "Boob_Cooldown":
        Boob_Cooldown();
        return;
        break;
        case "Butt_Cooldown":
        Butt_Cooldown();
        return;
        break;
        case "Could_Let_You_Rest":
        Could_Let_You_Rest();
        return;
        break;
        case "Even_When_These_Edges_Are_Done":
        Even_When_These_Edges_Are_Done();
        return;
        break;
        case "I_Could_Let_You_Rest":
        I_Could_Let_You_Rest();
        return;
        break;
        case "I_Love_Playing_Games":
        I_Love_Playing_Games();
        return;
        break;
        case "Its_Kinda_Funny":
        Its_Kinda_Funny();
        return;
        break;
        case "Know_Whatd_Be_Funny":
        Know_Whatd_Be_Funny();
        return;
        break;
        case "Pause_For_Edge_Count":
        Pause_For_Edge_Count();
        return;
        break;
        case "Probably_In_A_Hurry":
        Probably_In_A_Hurry();
        return;
        break;
        case "Stare_At_This_Picture":
        Stare_At_This_Picture();
        return;
        break;
        case "Wait_For_It":
        Wait_For_It();
        return;
        break;
        case "Wait_For_It_JK":
        Wait_For_It_JK();
        return;
        break;
        case "Who_Has_A_Nicer_Ass":
        Who_Has_A_Nicer_Ass();
        return;
        break;
        case "Who_owns_that_cock":
        Who_owns_that_cock();
        return;
        break;
    }
    Edged_by_Contact2();
}
function Edged_by_Contact2()
{
    CMessage(random("It\'s my turn now!", "It\'s my turn to edge %SubName% now!", "My turn!", "Get ready to edge for %Me%!", "Get ready to edge for %Me%, %SubName%!", "Get ready to reach the %EdgeNoun% for %Me%, %SubName%!"));
    setTempVar("tgr8 Edged by Contact1", true);
    setDom(3);
    edge();
    switch(random("BnB_Slideshow", "Boob_Cooldown", "Butt_Cooldown", "Could_Let_You_Rest", "Even_When_These_Edges_Are_Done", "I_Could_Let_You_Rest", "I_Love_Playing_Games", "Its_Kinda_Funny", "Know_Whatd_Be_Funny", "Pause_For_Edge_Count", "Probably_In_A_Hurry", "Stare_At_This_Picture", "Wait_For_It", "Wait_For_It_JK", "Who_Has_A_Nicer_Ass", "Who_owns_that_cock"))
    {
        case "BnB_Slideshow":
        BnB_Slideshow();
        return;
        break;
        case "Boob_Cooldown":
        Boob_Cooldown();
        return;
        break;
        case "Butt_Cooldown":
        Butt_Cooldown();
        return;
        break;
        case "Could_Let_You_Rest":
        Could_Let_You_Rest();
        return;
        break;
        case "Even_When_These_Edges_Are_Done":
        Even_When_These_Edges_Are_Done();
        return;
        break;
        case "I_Could_Let_You_Rest":
        I_Could_Let_You_Rest();
        return;
        break;
        case "I_Love_Playing_Games":
        I_Love_Playing_Games();
        return;
        break;
        case "Its_Kinda_Funny":
        Its_Kinda_Funny();
        return;
        break;
        case "Know_Whatd_Be_Funny":
        Know_Whatd_Be_Funny();
        return;
        break;
        case "Pause_For_Edge_Count":
        Pause_For_Edge_Count();
        return;
        break;
        case "Probably_In_A_Hurry":
        Probably_In_A_Hurry();
        return;
        break;
        case "Stare_At_This_Picture":
        Stare_At_This_Picture();
        return;
        break;
        case "Wait_For_It":
        Wait_For_It();
        return;
        break;
        case "Wait_For_It_JK":
        Wait_For_It_JK();
        return;
        break;
        case "Who_Has_A_Nicer_Ass":
        Who_Has_A_Nicer_Ass();
        return;
        break;
        case "Who_owns_that_cock":
        Who_owns_that_cock();
        return;
        break;
    }
    Edged_by_Contact3();
}
function Edged_by_Contact3()
{
    CMessage(random("It\'s my turn now!", "It\'s my turn to edge %SubName% now!", "My turn!", "Get ready to edge for %Me%!", "Get ready to edge for %Me%, %SubName%!", "Get ready to reach the %EdgeNoun% for %Me%, %SubName%!"));
    setTempVar("tgr8 Edged by Contact1", true);
    setDom(4);
    edge();
    switch(random("BnB_Slideshow", "Boob_Cooldown", "Butt_Cooldown", "Could_Let_You_Rest", "Even_When_These_Edges_Are_Done", "I_Could_Let_You_Rest", "I_Love_Playing_Games", "Its_Kinda_Funny", "Know_Whatd_Be_Funny", "Pause_For_Edge_Count", "Probably_In_A_Hurry", "Stare_At_This_Picture", "Wait_For_It", "Wait_For_It_JK", "Who_Has_A_Nicer_Ass", "Who_owns_that_cock"))
    {
        case "BnB_Slideshow":
        BnB_Slideshow();
        return;
        break;
        case "Boob_Cooldown":
        Boob_Cooldown();
        return;
        break;
        case "Butt_Cooldown":
        Butt_Cooldown();
        return;
        break;
        case "Could_Let_You_Rest":
        Could_Let_You_Rest();
        return;
        break;
        case "Even_When_These_Edges_Are_Done":
        Even_When_These_Edges_Are_Done();
        return;
        break;
        case "I_Could_Let_You_Rest":
        I_Could_Let_You_Rest();
        return;
        break;
        case "I_Love_Playing_Games":
        I_Love_Playing_Games();
        return;
        break;
        case "Its_Kinda_Funny":
        Its_Kinda_Funny();
        return;
        break;
        case "Know_Whatd_Be_Funny":
        Know_Whatd_Be_Funny();
        return;
        break;
        case "Pause_For_Edge_Count":
        Pause_For_Edge_Count();
        return;
        break;
        case "Probably_In_A_Hurry":
        Probably_In_A_Hurry();
        return;
        break;
        case "Stare_At_This_Picture":
        Stare_At_This_Picture();
        return;
        break;
        case "Wait_For_It":
        Wait_For_It();
        return;
        break;
        case "Wait_For_It_JK":
        Wait_For_It_JK();
        return;
        break;
        case "Who_Has_A_Nicer_Ass":
        Who_Has_A_Nicer_Ass();
        return;
        break;
        case "Who_owns_that_cock":
        Who_owns_that_cock();
        return;
        break;
    }
    BnB_Slideshow();
}
function BnB_Slideshow()
{
    CMessage("%LetTheEdgeFade%");
    CMessage("As long as you\'re cooling down");
    CMessage("I\'ve got a slideshow to keep you occupied...");
    if (randomInteger(1, 100) <= 50)
    {
        Boob_Show();
        return;
    }
    CMessage("The sexiest asses I found online " + random("today ", "%GeneralTime% ") + "%Grin%");
    //Command:Slideshow(butt)
	setSlideShow("ASS");
	slideShowOn();
    //TODO: Turn Slideshow on
    Slides_Loaded();
    return;
    Boob_Show();
}
function Boob_Show()
{
    CMessage("The best breasts on the internet %Lol%");
    //Command:Slideshow(boob)
    //TODO: Turn Slideshow on
	setSlideShow("BOOBS");
	slideShowOn();
	lockImages();
    Slides_Loaded();
}
function Slides_Loaded()
{
    CMessage("Go ahead and stare while you cool down");
    CMessage("It\'s okay if gets a little uncomfortable");
    CMessage("And you start to squirm");
    CMessage("After all");
    CMessage("This is to keep you from getting bored");
    CMessage("Not keep you from %Aching% %Grin%");
    CMessage("In fact");
    CMessage("You should enjoy it while it lasts");
    CMessage("Because once it\'s over");
    CMessage("You\'re going right back to the %EdgeNoun% %EmoteHappy%");
    sleep(randomInt(10, 30));
	unlockImages();
    CMessage("Okay, that\'s enough");
    //TODO: Turn Slideshow off
	slideShowOff();
    Command_center();
    return;
    Boob_Cooldown();
}
function Boob_Cooldown()
{
    //CMessage("%LetTheEdgeFade%");
    if(getVar("tgr8_BoobCooldown", false))
    {
        tgr8_BoobCooldown();
        return;
    }
    CMessage("I think you could use some recovery time");
    if (randomInteger(1, 100) <= 50)
    {
        RP_Boob_2();
        return;
    }
    setTempVar("tgr8_BoobCooldown", true);
    CMessage("But I wouldn\'t want you to get bored, so...");
    CMessage("Here\'s some %Boobs% for you to look at while you wait %Grin%");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    CMessage("I know guys like a nice, full pair of %Boobs%");
    CMessage("Just like I like a nice, full pair of %Balls% %Lol%");
    CMessage("And yours aren\'t %Gonna% get any fuller staring at that %Picture%, so...");
    unlockImages();
    Command_center();
    return;
    RP_Boob_2();
}
function RP_Boob_2()
{
    CMessage("But I don't want you to get <i>too</i> comfortable, so here's some %Boobs% %Lol%"); 
	showTaggedImage(4, ["boobs"]);
    lockImages();
    CMessage("Yeah, making %Boobs% appear is kinda like my super power");
    CMessage("Just like it's <i>your</i> kryptonite %Grin%");
    CMessage("Making you suffer and writhe");
    CMessage("Making you weaker for %Me%");
    CMessage("And making it all the more vicious");
    CMessage("When I tell you to edge again");
    unlockImages();
    Command_center();
    return;
    Butt_Cooldown();
}
function Butt_Cooldown()
{
    //CMessage("%LetTheEdgeFade%");
    if(getVar("tgr8_ButtCooldown", false))
    {
        tgr8_ButtCooldown();
        return;
    }
    CMessage("I think I\'ll let you relax for a minute");
    if (randomInteger(1, 100) <= 50)
    {
        RP_Butt_2();
        return;
    }
    setTempVar("tgr8_ButtCooldown", true);
    CMessage("While you stare at this sexy %Ass% and try not to squirm %Grin%");
    showTaggedImage(4, ["ass"]);
    lockImages();
    CMessage("I bet you\'re looking at it and thinking:");
    CMessage("\"Fuck, do I or don\'t I want to %Stroke% to");
    CMessage("Don\'t worry %PetName%");
    CMessage("You won\'t have to debate that for very much longer %Lol%");
    unlockImages();
    Command_center();
    return;
    RP_Butt_2();
}
function RP_Butt_2()
{
    CMessage("Assuming you even <i>can</i> relax while staring at an %Ass% this %Hot% %Lol%");
	showTaggedImage(4, ["ASS"]);
    lockImages();
    CMessage("Try not to squirm too much though");
    CMessage("You don\'t have much of a break until the next %EdgeNoun%");
    CMessage("And that %Cock% needs to recover if it\'s %Gonna% to finish the remaining edges %Grin%");
    CMessage("Then again");
    CMessage("Maybe I don't <i>want</i> you to recover");
    CMessage("Maybe I just want you to suffer, so...");
    unlockImages();
    Command_center();
    return;
    Could_Let_You_Rest();
}
function Could_Let_You_Rest()
{
    CMessage("I could let you rest for a minute");
    if (randomInteger(1, 100) <= 50)
    {
        You_Could_Probably_Use_It();
        return;
    }
    CMessage("But I won't %Grin%");
	Command_center();
	return;
	//@RTOn @Goto(Command center)
    You_Could_Probably_Use_It();
}
function You_Could_Probably_Use_It()
{
    CMessage("You could probably use it");
    CMessage("But the more you rest, the more that desperation's %Gonna% fade, so...");
	//@RTOn @Goto(Command center)
	Command_center();
	return;
    Even_When_These_Edges_Are_Done();
}
function Even_When_These_Edges_Are_Done()
{
    CMessage("%LetTheEdgeFade%");
    CMessage("Even when these edges are done");
    CMessage("Your %Cock% still won\'t be free of %Me%");
    if (randomInteger(1, 100) <= 50)
    {
        Stay_In_Debt();
        return;
    }
    CMessage("I might let you have a little break");
    CMessage("Or I might just make you keep on %Edging% for %Me%");
    CMessage("Just because I can %Grin%");
	Command_center();
	return;
    Stay_In_Debt();
}
function Stay_In_Debt()
{
    CMessage("You can pay off all the edges you want");
    CMessage("But at the end of the day when the %Stroking% is done");
    CMessage("And you\'re throbbing, %Aching% with desperation");
    CMessage("That %Cock% still belongs to %Me% %Grin%");
    Command_center();
    return;
    I_Could_Let_You_Rest();
}
function I_Could_Let_You_Rest()
{
    CMessage("I could let you rest for a bit");
    if (randomInteger(1, 100) <= 50)
    {
        You_Gotta_Be_Aching();
        return;
    }
    CMessage("But I just don\'t fucking want to %Grin%");
    Command_center();
    return;
    You_Gotta_Be_Aching();
}
function You_Gotta_Be_Aching()
{
    CMessage("I mean, you <i>gotta</i> be %Aching% %Now%");
    CMessage("But, oh, yeah");
    CMessage("That\'s " + random("kinda ", "kind ") + "the point %Lol%");
    Command_center();
    return;
    I_Love_Playing_Games();
}
function I_Love_Playing_Games()
{
    //CMessage("%LetTheEdgeFade%");
    CMessage("I love playing games like this");
    if (randomInteger(1, 100) <= 50)
    {
        Board_Game_Talk();
        return;
    }
    CMessage("The choices...");
    CMessage("The consequences");
    CMessage("It\'s nothing I can\'t make you do already");
    CMessage("But I love knowing each of these edges, well");
    CMessage("You brought them on yourself %Grin%");
    Command_center();
    return;
    Board_Game_Talk();
}
function Board_Game_Talk()
{
    CMessage("If we ever played board games together");
    CMessage("I\'d make sure very game would have some element of risk to it");
    CMessage("A certain amount of denial if you loose");
    CMessage("%Edging% every time I rolled a six");
    CMessage("You don\'t even wanna know what I would do to you for rolling doubles %Grin%");
    Command_center();
    return;
    Its_Kinda_Funny();
}
function Its_Kinda_Funny()
{
    CMessage("It\'s kinda funny");
    if (randomInteger(1, 100) <= 50)
    {
        Thought_of_Debt();
        return;
    }
    CMessage("I don\'t need games like this to make you %ReachTheEdge%");
    CMessage("But it\'s just so much fun playing games when there\'s something at stake %EmoteHappy%");
    if (randomInteger(1, 100) <= 50)
    {
        Denial_On_The_Line();
        return;
    }
    Command_center();
    return;
    Thought_of_Debt();
}
function Thought_of_Debt()
{
    CMessage("The thought of you being in debt");
    CMessage("And the only way you can pay it off is to %ReachTheEdge%");
    CMessage("I think I would be a pretty good edge collector");
    CMessage("Practice makes perfect after all %Grin%");
    Command_center();
    return;
    Denial_On_The_Line();
}
function Denial_On_The_Line()
{
    CMessage("Maybe next time we\'ll play for even higher stakes");
    CMessage("Like when...");
    CMessage("Or <i>if</i>...");
    CMessage("You get to %Cum% again %Grin%");
	Command_center();
    return;
    Know_Whatd_Be_Funny();
}
function Know_Whatd_Be_Funny()
{
    CMessage("%LetTheEdgeFadeYou% know what would be funny?");
    if (randomInteger(1, 100) <= 50)
    {
        This_Would_Be_Funny();
        return;
    }
    CMessage("If after you were done giving %Me% these edges");
    CMessage("I made you %ReachTheEdge% some more for %Me%");
    CMessage("Just because I can %Grin%");
    Command_center();
    return;
    This_Would_Be_Funny();
}
function This_Would_Be_Funny()
{
    CMessage("This...");
	Command_center();
    return;
    Pause_For_Edge_Count();
}
function Pause_For_Edge_Count()
{
    CMessage("%LetTheEdgeFade%");
    CMessage("This is how many edges you have left...");
    CMessage("a <i>LOT!</i> %Grin%");
	//@Goto(This is Ass, This is Boobs, This is Random Pic)
	switch(random("This_is_Ass", "This_is_Boobs", "This_is_Random_Pic"))
    {
        case "This_is_Ass":
        This_is_Ass();
        return;
        break;
        case "This_is_Boobs":
        This_is_Boobs();
        return;
        break;
        case "This_is_Random_Pic":
        This_is_Random_Pic();
        return;
        break;
    }
	return;
    This_is_Ass();
}
function This_is_Ass()
{
    CMessage("This is a sexy %Ass%");
    showTaggedImage(4, ["ass"]);
    This_Is_Me_Telling_You_To_Edge();
    return;
    This_is_Boobs();
}
function This_is_Boobs()
{
    CMessage("This is a pair of %Boobs%");
    showTaggedImage(4, ["boobs"]);
    This_Is_Me_Telling_You_To_Edge();
    return;
    This_is_Random_Pic();
}
function This_is_Random_Pic()
{
    CMessage("This is a hot fucking %Picture% I just found");
    getTeasePicture();
    This_Is_Me_Telling_You_To_Edge();
}
function This_Is_Me_Telling_You_To_Edge()
{
    CMessage("And <i>this</i> is %Me% telling you to %ReachTheEdge% again");
	//@RTOn @Goto(Command center)
	Command_center();
    return;
    Probably_In_A_Hurry();
}
function Probably_In_A_Hurry()
{
    CMessage("You're probably in a hurry to finish these edges, so..."); 
	Command_center();
    return;
    Stare_At_This_Picture();
}
function Stare_At_This_Picture()
{
    CMessage("Now just stare at this %Picture% until I tell you to %ReachTheEdge% again");
    getTeasePicture();
    sleep(randomInt(15, 60));
    Command_center();
    return;
    Wait_For_It();
}
function Wait_For_It()
{
    CMessage("Wait for it...");
    sleep(randomInt(5, 20));
    if (randomInteger(1, 100) <= 20)
    {
        Command_center();
        return;
    }
    CMessage("<i>Wait</i> for it...");
	sleep(random(5,20));
	if (randomInteger(1, 100) <= 40)
    {
        Command_center();
        return;
    }
    CMessage("Keep waiting for it...");
    sleep(randomInt(5, 20));
    if (randomInteger(1, 100) <= 60)
    {
        Command_center();
        return;
    }
    CMessage("<i>Almost</i> there...");
	sleep(randomInt(5, 20));
    if (randomInteger(1, 100) <= 80)
    {
        Command_center();
        return;
    }
    CMessage(random("%SubName% ", "%PetName% ") + "...");
    sleep(randomInt(5, 20));
    Command_center();
    return;
    Wait_For_It_JK();
}
function Wait_For_It_JK()
{
    CMessage("Wait for it...");
    if (randomInteger(1, 100) <= 50)
    {
        Fuck_That();
        return;
    }
    CMessage("Just kidding %Lol%");
	Command_center();
    return;
    Fuck_That();
}
function Fuck_That()
{
    CMessage("Fuck that %Lol%");
	Command_center();
    return;
    Who_Has_A_Nicer_Ass();
}
function Who_Has_A_Nicer_Ass()
{
    //CMessage("%LetTheEdgeFade%");
    CMessage("Who has a nicer %Ass%");
    CMessage("%Me%");
	showTaggedImage(4, ["ASS"]);
	lockImages();
    answer0=getInput("Or this girl?"); 
    if (answer0.isLike("you"))
    {
        CMessage("So you think my %Ass% is better...");
        unlockImages();
        Good_Thing_Asskisser();
        return;
    }
    else if (answer0.isLike("she", "her", "that"))
    {
        CMessage("Oh really %Lol%");
    }
    I_appreciate();
}
function I_appreciate()
{
    CMessage("I appreciate your honesty " + random("%SubName% ", "%PetName% ") + "%EmoteHappy%");
    setVar("tgr8_EFU_edges_added", random(5, 10));
    CMessage("But I still added "+getVar("tgr8_EFU_edges_added")+" edges to what you owe %Me% for not picking mine :P");
	unlockImages();
    setVar("tgr8_EFU_edges_owed", getVar("tgr8_EFU_edges_owed", 0) + getVar("tgr8_EFU_edges_added", 0));
    delVar("tgr8_EFU_edges_added");
    Command_center();
    return;
    Good_Thing_Asskisser();
}
function Good_Thing_Asskisser()
{
    CMessage("I guess that\'s a good thing");
    CMessage("Since you apparently like to kiss it so much %Lol%");
    Command_center();
    return;
    Who_owns_that_cock();
}
function Who_owns_that_cock()
{
    //CMessage("%LetTheEdgeFade%");
    CMessage(random("Let me ask you a question ", "Let me ask you something ", "I have a question for you ", "Your %DomHonorific% has a question for you ") + random("%SubName%", "%PetName%"));
    CMessage(random("Who owns that %Cock%?", "Who\'s the owner of that %Cock%?", "That %Cock% you have between your legs, who owns it?"));
    CMessage("%Me%...");
    let answer0 = getInput("or you?");
    while (!(answer0.isLike("you") || answer0.isLike("me") || answer0.isLike("I")))
    {
        answer0 = getInput("%Me% or you " + random("%SubName%", "%PetName%"));
    }
    if (answer0.isLike("you"))
    {
        CMessage(random("That\'s right my %PetName%!", "%Good%", "That\'s how a proper %PetName% behaves..."));
    }
    else if (answer0.isLike("me", "I"))
    {
        CMessage("I don\'t think so...");
        I_dont_think_so();
        return;
    }
    CMessage(random("Since it\'s my %Cock%, I want you to %ReachTheEdge%", "And now edge!", "Prepare to %ReachTheEdge%"));
    Command_center();
    return;
    I_dont_think_so();
}
function I_dont_think_so()
{
    CMessage(random("Are you sure %PetName%?", "I don\'t think so...", "I\'m not so sure about it"));
    CMessage(random("If you were the owner you wouldn\'t be here %Stroking% and %Edging% for %Me%", "You wouldn\'t be here %Stroking% and %Edging% for %Me% if what you just said were true", "If you were right you wouldn\'t be here %Stroking% that %Cock% in front of %Me% with your hand"));
    CMessage(random("instead you would be doing this for your girlfriend/wife", "but you would be fucking a real woman", "you would be pounding a real %Pussy% %Now%", "you would be with your woman fucking her hard in all her holes..."));
    CMessage("However, since that %Cock% belongs to %Me% I just added a few edges to the total amount you owe me");
    setVar("tgr8_EFU_edges_owed", getVar("tgr8_EFU_edges_owed", 0) + random(5,10));
    Command_center();
    return;
    tgr8_ButtCooldown();
}
function tgr8_ButtCooldown()
{
    CMessage("Here\'s another sexy %Ass% to cool down to %Grin%");
    showTaggedImage(4, ["ass"]);
    lockImages();
    if (randomInteger(1, 100) <= 50)
    {
        Then_Again_Butt();
        return;
    }
    CMessage("Just follow the shape of her curves");
    CMessage("Imagine how how her %Ass% would feel in your palms");
    CMessage("Or the moans she would make if you spanked it");
    CMessage("%Me%, on the other hand...");
    CMessage("I would rather hear the moans <i>you</i> make having to %ReachTheEdge% again %Grin%");
	unlockImages();
	Command_center();
    return;
    Then_Again_Butt();
}
function Then_Again_Butt()
{
    CMessage("Then again, you\'ll never finish your edges staring at butts all day, so...");
    unlockImages();
    Command_center();
    return;
    tgr8_BoobCooldown();
}
function tgr8_BoobCooldown()
{
    CMessage("Here\'s some more %Boobs% for you to relax to %Grin%");
    showTaggedImage(4, ["boobs"]);
    lockImages();
    if (randomInteger(1, 100) <= 50)
    {
        Then_Again_Boob();
        return;
    }
    CMessage("Maybe relax isn\'t the best word");
    CMessage("Suffer to?");
    CMessage("Squirm to?");
    CMessage("Ache to?");
    CMessage("Fuck it");
    CMessage("Let\'s just go with all of the above %Lol%");
    unlockImages();
    Command_center();
    return;
    Then_Again_Boob();
}
function Then_Again_Boob()
{
    CMessage("Just kidding %Lol%");
	unlockImages();
    Command_center();
    return;
    tgr8_special_test();
}
function tgr8_special_test()
{
    if(getVar("Skip_instructions", false))
    {
        Skip_instructions();
        return;
    }
    CMessage("Before we start I will give you some instructions");
    CMessage("You will do this test with the last of us who edged you");
    CMessage(random("You must %Stroke% to the beat without %Edging%", "You will %Stroke% to the beat without %Edging%", "You must %Stroke% to the beat, but don\'t get close to the %EdgeNoun% for the entire length of the audio file"));
    CMessage(random("Report if you reach the %EdgeNoun%", "You must report if you reach the %EdgeNoun%", "If you reach the %EdgeNoun% then you have to report it", "If you reach the %EdgeNoun% you must report it", "I want you to tell %Me% if you reach the %EdgeNoun%", "Tell me if you hit the %EdgeNoun%"));
    CMessage(random("If you stop the test before the end for three times you will be punished", "Reach the %EdgeNoun% for three times and you'll be punished", "You edge three times? You get the punishment!", "You can reach the %EdgeNoun% for two times. Do it another time and we will punish you"));
    CMessage("And trust %Me%, you don\'t want to be punished...");
    setTempVar("Skip_instructions", true);
    Skip_instructions();
}
function Skip_instructions()
{
    CMessage(random("Test time", "Time for your test", "No edge time"));
    CMessage(random("If you reach the %EdgeNoun% hands off and just tell me", "If you edge stop %Stroking% and tell me you edged", "If you edge I want you to stop %Stroking% and tell me"));
    delVar("tgr8 special test");
    //--UNINTERPRETED LINE:@NullResponse @Flag(tgr8 Edged by Domme) @CallReturn(Custom\CallReturn\Edge for us\tgr8 special test\*)
	if(getVar("tgr8 Edged by Domme",false) ){
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "Edge for us"+ java.io.File.separator +"tgr8 special test"+ java.io.File.separator +"*.js");
	}
	if(getVar("tgr8 Edged by Contact1",false) ){
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "Edge for us"+ java.io.File.separator +"tgr8 special test"+ java.io.File.separator +"Choose Contact1 special test audio file.js");
	}
	if(getVar("tgr8 Edged by Contact2",false) ){
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "Edge for us"+ java.io.File.separator +"tgr8 special test"+ java.io.File.separator +"Choose Contact2 special test audio file.js");
	}
	if(getVar("tgr8 Edged by Contact3",false) ){
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "Edge for us"+ java.io.File.separator +"tgr8 special test"+ java.io.File.separator +"Choose Contact3 special test audio file.js");
	}
    //--UNINTERPRETED LINE:@NullResponse @Flag(tgr8 Edged by Contact1) @CallReturn(Custom\CallReturn\Edge for us\tgr8 special test\Choose Contact1 special test audio file.txt)
    //--UNINTERPRETED LINE:@NullResponse @Flag(tgr8 Edged by Contact2) @CallReturn(Custom\CallReturn\Edge for us\tgr8 special test\Choose Contact2 special test audio file.txt)
    //--UNINTERPRETED LINE:@NullResponse @Flag(tgr8 Edged by Contact3) @CallReturn(Custom\CallReturn\Edge for us\tgr8 special test\Choose Contact3 special test audio file.txt)
    Command_center();
    return;
    tgr8_special_edge_test_failed();
}
function tgr8_special_edge_test_failed()
{
    CMessage(random("You failed to complete the test %PetName%", "You failed the test", "You didn\'t complete the test", "You did not managed to complete the test"));
    increaseAnger(3)
    CMessage("You are such a <b>disappointment</b> to %Me%!");
    CMessage(random("Now I have to punish you", "Now you will face the punishment", "You will be punished %Now%"));
    CMessage(random("You still owe %Me% %Var%[tgr8_Edge_for_us_edges_left] edges", "You didn\'t complete %Var%[tgr8_Edge_for_us_edges_left] edges so far", "You still need to do %Var%[tgr8_Edge_for_us_edges_left] edges to repay %Me%"));
    CMessage(random("So here\'s what we\'re %Gonna% do", "Let me explain what\'s %Gonna% happen", "Here\'s what we\'re %Gonna% do"));
    CMessage("You will be punished for failing the special edge test and the edges you still owe %Me% will magically transform into %Balls% slaps!");
    //--UNINTERPRETED LINE:@NullResponse @RapidCodeOn @RTOff
    delVar("tgr8 Edged by Domme");
    delVar("tgr8 Edged by Contact1");
    delVar("tgr8 Edged by Contact2");
    delVar("tgr8 Edged by Contact3");
    setVar("tgr8_EFU_balls_slaps", random(10,30));
    setVar("tgr8_EFU_balls_slaps", getVar("tgr8_EFU_balls_slaps", 0) + getVar("tgr8_Edge_for_us_edges_left", 0));
    setVar("tgr8_EFU_balls_slaps", 10);
    CMessage(random("So, the total %Balls% slaps is...", "So now you owe %Me%...", "The total is now..."));
    CMessage(""+getVar("tgr8_balls_slaps"));
    CMessage("%Balls% slaps!");
    Choose_Domme();
}
function Choose_Domme()
{
    switch(random("Punished_by_Domme", "Punished_by_Contact1", "Punished_by_Contact2", "Punished_by_Contact3"))
    {
        case "Punished_by_Domme":
        Punished_by_Domme();
        return;
        break;
        case "Punished_by_Contact1":
        Punished_by_Contact1();
        return;
        break;
        case "Punished_by_Contact2":
        Punished_by_Contact2();
        return;
        break;
        case "Punished_by_Contact3":
        Punished_by_Contact3();
        return;
        break;
    }
    Punished_by_Domme();
}
function Punished_by_Domme()
{
    setDom(1);
    Loop_punishment();
    return;
    Punished_by_Contact1();
}
function Punished_by_Contact1()
{
    setDom(2);
    Loop_punishment();
    return;
    Punished_by_Contact2();
}
function Punished_by_Contact2()
{
    setDom(3);
    Loop_punishment();
    return;
    Punished_by_Contact3();
}
function Punished_by_Contact3()
{
    setDom(4);
    Loop_punishment();
}
function Loop_punishment()
{
    CMessage(random("I want 10 %Balls% slaps", "10 %Balls% slaps", "Gimme 10 %Balls% slaps", "Give %Me% 10 %Balls% slaps", "Slap your %Balls% 10 times", "Slap your %Balls% 10 times for %Me%", "%Balls% slap time! I want 10!", "Slap time! 10 for those %Balls%!"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    sleep(randomInt(15, 30));
    setVar("tgr8_EFU_balls_slaps", getVar("tgr8_EFU_balls_slaps", 0) - 10);
    if (getVar("tgr8_EFU_balls_slaps", 0) == 0)
    {
        End_punishment();
        return;
    }
    if (randomInteger(1, 100) <= 10)
    {
        Entertain_Mistress();
        return;
    }
    Choose_Domme();
    return;
    Entertain_Mistress();
}
function Entertain_Mistress()
{
    CMessage(random("Slap your %Balls% another 10 times, just for my amusement %PetName%", "Slap your %Balls% another 10 times, only that these won\'t count", "Just another 10 %SubName%...", "Just another 10 %SubName%, please, just to entertain %Me%...", "Just another 10 %SubName%, please, just for fun..."));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
    Choose_Domme();
    return;
    End_punishment();
}
function End_punishment()
{
    CMessage(random("Finished!", "That\'s all %SubName%!", "Slapping is finished!"));
    setDom(1);
    CMessage("%HowAreYourBallsFeeling%");
    CMessage("%Balls_in_pain%");
    SMessage("Why funny things don\'t last longer?", -1, 4);
    CMessage("Don\'t worry %domFriend3Name% you can come by another time. %SubName% will be here for you");
    SMessage("I have other things I\'d like to try...", -1, 4);
    SMessage("Count me in!", -1, 2);
    CMessage("What did you say %domFriend2Name%?");
    SMessage("I had fun %GeneralTime% so I think I could join you", -1, 3);
    CMessage("Ok, it\'s decided!");
    SMessage(random("Time to go for me ", "It\'s go time for me ") + "%DomName%", -1, 4);
    Goodbye_time();
    return;
    End_Edge_for_us();
}
function End_Edge_for_us()
{
    CMessage(random("That was the last one %SubName%", "That was the last %EdgeNoun%", "You repayed your debt with %Me%", "%SubName%. No more %Edging% for you..."));
    CMessage(random("I like when you suffer so much for %Me%, for <i>us</i>", "%PetName%, I %Love% seeing you suffer"));
    SMessage(random("All that %CumNoun% built up and no release. I can\'t imagine the %Ache% your %Balls% are suffering this moment", "Are your %Balls% %Aching%? They sure are...", "%HowAreYourBallsFeeling% %Balls_in_pain%"), -1, 2);
    let answer0 = getInput("Would you like to %Cum% for %Me%?",10, -1, true, 2);
    if (answer0.isLike("yes"))
    {
        SMessage("I don\'t think you will be %Cumming% any time soon", -1, 2);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("%Good%", -1, 2);
    }
    else
    {
        SMessage("I don\'t think you\'ll be %Cumming% any time soon %EmoteLaugh%", -1, 2);
    }
    CMessage("I have other plans for that %Cock% %domFriend1Name%");
    SMessage("More edging followed by more denial?", -1, 4);
    CMessage("Kind of...");
    SMessage("I\'m in!", -1, 4);
    SMessage("Unfortunately we\'d have to do it another time", -1, 4);
    SMessage("I must go now", -1, 4);
    Goodbye_time();
    return;
    Goodbye_time();
}
function Goodbye_time()
{
    CMessage(random("Ok, see you again girls!", "%Bye%", "%Bye% girls!", "Ok, see you again!"));
    SMessage(random("%Bye% %ShortName%", "%Bye% %DomName%", "%Bye%!", "See you next time %DomName%!"), -1, 2);
    SMessage(random("%Bye% %ShortName%", "%Bye% %DomName%", "%Bye%!", "See you next time %DomName%!"), -1, 3);
    SMessage(random("%Bye% %ShortName%", "%Bye% %DomName%", "%Bye%!", "See you next time %DomName%!"), -1, 4);
    SMessage(random("%Bye% %SubName%", "%Bye% %SubName%!"), -1, 3);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    delVar("Punished by Domme");
    delVar("Punished by Contact1");
    delVar("Punished by Contact2");
    delVar("Punished by Contact3");
    delVar("tgr8_EFU_edges_done");
    delVar("tgr8_EFU_edges_owed");
    delVar("special_test_edge");
    delVar("tgr8_EFU_guess_edges");
    delVar("tgr8_Edge_for_us_edges_left");
    delVar("tgr8_EFU_balls_slaps");
    return;
    
    //Domme calls her friends and together edge the sub. Written by: tigrotto
}