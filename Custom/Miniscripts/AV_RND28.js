DMessage("AV_RND28: start");
main();
DMessage("AV_RND28: end");
function main()
{
    setTempVar("AV_0RND28", true);
    addContact(4);
    SMessage("%Contact3% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "StrokeForMe01.mp3");
    wait(20);
	stopAudio();
    removeContact(4);
    return;
}