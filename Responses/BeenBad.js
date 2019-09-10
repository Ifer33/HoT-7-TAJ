addResponseIndicator("ve been bad", "ve been a bad","ve been disobedient","ve disobeyed", "i'm a bad", "i am a bad");
//run("allutils.js");

function beenBadResponse(message) {
    DMessage("beenBad: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("beenBad: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_HaveBeenBad.js");
	}
	else if(getVar("chastityOn", false)){
		if(getVar("hasChastity")){
			CMessage("Maybe if you're good I'll let you out of that cage");
		}else{
			CMessage("Maybe if you're good I'll let you %JerkOff% again");
		}
	}
	else if(getVar("cbtCockActive", false)){
		CMessage("That's right %PetName% and that %Cock% is going to pay for it");
		cbt("cock");
	}
	else if(getVar("cbtBallActive", false)){
		CMessage("And when you're bad you end up with sore %Balls% %PetName%");
		cbt("ball");
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Hold that edge you bad %PetName%");
					found = true;
					break;
				case 2:
					CMessage("Then maybe you should keep on the edge a little longer");
					//@AddEdgeHoldTime
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Just fucking get to the edge");
					found = true;
					break;
				case 2:
					CMessage("You need to edge for me now, %Name%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_HaveBeenBad.js");
    }
    else {		//not stroking
        CMessage("I don't want to hear about it right now, %Name%");
    }
    DMessage("beenBad: EndResponse");
    return true;
}