DMessage("AV_GetPins: start");
main();
DMessage("AV_GetPins: end");
function main()
{
    CMessage("I " + random("want ", "need ") + "you to " + random("get ", "fetch ") + "some nipple clamps or clothespins");
    setTempVar("AV_PinDone", true);
    CMessage("a shoelace or similar");
    CMessage("And a spoon or ruler");
    sleep(15);
    let answer0 = getInput("Are you ready to start?");
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("Alright %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well you should be if you are back on your computer... Slap your cock 5 times and then hurry up");
    }
    else
    {
        CMessage("Yes or no %SubName%?");
    }
    CMessage("good");
    return;
}