DMessage("NoEREx: Beginn");
main();
DMessage("NoEREx: end");
function main()
{
    CMessage("Don\'t edge yet %Name%");
    CMessage("But you can keep stroking");
    CMessage("%EmoteHer% There\'s something I want you to know");
    CMessage("%Name%, any time you ask me to edge");
    CMessage("And trust me, I <i>don't</i> mind you asking %EmoteSmile%");
    CMessage("Because it <i>really</i> turns me on when you ask me for permission %Name% ");
    CMessage("And I know that I can deny you");
    CMessage("I can deny you even the edge if I want to");
    CMessage("And I like doing that too %EmoteSmile%");
    CMessage("%EmoteHer% Watching you stroke and struggle to stay as close as you can");
    CMessage("But not as close as you want to be %EmoteMoan%");
    edge("%EmoteThought% %Edge%");
    CMessage("When you edge for me it makes me really want to... %EmoteLaugh%");
    CMessage("%EmoteSmile% I mean <b>really</b> <i>really</i> makes me want to push you harder");
    CMessage("%EmoteHer% And I\'ve been wondering, just how hard can I push you");
    CMessage("What if I pushed you until you were <i>begging</i> me to let you come");
    CMessage("%EmoteHer% What if I pushed you until you were <i>truly</i> desperate");
    CMessage("What if I pushed you until you were so helplessly aroused that you just <i>had</i> to come");
    edge("%Edge%");

    CMessage("%EmoteHer% What if instead of letting you stop and rest, I gave you no mercy");
    CMessage("%EmoteSmile% What if I just kept pushing you");
    CMessage("Made you keep edging, over and <i>over</i> and <b>over</b>");
    CMessage("Never giving you a break, no time to catch your breath");
    edge("%Edge%");
    edge("%Edge%");
    CMessage("What if I %Tortured% you, I mean <i>really</i> %Tortured% you?");
    CMessage("%EmoteThought% %EmoteMoan%");
    CMessage("I want to %Torture% you %Name%");
    CMessage("So I made a game, that I think I\'m going to call \"Edge Roulette\"");
    let answer0 = getInput("Want to hear about it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteSmile% I thought you might be interested");
        EREx();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteLaugh% Well, I\'m going to tell you anyway");
    }
    CMessage("Because any time you ask me to edge, I might decide to make you regret it %EmoteSmile%");
    EREx();
}
function EREx()
{
    CMessage("Keep stroking, <i>don't</i> edge while I lay this out for you %EmoteSmile%");
    CMessage("There is one rule...");
    CMessage("%EmoteHer% You have edge and hold the edge whenever I say");
    CMessage("In return, I will be fair and not make you do anything that will cause you to come");
    CMessage("If you can hold back your orgasm until I decide that I\'ve been defeated, then you win %EmoteSmile%");
    CMessage("If you win, I will let you have a <i>real</i> orgasm before this session is over");
    CMessage("%EmoteHer% I won\'t deny you, I won\'t ruin you, I will let you come");
    CMessage("%EmoteSmile% And then I will let you come again, <i>any</i> time that you want");
    CMessage("%EmoteHer% But, if you come before I give up, if you go over the edge before I give in, I win");
    CMessage("And first, you have to ruin the orgasm that you weren\'t allowed to have anyway %EmoteSmile%");
    CMessage("But that should be expected, coming without permission is a no no, If I win...");
    CMessage("I get to work you back up and make you ruin another orgasm %EmoteHer%");
    CMessage("%EmoteSmile% And then I <i>will</i> deny you the next time I play with you");
	setVar("EREx",true);
    CMessage("So what do you think %Name%");
    let answer0 = getInput("Want to play my game?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteSmile% You should probably start stroking %Name%");
        run("Interrupt" + java.io.File.separator + "EdgeRoulette.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteSmile% I\'ll give you a free pass this time %Name%");
    }
    CMessage("But any time that you ask me to edge");
    CMessage("Keep my little torture roulette game in mind");
    CMessage("%EmoteSmile% I am so looking forward to playing it with you");
    CMessage("I might not give you a warning next time %EmoteHer%");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    return;
}