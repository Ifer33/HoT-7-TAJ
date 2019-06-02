addResponseIndicator("i like ruining", "enjoy ruining", "prefer ruining", "i like ruined orgasm", "enjoy ruined orgasm", "prefer ruined orgasm");
//run("allutils.js");

function iLikeRuiningMyOrgasmResponse(message) {
    DMessage("iLikeRuininMyOrgasm: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iLikeRuininMyOrgasm: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Really? Who knows, you might get lucky %Laugh%");
					found = true;
					break;
				case 2:
					CMessage("That\'s something we have in common then %Smile%");
					found = true;
					break;
				case 3:
					CMessage("You and me both, %Name%");
					found = true;
					break;
				case 4:
					CMessage("It might happen %GeneralTime%");
					found = true;
					break;
			}
		}
    }
    DMessage("iLikeRuininMyOrgasm: EndResponse");
    return true;
}