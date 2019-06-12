addResponseIndicator("whatever to please", "whatever you ask", "whatever you tell", "whatever you say", "ll do whatever", "whatever pleases you", "do whatever pleases");
//run("allutils.js");

function iWillDoWhateverResponse(message) {
    DMessage("iWillDoWhatever: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iWillDoWhatever: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Let's take things one step at a time, just %JerkingOff% is fine for now %Smile%");
					found = true;
					break;
				case 2:
					CMessage("Really? Maybe I'll put that to the test %GeneralTime%");
					found = true;
					break;
				case 3:
					CMessage("Easy now, %Name% %Laugh%");
					found = true;
					break;
				case 4:
					answer0=getInput("Oh really... Would you eat your cum for me?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		if(getVar("hasChastity",false) ){
			CMessage("Yes, that's what being in chastity will do to a guy %Laugh%");
		}else{
			CMessage("You just say that because you're desperate to start %JerkingOff% again");
		}
	}
	else if(getVar("cbtCockActive", false)){
		CMessage("Then hurt your %Cock% for me, %Name%");
	}
	else if(getVar("cbtBallActive", false)){
		CMessage("Then hurt your %Balls% for me, %Name%");
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("You better stay on the edge a little longer then");
					addEdgeHoldingTime();
					found = true;
					break;
				case 2:
					addEdgeHoldingTime();
					answer0=getInput("Oh really... Would you eat your cum for me?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_AnythingNoResponse();
					}
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("All I want from you right now is to get to the edge");
					found = true;
					break;
				case 2:
					CMessage("Just edging for me is quite enough for now, %Name%");
					found = true;
					break;
				case 3:
					CMessage("Just edge for me now");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short07.js");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
					found = true;
					break;
				case 4:
					answer0=getInput("Oh really... Would you eat your cum for me?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_AnythingNoResponse();
					}
					found = true;
					break;
				case 5:
					CMessage("Careful what you promise, %Name%... %Grin%");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short07.js");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
					found = true;
					break;
				case 4:
					answer0=getInput("Oh really... Would you eat your cum for me?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_AnythingNoResponse();
					}
					found = true;
					break;
				case 5:
					CMessage("Careful what you promise, %Name%... %Grin%");
					found = true;
					break;
			}
		}
    }
    DMessage("iWillDoWhatever: EndResponse");
    return true;
}