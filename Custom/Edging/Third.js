DMessage("Third: start");
main();
DMessage("Third: end");
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
    CMessage("You just keep edging without permission no matter what I say, don\'t you");
    CMessage("I\'m running out of patience, %PetName%");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    a02();
}
function a02()
{
    CMessage("You\'re definitely having trouble keeping away from the edge %GeneralTime%");
    CMessage("What should we do about that, hm?");
    CMessage("Maybe you just need to do more edges");
    let answer0 = getInput("Does it become easier after a while?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm");
    }
    CMessage("I think I\'m going to edge myself later to test that...");
    CMessage("Just " + random("thinking about ", "the thought of ") + "it " + random("makes me horny ", "makes me hot ", "turns me on ") + "%EmoteMoan% %Laugh%");
    CMessage("But let\'s not forget that you edged without permission here...");
    CMessage("I have to admit, %PetName%");
    CMessage("I kind of like it when you are disobedient");
    CMessage("Because it gives me a reason to punish you %Grin%");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    a03();
}
function a03()
{
    CMessage("Hmm, another case of edging without permission...");
    CMessage("What should we do about that...");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
}