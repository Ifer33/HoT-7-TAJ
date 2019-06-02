addResponseIndicator("not addicted to you","not my addiction");
//run("allutils.js");

function imAddictedToYouNotResponse(message) {
    DMessage("imAddictedToYouNot: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("imAddictedToYouNot: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Sooner or later you'll have to admit it, you <i>are</i> addicted to my control");
					found = true;
					break;
				case 2:
					CMessage("Don\'t deny it, %PetName%");
					found = true;
					break;
				case 3:
					CMessage("Don\'t worry, it\'s a good kind of addiction %Smile%");
					found = true;
					break;
				case 4:
					CMessage("Yeah right %Laugh%");
					found = true;
					break;
				case 5:
					CMessage("You\'re not fooling anyone, %Name% %Laugh%");
					found = true;
					break;
				case 6:
					CMessage("Keep telling yourself that, %Name% %Smile%");
					found = true;
					break;
			}
		}
    }
    DMessage("imAddictedToYouNot: EndResponse");
    return true;
}