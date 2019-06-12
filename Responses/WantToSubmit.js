addResponseIndicator("I want to submit", "I want to give you control", "I want to give up control", "I will submit");
//run("allutils.js");

function wantToSubmitResponse(message) {
    DMessage("wantToSubmit: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantToSubmit: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("You can do that by stroking that %Cock% right now, %Name%");
					found = true;
					break;
				case 2:
					answer1 = getInput("Would you do anything I want, %Name%?",5);
					if (answer1.isLike("yes", "yea", "yep"))
					{
						i_Will_Do_AnythingResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_WantToServeNoResponse();
					}
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		CMessage("That's all I ask of you, %Name% %Smile%");
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 1);
			switch (thisRandom){
				case 1:
					CMessage("Good %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("To cum and to submit - two desires that are building so strongly inside you");
					found = true;
					break;
				case 2:
					CMessage("Good %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		CMessage("Good, then stay on the edge for me a little longer");
		addEdgeHoldTime();
	}
    else if (isEdging())
    {
		CMessage("Good, then edge for me %Name%");
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 8);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short37",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short37.js");
						found = true;
					}
					break;
				case 2:
					CMessage("To cum and to submit - two desires that are building so strongly inside you");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 4:
					CMessage("You can do that by stroking that %Cock% right now, %Name%");
					found = true;
					break;
				case 5:
					answer1 = getInput("Would you do anything I want, %Name%?",5);
					if (answer1.isLike("yes", "yea", "yep"))
					{
						i_Will_Do_AnythingResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_WantToServeNoResponse();
					}
					found = true;
					break;
				case 6:
					CMessage("You always want to submit, because it has settled deep inside you");
					setTempVar("AV_MEM_Submit", true);
					found = true;
					break;
				case 7:
					CMessage("You willingly submit yourself to my every whim...hmmm");
					found = true;
					break;
				case 8:
					CMessage("So...you're serious about submitting to me");
					setTempVar("AV_MEM_Submit", true);
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short37",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short37.js");
						found = true;
					}
					break;
				case 2:
					CMessage("submitting it's building so strongly inside you");
					found = true;
					break;
				case 3:
					CMessage("Good, because that's all I ask of you %Name%");
					if(randomInt(1,100)<50 ){
						CMessage("Well, that and a few more things %Grin%",1);
					}
					found = true;
					break;
				case 4:
					answer1 = getInput("Would you do anything I want, %Name%?",5);
					if (answer1.isLike("yes", "yea", "yep"))
					{
						i_Will_Do_AnythingResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_WantToServeNoResponse();
					}
					found = true;
					break;
			}
		}
    }
    DMessage("wantToSubmit: EndResponse");
    return true;
}