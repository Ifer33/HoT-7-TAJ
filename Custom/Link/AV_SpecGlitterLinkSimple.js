//todo i think this should be send by one of the other contacts depends on module before
DMessage("AV_SpecGlitterLinkSimple: start");
main();
DMessage("AV_SpecGlitterLinkSimple: end");
function main()
{
    CMessage("Lets make sure we keep you " + random("ready ", "horny ", "aching ") + "for %DomName%");
    CMessage("And you know what this means");
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_DommeBackModule.js");
    //setVar("moduletorun", "AV_DommeBackModule")
    //CMessage("%StartStroking%");
    Stroking();
    return;
}