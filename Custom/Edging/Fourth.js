DMessage("Fourth: start");
main();
DMessage("Fourth: end");
function main()
{
    switch(random("a02", "a03"))
    {
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
    }
    a02();
}
function a02()
{
    CMessage("I think you know how I feel about edging without permission, %PetName%");
    CMessage("Next time <i>ask</i> if you need to edge");
    CMessage("Although of course...");
    CMessage("There\'s no guarantee that I\'ll let you %Laugh%");
    CMessage("At least when you edge without asking, I get to punish you");
	run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    a03();
}
function a03()
{
    CMessage("Since you\'re not going to be good and stay away from the edge %GeneralTime%...");
    CMessage("I might as well make you stay there a while");
    CMessage("%Edge%");
    var amountEdges = 2;
    DoEdges(amountEdges, amountEdges, 0);
    CMessage("%LetTheEdgeFade%");
	holdEdge();
    return;
}