DMessage("AV_Pain: start");
main();
DMessage("AV_Pain: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("Let me test that.");
    switch(random("part1", "part2", "part3"))
    {
        case "part1":
        part1();
        return;
        break;
        case "part2":
        part2();
        return;
        break;
        case "part3":
        part3();
        return;
        break;
    }
    part1();
}
function part1()
{
    CMessage("I do like the whip wich slices like a single tail and it has four tails.");
    CMessage("That\'s like four strokes for each time I whip you.");
    CMessage("It\'s less work for Me, more suffering for you.");
    CMessage("And that is just the way I like it.");
    CMessage("My enjoyment, your suffering.");
    return;
    part2();
}
function part2()
{
    CMessage("Hmmm...");
    CMessage("Take a shoelace and tie your balls away from your cock! Make it nice and tight!");
    changeApathyLevel(2);
    let answer0 = getInput("Let me know if you\'re done.");
    while (!(answer0.isLike("done") || answer0.isLike("yes") || answer0.isLike("Mistress") || answer0.isLike("yeah") || answer0.isLike("yea") || answer0.isLike("sure")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("done", "yes", "Mistress", "yeah", "yea", "sure"))
    {
        CMessage("Move on");
    }
    CMessage("Put one clothespin on each nipple and squeeze them tight!");
    let answer1 = getInput("Let me know if you\'re done.");
    while (!(answer1.isLike("done") || answer1.isLike("yes") || answer1.isLike("Mistress") || answer1.isLike("yeah") || answer1.isLike("yea") || answer1.isLike("sure")))
    {
        answer1 = getInput("Yes or no %PetName%?");
    }
    if (answer1.isLike("done", "yes", "Mistress", "yeah", "yea", "sure"))
    {
        CMessage("Move on");
    }
    CMessage("Grab your cock and stroke it slowly as you squeeze those balls with the other hand!");
    CMessage("You like pain...");
    CMessage("So...");
    CMessage("enjoy!");
    sleep(20);
    CMessage("%ThatsEnough%");
    return;
    part3();
}
function part3()
{
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "pain01.mp3");
    sleep(10);
    sleep(10);
    SMessage("%DomName% turned off the mic");
    sleep(10);
    CMessage("%ThatsEnough%");
    return;
}