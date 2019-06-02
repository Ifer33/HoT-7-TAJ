DMessage("pvCr_NotWantSuckDildo: start");
main();
DMessage("pvCr_NotWantSuckDildo: end");
function main()
{
    CMessage("If you want it in your ass, you have to take it in your mouth first");
    increaseAnger(3)
    let answer0 = getInput("Are you going to to as I say?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hm...");
        not_going_to();
        return;
    }
    CMessage("Then stop whining and follow instructions");
    return;
    not_going_to();
}
function not_going_to()
{
    CMessage("That\'s very disappointing %EmoteSad%");
    //--Command:MoodWorst
	setMood("worst");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment");
    return;
    //from resp NotWantSuckDildo
}