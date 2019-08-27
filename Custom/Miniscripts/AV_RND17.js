DMessage("AV_RND17: start");
main();
DMessage("AV_RND17: end");
function main()
{
    let answer0 = getInput("Do you think you get to cum %PetName%?", 8);
    if (answer0.isTimeout())
    {
        NoRespo();
        return;
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Lol%, maybe...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Thats right %SubName%");
    }
    else
    {
        CMessage("Yes or no %SubName%?");
    }
    NoRespo();
}
function NoRespo()
{
    setTempVar("AV_0RND17", true);
    return;
}