addResponseIndicator("I love you", "I'm in love with you", "I'm falling for you", "stealing my heart", "stolen my heart", "infatuated with you", "I am falling for you", "I am in love with you", "head over heels for you");
//run("allutils.js");

function im_in_Love_with_YouResponse(message) {
    DMessage("im_in_Love_with_You: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("im_in_Love_with_You: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
					found = true;
					break;
				case 4:
					if(!getVar("AV_TempLove",false) ){
						CMessage("Aww...");
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short25.js");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
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
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
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
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
					found = true;
					break;
				case 4:
					if(!getVar("AV_TempLove",false) ){
						CMessage("Aww...");
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short25.js");
						found = true;
					}
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
					CMessage("Of course you are, what\'s not to love? %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Well I <i>am</i> pretty loveable %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("I bet you say that to all the girls that control your %Cock% %EmoteLaugh%");
					found = true;
					break;
				case 4:
					if(!getVar("AV_TempLove",false) ){
						CMessage("Aww...");
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short25.js");
						found = true;
					}
					break;
			}
		}
    }
    DMessage("im_in_Love_with_You: EndResponse");
    return true;
}