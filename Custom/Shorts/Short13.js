DMessage("Short13: start");
main();
DMessage("Short13: end");
function main()
{
    CMessage("Some girls just want an obedient worshipper to boss around.");
    CMessage("That\'s soo you.");
    let answer0 = getInput("You\'re a natural ass kisser aren\'t you?", 5);
    if (answer0.isTimeout())
    {
        AV_003htjb();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%OfCourse% you are...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, OK then");
        End();
        return;
    }
    AV_003htjb();
}
function AV_003htjb()
{
    CMessage("Isn\'t that better?");
    if(getVar("AV_Beta", false))
    {
        CMessage("Knowing your place?");
        AV_004dfvr();
        return;
    }
    if(!getVar("AV_Beta", false))
    {
        answer0 = getInput("Knowing you are a beta... whose only purpose in life is to serve as amusement for us Alphas?");
        if (answer0.isTimeout())
        {
            AV_004dfvr();
            return;
        }
		if (answer0.isLike("yes"))
		{
			CMessage("See?");
			setVar("AV_Beta", true);
		}
		else if (answer0.isLike("no"))
		{
			CMessage("OK then");
		}
	}
    AV_004dfvr();
}
function AV_004dfvr()
{
    CMessage("You already told me everything and you\'re still so shy to talk about it.");
    End();
}
function End()
{
    return;
}