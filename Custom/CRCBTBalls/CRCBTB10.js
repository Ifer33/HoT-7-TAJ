DMessage("CRCBTB10: begin")
main();
DMessage("CRCBTB10: end")
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("I\'m gonna make you hurt those %Balls% now, %SubName%");
    CMessage("You should make it hurt like a good %PetName%");
    CMessage("Because if I were there, you can bet I would make it hurt... a lot");
    CMessage("Keep that in mind, %SubName%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("%ThatsEnough%");
    return;
}