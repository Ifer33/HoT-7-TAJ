DMessage("Short01: start");
main();
DMessage("Short01: end");
function main()
{
    CMessage("This is what you need.");
    CMessage("You need a firm hand. Quiet.");
    CMessage("Your %Cock% is leaking and your breathing is ragged like a whore after a gangbang.");
    let answer0 = getInput("You fucking love this, right?", 5);
    if (answer0.isTimeout())
    {
        mw8h3k();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        changeApathyLevel(2);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad");
        changeDommeLevel(-2);
    }
    mw8h3k();
}
function mw8h3k()
{
    CMessage("I\'m in no mood for anything but complete and total obedience today.");
    return;
}