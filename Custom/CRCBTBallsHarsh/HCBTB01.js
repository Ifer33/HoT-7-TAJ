DMessage("HCBTB01: Beginning");
main();
DMessage("HCBTB01: End");
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
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
    CMessage("Let\'s make this hurt... a lot, %PetName%");
    if(getVar("pvSpoon", false))
    {
        CMessage("Get the wooden spoon and hurry up a little will you...");
    }
    if(getVar("pvSpoon", false))
    {
        CMessage("You really should have it ready to use all the time");
    }
    CMessage("%StartStroking%");
    CMessage("Just because it\'s gonna hurt doesn\'t mean it can\'t also feel good %Smile%");
    //--Command:CustomMode(%pvDontWantTo%,Goto,do not want)
    CMessage("Keep stroking at a medium pace");
    CMessage("You\'re going to smack your %Balls% 5 times, get ready...");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,do not want)
    setRapidText(true);
    CMessage("One...");
    CMessage("Two...");
    CMessage("Three...");
    CMessage("Four...");
    CMessage("Five...");
    setRapidText(false);
    CMessage("Stroke a little bit faster now");
    CMessage("Let\'s do " + random("5 more slaps", "another five smacks", "that one more time"));
    setRapidText(true);
    CMessage("One...");
    CMessage("Two...");
    CMessage("Three...");
    CMessage("Four...");
    CMessage("Five...");
    setRapidText(false);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    CMessage("Isn\'t it nice to " + random("have some pain with your pleasure ", "mix pleasure and pain like that ", "feel some pleasure after hurting yourself ") + "%Laugh%");
    CMessage("Start stroking very slowly, I don\'t want you to edge again right away");
    CMessage(random("First we have going to have to ", "Not before we ", "Before we get to that you will first have to ") + random("hurt ", "bust ", "smack ") + "those %Balls% some more %Grin%");
    CMessage("Let\'s do a series of 10 smacks this time, wait for me to count them");
    CMessage("Get ready...");
    setRapidText(true);
    CMessage("One");
    CMessage("Two");
    CMessage("Three");
	sleep(1);
    CMessage("Four");
	sleep(1);
    CMessage("Five");
	sleep(1);
    CMessage("Six");
    CMessage("Seven");
    CMessage("Eight");
	sleep(1);
    CMessage("Nine...");
	sleep(2);
    CMessage("Ten!");
    setRapidText(false);
    holdEdge();
    CMessage(random("Of course ", "And yes ", "Now obviously ") + "we " + random("are gonna have to ", "are going to ", "will have ") + "do that series " + random("again ", "a second time ") + "as well %Grin%");
    CMessage("Get ready...");
    setRapidText(true);
    CMessage("One");
    CMessage("Two");
    CMessage("Three");
    CMessage("Four");
    CMessage("Five");
    CMessage("Six");
    CMessage("Seven");
    setRapidText(false);
    CMessage("Eight...");
    CMessage("Nine...");
    CMessage("TEN!");
    CMessage("Good %PetName%, keep stroking");
    //--Command:CustomMode(%pvNeedABreak%,Normal)
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    holdEdge();
    CMessage("That\'s enough of that for now");
    if(getVar("pvSpoon", false))
    {
        CMessage("You can put the spoon down, but keep it close");
    }
    CMessage("You\'ve suffered enough for the moment, but you never know... %Grin%");
    return;
    do_not_want();
}
function do_not_want()
{
    CMessage("Alright, I\'ll let this one go, but I\'m not happy about it");
    //--Command:MoodWorst
	setMood("worst");
    //--Command:CustomMode(%pvNeedABreak%,Normal)
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    CMessage("So you better <i>make</i> me happy in the remainder of this session, %PetName%");
    return;
}