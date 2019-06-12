DMessage("Kneel: start");
main();
DMessage("Kneel: end");
function main()
{
    if(getVar("AV_SubKnees", false))
    {
        AV_SubKnees();
        return;
    }
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
    CMessage("And you know what else? I think I want my %PetName% on his knees.");
    CMessage("%KneelForMe% in my presence");
    setVar("AV_SubKnees", true);
    return;
    AV_SubKnees();
}
function AV_SubKnees()
{
    return;
}