//todo i think this should be send by one of the other contacts depends on module before
DMessage("AV_SpecGlitterLinkEnd: start");
main();
DMessage("AV_SpecGlitterLinkEnd: end");
function main()
{
    CMessage("%SubName%");
    CMessage("Looks like %DomName% is almost done");
    CMessage("Lets make sure we keep you " + random("ready ", "horny ", "aching ") + "for her");
    CMessage("And you know what this means");
	setVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_DommeBackModule.js");
    //setVar("moduletorun", "AV_DommeBackModule")
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_DommeBackModule");
    //CMessage("%StartStroking%");
    Stroking();
    return;
}