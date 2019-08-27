addResponseIndicator("I'm not your bitch","I am not your bitch");
//run("allutils.js");

function iAmNotYourBitchResponse(message) {
    DMessage("iAmNotYourBitch: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iAmNotYourBitch: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					found=true;
					CMessage("I beg to differ, bitch");
					break;
				case 2:
					CMessage("Sounds like someone\'s in denial %Lol%");
					found = true;
					break;
				case 3:
					CMessage("Oh but you <i>are</i> my bitch %Smile%");
					found = true;
					break;
			}
		}
    } 
    DMessage("iAmNotYourBitch: EndResponse");
    return true;
}