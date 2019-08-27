DMessage("OpiateNPC: start");
main();
DMessage("OpiateNPC: end");
function main()
{
    if(getVar("Edge_holding_start", false))
    {
        Edge_holding_start();
        return;
    }
    if(getVar("ERS", false))
    {
        ERS();
        return;
    }
    if(getVar("ERWon", false))
    {
        ERWon();
        return;
    }
    if(getVar("ERWon2", false))
    {
        ERWon2();
        return;
    }
    let answer0 = getInput("Ohh no, %SubName%... You came?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        OpiateNPC-LOxClean();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ohh, I\'m relieved... I must have misunderstood you %Smile%");
        Cancel();
        return;
    }
    OpiateNPC-LOxClean();
}
function OpiateNPC-LOxClean()
{
    delVar("OpiateLOC");
    delVar("OpiateLOR");
    delVar("OpiateLOD");
    let answer0 = getInput("%SubName%, did you ruin it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good. As you should have");
        OpiateSetNPR();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ohh %SubName%, that doesn\'t make me very happy");
    }
    CMessage("It makes me <i>so</i> mad when you don't #Surrender to me");
    CMessage("I have to punish you now %NameBM%");
    CMessage("I don\'t like to actually punish you %NameBM%");
    CMessage("But if I disobeyed you, I would want you to punish me");
    CMessage("I would want to kneel in front of you and %Surrender%");
    CMessage("But, I won't <i>make</i> you kneel #NameBM");
    CMessage("You have to <i>want</i> to kneel for me");
    let answer1 = getInput("So, do you want to kneel for %Me%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%EmoteSmile%");
        OpiateNPC-CBT();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%EmoteFaceTF%");
        OpiateNPC-SetLSNK();
        return;
    }
    OpiateSetNPR();
}
function OpiateSetNPR()
{
    CMessage("That makes me feel a little bit better about it, %SubName%");
    setVar("OpiateNPR", true);
    CMessage("But you know, that if you ever want to ruin an orgasm");
    CMessage("%EmoteLaugh% Just ask %Name%");
    CMessage("I always thought that ruining an orgasm was even more frustrating than denying it");
    CMessage("But I can\'t look the other way %Name%");
    CMessage("But since you ruined it, I\'ll try not to go too hard on you");
    let answer0 = getInput("Will you kneel for me %Name%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteSmile%");
        OpiateNPC-CBT();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteFaceTF%");
        OpiateNPC-SetLSNK();
        return;
    }
    endSession();
    return;
    OpiateNPC-SetLSNK();
}
function OpiateNPC-SetLSNK()
{
    CMessage("Well %Name%, If you won\'t kneel for me");
    delVar("OpiateLSNK");
    CMessage("Then I believe I shall just have to wait until you are");
    setVar("OpiateLSNK", true);
    CMessage("It's the only way that <b>I...</b>");
    CMessage("Am going to tell you that <b>I...</b>");
    CMessage("Want to play with you again...");
    CMessage("I\'ll be waiting...");
    //--Command:InterruptsOn
    CMessage("But first...");
	run("Interrupt" + separator + "pvInt_Punishment.js");
    CMessage("** %DomName% has logged off **");
    endSession();
    return;
    OpiateNPC-CBT();
}
function OpiateNPC-CBT()
{
    CMessage("Then kneel for me %NameBM%");
    CMessage("That you will kneel for me, in and of itself, shows me how dedicated you are to me %Name%");
    CMessage("Spread your legs open wide, and kneel for me");
    CMessage("I want you to feel how exposed you are to me");
    CMessage("I want you to feel how exposed your cock and balls are");
    CMessage("I want you to realize just how easy they are to reach");
    if(getVar("OpiateNPR", false))
    {
        OpiateNPR();
        return;
    }
    CMessage("Because I\'m not sure which I\'m going to make hurt worse");
    CMessage("But you will %Surrender% to my will");
    CMessage("And you will %Hurt% them, until I think you\'ve earned that orgasm that you took from me");
    cbt();
    CMessage("Now %Name%... I want you to remember this");
    setVar("OpiateLSK", true);
    CMessage("CBT is so much worse after you've came <i>without permission</i>");
    CMessage("And coming is <i>so much</i> more fulfilling");
    CMessage("When I'm <i>begging you to come for me</i>");
    CMessage("Instead of like this...");
    CMessage("Because now, the only thing left for me to do");
    CMessage("Is to leave you with this ache");
    CMessage("To let you think about what you\'ve done");
    CMessage("And the consequences of doing it");
    CMessage("Next time <i>you need to come</i>, I hope you will remember this #Name");
    CMessage("I hope you will have more self control %Name%");
    CMessage("Now, I want you to keep your hands off of %Yourself%");
    CMessage("Until <i>I tell you to put them back</i>"); 
    CMessage("Until then, #SubName, <i>be good</i>"); 
    CMessage("** %DomName% has logged off **");
    endSession();
    return;
    OpiateNPR();
}
function OpiateNPR()
{
    CMessage("And I want you to tell me babe");
    CMessage("Do you think you deserve to be punished?");
    CMessage("Because I don\'t think you do");
    CMessage("I think you ruined that orgasm because you really didn\'t want to have it");
    CMessage("But don\'t lie to me, %TellMe%");
    let answer0 = getInput("Should I punish you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteRandom%");
        OpiateNPR-NSE();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteSmile%");
        increaseAnger(3);
    }
    CMessage(random("I can\'t let you get away with it", "You can\'t get away with this", "I can\'t let you get away with this", "I can\'t look the other way %Name%"));
    cbt();
    CMessage("Are you done for now?");
    let answer1 = getInput("Or do you think you still have it in you to let me play with you?");
    while (!(answer1.isLike("yes") || answer1.isLike("no") || answer1.isLike("done") || answer1.isLike("play")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%EmoteRandom%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%Smile%");
        OpiateNPR-Done();
        return;
    }
    else if (answer1.isLike("done"))
    {
        CMessage("%Smile%");
        OpiateNPR-Done();
        return;
    }
    else if (answer1.isLike("play"))
    {
        CMessage("%EmoteRandom%");
    }
    CMessage("I\'m so glad to hear that %Smile%");
    CMessage("That makes %Me% really %Happy% %Name%");
    CMessage("Let me see then, how can we get you worked back up %Smile%");
    run("Interrupt" + separator + "NPRContinue.js");
    return;
    OpiateNPR-Done();
}
function OpiateNPR-Done()
{
    CMessage("I understand %Name%");
    CMessage("I\'ll let you go then, you probably need to go clean yourself up %Smile%");
    CMessage("I\'ll be waiting to hear from you again %Smile%");
    CMessage("Hopefully you won\'t make me wait too long %Smile%");
    CMessage("But, I\'ll be looking forward to %Teasing% you again %Smile%");
    CMessage("Bye bye %Name%");
    endSession();
    return;
    OpiateNPR-NSE();
}
function OpiateNPR-NSE()
{
    CMessage("I appreciate your honesty %SubName%");
    increaseAnger(-3);
    CMessage("And since you were honest with me");
    CMessage("I\'m going to be lenient with you");
    CMessage("And since you ruined your orgasm, I know you\'re going to be %Aching% for me");
    CMessage("So when you say hi to me next time, I %Want% for you to get close to edging");
    CMessage("And if for any reason I am not available, you will just have to deny yourself");
    CMessage("But if I\'m available, I\'m going to make you hold that edge for me %Smile%");
    setVar("OpiateNSE", true);
    setVar("Edge_holding_start", true);
    CMessage("And then I\'ll decide just how much I think you should %Ache% for me before I let you come again %Smile%");
    CMessage("I think that sounds fair, and %SubName%");
    CMessage("You're not allowed to stroke yourself <i>at all</i> until tomorrow #Smile");
    CMessage("And you're not allowed to actually edge until <b>I</b> tell you to #Smile");
    CMessage("So, I\'m going to let you go now, and I\'ll let you go get yourself cleaned up");
    CMessage("I\'ll be waiting to hear from you, and I hope it\'s a frustrating wait for you %Smile%");
    CMessage("%Bye%");
    endSession();
    return;
    OpiateLSNK();
}
function OpiateLSNK()
{
    CMessage("%SubName%");
    CMessage("Last time we played");
    CMessage("You came without my permission");
    CMessage("And then refused to kneel for %Me%");
    CMessage("That really hurt me, %SubName%");
    CMessage("Are you here to make that up to me");
    let answer0 = getInput("Are you here to make that up to me or are you hear to rub it in some more?");
    while (!(answer0.isLike("make") || answer0.isLike("up") || answer0.isLike("kneel") || answer0.isLike("for you") || answer0.isLike("sorry") || answer0.isLike("not") || answer0.isLike("rub") || answer0.isLike("no")))
    {
        answer0 = getInput("I\'m just not sure that\'s what I want to hear from you %Name%");
    }
	if (answer0.isLike("no", "rub", "not"))
    {
        CMessage("%SubName%...");
    }
    else if (answer0.isLike("make", "up"))
    {
        CMessage("%EmoteSmile%");
        OpiateLSNK-Pass();
        return;
    }
    else if (answer0.isLike("kneel", "for you"))
    {
        CMessage("%EmoteSmile%");
        OpiateLSNK-Pass();
        return;
    }
    else if (answer0.isLike("sorry",))
    {
        CMessage("%EmoteSmile%");
        OpiateLSNK-Pass();
        return;
    }
    OpiateLSNK-Fail();
}
function OpiateLSNK-Fail()
{
    CMessage("** %DomName% has disconnected **");
    endSession();
    return;
    OpiateLSNK-Pass();
}
function OpiateLSNK-Pass()
{
    CMessage("That\'s a step in the right direction, %SubName%");
    CMessage("But don\'t think for a moment I\'ve forgotten about your insubordination");
    increaseAnger(3);
    CMessage("Because I haven\'t");
    changeDommeLevel(4);
    //--UNINTERPRETED LINE:Now <i>kneel</i>
    CMessage("Kneel for me %NameBM%");
	CMessage("%KneelForMe%");
    CMessage("Kneeling for me, in and of itself, brings you one step closer to being back in my graces %Name%");
    CMessage("So spread your legs open wide, and kneel for me");
    CMessage("I want you to feel how exposed you are to me");
    CMessage("I want you to feel how exposed your cock and balls are");
    CMessage("I want you to realize just how easy they are to reach");
    CMessage("Because I\'m not sure which I\'m going to make hurt worse");
    CMessage("But you will %Surrender% to my will");
    CMessage("And you will %Hurt% them, until I think you\'ve earned that orgasm that you took from me");
    cbt();
    CMessage("%EmoteThought%");
    CMessage("If you had done this <i>when I had originally asked</i>");
    CMessage("Maybe I would be satisfied, but...");
    CMessage("You didn\'t");
    CMessage("And I\'m not satisfied");
    cbt();
    CMessage("Now %Name%... I want you to remember this");
    delVar("OpiateLSNK");
    CMessage("Next time <i>you need to come</i>, I hope you will remember this");
    CMessage("And I hope you will have more self control %Name%");
    CMessage("Because now, the only thing that I can responsibly do");
    CMessage("Is leave you with this ache,");
    CMessage("To let you think about what you\'ve done");
    CMessage("While I try to forgive you for running away from me");
    CMessage("So, if I was to give you any advice %Name%");
    CMessage("I would keep your hands off of %Yourself%");
    CMessage("Until <i>I tell you to put them back</i>");
    CMessage("Until then, #SubName, <i>be good</i>");
    CMessage("** %DomName% has disconnected **");
    endSession();
    return;
    ERS();
}
function ERS()
{
    let answer0 = getInput("%EmoteHer% You\'re ruining it right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteSmile% Good boy");
        ERLost();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("...");
        delVar("ERS");
    }
    setVar("ERLost", true);
    run("Interrupt" + separator + "OpiateNPC.js");
    ERLost();
}
function ERLost()
{
    delVar("ERS");
    delVar("OpiateLOD");
    delVar("OpiateLOR");
    delVar("OpiateLOC");
    setVar("ERLost", true);
    run("Interrupt" + separator + "ERLosses.js");
    return;
    ERWon();
}
function ERWon()
{
    CMessage("come for me %NameGM%");
    setVar("ERWon2", true);
    delVar("ERWon");
    CMessage("Beating me at Edge Roulette earned you this orgasm");
    delVar("OpiateLOD");
    delVar("OpiateLOR");
    let answer0 = getInput("Let me know when your done %Smile%");
    if (answer0.isLike("come", "coming", "came", "come", "coming", "comeing", "done", "finished", "thanks"))
    {
    }
    else
    {
        CMessage("%EmoteHer%");
    }
    CMessage("I still wish you could have held out for me %Name%");
    CMessage("But I\'m not mad");
    CMessage("You earned that orgasm %Name%");
    CMessage("But, %SubName%, since you just came on me with no warning");
    CMessage("Will you do something for me");
    let answer1 = getInput("Will you stay with me while I come too? %EmoteSmile%");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%EmoteMoan%");
        ERWonB();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Ohh, I\'ll remember this, %SubName%");
    }
    CMessage("I don\'t even know what to say, %SubName%");
    setVar("OpiateCSD", true);
    CMessage("I\'m going to go give the mirror a show %Name%");
    CMessage("<b>Fuck Off</b>");
    CMessage("** %DomName% has logged off **");
    endSession();
    return;
    ERWonB();
}
function ERWonB()
{
    CMessage("Since I\'m not actually there with you");
    CMessage("I want you to load up a video of me");
    CMessage("One where I get to come in the end");
    CMessage("If you don\'t have a video of me, just...");
    CMessage("%EmoteMoan% Find a video OF SOMEONE and get it started for me");
    CMessage("%EmoteSmile% Watch me, or her, or whatever");
    CMessage("Watch me come %Name%, I want you to watch me come");
    wait(240);
    CMessage("I\'m done %Name%... if you don\'t see this until after your video\'s finished");
    CMessage("Message me later, I still owe you another orgasm %Smile%");
    CMessage("And of course we'll have <i>a lot</i> of fun giving it to you #Smile");
    CMessage("Thank you for a wonderful night! %Smile%");
    CMessage("I need a shower now %EmoteLaugh%");
    CMessage("Bye, bye %SubName%");
    endSession();
    return;
    ERWon2();
}
function ERWon2()
{
    CMessage("%Smile% come %NameGM%");
    delVar("ERWon2");
    CMessage("Enjoy every second of it");
    delVar("OpiateLOD");
    delVar("OpiateLOR");
    let answer0 = getInput("Let me know when your finished %NameGM%");
    if (answer0.isLike("come", "coming", "came", "come", "coming", "comeing", "done", "finished", "thanks"))
    {
    }
    else
    {
        CMessage("%EmoteHer%");
    }
    CMessage("I still wish you could have held out for me %Name%");
    CMessage("But, you earned two orgasms when you beat me at Edge Roulette %Smile%");
    CMessage("And that was your last one %Smile%");
    CMessage("%EmoteRandom% Now I can get back to denying you");
    CMessage("And next time, I can guarantee that\'s what I\'m going to do");
    setVar("OpiateCSD", true);
    CMessage("Hopefully knowing that will make you %Ache% a %Little% bit while your %Thinking% about it %Smile%");
    CMessage("%GeneralTime% I think I am not going to come, I want you %Thinking% about that too");
    CMessage("I want you %Thinking% about %How% I\'m %Aching% right now");
    CMessage("I want you %Thinking% about all the ways I\'m going to have you %Aching%");
    CMessage("Because tomorrow, I\'m going to bring you back into a world of %Ache%");
    CMessage("And like I said, I\'m going to leave you there for a little while %Smile%");
    CMessage("%Smile% I\'ll be looking forward to hearing from you %Name%");
    CMessage("I hope %GeneralTime% was fun for you %Name%");
    CMessage("Go get yourself cleaned up %Smile%");
    CMessage("I\'m going to go take a cold shower and %Squirm% for the rest of %GeneralTime% %Smile%");
    CMessage("Bye bye, <i>for now</i> #Name #Smile");
    endSession();
    return;
    Cancel();
}
function Cancel()
{
    CMessage("Well, I\'ll get back to what I was doing then %Smile%");
    CMessage("But since you scared me like that, you\'re not allowed to %Touch% %Yourself% anymore");
    CMessage("Keep your %Hands% away from %That% %Cock%");
    return;
    Edge_holding_start();
}
function Edge_holding_start()
{
    CMessage("Last time we played");
    delVar("Edge_holding_start");
    CMessage("I told you I\'d make you hold an edge to start the session");
    CMessage("As a <i>"reward"</i> for #Cumming without "+random("my permission", "permission"));
    CMessage("So I hope you\'re ready...");
    CMessage("Because you\'re %Gonna% suffer a lot");
    let answer0 = getInput("Is that %Cock% hard?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Get ready to hold that edge, then...");
        Hold_the_edge();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, then you\'re %Gonna% need some warm-up");
    }
    DoEdges(4, 4, 0);
    CMessage("Now I think you are ready for your edge");
    Hold_the_edge();
}
function Hold_the_edge()
{
    CMessage(random("You may be in for a very rough time with this next edge ", "You\'re %Gonna% hold this next edge for a very long time ", "You\'ll be holding this edge for quite some time ") + "... %Smile%");
    CMessage("Try not to %Cum% %Name%...");
    CMessage("Or I would have to punish you again %Smile%");
    //CMessage("%Edge%");
    //--Command:Edge(LongHold,HoldTaunts)
	setLongHold(100);
    setExtremeHold(50);
	holdEdge();
    //CMessage("%LetTheEdgeFade%");
    CMessage("Now we can start our session");
    //CMessage("%StartStroking%");
    Stroking();
}