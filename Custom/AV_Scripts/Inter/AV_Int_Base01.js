DMessage("AV_Int_Base01: start");
main();
DMessage("AV_Int_Base01: end");
function main()
{
    CMessage("When spanking, I am repetative and rough..");
    setTempVar("AV_IntBase01", true);
    CMessage("You should never know when it\'s finished, and the last one should be \"left there\"");
    CMessage("Spanking you often, with my palm I can spank you all night.");
    CMessage("Dont go for power, but for repetition..");
    let answer0 = getInput("This sound good, %PetName%?", 8);
    if (answer0.isTimeout())
    {
        AV_Time254();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        YesSpank();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You\'re no fun");
    }
    AV_Time254();
	return;
}
function AV_Time254()
{
    return;
    YesSpank();
}
function YesSpank()
{
    if (isStroking())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
	//@NullResponse @CallReturn(Custom\CallReturn\pvCr_Punishment.txt, yes to spanking) 
	setVar("pvCr_Punishment_yes_to_spanking");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_Punishment.js");
    return;
}