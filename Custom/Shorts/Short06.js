DMessage("Short06: start");
main();
DMessage("Short06: end");
function main()
{
    CMessage("I like seeing what i can make you do.");
    CMessage("It\'s a hobby of mine.");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        let answer0=getInput("Losers like you worship the ground pretty girls walk on don\'t you?",5);
        if (answer0.isLike("yes", "yea", "yep"))
        {
            thisIsMyPurposeInLifeResponse();
        }
    }
    let answer0 = getInput("You can\'t say no to me. You know that, right?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        i_Will_Do_AnythingResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        pvRs_AnythingNoResponse();
    }
    return;
}