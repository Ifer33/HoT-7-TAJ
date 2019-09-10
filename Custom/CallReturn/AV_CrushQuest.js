DMessage("AV_WantCrush: Start");
main();
DMessage("AV_WantCrush: End");
function main()
{
    CMessage(random("I can see the appeal, I mean they are hot", "Wouldn\'t you just love for someone to help you out?"));
    CMessage("If you " + random("are a good boy ", "make me happy ") + "...");
    setTempVar("AV_MEM_Crush", true);
    CMessage("I can help " + random("you ", "with that ") + "later...");
    return;
}