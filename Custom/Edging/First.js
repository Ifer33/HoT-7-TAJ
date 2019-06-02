DMessage("First: start");
main();
DMessage("First: end");
function main()
{
    switch(random("a01", "a02", "a03"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
    }
    a01();
}
function a01()
{
    let answer0 = getInput("Are you having trouble keeping up %SubName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmmm...rest a little");
        sleep(30);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh good %Smile%");
    }
    CMessage("Then we can continue");
    return;
    a02();
}
function a02()
{
    CMessage("C\'mon %PetName%, you\'re only supposed to edge when I say so");
    CMessage("For example, when I say...");
	CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("That wasn\'t so hard, was it?");
    CMessage("Just try to keep away from the edge until I want you to");
    CMessage("Or I might have to punish you...");
    CMessage("Actually, that sounds like fun too %Laugh%");
    return;
    a03();
}
function a03()
{
    CMessage("You didn\'t have permission to edge, %Name%");
    CMessage("I guess you\'re enjoying yourself a little too much %EmoteWink%");
    //--Command:CockTorture
    //run("CBT" + java.io.File.separator + "CBTCock_First.js");
	if(cockTorture()){
		cbt("cock");
	}
    let answer0 = getInput("Are you going to be able to control yourself from now on?");
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
        CMessage("Well, you better try %PetName%");
    }
    CMessage("This might turn into an unpleasant session otherwise %Laugh%");
    return;
}