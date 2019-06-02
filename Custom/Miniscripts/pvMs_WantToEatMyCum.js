DMessage("pvMs_WantToEatMyCum: start");
main();
DMessage("pvMs_WantToEatMyCum: end");
function main()
{
    setVar("pthevBegForCEI", getVar("pthevBegForCEI", 0) + 1);
    if(getVar("av_fetish_cei", false))
    {
        av_fetish_cei();
        return;
    }
    if(getVar("pthevCEI_No", false))
    {
        pthevCEI_No();
        return;
    }
    let answer0 = getInput("You want to eat your cum?");
	while(true){
		if (answer0.isLike("yes"))
		{
			CMessage("So that\'s something you\'re into...");
		}
		else if (answer0.isLike("no"))
		{
			CMessage("Then don\'t waste my time talking about it");
			waste_my_time();
			return;
		}else{
			answer0 = getInput("%YesOrNo%");
		}
	}
    CMessage("I\'ll keep it in mind %Subname%");
    setVar("av_fetish_cei", true);
    maybe_today();
    return;
    return;
    av_fetish_cei();
}
function av_fetish_cei()
{
    if (getVar("pthevBegForCEI", 0) == 1)
    {
        Yes_First();
        return;
    }
    if (getVar("pthevBegForCEI", 0) == 2)
    {
        Yes_Second();
        return;
    }
    if (getVar("pthevBegForCEI", 0) == 3)
    {
        Yes_Third();
        return;
    }
    if (getVar("pthevBegForCEI", 0) > 3)
    {
        Yes_Fourth();
        return;
    }
    Yes_First();
}
function Yes_First()
{
    CMessage("I know %PetName%");
    CMessage("You\'ll just have to wait and see %Smile%");
    return;
    Yes_Second();
}
function Yes_Second()
{
    CMessage("You already said so %SubName% stop bothering me");
    CMessage("I\'ll decide when we get there");
    CMessage("It certainly doesn\'t improve your chances to nag about it");
    return;
    Yes_Third();
}
function Yes_Third()
{
    let answer0 = getInput("You think if you keep asking you\'ll get what you want?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s not how it works %Name%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You\'re right about that %Laugh%");
    }
    CMessage("So you can just stop asking");
    return;
    Yes_Fourth();
}
function Yes_Fourth()
{
    CMessage("Shut up %PetName%");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("I told you to stop nagging about it");
    if(getVar("pthevGlitterIntroduced", false))
    {
        //--Command:Glitter(pvGL_CEIMs01)
    }
    return;
    pthevCEI_No();
}
function pthevCEI_No()
{
    CMessage("I thought you didn\'t like that %SubName%");
    let answer0 = getInput("Did you change your mind?");
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
        CMessage("Then don\'t waste my time talking about it");
        waste_my_time();
        return;
    }
    maybe_today();
}
function maybe_today()
{
    CMessage("Maybe I\'ll let you lick it up %GeneralTime%");
    //--Command:GotoDommeOrgasm
	if(getOrgasmChance()==0 ){
		Never_Allows()
		return;
	}else if(getOrgasmChance()<25 ){
		Rarely_Allows()
		return;
	}else if(getOrgasmChance()>25 && getOrgasmChance()<75 ){
		Sometimes_Allows()
		return;
	}else if(getOrgasmChance()>75 && getOrgasmChance()<100 ){
		Often_Allows()
		return;
	}else if(getOrgasmChance()==100 ){
		Always_Allows()
		return;
	}
	return;
    Never_Allows();
}
function Never_Allows()
{
    CMessage("Although that would mean you get to cum");
    CMessage("And we both know that\'s not going to happen");
    return;
    Rarely_Allows();
}
function Rarely_Allows()
{
    CMessage("Although that would mean you get to cum, which is pretty unlikely");
    CMessage("But you never know, stranger things have happened %Smile%");
    return;
    Sometimes_Allows();
}
function Sometimes_Allows()
{
    CMessage("You have to cum first of course");
    CMessage("And I haven\'t made my mind up about that yet, %PetName% %Grin%");
    return;
    Often_Allows();
}
function Often_Allows()
{
    CMessage("That would at least solve the problem of cleaning up");
    CMessage("In case you get to cum today");
    return;
    Always_Allows();
}
function Always_Allows()
{
    CMessage("That would at least solve the problem of cleaning up %Laugh%");
    return;
    waste_my_time();
}
function waste_my_time()
{
    CMessage("Think before you type, %Name%");
    return;
}