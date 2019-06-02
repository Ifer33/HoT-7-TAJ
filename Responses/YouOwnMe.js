addResponseIndicator("I am yours", "I'm yours", "Im yours", "you own me", "I belong to you", "you own my cock", "you own this cock", "my cock is your", "this cock is your", "you own my dick", "you own this dick", "my dick is your", "this dick is your");
//run("allutils.js");

function youOwnMeResponse(message) {
    DMessage("youOweMe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("youOweMe: EndResponse Response is Disabled");
        return false;
    }
    let found = false;
	while(!found){
		let thisRandom = randomInt(1, 13);
		switch (thisRandom){
			case 1:
				answer0 = getInput("%Yes%, I own you. That %Cock% is mine, " + random("those hands are ", "this ass is ", "this balls are ") + "mine, and your entire body is mine. Do you understand?",5);
				if (answer0.isLike("yes", "yea", "yep"))
				{
					aV_YesGoodResponse();
				}
				else if (answer0.isLike("no", "nope", "nah", "not"))
				{
					aV_NoBadResponse();
				}
				found=true;
				break;
			case 2:
				CMessage("You're not free. And you never will be.");
				found = true;
				break;
			case 3:
				CMessage("You knew this would happen.");
				found = true;
				break;
			case 4:
				CMessage("%Yes%... No Hope for You.");
				found = true;
				break;
			case 5:
				if(!getVar("AV_TotalControl", false))
				{
					CMessage("Really?");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
				}
				found = true;
				break;
			case 6:
				answer0 = getInput("Really?",5);
				if (answer0.isLike("yes", "yea", "yep"))
				{
					aV_YesGoodResponse();
				}
				else if (answer0.isLike("no", "nope", "nah", "not"))
				{
					aV_NoBadResponse();
				}
				found=true;
				break;
			case 7:
				CMessage("That's right, never forget it, %PetName%");
				found = true;
				break;
			case 8:
				CMessage("I think the truth is starting to sink in by now");
				found = true;
				break;
			case 9:
				CMessage("Owning your %Cock% is just the beginning, %PetName% %Grin%");
				found = true;
				break;
			case 10:
				CMessage("Maybe it was never yours to begin with... %Smile%");
				found = true;
				break;
			case 11:
				CMessage("If I can take your %Cock% so easily, imagine what else I could take from you...");
				found = true;
				break;
			case 12:
				CMessage("Yes I do own your %Cock% and through it I own your mind");
				found = true;
				break;
			case 13:
				CMessage("Mmm yes, but owning that %Cock% is just the beginning, %Name%");
				found = true;
				break;
		}
	}

    DMessage("youOweMe: EndResponse");
    return true;
}