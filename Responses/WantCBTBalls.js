addResponseIndicator("bust my balls","hurt my balls","want you to bust my balls","want you to hurt my balls");
//run("allutils.js");

function wantCBTBallsResponse(message) {
    DMessage("wantCBTBalls: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantCBTBalls: EndResponse Response is Disabled");
        return false;
    }
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("You\'re such a little pain slut %Laugh%");
					found = true;
					break;
				case 2:
					CMessage("I can't believe you're actually <i>asking</i> me to hurt you %Lol%");
					found = true;
					break;
				case 3:
					CMessage("You <i>want</i> me to bust your %Balls%? That's messed up, %PetName%");
					found = true;
					break;
				case 4:
					CMessage("In a way it diminishes the fun of busting them when you're asking for it");
					found = true;
					break;
				case 5:
					CMessage("In a way it diminishes the fun of busting them when you're asking for it");
					setTempVar("AV_MEM_CBT", true);
					found = true;
					break;
				case 6:
					CMessage("That does sound like fun... %EmoteHappy%");
					run("Interrupt" + java.io.File.separator + "pvIn_CBTBalls.js");
					found = true;
					break;
				case 7:
					CMessage("That does sound like fun... %EmoteHappy%");
					run("Interrupt" + java.io.File.separator + "pvIn_CBTBalls.js");
					found = true;
					break;
				case 8:
					CMessage("That does sound like fun... %EmoteHappy%");
					setTempVar("AV_MEM_CBT", true);
					found = true;
					break;
				case 9:
					if(isStroking()){
						CMessage("That does sound like fun... %EmoteHappy%");
						run("Interrupt" + java.io.File.separator + "pvIn_CBTBalls.js");
						found = true;
					}
					break;
				case 10:
					if(isStroking()){
						CMessage("That does sound like fun... %EmoteHappy%");
						setTempVar("AV_MEM_CBT", true);
						found = true;
					}
					break;
			}
		}
    DMessage("wantCBTBalls: EndResponse");
    return true;
}