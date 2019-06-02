addResponseIndicator("want to cum so much", "need to cum so much", "got to cum so much", "gotta cum so much", "want to cum so bad", "need to cum so bad", "got to cum so bad", "gotta cum so bad", "cum so much", "cum so bad", "orgasm so much", "orgasm so bad");
//run("allutils.js");

function want_to_Cum_So_BadResponse(message) {
    DMessage("want_to_Cum_So_Bad: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("want_to_Cum_So_Bad: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("But we just started %Lol%");
					found = true;
					break;
				case 2:
					CMessage("You are %Gonna% be <i>so</i> much more desperate than this by the time I'm done with you");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("All the more reason to keep you locked up!");
					found = true;
					break;
				case 2:
					CMessage("Good thing you're in that cage then huh? %Grin%");
					found = true;
					break;
				case 3:
					CMessage("That's what I love about that cage around your %Cock%. It really doesn't matter how bad you need to cum %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Maybe if you let me smack your %Cock% around some more, you won't have to cum so bad %Lol%");
					found = true;
					break;
				case 2:
					CMessage("I'f you're even thinking about cumming, then you aren't smacking that %Cock% hard enough");
					found = true;
					break;
				case 3:
					CMessage("Maybe a little more cock torture will keep your mind off that %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("%EmoteMoan% I love beating your %Balls% around when they get that blue %Grin%");
					found = true;
					break;
				case 2:
					CMessage("Maybe smacking your %Balls% around a bit more will make you feel a little less desperate %Grin%");
					found = true;
					break;
				case 3:
					CMessage("Aww, I think we should punish those %Balls% some more for making you so desperate");
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
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("And every second you spend on the edge is just %Gonna% make it <i>so</i> much worse %Grin%");
					found = true;
					break;
				case 2:
					CMessage("Silly, don't ask me about cumming.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short23.js");
					found = true;
					break;
				case 3:
					CMessage("Good, I love knowing how much you're suffering for me");
					found = true;
					break;
				case 4:
					CMessage("I don't care how bad you want to cum, just stay right up against that edge");
					found = true;
					break;
				case 5:
					CMessage("%EmoteMoan% You just stay right there and let that cum boil for me");
					found = true;
					break;
				case 6:
					CMessage("Don't you dare cum %PetName%, just stay right there on that edge");
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
					CMessage("Just wait til you see how it feels when you get close %Grin%");
					found = true;
					break;
				case 2:
					CMessage("You're %Gonna% want it <i>so</i> much worse when you get close");
					found = true;
					break;
				case 3:
					CMessage("Why do you think I'm making you edge? %Lol%");
					found = true;
					break;
				case 4:
					CMessage("But you are a %PetName% and don't get to relieve your own frustrations");
					found = true;
					break;
				case 5:
					CMessage("Good, get close and keep suffering for me");
					found = true;
					break;
				case 6:
					CMessage("Just make sure you keep that cum inside those %Balls% when you get close for me");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 12);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short29",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short29.js");
						found = true;
					}
					break;
				case 2:
					CMessage("I don't really care if you want to cum. You will do it only when I decide.");
					found = true;
					break;
				case 3:
					CMessage("%Name%, don't be so selfish. Men shouldn't cum so often. So stop talking about that");
					found = true;
					break;
				case 4:
					CMessage("Silly, don't ask me about cumming.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short23.js");
					found = true;
					break;
				case 5:
					CMessage("Listen to me.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short24.js");
					found = true;
					break;
				case 6:
					CMessage("Good, keep stroking so you'll have to cum even worse %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Saying that isn't %Gonna% do anything but make me wet %PetName%");
					found = true;
					break;
				case 8:
					CMessage("%EmoteMoan% I want you to have to cum worse than anything in the world");
					found = true;
					break;
				case 9:
					CMessage("And I'm %Gonna% just keep on making it worse %Grin%");
					found = true;
					break;
				case 10:
					CMessage("Good. Stay desperate and suffer for me %PetName%");
					found = true;
					break;
				case 11:
					CMessage("You know I love it when you're desperate %PetName%");
					found = true;
					break;
				case 12:
					CMessage("But you are a %PetName% and don't get to relieve your own frustrations");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short29",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short29.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Just wait until I make you start stroking again %Grin%");
					found = true;
					break;
				case 3:
					CMessage("It's %Gonna% be so much worse when I make you start start stroking again %Lol%");
					found = true;
					break;
				case 4:
					CMessage("Poor %SubName%, even when I let you stop stroking all you want to do is cum %Lol%");
					found = true;
					break;
				case 5:
					CMessage("I bet you'll have to cum even worse when I make you start stroking again %Lol%");
					found = true;
					break;
			}
		}
    }
    DMessage("want_to_Cum_So_Bad: EndResponse");
    return true;
}