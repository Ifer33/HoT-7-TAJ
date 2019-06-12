DMessage("AV_SpecGlitter3Link1: start");
main();
DMessage("AV_SpecGlitter3Link1: end");
function main()
{
    SMessage("%DomName% have been complaining. You don\'t really follow their instructions, do you?", -1, 4);
    setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_SpecGlitter3Module1.js");
	//setVar("moduletorun", "AV_SpecGlitter3Module1")
    getLocalTeasePicture("Images" + java.io.File.separator + "AV_SpecGlitter3Module1");
    let answer0 = getInput("You just ignore their punishments as you please, is that true?",null,-1,true,4);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?",null,-1,true,4);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Great! I will give you a lesson that you cannot skip...", -1, 4);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("No, you have never skipped a punishment before? Then you wouldn\'t have any problems with my new, unskippable punishment...", -1, 4);
    }
    SMessage("Well, do you want to change that pathetic behaviour, slave?", -1, 4);
    SMessage("%StartStroking%", -1, 4);
    setStrokingNoTaunt();
    return;
}