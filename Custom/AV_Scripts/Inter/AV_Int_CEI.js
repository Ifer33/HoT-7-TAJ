DMessage("AV_Int_Cei: start");
main();
DMessage("AV_Int_Cei: end");
function main()
{
    if(getVar("av_fetish_cei", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            CEI2();
            return;
        }
    }
    if(getVar("av_fetish_cei", false))
    {
        AVCEIYES();
        return;
    }
    CMessage("There is only one thing that all submissive men must learn to do.");
    CMessage("Every time you orgasms, you must consume your ejaculate.");
    CMessage("That\'s right, you heard me correctly.");
    CMessage("If you ejaculates in me you must lick me clean.");
    CMessage("If you ejaculates on you, you must lick you clean.");
    AVCEIFinal();
    return;
    AVCEIYES();
}
function AVCEIYES()
{
    CMessage("At some point I should make you shoot into a cup or a glass and you must drink it down.");
    CMessage("This requirement for all submissive men does two things.");
    CMessage("It puts a real price on your orgasms");
    CMessage("and it shows your acceptance of my dominance");
    CMessage("no matter who brought the topic up.");
    AVCEIFinal();
	return;
}
function AVCEIFinal()
{
    CMessage("This should be non negotiable");
    CMessage("If you does not accept this simple requirement, you\'re not submissive.");
    CMessage("It is the only test and proof that you is sincere in your desire to be submissive");
    if(getVar("av_fetish_cei", false))
    {
        CEIEnd();
        return;
    }
    CMessage("I know you didn\'t like that %SubName%");
    let answer0 = getInput("Would you change your mind?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Do you want to eat your own cum, yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s interesting, I\'ll keep it in mind");
        delVar("pthevCEI_No");
        setVar("av_fetish_cei", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, looks like we found a hard limit here...");
    }
    CEIEnd();
}
function CEIEnd()
{
    delVar("AV_MEM_Submissive");
	delVar("AV_MEM_Submit");
	delVar("AV_MEM_Serve");
	delVar("AV_MEM_Used");
	delVar("AV_MEM_Humil");
    return;
    CEI2();
}
function CEI2()
{
    CMessage("Cumplay, and cum-eating and swallowing-");
    CMessage("Think about it. You have been shooting your load so many times");
    CMessage("You would love me to swallow, to play with it, to beg for it!");
    CMessage("Don\'t tell me you\'re not a little curious on the taste? The feel?");
    CMessage("You had learned that cum is \"icky\" for you, but \"yummi\" for me?");
    CMessage("Give me a break, you needs to grow a pair and suck it up!");
    CMessage("LITTERALLY!");
    AVCEIFinal();
    return;
}