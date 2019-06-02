addResponseIndicator("don't hurt me","please don't hurt","don't make it hurt","don't make me hurt");
//run("allutils.js");

function dontHurtMeResponse(message) {
    DMessage("dontHurtMe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("dontHurtMe: EndResponse Response is Disabled");
        return false;
    }
	if(isStroking()){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1,8);
			switch (thisRandom){
				case 1:
					CMessage("If I want to hurt you I will, %PetName%");
					found = true;
					break;
				case 2:
					CMessage("Aww... scared of a little pain are we?");
					found = true;
					break;
				case 3:
					CMessage("I love it when you\'re begging me not to hurt you so I can ignore you and do it anyway %Grin%");
					found = true;
					break;
				case 4:
					CMessage("I will make you feel so many different kinds of pain... %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Oh, you know I would never do anything to hurt you, %PetName% %Laugh%");
					found = true;
					break;
				case 6:
					CMessage("You can beg all you want, making you hurt is just too much fun...");
					found = true;
					break;
				case 7:
					CMessage("When you say that, I know you really mean the opposite of what you\'re saying");
					found = true;
					break;
				case 8:
					if(getVar("ballTorture",false) ){
						CMessage("You know, you saying that just made me want to hurt you...");
						cbt("ball");
						found = true;
					}
					break;
			}
		}
	}
    else {		//not stroking//ALL
        let found = false;
		while(!found){
			let thisRandom = randomInt(1,7);
			switch (thisRandom){
				case 1:
					CMessage("If I want to hurt you I will, %PetName%");
					found = true;
					break;
				case 2:
					CMessage("Aww... scared of a little pain are we?");
					found = true;
					break;
				case 3:
					CMessage("I love it when you\'re begging me not to hurt you so I can ignore you and do it anyway %Grin%");
					found = true;
					break;
				case 4:
					CMessage("I will make you feel so many different kinds of pain... %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Oh, you know I would never do anything to hurt you, %PetName% %Laugh%");
					found = true;
					break;
				case 6:
					CMessage("You can beg all you want, making you hurt is just too much fun...");
					found = true;
					break;
				case 7:
					CMessage("When you say that, I know you really mean the opposite of what you\'re saying");
					found = true;
					break;
			}
		}
    }
    DMessage("dontHurtMe: EndResponse");
    return true;
}