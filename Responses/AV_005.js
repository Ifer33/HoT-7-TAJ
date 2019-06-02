addResponseIndicator("646464646447333");
//run("allutils.js");

function aV_005Response(message) {
	DMessage("aV_005: BeginnningResponse");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
    DMessage("aV_005: endResponse");
	return;
}