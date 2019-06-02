DMessage("LinkChYes01: start");
main();
DMessage("LinkChYes01: end");
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
    CMessage("You can feel your %Cock% straining against the confines of its cage");
    CMessage("It may not be as much fun as %JerkingOff%");
    CMessage("But it\'s a lot more frustrating");
    CMessage("And that counts for something in my book %Grin%");
    return;
    torture();
}
function torture()
{
	cbt("ball");
    CMessage("%Grin%");
    CMessage("I love hurting your %Balls% when your %Cock% is locked up");
    return;
}