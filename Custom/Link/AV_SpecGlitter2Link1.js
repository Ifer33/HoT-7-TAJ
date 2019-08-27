DMessage("AV_SpecGlitter2Link1: start");
main();
DMessage("AV_SpecGlitter2Link1: end");
function main()
{
    SMessage("I suppose you should also know that", -1, 3);
    SMessage("if you don\'t give what I consider to be a satisfactory performance", -1, 3);
    SMessage("further punishment will ensue.", -1, 3);
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_SpecGlitter2Module1.js");
    //setVar("moduletorun", "AV_SpecGlitter2Module1")
    SMessage("So don\'t disrespect me %Slave%.", -1, 3);
    //SMessage("%StartStroking%", -1, 3);
    //setStrokingNoTaunt();
	Stroking(-1,3);
    return;
}