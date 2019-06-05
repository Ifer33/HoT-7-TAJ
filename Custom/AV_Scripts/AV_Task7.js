DMessage("AV_Task7: start");
main();
DMessage("AV_Task7: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP7", true);
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
    CMessage("I fully believe that you can\'t have pleasure without a little pain, so for your task today  you get to experience both.");
    CMessage("You\'re going to give me a single edge.");
    setVar("AV_EdgeGoal", 1);
    CMessage("After you get close, you\'re going to start slapping that sensitive little cock head until you\'re completely soft.");
    CMessage("Then your task is done %Grin%");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I fully believe that you can\'t have pleasure without a little pain, so for your task today  you get to experience both.");
    CMessage("You\'re going to give me a single edge.");
    setVar("AV_EdgeGoal", 1);
    CMessage("After you get close, you\'re going to start slapping that sensitive little cock head until you\'re completely soft.");
    CMessage("Then your task is done %Grin%");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("I fully believe that you can\'t have pleasure without a little pain, so for your task today  you get to experience both.");
    CMessage("You\'re going to give me 2 edges.");
    setVar("AV_EdgeGoal", 2);
    CMessage("After you get close, you\'re going to start slapping that sensitive little cock head until you\'re completely soft.");
    CMessage("Then your task is done %Grin%");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("I fully believe that you can\'t have pleasure without a little pain, so for your task today  you get to experience both.");
    CMessage("You\'re going to give me 2 edges.");
    setVar("AV_EdgeGoal", 2);
    CMessage("After you get close, you\'re going to start slapping that sensitive little cock head until you\'re completely soft.");
    CMessage("Then your task is done %Grin%");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("I fully believe that you can\'t have pleasure without a little pain, so for your task today  you get to experience both.");
    CMessage("You\'re going to give me 3 edges.");
    setVar("AV_EdgeGoal", 3);
    CMessage("After you get close, you\'re going to start slapping that sensitive little cock head until you\'re completely soft.");
    CMessage("Then your task is done %Grin%");
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