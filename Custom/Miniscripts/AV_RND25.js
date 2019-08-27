DMessage("AV_RND25: start");
main();
DMessage("AV_RND25: end");
function main()
{
    if(!getVar("av_fetish_pain", false))
    {
        skip();
        return;
    }
    CMessage("You know how much I delight in causing you pain and discomfort.");
    setTempVar("AV_0RND25", true);
    CMessage("I adore it.");
    CMessage("You moan, you howl.");
    CMessage("Denial is a form of pain that has its own sweet sound.");
    CMessage("But physical pain is equally as amusing.");
    CMessage("Stop %Stroking% and "+random("Hit", "Spank")+" your %Balls% with the beat");
    CMessage("Watch as I giggle in the delight of making you hurt yourself.");
    CMessage("Stroke to edging while lusting after me in my cute ruffled panties");
    CMessage("Get back to %Stroking%");
    return;
    skip();
}
function skip()
{
    CMessage("Say it out and clear:  %AV_RepeatAL% ");
	setTempVar("AV_0RND25",true);
    return;
}