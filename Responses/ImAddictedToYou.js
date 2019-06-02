addResponseIndicator("addicted to you","my addiction");
//run("allutils.js");

function imAddictedToYouResponse(message) {
    DMessage("imAddictedToYou: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("imAddictedToYou: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("That\'s good, %PetName%");
					found = true;
					break;
				case 2:
					CMessage("It\'s that addiction that drives that %Cock% of yours");
					found = true;
					break;
				case 3:
					CMessage("I\'m the right kind of addiction %Grin%");
					found = true;
					break;
				case 4:
					answer0 = getInput("You\'re addicted to being controlled, aren\'t you?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						iLoveBeingControlledResponse();
					}
					found = true;
					break;
				case 5:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short18.js");
					found = true;
					break;
				case 6:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short26.js");
					found = true;
					break;
			}
		}
    }
    DMessage("imAddictedToYou: EndResponse");
    return true;
}