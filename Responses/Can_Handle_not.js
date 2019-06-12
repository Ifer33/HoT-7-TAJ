addResponseIndicator("can't handle", "can't take", "can't make", "can't cope", "can't endure", "can't bear", "don't know take", "don't think take", "don't bear", "don't endure", "don't can", "can't do it", "too much", "won't make", "won't survive", "dying", "exhausted", "drained", "nothing left", "wear out", "worn out", "wearing out", "struggling", "having hard time", "cant handle", "cant take", "cant make", "cant cope", "cant endure", "cant bear", "cant do it");
//run("allutils.js");

function can_Handle_notResponse(message) {
    DMessage("can_Handle_not: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("can_Handle_not: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("But we're only getting started %PetName% %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("It's <i>way</i> too early to start talking like that %PetName% %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("You better find a way, we have a <i>long</i> way to go yet %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("I think your cock can take more for me %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I'm willing to bet that %Cock% is more resilient than you give it credit for %EmoteRandom%");
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
					CMessage("Actually you'd be surprised just how much those balls <i>can</i> take %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I know your balls can't take it, that's why it's so much fun abusing them %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 9);
			switch (thisRandom){
				case 1:
					CMessage("Sure you can take this %PetName%. Just don't think about how close you are right now %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I don't <i>want</i> you to be able to handle being this close %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("You better fight it. I don't want you anywhere else but right on the edge");
					found = true;
					break;
				case 4:
					CMessage("You can handle this. And you will, because I told you to");
					found = true;
					break;
				case 5:
					CMessage("It's %Hot% to hear you say that, %PetName%. Keep edging");
					found = true;
					break;
				case 6:
					CMessage("Perfect! That's exactly what I want %EmoteHappy% Keep going");
					found = true;
					break;
				case 7:
					CMessage("Don't worry, we haven't hit your true limit yet %Grin% Keep going");
					found = true;
					break;
				case 8:
					CMessage("Hearing you say that... pretty much my favorite part %Grin%");
					found = true;
					break;
				case 9:
					CMessage("Sure you can take this %PetName%. %Imagine% me right there with you, forcing you to stay on this edge. That should make it easier to accept that you're not in control %Grin%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Good to know %Grin%");
					found = true;
					break;
				case 2:
					CMessage("Your %Cock% will feel what I want it to feel whether you can handle it or not");
					found = true;
					break;
				case 3:
					CMessage("If you're not struggling yet, you will be once you get to the edge %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("You can do this %PetName%. I know you can %Grin%");
					found = true;
					break;
				case 5:
					CMessage("%Imagine% me right there with you, forcing you to the edge. That should make it easier to accept that you're not in control %Grin%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 12);
			switch (thisRandom){
				case 1:
					CMessage("Really? Cause I was kinda going easy on you %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("But knowing you can't handle it is what makes it so much fun for me %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Trust me %PetName%, you're nowhere near your limits yet");
					found = true;
					break;
				case 4:
					CMessage("Too bad %PetName%, there's no mercy for you here %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Awww if only I had any sympathy for you and that %Cock%");
					found = true;
					break;
				case 6:
					CMessage("Too bad, you'll just have to keep stroking anyway");
					found = true;
					break;
				case 7:
					CMessage("I bet I can make you handle even way more than you think you can %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("I know what I'm doing %PetName%. %DoAsISay%");
					found = true;
					break;
				case 9:
					CMessage("I know your %Cock% better than you do %PetName%. %DoAsISay%");
					found = true;
					break;
				case 10:
					CMessage("You have no idea what your own limits are %PetName%. %DoAsISay%");
					found = true;
					break;
				case 11:
					CMessage("%Imagine% me stroking your %Cock% for you. Does that make it any easier?");
					found = true;
					break;
				case 12:
					CMessage("%Imagine% me tying you down and doing all the work on your %Cock% myself. That should make it easier %Grin%");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        if(getVar("av_intera_001", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
		}
		else if(getVar("av_intera_002", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
		}
		else if(getVar("av_intera_009", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
		}
		else if(getVar("av_intera_010", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
		}
		else if(getVar("av_intera_008", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen03.js");
		}
		else if(getVar("av_intera_013", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
		}
		else if(getVar("av_intera_015", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
		}
		else if(getVar("av_intera_016", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
		}
		else if(getVar("av_intera_017", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
		}
		else if(getVar("av_intera_018", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
		}
		else if(getVar("av_intera_019", false)){
			run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_EdgeInter.js");
		}
    }
    DMessage("can_Handle_not: EndResponse");
    return true;
}