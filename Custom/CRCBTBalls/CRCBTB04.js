DMessage("CRCBTB04: begin")
main();
DMessage("CRCBTB04: end")
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Let\'s turn our focus on those poor blue %Balls% for a moment...");
    CMessage("You know what that means don\'t you?");
    CMessage("It means you\'re going to smack them around a bit %Grin%");
    CMessage("I want to send those full swollen %Balls% a message");
    CMessage("They need to be reminded who owns them...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("I think the message got through loud and clear %Smile%");
    return;
}