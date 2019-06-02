//addResponseIndicator(getVar("CustomModeTrigger"));
respHandler = Java.type("me.goddragon.teaseai.api.chat.response.ResponseHandler");
resp= Java.type("me.goddragon.teaseai.api.chat.response.Response");
//this.setDisabled(false);
/*if(getVar("CustomModeSet",false) ){
	//registerResponse(new Response("%CustomModeTrigger%") );
	//respHandler.getHandler().registerResponse(new resp(getVar("CustomModeTrigger") ) );
	//this.setDisabled(false);
	//respHandler.getHandler().registerResponse(new resp(this) );
	
	respHandler.getHandler().registerResponse("Responses" + separator + "CustomMode.js" );
}else {
	let mode = getVar("CustomMode",false);
	if(mode!=false ){
		//unregisterResponse(new Response("%CustomModeTrigger%") );
		//this.setDisabled(false);
		respHandler.getHandler().unregisterResponse(new Response(getVar("CustomModeTrigger") ) );
	}
}*/

function customModeResponse(message) {
    DMessage("CustomMode: BeginningResponse");
	//handle customMode "Normal", "Goto", "Video"
	//seems unsafe dont know better
	let mode = getVar("CustomMode", "Normal");
	if( mode == "Normal" ){
		//go on should not happen
		DMessage("CustomMode: Normal");
	}else if( mode == "Goto" ){
		DMessage("CustomMode: edgeMode: Goto: " + getVar("CustomGoto", "error") );
		DMessage("CustomMode: EndResponse");
		return eval(getVar("CustomGoto") );
	}else if( mode == "Video" ){
		if(isPlayingVideo()) {
			stopVideo();
		}
		DMessage("CustomMode: edgeMode: Video: " + getVar("CustomGoto", "error") );
		DMessage("CustomMode: EndResponse");
		return eval(getVar("CustomGoto") );
	}
	
    if (getResponsesDisabled()) {
        DMessage("CustomMode: EndResponse Response is Disabled");
        return false;
    }
    
    DMessage("CustomMode: EndResponse");
    return true;
}