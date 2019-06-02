//todo i think this should be send by one of the other contacts depends on module before
DMessage("AV_GlitterLink987: start");
main();
DMessage("AV_GlitterLink987: end");
function main()
{
    switch(random("Nip", "Ball"))
    {
        case "Nip":
        Nip();
        return;
        break;
        case "Ball":
        Ball();
        return;
        break;
    }
    Ball();
}
function Ball()
{
    CMessage(random("I want you to pick up the clothepins", "Do you see the pack of clothespins next to you?"));
    CMessage("And put " + randomInt(3, 5) + "them on your balls");
    sleep(20);
    CMessage("shake your balls around a little bit and see if they fall off..");
    setTempVar("AV_GlitBall34", true);
    CMessage("If they do re attach them until its all set and tight");
    //CMessage("%StartStroking%");
    Stroking();
    Nip();
}
function Nip()
{
    CMessage(random("I want you to pick up the 4 clothpins", "Do you see the pack of clothespins next to you?"));
    CMessage("Start massaging your nipples");
    CMessage("Make them hard");
    sleep(10);
    CMessage("now..");
    CMessage("Take 4 clothespins and attach them on your nipples");
    sleep(20);
    CMessage("Good now shake your upper body a little bit and see if they fall off");
    CMessage("if they do re attach them until they dont fall off anymore");
    CMessage("Very nice my little stroker slave");
    CMessage("Lets pitch a tent shall we?");
    CMessage("So how are the clothespins doing?");
    //CMessage("%StartStroking%");
    Stroking();
    return;
}