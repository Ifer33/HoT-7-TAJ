DMessage("AV_Task8: start");
main();
DMessage("AV_Task8: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP8", true);
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
    CMessage("I want that %Cock% to drive you crazy all night long while you\'re trying to sleep, so I think you need to hold some edges for me %Grin%");
    setVar("AV_EdgeRepeat", 1);
    CMessage("I want you to edge yourself 3 times, and on the last time you get to hold it.");
    setVar("AV_EdgeGoal", 2);
    CMessage("Then stop and calm down.");
	CMessage("I want you to do this all over again 1 more time.");
    setVar("AV_EdgeReal", 4);
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I want that %Cock% to drive you crazy all night long while you\'re trying to sleep, so I think you need to hold some edges for me %Grin%");
    setVar("AV_EdgeRepeat", 1);
    CMessage("I want you to edge yourself 4 times, and on the last time you get to hold.");
    setVar("AV_EdgeGoal", 3);
    CMessage("Then stop and calm down.");
	CMessage("I want you to do this all over again 1 more time.");
    setVar("AV_EdgeReal", 4);
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("I want that %Cock% to drive you crazy all night long while you\'re trying to sleep, so I think you need to hold some edges for me %Grin%");
    setVar("AV_EdgeRepeat", 2);
    CMessage("I want you to edge yourself 4 times, and on the last time you get to hold it.");
    setVar("AV_EdgeGoal", 3);
    CMessage("Then stop and calm down.");
	CMessage("I want you to do this all over again 2 more time.");
    setVar("AV_EdgeReal", 4);
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("I want that %Cock% to drive you crazy all night long while you\'re trying to sleep, so I think you need to hold some edges for me %Grin%");
    setVar("AV_EdgeRepeat", 2);
    CMessage("I want you to edge yourself 5 times, and on the last time you get to hold it.");
    setVar("AV_EdgeGoal", 4);
    CMessage("Then stop and calm down.");
	CMessage("I want you to do this all over again 2 more time.");
    setVar("AV_EdgeReal", 5);
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("I want that %Cock% to drive you crazy all night long while you\'re trying to sleep, so I think you need to hold some edges for me %Grin%");
    setVar("AV_EdgeRepeat", 3);
    CMessage("I want you to edge yourself 5 times, and on the last time you get to hold it.");
    setVar("AV_EdgeGoal", 4);
    CMessage("Then stop and calm down.");
	CMessage("I want you to do this all over again 3 more time.");
    setVar("AV_EdgeReal", 5);
    TaskReady();
    return;
    TaskReady();
}
function TaskReady()
{
    CMessage("Now take that %Cock% out of your pants");
    //CMessage("And %StartStroking% for me");
    setStrokingNoTaunt();
    return;
}