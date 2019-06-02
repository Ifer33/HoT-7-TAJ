DMessage("Short01: start");
main();
DMessage("Short01: end");
function main()
{
    CMessage("But that\'s okay. I\'m doing all this for you %PetName%.");
    let answer0 = getInput("I know what\'s best for you. Isn\'t that so?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iLoveBeingControlledResponse();
    }
    if(getVar("AV_Beta", false))
    {
        CMessage("betas should leave the thinking to their superiors.");
    }
    if(!getVar("AV_Beta", false))
    {
        CMessage("submissives should leave the thinking to their superiors.");
    }
    return;
}