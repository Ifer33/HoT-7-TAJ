DMessage("AV_Kneel_Short: start");
main();
DMessage("AV_Kneel_Short: end");
function main()
{
    if(getVar("AV_SubKnees", false))
    {
        AV_SubKnees();
        return;
    }
    CMessage("You know what? I think I want my pet on his knees.");
    CMessage("%KneelForMe% %PetName%");
    setVar("AV_SubKnees", true);
    CMessage("Stay there till I say to sit");
    return;
    AV_SubKnees();
}
function AV_SubKnees()
{
    CMessage("Just stay on your knees %PetName%");
    return;
}