DMessage("AV_Task5: start");
main();
DMessage("AV_Task5: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP5", true);
    if (getApathyLevel <= 2)
    {
        dommeLevel1();
        return;
    }
    else if (getApathyLevel <= 4)
    {
        dommeLevel2();
        return;
    }
    else if (getApathyLevel <= 6)
    {
        dommeLevel3();
        return;
    }
    else if (getApathyLevel <= 8)
    {
        dommeLevel4();
        return;
    }
    else if (getApathyLevel <= 10)
    {
        dommeLevel5();
        return;
    }
    DommeLevel1();
}
function DommeLevel1()
{
    CMessage("I love knowing that you\'re so desperate for me that even the slightest touch could set that %Cock% off so your task today is  going to put that to the test.");
    CMessage("You\'re going to give 200 of the slowest, most frustrating strokes you can.");
    setVar("AV_EdgeGoal", 5);
    CMessage("If you manage to reach the edge, then I know you\'re exactly as desperate as I want you to be and the task is complete.");
    CMessage("But! If you can\'t reach the edge, then you need to make yourself suffer and build up that ache even more for me.");
    CMessage("5 edges before the end of the session should do the trick %Grin%");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I love knowing that you\'re so desperate for me that even the slightest touch could set that %Cock% off, so your task today is  going to put that to the test.");
    CMessage("You\'re going to give 200 of the slowest, most frustrating strokes you can.");
    setVar("AV_EdgeGoal", 6);
    CMessage("If you manage to reach the edge, then I know you\'re exactly as desperate as I want you to be and the task is complete.");
    CMessage("But! If you can\'t reach the edge, then you need to make yourself suffer and build up that ache even more for me.");
    CMessage("6 edges before the end of the session should do the trick %Grin%");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("I love knowing that you\'re so desperate for me that even the slightest touch could set that %Cock% off, so your task today is  going to put that to the test.");
    CMessage("You\'re going to give 200 of the slowest, most frustrating strokes you can.");
    setVar("AV_EdgeGoal", 7);
    CMessage("If you manage to reach the edge, then I know you\'re exactly as desperate as I want you to be and the task is complete.");
    CMessage("But! If you can\'t reach the edge, then you need to make yourself suffer and build up that ache even more for me.");
    CMessage("7 edges before the end of the session should do the trick %Grin%");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("I love knowing that you\'re so desperate for me that even the slightest touch could set that %Cock% off, so your task today is  going to put that to the test.");
    CMessage("You\'re going to give 200 of the slowest, most frustrating strokes you can.");
    setVar("AV_EdgeGoal", 8);
    CMessage("If you manage to reach the edge, then I know you\'re exactly as desperate as I want you to be and the task is complete.");
    CMessage("But! If you can\'t reach the edge, then you need to make yourself suffer and build up that ache even more for me.");
    CMessage("8 edges before the end of the session should do the trick %Grin%");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("I love knowing that you\'re so desperate for me that even the slightest touch could set that %Cock% off, so your task today is  going to put that to the test.");
    CMessage("You\'re going to give 200 of the slowest, most frustrating strokes you can.");
    setVar("AV_EdgeGoal", 10);
    CMessage("If you manage to reach the edge, then I know you\'re exactly as desperate as I want you to be and the task is complete.");
    CMessage("But! If you can\'t reach the edge, then you need to make yourself suffer and build up that ache even more for me.");
    CMessage("10 edges before the end of the session should do the trick %Grin%");
    TaskReady();
    return;
    TaskReady();
}
function TaskReady()
{
    CMessage("Now take that %Cock% out of your pants");
    //CMessage("And %StartStroking% for me");
    Stroking();
    return;
}