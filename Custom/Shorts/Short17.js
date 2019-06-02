DMessage("Short17: start");
main();
DMessage("Short17: end");
function main()
{
    CMessage("So tell me %PetName%... What do you want more right now?");
    CMessage("Make your cock happy and have a big satisfying orgasm..");
    let answer0 = getInput("Or make me happy and obey my every wish?");
    while (!(answer0.isLike("cum") || answer0.isLike("orgasm") || answer0.isLike("obey") || answer0.isLike("you") || answer0.isLike("wish")|| answer0.isLike("happy")))
    {
        answer0 = getInput("Do you want to cum or make me happy %SubName%?");
    }
    if (answer0.isLike("cum", "orgasm"))
    {
        CMessage("...so sad...");
        increaseAnger(3)
    }
    else if (answer0.isLike("obey", "you", "wish", "happy"))
    {
        CMessage("Wise choice %PetName%..");
        increaseAnger(-3)
    }
    CMessage("You are my property! don\'t you dare to ever forget that!");
    if(!getVar("AV_TotalControl", false))
    {
        Quest1();
        return;
    }
    if(getVar("AV_TotalControl", false))
    {
        Quest2();
        return;
    }
    Quest1();
}
function Quest1()
{
    let answer0 = getInput("You will never ever orgasm without my allowance ever " + "slave?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Really?");
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Are you afraid of me or something? %Lol%");
    }
    QuestEnd();
    return;
    Quest2();
}
function Quest2()
{
    let answer0 = getInput("You will never ever orgasm without my allowance ever " + "right slave?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%GoodBoy%");
        QuestEnd();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%OhNo%");
    }
    CMessage("You have to learn that your orgasms are not yours, %PetName%");
    let answer1 = getInput("I own your orgasm, and I decide when you get to cum, do you understand that?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Well you better fucking get it between your ears, because that\'s the way it is");
    }
    QuestEnd();
}
function QuestEnd()
{
    return;
}