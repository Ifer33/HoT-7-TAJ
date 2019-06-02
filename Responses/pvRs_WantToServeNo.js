addResponseIndicator("pvRs_WantToServeNo");
//run("allutils.js");

function pvRs_WantToServeNoResponse(message) {
    DMessage("pvRs_WantToServeNo: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("pvRs_WantToServeNo: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Not much of a servant then, are you %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Make up your mind, %Name% %EmoteFlustered%");
					found = true;
					break;
			}
		}
    }
    DMessage("pvRs_WantToServeNo: EndResponse");
    return true;
}