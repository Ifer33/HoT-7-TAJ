DMessage("AV_RND39: start");
main();
DMessage("AV_RND39: end");
function main()
{
    setTempVar("AV_0RND39", true);
    addContact(2);
    SMessage("%Contact1% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "KeepStroking*.mp3");
    wait(20);
    removeContact(2);
    return;
}