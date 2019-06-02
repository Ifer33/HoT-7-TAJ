DMessage("AV_Task1: start");
main();
DMessage("AV_Task1: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP1", true);
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
    CMessage("For your task, I want you to stroke yourself 50 times and then edge as quickly as you can.");
    setTempVar("AV_task1_50", true);
    CMessage("Simple enough, right?");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("For your task, I want you to stroke yourself 80 times and then edge as quickly as you can.");
    setTempVar("AV_task1_80", true);
    CMessage("Simple enough, right?");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("For your task, I want you to stroke yourself 100 times and then edge as quickly as you can.");
    setTempVar("AV_task1_100", true);
    CMessage("Simple enough, right?");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("For your task, I want you to stroke yourself 200 times and then edge as quickly as you can.");
    setTempVar("AV_task1_200", true);
    CMessage("Simple enough, right?");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("For your task, I want you to stroke yourself 300 times and then edge as quickly as you can.");
    setTempVar("AV_task1_300", true);
    CMessage("Simple enough, right?");
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