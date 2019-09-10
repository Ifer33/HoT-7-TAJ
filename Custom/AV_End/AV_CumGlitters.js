DMessage("AV_CumGlitters: Beginning");
edged=false;
main();
DMessage("AV_CumGlitters: End");
function main()
{
    setDate("AV_FinishGlitter");
    CMessage(random("You know, I was chatting with my friends just now, and I told them I just denied you for today", "it seems my friends still wants to finish you off today", "My friends seems to want to subvert my command over you, and might allow you to cum"));
    CMessage("I will not " + random("tell you ", "let you know ") + "who will be...");
    CMessage(random("I would be suspicous, but I\'ll let you take the risk if you want", "That would worry me if I were a slave, but I\'m not, so the choice is yours", "That\'s unlike her, would you think she has a hidden agenda?", "I don\'t know what she has planned for you though", "I do wander what she\'s going to do with you", "I\'m curious whether she\'ll be nice to you, or not"));
    let answer0 = getInput(random("So do you want to head off for her? I won\'t be around to keep you safe, so decide wisely!", "So", "do you want to give her a chance?", "Do you want to me handing you over for today?"));
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Good luck then", "I hope it turns out well for you", "I hope she won\'t spoil you!", "Taking the easy way out huh? Whatever", "Don\'t say I didn\'t warn you!"));
    }
    else if (answer0.isLike("no"))
    {
        CMessage(random("Probably a smart move, why risk it when you might get lucky with me another day and survive as well!", "Then my decision stands, no orgasm for you today!", "I like that you respect my decision %Name%"));
        NoDeal();
        return;
    }
    CMessage(random("So ", "Well ") + "you will " + random("finish with", "be borrowed to", "try your luck with..."));
    if (getMood() > 25 && getMood() < 75)
    {
        switch(random("Glitter01", "Glitter02", "Glitter03"))
        {
            case "Glitter01":
            Glitter01();
            return;
            break;
            case "Glitter02":
            Glitter02();
            return;
            break;
            case "Glitter03":
            Glitter03();
            return;
            break;
        }
    }
    if (getMood() >= 75)
    {
        DommeIsBad();
        return;
    }
    if (getMood() <= 25)
    {
        DommeIsGood();
        return;
    }
	return;
    DommeIsBad();
}
function DommeIsBad()
{
    if (randomInteger(1, 100) <= 50)
    {
        Glitter03();
        return;
    }
    if (randomInteger(1, 100) <= 40)
    {
        Glitter02();
        return;
    }
    switch(random("Glitter01", "Glitter02", "Glitter03"))
    {
        case "Glitter01":
        Glitter01();
        return;
        break;
        case "Glitter02":
        Glitter02();
        return;
        break;
        case "Glitter03":
        Glitter03();
        return;
        break;
    }
    DommeIsGood();
}
function DommeIsGood()
{
    if (randomInteger(1, 100) <= 60)
    {
        Glitter01();
        return;
    }
    if (randomInteger(1, 100) <= 30)
    {
        Glitter02();
        return;
    }
    switch(random("Glitter01", "Glitter02", "Glitter03"))
    {
        case "Glitter01":
        Glitter01();
        return;
        break;
        case "Glitter02":
        Glitter02();
        return;
        break;
        case "Glitter03":
        Glitter03();
        return;
        break;
    }
    Glitter01();
}
function Glitter01()
{
    CMessage("%domFriend1Name%");
    addContact(2);
    CMessage("Good luck");
    removeContact(1);
    SMessage(random("%DomName% just told me she was denying you today", "%DomName% denied you today huh?", "I\'m here to save you from denial!"), -1, 2);
    SMessage(random("I think you\'ve earned an orgasm, and I would like to see it!", "You earned a real orgasm today, so I\'m granting you one", "I can see you need to cum today, that\'s why I stepped in after your denial."), -1, 2);
    SMessage("%StartStroking%", -1, 2);
    SMessage(random("Oh yes, let me see you enjoy it!", "This is so hot!", "Keep going, I love it!"), -1, 2);
    SMessage(random("Faster!", "Speed it up!", "Full speed now!"), -1, 2);
    SMessage(random("Get ready to edge!", "Final edge comming up now!", "Get ready to edge darling"), -1, 2);
    if (randomInteger(1, 100) <= 80)
    {
        Gltter1Cum();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        Gltter1Ruin();
        return;
    }
    SMessage("%Edge%", -1, 2);
    //startEdging();
    holdEdge(-1, 2);
    SMessage(random("Guess I\'m denying you as well, sorry", "I didn\'t really mean to get your hopes up for nothing, but sometimes things just don\'t work out for you slave", "I guess you don\'t get to cum after all today, even I didn\'t expect myself to be so cruel to you"), -1, 2);
    SMessage("I guess we\'re done for today then. Maybe I can help you out next time...", -1, 2);
	addContact(1);
    removeContact(2);
    EndFileNoOrgasm();
    return;
    Gltter1Cum();
}
function Gltter1Cum()
{
    SMessage("%Edge%", -1, 2);
    //--Command:Edge(Orgasm,Hold)
	edgeToOrgasmHold(-1,2);
	setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    sleep(15);
    SMessage(random("I hope you enjoyed it", "I hope you remember what I did for you today", "That must have been a relief, glad I could help you out."), -1, 2);
    SMessage(random("I hope I can help out next time as well", "Maybe a denial from %DomName% isn\'t that bad everytime", "huh?", "Perhaps I\'ll be here in time to rescue you from your next denial as well!"), -1, 2);
    SMessage("Bye for now!", -1, 2);
	addContact(1);
    removeContact(2);
    EndFile();
    return;
    Gltter1Ruin();
}
function Gltter1Ruin()
{
    SMessage("%Edge%", -1, 2);
    //--Command:Edge(Ruin,Hold)
	edgeToRuinHold(-1,2);
	setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    sleep(15);
    SMessage(random("Huh, I\'m not feeling it today it seems...", "I think I made a mistake...", "Strange, I kinda lost interest in seeing you cum..."), -1, 2);
    SMessage("I guess we\'re done for today then. Maybe I can help you out next time...", -1, 2);
    addContact(1);
    removeContact(2);
    EndFile();
    return;
    Glitter02();
}
function Glitter02()
{
    CMessage("%domFriend2Name%");
    addContact(3);
    CMessage("Good luck");
    removeContact(1);
    SMessage(random("Hi %SubName%!", "My toy arrives!", "Oh goodie", "I got you!"), -1, 3);
    SMessage(random("I don\'t know what %DomName% told you, but I hope you don\'t think I\'ll just let you cum like it\'s no big deal", "I hope you don\'t expect to just cum for me", "You know me well enough to know I won\'t just let you squirt your seed for me"), -1, 3);
    SMessage(random("I want a show!", "I want to be entertained!", "I need you to amuse me first!"), -1, 3);
    SMessage(random("If you do well, I promise you a full orgasm!", "You have the chance to earn yourself a full orgasm!", "Do well enough, and you will be rewarded with a truly spectacular orgasm!"), -1, 3);
    if(!getVar("AV_PinDone", false))
    {
        SMessage("Go fetch me a spoon and some clothespins. At least 10 of them.", -1, 3);
        sleep(20);
        setVar("AV_PinDone", true);
    }
    SMessage("Good, now get nice and hard for me!", -1, 3);
    DoEdges(2, 3, 0,-1,3);
    Double_Edge_routine();
	return;
}
function Double_Edge_routine()
{
    SMessage(random("Now the show begins!", "Now let\'s get it on!", "And now the real fun starts!"), -1, 3);
    SMessage(random("Stand up", "Get up on your feet", "Stand up in front of the screen now!"), -1, 3);
    SMessage("Add two clothespins to your balls...", -1, 3);
    SMessage("Do 5 jumping jacks, make sure that cock bounces!", -1, 3);
    sleep(10);
    SMessage(random("Cool!", "Haha!", "Look at it go!"), -1, 3);
    SMessage(random("Another clothespin!", "One more clothespin on the balls dearest."), -1, 3);
    sleep(10);
    SMessage(random("Now I wanna see some dick swinging", "Now the dick gets to dance by itself!", "Now for the main star of the event!"), -1, 3);
    SMessage("I want to see that dick swing around in circles! Start now!", -1, 3);
    sleep(10);
    SMessage(random("Now from left to right!", "Now from side to side!"), -1, 3);
    SMessage("Shake those hips!", -1, 3);
    sleep(10);
    SMessage(random("Now up and down!", "Now top to bottom!"), -1, 3);
    SMessage("gimme some hot thrusting!", -1, 3);
    SMessage(random("Good, good", "Nice work %SubName%", "Good job toy!"), -1, 3);
    SMessage(random("You are getting me so damn hot", "Your dick shaking is doing it\'s job over here, just so you know...", "Oh yeah, that\'s what I\'m talking about!"), -1, 3);
    SMessage(random("Now let\'s build up for the finale!", "Let\'s prepare you for the finale!", "You need to be prepared for your big finish now, my little star"), -1, 3);
    DoEdges(2, 3, 0,-1,3);
    SMessage(random("Great, now let me explain what\'s going to happen next", "Yummy, now I\'ll tell you how you are going to finish", "Pay attention bitch, cum instructions comming up!"), -1, 3);
    SMessage(random("First, you are going to place the clothespins on your balls", "The clothespins are going to go on your balls", "Those balls are just asking to have some clothespins placed on them..."), -1, 3);
    SMessage(random("How many clothespins? Well ALL OF THEM of course!", "Start placing them on, and keep going until there are none left!", "As long as there is place on those balls, you will keep adding clothespins!"), -1, 3);
    sleep(20);
    SMessage(random("Your nuts need to look like a hedgehong!", "Your balls need to become a pin cushion!", "This will look so cool!"), -1, 3);
    SMessage(random("Ok, you can place one on each nipple, cause I\'m nice like that!", "I guess you can place one on your nipples, to spread the fun around just a little bit!", "MORE! MORE! MORE!"), -1, 3);
    sleep(20);
    let answer0 = getInput(random("Ready?", "Done yet?", "Tell me when you are ready!"), -1, true, 3);
    while (!(answer0.isLike("ready") || answer0.isLike("yes") || answer0.isLike("done")))
    {
        answer0 = getInput("Are you ready?", -1, 3);
    }
    if (answer0.isLike("ready", "yes", "done"))
    {
        SMessage(random("Good, let\'s get you back up to 100% horny now", "Great, let\'s get you rock hard again now!", "Perfect, you need to do some edges for me now!"), -1, 3);
    }
    SMessage("%StartStroking%", -1, 3);
    SMessage("Faster!", -1, 3);
    SMessage("Harder!", -1, 3);
    SMessage(random("As fast as you can now!", "Maximum speed!", "Top speed now!"), -1, 3);
    //CMessage("%Edge%");
    //startEdging();
    holdEdge(-1,3);
    SMessage(random("This looks soo cool!", "Look at those balls making such a racket!", "I wonder if that is as painful as it looks!"), -1, 3);
    Wait_20s();
	return;
}
function Wait_20s()
{
    SMessage(random("You were going pretty hard there...", "That was some pretty wild action"), -1, 3);
    SMessage(random("Now start jerking for me", "Keep up the pressure, wank that cock", "Just masturbate at a steady pace for a minute now"), -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    SMessage("For you grand finale, we will have an amazing combo of pain and pleasure slave...", -1, 3);
    SMessage("You might have guessed it", -1, 3);
    SMessage("but you are going to remove those clothespins with the string.... WHILE YOU ARE CUMMING!", -1, 3);
    SMessage("Or after being denied again.", -1, 3);
    SMessage(random("I so want to see your face when that happens!", "It would make me ecstatic to see you endure that", "I\'m almost cumming myself just thinking about it!"), -1, 3);
    CMessage("If I tell you to cum, you will NOT STOP STROKING until all of the clothespins are torn off.");
    SMessage(random("Are you ready for the show of a lifetime?", "Ready to make me soaking wet with your pain?", "Ready to show me how badly you need to cum?"), -1, 3);
    SMessage(random("Get ready to edge!", "Prepare your balls for emptying!", "Almost there painslut!"), -1, 3);
    if (randomInteger(1, 100) <= 40)
    {
        Gltter2Cum();
        return;
    }
    if (randomInteger(1, 100) <= 65)
    {
        Gltter2Ruin();
        return;
    }
    //SMessage("%Edge%", -1, 3);
    //startEdging();
    holdEdge(-1,3);
    SMessage("%AV_NoCum% ");
    if (randomInteger(0, 100) <= -1)
    {
        CMessage("And remove the clothespins");
    }
    sleep(15);
    SMessage(random("You probably didn\'t really need to cum that badly", "did you...", "I guess you can go a while longer without an orgasm"), -1, 3);
	addContact(1);
    removeContact(3);
    EndFileNoOrgasm();
    return;
    Gltter2Cum();
}
function Gltter2Cum()
{
    SMessage("%Edge%", -1, 3);
    //--Command:Edge(Orgasm,Hold)
	edgeToOrgasmHold(-1,3);
	setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    sleep(15);
    SMessage("Awesome job slave... I never expected you to have the discipline!", -1, 3);
    SMessage("I don\'t know if you got any enjoyment out of it, but I most certainly did. And that\'s all that matters of course!", -1, 3);
    SMessage("You can start cleaning up now, but thank you for a Broadway-worthy show!", -1, 3);
    SMessage("I hope to see you soon! Perhaps that\'s no longer true for you though ;)", -1, 3);
	addContact(1);
    removeContact(3);
    EndFile();
    return;
    Gltter2Ruin();
}
function Gltter2Ruin()
{
    SMessage("%Edge%", -1, 3);
	edgeToRuinHold(-1,3);
	setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    //--Command:Edge(Ruin,Hold)
    sleep(15);
    SMessage("I don\'t know what I\'ll do to you next time, but rest assured you will like it even less!", -1, 3);
    SMessage("Now clean up your mess, and get out of my face!", -1, 3);
    addContact(1);
    removeContact(3);
    EndFile();
    return;
    Glitter03();
}
function Glitter03()
{
    CMessage("%domFriend3Name%");
    addContact(4);
    CMessage("Good luck");
    removeContact(1);
    SMessage(random("I don\'t believe it, you are actually comming to me!", "Well you are definitely living on the edge, pun intended!", "Ha! Gotcha!"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
	edge("You seem pretty aroused already, but give me an edge just to make sure!", -1, 4);
    SMessage(random("%DomName% has been teasing you for a while now", "You\'ve been played with for a good time today", "Your cock has been treated like the toy it is for some time today"), -1, 4);
    SMessage(random("So I understand why you are desperate enough to take your chance with me", "That must be why you want to cum so badly you will even lay your faith in my hands"), -1, 4);
    SMessage(random("But you of course realise it won\'t be easy with me", "I don\'t suppose it would be a surprise that your orgasm comes with a cost when I\'m around...", "You know nothing is ever easy with me..."), -1, 4);
    SMessage(random("So you must be thinking, I\'ll take some CBT to be allowed to come, easy, even from %domFriend3Name%", "You are probably expecting CBT to amuse me, and then a nice orgasm for you", "Some hard CBT to trade in for an orgasm, you think?"), -1, 4);
    SMessage(random("You are correct slave", "Well you are not  wrong", "So it seems you can read half of my mind"), -1, 4);
    SMessage(random("So start by getting the clothespins ready!", "Get the clothespins for starters!"), -1, 4);
    sleep(15);
    SMessage(random("Great, let\'s get going!", "And the show commences!", "I can\'t wait to see the finale today!"), -1, 4);
    SMessage(random("Let\'s decorate you a bit", "Let\'s make sure you are not too comfortable", "So for an entree..."), -1, 4);
    SMessage(random("A clothespin on each nipple please", "Attach a clothespin to each nipple", "Those nipples each need a clothespin, you know that"), -1, 4);
    sleep(15);
    edge("%Edge%", -1, 4);
    //startEdging();
    SMessage(random("Now add one pin on each side of your balls", "Now add one clothespin on your balls. Or no, add two!", "Let\'s torture your nuts a bit", "place two clothespins"), -1, 4);
    SMessage("%Edge%", -1, 4);
    startEdging();
    SMessage("%LetTheEdgeFade%", -1, 4);
    SMessage("%KneelForMe%", -1, 4);
    sleep(15);
    SMessage(random("I don\'t want you to start doubting your decision. Start jerking off so your brain is deprived of oxygen...", "Not long now, jerk hard and fast!", "I can see the end now, start a sprinting jerk now!"), -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "ce4tgf()")
    SMessage("Add two more clothespins on your balls, while you are still jerking!", -1, 4);
    sleep(20);
    SMessage("Edge for me, now!", -1, 4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    edged=false;
	if(!edged){
		SMessage("Come on, just a bit faster for me!", -1, 4);
		sleep(15);
	}
	if(!edged){
		SMessage("Why aren\'t you edging like I told you?", -1, 4);
	}
	if(!edged){
		SMessage("Just give it everything you\'ve got right now!", -1, 4);
	}
	if(!edged){
		SMessage("You can go faster, I know you can!", -1, 4);
		sleep(15);
	}
	if(!edged){
		SMessage("Just a quick sprint to the finish now!", -1, 4);
		sleep(15);
	}
	if(!edged){
		SMessage("You like to edge, you want to edge, you NEED to edge, so just do it now!", -1, 4);
		sleep(15);
		ce4tgf();
	}
	return;
}
function ce4tgf()
{
	edged=true;
    SMessage(random("Slow down your strokes to half speed", "Slow down a bit, but don't stop!"),-1,4);
    setVar("edgingmode", "Normal");
    SMessage(random("Hold it!", "Ride it!", "Keep on it!"), -1, 4);
    SMessage(random("Now tell me, do you want to cum?", "So", "you wanna cum?", "Do you want to cum slave?"), -1, 4);
    SMessage(random("This is awesome!", "I love it!", "This is what true power feels like!"), -1, 4);
    if (randomInteger(1, 100) <= 50)
    {
        Gltter3ChanceCum();
        return;
    }
    CMessage("%AV_NoCum%");
    sleep(10);
    SMessage(random("To keep you occupied: take of the clothespins, one by one", "Start taking of the clothespins, one by one"), -1, 4);
    SMessage(random("God that\'s so hot", "This is the best night ever!"), -1, 4);
    SMessage(random("Great job slave", "Finally you do something worthwhile!"), -1, 4);
    addContact(1);
    removeContact(4);
    EndFileNoOrgasm();
    return;
    Gltter3ChanceCum();
}
function Gltter3ChanceCum()
{
    if (randomInteger(1, 100) <= 50)
    {
        Gltter3Ruined();
        return;
    }
    SMessage(random("cum for me!", "Cum! Get it all on there!", "Cum! Dump you disgusting seed"), -1, 4);
    sleep(10);
    SMessage("%Yes%", -1, 4);
	setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    //--Command:UpdateOrgasm
    G3Fim();
    return;
    Gltter3Ruined();
}
function Gltter3Ruined()
{
    SMessage(random("Now ruin your orgams, right now!", "On second thought, you don\'t need a full orgasm to donate your semen right? Ruin it", "Hahahaha", "you fell into my trap! This will be the worst, but ruin it you painslut!"), -1, 4);
    //--Command:UpdateRuined
	setDate("AVLastRuinedOrgasm");
	setDate("lastRuin");
    SMessage("%Yes%", -1, 4);
    G3Fim();
	return;
}
function G3Fim()
{
    SMessage(random("Wow", "that was so cool", "What a show babe!", "Spectacular", "all that cum from that tiny dick!"), -1, 4);
    SMessage(random("Now let\'s relax for a second", "Take a break before we go on", "Catch your breath for a bit"), -1, 4);
    SMessage(random("To keep you occupied: take of the clothespins, one by one", "Start taking of the clothespins, one by one"), -1, 4);
    SMessage(random("God that\'s so hot", "This is the best night ever!"), -1, 4);
    SMessage(random("Great job slave", "Finally you do something worthwhile!"), -1, 4);
    addContact(1);
    removeContact(4);
    EndFile();
    return;
    
    EndFile();
}
function EndFile()
{
    setDate("AVLastOrgasm");
	setDate("lastOrgasm");
    delVar("AV_Denied");
    setVar("AV_EndCum", getVar("AV_EndCum", 0) + 1);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
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
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
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