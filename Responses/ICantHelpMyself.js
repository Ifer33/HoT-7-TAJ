addResponseIndicator("I am yours", "I'm yours", "Im yours", "you own me", "I belong to you", "you own my cock", "you own this cock", "my cock is your", "this cock is your", "you own my dick", "you own this dick", "my dick is your", "this dick is your");
//run("allutils.js");

function iCantHelpMyselfResponse(message) {
    DMessage("iCantHelpMyself: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("iCantHelpMyself: EndResponse Response is Disabled");
        return false;
    }
	if(isStroking()){
		let answer0 = getInput("Hmmm... does that mean you'll do whatever I tell you to do?",5);
		if (answer0.isLike("yes", "yea", "yep"))
		{
			aV_YesGoodResponse();
		}
	}else
	{
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("You can't resist me, it's as simple as that");
					found = true;
					break;
				case 2:
					CMessage("That's because you are weak and easily controlled, %PetName%");
					found = true;
					break;
				case 3:
					CMessage("You simply don't have a choice but to submit to me again and again");
					found = true;
					break;
				case 4:
					CMessage("It's okay, just give in to that feeling %SubName%");
					found = true;
					break;
				case 5:
					CMessage("That's okay, it's just part of who and what you are %Smile%");
					found = true;
					break;
				case 6:
					CMessage("That's what makes you so easy to control, %PetName%");
					found = true;
					break;
				case 7:
					CMessage("Yes and the truth is, you wouldn't want it any other way %Smile%");
					found = true;
					break;
				case 8:
					CMessage("Helpless, powerless, weak, horny, submissive... "+random("etcetera","all of the above")+" %Smile%");
					found = true;
					break;
				case 9:
					CMessage("That's exactly right, %PetName%");
					found = true;
					break;
				case 10:
					CMessage("At least you understand that much about yourself %Smile%");
					found = true;
					break;
			}
		}
    }
    DMessage("iCantHelpMyself: EndResponse");
    return true;
}