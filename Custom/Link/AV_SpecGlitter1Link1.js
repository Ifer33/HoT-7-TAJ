DMessage("AV_SpecGlitter1Link1: start");
main();
DMessage("AV_SpecGlitter1Link1: end");
function main()
{
    SMessage("well well well what do we have here? A new boy toy?", -1, 2);
    SMessage("It sure looks like it.", -1, 2);
    //setVar("moduletorun", "AV_SpecGlitter1Module1")
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_SpecGlitter1Module1.js");
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_SpecGlitter1Module1");
    SMessage("Lets hope he behaves unlike my last slave.", -1, 2);
    SMessage("Now is the little boy ready for some fun?", -1, 2);
    //SMessage("%StartStroking%", -1, 2);
    setStrokingNoTaunt();
    return;
}