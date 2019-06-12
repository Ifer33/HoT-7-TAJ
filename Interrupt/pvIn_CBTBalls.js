DMessage("pvIn_CBTBalls: Beginning");
main();
DMessage("pvIn_CBTBalls: End");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
	return;
}
function Sub_Not_Stroking()
{
    CMessage("Let\'s " + random("pay some attention to ", "focus on ") + "those little %Balls%");
    if(getVar("pvBallsTied", false) )
    {
        already_tied();
        return;
    }
    if(getVar("pthevShoelace", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    }
    already_tied();
	return;
}
function already_tied()
{
    if(!getVar("pvKneeling", false))
    {
        CMessage("Get down on your knees, %Name%");
        setTempVar("pvKneeling", true);
    }
    CMessage(random("I do enjoy ", "I love ", "There are few things I enjoy more than ", "I always have so much fun ", "I do really REALLY like ") + "making those %Balls% hurt %Grin%");
    cbt("ball");
    CMessage("They " + random("probably ", "must ") + "feel " + random("pretty sore ", "a bit bruised ") + "now %Grin%");
    return;
}