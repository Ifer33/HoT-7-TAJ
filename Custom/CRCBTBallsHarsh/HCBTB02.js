DMessage("HCBTB02: Beginning");
main();
DMessage("HCBTB02: End");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("pvBallsTied", false))
    {
        already_tied();
        return;
    }
    if(!getVar("pthevShoelace", false))
    {
        already_tied();
        return;
    }
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    already_tied();
}
function already_tied()
{
    if(getVar("pvSpoon", false))
    {
        CMessage("Make sure you have the wooden spoon ready");
    }
    if(getVar("pvSpoon", false))
    {
        CMessage("You we\'re probably already hoping to use it you little painslut... %Lol%");
    }
    CMessage("I want my cock hard as a rock right now, so...");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "Strokes.js");
	customTask("Strokes");
    CMessage("Now, about those %Balls%...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("If only I were there with you to kick you in the %Balls%");
    CMessage("Don\'t let my innocent looks deceive you, I wouldn\'t hold back");
    CMessage("Make a fist, %PetName%");
    //--Command:CustomMode(%pvDontWantTo%,Goto,do not want)
    CMessage("Yes, you\'re going to punch them");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,do not want)
    CMessage("Hold out that clenched fist about two feet from my %Balls%");
    CMessage("I\'m going to count down from 3 to zero and at zero you\'re going to punch my %Balls% hard");
    CMessage("3...");
    CMessage("2...");
    CMessage("1...");
    CMessage("ZERO! PUNCH!");
    CMessage("Oooh that must have hurt %Lol%");
    CMessage("We\'re going to do that again, %PetName%");
    CMessage("Get ready...");
    CMessage("THREE");
    CMessage("TWO");
    CMessage("ONE...");
    CMessage("ZERO! PUNCH THEM HARD!");
    CMessage("Good little painslut, I want one more punch from you");
    CMessage("And I want this one to be the hardest of the three, so don\'t chicken out");
    CMessage("Here we go...");
    CMessage("3...");
    CMessage("2...");
    CMessage("1...");
    CMessage("ZERO and PUNCH IT FUCKING HARD!");
    CMessage("Good boy %Smile%");
    //--Command:CustomMode(%pvNeedABreak%,Normal)
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    if(getVar("pvBallsTied", false))
    {
        CMessage("You can untie you %Balls% now");
        delVar("pvBallsTied");
    }
    CMessage("Gently rub those poor things, becaue they look they could use some lovin\' %Grin%");
    return;
    do_not_want();
}
function do_not_want()
{
    CMessage("What, you\'re afraid of a little pain now??");
    setMood("worst");
	//--Command:MoodWorst
    //--Command:CustomMode(%pvNeedABreak%,Normal)
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    CMessage("When did you become such a fucking pussy, %PetName%");
    CMessage("I guess that <i>being</i> a pussy is the reason you're not <i>getting</i> any pussy... %Lol%");
    return;
}