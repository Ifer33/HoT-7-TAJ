addResponseIndicator("it hurts","this hurts","i hurt","hurting me","hurts so","im in pain","me in pain","hurts too much","hurts bad","hurts badly","i'm in agony","i am in agony","i'm in pain","lot of pain");
//run("allutils.js");

function ark_It_HurtsResponse(message) {
    DMessage("ark_It_HurtsResponse: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("ark_It_HurtsResponse: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("You're in pain <i>already</i> %PetName%?");
					break;
				case 2:
					CMessage("If you're in pain now just think about how much worse things might be later my %PetName%");
					break;
				case 3:
					CMessage("You'll have to learn to endure more than this %PetName%.");
					break;
				case 4:
					CMessage("Maybe later I'll really %Hurt% you %PetName% %Emote%");
					break;
				case 5:
					CMessage("We only just started! %EmoteRandom%");
					break;
				case 6:
					CMessage("It's only going to get worse %PetName% %EmoteRandom%");
					break;
				case 7:
					CMessage("I think you actually <i>want</i> me to hurt you %PetName%");
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
					CMessage("Does it hurt, with that poor %Cock% all locked up? Awwww");
					found = true;
					break;
				case 2:
					CMessage("That cage looks awfully tight and painful %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Awwww, does it hurt? %Grin%");
					found = true;
					break;
				case 4:
					CMessage("Feel that cage crushing your %Cock% %PetName%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 17);
			switch (thisRandom){
				case 1:
					CMessage("Awwww, does your %Cock% hurt? Guess what... it's meant to %EmoteHappy%");
					found = true;
					break;
				case 2:
					CMessage("Awwww, does it hurt? Guess what... it's meant to %EmoteHappy%");
					found = true;
					break;
				case 3:
					CMessage("Is poor little %SubName% in pain? %Grin%");
					found = true;
					break;
				case 4:
					CMessage("Good, I want your %Cock% to hurt %SubName% ");
					found = true;
					break;
				case 5:
					CMessage("Good, I want your %Cock% to hurt %SubName% ");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 6:
					CMessage("I want to %Hurt% your %Cock% so bad %PetName%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 7:
					CMessage("Feel the pain, %PetName%");
					found = true;
					break;
				case 8:
					CMessage("I love hurting you so, so much %SubName% %EmoteHappy%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 9:
					CMessage("I <i>want</i> it to hurt");
					found = true;
					break;
				case 10:
					CMessage("This is getting me so %DomHorny% %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("Take it %PetName%, hurt that %Cock% like I would if only I were there");
					found = true;
					break;
				case 12:
					CMessage("Hurting your %Cock% is so much fun! For me... %EmoteHappy%");
					found = true;
					break;
				case 13:
					CMessage("I do so love seeing your %Cock% in pain... %EmoteMoan%");
					found = true;
					break;
				case 14:
					CMessage("I only want to %Hurt% that %Cock% a little, I promise %Grin%");
					found = true;
					break;
				case 15:
					CMessage("Come on, I know you like the pain %Grin%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 16:
					answer0= getInput("Don't you like hurting that %Cock% for me? %Grin%",5);
					if (answer0.isLike("no", "not", "nope"))
					{
						aV_001Response();
					}
					found = true;
					break;
				case 17:
					CMessage("I <i>want</i> it to hurt");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 18);
			switch (thisRandom){
				case 1:
					CMessage("Awwww, do your %Balls% hurt? Good, they're meant to %EmoteHappy%");
					found = true;
					break;
				case 2:
					CMessage("Awwww, does it hurt? %Grin%");
					found = true;
					break;
				case 3:
					CMessage("Is poor little %SubName% in pain? %Grin%");
					found = true;
					break;
				case 4:
					CMessage("Good, I want your %Balls% to hurt %SubName%");
					found = true;
					break;
				case 5:
					CMessage("I want to %Hurt% your %Balls% so bad %PetName%");
					found = true;
					break;
				case 6:
					CMessage("Feel the pain deep in your %Balls% %PetName%");
					found = true;
					break;
				case 7:
					CMessage("I love hurting your %Balls% %SubName% %EmoteHappy%");
					found = true;
					break;
				case 8:
					CMessage("I <i>want</i> it to hurt");
					found = true;
					break;
				case 9:
					CMessage("Your pain gets me all %DomHorny% %EmoteRandom%");
					found = true;
					break;
				case 10:
					CMessage("Take it %PetName%, hurt those %Balls% like I would");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
				case 11:
					CMessage("Hurting your %Balls% is so much fun! Maybe not so much for you %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("I love seeing your %Balls% in pain... %EmoteMoan%");
					found = true;
					break;
				case 13:
					CMessage("Relax, I only want to %Hurt% those %Balls% a little bit, I promise %EmoteRandom%");
					found = true;
					break;
				case 14:
					CMessage("Your %Balls% aren't hurting enough for me yet though %EmoteRandom%");
					found = true;
					break;
				case 15:
					CMessage("I think you like the pain %Subname%");
					found = true;
					break;
				case 16:
					CMessage("I want to hurt those %Balls% so much that you start to crave the pain %SubName%");
					found = true;
					break;
				case 17:
					CMessage("Don't you like abusing those %Balls% for me? %Grin%");
					found = true;
					break;
				case 18:
					CMessage("Take it %PetName%, hurt those %Balls% like I would");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Is it painful, holding the edge? %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Ride that edge and hurt for me %PetName%");
					found = true;
					break;
				case 3:
					CMessage("I love making that %Cock% hurt %SubName%");
					found = true;
					found = true;
					break;
				case 4:
					CMessage("I want to make your %Balls% so full they hurt");
					found = true;
					break;
				case 5:
					CMessage("I hope you're in pain %SubName%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Have I made you edge too much, is it painful %Subname%? %Grin%");
					found = true;
					break;
				case 2:
					CMessage("I want to edge you so much it hurts %SubName%");
					found = true;
					break;
				case 3:
					CMessage("Awww, are you in pain %PetName%? Keep going!");
					found = true;
					found = true;
					break;
				case 4:
					CMessage("It's only going to get worse %PetName% %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 18);
			switch (thisRandom){
				case 1:
					CMessage("Sometimes stroking is so intense it can be painful. Is that how you feel %PetName%?");
					found = true;
					break;
				case 2:
					CMessage("I want you stroking so hard it hurts %PetName%");
					found = true;
					break;
				case 3:
					CMessage("Awww, are you in pain %PetName%? Keep going!");
					found = true;
					break;
				case 4:
					CMessage("Seeing your pain turns me on so much %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I'm enjoying this so much %EmoteHappy%");
					found = true;
					break;
				case 6:
					CMessage("I'm afraid it will only get worse for you %PetName%");
					found = true;
					break;
				case 7:
					if (getMood() >= 70){
						CMessage("I want you stroking so hard it hurts %PetName% %StrokeFaster%");
						speedUpStroking(3);
						found = true;
					}
					break;
				case 8:
					if (getMood() >= 70){
						CMessage("I'm afraid it will only get worse for you %PetName% %StrokeFaster%");
						speedUpStroking(3);
						found = true;
					}
					break;
				case 9:
					if (getMood() <= 30){
						CMessage("Since you is a good boy today... %StrokeSlower%");
						slowStroking(3);
						found = true;
					}
					break;
				case 10:
					if (getMood() <= 30){
						CMessage("Since you is a good boy today...");
						slowStroking(3);
						found = true;
					}
					break;
				case 11:
					answer0= getInput("Sometimes stroking is so intense it can be painful. Is that how you feel %PetName%?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_001Response();
					}
					found = true;
					break;
				case 12:
					CMessage("Awww, are you in pain %PetName%? Keep going!");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 13:
					CMessage("I'm afraid it will only get worse for you %PetName%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 14:
					CMessage("Seeing your pain turns me on so much %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 15:
					CMessage("Awww, are you in pain %PetName%? Keep going!");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 16:
					CMessage("I'm afraid it will only get worse for you %PetName%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 17:
					CMessage("Seeing your pain turns me on so much %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 18:
					CMessage("I'm enjoying this so much");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 14);
			switch (thisRandom){
				case 1:
					if(getVar("av_intera_004",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 2:
					if(getVar("av_intera_005",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 3:
					if(getVar("av_intera_006",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 4:
					if(getVar("av_intera_007",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 5:
					if(getVar("av_intera_011",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 6:
					if(getVar("av_intera_003",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen04.js");
						found = true;
					}
					break;
				case 7:
					if(getVar("av_intera_012",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen04.js");
						found = true;
					}
					break;
				case 8:
					if(getVar("av_intera_013",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 9:
					if(getVar("av_intera_015",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
					}
					break;
				case 10:
					if(getVar("av_intera_016",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
					}
					break;
				case 11:
					if(getVar("av_intera_017",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
						found = true;
					}
					break;
				case 12:
					if(getVar("av_intera_018",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
						found = true;
					}
					break;
				case 13:
					if(getVar("av_intera_019",false) ){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_EdgeInter.js");
						found = true;
					}
					break;
				case 14:
					found = true;
					break;
			}
		}
    }
    DMessage("ark_It_HurtsResponse: EndResponse");
    return true;
}