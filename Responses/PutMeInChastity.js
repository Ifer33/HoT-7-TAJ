addResponseIndicator("cage my","cage me","lock me","put me in chastity","lock up my","put my chastity","want to be in chastity","wish to be in chastity");
//run("allutils.js");

function putMeInChastityResponse(message) {
    DMessage("putMeInChastity: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("putMeInChastity: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Not now %PetName%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Maybe later");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 3:
					if(!getVar("pvMadeKeyholder", false))
					{
						CMessage("Now there\'s an interesting thought... let\'s discuss that later %Smile%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		if(getVar("hasChastity",false) ){
			CMessage("Aren't you already caged %PetName%? You should be...");
		}else{
			CMessage("If you get a device, I'll tell you to put it on");
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Oh, it hurts so much you'd rather have me lock you up... Good! %Grin%");
					addEdgeHoldTime();
					found = true;
					break;
				case 2:
					CMessage("%OhNo% I\'m having way too much fun %Laugh%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Do you think that would make me stop? %Lol%");
					addEdgeHoldTime();
					found = true;
					break;
				case 2:
					CMessage("%OhNo% I\'m having way too much fun with this");
					found = true;
					break;
				case 3:
					answer1 = getInput("You know you\'re aching bad when you\'re asking for chastity %Laugh%",5);
					if (answer1.isLike("yes", "yea", "yep"))
					{
						imAchingResponse();
					}
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        CMessage("That will not save you from this edge %PetName% %Grin%");
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Not now %PetName%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Maybe later");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 3:
					if(!getVar("pvMadeKeyholder", false))
					{
						CMessage("Now there\'s an interesting thought... let\'s discuss that later %Smile%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Not now %PetName%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvMadeKeyholder", false))
					{
						CMessage("Maybe later");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
				case 3:
					if(!getVar("pvMadeKeyholder", false))
					{
						CMessage("Now there\'s an interesting thought... let\'s discuss that later %Smile%");
						setTempVar("pvAskedForChastity", true);
						found = true;
					}
					break;
			}
		}
    }
    DMessage("putMeInChastity: EndResponse");
    return true;
}