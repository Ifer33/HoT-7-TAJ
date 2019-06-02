DMessage("LinkChNo01: start");
main();
DMessage("LinkChNo01: end");
function main()
{
    if (getVar("ballTorture",false) && randomInteger(1, 100) <= 50)
    {
        torture();
        return;
    }
    CMessage("I suppose not stroking is a form of masturbation too");
    CMessage("You can still watch hot pictures");
    //--Command:ShowLocalImage
	showTeaseImage();
    CMessage("And imagine you\'re there");
    showTaggedImage(4, ["hardcore"]);
    CMessage("You can feel your %Cock% growing harder");
    CMessage("It may not be as much fun as %JerkingOff%");
    CMessage("But it\'s a lot more frustrating");
    CMessage("And that counts for something in my book %Grin%");
    return;
    torture();
}
function torture()
{
    //run("CBT" + java.io.File.separator + "CBTCock_First.js");
	cbt("cock");
    CMessage("%Grin%");
    CMessage("I love just randomly making you hurt your %Cock%");
    //--Command:StartTaunts
    return;
}