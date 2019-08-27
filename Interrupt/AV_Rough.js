DMessage("AV_Rough: start");
main();
DMessage("AV_Rough: end");
function main()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    CMessage("%PetName%");
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
    CMessage("Nothing makes me hotter and hornier than making you scream");
    CMessage("like a sissy girl!");
    CMessage("What...");
    CMessage("Do I have to spell it out for you?");
    CMessage("I own your cock and balls.");
    CMessage("Things are gonna be different around here, now.");
    edge("%Edge%");
    return;
    part2();
}
function part2()
{
    edge("%Edge%");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "rough01.mp3");
    sleep(13);
    sleep(13);
    sleep(10);
    sleep(10);
	stopAudio();
    SMessage("%DomName% turned off the mic");
    CMessage("%ThatsEnough%");
    return;
    part3();
}
function part3()
{
    CMessage("If you\'re going to be my bitch");
    changeApathyLevel(2);
    let answer0 = getInput("%KneelForMe% and tell me -I submit, mistress-");
    while (!(answer0.isLike("submit") || answer0.isLike("mistress") || answer0.isLike("mistress")))
    {
        answer0 = getInput("Say -I submit, mistress- %SubName%");
    }
    if (answer0.isLike("submit", "mistress", "mistress"))
    {
        CMessage("Good %Slave%");
    }
    CMessage("*puts a leash on you* Good boy, now kiss my shoes.");
    let answer1 = getInput("Then say -Thank you-");
    while (!(answer1.isLike("thanks") || answer1.isLike("you") || answer1.isLike("mistress") || answer1.isLike("mistress")))
    {
        answer1 = getInput("Say -thank you Mistress- %SubName%");
    }
    if (answer1.isLike("thanks", "you", "mistress", "mistress"))
    {
        CMessage("Good %Slave%");
    }
    return;
}