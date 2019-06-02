DMessage("LinkChYes02: start");
main();
DMessage("LinkChYes02: end");
function main()
{
    CMessage("I think your %Cock% might be overheating in its cage");
    if(getVar("pvBowlOfIce", false))
    {
        CMessage("Take a couple of ice cubes from the bowl");
        underwear();
        return;
    }
    CMessage("Maybe you should blow some cool air on it");
    let answer0 = getInput("Do you have ice cubes in your fridge?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, go get some, like 3 or 4");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad...");
        no_cubes();
        return;
    }
    let answer1 = getInput("Let me know when you\'re ready");
    while (!(answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("back")))
    {
        answer1 = getInput("Let me know when you\'re ready!");
    }
    if (answer1.isLike("ready", "done", "back"))
    {
        CMessage("Good");
    }
    underwear();
	return;
}
function underwear()
{
    let answer0 = getInput("Are you wearing any underwear?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You know where this is going right? %Grin%");
        you_know_where();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You should put them on now");
    }
    CMessage("You know where this is going right? %Grin%");
    you_know_where();
	return;
}
function you_know_where()
{
    CMessage("Put some ice cubes in your underwear, so that your %Balls% rest on them");
    CMessage("Do it %SubName%!");
    CMessage("Make sure they don\'t fall out");
    CMessage("That\'s sooo cold %Laugh%");
    if(getVar("pthevAnal", false))
    {
        CMessage("Now take on of those cubes");
    }
    if(getVar("pthevAnal", false))
    {
        CMessage("And put it in your %Ass%");
    }
    if(getVar("pthevAnal", false))
    {
        CMessage("Don\'t hesitate %Name%, just do as I say");
    }
    if(getVar("pthevAnal", false))
    {
        CMessage("Push it right in");
    }
    CMessage("You have to keep those ice cubes there until they are melted away completely");
    CMessage("Or until I allow you out of chastity %Smile%");
    return;
    no_cubes();
}
function no_cubes()
{
    CMessage("Maybe next time");
    return;
}