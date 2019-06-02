DMessage("AV_Int_Base04: start");
main();
DMessage("AV_Int_Base04: end");
function main()
{
    CMessage("A master is not sexual with her dogs");
    setTempVar("AV_IntBase04", true);
    CMessage("and I will not allow you to be so untrained as to make messes when and where ever you feel like.");
    CMessage("So the only two options you have are");
    CMessage("to be obedient and always keep control like a good dog");
    let answer0 = getInput("I\'m sure you\'d agree to submit to me, right?",6);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        wantToSubmitResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("and I will allow you to prove your obedience to me for as long as you are mine.");
    return;
}