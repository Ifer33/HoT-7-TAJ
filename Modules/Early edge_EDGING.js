DMessage("Early edge_EDGING: Beginnning");
main();
DMessage("Early edge_EDGING: End");
function main()
{
    //--Command:DecideEdge		//just stop edging
	decideEdge();
    //setVar("edgingmode", "Normal");
	setEdgeMode("Normal");
	//let tmp = getVar("AV_SessionTime");
	//if( tmp.addMinute(60).hasPassed() ) {
	if( getVar("AV_SessionTime").addMinute(60).hasPassed() ) {	//manipulates the var
	//if( getTimePassed("AV_SessionTime")>= 60 ) {
		DMessage("Early edge: 60min passed");
		DMessage(getVar("AV_SessionTime") );	//.addMinute(60).hasPassed());
		if(chance(30) ) AV_FreePass();
	}
	return;
    CMessage(random("We seriously have to bring your stamina back on track ", "I don\'t think I authorized you to edge ") + random("%PetName%", "%SubName%"));
    setVar("pthevEdgesToday", getVar("pthevEdgesToday", 0) + 1);
    setVar("AV_UserEdges", getVar("AV_UserEdges", 0) + 1);
    if (getVar("pthevEdgesToday", 0) == 1)
    {
        first_edge_today();
        return;
    }
    if (randomInteger(1, 100) <= 30)
    {
        DommeBrava();
        return;
    }
    passa();
	DMessage("Early edge: End_AV_Script");
    return;
}
function DommeBrava()
{
    increaseAnger(3)
    passa();
}
function passa()
{
    if (getVar("pthevEdgesToday", 0) == 2)
    {
        second_edge_today();
        return;
    }
    if (getVar("pthevEdgesToday", 0) == 3)
    {
        third_edge_today();
        return;
    }
    if (getVar("pthevEdgesToday", 0) > 3)
    {
        fourth_edge_today();
        return;
    }
    return;
}
function first_edge_today()
{
    run("Custom" + java.io.File.separator + "Edging" + java.io.File.separator + "First.js");
    if (randomInteger(1, 100) <= 80)
    {
        NoEBreak();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_EdgeBreak.js");
    return;
}
function NoEBreak()
{
    run("Modules" + java.io.File.separator + "*.js");
    return;
}
function second_edge_today()
{
    if (randomInteger(1, 100) <= 50)
    {
        RND();
        return;
    }
    run("Custom" + java.io.File.separator + "Edging" + java.io.File.separator + "Second.js");
    if(getVar("AV_RuinHorny", false))
    {
        AV_RuinHorny();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        WantToRuin();
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
}
function third_edge_today()
{
	if(getVar("pvMadeKeyholder", false))
    {
        if (randomInteger(1, 100) <= 40)
        {
            putting_you_in_chastity();
            return;
        }
    }
    if (randomInteger(1, 100) <= 40)
    {
        RND();
        return;
    }
    run("Custom" + java.io.File.separator + "Edging" + java.io.File.separator + "Third.js");
    if(getVar("AV_RuinHorny", false))
    {
        AV_RuinHorny();
        return;
    }
    if (randomInteger(1, 100) <= 50)
    {
        WantToRuin();
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
}
function fourth_edge_today()
{
    if (randomInteger(1, 100) <= 50)
    {
        RND();
        return;
    }
    run("Custom" + java.io.File.separator + "Edging" + java.io.File.separator + "Fourth.js");
    if(getVar("AV_RuinHorny", false))
    {
        AV_RuinHorny();
        return;
    }
    if (randomInteger(1, 100) <= 80)
    {
        WantToRuin();
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
}
function RND()
{
    CMessage("We really need to work on your stamina");
    switch(random("punishment", "moreedge", "pins"))
    {
        case "punishment":
        punishment();
        return;
        break;
        case "moreedge":
        moreedge();
        return;
        break;
        case "pins":
        pins();
        return;
        break;
    }
    return;
}
function moreedge()
{
    CMessage("Let\'s start by another edge!");
	holdEdge();
    CMessage("Now I\'ll keep you there a while longer %Grin%");
    CMessage("Get to the edge");
    holdEdge();
    CMessage("And now the real deal...");
    CMessage("Let\'s see if you can survive a chain of edges %Grin%");
    //--Command:GotoDommeApathy
	DMessage("Early edge: decide Apathy");
	/*let aLevel = getApathyLevel();
	if(aLevel<=2 ){
		ApathyLevel1();
	}else if(aLevel<=4 ){
		ApathyLevel2();
	}else if(aLevel<=6 ){
		ApathyLevel3();
	}else if(aLevel<=8 ){
		ApathyLevel4();
	}else {
		ApathyLevel5();
	}*/
	jumpOldApathy();
}
function ApathyLevel1()
{
	DMessage("Early edge: Apathy1");
    CMessage("Go on, edge for me");
    holdEdge();
    CMessage("Another one right away");
    holdEdge();
    edging_done();
    return;
}
function ApathyLevel2()
{
	DMessage("Early edge: Apathy2");
    CMessage("Go on, edge for me");
    holdEdge();
    CMessage("Another one right away");
    holdEdge();
    edging_done();
    return;
}
function ApathyLevel3()
{
	DMessage("Early edge: Apathy3");
    CMessage("Go on, edge for me");
    holdEdge();
    CMessage("Another one right away");
    holdEdge();
    CMessage("An another one! %Grin%");
    holdEdge();
    edging_done();
    return;
}
function ApathyLevel4()
{
	DMessage("Early edge: Apathy4");
    CMessage("Go on, edge for me");
    holdEdge();
    CMessage("Another one right away");
    holdEdge();
    CMessage("An another one! %Grin%");
    holdEdge();
    CMessage("Just to make sure let\'s do a fourth...");
    holdEdge();
    edging_done();
    return;
}
function ApathyLevel5()
{
	DMessage("Early edge: Apathy5");
    CMessage("Go on, edge for me");
    holdEdge();
    CMessage("Another one right away");
    holdEdge();
    CMessage("An another one! %Grin%");
    holdEdge();
    CMessage("Just to make sure let\'s do a fourth...");
    holdEdge();
	CMessage("Did you think I would stop there? Get to the edge again %PetName%!");
    holdEdge();
    CMessage("Starting to learn to control that cock?");
    CMessage("To make sure give me another edge!");
    holdEdge();
    edging_done();
    return;
}
function edging_done()
{
    let answer0 = getInput("Still alive %PetName%?", 5);
    if (answer0.isLike("yes"))
    {
        CMessage("Good, you would be no fun to me otherwise %lol%");
    }
    else
    {
        CMessage("Well you seem alive enough to me %lol%");
    }
    let answer1 = getInput("Did you make it without cumming?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Did you resist cumming or not?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("You see you can restrain yourself when you put your mind to it! %Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("I guess you will need a lot more training... %EmoteSad%");
        punishment();
        return;
    }
    CMessage("Enough training for now");
    run("Modules" + java.io.File.separator + "*.js");
    return;
}
function punishment()
{
    CMessage("But first we need to punish that %Cock%! %Grin%");
    //run("CBT" + java.io.File.separator + "CBTCock_First.js");
	cbt("cock");
    CMessage("That will teach it some control %lol%");
    return;
}
function pins()
{
    run("Interrupt" + java.io.File.separator + "AV_Pins.js");
    return;
}
function AV_RuinHorny()
{
    CMessage("I guess no amount of punishment is going to keep you from edging today %Laugh%");
    return;
}
function WantToRuin()
{
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_WantToRuin.js");
    return;
}
function AV_FreePass()
{
    CMessage("Since we are in a long session, I will " + random("permit ", "allow ") + "you " + random("to pass that unauthorized edge ", "a free pass ") + "%SubName%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    //Make you do some stamina training or CBT if you edge too early
}
function putting_you_in_chastity()
{
    CMessage("So many edges without permission %GeneralTime%");
    CMessage("It seems you can\'t handle it, %Name%");
    CMessage("So you leave me no choice...");
    CMessage("I\'m going to have to put you in chastity");
    setTempVar("pvNotWantChastityOn", true);
    //--Command:InterruptsOff
    //CMessage("%PutChastity%");
    CMessage(random("I want it locked away", "I don\'t want you to play with it anymore"));
	run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
    /*let answer0 = getInput("Let me know when you\'re ready to continue");
    while (true)
    {
        
		if (answer0.isLike("ready", "done", "finished"))
		{
			CMessage(random("Good", "Alright", "Okay"));
			break;
		}
		else if (answer0.isLike("yes"))
		{
			answer0 = getInput("I\'m waiting...");
			//--Command:LoopAnswer
		}
		else if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you\'re ready");
			//--Command:LoopAnswer
		}
		else if (answer0.isLike("to", "to", "that", "that", "me", "me"))
		{
			run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_NotWantChastityOn.js");
		}else {
			answer0 = getInput("Let me know when you\'re ready");
		}
	}*/
    CMessage("You won\'t be doing any more edges for a while %Smile%");
    //--Command:ChastityOn
    delVar("pvNotWantChastityOn");
    //--Command:InterruptsOn
    return;
    //Make you do some stamina training or CBT if you edge too early
}

	