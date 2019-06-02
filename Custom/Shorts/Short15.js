DMessage("Short15: start");
main();
DMessage("Short15: end");
function main()
{
    let answer0 = getInput("Does that gets your cock really hard and throbbing slaveboy?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo15();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm...");
        opt();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, OK");
    }
    AV_Timeo15();
}
function AV_Timeo15()
{
    return;
    opt();
}
function opt()
{
    if (randomInteger(1, 100) <= 50)
    {
        Control();
        return;
    }
    return;
    Control();
}
function Control()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
    return;
}