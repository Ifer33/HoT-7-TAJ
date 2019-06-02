addResponseIndicator("i don't like ruining", "don't enjoy ruining", "i don't like ruined orgasm", "don't enjoy ruined orgasm", "i hate ruining", "hate ruined orgasm");
//run("allutils.js");

function iDontLikeRuiningMyOrgasmResponse(message) {
    DMessage("iDontLikeRuininMyOrgasm: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iDontLikeRuininMyOrgasm: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1,6);
			switch (thisRandom){
				case 1:
					CMessage("I\'d better keep you on the edge a little longer then");
					addEdgeHoldTime();
					found = true;
					break;
				case 2:
					CMessage("Maybe at the end of this edge I\'ll make you ruin it %Grin%");
					addEdgeHoldTime();
					found = true;
					break;
				case 3:
					CMessage("The tension is unbearable isn\'t it %Laugh%");
					addEdgeHoldTime();
					found = true;
					break;
				case 4:
					CMessage("We all have to do things you don\'t like sometimes... %Grin%");
					found = true;
					break;
				case 5:
					CMessage("You don't have to <i>like</i> everything I tell you to do, %PetName%");
					found = true;
					break;
				case 6:
					CMessage("Oh, but if I want it you don\'t really have a choice");
					found = true;
					break;
			}
		}
	}
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("We all have to do things you don\'t like sometimes... %Grin%");
					found = true;
					break;
				case 2:
					CMessage("You don't have to <i>like</i> everything I tell you to do, %PetName%");
					found = true;
					break;
				case 3:
					CMessage("Oh, but if I want it you don\'t really have a choice");
					found = true;
					break;
			}
		}
    }
    DMessage("iDontLikeRuininMyOrgasm: EndResponse");
    return true;
}