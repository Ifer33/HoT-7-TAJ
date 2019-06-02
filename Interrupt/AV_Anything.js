DMessage("AV_Anything: start");
main();
DMessage("AV_Anything: end");
function main()
{
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("Anything? Hmmm...");
    CMessage("Let me test that.");
    switch(random("HoldEdge", "kneel", "Basic", "Stand", "MuEdge", "slave", "chastity"))
    {
        case "HoldEdge":
        HoldEdge();
        return;
        break;
        case "kneel":
        kneel();
        return;
        break;
        case "Basic":
        Basic();
        return;
        break;
        case "Stand":
        Stand();
        return;
        break;
        case "MuEdge":
        MuEdge();
        return;
        break;
        case "slave":
        slave();
        return;
        break;
        case "chastity":
        chastity();
        return;
        break;
    }
    MuEdge();
}
function MuEdge()
{
    CMessage("You will edge you over and over again continuously, without any breaks.");
    edge("%Edge%");
    CMessage("Let\'s see if I can reach that point %Grin%");
    //--Command:GotoDommeApathy
	jumpOldApathy();
	return;
    ApathyLevel5();
}
function ApathyLevel5()
{
    edge("%Edge%");
    CMessage("And another one right away");
    edge();
    ApathyLevel4();
	return;
}
function ApathyLevel4()
{
    edge("%Edge%");
    ApathyLevel3();
	return;
}
function ApathyLevel3()
{
    edge("%Edge%");
    ApathyLevel2();
	return;
}
function ApathyLevel2()
{
    edge("%Edge%");
    ApathyLevel1();
	return;
}
function ApathyLevel1()
{
    edge("%Edge%");
    CMessage("Enough %Slave%");
    return;
    HoldEdge();
}
function HoldEdge()
{
    CMessage("I will keep you %Writhing% %NearTheEdge% continuously, without any breaks, for a while %Grin%");
    holdEdge();
    //CMessage("sleep(60)");
    return;
    kneel();
}
function kneel()
{
    CMessage("You know what I find %Hot%?");
    CMessage("Seeing you kneeling for me! %Grin%");
    CMessage("%KneelForMe%");
    //setTempVar("AV_SubKnees", true);
    return;
    Basic();
}
function Basic()
{
    CMessage("You will now get into the Basic Position for 5 minutes (check the clock)");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
	sleep(300);
    //unlockImages();
    return;
    Stand();
}
function Stand()
{
    CMessage("You will now get into the Stand Position for 5 minutes (check the clock)");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
	sleep(300);
    //unlockImages();
    return;
    slave();
}
function slave()
{
	setTempVar("AV_Mistress_promise",true);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");//, promise)
    return;
    return;
    chastity();
}
function chastity()
{
    if(getVar("pvMadeKeyholder", false))
    {
        PutChastity();
        return;
    }
	setTempVar("AV_ChastityTalk_AV_HaveChast",true);
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_ChastityTalk.js");//, AV_HaveChast)
    return;
    PutChastity();
}
function PutChastity()
{
    switch(random("Chast01", "Chast02"))
    {
        case "Chast01":
        Chast01();
        return;
        break;
        case "Chast02":
        Chast02();
        return;
        break;
    }
    Chast01();
	return;
}
function Chast01()
{
    CMessage("Now, %Name%...");
    CMessage(random("There is something you need to do ", "I want you to do something ") + "for me");
    CMessage("Go get your chastity cage");
    setTempVar("pvNotWantChastityOn", true);
    //--Command:InterruptsOff
    CMessage("%PutChastity%");
    CMessage(random("You will wear it ", "It stays on ") + "until I " + random("decide ", "say ") + "otherwise, %PetName%");
    CMessage("No more %JerkingOff% for you");
    CMessage("You do that way too much anyway...");
    let answer0 = getInput("Are you ready?");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("finished") ))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you are ready, %PetName%");
		}else{
			answer0 = getInput("%YesOrNo%");
		}
    }
    if (answer0.isLike("yes", "ready", "done", "finished"))
    {
        CMessage("Good");
    }
    CMessage("Don\'t you feel much better when you\'re caged? %Grin%");
    //--Command:ChastityOn
	setVar("chastityOn",true);
    delVar("pvNotWantChastityOn");
    //--Command:InterruptsOn
    return;
    Chast02();
}
function Chast02()
{
    CMessage("Let your %Cock% go soft now, %PetName%");
    setTempVar("pvLink31GoSoft", true);
    CMessage("I don\'t care how you do it");
    CMessage("As long as you do it right now");
    sleep(8);
    CMessage("Slap it, pinch it, put cold water on it...");
    CMessage("That\'s probably the best way, right?");
    CMessage("Dunking your %Balls% in ice water, sounds fun %Laugh%");
    let answer0 = getInput("Is my %Cock% soft and ready for its cage?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good");
        soft_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Do whatever it takes, %Name%");
    }
    CMessage("And don\'t tell me you can\'t do it");
    CMessage("I don\'t care");
    CMessage("If I want it, you <i>will</i> do it");
    CMessage("Do some summersaults, run up and down the stairs");
    CMessage("Whatever it takes, get it soft and limp");
    let answer1 = getInput("Ready?");
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("soft") || answer1.isLike("limp") || answer1.isLike("no")))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("Let me know when you are ready");
		}else{
			answer1 = getInput("Is your %Cock% soft?");
		}
    }
    if (answer1.isLike("yes", "ready", "done", "soft", "limp"))
    {
        CMessage("Okay");
    }
    CMessage("I know it\'s not always easy to do, %SubName%");
    soft_now();
}
function soft_now()
{
    CMessage("It\'s kind of impressive that you could get it down at all...");
    CMessage("Now...");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
    CMessage("Let\'s see how much frustration we can build up in those %Balls% %Grin%");
    //--Command:ChastityOn
	setVar("chastityOn",true);
    return;
}