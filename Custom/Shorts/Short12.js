DMessage("Short12: start");
main();
DMessage("Short12: end");
function main()
{
    CMessage("I like watching you " + random("service me like the obedient toy you are.", "do that"));
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
		stopStrokingAll();
    }
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("Show me what a good bitch you are.");
    }
    CMessage("Show me exactly how desperately you want to cum");
    CMessage("This power that I have over you.");
    CMessage("The power to allow you.. to " + random("look at me", "want me"));
    CMessage("To even think of me..");
    CMessage("Complete. Control.");
    let answer0 = getInput("This is " + random("what you want ", "all you want ") + "right?", 6);
    if (answer0.isTimeout())
    {
        v9465kswa();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        if (randomInteger(1, 100) <= 45)
        {
            TotalControl();
            return;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%IDisagree%");
        increaseAnger(3)
    }
    v9465kswa();
}
function v9465kswa()
{
    return;
    TotalControl();
}
function TotalControl()
{
    if(!getVar("AV_TotalControl", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
    }
    return;
}