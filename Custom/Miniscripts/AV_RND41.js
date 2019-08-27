DMessage("AV_RND41: start");
main();
DMessage("AV_RND41: end");
function main()
{
    setTempVar("AV_0RND41", true);
    let answer0 = getInput("beg me to let you kneel", 10);
    if (answer0.isTimeout())
    {
        a9hvd();
        return;
    }
    if (answer0.isLike("beg", "please"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        Task();
        return;
    }
    else
    {
        CMessage("%Lol%");
    }
    a9hvd();
}
function a9hvd()
{
    return;
    Task();
}
function Task()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("%KneelForMe%");
    CMessage("%GoodBoy%");
	restartStroking();
    return;
}