addResponseIndicator("I can take more", "I can handle more than this", "looking forward", "can't wait", "no problem", "too easy", "can handle", "can take", "can cope", "can endure", "can bear", "know take", "think take", "will bear", "will endure", "can do it", "will do it", "shall take", "shall endure", "shall take", "shall bear", "shall do");
//run("allutils.js");

function can_Handle_zResponse(message) {
    DMessage("can_Handle_z: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("can_Handle_z: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Let's see how you feel after an hour %PetName%");
					found = true;
					break;
				case 2:
					CMessage("It's only going to get harder %PetName%");
					found = true;
					break;
				case 3:
					CMessage("Good, that means I get to be extra rough on you %GeneralTime% %EmoteRandom%");
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
					CMessage("I'm glad we agree on how much abuse that %Cock% can take %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I'll be sure not to hold back on abusing that %Cock% then %EmoteRandom%");
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
					CMessage("Now I think you're just <i>begging</i> me to turn those balls into punching bags %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Oh believe me, I know how much you can take. Just hope it doesn't fall short of what I can give %EmoteRandom%");
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
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Oh so I don't need to let you stop then? Okay %EmoteRandom%");
					//@AddEdgeHoldTime(15)
					found = true;
					break;
				case 2:
					CMessage("Just keep holding it for me then %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Good, use all that determination and keep yourself so fucking close for me");
					found = true;
					break;
				case 4:
					CMessage("Stroke just a little bit harder then, I want it to be almost impossible for you to hold back");
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
					CMessage("Let's see if you're that cocky when you get to the edge %EmoteRandom%");
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
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("I'll stop taking it easy on you then %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I'll just have to make this harder on you then, won't I %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("That just means we haven't found your limits... <i>yet</i>");
					found = true;
					break;
				case 4:
					CMessage("I'm glad you want to be strong for me, but I won't have mercy on you either way %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I'll take that as permission to be as cruel as I want to that %Cock%");
					found = true;
					break;
				case 6:
					CMessage("I would make you keep stroking even if you couldn't take this %EmoteRandom%");
					found = true;
					break;
				case 7:
					CMessage("I bet I can make you handle even way more than you think you can %EmoteRandom%");
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
					CMessage("I'm glad you're strong enough to please me");
					found = true;
					break;
				case 2:
					CMessage("You'll feel whatever I want you to feel either way, I promise");
					found = true;
					break;
				case 3:
					CMessage("It pleases me a lot to hear you say that %SubName%");
					found = true;
					break;
				case 4:
					CMessage("Good, because this doesn't get any easier %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    DMessage("can_Handle_z: EndResponse");
    return true;
}