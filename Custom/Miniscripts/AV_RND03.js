DMessage("AV_RND03: start");
main();
DMessage("AV_RND03: end");
function main()
{
    CMessage("Yeah that feels good doesn\'t it?");
    CMessage("Imagine it was me");
    setTempVar("AV_3RND03", true);
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("I don\'t want you to get off to this story.");
    CMessage("You don\'t deserve that.");
    CMessage("Keep your hands on your thighs.");
    CMessage("You\'re probably close to cumming aren\'t you?");
    if(getVar("AV_LikeAnal", false))
    {
        Anal();
        return;
    }
	restartStroking();
    return;
    Anal();
}
function Anal()
{
    CMessage("Go get the lube");
    wait(20);
    CMessage("I want you to stand up.");
    CMessage("I want you to put some lube on your index and middle finger.");
    CMessage("I think you know what I want.");
    CMessage("Now get those fingers, into that asshole.");
    CMessage("Take your time");
    wait(20);
    CMessage("I don\'t want you to hurt yourself.");
    wait(20);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Just kidding, I don\'t give a fuck.");
    }
    CMessage("Are you still hard?");
    CMessage("Maybe you like things in your ass.");
    wait(20);
    CMessage("You can sit and stop fucking your ass");
	restartStroking();
    return;
}