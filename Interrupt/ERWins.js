DMessage("ERWins: start");
main();
DMessage("ERWins: end");
function main()
{
    if(getVar("ERSWin", false))
    {
        ERSWin();
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
    ERSWin();
}
function ERSWin()
{
    CMessage("<i>Worship</i> it");
    CMessage("%Stroke% it, %Touch% it, <i>make love</i> to it");
    CMessage("Don\'t edge yet though, and please %NameGM%");
    CMessage("Don\'t beg me to let you edge");
    CMessage("I\'m going to give you something special %GeneralTime%");
    CMessage("I\'m going to let you come, but I\'m not going to");
    CMessage("I\'m going to edge and hold it until you do");
    CMessage("And then I'm going to beg you to let me stop");
    CMessage("So I want you to work yourself back up, <i>nice and slow</i>");
    CMessage("I want it to feel so good, I want you to savour it");
    CMessage("Feel yourself getting closer and closer");
    CMessage("I want you to know that, I\'m about to make you to come, %SubName%");
    CMessage("I\'m going to give that to you, I want to give that to you");
    CMessage("No more edges, no more waiting, no more holding it back");
    CMessage("The ache that you feel right now");
    CMessage("It\'s not an ache, it\'s an inevitability");
    CMessage("I\'m going to bring you right to the brink");
    CMessage("And then I\'m going to tell you that I want you to come %Name%");
    CMessage("All that ache %NameGM%, <b>it is your orgasm</b>");
    CMessage("And I want you to know that I\'m touching myself right now %Name%");
    CMessage("And I want to come so bad, but I want to %Surrender% to you %GeneralTime%");
    CMessage("I'm going edge <b>now</i>");
    CMessage("But if you let me stop before you come %Name%");
    CMessage("Then I\'m not going to let you come");
    CMessage("And we both know that you\'re not going to let me get away with that");
    CMessage("I\'m just imagining kneeling in front of you");
    CMessage("Licking your cock as I start begging you to let me stop");
    CMessage("Begging you to come for me so that I can stop torturing myself");
    CMessage("Sucking on you as I caress my swollen clit");
    CMessage("Feeling %How% you throb on my tongue");
    CMessage("Harder and harder");
    CMessage("It\'s hard to beg with a cock in your mouth");
    CMessage("I would have to sacrifice all my humility to  make you come");
    CMessage("I would have to completely %Surrender% to you");
    CMessage("%Aching% as I held the edge with your cock in my mouth");
    CMessage("Knowing that I won't be able to start begging you let me stop %Touching% myself");
    CMessage("Until after I've <i>swallowed</i> your edge");
    CMessage("%Exclaim%");
    if(getVar("OpiateNPC", false))
    {
        OpiateNPC();
        return;
    }
    CMessage("I can\'t take anymore %Name%");
    CMessage("I want you to come for me, %SubName%");
    if(getVar("OpiateNPR", false))
    {
        OpiateNPR();
        return;
    }
    setRapidText(true);
    CMessage("I'm on my knees; my legs are spread");
    CMessage("My mouth is open; my hands are on my breasts and my %Pussy%");
    CMessage("Pinching my nipples; trying to forget my throbbing clit");
    CMessage("Make me swallow it, %SubName% <i>come for me</i>");
	//@DeleteFlag(ERWon)
	delVar("ERWon");
    let answer0 = getInput("%Exclaim%");
    if (answer0.isLike("came", "done", "finished"))
    {
    }
    else
    {
        CMessage("%Exclaim%");
    }
    CMessage("Defeat tastes so sweet %NameGM%");
    setVar("ERWon2", true);
    endSession();
    return;
    OpiateNPR();
}
function OpiateNPR()
{
    CMessage("%EmoteSmile% And you're <i>going</i> to ruin it...");
	//@DeleteFlag(OpiateNPR)
	delVar("OpiateNPR");
    CMessage("Because you had a ruined orgasm without my permission last time %EmoteSmile%");
    CMessage("I know how much you really want it...");
    CMessage("My mouth open under your cock %EmoteMoan%");
    CMessage("Catching every last drop as it gently falls onto my tongue %EmoteWhimper%");
    CMessage("I\'m on my knees, my legs are spread, I\'m whimpering");
    CMessage("My hands are on my breasts, pinching my nipples trying to forget my throbbing clit");
    showTaggedImage(4, ["boobs"]);
    CMessage("But I don\'t get to come, I won\'t even beg you for it");
    CMessage("I\'m a good girl and I don\'t come without permission %NameGM%");
    CMessage("Remember this moment, remember this %Name%");
    CMessage("You beat me at Edge Roulette and lost your orgasm anyway");
    CMessage("Because you have a problem with coming without permission");
    CMessage("Now clean yourself up and start stroking for me %Name%");
    CMessage("%EmoteSmile% We\'re not done yet");
    setVar("ERWon2", true);
    return;
    OpiateNPC();
}
function OpiateNPC()
{
    CMessage("But I\'m not going to swallow it %NameGM%");
    CMessage("I would stop sucking, stop licking, stop touching...", 0);
    CMessage("%stopstroking%", 0);
    CMessage("And I would look up at you with a big smile");
    CMessage("%EmoteSmile% And I would tell you in the sweetest voice I could come up with");
    CMessage("You came without my permission last time %NameGM%");
    CMessage("You\'ve already had this orgasm");
    CMessage("%Smile% So I have a different reward for you");
    CMessage("%EmoteFace% Chastity");
    setVar("ERWon2", true);
    CMessage("You need more practice waiting, and handling the ache, %SubName%");
    CMessage("%EmoteHer% So this is the best reward I could possibly offer you");
    CMessage("It's the reward you <i>need</i> %EmoteSmile%");
    CMessage("So ache for me %EmoteLaugh%");
    return;
    ERWon();
}
function ERWon()
{
    CMessage("Normally it would be time for me to <i>decide</i> if I was going to let you come %GeneralTime%");
	//@ChastityOff
	chastityOff();
    CMessage("But you already know that I am going to %MakeSure% you come");
    CMessage("So, I %Want% for you to start slowly %Stroking% %Yourself% %NameGM%");
    CMessage("<i>Worship</i> it");
    CMessage("%Stroke% it, %Touch% it, <i>make love</i> to it");
    CMessage("Don\'t edge yet though, and please %NameGM%");
    CMessage("Don\'t beg me to let you edge");
    CMessage("I\'m going to give you something special %GeneralTime%");
    CMessage("I\'m going to let you come, but I\'m not going to");
    CMessage("I\'m going to edge and hold it until you do");
    CMessage("And then I'm going to beg you to let me stop");
    CMessage("So I want you to work yourself back up, <i>nice and slow</i>");
    CMessage("I want it to feel so good, I want you to savour it");
    CMessage("Feel yourself getting closer and closer");
    CMessage("I want you to know that, I\'m about to make you to come, %SubName%");
    CMessage("I\'m going to give that to you, I want to give that to you");
    CMessage("No more edges, no more waiting, no more holding it back");
    CMessage("The ache that you feel right now");
    CMessage("It\'s not an ache, it\'s an inevitability");
    CMessage("I\'m going to bring you right to the brink");
    CMessage("And then I\'m going to tell you that I want you to come %Name%");
    CMessage("All that ache %NameGM%, <b>it is your orgasm</b>");
    CMessage("And I want you to know that I\'m touching myself right now %Name%");
    CMessage("And I want to come so bad, but I want to %Surrender% to you %GeneralTime%");
    CMessage("I'm going edge <b>now</i>");
    CMessage("But if you let me stop before you come %Name%");
    CMessage("Then I\'m not going to let you come");
    CMessage("And we both know that you\'re not going to let me get away with that");
    CMessage("I\'m just imagining kneeling in front of you");
    CMessage("Licking your cock as I start begging you to let me stop");
    CMessage("Begging you to come for me so that I can stop torturing myself");
    CMessage("Sucking on you as I caress my swollen clit");
    CMessage("Feeling %How% you throb on my tongue");
    CMessage("Harder and harder");
    CMessage("It\'s hard to beg with a cock in your mouth");
    CMessage("I would have to sacrifice all my humility to  make you come");
    CMessage("I would have to completely %Surrender% to you");
    CMessage("%Aching% as I held the edge with your cock in my mouth");
    CMessage("Knowing that I won't be able to start begging you let me stop %Touching% myself");
    CMessage("Until after I've <i>swallowed</i> your edge");
    CMessage("%Exclaim%");
    if(getVar("OpiateNPC", false))
    {
        OpiateNPC();
        return;
    }
    CMessage("I can\'t take anymore %Name%");
    CMessage("I want you to come for me, %SubName%");
    if(getVar("OpiateNPR", false))
    {
        OpiateNPR2();
        return;
    }
    setRapidText(true);
    CMessage("I'm on my knees; my legs are spread");
    CMessage("My mouth is open; my hands are on my breasts and my %Pussy%");
    CMessage("Pinching my nipples; trying to forget my throbbing clit");
    CMessage("Make me swallow it, %SubName% <i>come for me</i>"); 
	//@DeleteFlag(ERWon)
	delVar("ERWon");
    let answer0 = getInput("%Exclaim%");
    if (answer0.isLike("came", "done", "finished"))
    {
    }
    else
    {
        CMessage("%Exclaim%");
    }
    CMessage("Defeat tastes so sweet %NameGM%");
    setVar("ERWon2", true);
    run("Interrupt" + java.io.File.separator + "SwissB.js");
	return;
    OpiateNPR2();
}
function OpiateNPR2()
{
    CMessage("%EmoteSmile% And you're <i>going</i> to ruin it...");
	//@DeleteFlag(OpiateNPR)
	delVar("OpiateNPR");
    CMessage("Because you had a ruined orgasm without my permission last time %EmoteSmile%");
    CMessage("I know how much you really want it...");
    CMessage("My mouth open under your cock %EmoteMoan%");
    CMessage("Catching every last drop as it gently falls onto my tongue %EmoteWhimper%");
    CMessage("I\'m on my knees, my legs are spread, I\'m whimpering");
    CMessage("My hands are on my breasts, pinching my nipples trying to forget my throbbing clit");
    showTaggedImage(4, ["boobs"]);
    CMessage("But I don\'t get to come, I won\'t even beg you for it");
    CMessage("I\'m a good girl and I don\'t come without permission %NameGM%");
    CMessage("Remember this moment, remember this %Name%");
    CMessage("You beat me at Edge Roulette and lost your orgasm anyway");
    CMessage("Because you have a problem with coming without permission");
    CMessage("Now clean yourself up and start stroking for me %Name%");
    CMessage("%EmoteSmile% We\'re not done yet");
    setVar("ERWon2", true);
    return;
    OpiateNPC();
}
function OpiateNPC()
{
    CMessage("But I\'m not going to swallow it %NameGM%");
    CMessage("I would stop sucking, stop licking, stop touching...");
    CMessage("%stopstroking%", 0);
    CMessage("And I would look up at you with a big smile");
    CMessage("%EmoteSmile% And I would tell you in the sweetest voice I could come up with");
    CMessage("You came without my permission last time %NameGM%");
    CMessage("You\'ve already had this orgasm");
    CMessage("%Smile% So I have a different reward for you");
    CMessage("%EmoteFace% Chastity");
    setVar("ERWon2", true);
    CMessage("You need more practice waiting, and handling the ache, %SubName%");
    CMessage("%EmoteHer% So this is the best reward I could possibly offer you");
    CMessage("It's the reward you <i>need</i> %EmoteSmile%");
    CMessage("So ache for me %EmoteLaugh%");
    return;
    ERWin2();
}
function ERWin2()
{
    CMessage("Normally it would be time for me to <i>decide</i> if I was going to let you come %GeneralTime%");
    CMessage("But you already know that I am going to %MakeSure% you come");
    CMessage("So, I %Want% for you to start slowly %Stroking% %Yourself% %NameGM%");
    CMessage("<i>Worship</i> it");
    CMessage("%Stroke% it, %Touch% it, <i>make love</i> to it");
    CMessage("Don\'t edge yet though, and please %NameGM%");
    CMessage("Don\'t beg me to let you edge");
    CMessage("I\'m going to give you something special %GeneralTime%");
    CMessage("I\'m going to let you come, but I\'m not going to");
    CMessage("I\'m going to edge and hold it until you do");
    CMessage("And then I'm going to beg you to let me stop");
    CMessage("So I want you to work yourself back up, <i>nice and slow</i>");
    CMessage("I want it to feel so good, I want you to savour it");
    CMessage("Feel yourself getting closer and closer");
    CMessage("I want you to know that, I\'m about to make you to come, %SubName%");
    CMessage("I\'m going to give that to you, I want to give that to you");
    CMessage("No more edges, no more waiting, no more holding it back");
    CMessage("The ache that you feel right now");
    CMessage("It\'s not an ache, it\'s an inevitability");
    CMessage("I\'m going to bring you right to the brink");
    CMessage("And then I\'m going to tell you that I want you to come %Name%");
    CMessage("All that ache %NameGM%, <b>it is your orgasm</b>");
    CMessage("And I want you to know that I\'m touching myself right now %Name%");
    CMessage("And I want to come so bad, but I want to %Surrender% to you %GeneralTime%");
    CMessage("I'm going edge <b>now</i>");
    CMessage("But if you let me stop before you come %Name%");
    CMessage("Then I\'m not going to let you come");
    CMessage("And we both know that you\'re not going to let me get away with that");
    CMessage("I\'m just imagining kneeling in front of you");
    CMessage("Licking your cock as I start begging you to let me stop");
    CMessage("Begging you to come for me so that I can stop torturing myself");
    CMessage("Sucking on you as I caress my swollen clit");
    CMessage("Feeling %How% you throb on my tongue");
    CMessage("Harder and harder");
    CMessage("It\'s hard to beg with a cock in your mouth");
    CMessage("I would have to sacrifice all my humility to  make you come");
    CMessage("I would have to completely %Surrender% to you");
    CMessage("%Aching% as I held the edge with your cock in my mouth");
    CMessage("Knowing that I won't be able to start begging you let me stop %Touching% myself");
    CMessage("Until after I've <i>swallowed</i> your edge");
    CMessage("%Exclaim%");
    if(getVar("OpiateNPC", false))
    {
        OpiateNPC();
        return;
    }
    CMessage("I can\'t take anymore %Name%");
    CMessage("I want you to come for me, %SubName%");
    if(getVar("OpiateNPR", false))
    {
        OpiateNPR();
        return;
    }
    setRapidText(true);
    CMessage("I'm on my knees; my legs are spread");
    CMessage("My mouth is open; my hands are on my breasts and my %Pussy%");
    CMessage("Pinching my nipples; trying to forget my throbbing clit");
    CMessage("Make me swallow it, %SubName% <i>come for me</i>");
	//@DeleteFlag(ERWon)
	delVar("ERWon");
    let answer0 = getInput("%Exclaim%");
    if (answer0.isLike("came", "done", "finished"))
    {
    }
    else
    {
        CMessage("%Exclaim%");
    }
    CMessage("Defeat tastes so sweet %NameGM%");
    setVar("ERWon2", true);
    run("Interrupt" + java.io.File.separator + "SwissB.js");
	return;
    OpiateNPR();
}
function OpiateNPR()
{
    CMessage("%EmoteSmile% And you're <i>going</i> to ruin it...");
	//@DeleteFlag(OpiateNPR)
	delVar("OpiateNPR");
    CMessage("Because you had a ruined orgasm without my permission last time %EmoteSmile%");
    CMessage("I know how much you really want it...");
    CMessage("My mouth open under your cock %EmoteMoan%");
    CMessage("Catching every last drop as it gently falls onto my tongue %EmoteWhimper%");
    CMessage("I\'m on my knees, my legs are spread, I\'m whimpering");
    CMessage("My hands are on my breasts, pinching my nipples trying to forget my throbbing clit");
    showTaggedImage(4, ["boobs"]);
    CMessage("But I don\'t get to come, I won\'t even beg you for it");
    CMessage("I\'m a good girl and I don\'t come without permission %NameGM%");
    CMessage("Remember this moment, remember this %Name%");
    CMessage("You beat me at Edge Roulette and lost your orgasm anyway");
    CMessage("Because you have a problem with coming without permission");
    CMessage("Now clean yourself up and start stroking for me %Name%");
    CMessage("%EmoteSmile% We\'re not done yet");
    setVar("ERWon2", true);
    return;
    OpiateNPC();
}
function OpiateNPC()
{
    CMessage("But I\'m not going to swallow it %NameGM%");
    CMessage("I would stop sucking, stop licking, stop touching...");
    CMessage("%stopstroking%", 0);
    CMessage("And I would look up at you with a big smile");
    CMessage("%EmoteSmile% And I would tell you in the sweetest voice I could come up with");
    CMessage("You came without my permission last time %NameGM%");
    CMessage("You\'ve already had this orgasm");
    CMessage("%Smile% So I have a different reward for you");
    CMessage("%EmoteFace% Chastity");
    setVar("ERWon2", true);
    CMessage("You need more practice waiting, and handling the ache, %SubName%");
    CMessage("%EmoteHer% So this is the best reward I could possibly offer you");
    CMessage("It's the reward you <i>need</i> %EmoteSmile%");
    CMessage("So ache for me %EmoteLaugh%");
    return;
}