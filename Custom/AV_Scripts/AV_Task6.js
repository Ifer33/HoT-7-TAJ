DMessage("AV_Task6: start");
main();
DMessage("AV_Task6: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP6", true);
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
    CMessage("I think for your task today you should give me 3 really frustrating edges.");
    setVar("AV_EdgeGoal", 3);
    CMessage("Know how you\'re going to do that? By stroking as light and slow as you possibly can and still get close.");
    CMessage("You can have as much time as you want for this task today, I\'m sure you\'ll need it.");
    CMessage("These edges won\'t come easy, and you won\'t cum at all %Grin%");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("I think for your task today you should give me 3 really frustrating edges.");
    setVar("AV_EdgeGoal", 3);
    CMessage("Know how you\'re going to do that? By stroking as light and slow as you possibly can and still get close.");
    CMessage("You can have as much time as you want for this task today, I\'m sure you\'ll need it.");
    CMessage("These edges won\'t come easy, and you won\'t cum at all %Grin%");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("I think for your task today you should give me 3 really frustrating edges.");
    setVar("AV_EdgeGoal", 3);
    CMessage("Know how you\'re going to do that? By stroking as light and slow as you possibly can and still get close.");
    CMessage("You can have as much time as you want for this task today, I\'m sure you\'ll need it.");
    CMessage("These edges won\'t come easy, and you won\'t cum at all %Grin%");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("I think for your task today you should give me 4 really frustrating edges.");
    setVar("AV_EdgeGoal", 4);
    CMessage("Know how you\'re going to do that? By stroking as light and slow as you possibly can and still get close.");
    CMessage("You can have as much time as you want for this task today, I\'m sure you\'ll need it.");
    CMessage("These edges won\'t come easy, and you won\'t cum at all %Grin%");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("I think for your task today you should give me 5 really frustrating edges.");
    setVar("AV_EdgeGoal", 5);
    CMessage("Know how you\'re going to do that? By stroking as light and slow as you possibly can and still get close.");
    CMessage("You can have as much time as you want for this task today, I\'m sure you\'ll need it.");
    CMessage("These edges won\'t come easy, and you won\'t cum at all %Grin%");
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