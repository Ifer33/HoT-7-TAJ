addResponseIndicator("I want to be abused", "abuse me", "explore me", "want to be used", "use me");
//run("allutils.js");

function abusedResponse(message) {
    DMessage("abused: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("abused: EndResponse Response is Disabled");
        return false;
    }
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short10.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 3:
					CMessage("Maybe you just say that because it\'s a bit difficult to think right now %Grin%");
					found = true;
					break;
				case 4:
					CMessage("At least you\'ve found a way to make yourself useful, %PetName% %Smile%");
					found = true;
					break;
				case 5:
					answer0 = getInput("So, you understand now, %PetName%? How you\'re all mine, to use and abuse as I please?");
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_YesGoodResponse();
					}
					else if (answer0.isLike("no", "nope", "nah", "not"))
					{
						aV_NoBadResponse();
					}
					found = true;
					break;
				case 6:
					CMessage("So, you wanted to be used, huh? Your words, not mine. It is your lucky day, then.");
					found = true;
					break;
				case 7:
					CMessage("%AV_Mem_Used%");
					found = true;
					break;
			}
		}
    DMessage("abused: EndResponse");
    return true;
}