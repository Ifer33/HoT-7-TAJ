addResponseIndicator("I want to serve", "I want to obey", "let me serve", "let me obey", "I want to serve you", "I want to obey you");
//run("allutils.js");

function wantToServeResponse(message) {
    DMessage("wantToServe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantToServe: EndResponse Response is Disabled");
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
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Good %Grin%");
					found = true;
					break;
				case 2:
					CMessage("%AV_Mem_Serve%");
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
					CMessage("So, you wanted to be serve me, huh? Your words, not mine. It is your lucky day, then.");
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
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short06",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
						found = true;
					}
					break;
				case 2:
					CMessage("So, you wanted to be serve me, huh? Your words, not mine. It is your lucky day, then.");
					found = true;
					break;
				case 3:
					CMessage("%AV_Mem_Serve%");
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
					CMessage("That's good. You were born for this.");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 20);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short06",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short07",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short07.js");
						found = true;
					}
					break;
				case 3:
					if(!getVar("AV_Short08",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
						found = true;
					}
					break;
				case 4:
					if(!getVar("AV_Short09",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short09.js");
						found = true;
					}
					break;
				case 5:
					if(!getVar("AV_Short11",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short11.js");
						found = true;
					}
					break;
				case 6:
					if(!getVar("AV_Short12",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short12.js");
						found = true;
					}
					break;
				case 7:
					if(!getVar("AV_Short13",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short13.js");
						found = true;
					}
					break;
				case 8:
					CMessage("So, you wanted to be serve me, huh? Your words, not mine. It is your lucky day, then.");
					found = true;
					break;
				case 9:
					CMessage("That's good. You were born for this.");
					found = true;
					break;
				case 10:
					CMessage("Good, because that\'s all I ask of you %Name%");
					if(randomInt(1,100)<50){
						CMessage("Well,that and a few more things %Grin%");
					}
					found = true;
					break;
				case 11:
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
				case 12:
					CMessage("Good, because that\'s all I ask of you %Name%");
					if(randomInt(1,100)<50){
						CMessage("Well,that and a few more things %Grin%");
					}
					found = true;
					break;
				case 13:
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
				case 14:
					CMessage("%AV_Mem_Serve%");
					found = true;
					break;
			}
		}
    }
    DMessage("wantToServe: EndResponse");
    return true;
}