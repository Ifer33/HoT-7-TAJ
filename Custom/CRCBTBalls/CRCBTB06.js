DMessage("CRCBTB06: begin")
main();
DMessage("CRCBTB06: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("I\'m going to make you hurt your %Balls% now just because I can");
    CMessage("Not even because I enjoy doing it, although I <i>do</i> enjoy it");
    CMessage("Or because it\'s somehow necessary or because you deserve it for some reason");
    CMessage("No, I\'m going to make you hurt your %Balls% just to show you that I can %Grin%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    let answer0 = getInput("Did it hurt, %PetName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh well then we\'re going to have to try harder, now don\'t we?");
        try_harder();
        return;
    }
    CMessage("I have to show you that I can do that from time to time");
    CMessage("Otherwise you might start to think you\'re here for your own please and we can\'t have that, can we? %Laugh%");
    return;
    try_harder();
}
function try_harder()
{
    run("Custom" + java.io.File.separator + "CRCBTBallsHarsh" + java.io.File.separator + "*.js");
    CMessage("I have to show you that I can do that from time to time");
    CMessage("Otherwise you might start to think you\'re here for your own please and we can\'t have that, can we? %Laugh%");
    return;
}