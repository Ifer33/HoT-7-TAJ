addResponseIndicator("frustrated", "frustrating", "argh", "unbearable", "ahhh");
//run("allutils.js");

function ark_FrustratedResponse(message) {
    DMessage("ark_Frustated: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("ark_Frustated: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("You're getting frustrated already? We've only just started %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("If you're frustrated now I don't know you'll cope later %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("You think this is frustration!? I almost feel sorry for you %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("This is going to be so, so much fun %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I'm going to tease you until it's unbearable %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("I imagine having your %Cock% locked up is a <i>little</i> frustrating, huh? %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Do you feel frustrated? I'm so sorry %SubName%! If I'd known the effect this would have on you I.... would've made you wear one sooner %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Awww, if only you could stroke and play with yourself like I can %Grin%");
					found = true;
					break;
				case 4:
					CMessage("Mmmm, I want you all %SubHorny% with that %Cock% stuck in that little cage %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Is it frustrating you that your %Cock% is locked up whilst my %Pussy% is free for me to touch as much as I want? %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		
	}
	else if(getVar("cbtBallActive", false)){
		
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Mmmm, I bet holding that edge is <i>so</i> incredibly frustrating %PetName%");
					found = true;
					break;
				case 2:
					CMessage("I love how frustrating it must be, having to hold your edge like that %EmoteHappy%");
					found = true;
					break;
				case 3:
					CMessage("Riiiight on the edge. Why would that be frustrating? %Grin%");
					found = true;
					break;
				case 4:
					CMessage("If only I'd let you cum, huh %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Oh %SubName%, you're making me so %DomHorny% %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("I hope all this edging makes you even more frustrated %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Get closer to the edge %PetName%, really feel that frustation %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("I love making you all frustrated like this %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("Get to that edge %PetName%, feel that frustation build %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Awww, is all this edging and stroking getting to you? Tough %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Of course you're frustrated, that's why I make you edge so much %EmoteHappy%");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 17);
			switch (thisRandom){
				case 1:
					if(getMood()>65 ){//badMood?
						answer0 = getInput("Is that stroking a little too much for you?",5);
						if (answer0.isLike("yes", "yea", "yep"))
						{
							aV_SlowStrokeResponse();
						}
						found=true;
					}
					break;
				case 2:
					if(getMood()>65 ){//badMood?
						CMessage("Keep stroking that %Cock% %SubName%, but %StrokeSlower%");
						slowStroking();
						found=true;
					}
					break;
				case 3:
					if(getMood()>65 ){//badMood?
						CMessage("Mmmm... your frustration makes me so %DomHorny%");
						//@AddStrokeTime(60) 
						found=true;
					}
					break;
				case 4:
					if(getMood()>65 ){//badMood?
						CMessage("Is that stroking a little too much for you? %Grin% %StrokeFaster%");
						speedUpStroking(2);
						found=true;
					}
					break;
				case 5:
					if(getMood()>65 ){//badMood?
						CMessage("Keep stroking that %Cock% %SubName%, but %StrokeFaster%");
						speedUpStroking(2);
						found=true;
					}
					break;
				case 6:
					CMessage("Is that stroking a little too much for you? %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Your frustration gives me so much pleasure %SubName% %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("Frustrated? %ICanKeepThisUp%");
					found = true;
					break;
				case 9:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good, feel that frustrating building in those tied up %Balls%");
						found = true;
					}
					break;
				case 10:
					if(getVar("pvBeta",false) ){
						CMessage("Frustration is all you're gonna get, my little beta boy %Smile%");
						found = true;
					}
					break;
				case 11:
					CMessage("Mmmm... your frustration makes me so %DomHorny%");
					found = true;
					break;
				case 12:
					CMessage("Keep stroking that %Cock% %SubName%, I want you all %SubHorny% %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("Your %Cock% had better get used to feeling this %PetName% %Lol%");
					found = true;
					break;
				case 14:
					CMessage("Your %Cock% had better get used to feeling this %PetName% %Lol%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 15:
					CMessage("Your frustration gives me so much pleasure %SubName% %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 16:
					CMessage("Your %Cock% had better get used to feeling this %PetName%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found=true;
					break;
				case 17:
					CMessage("Your frustration gives me so much pleasure %SubName% %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found=true;
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
					CMessage("You're going to be so much more frustrated when I make you stroke again %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("When you're stroking again I'm going to make you so %SubHorny% %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("I'm going to tease you until you can barely take it %PetName% %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("I love the thought of you sitting there getting all %SubHorny% for me %PetName% %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    DMessage("ark_Frustated: EndResponse");
    return true;
}