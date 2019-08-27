DMessage("pvTaunt_DoYouHateIt: Beginning");
main();
DMessage("pvTaunt_DoYouHateIt: End");
function main()
{
    let answer0 = getInput("Do you hate yourself a little bit for being drawn to me so much?", 8);
    if (answer0.isTimeout())
    {
        hate_it();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("If only you could tear yourself away from me, right? But you can\'t... %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s good to hear that you\'ve completely accepted yourself as a pervert");
    }
    hate_it();
}
function hate_it()
{
    CMessage("Let\'s face it, you\'re addicted to staring at me");
    CMessage("You\'re probably addicted to staring at hot girls in general");
    CMessage("It\'s not even just me, is it?");
    CMessage("You see a hot girl and you just instantly become a drooling mess");
    CMessage("With a huge bulge in is pants");
    //--UNINTERPRETED LINE:@CockSmall 
	if (getVar("cocksize", "NA") == "small"){
		CMessage("I mean a <i>tiny</i> bulge %Lol%");
    CMessage("Suddenly you\'re reduced to a bulge and a wet spot and little else");
    CMessage("With an intense desire to go home and %JerkOff%");
    CMessage("At least I\'ve got your habit under control, %Name%");
    return;
}