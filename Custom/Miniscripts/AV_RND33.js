DMessage("AV_RND33: start");
main();
DMessage("AV_RND33: end");
function main()
{
    setTempVar("AV_0RND33", true);
    addContact(4);
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        AV_Rough();
        return;
    }
    SMessage("Hey %DomName%, just wanted to check how is %SubName% ache...", -1, 4);
    CMessage("%Lol%");
    SMessage("Keep jerking your cock til you cant take it anymore %SubName%.", -1, 4);
    SMessage("Keep watching and stroking again and again...", -1, 4);
    SMessage("til your dick is sore from being jerked again and again.", -1, 4);
    removeContact(4);
    return;
    AV_Rough();
}
function AV_Rough()
{
    SMessage("Hey %DomName%, just wanted to check how is %SubName% ache...", -1, 4);
    CMessage("%Lol%");
    SMessage("You just love touching yourself.", -1, 4);
    SMessage("You love playing with that pathetic cock of yours.", -1, 4);
    SMessage("It\'s the only thing that truly brings you pleasure.", -1, 4);
    SMessage("You can't stop, you can't stop pumping yourself while being degraded by hot girls.",-1,4);
    SMessage("It\'s an endless cycle.", -1, 4);
    SMessage("And this is it for you.", -1, 4);
    removeContact(4);
    return;
}