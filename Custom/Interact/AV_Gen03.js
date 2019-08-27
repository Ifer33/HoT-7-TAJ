DMessage("AV_Gen03: start");
main();
DMessage("AV_Gen03: end");
function main()
{
    CMessage("Oh " + random("%PetName% ", "%SubName% ") + "are my friends too much for you?");
    let answer0 = getInput("Or you just need a break?");
    while (!(answer0.isLike("much") || answer0.isLike("intense") || answer0.isLike("hard") || answer0.isLike("pause") || answer0.isLike("break") || answer0.isLike("rest")))
    {
        answer0 = getInput("what %SubName%?");
    }
    if (answer0.isLike("much", "intense", "hard"))
    {
        Para();
        return;
    }
    else if (answer0.isLike("pause", "break", "rest"))
    {
        CheckPause();
        return;
    }
    CheckPause();
}
function CheckPause()
{
    CMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while");
    CMessage("enjoy");
    sleep(randomInt(100, 120));
    CMessage("%ThatsEnough%");
    return;
    Para();
}
function Para()
{
    CMessage("%ThatsEnough%");
    run("Interrupt"+seperator+"AV_Cancela.js");
    return;
}