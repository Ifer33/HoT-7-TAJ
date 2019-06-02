DMessage("Short26: start");
main();
DMessage("Short26: end");
function main()
{
	if(getVar("Short26_av002",false) ){
		delVar("Short26_av002");
		av002();
		return;
	}
    CMessage("You will always come back for more.");
    CMessage("This is it for you.");
    av002();
}
function av002()
{
    CMessage("Your life has no other meaning.");
    CMessage("Do you really think you\'d be so hard right now if what I am saying weren\'t true?");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("You are fucking worthless!");
    }
    CMessage("Really.");
    return;
}