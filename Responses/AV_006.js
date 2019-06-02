addResponseIndicator("54690755677899987");
//run("allutils.js");

function aV_006Response(message) {
	DMessage("aV_006: BeginnningResponse");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_WantAnal.js");
    DMessage("aV_006: endResponse");
	return;
}