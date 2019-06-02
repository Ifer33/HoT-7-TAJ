DMessage("pvMs_PunishMePlease: Beginning");
main();
DMessage("pvMs_PunishMePlease: End");
function main()
{
    CMessage("Interesting thought, %Name%");
    CMessage("Why should I punish you?");
    sleep(15);
    CMessage("I don\'t see why I should punish you without a good reason");
    if (randomInteger(1, 100) <= 50)
    {
        reason_enough();
        return;
    }
    CMessage("And if you want it, it can\'t really be a punishment anyway %EmoteRandom%");
    return;
    reason_enough();
}
function reason_enough()
{
    CMessage("Although I suppose you interrupting me is reason enough %Laugh%");
    cbt();
    return;
}