DMessage("AV_RuinHorny3: start");
main();
DMessage("AV_RuinHorny3: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
	CMessage("I bet you feel that cold chill up your spine every time I tell you to stop %Grin%");
    setVar("AV_RuinHorny", getVar("AV_RuinHorny", 0) + 100);
    CMessage("Wondering if I\'m finally about to make you ruin it");
    CMessage("Wishing I would just go ahead and get it over with");
    CMessage("Because if I\'m not about to make you do it");
    CMessage("What <i>am</i> I about to make you do? %Grin%");
    return;
}