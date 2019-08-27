DMessage("AV_Gen04: start");
main();
DMessage("AV_Gen04: end");
function main()
{
    SMessage(random("You didn\'t think you were getting out of this easily, did you?", "I\'m sorry that I needed to hurt you. Shhhh", "it\'s okay"), -1, 4);
    if (randomInteger(1, 100) <= 20)
    {
        Para();
        return;
    }
    SMessage(random("I need to teach you a lesson", "though", "Because this is just the start of your punishment"), -1, 4);
    SMessage("So, let\'s (continue, keep going)", -1, 4);
    return;
    CheckPause();
}
function CheckPause()
{
    SMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while", -1, 4);
    SMessage("enjoy", -1, 4);
    sleep(randomInt(100, 120));
    SMessage("%ThatsEnough%", -1, 4);
    return;
    Para();
}
function Para()
{
    SMessage("%ThatsEnough%", -1, 4);
    run("Interrupt"+seperator+"AV_Cancela.js");
    return;
}