addResponseIndicator("I am so submissive", "I am so submissive today", "I feel so submissive");
//run("allutils.js");

function submissiveResponse(message) {
    DMessage("submissive: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("submissive: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		if(getVar("AV_DommeMistress",false)){
			CMessage("Oh you are, you know you are. And you enjoy it. ");
		}else{
			run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
		}
	}
	else if(getVar("chastityOn", false)){
		if(getVar("AV_DommeMistress",false)){
			CMessage("Oh you are, you know you are. And you enjoy it. ");
		}else{
			run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("I love knowing how much it confuses that submissive little brain of yours %Grin%");
					setTempVar("AV_MEM_Submissive");
					found = true;
					break;
				case 2:
					CMessage(random("I want you","You need")+" to feel "+random("properly owned","very submissive","completely under my control","my control tight around your neck","how tightly I hold your leash"));
					setTempVar("AV_MEM_Submissive");
					found = true;
					break;
				case 4:
					CMessage("A guy like you, submissive as you are... You're practically a slave anyway");
					found = true;
					break;
				case 4:
					if(getVar("AV_DommeMistress",false)){
						CMessage("Oh you are, you know you are. And you enjoy it. ");
						found = true;
					}
					break;
				case 5:
					if(!getVar("AV_DommeMistress",false)){
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		if(getVar("AV_DommeMistress",false)){
			CMessage("Oh you are, you know you are. And you enjoy it. ");
		}else{
			run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
		}
	}
	else if(getVar("holdingedge", false)){
		if(getVar("AV_DommeMistress",false)){
			CMessage("Oh you are, you know you are. And you enjoy it. ");
		}else{
			run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
		}
	}
    else if (isEdging())
    {
        if(getVar("AV_DommeMistress",false)){
			CMessage("Oh you are, you know you are. And you enjoy it. ");
		}else{
			run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
		}
    }
    else {	
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("I love knowing how much it confuses that submissive little brain of yours %Grin%");
					setTempVar("AV_MEM_Submissive");
					found = true;
					break;
				case 2:
					CMessage(random("I want you","You need")+" to feel "+random("properly owned","very submissive","completely under my control","my control tight around your neck","how tightly I hold your leash"));
					setTempVar("AV_MEM_Submissive");
					found = true;
					break;
				case 4:
					CMessage("A guy like you, submissive as you are... You're practically a slave anyway");
					found = true;
					break;
				case 4:
					if(getVar("AV_DommeMistress",false)){
						CMessage("Oh you are, you know you are. And you enjoy it. ");
						found = true;
					}
					break;
				case 5:
					if(!getVar("AV_DommeMistress",false)){
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");
						found = true;
					}
					break;
			}
		}
    }
    DMessage("submissive: EndResponse");
    return true;
}