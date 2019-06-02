addResponseIndicator("132456671246");
//run("allutils.js");

function aV_FastStrokeResponse(message) {
    DMessage("aV_FastStroke: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_FastStroke: EndResponse Response is Disabled");
        return false;
    }
    else if (isStroking())
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_FastStroke.js");
    }
    DMessage("aV_FastStroke: EndResponse");
    return true;
}