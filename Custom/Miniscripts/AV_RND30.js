DMessage("AV_RND30: start");
main();
DMessage("AV_RND30: end");
function main()
{
    setTempVar("AV_0RND30", true);
    addContact(4);
    SMessage("%Contact3% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter3" + java.io.File.separator + "StrokeFaster.mp3");
    speedUpStroking(2);
    wait(20);
    removeContact(4);
    return;
}