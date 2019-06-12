main();
function main()
{
	DMessage("AV_AnPlay: Beginning");
    if (isStrokingAll())
    {
        Sub_Stroking();
		DMessage("AV_AnPlay: End");
        return;
    }
    else
    {
        Sub_Not_Stroking();
		DMessage("AV_AnPlay: End");
        return;
    }
    Sub_Stroking();
	DMessage("AV_AnPlay: End");
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    let answer0 = getInput("How about some more anal play %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Is that a yes or a no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good boy %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh you spoilsport... %EmoteSad%");
        noanal();
        return;
    }
    switch(random("Pre1", "Pre2", "Pre3"))
    {
        case "Pre1":
        Pre1();
        return;
        break;
        case "Pre2":
        Pre2();
        return;
        break;
        case "Pre3":
        Pre3();
        return;
        break;
    }
    Pre1();
}
function Pre1()
{
    CMessage("Perhaps one of the reasons why strap on penetration has held such a fascination for me");
    CMessage("is because of that fact that it is so taboo.");
    CMessage("It remains a forbidden fruit, so to speak.");
    ESC_ANAL();
    return;
}
function Pre2()
{
    CMessage("Pegging makes me feel very powerful and in charge");
    CMessage("It is nice to be able to turn the tables and treat men as servants and sluts.");
    ESC_ANAL();
    return;
}
function Pre3()
{
    CMessage("God, you must be a good fuck.");
    CMessage("I would love plowing you and milking your locked-up cock with my huge strap-on.");
    CMessage("holding you steady while your hole remembers who’s in charge.");
    ESC_ANAL();
	return;
}
function ESC_ANAL()
{
    switch(random("ANAL1", "ANAL2", "ANAL3", "ANAL4"))
    {
        case "ANAL1":
        ANAL1();
        return;
        break;
        case "ANAL2":
        ANAL2();
        return;
        break;
        case "ANAL3":
        ANAL3();
        return;
        break;
        case "ANAL4":
        ANAL4();
        return;
        break;
    }
}
function ANAL1()
{
    CMessage("Put a towel on the ground and crouch down on it.");
    CMessage("Get some lube");
    sleep(30);
    CMessage("%KneelForMe%");
    sleep(30);
    CMessage("Squeeze some lube onto the pointer and middle fingers");
    CMessage("But this time, in your non dominant hand");
    CMessage("and reach down past your cock and balls.");
    CMessage("Slather it onto your asshole.");
    sleep(10);
    CMessage("add more lube to fingers and then slowly push your pointer finger in.");
    CMessage("When you cant push it deeper, remove it slowly and replace it with your middle finger.");
    sleep(10);
    CMessage("The middle finger is longer and will penetrate deeper.");
    sleep(15);
    CMessage("When it is fully inserted, just leave it there.");
    sleep(30);
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    sleep(20);
    CMessage("Get used to the feeling of fingers in your ass.");
    let answer0 = getInput("When you\'re satisfied, remove the finger and re-lube again.", 40);
	while (!(answer0.isTimeout() || answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
    {
		if (answer0.isTimeout())
		{
			analtrain5();
			return;
		}
        answer0 = getInput("yes satisfied or no %SubName%?",10);
    }
    if (answer0.isLike("satisfied", "done", "ready", "finished", "yes"))
    {
        CMessage("%Okay%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    analtrain5();
	return;
}
function analtrain5()
{
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    sleep(10);
    CMessage("Now insert your lubed pointer finger slowly.");
    CMessage("Give it a long stroke all the way in and out.");
    sleep(30);
    CMessage("Then replace it with your middle finger.");
    CMessage("All the way in, all the way out.");
    CMessage("I call this my \"1-2\" technique.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    sleep(20);
    CMessage("Keep rotating back and forth for 24 repetitions");
    sleep(30);
    CMessage("slowly increasing your speed as your asshole loosens up.");
    CMessage("After 24 repetitions, insert the middle finger and leave it in.");
	sleep(30);
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    sleep(18);
    //CMessage("%stopstroking%", 0);	//not needed
    CMessage("Now, go back to the \"1-2\" technique");
    CMessage("and repeat until your ass relaxes enough to stay open even when there\'s no finger inside.");
    sleep(30);
    let answer0 = getInput("Are you satisfied, or want more ass fuck?", 40);
    while (!(answer0.isTimeout() || answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
    {
		if (answer0.isTimeout())
		{
			analtrain6();
			return;
		}
        answer0 = getInput("yes satisfied or no %SubName%?",10);
    }
    if (answer0.isLike("yes", "satisfied", "done", "ready", "finished", "yes"))
    {
        CMessage("%Okay%");
        EndAnal2();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    analtrain6();
	return;
}
function analtrain6()
{
    CMessage("Let\'s continue then");
    CMessage("We are going try to fit 2 fingers up your ass.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    sleep(20);
    CMessage("Now, fuck your ass with 2 fingers");
    sleep(30);
    CMessage("Keep there");
    sleep(20);
    CMessage("Move your fingers in and out, fucking your ass 20 times.");
    sleep(30);
    CMessage("Then remove them completely before pushing them all the way back in, at least 3 times.");
    sleep(30);
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    sleep(30);
    CMessage("Hmmm...");
    EndAnal2();
    return;
}
function ANAL2()
{
    CMessage("I want you to look up into my eyes.");
    CMessage("I hope you are ready for what comes next?");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, lube and some clothespins. At least 10 of them.");
        sleep(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("%KneelForMe%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now put one on each nipple.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Get as much nipple in as you can then pull them out as far as you can to check that they are on properly.");
        sleep(20);
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Do you like that whore?");
    }
    CMessage("Good");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("now take four more, 2 on each ear.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("That\'s a bit uncomfortable now isn\'t it.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now put 4 tightly on your balls.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("All in a pretty little line.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I sure hope you have room for them all.");
    }
    CMessage("Thought you might need a bit of encouragement with this slave.");
    CMessage("I hope you are still kneeling, you better be.");
    CMessage("Bend over and stick that ass in the air.");
    CMessage("Thats right I\'m going to fuck you");
    CMessage("I\'m going to fuck that ass, I now own.");
    CMessage("Lube one finger and prod your tight little asshole with it.");
    sleep(20);
    CMessage("Come on ram that thing in there a little harder.");
    CMessage("Is it starting to go in.");
    CMessage("Thats a good little slave.");
    CMessage("How hungry is that slave ass now,");
    CMessage("squeeze it all the way up your ass.");
    sleep(20);
    CMessage("Good whore all the way up, get it all the way in.");
    CMessage("Go on, bend over a bit more.");
    CMessage("Is it in slut, good little doggy...");
    CMessage("That feel good, does it feel like youre my horny ass slave?");
    CMessage("Now pull it out half way very slowly and ram it back in hard and fast.");
    sleep(20);
    CMessage("Fuck yourself with it like that 12 times");
    sleep(20);
    CMessage("Hmmm...remove all clothespins");
    EndAnal2();
    return;
}
function ANAL3()
{
    CMessage("%KneelForMe%");
    CMessage("Lube one finger and run around you right there and rub in all");
    CMessage("Oh, yes, moan for me, fuck!");
    CMessage("You like that don\'t you?");
    CMessage("How about press your finger in just a little bit, and open you up, just for the tip of it.");
    CMessage("Oh my god baby, that\'s so hot, watching you squirm.");
    CMessage("You love it don\'t you?");
    CMessage("You want more?");
    CMessage("Lets see if you can slide your finger in a little deeper.");
    CMessage("Fuck baby, you\'re so hot, moaning as you slide your finger in slowly.");
    CMessage("That\'s it take your finger in all the way.");
    CMessage("Oh, that\'s my dirty little boy, loving your finger dip in and out of your asshole.");
    CMessage("And look at how hard and twitchy your cock is.");
    CMessage("No, don\'t touch it!");
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTCock_First.js");
		cbt()
    }
    CMessage("I want to watch it twitch while you finger yourself.");
    CMessage("Oh, baby would you like another finger, hmmmm?");
    CMessage("Let me see if we can slide in two.");
    sleep(15);
    CMessage("Oh yeah, that\'s it, open up for me baby.");
    CMessage("Take 2 fingers in that sexy little hole of yours.");
    CMessage("You\'re taking them so good.");
    CMessage("Have you ever had anything else in you back here before?");
    CMessage("No? I bet you\'d love it, wouldn\'t you?");
    CMessage("You want to be fucked in your hot, wet hole?");
    CMessage("Do you baby?");
    CMessage("Beg for it.");
    CMessage("Beg me to fuck your sweet little ass.");
    CMessage("That\'s right.");
    CMessage("Tell me that you\'re my good little boy slut and that your ass is mine.");
    CMessage("That I can do whatever I want to you.");
    CMessage("That\'s a good boy!");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Slap your %Cock% following the beats");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(12);
    }
    CMessage("Keep fucking that ass");
    CMessage("Oh, look how easily yours finger slides in and out.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("But dont stop the fucking...");
    CMessage("I\'m going to slowly fuck you");
    CMessage("Fuck, yes, moan for me, let me hear those sexy little whimpers and growls.");
    CMessage("Oh, yeah, you want more don\'t you?");
    CMessage("You want it harder?");
    CMessage("What\'s that? That\'s right.");
    CMessage("\"Yes please. Please fuck me harder\"");
    if (randomInteger(1, 100) <= 50)
    {
        NoAudioFuck();
        return;
    }
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Fuck*.mp3");
    sleep(10);
    NoAudioFuck();
	return;
}
function NoAudioFuck()
{
    CMessage("That\'s what I want to hear.");
    CMessage("I\'m getting so wet.");
    CMessage("I want to cum so fucking bad while fucking your sweet little hole.");
    CMessage("Hmmm...");
    EndAnal2();
    return;
}
function ANAL4()
{
    CMessage("I think we\'ll play with this hole first.");
    CMessage("This tight, pink pucker that you\'re always so eager to offer me.");
    CMessage("This slick, toy-craving fuckhole that will suck on every finger I\'ve got.");
    CMessage("Get some lube");
    sleep(30);
    CMessage("%KneelForMe%");
    CMessage("Just wipe a little lube on your finger and rubb your ass");
    CMessage("Now... slips right into that hole.");
    CMessage("Yeah. That\'s what I\'m going to pop in your hole first.");
    CMessage("It doesn\'t do much, but I just like mixing you up a bit.");
    CMessage("Press in a little further, I want to see your eyes go wide");
    CMessage("There it is. There\'s my boy\'s prostate.");
    CMessage("I\'m going to edge you, %PetName%. But don\'t worry");
    CMessage("I have ways of keeping you from cuming.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("and start fucking that ass");
    CMessage("In and out");
    CMessage("You need to be put in your place.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("%stopstroking%", 0);
		stopStrokingAll();
    }
    if(getVar("av_fetish_pain", false))
    {
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt();
    }
    if(getVar("av_fetish_pain", false))
    {
        //CMessage("%StartStroking%");
		setStrokingNoTaunt();
    }
    CMessage("You like to be stretched.");
    CMessage("You\'re almost spent");
    CMessage("Good...the longer you take, the more I get to shock you.");
    CMessage("Keep working that finger in and out of your loose hole.");
    CMessage("Take it, %PetName% take it.");
    if (randomInteger(1, 100) <= 50)
    {
        NoAudioFuck76();
        return;
    }
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Fuck*.mp3");
    sleep(10);
    NoAudioFuck76();
	return;
}
function NoAudioFuck76()
{
    CMessage("This little slut would do anything to ride my wrist.");
    CMessage("You\'re never satisfied with just fingers.");
    CMessage("NO");
    CMessage("These little sluts get a goal in mind");
    CMessage("and they will beg and moan and plead for you to give them your fist");
    CMessage("until they\'re finally begging and moaning and pleading for the exact opposite.");
    CMessage("Fine...try to put a second finger inside your ass...");
    sleep(15);
    CMessage("There you go... you earned the second finger");
    CMessage("I like this game.");
    CMessage("What an ass-slut.");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Keep fucking your ass");
    CMessage("I enjoy the feeling of power over you.");
    CMessage("Take it slut! Take that finger.");
    CMessage("Stop...remove your fingers...");
    sleep(15);
    CMessage("I wanted you to stand up and spread your legs.");
    CMessage("I enjoyed deflowering you");
    CMessage("It made me feel powerful and in control.");
    EndAnal2();
    return;
}
function EndAnal2()
{
	if (isStrokingAll()){
		CMessage("%stopstroking%", 0);
		stopStrokingAll();
	}
	CMessage("%sitDown% and clean yourself");
    sleep(30);
    CMessage("I hope your asshole has recovered by now...");
    CMessage("Now I do wonder what else I can talk you into doing... %Grin%");
    return;
}
function noanal()
{
    CMessage("Lucky for me there are plenty of other ways to torment you %Grin%");
    return;
}