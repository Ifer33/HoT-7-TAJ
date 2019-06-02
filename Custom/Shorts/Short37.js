DMessage("Short37: start");
main();
DMessage("Short37: end");
function main()
{
    CMessage("I am your mistress, but I am not in service to you");
    setTempVar("AV_Short37", true);
    CMessage("you are in service to me.");
    CMessage("And when you want pleasure, you must ask for it.");
    CMessage("When you say please, you are giving control of your pleasure to me");
    CMessage("and you know that giving control over to me, will make your pleasure even stronger.");
    CMessage("This is a powerful truth worth repeating for you %PetName%.");
    CMessage(random("Giving control to me will make your pleasure stronger", "I am your Mistress", "Let me be in command of you"));
    answero=getInput("If you want something from me, you must say \'please\'",5);
	if(answero.isLike("please")){
		SaidPlease();
		return;
	}
    //--Command:CustomMode(please,Goto,SaidPlease)
    answero=getInput("and hope you\'ve been a good enough subject for me to give it to you.",5);
	if(answero.isLike("please")){
		SaidPlease();
		return;
	}
    //--Command:CustomMode(please,Normal)
    return;
    SaidPlease();
}
function SaidPlease()
{
    CMessage("Mmmmm... I love to hear you say it.");
    //--Command:CustomMode(please,Goto,SaidPlease2)
	answero=getInput("Say it again",5);
	if(answero.isLike("please")){
		SaidPlease2();
		return;
	}
	answero=getInput("Fine %SubName%",5);
	if(answero.isLike("please")){
		SaidPlease2();
		return;
	}
    //--Command:CustomMode(please,Normal)
    return;
    
    SaidPlease2();
}
function SaidPlease2()
{
    CMessage("Did your body shudder a little?")
	//@CustomMode(please,Normal)
    CMessage("It knows what it needs.");
    increaseAnger(-3)
    CMessage("It needs to submit to me.");
    CMessage("But we\'re not there yet.");
    return;
}