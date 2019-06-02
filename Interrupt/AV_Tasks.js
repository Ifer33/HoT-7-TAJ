main();
function main()
{
	DMessage("AV_Tasks Interrupt: Start");
    CMessage("%stopstroking%", 0);
    stopStroking();
    CMessage("Let\'s check those extra tasks");
    if(getVar("AV_taskOP1", false))
    {
        AV_taskOP1();
        return;
    }
    if(getVar("AV_taskOP2", false))
    {
        AV_taskOP2();
        return;
    }
    if(getVar("AV_taskOP3", false))
    {
        AV_taskOP3();
        return;
    }
    if(getVar("AV_taskOP4", false))
    {
        AV_taskOP4();
        return;
    }
    if(getVar("AV_taskOP5", false))
    {
        AV_taskOP5();
        return;
    }
    if(getVar("AV_taskOP6", false))
    {
        AV_taskOP6();
        return;
    }
    if(getVar("AV_taskOP7", false))
    {
        AV_taskOP7();
        return;
    }
    if(getVar("AV_taskOP8", false))
    {
        AV_taskOP8();
        return;
    }
    if(getVar("AV_taskOP9", false))
    {
        AV_taskOP9();
        return;
    }
    AV_taskOP1();
}
function AV_taskOP1()
{
    if(getVar("AV_task1_50", false))
    {
        CMessage("Remember %Slave% 50 strokes and edge");
    }
    if(getVar("AV_task1_80", false))
    {
        CMessage("Remember %Slave% 80 strokes and edge");
    }
    if(getVar("AV_task1_100", false))
    {
        CMessage("Remember %Slave% 100 strokes and edge");
    }
    if(getVar("AV_task1_200", false))
    {
        CMessage("Remember %Slave% 200 strokes and edge");
    }
    if(getVar("AV_task1_300", false))
    {
        CMessage("Remember %Slave% 300 strokes and edge");
    }
    CMessage("Go ahead, and tell me when you are done.");
    sleep(20);
    let answer0 = getInput("%EmoteSmile%");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("edged")))
    {
        answer0 = getInput("Are you done %PetName%?");
    }
    if (answer0.isLike("done", "yes", "edged"))
    {
        CMessage("Looks like you have completed your task today");
        delVar("AV_TaskON");
    }
    return;
    AV_taskOP2();
}
function AV_taskOP2()
{
	if(getVar("AV_task2_Fift", false))
    {
        AV_task2_Fift();
        return;
    }
	if(getVar("AV_task2_Forth", false))
    {
        AV_task2_Forth();
        return;
    }
	if(getVar("AV_task2_Third", false))
    {
        AV_task2_Third();
        return;
    }
	if(getVar("AV_task2_Second", false))
    {
        AV_task2_Second();
        return;
    }
    if(getVar("AV_task2_First", false))
    {
        AV_task2_First();
        return;
    }
    CMessage("First its time free, keep track of how long it takes to get there!");
    setVar("AV_task2_First", true);
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("How much time toke in seconds?");
    setVar("AV_task2_time1", createInput().getAnswer());
    CMessage("OK");
    CMessage("So, your actual record its " + getVar("AV_task2_time1", "") + "seconds");
    CMessage("And you own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    return;
    AV_task2_First();
}
function AV_task2_First()
{
    CMessage("%ContinueTask%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    let answer0 = getInput("Did you take less that " + getVar("AV_task2_time1", "") + "seconds?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        goodjob1();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, keep trying");
    }
    return;
    goodjob1();
}
function goodjob1()
{
    CMessage("Good job");
    setVar("AV_task2_EdgeCount", getVar("AV_task2_EdgeCount", 0) - 1);
    CMessage("We have a new record");
    delVar("AV_task2_time1");
    CMessage("How much time take in seconds?");
    setVar("AV_task2_time2", createInput().getAnswer());
    CMessage("Your new record is " + getVar("AV_task2_time2", "") + "seconds");
    CMessage("You still own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    CMessage("%AV_MoveOn%");
    setVar("AV_task2_Second", true);
    return;
    AV_task2_Second();
}
function AV_task2_Second()
{
    CMessage("%ContinueTask%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    let answer0 = getInput("Did you take less that " + getVar("AV_task2_time2", "") + "seconds?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        goodjob2();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, keep trying");
    }
    return;
    goodjob2();
}
function goodjob2()
{
    CMessage("Good job");
    setVar("AV_task2_EdgeCount", getVar("AV_task2_EdgeCount", 0) - 1);
    CMessage("We have a new record");
    delVar("AV_task2_time2");
    CMessage("How much time take in seconds?");
    setVar("AV_task2_time3", createInput().getAnswer());
    CMessage("Your new record is " + getVar("AV_task2_time3", "") + "seconds");
    CMessage("You still own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%AV_MoveOn%");
    setVar("AV_task2_Third", true);
    return;
    AV_task2_Third();
}
function AV_task2_Third()
{
    CMessage("%ContinueTask%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    let answer0 = getInput("Did you take less that " + getVar("AV_task2_time3", "") + "seconds?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        goodjob3();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, keep trying");
    }
    return;
    goodjob3();
}
function goodjob3()
{
    CMessage("Good job");
    setVar("AV_task2_EdgeCount", getVar("AV_task2_EdgeCount", 0) - 1);
    CMessage("We have a new record");
    delVar("AV_task2_time3");
    CMessage("How much time take in seconds?");
    setVar("AV_task2_time4", createInput().getAnswer());
    CMessage("Your new record is " + getVar("AV_task2_time4", "") + "seconds");
    CMessage("You still own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%AV_MoveOn%");
    setVar("AV_task2_Forth", true);
    return;
    AV_task2_Forth();
}
function AV_task2_Forth()
{
    CMessage("%ContinueTask%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    let answer0 = getInput("Did you take less that " + getVar("AV_task2_time4", "") + "seconds?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        goodjob4();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, keep trying");
    }
    return;
    goodjob4();
}
function goodjob4()
{
    CMessage("Good job");
    setVar("AV_task2_EdgeCount", getVar("AV_task2_EdgeCount", 0) - 1);
    CMessage("We have a new record");
    delVar("AV_task2_time4");
    CMessage("How much time take in seconds?");
    setVar("AV_task2_time5", createInput().getAnswer());
    CMessage("Your new record is " + getVar("AV_task2_time5", "") + "seconds");
    CMessage("You still own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%AV_MoveOn%");
    setVar("AV_task2_Fift", true);
    return;
    AV_task2_Fift();
}
function AV_task2_Fift()
{
    CMessage("%ContinueTask%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    let answer0 = getInput("Did you take less that " + getVar("AV_task2_time5", "") + "seconds?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        goodjob5();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("too bad, keep trying");
    }
    return;
    goodjob5();
}
function goodjob5()
{
    CMessage("Good job");
    setVar("AV_task2_EdgeCount", getVar("AV_task2_EdgeCount", 0) - 1);
    CMessage("We have a new record");
    delVar("AV_task2_time5");
    CMessage("How much time take in seconds?");
    setVar("AV_task2_time6", createInput().getAnswer());
    CMessage("Your new record is " + getVar("AV_task2_time6", "") + "seconds");
    CMessage("You still own me " + getVar("AV_task2_EdgeCount", "") + " edges below this record");
    CMessage("%AV_MoveOn%");
    if (getVar("AV_task2_EdgeCount", 0) == 0)
    {
        oops();
        return;
    }
    return;
    oops();
}
function oops()
{
    CMessage("Oops...");
    delVar("AV_task2_First");
    delVar("AV_task2_Second");
    delVar("AV_task2_Third");
    delVar("AV_task2_Forth");
    delVar("AV_task2_Fift");
    delVar("AV_task2_time1");
    delVar("AV_task2_time2");
    delVar("AV_task2_time3");
    delVar("AV_task2_time4");
    delVar("AV_task2_time5");
    delVar("AV_task2_time6");
    delVar("AV_task2_EdgeCount");
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    return;
    AV_taskOP3();
}
function AV_taskOP3()
{
    CMessage("So, you own me " + getVar("AV_EdgeGoal", "") + "edges");
    CMessage("You already give me " + getVar("AV_EdgeCount", "") + "edges");
    EdgeTask();
}
function EdgeTask()
{
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("%PetName%");
    setVar("AV_EdgeCount", getVar("AV_EdgeCount", 0) + 1);
    if (getVar("AV_EdgeCount", 0) == getVar("AV_EdgeGoal", 0))
    {
        Edge_Goal_Met();
        return;
    }
    setVar("AV_EdgeRemaining", getVar("AV_EdgeGoal", 0) - getVar("AV_EdgeCount", 0));
    CMessage("You still have " + getVar("AV_EdgeRemaining", "") + "to go %Grin%");
    let answer0 = getInput("Want to give me another?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        EdgeTask();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Okay%");
        Fim();
        return;
    }
    Fim();
}
function Fim()
{
    CMessage("I think that\'s enough for now");
    CMessage("%AV_MoveOn%");
    return;
    Edge_Goal_Met();
}
function Edge_Goal_Met()
{
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    CMessage("%AV_MoveOn%");
    return;
    AV_taskOP4();
}
function AV_taskOP4()
{
    CMessage("%Okay% %PetName% pick  1 of your favorite sexy videos.");
    CMessage("Remember to stroke through the entire thing.");
    CMessage("if you get close, take your hands off and pause the video. When you\'ve cooled down a little, press play and get back to stroking.");
    let answer0 = getInput("Go ahead, and tell me when you are done.");
    while (!(answer0.isLike("done") || answer0.isLike("yes")))
    {
        answer0 = getInput("Are you done %PetName%?");
    }
    if (answer0.isLike("done", "yes"))
    {
        CMessage("Looks like you have completed your task today");
        delVar("AV_TaskON");
    }
    return;
    AV_taskOP5();
}
function AV_taskOP5()
{
    CMessage("%Okay% %PetName%");
    CMessage("Try to edge with 200 of the slowest, most frustrating strokes you can.");
    CMessage("...NOW");
    sleep(30);
    CMessage("Hmm");
    CMessage("Don\'t mind me, I\'m just going to look through a few pictures while you %Stroke% %Grin%");
    //--Command:ShowLocalImage
	showLocalTeasePicture();
    Look_Again();
}
function Look_Again()
{
    getTeasePicture(3);
    if (randomInteger(1, 100) <= 70)
    {
        Look_Again();
        return;
    }
    let answer0 = getInput("Don\'t forget to tell me when you are done.");
    while (!(answer0.isLike("done") || answer0.isLike("yes")))
    {
        answer0 = getInput("Are you done %PetName%?");
    }
    if (answer0.isLike("done", "yes"))
    {
        CMessage("%Great%");
    }
    let answer1 = getInput("Did you managed to reach the edge with 200 slow strokes?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Yes or no %PetName%?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%Great%");
        OP5_Done();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("too bad");
        setVar("AV_EdgeCount", 0);
        EdgeOP5a();
        return;
    }
    EdgeOP5a();
}
function EdgeOP5a()
{
    CMessage("In this case, you own me " + getVar("AV_EdgeGoal", "") + "edges %Slave%");
    EdgeOP5();
}
function EdgeOP5()
{
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("%PetName%");
    setVar("AV_EdgeCount", getVar("AV_EdgeCount", 0) + 1);
    if (getVar("AV_EdgeCount", 0) == getVar("AV_EdgeGoal", 0))
    {
        OP5_Done();
        return;
    }
    setVar("AV_EdgeRemaining", getVar("AV_EdgeGoal", 0) - getVar("AV_EdgeCount", 0));
    CMessage("You still have " + getVar("AV_EdgeRemaining", "") + "to go %Grin%");
    EdgeOP5();
    return;
    OP5_Done();
}
function OP5_Done()
{
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    CMessage("%AV_MoveOn%");
    return;
    AV_taskOP6();
}
function AV_taskOP6()
{
    CMessage("%Okay% %PetName%");
    CMessage("Try to edge with the slowest, most frustrating strokes you can.");
    CMessage("Remember, you own me " + getVar("AV_EdgeGoal", "") + "edges %Slave%");
    EdgeOP6();
}
function EdgeOP6()
{
    CMessage("Now %Edge%");
	//startEdging();
    CMessage("Hmm");
    if (randomInteger(1, 100) <= 50)
    {
        OP6a();
        return;
    }
    CMessage("Don\'t mind me, I\'m just going to look through a few pictures while you %Stroke% %Grin%");
    //--Command:NewBlogImage
	showTeaseImage();
    Look_Again6();
}
function Look_Again6()
{
    getTeasePicture(3);
    if (randomInteger(1, 100) <= 50)
    {
        Look_Again6();
        return;
    }
    OP6NoMore();
    return;
    OP6a();
}
function OP6a()
{
    CMessage("Remember that perfect storm of your porn collection?");
    showTaggedImage(4, ["boobs"]);
    showTaggedImage(4, ["femdom"]);
    CMessage("%EmoteLaugh%");
    showTaggedImage(4, ["softcore"]);
    OP6NoMore();
}
function OP6NoMore()
{
    let answer0 = getInput("Don\'t forget to tell me when you edged.");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("edge") || answer0.isLike("edged")))
    {
        answer0 = getInput("Did you edged %PetName%?");
    }
    if (answer0.isLike("done", "yes", "edge", "edged"))
    {
        CMessage("%Great%");
        setVar("AV_EdgeCount", getVar("AV_EdgeCount", 0) + 1);
        if (getVar("AV_EdgeCount", 0) == getVar("AV_EdgeGoal", 0))
        {
            OP6_Done();
            return;
        }
    }
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    setVar("AV_EdgeRemaining", getVar("AV_EdgeGoal", 0) - getVar("AV_EdgeCount", 0));
    CMessage("You still have " + getVar("AV_EdgeRemaining", "") + "to go %Grin%");
    //setVar("AV_EdgeCount", 0);
    EdgeOP6();
    return;
    OP6_Done();
}
function OP6_Done()
{
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    CMessage("%AV_MoveOn%");
    return;
    AV_taskOP7();
}
function AV_taskOP7()
{
    CMessage("%Okay% %PetName%");
    CMessage("First, you need to give me " + getVar("AV_EdgeGoal", "") + "edges");
    EdgeOP7();
}
function EdgeOP7()
{
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("%PetName%");
    setVar("AV_EdgeCount", getVar("AV_EdgeCount", 0) + 1);
    if (getVar("AV_EdgeCount", 0) == getVar("AV_EdgeGoal", 0))
    {
        OP7_CBT();
        return;
    }
    setVar("AV_EdgeRemaining", getVar("AV_EdgeGoal", 0) - getVar("AV_EdgeCount", 0));
    CMessage("You still have " + getVar("AV_EdgeRemaining", "") + "to go %Grin%");
    EdgeOP7();
    return;
    OP7_CBT();
}
function OP7_CBT()
{
    CMessage("Now, the fun part");
    CMessage("start slapping that sensitive little cock head until you\'re completely soft.");
    sleep(10);
    CMessage("So %Evil%");
    let answer0 = getInput("Go ahead, and tell me when you are done.");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("soft")))
    {
        answer0 = getInput("Are you soft %PetName%?");
    }
    if (answer0.isLike("done", "yes", "soft"))
    {
        CMessage("%Lol%");
        OP7_Done();
        return;
    }
    OP7_Done();
}
function OP7_Done()
{
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    CMessage("%AV_MoveOn%");
    return;
    AV_taskOP8();
}
function AV_taskOP8()
{
    CMessage("%Okay% %PetName%");
    CMessage("You task is to edge " + getVar("AV_EdgeReal", "") + "times and hold the last one");
    CMessage("And you will repeat this " + getVar("AV_EdgeRepeat", "") + "times");
    EdgeOP8();
}
function EdgeOP8()
{
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("%PetName%");
    setVar("AV_EdgeCount", getVar("AV_EdgeCount", 0) + 1);
    if (getVar("AV_EdgeCount", 0) == getVar("AV_EdgeGoal", 0))
    {
        OP8_EDGEHold();
        return;
    }
	CMessage("%stopstrokingedge%", null, false);
    CMessage("%LetTheEdgeFade%");
    setVar("AV_EdgeRemaining", getVar("AV_EdgeGoal", 0) - getVar("AV_EdgeCount", 0));
    EdgeOP8();
    return;
    OP8_EDGEHold();
}
function OP8_EDGEHold()
{
    holdEdge();
    setVar("AV_EdgeTimes", getVar("AV_EdgeTimes", 0) + 1);
    if (getVar("AV_EdgeTimes", 0) == getVar("AV_EdgeRepeat", 0))
    {
        OP8_Done();
        return;
    }
    CMessage("%LetTheEdgeFade%");
    setVar("AV_EdgeTimeRemaining", getVar("AV_EdgeRepeat", 0) - getVar("AV_EdgeTimes", 0));
    CMessage("You still have " + getVar("AV_EdgeTimeRemaining", "") + "cicles to go %Grin%");
    let answer0 = getInput("Want to give me another serie?");
    setVar("AV_EdgeCount", 0);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        EdgeOP8();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Okay%");
        Fim8();
        return;
    }
    Fim8();
}
function Fim8()
{
    CMessage("I think that\'s enough for now");
    CMessage("%AV_MoveOn%");
    return;
    OP8_Done();
}
function OP8_Done()
{
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    delVar("AV_EdgeCount");
    delVar("AV_EdgeGoal");
    delVar("AV_EdgeRemaining");
    delVar("AV_EdgeRepeat");
    delVar("AV_EdgeTimeRemaining");
    delVar("AV_EdgeTimes");
    CMessage("%AV_MoveOn%");
    return;
    AV_taskOP9();
}
function AV_taskOP9()
{
    CMessage("%Okay% %PetName%");
    CMessage("So, 10 minutes of %Stroking% and edging, huh?");
    CMessage("%EmoteMoan%");
    CMessage("Your timer " + "...Now");
	Stroking();	
    CMessage("Long way to go");
    sleep(50);
    CMessage("Check out this picture I found earlier");
    showTeaseImage();
    sleep(10);
    CMessage("Keep going");
    sleep(50);
    CMessage("I wonder what was going through your head when you saved this one %Grin%");
    //--Command:ShowLocalImage
	showCategoryImage();
	//getTeasePicture(3);
    sleep(30);
    CMessage("3 minutes in");
    sleep(30);
    CMessage("%Smile%");
    showTaggedImage(4, ["femdom"]);
    sleep(10);
    CMessage("I will check something here... keep %Stroking%");
    sleep(50);
    CMessage("Fuck... I don\'t know who aches more looking at this, me or you %Lol%");
    showTaggedImage(4, ["lesbian"]);
    sleep(10);
    CMessage("Almost half way");
    sleep(50);
    CMessage("So this is the kind of girl you really want me to be huh? %Grin%");
    showTaggedImage(4, ["captions"]);
    sleep(20);
    CMessage("Can you continue with our session after that?");
    sleep(30);
    CMessage("I wonder if this makes the ache worse for you");
    showTeaseImage();
    sleep(10);
    CMessage("Where is my clock?");
    sleep(50);
    CMessage("%Ache% for me");
    sleep(60);
    CMessage("%Smile%");
    //--Command:ShowLocalImage
	showCategoryImage();
    sleep(30);
    CMessage("It turns me on so much knowing what I can do to you");
    sleep(30);
    CMessage("Almost there...keep going");
    sleep(50);
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Looks like you have completed your task today");
    delVar("AV_TaskON");
    CMessage("%AV_MoveOn%");
    return;
}