DMessage("HCBTB03: Beginning");
main();
DMessage("HCBTB03: End");
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    if(getVar("pvBallsTied", false))
    {
        CMessage("Untie your %Balls%");
    }
    CMessage("Pain is a funny thing, %PetName%");
    CMessage("Your body is telling you something\'s wrong an yet you crave it somehow");
    CMessage("You want it so badly yet as soon as it starts you want it to stop...");
    CMessage("That\'s why I like hurting you so much");
    CMessage("I love knowing how much it confuses that submissive little brain of yours %Grin%");
    if(getVar("pvKneeling", false))
    {
        CMessage("You can sit down now");
        delVar("pvKneeling");
    }
    CMessage("Slide forward on your chair so those poor %Balls% are hanging free and exposed");
    CMessage("Here\'s what I want you to do right now...");
    CMessage("Squeeze your %Balls%");
    CMessage("Then let go and immediately slap them with the same hand in one continuous motion");
    CMessage("Do it again: squeeze, let go, slap");
    CMessage("Let your hand rest on your thigh now");
    CMessage("I\'m going to make you do a series of ten of those");
    CMessage("Each one should be a tighter squeeze and a harder slap than the last");
    CMessage("So your better start gently if you want those %Balls% to survive");
    CMessage("Do it right now, %PetName%");
    CMessage("Squeeze, let go, slap... 10 times");
    CMessage("Each one should take only a few seconds");
    CMessage("And each one should be tighter and harder than the last");
    CMessage("I hope you\'ve finished that series of 10, because the next one is coming up");
    CMessage("Try to speed up this time");
    CMessage("Ready...");
    CMessage("Set...");
    CMessage("Go!");
    CMessage("Squeeze, let go, SLAP! %Grin%");
    CMessage("Faster, %PetName%");
    CMessage("I\'m going to make you do one more series of ten...");
    CMessage("Get ready...");
    CMessage("GO!");
    CMessage("And again, squeeze, let to, SLAP!");
    CMessage("It\'s all in the motion of the wrist");
    CMessage("Now when you\'re done with that series of 10...");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    if(getVar("pthevShoelace", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    }
    CMessage("I\'m not done with your %Balls% yet...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("That\'s enough torture for those poor %Balls% for now");
    return;
}