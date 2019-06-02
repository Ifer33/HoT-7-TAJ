DMessage("AV_Int_Base05: start");
main();
DMessage("AV_Int_Base05: end");
function main()
{
    CMessage("Femdom, for me, is a way of letting you push your limits");
    setTempVar("AV_IntBase05", true);
    CMessage("and explore sexual stimulation that you would not introduce on your own.");
    CMessage("You might be curious already, and dream of being abused, but to admit it is another step.");
    let answer0 = getInput("Isn\'t that true?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        abusedResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("This is why I introduced Femdom in my own relationship.");
    CMessage("I wanted to please you, and see you in agonising pleasure, and mental \"pain\".");
    CMessage("The line between kink and shame is not always far..");
    return;
}