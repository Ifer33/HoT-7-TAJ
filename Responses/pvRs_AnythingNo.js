addResponseIndicator("pvRs_AnythingNo");
//run("allutils.js");

function pvRs_AnythingNoResponse(message) {
    DMessage("pvRs_AnythingNo: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("pvRs_AnythingNo: EndResponse Response is Disabled");
        return false;
    }
    let found = false;
	while(!found){
		let thisRandom = randomInt(1, 4);
		switch (thisRandom){
			case 1:
				CMessage("Not <i>quite</i> anything, then..");
				found = true;
				break;
			case 2:
				CMessage("You've got to be careful what you say, %PetName%");
				found = true;
				break;
			case 3:
				CMessage("You did say anything, %PetName%");
				found = true;
				break;
			case 4:
				CMessage("Then maybe you should be more careful when you say 'anything'...");
				found = true;
				break;
		}
	}
	increaseAnger(3);
    DMessage("pvRs_AnythingNo: EndResponse");
    return true;
}