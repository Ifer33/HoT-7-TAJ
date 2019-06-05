DMessage("AV_SpecGlitterLinkGeneral: start");
main();
DMessage("AV_SpecGlitterLinkGeneral: end");
function main()
{
    switch(random("G1", "G2", "G3"))
    {
        case "G1":
        G1();
        return;
        break;
        case "G2":
        G2();
        return;
        break;
        case "G3":
        G3();
        return;
        break;
    }
    G1();
}
function G1()
{
    SMessage("%RelaxAndBreathe%", -1, 2);
    sleep(30);
    SMessage("%StartStroking%", -1, 2);
    setStrokingNoTaunt();
    return;
    G2();
}
function G2()
{
    SMessage("%RelaxAndBreathe%", -1, 3);
    sleep(30);
    SMessage("%StartStroking%", -1, 3);
    setStrokingNoTaunt();
    return;
    G3();
}
function G3()
{
    SMessage("%RelaxAndBreathe%", -1, 4);
    sleep(30);
    SMessage("%StartStroking%", -1, 4);
    setStrokingNoTaunt();
    return;
}