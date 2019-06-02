DMessage("LinkChNo02: start");
main();
DMessage("LinkChNo02: end");
function main()
{
    let answer0 = getInput("How is your %Cock% doing, is it hard?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm we should do something about that...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too much denial will do that to it...");
    }
    if(getVar("pvBowlOfIce", false))
    {
        CMessage("Take a couple of ice cubes from the bowl");
        underwear();
        return;
    }
    let answer1 = getInput("Do you have ice cubes in your fridge?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good, go get some, like 3 or 4");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Too bad...");
        no_cubes();
        return;
    }
    get_some_cubes();
	return;
}
function get_some_cubes()
{
    let answer0 = getInput("Let me know when you\'re ready");
    while (!(answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("back")))
    {
        answer0 = getInput("Let me know when you\'re ready!");
    }
    if (answer0.isLike("ready", "done", "back"))
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
    CMessage("Put those ice cubes in your underwear, so that your %Balls% rest on them");
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
    CMessage("Or until I let you %JerkOff% again %Smile%");
    return;
    no_cubes();
}
function no_cubes()
{
    CMessage("Maybe another time");
    return;
}