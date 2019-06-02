DMessage("Short19: start");
main();
DMessage("Short19: end");
function main()
{
	answer0=getInput("How does your %cock% feel?",5);
    if (answer0.isTimeout())
    {
        a3dfgdpo();
        return;
    }
    if (answer0.isLike("aching", "ache", "hurting", "hurt", "hurts"))
    {
        a010();
        return;
    }
    else if (answer0.isLike("horny", "cum", "desperate"))
    {
        a020();
        return;
    }
    else
    {
        CMessage("Let\'s make that poor drippy dick drip some " + "shall we?");
    }
    a3dfgdpo();
}
function a3dfgdpo()
{
    return;
    a010();
}
function a010()
{
    CMessage("To be honest, I\'m surprised that you\'ve even lasted this long.");
    return;
    a020();
}
function a020()
{
    let answer0 = getInput("Is there anything that you want more right now other than having an earthshattering orgasm?");
    if (answer0.isLike("you", "serve", "obey", "submit"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
        Fim();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I expect you to know the rules by now and obey them");
    }
    else
    {
        CMessage("Too bad... I\'m in complete control of your %Cock%.");
    }
    if (randomInteger(1, 100) <= 50)
    {
        Fim();
        return;
    }
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]>[50] @NullResponse @RemoveTeaseTime(8 Minutes)
    //--UNINTERPRETED LINE:@Variable[%DateDifference%(AV_SessionTime,minutes)]<[15] @NullResponse @RemoveTeaseTime(10 Minutes)
    Fim();
}
function Fim()
{
    return;
}