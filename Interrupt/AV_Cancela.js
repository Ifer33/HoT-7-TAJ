DMessage("AV_Cancela: start");
main();
DMessage("AV_Cancela: end");
function main()
{
    if(getVar("av_intera_003", false))
    {
        addContact(1);
    }
    if(getVar("av_intera_003", false))
    {
        removeContact(4);
    }
    if(getVar("av_intera_012", false))
    {
        removeContact(4);
    }
    if(getVar("av_intera_008", false))
    {
        removeContact(3);
    }
    return;
}