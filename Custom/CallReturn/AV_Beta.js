DMessage("AV_Beta: start");
main();
DMessage("AV_Beta: end");
function main()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    CMessage("There\'s something I\'d like to know about you...");
    CMessage("I love that you\'re doing all this for me");
    CMessage("The stroking, the edging, following commands...");
    CMessage("But as someone with a dominant personality it puzzles me");
    CMessage("Why do you do this...");
    CMessage("Now, the way I see it some people are Alphas and others betas");
    CMessage("Obviously, I\'m an Alpha %Smile%");
    CMessage("But just because you like being submissive doesn\'t necessarily mean you are a beta...");
    CMessage("You could be an Alpha who just needs a break from being in control now and then");
    CMessage("Although it would make more sense if you <i>were</i> a beta...");
    CMessage("Whose only purpose in life is to serve as amusement for us Alphas %Smile%");
    let answer0 = getInput("So what do you think, are you an Alpha or a beta?");
    while (!(answer0.isLike("alpha") || answer0.isLike("beta")))
    {
        answer0 = getInput("Are you an Alpha or a beta?");
    }
    if (answer0.isLike("alpha"))
    {
        CMessage("Oh really?");
        setVar("pvAlpha", true);
        am_an_alpha();
        return;
    }
    else if (answer0.isLike("beta"))
    {
        CMessage("I thought so %Smile%");
        setVar("pvBeta", true);
        setVar("AV_Beta", true);
    }
    CMessage("At least it makes some things in life simple, right?");
    CMessage("I mean, you don\'t have to think about wether you could get a girl like me");
    if(getVar("pvHasPartner", false))
    {
        CMessage("Not as a knock on "+getVar("pthevNamePartner")+" of course, I\'m sure she\'s lovely");
    }
    if(getVar("pvHasPartner", false))
    {
        CMessage("You\'re lucky someone\'s interested in you at all...");
    }
    CMessage("That doesn\'t mean you can\'t dream and drool over hot girls");
    CMessage("And just because you're not a <i>real</i> man doesn't mean you can't please a woman");
    CMessage("You just have to make a little bit more of an effort %Smile%");
    return;
    am_an_alpha();
}
function am_an_alpha()
{
    CMessage("Well, I\'d be happy to bring you down a peg %Laugh%");
    CMessage("Even if it\'s just for a few precious moments");
    CMessage("It can be good for Alpha males like yourself to know their place");
    CMessage("I mean, you're still a <i>guy</i>, which puts you below me by default %Smile%")
    return;
}