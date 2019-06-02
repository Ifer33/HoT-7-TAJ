DMessage("AV_Int_Base02: start");
main();
DMessage("AV_Int_Base02: end");
function main()
{
    CMessage("Deep down you know that you deserve to be punished");
    setTempVar("AV_IntBase02", true);
    CMessage("so you may as well get it over with as I am not going to go away.");
    let answer0 = getInput("Don\'t you agree?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        punishResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    return;
}