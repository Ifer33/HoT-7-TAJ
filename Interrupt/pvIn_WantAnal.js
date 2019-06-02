DMessage("pvIn_WantAnal: start");
main();
DMessage("pvIn_WantAnal: end");
function main()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    run("Custom" + java.io.File.separator + "MIssBlue" + java.io.File.separator + "pthev_Mod12AnalPlay.js");
    return;
    return;
}