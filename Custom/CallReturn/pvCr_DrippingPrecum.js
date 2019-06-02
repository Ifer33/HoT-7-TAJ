DMessage("pvCr_DrippingPrecum: start");
main();
DMessage("pvCr_DrippingPrecum: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Scoop some of that precum up with your finger, %PetName%");
    let answer0 = getInput("Will you lick it off your fingers for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, do it %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Someday I will ask you that and you will say yes");
    }
    CMessage("Maybe I will turn you into a good little cum eater after all %Grin%");
    return;
}