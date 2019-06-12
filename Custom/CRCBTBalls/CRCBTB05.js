DMessage("CRCBTB05: begin")
main();
DMessage("CRCBTB05: end")
function main()
{
    CMessage(random("Alright then ", "Now then ", "Well now ", "Alright then ") + "...");
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("It\'s " + random("about time for ", "time for ") + random("another round ", "a round ") + "of ballbusting");
    CMessage("I know you enjoy it so much my little %PetName%");
    CMessage("I know there\'s nothing you\'d rather do than hurt your poor %Balls% for me");
    CMessage("So here we go...");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Good %PetName% %Smile%");
    return;
}