DMessage("AV_RND22: start");
main();
DMessage("AV_RND22: end");
function main()
{
    CMessage("Pleasure and pain, they go so well together, don\'t you think?");
    setTempVar("AV_0RND22", true);
    CMessage("we\'ll be focusing on both experiences, both on their own and then combined.");
    CMessage("You derive pleasure from my praise, from worshipping me..");
    CMessage("It\'s pleasing for you to %Stroke% that %Cock% isn\'t it?");
    CMessage("Focus on creating that sensation of pleasure");
    CMessage("on that sensation increasing, building, leading you to the edge of orgasm.");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("Take your hand away");
    if(!getVar("av_fetish_pain", false))
    {
        skipw3245();
        return;
    }
    CMessage("Those %Balls% are mine.");
    CMessage("They belong to me.");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        wait(20);
    }
    CMessage("Let\'s hurt this balls");
    setTempVar("AV_PinDone", true);
    CMessage("Use the spoon and follow the sound.");
    CMessage(random("Hit ", "Spank ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank5.mp3");
    wait(12);
    CMessage("Experience that searing hot pain.");
	stopAudio();
    CMessage(random("Hit ", "Spank ") + "your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
    wait(12);
    CMessage("Do you feel like you\'re going to Pass out?");
    CMessage("Goooooood.");
    CMessage("Don\'t you know how much I enjoy seeing you like this?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Don\'t you get it, %Slave%?");
    }
    CMessage("My pleasure comes from your pain.");
	restartStroking();
    return;
    skipw3245();
}
function skipw3245()
{
    CMessage("Relax for a second");
    wait(10);
	restartStroking();
    return;
}