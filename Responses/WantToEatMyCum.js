addResponseIndicator("want to eat my cum", "want to eat cum", "want to swallow", "let me eat my cum", "let me eat cum", "let me swallow", "make me eat my cum", "make me eat my cum", "make me swallow","lick up my cum","lick up cum");
//run("allutils.js");

function wantToEatMyCumResponse(message) {
    DMessage("wantToEatMyCum: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantToEatMyCum: EndResponse Response is Disabled");
        return false;
    }
	setTempVar("AV_MEM_CEI", true);
    run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_WantToEatMyCum.js");
    DMessage("wantToEatMyCum: EndResponse");
    return true;
}