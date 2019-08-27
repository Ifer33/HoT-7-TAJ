DMessage("AV_RND02: start");
main();
DMessage("AV_RND02: end");
function main()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        wait(20);
        setTempVar("AV_PinDone", true);
    }
    CMessage("Stand up.");
    setTempVar("AV_2RND02", true);
    CMessage("I want you to spank yourself.");
    CMessage("Go. Again, again, again, again.");
    CMessage("Oh do it harder.");
    CMessage("Your Mistress demands you do.");
    CMessage("Harder, harder.");
    CMessage("If your ass isn\'t bright red by now, then you\'ll have to start all over again.");
    CMessage("Do it again, really fucking hard.");
    CMessage("Again.");
    CMessage("Ok sit down again. %Lol%");
    CMessage("It hurts to sit doesn\'t it?");
    CMessage("I think I\'ve teased you long enough.");
	restartStroking();
    return;
}