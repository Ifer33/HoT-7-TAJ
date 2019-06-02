addResponseIndicator("love being controlled","love to be controlled","enjoy being controlled","like being controlled","love that you control","like that you control");
//run("allutils.js");

function iLoveBeingControlledResponse(message) {
    DMessage("iLoveBeingControlled: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iLoveBeingControlled: EndResponse Response is Disabled");
        return false;
    }
    let found = false;
	while(!found){
		let thisRandom = randomInt(1, 9);
		switch (thisRandom){
			case 1:
				CMessage("So I have to be honest...I\'ve really been enjoying our arrangement so far.");
				found = true;
				break;
			case 2:
				CMessage("So I have to be honest...I\'ve really been enjoying our arrangement so far.");
				run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
				found = true;
				break;
			case 3:
				CMessage("I know you love it, that\'s why you keep coming back to me %Smile%");
				found = true;
				break;
			case 4:
				CMessage("I know you love it, that\'s why you keep coming back to me %Smile%");
				run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
				found = true;
				break;
			case 5:
				CMessage("I know you love it, that\'s why you keep coming back to me %Smile%");
				found = true;
				break;
			case 6:
				CMessage("So I have to be honest...I\'ve really been enjoying our arrangement so far.");
				found = true;
				break;
			case 7:
				CMessage("And I love controlling you.");
				found = true;
				break;
			case 8:
				CMessage("%AV_Mem_LikeControl%");
				found = true;
				break;
		}
	}
    DMessage("iLoveBeingControlled: EndResponse");
    return true;
}