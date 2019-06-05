DMessage("AV_Task3: start");
main();
DMessage("AV_Task3: end");
function main()
{
    CMessage("%one_ST_TagState%");
    setTempVar("AV_taskOP3", true);
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
    CMessage("Your task today is  to give me 5 edges whenever and however you can.");
    setVar("AV_EdgeGoal", 5);
    CMessage("I don\'t mind if you space them out throughout the session, or rush through them all at once.");
    setVar("AV_EdgeCount", 0);
    CMessage("As long as you do them all, I\'ll be satisfied, even if you won\'t be %Grin%");
    TaskReady();
    return;
    DommeLevel2();
}
function DommeLevel2()
{
    CMessage("Your task today is  to give me 6 edges whenever and however you can.");
    setVar("AV_EdgeGoal", 6);
    CMessage("I don\'t mind if you space them out throughout the session, or rush through them all at once.");
    setVar("AV_EdgeCount", 0);
    CMessage("As long as you do them all, I\'ll be satisfied, even if you won\'t be %Grin%");
    TaskReady();
    return;
    DommeLevel3();
}
function DommeLevel3()
{
    CMessage("Your task today is  to give me 7 edges whenever and however you can.");
    setVar("AV_EdgeGoal", 7);
    CMessage("I don\'t mind if you space them out throughout the session, or rush through them all at once.");
    setVar("AV_EdgeCount", 0);
    CMessage("As long as you do them all, I\'ll be satisfied, even if you won\'t be %Grin%");
    TaskReady();
    return;
    DommeLevel4();
}
function DommeLevel4()
{
    CMessage("Your task today is  to give me 8 edges whenever and however you can.");
    setVar("AV_EdgeGoal", 8);
    CMessage("I don\'t mind if you space them out throughout the session, or rush through them all at once.");
    setVar("AV_EdgeCount", 0);
    CMessage("As long as you do them all, I\'ll be satisfied, even if you won\'t be %Grin%");
    TaskReady();
    return;
    DommeLevel5();
}
function DommeLevel5()
{
    CMessage("Your task today is  to give me 10 edges whenever and however you can.");
    setVar("AV_EdgeGoal", 10);
    CMessage("I don\'t mind if you space them out throughout the session, or rush through them all at once.");
    setVar("AV_EdgeCount", 0);
    CMessage("As long as you do them all, I\'ll be satisfied, even if you won\'t be %Grin%");
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