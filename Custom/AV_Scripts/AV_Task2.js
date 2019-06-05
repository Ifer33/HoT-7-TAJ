DMessage("AV_Task2: start");
main();
DMessage("AV_Task2: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP2", true);
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
    CMessage("I want you to stroke to the edge as fast as you can. Make sure you keep track of how long it takes to get there!");
    setVar("AV_task2_EdgeCount", 3);
    CMessage("Your task today is to beat that record 3 times by getting to the edge faster than you did the previous time.");
    CMessage("You can try this as many times as it takes, but I want you to wait at least 5 minutes between each attempt.");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I want you to stroke to the edge as fast as you can. Make sure you keep track of how long it takes to get there!");
    setVar("AV_task2_EdgeCount", 3);
    CMessage("Your task today is to beat that record 3 times by getting to the edge faster than you did the previous time.");
    CMessage("You can try this as many times as it takes, but I want you to wait at least 5 minutes between each attempt.");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("I want you to stroke to the edge as fast as you can. Make sure you keep track of how long it takes to get there!");
    setVar("AV_task2_EdgeCount", 4);
    CMessage("Your task today is to beat that record 4 times by getting to the edge faster than you did the previous time.");
    CMessage("You can try this as many times as it takes, but I want you to wait at least 5 minutes between each attempt.");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("I want you to stroke to the edge as fast as you can. Make sure you keep track of how long it takes to get there!");
    setVar("AV_task2_EdgeCount", 4);
    CMessage("Your task today is to beat that record 4 times by getting to the edge faster than you did the previous time.");
    CMessage("You can try this as many times as it takes, but I want you to wait at least 5 minutes between each attempt.");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("I want you to stroke to the edge as fast as you can. Make sure you keep track of how long it takes to get there!");
    setVar("AV_task2_EdgeCount", 5);
    CMessage("Your task today is to beat that record 5 times by getting to the edge faster than you did the previous time.");
    CMessage("You can try this as many times as it takes, but I want you to wait at least 5 minutes between each attempt.");
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