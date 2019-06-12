addResponseIndicator("132456671246");
//run("allutils.js");

function aV_SlowStrokeResponse(message) {
    DMessage("aV_SlowStroke: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_SlowStroke: EndResponse Response is Disabled");
        return false;
    }
    else if (isStrokingAll())
    {
        run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Slow_Stroke.js");
    }
    DMessage("aV_SlowStroke: EndResponse");
    return true;
}