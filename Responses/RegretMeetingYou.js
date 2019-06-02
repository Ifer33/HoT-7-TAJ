addResponseIndicator("regret meeting you","wish I never met","wish we never met","wish I never started","wish I never became","regret becoming");
//run("allutils.js");

function regretMeetingYouResponse(message) {
    DMessage("regretMeetingYou: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("regretMeetingYou: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("Well, it\'s too late for that now, %Name% %Laugh%");
					found = true;
					break;
				case 2:
					CMessage("There\'s no going back now, %Name% %Laugh%");
					found = true;
					break;
				case 3:
					CMessage("You\'re in way too deep now, completely under my spell");
					found = true;
					break;
				case 4:
					CMessage("That\'s not true and you know it %Smile%");
					found = true;
					break;
				case 5:
					CMessage("And yet you\'re still here, aren\'t you? %Smile%");
					found = true;
					break;
				case 6:
					CMessage("You\'re not fooling anyone, you enjoy this just as much as I do");
					CMessage("And probably even more",1);
					found = true;
					break;
			}
		}
    }
    DMessage("regretMeetingYou: EndResponse");
    return true;
}