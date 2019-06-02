addResponseIndicator("I'm aching", "I am aching", "ache", "aches", "aching", "achingly", "achy", "achey");
//run("allutils.js");

function imAchingResponse(message) {
    DMessage("imAching: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("imAching: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("If you're aching already, I'm about to have some <i>real</i> fun %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("Not as bad as you're about to be %EmoteLaugh%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short30",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short30.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Good, I want that %Cock% to ache %EmoteLaugh%");
					found = true;
					break;
				case 3:
					CMessage("Even if I let you stop smacking it around, you think that ache's going to get any better? %EmoteLaugh%");
					found = true;
					break;
				case 4:
					answer0 = getInput("Even if I let you stop smacking it around, you think that ache's going to get any better? %EmoteLaugh%",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_001Response();
					}
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short27",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short27.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short28",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short28.js");
						found = true;
					}
					break;
				case 3:
					CMessage("Good, I want those balls to ache");
					found = true;
					break;
				case 4:
					CMessage("Even if you go back to stroking, one way or another those balls are going to ache %EmoteLaugh%");
					found = true;
					break;
				case 5:
					answer0 = getInput("Even if I let you stop smacking it around, you think that ache's going to get any better? %EmoteLaugh%",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_001Response();
					}
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
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Mmmmm keep holding it and make it ache even more");
					addEdgeHoldTime();
					found = true;
					break;
				case 2:
					CMessage("Good stay right there and let the ache drive you crazy");
					addEdgeHoldTime();
					found = true;
					break;
				case 3:
					CMessage("Why do you think I'm keeping you on the edge %EmoteLaugh%");
					addEdgeHoldTime();
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("Good, keep getting closer so you can ache some more %EmoteLaugh%");
					found = true;
					break;
				case 2:
					CMessage("I love finding new ways to make you ache for me.");
					found = true;
					break;
				case 3:
					CMessage("Awww I thought your %Cock% would feel better if I let it get close");
					found = true;
					break;
				case 4:
					CMessage("Not aching enough, get closer");
					found = true;
					break;
				case 5:
					CMessage("Good, I hope every single edge makes the ache even worse %EmoteLaugh%");
					found = true;
					break;
				case 6:
					CMessage("Get closer and I'll show you what ache <i>really</i> is %EmoteLaugh%");
					found = true;
					break;
				case 7:
					CMessage("Just think how much worse it will be when you get close for me %EmoteLaugh%");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 35);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short27",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short27.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short28",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short28.js");
						found = true;
					}
					break;
				case 3:
					if(!getVar("AV_Short30",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short30.js");
						found = true;
					}
					break;
				case 4:
					CMessage("Mmmm");
					//@AddStrokeTime(60)
					addStrokeTime(60);
					found = true;
					break;
				case 5:
					CMessage("I love finding new ways to make you ache for me.");
					found = true;
					break;
				case 6:
					CMessage("Good, I want you to ache %PetName%");
					found = true;
					break;
				case 7:
					CMessage("Mmmm keep stroking and ache even more");
					addStrokeTime(60);
					found = true;
					break;
				case 8:
					CMessage("You can handle it %PetName%, keep stroking");
					found = true;
					break;
				case 9:
					CMessage("I want you aching <i>worse</i>");
					addStrokeTime(60);
					found = true;
					break;
				case 10:
					CMessage("That ache is going to stay with you until I let it leave that %Cock% %EmoteLaugh%");
					addStrokeTime(60);
					found = true;
					break;
				case 11:
					CMessage("I <i>want</i> you to ache for me %EmoteLaugh%");
					found = true;
					break;
				case 12:
					CMessage("Mmmm I love knowing how much agony that %Cock% is in");
					found = true;
					break;
				case 13:
					CMessage("I want you to ache so much more %EmoteLaugh%");
					addStrokeTime(60);
					found = true;
					break;
				case 14:
					CMessage("That's what I'm here for %PetName% %EmoteLaugh%");
					found = true;
					break;
				case 15:
					CMessage("You can never ache too much for me %PetName% %EmoteLaugh%");
					found = true;
					break;
				case 16:
					CMessage("I love knowing how much ache you're suffering for me %EmoteLaugh%");
					found = true;
					break;
				case 17:
					CMessage("That %Cock% was made to ache for me");
					found = true;
					break;
				case 18:
					CMessage("I'm going to fill every last inch of that %Cock% with ache %EmoteLaugh%");
					addStrokeTime(60);
					found = true;
					break;
				case 19:
					CMessage("That ache... is just going to get worse and worse %EmoteLaugh%");
					addStrokeTime(60);
					found = true;
					break;
				case 20:
					CMessage("That just makes me want to tease you even more %EmoteLaugh%");
					addStrokeTime(60);
					found = true;
					break;
				case 21:
					CMessage("You can never ache too much for me %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 22:
					CMessage("That ache... is just going to get worse and worse %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 23:
					CMessage("That's what I'm here for %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 24:
					CMessage("I want you aching <i>worse</i>");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 25:
					CMessage("That ache... is just going to get worse and worse %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 26:
					CMessage("That's what I'm here for %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 27:
					CMessage("I want you aching <i>worse</i>");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 28:
					CMessage("You can never ache too much for me %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 29:
					CMessage("That ache... is just going to get worse and worse %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 30:
					CMessage("That's what I'm here for %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 31:
					CMessage("That %Cock% was made to ache for me");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 32:
					CMessage("I want you aching <i>worse</i> ");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 33:
					CMessage("That ache... is just going to get worse and worse %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 34:
					CMessage("That's what I'm here for %PetName% %EmoteLaugh%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
				case 35:
					CMessage("You can handle it %PetName%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 8);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short27",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short27.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short28",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short28.js");
						found = true;
					}
					break;
				case 3:
					if(!getVar("AV_Short30",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short30.js");
						found = true;
					}
					break;
				case 4:
					CMessage("Just think how much worse it will be when I make you start stroking again %EmoteLaugh%");
					found = true;
					break;
				case 5:
					CMessage("Good, just sit there and let the ache wrap around that %Cock%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 6:
					CMessage("Good, just sit there and let the ache wrap around that %Cock%");
					found = true;
					break;
				case 7:
					CMessage("And you're going to ache even more when I make you start stroking again %EmoteLaugh%");
					found = true;
					break;
				case 8:
					CMessage("I love finding new ways to make you ache for me.");
					found = true;
					break;
			}
		}
    }
    DMessage("imAching: EndResponse");
    return true;
}