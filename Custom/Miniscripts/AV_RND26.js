DMessage("AV_RND26: start");
main();
DMessage("AV_RND26: end");
function main()
{
    CMessage("Mmm, this must be torture for you.");
    setTempVar("AV_0RND26", true);
    CMessage("Maybe you should take your hand off for a minute, give yourself a break.");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("Come over here %PetName%");
    CMessage("%KneelForMe%");
    wait(10);
    CMessage("Spread your legs wide and put your hands behind your back");
    CMessage("Now let\'s see what we have here...");
    CMessage("Mmmm... you\'re so hard, baby");
    CMessage("Gosh, you must have really, really needed a hot little woman to call you out, huh?");
    CMessage("How does that make you feel, by the way?");
    CMessage("Knowing that petite little old me is here, controlling you sooo so easily?");
    CMessage("Reading you so well, making you putty...in her hands?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("slap your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Spank15.mp3");
        wait(12);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Keep going");
    }
    CMessage("Making you weak..");
    CMessage("destroying your will..");
    CMessage("%SitDown%");
	restartStroking();
    return;
}